"use client";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  // Fecha objetivo: 13 de Septiembre de 2025 a las 20:30
  const targetDate = new Date("2025-09-13T20:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div suppressHydrationWarning>
      <div className="flex flex-col items-center justify-center py-8">
        <div className="flex items-center justify-center space-x-4 text-4xl text-[#655b59] font-playfair-display ">
          <div className="flex flex-col items-center text-[#8c755e]">
            <span className="text-[50px] font-playfair-display">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-sm font-normal text-[#8c755e]">Días</span>
          </div>
          <span className="bg-pallete-2 w-[1px] h-20" />
          <div className="flex flex-col items-center text-[#8c755e]">
            <span className="text-[50px] font-playfair-display">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-sm font-normal text-[#8c755e]">Hs</span>
          </div>
          <span className="bg-pallete-2 w-[1px] h-20" />
          <div className="flex flex-col items-center text-[#8c755e]">
            <span className="text-[50px] font-playfair-display">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-sm font-normal text-[#8c755e]">Min</span>
          </div>
          <span className="bg-pallete-2 w-[1px] h-20" />
          <div className="flex flex-col items-center text-[#8c755e]">
            <span className="text-[50px] font-playfair-display">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-sm font-normal text-[#8c755e]">Seg</span>
          </div>
        </div>
      </div>
    </div>
  );
}
