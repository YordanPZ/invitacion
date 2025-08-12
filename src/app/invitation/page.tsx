"use client";
import DecorativeDivider from "../../components/ui/DecorativeDivider";
import CountdownTimer from "../../components/CountdownTimer";
import { CardDecoration } from "@/components/svg/CardDecoration";
import Image from "next/image";
import DecorativeFrame from "@/components/ui/DecorativeFrame";
import DecoratedSection from "@/components/ui/DecoratedSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import Link from "next/link";
import DtsFiesta from "@/components/ui/Dts-Fiesta";
import Infinite from "@/components/svg/Infinite";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ModalComponent from "@/components/ModalComponent";
export default function Page() {
  return (
    //contenedor principal
    <div className=" flex flex-col items-center flex-wrap justify-center  w-full m-auto max-w-[1200px]">
      {/*contenedor de la portada*/}

      <section className="flex flex-col md:flex-row mx-auto my-0 w-full z-10 md:max-h-[85vh]">
        <div className="w-full md:w-1/2 max-h-[50vh] md:max-h-full">
          <Image
            height={800}
            width={800}
            src="/portada.webp"
            className="object-cover w-full h-full z-0"
            alt=""
          />
        </div>
        <div className="p-6 bg-pallete-6 w-full md:w-1/2 shadow-[-2px_0_10px_5px_rgba(0,0,0,0.2)] md:min-w-[420px]">
          <div className="h-full w-full  p-5 z-10 relative py-22">
            {/* <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-0 left-0" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-0 right-0 rotate-90" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-[520px] left-0 -scale-y-100" alt="" />
                  <img src="/free-png.ru-387.png" className="w-24 h-24 absolute top-[520px] right-0 -scale-y-100 rotate-265" alt="" /> */}

            <CardDecoration className="size-16 sm:size-20 md:size-24 top-0 left-0" />
            <CardDecoration className="size-16 sm:size-20 md:size-24 right-0 top-0 -scale-x-100" />
            <CardDecoration className="size-16 sm:size-20 md:size-24 bottom-0 left-0 -scale-y-100" />
            <CardDecoration className="size-16 sm:size-20 md:size-24 bottom-0 right-0 -scale-x-100 -scale-y-100" />

            <div className="flex items-center justify-center flex-col ">
              <h2 className="text-pallete-2 text-[20px]">18.11.2022</h2>
              <div className=" border-solid border-[#c3b5a8] border-b  mt-5 w-[60%]"></div>
              <h1 className="text-[40px] text-[#d2b89f] mt-2">XV</h1>
              <h2 className="text-[#655b59] font-serif text-7xl">Florencia</h2>
              <div className=" border-solid border-[#c3b5a8] border-b  mt-5 w-[60%]"></div>
              <h3 className="text-[#655b59] font-bold text-[20px] mt-4">
                MIS 15 AÑOS
              </h3>
              {/* <img src="/gota-de-agua.png" className="w-3 h-6 mt-11 bg-transparent" alt="" /> */}
              <p className="text-[#655b59] font-serif text-[18px] mt-5 text-center">
                Te espero para compartir la alegría de esa noche que será para
                mi mágica, inolvidable y única.
              </p>
              {/* <img src="/vector.png" className="w-24 h-24 mt-5 bg-transparent" alt="" /> */}
            </div>
          </div>
        </div>
      </section>

      {/*contenedor de reloj*/}
      <section className="flex flex-col bg-pallete-5 w-full mx-auto py-5 z-10  sombra_arriba_abajo">
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
        <div className="pb-4">
          <h2 className="text-pallete-1 text-5xl text-center font-bold mt-6 font-playfair-display">
            Falta
          </h2>
          <CountdownTimer />
          <div className="flex items-center justify-center">
            <Image
              width={200}
              height={200}
              src="/me-gusta.png"
              className="w-8 h-8 mt-2 bg-transparent animate-heartbeat"
              alt="Me gusta"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
      </section>

      {/*contenedor de los datos de la fiesta */}
      <section className="w-full flex justify-center bg-pallete-6 items-center py-27  flex-col px-2">
        <DecoratedSection>
          <DecorativeFrame />
        </DecoratedSection>
      </section>

      {/*contenedor de carruzel*/}
      <section className="flex flex-col items-center justify-center bg-pallete-5 sombra_arriba_abajo w-full shadow-[0_-8px_15px_-5px_rgba(0,0,0,0.4)]">
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 pt-4 w-full ">
          <DecorativeDivider className="" />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
        <PhotoGallerySection />
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 w-full py-6 ">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
      </section>

      {/*contenedor de datos de la fiesta*/}
      <section className="min-h-[90vh] bg-pallete-6 w-full flex flex-col justify-center sombra_arriba_abajo pb-4 px-2">
        <DtsFiesta />
      </section>

      {/*contenedor de regalos*/}
      <section className="min-h-[70vh] bg-pallete-5 w-full flex flex-col sombra_arriba_abajo">
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 w-full py-6">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>

        <div className="flex items-center justify-center mt-20">
          <Infinite />
        </div>
        <div>
          <h2 className="text-[#655b59] font-serif text-5xl text-center mt-6">
            Regalos
          </h2>
          <p className="text-pallete-3  font-serif text-[23px] text-center mt-1">
            Si deseas regalarme algo más que tu hermosa presencia...
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <img
            src="/regalo.png"
            alt="regalo"
            className="w-15 h-15 mt-2 bg-transparent animate-bounce"
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link
            href="/"
            className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[200px] flex items-center justify-center"
          >
            Numero de CBU
          </Link>
        </div>
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 w-full py-6 mb-1 mt-14">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
      </section>

      {/*contenedor de mensaje final*/}
      <section className="min-h-[84vh] bg-pallete-6 w-full flex flex-col sombra_arriba_abajo pb-4">
        <div className="flex items-center justify-center mt-20">
          <Infinite />
        </div>

        <div>
          <h2 className="text-[#655b59] font-serif text-4xl text-center mt-6">
            Una gran Fiesta junto a vos
          </h2>
          <p className="text-pallete-2  font-serif text-[18px] text-center mt-1">
            Compartí tus fotos y videos de ese hermoso día
          </p>
        </div>

        <div className="flex items-center justify-center mt-10">
          <img
            src="/instagram.png"
            alt="instagram"
            className="w-15 h-15 mt-2 bg-transparent animate-bounce"
          />
        </div>

        <div className=" relative flex items-center justify-center mt-10 ">
          <div className="h-[60px] w-[190px] bg-pallete-5 rounded-[4px] absolute"></div>
          <div className="h-[90px] w-[160px] bg-pallete-5 rounded-[4px] absolute"></div>
          <h2 className="text-pallete-2  text-5xl text-center mt-1 z-10">
            #15flor
          </h2>
        </div>

        <div className="flex items-center justify-center mt-18">
          <Link
            href="https://www.instagram.com/explore/search/keyword/?q=%2315flor"
            target="_blank"
            className="text-white text-center text-[17px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[250px] flex items-center justify-center"
          >
            Ver en Instagram
          </Link>
        </div>
      </section>

      {/*contenedor de confirmacion de asistencia*/}
      <section className="min-h-[55vh] bg-pallete-5 w-full flex flex-col sombra_arriba_abajo">
        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 w-full py-6 ">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>

        <div className="flex flex-wrap items-center justify-center ">
          <div className="w-[50%] min-h-[35vh] min-w-[45vh] bg-pallete-5 flex flex-col items-center justify-center">
            <div className=" border-solid border-[#c3b5a8] border-b  mt-5 w-[60%]"></div>
            <h1 className="text-[50px] text-[#d2b89f] mt-2">XV</h1>
            <h2 className="text-[#655b59] font-serif text-[60px]">Florencia</h2>
            <div className=" border-solid border-[#c3b5a8] border-b  mt-3 w-[60%]"></div>
            <h3 className="text-[#655b59]  text-[20px] ">MIS 15 AÑOS</h3>
          </div>

          <div className=" h-[40vh] min-h-[35vh] min-w-[45vh] bg-pallete-5 flex flex-col sm:items-end items-center justify-center ">








            {/* Nombre del boton */}
            <ModalComponent nombreDelBoton="Sugerir cancion">

              {/* Contenido del modal (MANTENER EL DIALOGTILE) */}
              <DialogTitle className="text-[#655b59] font-serif text-2xl">
                Dress Code
              </DialogTitle>
              <img src="/confeti.png" className="w-24 h-24" />
              <p>Una orientación para tu vestuario</p>
              <Link
                href="/"
                className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-full flex items-center justify-center"
              >
                Ver más
              </Link>


            </ModalComponent>






            <Link
              href="/"
              className="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900"
            >
              Sugerir canción
            </Link>

            <Link
              href="/"
              className="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900"
            >
              Agendar fiesta
            </Link>
          </div>
        </div>

        <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 w-full py-6 ">
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
          <DecorativeDivider />
        </div>
        <footer className="bg-[#d3af9b] w-full h-[20vh] text-amber-50 sombra_arriba_abajo flex items-center justify-center">
          todos los derechos reservados | &copy; 2025
        </footer>
      </section>
    </div>
  );
}
