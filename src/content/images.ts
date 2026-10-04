import type { ContentImage } from './types';

// Fotos de stock de Unsplash (licencia Unsplash: uso comercial gratuito, sin
// atribución obligatoria), whitelisteadas en next.config.* vía remotePatterns.
// Elegidas para calzar con la referencia visual del cliente; reemplazar por
// fotos reales del taller FORTE cuando estén disponibles. El `alt` describe la
// foto actual.
const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;

export const heroTaller: ContentImage = {
  src: unsplash('1615906655593-ad0386982a0f', 2000),
  alt: 'Técnico revisando el motor de un vehículo en el taller',
};

export const heroVehiculos: { auto: ContentImage; camion: ContentImage } = {
  auto: {
    src: unsplash('1601362840469-51e4d8d58785', 1000),
    alt: 'Vehículo sedán plateado estacionado',
  },
  camion: {
    src: unsplash('1601584115197-04ecc0da31d7', 1000),
    alt: 'Camión de carga en carretera',
  },
};

export const solucionesHome: Record<'automotriz' | 'logistica', ContentImage> = {
  automotriz: {
    src: unsplash('1625047509248-ec889cbff17f', 900),
    alt: 'Mecánico trabajando en el compartimiento del motor de un vehículo',
  },
  logistica: {
    src: unsplash('1601584115197-04ecc0da31d7', 900),
    alt: 'Camión de carga en carretera',
  },
};

export const nosotrosHome: { principal: ContentImage; detalle: ContentImage } = {
  principal: {
    src: unsplash('1504222490345-c075b6008014', 1400),
    alt: 'Técnico sonriente junto al motor abierto de un vehículo',
  },
  detalle: {
    src: unsplash('1530046339160-ce3e530c7d2f', 700),
    alt: 'Pared de herramientas organizadas en un taller mecánico',
  },
};

export const ctaFondo: ContentImage = {
  src: unsplash('1586528116311-ad8dd3c8310d', 1800),
  alt: 'Centro de distribución logística con mercadería',
};

// Fondos de las cabeceras de páginas internas (decorativos, alt vacío en uso).
export const pageHeaderFondos = {
  default: unsplash('1625047509248-ec889cbff17f', 1800),
  automotriz: unsplash('1619642751034-765dfdf7c58e', 1800),
  logistica: unsplash('1519003722824-194d4455a60c', 1800),
  taller: unsplash('1530046339160-ce3e530c7d2f', 1800),
  tecnologia: unsplash('1486262715619-67b85e0b08d3', 1800),
} as const;

// Fotos reales del producto (provistas por el cliente).
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
    src: unsplash('1486262715619-67b85e0b08d3', 1400),
    alt: 'Primer plano de un motor de vehículo con poleas y correas',
  },
  {
    id: 2,
    titulo: 'Reparación de Sistema de Frenos',
    descripcion: 'Cambio de pastillas, discos y revisión total del sistema de frenado.',
    src: unsplash('1599256872237-5dcc0fbe9668', 1400),
    alt: 'Manos de un técnico ajustando componentes bajo un vehículo',
  },
  {
    id: 3,
    titulo: 'Diagnóstico Electrónico',
    descripcion:
      'Lectura de fallas con escáner automotriz avanzado para cualquier marca y modelo.',
    src: unsplash('1619642751034-765dfdf7c58e', 1400),
    alt: 'Técnico trabajando con herramientas en el motor de un vehículo',
  },
  {
    id: 4,
    titulo: 'Suspensión y Alineación',
    descripcion:
      'Reemplazo de amortiguadores, alineación computarizada y balanceo de neumáticos.',
    src: unsplash('1492144534655-ae79c964c9d7', 1400),
    alt: 'Vehículos sobre elevadores en un taller',
  },
  {
    id: 5,
    titulo: 'Mantenimiento Preventivo',
    descripcion:
      'Cambio de aceite, filtros, bujías y revisión general para mantener tu vehículo en óptimas condiciones.',
    src: unsplash('1487754180451-c456f719a1fc', 1400),
    alt: 'Técnico cargando aceite nuevo en el motor como parte de un mantenimiento preventivo',
  },
];
