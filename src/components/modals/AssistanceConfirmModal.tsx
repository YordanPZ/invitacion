"use client"
import React, { useEffect, useRef, useState, useActionState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import LineDecoration from '../svg/LineDecoration'
import { DialogTitle } from '../ui/dialog'
import ModalComponent from '../ModalComponent'
import { Button } from '../ui/button'
import Confetti from '../svg/Confetti'
import { useFormStatus } from 'react-dom'
import { submitAssistance, type ActionState } from '@/actions/assistance'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      className="text-white text-center text-[20px] mt-8 hover:bg-pallete-4 transition-all duration-900 bg-[#b39072] rounded-[12px] h-[50px] w-[60%] "
    >
      {pending ? 'Enviando…' : 'Enviar'}
    </Button>
  )
}

function AssistanceConfirmModal({ nombreDelBoton = 'Confirmar asistencia', variant = 'primary', bottomClassName }: { nombreDelBoton?: string, variant?: 'primary' | 'secondary' | 'ghost', bottomClassName?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [asistencia, setAsistencia] = useState<string>('Si')
  const [state, formAction] = useActionState(submitAssistance, { ok: false } as ActionState)
  const [nombre, setNombre] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const storedName = localStorage.getItem('assistName')
    if (storedName) setNombre(storedName)
  }, [])

  // Al éxito: persistir nombre, resetear y cerrar
  const formRef = useRef<HTMLFormElement>(null)
  useEffect(() => {
    if (!state?.ok) return
    // Persistir nombre
    if (typeof window !== 'undefined' && nombre) {
      try { localStorage.setItem('assistName', nombre) } catch { }
    }
    // limpiar formulario y cerrar modal
    formRef.current?.reset()
    setIsOpen(false)
  }, [state?.ok, nombre])

  return (
    <ModalComponent bottomClassName={bottomClassName} nombreDelBoton={nombreDelBoton} variant={variant as any} open={isOpen} onOpenChange={setIsOpen}>
      <form ref={formRef} action={formAction} method="post" className="font-playfair flex justify-center flex-col items-center w-full">
        <Confetti className="size-30" />
        <DialogTitle className="text-pallete-2 text-[25px]">
          Confirmar asistencia
        </DialogTitle>
        <LineDecoration />
        <div className="flex gap-10 mt-6">
          <RadioGroup className="flex text-pallete-1 text-lg" value={asistencia} onValueChange={setAsistencia}>
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
        {/* Sincronizar valor del RadioGroup para el submit */}
        <input type="hidden" name="Asistencia" value={asistencia} />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="mt-6 w-full border-b-1 border-pallete-3 ">
            <Input name="Nombre" placeholder="Tu nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full border-none border-b-solid shadow-none outline-none border-pallete-2 border-b  mt-2 text-pallete-1" />
          </div>
          <div className="mt-6 w-full border-b-1 border-pallete-3 ">
            <Input name="Detalle" type="number" min={0} step={1} placeholder="¿Cuántos invitados? (opcional)" className="w-full border-none border-b-solid shadow-none outline-none border-pallete-2 border-b  mt-2 text-pallete-1" />
          </div>
          <div className="mt-6 w-full border-b-1 border-pallete-3 ">
            <textarea
              name="DetalleTexto"
              placeholder="Algún detalle (opcional)"
              className="w-full resize-none h-[80px] border-none border-b-solid shadow-none outline-none border-pallete-2 border-b mt-2 text-pallete-1 bg-transparent"
            />
          </div>
        </div>
        <SubmitButton />
        {state?.message && (<p className="text-green-600 mt-4 text-center">{state.message}</p>)}
        {state?.error && (<p className="text-red-600 mt-4 text-center">{state.error}</p>)}
      </form>
    </ModalComponent>
  )
}

export default AssistanceConfirmModal