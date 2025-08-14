import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import LineDecoration from '../svg/LineDecoration'
import { DialogTitle } from '../ui/dialog'
import ModalComponent from '../ModalComponent'
import { Button } from '../ui/button'
import Confetti from '../svg/Confetti'

function AssistanceConfirmModal({nombreDelBoton,variant,bottomClassName}:{nombreDelBoton?:string,variant?: "primary" | "secondary",bottomClassName?:string}) {

  return (
     <ModalComponent nombreDelBoton={nombreDelBoton??"Confirmar asistencia a fiesta"} bottomClassName={bottomClassName} variant={variant}>
            {/* Contenido del modal (MANTENER EL DIALOGTILE) */}
            <div className="font-playfair flex justify-center flex-col items-center">
            <Confetti className="size-30"/>
            <DialogTitle className="text-pallete-2 text-2xl">
              ¿Asistes a la fiesta?
            </DialogTitle>
            <LineDecoration />
            <div className="flex gap-10 mt-6">
              <RadioGroup className="flex text-pallete-1 text-lg">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="Si" id="r1" />
                  <Label className="text-lg font-normal" htmlFor="r1">
                    Sí, confirmo!
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem className="" value="No" id="r2" />
                  <Label className="text-lg font-normal" htmlFor="r2">
                    No puedo :(
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <div className="mt-6 w-full border-b-1 border-pallete-3 ">
                <Input
                  placeholder="Ingrese su nombre completo"
                  className="w-full border-none border-b-solid shadow-none outline-none border-pallete-2 border-b  mt-2 text-pallete-1"
                />
              </div>
              <div className="mt-6 w-full border-b-1 border-pallete-3 ">
                <Input
                  placeholder="Ingrese un dato importante ej: soy vegetariano"
                  className="w-full border-none border-b-solid shadow-none outline-none border-pallete-2 border-b-1  mt-2 text-pallete-1"
                />
              </div>
            </div>
            <Button className="text-white text-center text-[20px] mt-8 hover:bg-pallete-4 transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[60%] ">
              Enviar
            </Button>
            </div>
          </ModalComponent>
  )
}

export default AssistanceConfirmModal