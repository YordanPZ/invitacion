import Image from "next/image";
import React from "react";
import DecorativeDivider from "../components/ui/DecorativeDivider";
import Infinite from "./svg/Infinite";
import ModalComponent from "./ModalComponent";

function GiftSection() {
  return (
    <section className="min-h-[70vh] max-h-[600px] bg-pallete-5 w-full flex flex-col sombra_arriba_abajo justify-center items-center ">
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
        <h2 className="text-pallete-1 font-serif text-5xl text-center mt-6">
          Regalos
        </h2>
        <p className="text-pallete-3  font-serif text-[23px] text-center mt-1">
          Si deseas regalarme algo más que tu hermosa presencia...
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Image
          src="/regalo.png"
          height={100}
          width={100}
          alt="regalo"
          className="w-15 h-15 mt-2 bg-transparent animate-bounce"
        />
      </div>
      <div className="flex items-center justify-center mt-10">
       
          <ModalComponent nombreDelBoton="Numero de CBU" >
          <div className="flex flex-col items-center justify-center my-10 gap-5">
        <h2 className="text-pallete-1 font-serif text-5xl text-center mt-6">
          Regalos
        </h2>
        <p className="text-pallete-3  font-serif text-[15px] text-center mt-1">
          Si deseas regalarme algo más que tu hermosa presencia...
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <Image
          src="/regalo.png"
          height={100}
          width={100}
          alt="regalo"
          className="w-15 h-15 mt-2 bg-transparent animate-bounce"
        />
      </div>
      <p className="text-pallete-4 font-serif text-[20px] text-center my-5">
      CBU y Alias: tizi.spiritosi (alias) 
      0000003100096619076411 (cvu)
        </p>
          </ModalComponent>
        
      </div>
      <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 w-full py-6 mb-1 mt-14">
        <DecorativeDivider />
        <DecorativeDivider />
        <DecorativeDivider />
        <DecorativeDivider />
        <DecorativeDivider />
      </div>
    </section>
  );
}

export default GiftSection;
