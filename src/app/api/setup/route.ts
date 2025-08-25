import { NextResponse } from 'next/server'
import { setupSheet } from '@/actions/assistance'

export async function GET() {
  try {
    await setupSheet()
    return NextResponse.json({ ok: true, message: 'Hoja configurada correctamente' })
  } catch (error: any) {
    console.error('Error en setup de Google Sheets', error)
    return NextResponse.json({ ok: false, error: error?.message ?? 'Error al configurar la hoja' }, { status: 500 })
  }
}