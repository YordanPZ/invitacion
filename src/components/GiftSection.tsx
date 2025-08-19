import Image from "next/image";
import React from "react";
import DecorativeDivider from "../components/ui/DecorativeDivider";
import Infinite from "./svg/Infinite";
import ModalComponent from "./ModalComponent";
import CopiComponent from "./CopiComponent";

function GiftSection() {
  return (
    <section className="min-h-[70vh] max-h-[600px] bg-pallete-6 w-full flex flex-col sombra_arriba_abajo justify-center items-center ">
    

      <div className="flex items-center justify-center">
        <Infinite />
      </div>
      <div>
        <h2 className="text-pallete-1 text-5xl text-center mt-6">
          Regalos
        </h2>
        <p className="text-pallete-3    text-[23px] text-center mt-5">
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
        <h2 className="text-pallete-1   text-5xl text-center mt-6">
          Regalos
        </h2>
        <p className="text-pallete-3    text-[15px] text-center mt-1">
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
      <div className="flex flex-col gap-2 text-center my-5">
        <p className="text-pallete-4 text-xl font-medium">
          CBU y Alias
        </p>
        <div className="flex items-center justify-center gap-2">
          <p className="text-pallete-4 text-lg">
            <span className="font-semibold">Alias:</span> tizi.spiritosi
          </p>
           <CopiComponent text='tizi.spiritosi' />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-pallete-4 text-lg">
            <span className="font-semibold">CVU:</span> 0000003100096619076411
          </p>
          <CopiComponent text='0000003100096619076411' />
        </div>
      </div>
          </ModalComponent>
        
      </div>
   
    </section>
  );
}

export default GiftSection;
