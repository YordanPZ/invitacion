"use client";

import { useState, useEffect } from "react";
import { CardCarousel } from "./ui/card-carousel";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/portada.webp",
    alt: "Foto 1",
    title: "Recuerdos Especiales",
    description: "Momentos inolvidables juntos",
  },
  {
    id: 2,
    src: "/portada.webp",
    alt: "Foto 2",
    title: "Celebración",
    description: "Disfrutando cada instante",
  },
  {
    id: 3,
    src: "/portada.webp",
    alt: "Foto 3",
    title: "Felicidad",
    description: "Sonrisas que iluminan el día",
  },
  {
    id: 4,
    src: "/portada.webp",
    alt: "Foto 4",
    title: "Aventuras",
    description: "Cada día es una nueva historia",
  },
  {
    id: 5,
    src: "/portada.webp",
    alt: "Foto 5",
    title: "Amor",
    description: "La mejor compañía",
  },
];

export default function PhotoCarousel() {
  return (
    <div className="relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[5%] md:before:w-[25%] before:bg-gradient-to-r before:from-pallete-5 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[5%] md:after:w-[25%] after:bg-gradient-to-l after:from-pallete-5 after:to-transparent">
      <CardCarousel
        images={photos}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
}
