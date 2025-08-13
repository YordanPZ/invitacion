import React from "react";
import DecoratedSection from "./ui/DecoratedSection";
import DecorativeFrame from "./ui/DecorativeFrame";

function PartyData() {
  return (
    <section className="w-full flex justify-center bg-pallete-6 items-center py-27  flex-col px-2">
      <DecoratedSection>
        <DecorativeFrame />
      </DecoratedSection>
    </section>
  );
}

export default PartyData;
