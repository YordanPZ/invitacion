import Link from "next/link";
import DecoratedSection from "./DecoratedSection";
import ModalComponent from "../ModalComponent";
import { DialogTitle } from "@radix-ui/react-dialog";
import LineDecoration from "../svg/LineDecoration";
import Image from "next/image";
import { Button } from "./button";

export default function DtsFiesta() {
  return (
    <section className="min-h-[90vh] bg-pallete-6 w-full flex flex-col justify-center sombra_arriba_abajo pb-4 px-2">
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
      <h2 className="text-pallete-1 font-playfair text-4xl text-center mt-6">
        Un recorrido de estos 15 años
      </h2>
      <p className="text-[#8c755e] font-playfair text-[17px] text-center mt-1">
        Junto a personas que son muy importantes en mi vida
      </p>
      <div className="flex justify-evenly mt-6 flex-wrap gap-4">
        <DecoratedSection className="max-w-[350px] min-h-[500px] text-pallete-1">
          <div className="flex border border-pallete-2 justify-between items-center flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
            <h2 className="text-[#655b59] font-playfair text-2xl ">Música</h2>
            <Image
              height={100}
              width={100}
              alt="confite"
              src="/confeti.png"
              className="w-24 h-24"
            />
            <p className="text-center text-pallete-1">
              ¿Cuál es la canción que no debe faltar en la PlayList de la
              fiesta?
            </p>
            <ModalComponent nombreDelBoton="Sugerir cancion">
              <div className="flex flex-col justify-center items-center w-full">
                {/* Contenido del modal (MANTENER EL DIALOGTILE) */}
                <Image
                  alt="auricular"
                  src="/auricular.png"
                  className="w-24 h-24 py-2"
                  height={50}
                  width={50}
                />
                <DialogTitle className="text-pallete-2 font-playfair text-[25px]">
                  Sugerir cancion
                </DialogTitle>
                <LineDecoration />
                <div className="flex gap-10 mt-6 "></div>
                <div className="flex flex-col justify-center items-center w-full">
                  <label className="mt-6 w-full text-[18px] ">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full text-center text-pallete-1"
                    />
                  </label>
                  <div className=" border-solid border-[#c3b5a8] border-b  mt-2 w-full"></div>
                  <label className="mt-6 w-full text-[18px] ">
                    <input
                      type="text"
                      placeholder="Nombre de cancion y autor"
                      className="w-full text-center text-pallete-1"
                    />
                  </label>
                  <div className=" border-solid border-[#c3b5a8] border-b  mt-2  w-full"></div>
                  <label className="mt-6 w-full text-[18px] ">
                    <input
                      type="text"
                      placeholder="Si lo desea ingresa un link de youtube,spotify, etc."
                      className="w-full text-center text-pallete-1"
                    />
                  </label>
                  <div className=" border-solid border-[#c3b5a8] border-b  mt-2  w-full"></div>
                </div>
                <Button className="text-white text-center text-[20px] mt-8 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[60%] flex items-center justify-center">
                  Enviar
                </Button>
              </div>
            </ModalComponent>
          </div>
        </DecoratedSection>
      
        <DecoratedSection className="max-w-[350px] min-h-[500px] text-pallete-1"> 
          <div className="flex border border-pallete-2 items-center justify-between flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
          
            <h2 className="text-[#655b59] font-playfair text-2xl">Dress Code</h2>
            <Image
              height={100}
              width={100}
              alt="corbata"
              src="/corbata.png"
              className="w-24 h-24"/>
            <p className="text-center text-pallete-1">Una orientación para tu vestuario</p>

            <ModalComponent nombreDelBoton="Ver más">
            <div className="flex flex-col justify-center items-center gap-6 font-playfair">
            <h2 className="text-[#655b59] text-2xl">Dress Code</h2>
            <Image
              height={100}
              width={100}
              alt="corbata"
              src="/corbata.png"
              className="w-24 h-24"/>
            <h2 className="text-pallete-3 font-serif text-2xl">Dress Code</h2>
            </div>
            <LineDecoration />
            <p className="text-center text-[18px] text-pallete-1 my-5">Elegante / Formal</p>
            </ModalComponent>

          </div>
        </DecoratedSection>
      
        <DecoratedSection className="max-w-[350px] min-h-[500px] text-pallete-1">
          <div className="flex border border-pallete-2 justify-between items-center flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
            <h2 className="text-[#655b59] font-playfair text-2xl">Tips y Notas</h2>
            <Image
              height={100}
              width={100}
              alt="libreta"
              src="/libreta.png"
              className="w-24 h-24"
            />
            <p className="w-[65%] text-center text-pallete-1">Tips importantes para la fiesta</p>
           
            <ModalComponent nombreDelBoton="+ Info" >
        <div className="flex flex-col justify-center items-center gap-6 font-playfair">
            <h2 className="text-[#655b59] text-2xl">Tips y Notas</h2>
            <Image
              height={100}
              width={100}
              alt="libreta"
              src="/libreta.png"
              className="w-24 h-24"
            />
            <div className="text-center">
              <p className="text-lg  mb-2 text-pallete-1">Por favor ser puntual</p>
            </div>
        </div>
            <LineDecoration />
            <p className="text-center text-[18px] text-pallete-1 my-5">Por favor ser puntual</p>
            </ModalComponent>

          </div>
        </DecoratedSection>
      </div>
    </section>
  );
}
