'use client';

import { useEffect, useState } from 'react';

interface AddEventButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function AddEventButton({ className,style }: AddEventButtonProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar el CSS de AddEvent si no está ya cargado
    if (!document.querySelector('link[href*="addevent.com"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.addevent.com/libs/atc/themes/fff-theme-6/theme.css';
      link.type = 'text/css';
      link.media = 'all';
      document.head.appendChild(link);
    }

    // Cargar el script de AddEvent si no está ya cargado
    if (!document.querySelector('script[src*="addevent.com"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    // Mostrar el botón después de 1.5 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`${className || ''}`}>
        <div 
          className="inline-block px-6 py-3 bg-gray-300 text-gray-500 rounded cursor-not-allowed animate-pulse"
          style={{
            backgroundColor: '#f3eee2',
            opacity: 0.6,
            boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          }}
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            <span>Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      title="Add to Calendar" 
      className={`addeventatc ${className || ''}`}
      data-styling="none"
      style={style}
    >
      Agendar
      <span className="start">09/13/2024 17:00</span>
      <span className="end">09/13/2024 23:00</span>
      <span className="timezone">America/Argentina/Buenos_Aires</span>
      <span className="title">Cumpleaños de 15 de Tizizana</span>
      <span className="description">Celebración del cumpleaños de 15 años de Tizizana. ¡No faltes!</span>
      <span className="location">Salón Zaita, Acceso Isla Jordán</span>
    </div>
  );
}