import React from "react";
import { CardDecoration } from "./svg/CardDecoration";
import Image from "next/image";
import { AdornoModalMusica } from "./svg/AdornoModalMusica";


function HeaderInvitacion() {
  return (
    <section className="flex flex-col md:flex-row mx-auto my-0 w-full z-10 md:max-h-[85vh]">
      <div className="w-full md:w-1/2 max-h-[50vh] md:max-h-full">
        <Image
          priority
          height={800}
          width={800}
          src="/portada.webp"
          className="object-cover w-full h-full z-0"
          alt=""
        />
      </div>
      <div className="p-6 bg-pallete-6 w-full md:w-1/2 shadow-[-2px_0_10px_5px_rgba(0,0,0,0.2)] md:min-w-[420px]">
        <div className="h-full w-full  p-5 relative py-22">
          <CardDecoration className="size-16 sm:size-20 md:size-24 top-0 left-0" />
          <CardDecoration className="size-16 sm:size-20 md:size-24 right-0 top-0 -scale-x-100" />
          <CardDecoration className="size-16 sm:size-20 md:size-24 bottom-0 left-0 -scale-y-100" />
          <CardDecoration className="size-16 sm:size-20 md:size-24 bottom-0 right-0 -scale-x-100 -scale-y-100" />

          <div className="flex items-center justify-center flex-col ">
            <h2 className="text-pallete-2 text-[20px]">13.09.2025</h2>
            <div className=" border-solid border-[#c3b5a8] border-b  mt-5 w-[60%]"></div>
            <h1 className="text-[40px] text-pallete-2 mt-2">XV</h1>
            <h2 className="text-pallete-1 font-serif text-7xl">Tiziana</h2>
            <div className=" border-solid border-[#c3b5a8] border-b  mt-5 w-[60%]"></div>
            <h3 className="text-pallete-1 font-bold text-[20px] mt-4">
              MIS 15 AÑOS
            </h3>
            <p className="text-pallete-1 font-playfair text-[18px] mt-5 text-center">
              Te espero para compartir la alegría de esa noche que será para mi
              mágica, inolvidable y única.
            </p>
            <div className="mt-5">
            <AdornoModalMusica/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderInvitacion;
