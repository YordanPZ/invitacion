import Image from "next/image";
import Link from "next/link";
import React from "react";
import Infinite from "./svg/Infinite";

function FinalMessage() {
  return (
    <section className="min-h-[80vh]  bg-pallete-6 w-full flex flex-col sombra_arriba_abajo pb-4">
      <div className="flex items-center justify-center mt-20">
        <Infinite />
      </div>
      <div>
        <h2 className="text-[#655b59] font-playfair text-4xl text-center mt-6">
          Una gran Fiesta junto a vos
        </h2>
        <p className="text-pallete-2  font-playfair text-[18px] text-center mt-1">
          Compartí tus fotos y videos de ese hermoso día
        </p>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Image
          height={100}
          width={100}
          src="/instagram.png"
          alt="instagram"
          className="w-15 h-15 mt-2 bg-transparent animate-bounce"
        />
      </div>

      <div className=" relative flex items-center justify-center mt-10 ">
        <div className="h-[60px] w-[190px] bg-pallete-5 rounded-[4px] absolute"></div>
        <div className="h-[90px] w-[160px] bg-pallete-5 rounded-[4px] absolute"></div>
        <h2 className="text-pallete-2  text-5xl text-center mt-1 z-10">
          #15tizi
        </h2>
      </div>

      <div className="flex items-center justify-center mt-18">
        <Link
          href="https://www.instagram.com/explore/search/keyword/?q=%2315tizi"
          target="_blank"
          className="text-white text-center text-[17px] mt-2 hover:bg-[#8c755e] transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[250px] flex items-center justify-center"
        >
          Ver en Instagram
        </Link>
      </div>
    </section>
  );
}

export default FinalMessage;
