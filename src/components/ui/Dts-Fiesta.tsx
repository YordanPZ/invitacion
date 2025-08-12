import Link from "next/link";
import DecoratedSection from "./DecoratedSection";

export default function DtsFiesta() {
  return (
    <div>
      <div className="flex justify-center ">
        <svg
          width="300"
          height="24"
          viewBox="0 0 300 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="separator"
        >
          {/* Left line */}
          <path
            d="M20,12 L-200,12"
            stroke="rgba(210, 184, 159, 0.5)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="draw-line left-line"
          />

          {/* Left circle */}
          <circle cx="30" cy="12" r="3" fill="#d2b89f" className="pulse" />

          {/* Center decorative elements */}
          <path
            d="M150,12 C150,12 140,2 130,2 C120,2 120,22 130,22 C140,22 150,12 150,12Z"
            stroke="#d2b89f"
            strokeWidth="1.5"
            fill="none"
            className="draw-path center-path-1"
          />
          <path
            d="M150,12 C150,12 160,2 170,2 C180,2 180,22 170,22 C160,22 150,12 150,12Z"
            stroke="#d2b89f"
            strokeWidth="1.5"
            fill="none"
            className="draw-path center-path-2"
          />

          {/* Right circle */}
          <circle cx="280" cy="12" r="3" fill="#d2b89f" className="pulse" />

          {/* Right line */}
          <path
            d="M400,12 L280,12"
            stroke="rgba(210, 184, 159, 0.5)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="draw-line right-line"
          />
        </svg>
      </div>

      {/*contenido de la seccion*/}
      <h2 className="text-[#655b59] font-serif text-4xl text-center mt-6">
        Un recorrido de estos 15 años
      </h2>
      <p className="text-[#8c755e] font-serif text-[17px] text-center mt-1">
        Junto a personas que son muy importantes en mi vida
      </p>
      <div className="flex justify-evenly mt-6 flex-wrap gap-4">
        <DecoratedSection className="max-w-[350px] min-h-[500px]">
          <div className="flex border border-pallete-2 justify-between items-center flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
            <h2 className="text-[#655b59] font-serif text-2xl ">Música</h2>
            <img src="/confeti.png" className="w-24 h-24" />
            <p>
              ¿Cuál es la canción que no debe faltar en la PlayList de la
              fiesta?
            </p>
            <Link
              href="/"
              className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-full flex items-center justify-center"
            >
              Sugerir canción
            </Link>
          </div>
        </DecoratedSection>

        <DecoratedSection className="max-w-[350px]">
          <div className="flex border border-pallete-2 items-center justify-between flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
            <h2 className="text-[#655b59] font-serif text-2xl">Dress Code</h2>
            <img src="/confeti.png" className="w-24 h-24" />
            <p>Una orientación para tu vestuario</p>
            <Link
              href="/"
              className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-full flex items-center justify-center"
            >
              Ver más
            </Link>
          </div>
        </DecoratedSection>
        <DecoratedSection className="max-w-[350px]">
          <div className="flex border border-pallete-2 justify-between items-center flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
            <h2 className="text-[#655b59] font-serif text-2xl">Tips y Notas</h2>
            <img src="/confeti.png" className="w-24 h-24" />
            <p>Información adicional para tener en cuenta</p>
            <Link
              href="/"
              className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-full flex items-center justify-center"
            >
              + Info
            </Link>
          </div>
        </DecoratedSection>
      </div>
    </div>
  );
}
