import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Invitación a mi fiesta",
  description: "¡Te invito a celebrar conmigo!",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="bg-pallete-1">
      <body
        className={`flex justify-center bg-pallete-1`}
      >
        {children}
      </body>
    </html>
  );
}
