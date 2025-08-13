import Link from "next/link";
import React from "react";
import ModalComponent from "./ModalComponent";
import { DialogTitle } from "./ui/dialog";
import LineDecoration from "./svg/LineDecoration";
import DecorativeDivider from "../components/ui/DecorativeDivider";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AssistanceConfirmModal from "./modals/AssistanceConfirmModal";

function AssitanceConfirmation() {
  return (
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
        <AssistanceConfirmModal bottomClassName="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900 w-fit flex sm:justify-end" variant={'ghost' as any} />
          <ModalComponent nombreDelBoton="Sugerir cancion" bottomClassName="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900 flex sm:justify-end" variant={'ghost' as any} >
            <div className="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900"> 
              <div className="flex flex-col justify-center items-center w-full">
                {/* Contenido del modal (MANTENER EL DIALOGTILE) */}
                <Image
                  alt="auricular"
                  src="/auricular.png"
                  className="w-24 h-24 py-2"
                  height={50}
                  width={50}
                />
                <DialogTitle className="text-pallete-2 font-serif text-[25px]">
                  Sugerir cancion
                </DialogTitle>
                <LineDecoration />
                <div className="flex gap-10 mt-6 "></div>
                <div className="flex flex-col justify-center items-center w-full">
                  <label className="mt-6 w-full text-[18px] ">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full text-center text-black"
                    />
                  </label>
                  <div className=" border-solid border-[#c3b5a8] border-b  mt-2 w-full"></div>
                  <label className="mt-6 w-full text-[18px] ">
                    <input
                      type="text"
                      placeholder="Nombre de cancion y autor"
                      className="w-full text-center text-black"
                    />
                  </label>
                  <div className=" border-solid border-[#c3b5a8] border-b  mt-2  w-full"></div>
                  <label className="mt-6 w-full text-[18px] ">
                    <input
                      type="text"
                      placeholder="Si lo desea ingresa un link de youtube,spotify, etc."
                      className="w-full text-center text-black"
                    />
                  </label>
                  <div className=" border-solid border-[#c3b5a8] border-b  mt-2  w-full"></div>
                </div>
                  <Button className="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900" variant={'ghost'}>
                  Enviar
                </Button>
              </div>
            </div>
          </ModalComponent>
          <Button className="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900" variant={'ghost' as any} >
            Agendar fiesta
          </Button>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 w-full py-6 ">
        <DecorativeDivider />
        <DecorativeDivider />
        <DecorativeDivider />
        <DecorativeDivider />
        <DecorativeDivider />
      </div>
    </section>
  );
}

export default AssitanceConfirmation;
