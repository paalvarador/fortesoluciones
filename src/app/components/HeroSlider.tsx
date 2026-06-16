'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const trabajos = [
  {
    id: 1,
    titulo: 'Reconstrucción de Motor',
    descripcion: 'Desmontaje y reconstrucción completa de motores multimarca con garantía de trabajo.',
    imagen: 'https://picsum.photos/seed/engine-repair/1400/700',
  },
  {
    id: 2,
    titulo: 'Reparación de Sistema de Frenos',
    descripcion: 'Cambio de pastillas, discos y revisión total del sistema de frenado.',
    imagen: 'https://picsum.photos/seed/brake-system/1400/700',
  },
  {
    id: 3,
    titulo: 'Diagnóstico Electrónico',
    descripcion: 'Lectura de fallas con escáner automotriz avanzado para cualquier marca y modelo.',
    imagen: 'https://picsum.photos/seed/car-diagnostic/1400/700',
  },
  {
    id: 4,
    titulo: 'Suspensión y Alineación',
    descripcion: 'Reemplazo de amortiguadores, alineación computarizada y balanceo de neumáticos.',
    imagen: 'https://picsum.photos/seed/car-suspension/1400/700',
  },
  {
    id: 5,
    titulo: 'Mantenimiento Preventivo',
    descripcion: 'Cambio de aceite, filtros, bujías y revisión general para mantener tu vehículo en óptimas condiciones.',
    imagen: 'https://picsum.photos/seed/oil-change/1400/700',
  },
];

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
    <div className="relative w-full h-[380px] overflow-hidden rounded-2xl shadow-xl bg-slate-900">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: transicion ? 1 : 0 }}
      >
        <Image
          key={trabajo.id}
          src={trabajo.imagen}
          alt={trabajo.titulo}
          fill
          className="object-cover"
          priority={trabajo.id === 1}
          sizes="100vw"
        />
      </div>

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Texto sobre el slide */}
      <div
        className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12 transition-all duration-700"
        style={{ opacity: transicion ? 1 : 0, transform: transicion ? 'translateY(0)' : 'translateY(10px)' }}
      >
        <span className="inline-block bg-blue-600 text-white text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full mb-3">
          Trabajos realizados
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
          {trabajo.titulo}
        </h2>
        <p className="text-slate-200 text-sm md:text-base max-w-xl leading-relaxed">
          {trabajo.descripcion}
        </p>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={siguiente}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 transition-colors z-10"
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
              i === actual ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/70 w-4'
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Contador */}
      <div className="absolute top-4 right-6 text-white/60 text-sm font-semibold tabular-nums">
        {String(actual + 1).padStart(2, '0')} / {String(trabajos.length).padStart(2, '0')}
      </div>
    </div>
  );
}
