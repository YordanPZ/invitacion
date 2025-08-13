import { AdornoModalMusica } from "@/components/svg/AdornoModalMusica";
import { CardDecoration } from "@/components/svg/CardDecoration";
import Link from "next/link";

export default function Page() {
  return (
    <section className="items-center justify-items-center">
      <div className="min-h-screen min-w-screen flex items-center justify-center bg-pallete-6 w-full">
        <div className="relative flex flex-col items-center p-4 py-15 sm:p-6 md:p-8 pb-8 lg:px-10 max-w-4xl w-full">
          <CardDecoration className="size-16 sm:size-20 md:size-24 top-0 left-0" />
          <CardDecoration className="size-16 sm:size-20 md:size-24 right-0 top-0 -scale-x-100" />
          <CardDecoration className="size-16 sm:size-20 md:size-24 bottom-0 left-0 -scale-y-100" />
          <CardDecoration className="size-16 sm:size-20 md:size-24 bottom-0 right-0 -scale-x-100 -scale-y-100" />
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-playfair-display text-pallete-4 text-center">
            Bienvenidos a la invitación de
          </h2>

          <div className="border-solid border-pallete-2 border-b mt-3 sm:mt-4 md:mt-5 w-[75%]" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-pallete-2 mt-4 sm:mt-5 md:mt-7">
            XV
          </h1>
          <h2 className="text-pallete-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair-display text-center">
            Tiziana
          </h2>
          <div className="border-solid border-pallete-2 border-b mt-3 sm:mt-4 md:mt-5 w-[75%]" />

          <h3 className="text-pallete-1 font-medium text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4 text-center">
            MIS 15 AÑOS
          </h3>

          <AdornoModalMusica />
          <h3 className="text-[#7c7a74] text-center mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl px-4">
            La musica de fondo es parte de la experiencia
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center mt-4 sm:mt-6 w-full">
            <Link
              href="/invitation"
              className="text-white text-center text-base sm:text-lg md:text-xl hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[45px] sm:h-[50px] w-[80%] sm:w-[220px] md:w-[240px] flex items-center justify-center px-4"
            >
              Ingresar con musica
            </Link>
            <Link
              href="/invitation"
              className="text-white text-center text-base sm:text-lg md:text-xl hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[45px] sm:h-[50px] w-[80%] sm:w-[220px] md:w-[240px] flex items-center justify-center px-4"
            >
              Ingresar sin musica
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
