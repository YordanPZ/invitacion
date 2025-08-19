import React from "react";
import { CardDecorationPoint } from "../svg/CardDecorationPoint";

function DecoratedSection({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`bg-pallete-5 border border-pallete-3 p-10 relative ${className}`}
    >
      <div className="flex justify-between ">
        <CardDecorationPoint className="size-10 z-10 absolute -top-[1.55px] -left-[1.302px] bg-pallete-5" />
        <CardDecorationPoint className="size-10 z-10 absolute -top-[1.55px] -right-[1.302px] bg-pallete-5 rotate-90" />
        <CardDecorationPoint className="size-10 z-10 absolute -bottom-[1.6px] -left-[1.302px] bg-pallete-5 -rotate-90" />
        <CardDecorationPoint className="size-10 z-10 absolute -bottom-[1.55px] -right-[1.302px] bg-pallete-5 rotate-180" />
      </div>
      {children}
    </div>
  );
}

export default DecoratedSection;
