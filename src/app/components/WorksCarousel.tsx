'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Wrench,
  Zap,
  Gauge,
  Settings2,
  ShieldCheck,
  Cog,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const trabajos = [
  {
    id: 1,
    categoria: 'Motor',
    titulo: 'Reconstrucción de Motor',
    descripcion: 'Desmontaje, inspección y reconstrucción completa de motores multimarca con garantía de trabajo.',
    detalle: 'Culatas, pistones, cigüeñal, árbol de levas',
    icono: Cog,
    color: 'from-blue-900 to-blue-700',
    badge: 'bg-blue-500',
  },
  {
    id: 2,
    categoria: 'Frenos',
    titulo: 'Sistema de Frenos',
    descripcion: 'Revisión y reemplazo de pastillas, discos, líquido de frenos y calibradores con equipos de diagnóstico.',
    detalle: 'Pastillas · Discos · ABS · Calibradores',
    icono: ShieldCheck,
    color: 'from-slate-800 to-slate-600',
    badge: 'bg-slate-500',
  },
  {
    id: 3,
    categoria: 'Diagnóstico',
    titulo: 'Diagnóstico Electrónico',
    descripcion: 'Lectura y borrado de fallas con escáner automotriz multimarca para todo tipo de vehículos.',
    detalle: 'Escáner · Sensores · ECU · OBD2',
    icono: Zap,
    color: 'from-blue-800 to-indigo-700',
    badge: 'bg-indigo-500',
  },
  {
    id: 4,
    categoria: 'Suspensión',
    titulo: 'Suspensión y Dirección',
    descripcion: 'Alineación, balanceo y reemplazo de amortiguadores, rotulas, terminales y bujes.',
    detalle: 'Alineación · Balanceo · Amortiguadores',
    icono: Gauge,
    color: 'from-blue-900 to-blue-600',
    badge: 'bg-blue-400',
  },
  {
    id: 5,
    categoria: 'Mantenimiento',
    titulo: 'Mantenimiento Preventivo',
    descripcion: 'Cambios de aceite, filtros, bujías, correas de distribución y revisión general del vehículo.',
    detalle: 'Aceite · Filtros · Bujías · Correas',
    icono: Wrench,
    color: 'from-slate-900 to-blue-800',
    badge: 'bg-blue-600',
  },
  {
    id: 6,
    categoria: 'Transmisión',
    titulo: 'Caja de Cambios',
    descripcion: 'Reparación y mantenimiento de cajas manuales y automáticas, embragues y diferenciales.',
    detalle: 'Manual · Automática · Embrague · Diferencial',
    icono: Settings2,
    color: 'from-blue-950 to-slate-700',
    badge: 'bg-slate-600',
  },
];

export default function WorksCarousel() {
  const [actual, setActual] = useState(0);
  const [animando, setAnimando] = useState(false);
  const [dir, setDir] = useState<'left' | 'right'>('right');

  const ir = useCallback(
    (siguiente: number, direccion: 'left' | 'right') => {
      if (animando) return;
      setDir(direccion);
      setAnimando(true);
      setTimeout(() => {
        setActual(siguiente);
        setAnimando(false);
      }, 400);
    },
    [animando]
  );

  const anterior = () => {
    const prev = (actual - 1 + trabajos.length) % trabajos.length;
    ir(prev, 'left');
  };

  const siguiente = () => {
    const next = (actual + 1) % trabajos.length;
    ir(next, 'right');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (actual + 1) % trabajos.length;
      ir(next, 'right');
    }, 5000);
    return () => clearInterval(timer);
  }, [actual, ir]);

  const trabajo = trabajos[actual];
  const Icono = trabajo.icono;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold mb-1">
          Nuestros trabajos
        </p>
        <h2 className="text-2xl font-extrabold text-blue-950">
          Servicios que realizamos
        </h2>
      </div>

      {/* Tarjeta principal */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div
          className={`bg-gradient-to-br ${trabajo.color} p-8 md:p-10 transition-opacity duration-400 ${animando ? 'opacity-0' : 'opacity-100'}`}
          style={{ minHeight: 280 }}
        >
          {/* Badge categoría */}
          <span className={`inline-block ${trabajo.badge} text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-6`}>
            {trabajo.categoria}
          </span>

          <div className="flex items-start gap-6">
            {/* Icono */}
            <div className="shrink-0 bg-white/10 rounded-2xl p-4">
              <Icono className="w-10 h-10 text-white" />
            </div>

            {/* Texto */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-tight">
                {trabajo.titulo}
              </h3>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-4">
                {trabajo.descripcion}
              </p>
              <p className="text-blue-300 text-xs font-semibold tracking-wide">
                {trabajo.detalle}
              </p>
            </div>
          </div>

          {/* Número de slide decorativo */}
          <div className="absolute bottom-6 right-8 text-white/10 font-black text-7xl select-none leading-none">
            {String(trabajo.id).padStart(2, '0')}
          </div>
        </div>

        {/* Controles */}
        <button
          onClick={anterior}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={siguiente}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Puntos indicadores */}
      <div className="flex justify-center gap-2 mt-5">
        {trabajos.map((_, i) => (
          <button
            key={i}
            onClick={() => ir(i, i > actual ? 'right' : 'left')}
            className={`transition-all duration-300 rounded-full ${
              i === actual
                ? 'bg-blue-700 w-6 h-2'
                : 'bg-slate-300 hover:bg-slate-400 w-2 h-2'
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
