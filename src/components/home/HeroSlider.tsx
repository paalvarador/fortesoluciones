'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { trabajosRealizados as trabajos } from '@/content/images';

export default function HeroSlider() {
  const [actual, setActual] = useState(0);
  const [transicion, setTransicion] = useState(true);

  const ir = useCallback((indice: number) => {
    setTransicion(false);
    setTimeout(() => {
      setActual(indice);
      setTransicion(true);
    }, 50);
  }, []);

  const anterior = () => ir((actual - 1 + trabajos.length) % trabajos.length);
  const siguiente = () => ir((actual + 1) % trabajos.length);

  useEffect(() => {
    const timer = setInterval(() => {
      ir((actual + 1) % trabajos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [actual, ir]);

  const trabajo = trabajos[actual];

  return (
    <div className="relative w-full h-[380px] overflow-hidden rounded-md shadow-card-hover bg-navy-950">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: transicion ? 1 : 0 }}
      >
        <Image
          key={trabajo.id}
          src={trabajo.src}
          alt={trabajo.alt}
          fill
          className="object-cover"
          priority={trabajo.id === 1}
          sizes="100vw"
        />
      </div>

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-navy-950/10" />

      {/* Texto sobre el slide */}
      <div
        className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12 transition-all duration-700"
        style={{ opacity: transicion ? 1 : 0, transform: transicion ? 'translateY(0)' : 'translateY(10px)' }}
      >
        <p className="eyebrow mb-3 text-brand-400">Trabajos realizados</p>
        <h2 className="text-3xl md:text-5xl font-bold uppercase text-white leading-none mb-3">
          {trabajo.titulo}
        </h2>
        <p className="text-navy-100 text-sm md:text-base max-w-xl leading-relaxed">
          {trabajo.descripcion}
        </p>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur hover:bg-brand-600 text-white rounded-full p-3 transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={siguiente}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur hover:bg-brand-600 text-white rounded-full p-3 transition-colors z-10"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores de progreso */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {trabajos.map((_, i) => (
          <button
            key={i}
            onClick={() => ir(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === actual ? 'bg-brand-600 w-8' : 'bg-white/40 hover:bg-white/70 w-4'
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Contador */}
      <div className="absolute top-4 right-6 font-display text-white/70 text-lg font-bold tabular-nums">
        {String(actual + 1).padStart(2, '0')} / {String(trabajos.length).padStart(2, '0')}
      </div>
    </div>
  );
}
