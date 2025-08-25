"use server";

import { google } from "googleapis";

export type AssistanceRow = {
  asistencia: string;
  nombre: string;
  detalle?: string;
  created: string; // ISO string
};

export type ActionState = {
  ok: boolean;
  message?: string;
  error?: string;
  rowNumber?: number; // fila donde se guardó la asistencia
};

function getSheetsClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

function getSpreadsheetIdOrThrow() {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    throw new Error("Falta GOOGLE_SHEET_ID en las variables de entorno");
  }
  return spreadsheetId;
}

function getSheetName(): string | undefined {
  return process.env.GOOGLE_SHEET_NAME?.trim() || undefined;
}

function parseRowFromUpdatedRange(updatedRange?: string | null): number | undefined {
  if (!updatedRange) return undefined;
  // Posibles formatos: 'Hoja 1'!A5:D5, Sheet1!A5:D5 o A5:D5
  const afterBang = updatedRange.includes("!") ? updatedRange.split("!")[1] : updatedRange;
  if (!afterBang) return undefined;
  const startCell = afterBang.split(":")[0]; // A5
  const match = startCell.match(/[A-Za-z]+(\d+)/);
  if (!match) return undefined;
  const row = Number(match[1]);
  return Number.isFinite(row) ? row : undefined;
}

async function ensureHeaderRow() {
  const sheets = getSheetsClient();
  const spreadsheetId = getSpreadsheetIdOrThrow();
  const sheetName = getSheetName();
  const range = sheetName ? `'${sheetName}'!A1:E1` : 'A1:E1';

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        majorDimension: 'ROWS',
        values: [[
          'Tipo',
          'Asistencia / Nombre sugeridor',
          'Nombre / Canción-autor',
          'Detalle / Link',
          'Fecha',
        ]],
      },
    });
  } catch (e) {
    console.warn('No se pudo asegurar la fila de encabezados, se continuará con el append', e);
  }
}

export async function addRowToSheet(data: AssistanceRow): Promise<number | undefined> {
  await ensureHeaderRow();
  const sheets = getSheetsClient();
  const spreadsheetId = getSpreadsheetIdOrThrow();
  const sheetName = getSheetName();
  const range = sheetName ? `'${sheetName}'!A:E` : "A:E"; // A: Tipo, B: Asistencia, C: Nombre, D: Detalle, E: Fecha

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        majorDimension: "ROWS",
        values: [["CONFIRMACION", data.asistencia, data.nombre, data.detalle ?? "", data.created]],
      },
    });

    const rowNumber = parseRowFromUpdatedRange(res.data.updates?.updatedRange);
    return rowNumber;
  } catch (err: any) {
    console.error("Fallo al hacer append en Sheets", {
      spreadsheetId,
      sheetName,
      range,
      err: err?.errors ?? err?.message ?? err,
    });
    throw err;
  }
}

export async function submitAssistance(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const asistencia = String(formData.get("Asistencia") ?? "");
    const nombre = String(formData.get("Nombre") ?? "");
    const detalleInvitados = String(formData.get("Detalle") ?? "").trim();
    const detalleTexto = String(formData.get("DetalleTexto") ?? "").trim();

    if (!nombre) {
      return { ok: false, error: "El nombre es requerido" };
    }

    const created = new Date().toISOString();

    // Combinar detalles
    let detalle: string | undefined = undefined;
    if (detalleInvitados && detalleTexto) {
      detalle = `Invitados: ${detalleInvitados}. Detalle: ${detalleTexto}`;
    } else if (detalleInvitados) {
      detalle = `Invitados: ${detalleInvitados}`;
    } else if (detalleTexto) {
      detalle = detalleTexto;
    }

    // Siempre agregar una nueva fila (sin actualizar filas previas)
    const rowNumber = await addRowToSheet({ asistencia, nombre, detalle, created });

    return { ok: true, message: "¡Gracias! Tu confirmación fue enviada.", rowNumber };
  } catch (error) {
    console.error("Error al agregar fila a Google Sheets", error);
    return {
      ok: false,
      error: "Ocurrió un error al enviar tu confirmación. Intenta nuevamente.",
    };
  }
}

// ====== Sugerir canción en la MISMA fila (columnas F:I) ======
export type SongSuggestion = {
  rowNumber: number; // fila a actualizar
  nombreSugeridor: string;
  cancionAutor: string;
  link?: string;
  created: string; // ISO string
};

export async function updateSongSuggestion(data: SongSuggestion) {
  const sheets = getSheetsClient();
  const spreadsheetId = getSpreadsheetIdOrThrow();
  const sheetName = getSheetName();

  const row = data.rowNumber;
  const rangeBase = `F${row}:I${row}`; // F: Nombre sugeridor, G: Canción/Autor, H: Link, I: Fecha sugerencia
  const range = sheetName ? `'${sheetName}'!${rangeBase}` : rangeBase;

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        majorDimension: "ROWS",
        values: [[
          data.nombreSugeridor,
          data.cancionAutor,
          data.link ?? "",
          data.created,
        ]],
      },
    });
  } catch (err: any) {
    console.error("Fallo al actualizar sugerencia en Sheets", {
      spreadsheetId,
      sheetName,
      range,
      err: err?.errors ?? err?.message ?? err,
    });
    throw err;
  }
}

// Nuevo: permitir agregar sugerencia aunque no haya fila de asistencia (append en F:I)
export async function appendSongSuggestion({
  nombreSugeridor,
  cancionAutor,
  link,
  created,
}: {
  nombreSugeridor: string;
  cancionAutor: string;
  link?: string;
  created: string;
}): Promise<number | undefined> {
  await ensureHeaderRow();
  const sheets = getSheetsClient();
  const spreadsheetId = getSpreadsheetIdOrThrow();
  const sheetName = getSheetName();
  const range = sheetName ? `'${sheetName}'!A:E` : "A:E"; // A: Tipo, B: Sugeridor, C: Canción/Autor, D: Link, E: Fecha

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        majorDimension: "ROWS",
        values: [["SUGERENCIA", nombreSugeridor, cancionAutor, link ?? "", created]],
      },
    });
    const rowNumber = parseRowFromUpdatedRange(res.data.updates?.updatedRange);
    return rowNumber;
  } catch (err: any) {
    console.error("Fallo al hacer append de sugerencia en Sheets", {
      spreadsheetId,
      sheetName,
      range,
      err: err?.errors ?? err?.message ?? err,
    });
    throw err;
  }
}

export async function submitSongSuggestion(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const nombreSugeridor = String(formData.get("SuggestNombre") ?? "").trim();
    const cancionAutor = String(formData.get("SuggestCancionAutor") ?? "").trim();
    const link = String(formData.get("SuggestLink") ?? "").trim();

    if (!cancionAutor) {
      return { ok: false, error: "Por favor ingresa el nombre de la canción y autor." };
    }

    const created = new Date().toISOString();

    // Siempre agregar una nueva fila (sin actualizar filas previas)
    const newRow = await appendSongSuggestion({ nombreSugeridor, cancionAutor, link, created });
    return { ok: true, message: "¡Gracias! Tu sugerencia fue enviada.", rowNumber: newRow };
  } catch (error) {
    console.error("Error al enviar sugerencia de canción", error);
    return {
      ok: false,
      error: "Ocurrió un error al enviar tu sugerencia. Intenta nuevamente.",
    };
  }
}

export async function updateAssistanceAtRow({
  rowNumber,
  asistencia,
  nombre,
  detalle,
  created,
}: {
  rowNumber: number;
  asistencia: string;
  nombre: string;
  detalle?: string;
  created: string;
}) {
  const sheets = getSheetsClient();
  const spreadsheetId = getSpreadsheetIdOrThrow();
  const sheetName = getSheetName();

  const rangeBase = `A${rowNumber}:D${rowNumber}`;
  const range = sheetName ? `'${sheetName}'!${rangeBase}` : rangeBase;

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        majorDimension: "ROWS",
        values: [[asistencia, nombre, detalle ?? "", created]],
      },
    });
  } catch (err: any) {
    console.error("Fallo al actualizar asistencia en Sheets", {
      spreadsheetId,
      sheetName,
      range,
      err: err?.errors ?? err?.message ?? err,
    });
    throw err;
  }
}

// Helper para obtener sheetId dado el nombre de hoja (o la primera hoja si no hay nombre)
async function getSheetId(sheetsApi: ReturnType<typeof getSheetsClient>, spreadsheetId: string, sheetName?: string): Promise<number> {
  const meta = await sheetsApi.spreadsheets.get({ spreadsheetId });
  const sheets = meta.data.sheets;
  if (!sheets || sheets.length === 0) throw new Error("El spreadsheet no tiene hojas");
  if (sheetName) {
    const found = sheets.find((s) => s.properties?.title === sheetName);
    if (!found?.properties?.sheetId) throw new Error(`No se encontró la hoja con título: ${sheetName}`);
    return found.properties.sheetId;
  }
  const first = sheets[0];
  if (!first.properties?.sheetId) throw new Error("No se pudo determinar el sheetId de la primera hoja");
  return first.properties.sheetId;
}

// Configura la hoja con dos tablas paralelas y formato/validación
export async function setupSheet() {
  const sheetsApi = getSheetsClient();
  const spreadsheetId = getSpreadsheetIdOrThrow();
  const sheetName = getSheetName();
  const sheetId = await getSheetId(sheetsApi, spreadsheetId, sheetName);

  // Requests de batchUpdate para formato, banding, congelar encabezado, auto-resize, validación y formatos
  const requests: any[] = [];

  // 1) Escribir encabezados en A1:E1 (una sola tabla)
  requests.push({
    updateCells: {
      range: { sheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: 5 },
      rows: [
        {
          values: [
            { userEnteredValue: { stringValue: "Tipo" } },
            { userEnteredValue: { stringValue: "Asistencia / Nombre sugeridor" } },
            { userEnteredValue: { stringValue: "Nombre / Canción-autor" } },
            { userEnteredValue: { stringValue: "Detalle / Link" } },
            { userEnteredValue: { stringValue: "Fecha" } },
          ],
        },
      ],
      fields: "userEnteredValue",
    },
  });

  // 2) Congelar fila 1
  requests.push({
    updateSheetProperties: {
      properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
      fields: "gridProperties.frozenRowCount",
    },
  });

  // 3) Estilo de encabezados (negrita + fondo suave) para A1:E1
  const headerFormat = {
    userEnteredFormat: {
      textFormat: { bold: true },
      backgroundColor: { red: 0.96, green: 0.94, blue: 0.9 },
    },
  };
  requests.push({
    repeatCell: {
      range: { sheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: 5 },
      cell: headerFormat,
      fields: "userEnteredFormat.textFormat.bold,userEnteredFormat.backgroundColor",
    },
  });

  // 4) Autoajustar ancho de columnas A:E
  requests.push({
    autoResizeDimensions: {
      dimensions: { sheetId, dimension: "COLUMNS", startIndex: 0, endIndex: 5 },
    },
  });

  // 5) Banding alternado en A2:E
  const headerColor = { red: 0.95, green: 0.93, blue: 0.88 };
  const firstBandColor = { red: 0.99, green: 0.98, blue: 0.96 };
  const secondBandColor = { red: 0.97, green: 0.96, blue: 0.94 };
  requests.push({
    addBanding: {
      bandedRange: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 5 },
        rowProperties: {
          headerColor,
          firstBandColor,
          secondBandColor,
        },
      },
    },
  });

  // 6) Validación de datos en A2:A (CONFIRMACION/SUGERENCIA)
  requests.push({
    setDataValidation: {
      range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 1 },
      rule: {
        condition: {
          type: "ONE_OF_LIST",
          values: [
            { userEnteredValue: "CONFIRMACION" },
            { userEnteredValue: "SUGERENCIA" },
          ],
        },
        inputMessage: "Seleccione CONFIRMACION o SUGERENCIA",
        strict: true,
        showCustomUi: true,
      },
    },
  });

  // 7) Formato de fecha para columna E
  const dateFormatCell = { userEnteredFormat: { numberFormat: { type: "DATE_TIME", pattern: "yyyy-mm-dd hh:mm" } } };
  requests.push({
    repeatCell: {
      range: { sheetId, startColumnIndex: 4, endColumnIndex: 5 }, // Columna E
      cell: dateFormatCell,
      fields: "userEnteredFormat.numberFormat",
    },
  });

  // Ejecutar batchUpdate
  await sheetsApi.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests },
  });
}
