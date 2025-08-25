"use client"
import React, { useEffect, useRef, useState, useActionState } from 'react'
import ModalComponent from '../ModalComponent'
import { DialogTitle } from '../ui/dialog'
import LineDecoration from '../svg/LineDecoration'
import Music from '../svg/Music'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { submitSongSuggestion, type ActionState } from '@/actions/assistance'

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

function SuggestSongModal({ nombreDelBoton = 'Sugerir cancion', variant = 'secondary', bottomClassName }: { nombreDelBoton?: string, variant?: 'primary' | 'secondary' | 'ghost', bottomClassName?: string }) {
  const [assistName, setAssistName] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const [state, formAction] = useActionState(submitSongSuggestion, { ok: false } as ActionState)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('assistName')
    if (stored) setAssistName(stored)
  }, [])

  const formRef = useRef<HTMLFormElement>(null)
  useEffect(() => {
    if (!state?.ok) return
    formRef.current?.reset()
    setIsOpen(false)
  }, [state?.ok])

  return (
    <ModalComponent nombreDelBoton={nombreDelBoton} bottomClassName={bottomClassName} variant={variant as any} open={isOpen} onOpenChange={setIsOpen}>
      <form ref={formRef} action={formAction} method="post" className="font-playfair flex justify-center flex-col items-center w-full">
        <Music className="size-30" />
        <DialogTitle className="text-pallete-2   text-[25px]">
          Sugerir cancion
        </DialogTitle>
        <LineDecoration />
        <div className="flex gap-10 mt-6 "></div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="mt-6 w-full border-b-1 border-pallete-3 ">
            <Input
              name="SuggestNombre"
              placeholder="Tu nombre (opcional)"
              defaultValue={assistName}
              className="w-full border-none border-b-solid shadow-none outline-none border-pallete-2 border-b  mt-2 text-pallete-1"
            />
          </div>
          <div className="mt-6 w-full border-b-1 border-pallete-3 ">
            <Input
              name="SuggestCancionAutor"
              placeholder="Nombre de cancion y autor"
              required
              className="w-full border-none border-b-solid shadow-none outline-none border-pallete-2 border-b  mt-2 text-pallete-1"
            />
          </div>
          <div className="mt-6 w-full border-b-1 border-pallete-3 ">
            <Input
              name="SuggestLink"
              placeholder="Si lo desea ingresa un link de youtube,spotify, etc."
              className="w-full border-none border-b-solid shadow-none outline-none border-pallete-2 border-b  mt-2 text-pallete-1"
            />
          </div>
        </div>
        <SubmitButton />
        {/* Mensajes de feedback */}
        {state?.message && (
          <p className="text-green-600 mt-4 text-center">{state.message}</p>
        )}
        {state?.error && (
          <p className="text-red-600 mt-4 text-center">{state.error}</p>
        )}
      </form>
    </ModalComponent>
  )
}

export default SuggestSongModal