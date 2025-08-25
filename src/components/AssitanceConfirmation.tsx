import React from "react";
import ModalComponent from "./ModalComponent";
import { DialogTitle } from "./ui/dialog";
import LineDecoration from "./svg/LineDecoration";
import DecorativeDivider from "../components/ui/DecorativeDivider";
import { Button } from "./ui/button";
import AssistanceConfirmModal from "./modals/AssistanceConfirmModal";
import Music from "./svg/Music";
import AddEventButton from "./ui/AddEventButton";
import SuggestSongModal from "./modals/SuggestSongModal";

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
          <h2 className="text-[#655b59]   text-[60px]">Tiziana</h2>
          <div className=" border-solid border-[#c3b5a8] border-b  mt-3 w-[60%]"></div>
          <h3 className="text-[#655b59]  text-[20px] ">MIS 15 AÑOS</h3>
        </div>

        <div className=" h-[40vh] min-h-[35vh] min-w-[45vh] bg-pallete-5 flex flex-col sm:items-end items-center justify-center ">
          {/* Nombre del boton */}
          <div className="">

            <AssistanceConfirmModal bottomClassName="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900 w-fit flex sm:justify-end" variant={'ghost' as any} />

          </div>
          <div>

            <SuggestSongModal nombreDelBoton="Sugerir cancion" bottomClassName="text-pallete-2 text-center mt-2 text-[20px] w-fit flex items-center justify-center hover:text-pallete-1 transition-all duration-900 flex sm:justify-end" variant={'ghost' as any} />

          </div>
          <div>
            <AddEventButton style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '18px',
              textDecoration: 'none',
              width: "100%",
              border: 'none',
              fontFamily: "sans-serif",
              color: "#d2b89f",
              marginTop: "8px"


            }} />
          </div>
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
