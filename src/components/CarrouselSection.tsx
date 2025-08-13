import DecorativeDivider from "../components/ui/DecorativeDivider";
import PhotoGallerySection from "./PhotoGallerySection";
function CarrouselSection() {
  return (
    <section className="flex flex-col items-center justify-center bg-pallete-5 sombra_arriba_abajo w-full shadow-[0_-8px_15px_-5px_rgba(0,0,0,0.4)]">
      <div className="flex gap-5 items-center justify-center relative overflow-x-hidden bg-pallete-5 pt-4 w-full ">
        <DecorativeDivider className="" />
        <DecorativeDivider />
        <DecorativeDivider />
        <DecorativeDivider />
        <DecorativeDivider />
      </div>
      <PhotoGallerySection />
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

export default CarrouselSection;
