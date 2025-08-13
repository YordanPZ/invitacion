"use client"
import React, { useEffect, useRef, useState } from 'react'
import ModalComponent from '../ModalComponent'
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { LocateIcon, LocationEdit } from 'lucide-react'
function MapModal() {
const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!isModalOpen || map.current) return

    // Pequeño delay para asegurar que el modal esté completamente renderizado
    const timer = setTimeout(() => {
      // Configurar el token de acceso
      mapboxgl.accessToken =
        "pk.eyJ1IjoieW9yZGFucHoiLCJhIjoiY21ic2xsczBjMG00YzJucHgxbzZoNXRucyJ9.0pjVQWVJkui97_akNH01KA"

      if (mapContainer.current) {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [-99.1332, 19.4326],
          zoom: 10,
          attributionControl: true,
        })

        // Agregar controles de navegación
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

        // Agregar un marcador en el centro
        new mapboxgl.Marker({
          color: "#ef4444",
        })
          .setLngLat([-99.1332, 19.4326])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML("<h3>Ciudad de México</h3><p>¡Hola desde el mapa!</p>"))
          .addTo(map.current)

        setTimeout(() => {
          if (map.current) {
            map.current.resize()
          }
        }, 100)
      }
    }, 200)

    return () => {
      clearTimeout(timer)
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [isModalOpen])
  return (
     <ModalComponent nombreDelBoton={"¿Cómo llegar?"} onOpenChange={setIsModalOpen} contentClassName='w-full max-w-4xl mx-auto min-w-[320px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px]' >
        <div className="w-full h-full">
            <div className='flex justify-center flex-col items-center'>
                <LocationEdit className='w-10 h-10 text-pallete-3' />

           <h2 className="text-pallete-2 text-2xl mt-3">Cómo llegar a la Fiesta</h2>
                <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 362 23"
            fill="var(--color-pallete-3)"
            data-inject-url="https://fixdate.io/modelo-invitacion/126/img/adorno-titulo.svg"
            className="injectable adorno-titulo mt-4 w-full max-w-[362px] h-auto"
          >
            <g>
              <path d="M181.146 8.81658C181.216 8.81658 181.286 8.80658 181.346 8.77658C181.636 8.66658 181.776 8.34658 181.676 8.05658C181.666 8.01658 181.506 7.45658 182.076 6.65658C183.436 4.78658 188.796 1.63658 209.356 1.63658H361.336C361.646 1.63658 361.906 1.38658 361.906 1.06658C361.906 0.746582 361.656 0.496582 361.336 0.496582H209.356C189.166 0.496582 182.846 3.52658 181.096 6.07658C180.226 7.33658 180.566 8.33658 180.606 8.44658C180.696 8.67658 180.906 8.80658 181.136 8.80658L181.146 8.81658Z"></path>
              <path
                d="M181.146 22.5965L186.516 15.2365L181.146 7.32654L175.566 14.9565L181.146 22.5965Z"
                fill="#D3AF9B"
              ></path>
              <path d="M267.326 1.26654C267.326 1.26654 280.216 1.20654 286.586 7.21654C286.586 7.21654 294.516 1.17654 304.986 1.07654L267.316 1.26654H267.326Z"></path>
              <path d="M181.316 8.80658C181.546 8.80658 181.756 8.67658 181.836 8.44658C181.876 8.33658 182.216 7.34658 181.346 6.07658C179.596 3.53658 173.276 0.496582 153.086 0.496582H1.11626C0.806265 0.496582 0.546265 0.746582 0.546265 1.06658C0.546265 1.38658 0.796265 1.63658 1.11626 1.63658H153.096C173.656 1.63658 179.016 4.78658 180.376 6.65658C180.966 7.45658 180.786 8.02658 180.776 8.05658C180.686 8.34658 180.836 8.66658 181.126 8.77658C181.186 8.79658 181.256 8.80658 181.316 8.80658Z"></path>
              <path d="M95.1363 1.26654C95.1363 1.26654 82.2463 1.20654 75.8763 7.21654C75.8763 7.21654 67.9463 1.17654 57.4763 1.07654L95.1363 1.26654Z"></path>
            </g>
          </svg>
            </div>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg pt-3">
          <div ref={mapContainer} className="w-full h-full" style={{ minHeight: "400px" }} suppressHydrationWarning />
        </div>
      </div>
          </ModalComponent>
  )
}

export default MapModal