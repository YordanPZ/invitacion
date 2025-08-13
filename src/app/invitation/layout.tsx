import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Invitación a mi fiesta",
  description: "¡Te invito a celebrar conmigo!",
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
