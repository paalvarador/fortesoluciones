import type { ContentImage } from './types';

// Placeholders de https://picsum.photos (whitelisteado en next.config.ts vía
// remotePatterns). El `alt` describe el sujeto real que tendrá la foto
// definitiva cuando se reemplace este placeholder.

export const heroTaller: ContentImage = {
  src: 'https://picsum.photos/seed/forte-taller-hero/1600/900',
  alt: 'Vista general del taller de FORTE con vehículos en mantenimiento',
};

// Fotos reales del producto (provistas por el cliente), a diferencia del
// resto de imágenes de este archivo que aún son placeholders de picsum.photos.
export const separFilterProducto: (ContentImage & { width: number; height: number })[] = [
  {
    src: '/separ-filter-1.jpg',
    alt: 'Filtro separador de agua SEPAR FILTER SWK-2000 para sistemas de combustible diésel, vista frontal con válvula de purga PUSH',
    width: 1122,
    height: 1402,
  },
  {
    src: '/separ-filter-2.jpg',
    alt: 'Filtro separador de agua SEPAR FILTER SWK-2000 con conexiones de manguera, vista frontal',
    width: 1024,
    height: 1536,
  },
];

// Reutilizadas por HeroSlider ("trabajos realizados").
export const trabajosRealizados: (ContentImage & { id: number; titulo: string; descripcion: string })[] = [
  {
    id: 1,
    titulo: 'Reconstrucción de Motor',
    descripcion:
      'Desmontaje y reconstrucción completa de motores multimarca con garantía de trabajo.',
    src: 'https://picsum.photos/seed/engine-repair/1400/700',
    alt: 'Técnico de FORTE reconstruyendo un motor multimarca en el taller',
  },
  {
    id: 2,
    titulo: 'Reparación de Sistema de Frenos',
    descripcion: 'Cambio de pastillas, discos y revisión total del sistema de frenado.',
    src: 'https://picsum.photos/seed/brake-system/1400/700',
    alt: 'Revisión de discos y pastillas de freno de un vehículo',
  },
  {
    id: 3,
    titulo: 'Diagnóstico Electrónico',
    descripcion:
      'Lectura de fallas con escáner automotriz avanzado para cualquier marca y modelo.',
    src: 'https://picsum.photos/seed/car-diagnostic/1400/700',
    alt: 'Técnico usando un escáner de diagnóstico electrónico en un vehículo',
  },
  {
    id: 4,
    titulo: 'Suspensión y Alineación',
    descripcion:
      'Reemplazo de amortiguadores, alineación computarizada y balanceo de neumáticos.',
    src: 'https://picsum.photos/seed/car-suspension/1400/700',
    alt: 'Vehículo en elevador durante un servicio de suspensión y alineación',
  },
  {
    id: 5,
    titulo: 'Mantenimiento Preventivo',
    descripcion:
      'Cambio de aceite, filtros, bujías y revisión general para mantener tu vehículo en óptimas condiciones.',
    src: 'https://picsum.photos/seed/oil-change/1400/700',
    alt: 'Cambio de aceite y filtro como parte de un mantenimiento preventivo',
  },
];
