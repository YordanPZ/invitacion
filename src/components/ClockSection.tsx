import DecorativeDivider from "../components/ui/DecorativeDivider";
import CountdownTimer from "../components/CountdownTimer";
import Image from "next/image";

function ClockSection() {
  return (
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
  );
}

export default ClockSection;
