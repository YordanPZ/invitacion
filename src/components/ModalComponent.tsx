import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import DecoratedSection from "./ui/DecoratedSection";
import React from "react";

function ModalComponent({nombreDelBoton,children}:{nombreDelBoton:string,children:React.ReactNode}) {

  return (
      <Dialog>
              <DialogTrigger asChild>
                <Button variant={"primary"}>
                  {nombreDelBoton}
                </Button>
              </DialogTrigger>
              <DialogContent
                showCloseButton={false}
                className="bg-pallete-6 p-4 shadow-none border-none"
              >
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
  )
}

export default ModalComponent