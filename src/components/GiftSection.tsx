import Image from "next/image";
import Link from "next/link";
import React from "react";
import DecorativeDivider from "../components/ui/DecorativeDivider";
import Infinite from "./svg/Infinite";
import { Button } from "./ui/button";

function GiftSection() {
  return (
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
        <Image
          src="/regalo.png"
          height={100}
          width={100}
          alt="regalo"
          className="w-15 h-15 mt-2 bg-transparent animate-bounce"
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button className="text-white text-center text-[20px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[200px] flex items-center justify-center">
          Numero de CBU
        </Button>
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
