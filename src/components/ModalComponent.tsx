import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import DecoratedSection from "./ui/DecoratedSection";
import React from "react";

function ModalComponent({
  nombreDelBoton,
  children,
   onOpenChange,
   className,
   contentClassName,
   bottomClassName,
   variant = "primary",
   open
}: {
  nombreDelBoton: string;
  children: React.ReactNode;
   onOpenChange?: (open: boolean) => void // Callback opcional para estado del modal
   className?: string
   contentClassName?: string // Nueva prop para estilos específicos del contenido del modal
   bottomClassName?: string
   variant?: "primary" | "secondary"
   open?: boolean
}) {
  return (
    <div className={`relative w-full ${className || ''}`} suppressHydrationWarning>
      <Dialog onOpenChange={onOpenChange} open={open}>
        <DialogTrigger className="w-full" asChild>
          <Button className={`w-full py-6 ${bottomClassName}`} variant={variant??"primary"}>{nombreDelBoton}</Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className={`bg-pallete-6 p-4 shadow-none border-none font-playfair ${contentClassName || ''}`}
        >
          <DialogTitle />
          <div className="relative">
            <DecoratedSection>
              <div className="flex items-center justify-between flex-col min-h-full bg-pallete-5 rounded-[12px] relative z-0 p-3">
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="absolute top-2 right-2"
                    variant="ghost"
                  >
                    <X className="text-pallete-3 " />
                  </Button>
                </DialogClose>
                {children}
              </div>
            </DecoratedSection>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalComponent;
