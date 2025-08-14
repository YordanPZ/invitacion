import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "XV Años de Tiziana - 13/09/2025",
  description: "¡Te invito a celebrar mis XV años! Salón Zaita - Acceso Isla Jordán",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main
      suppressHydrationWarning
      className={`flex justify-center items-center bg-pallete-1 `}
    >
      {children}
    </main>
  );
}
