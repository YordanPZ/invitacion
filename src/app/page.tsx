import DtsFiesta from "@/components/ui/Dts-Fiesta";
import HeaderInvitacion from "@/components/HeaderInvitacion";
import ClockSection from "@/components/ClockSection";
import PartyData from "@/components/PartyData";
import CarrouselSection from "@/components/CarrouselSection";
import GiftSection from "@/components/GiftSection";
import FinalMessage from "@/components/FinalMessage";
import AssitanceConfirmation from "@/components/AssitanceConfirmation";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <div className=" flex flex-col items-center flex-wrap justify-center  w-full m-auto max-w-[1200px]">
      {/*contenedor de la portada*/}
      <HeaderInvitacion />

      {/*contenedor de reloj*/}
      <ClockSection />

      {/*contenedor de los datos de la fiesta */}
      <PartyData />

      {/*contenedor de carruzel*/}
      <CarrouselSection />

      {/*contenedor de datos de la fiesta*/}
      <DtsFiesta />

      {/*contenedor de regalos*/}
      <GiftSection />

      {/*contenedor de mensaje final*/}
      <FinalMessage />

      {/*contenedor de confirmacion de asistencia*/}
      <AssitanceConfirmation />

      {/*footer*/}
      <Footer />
    </div>
  );
}
