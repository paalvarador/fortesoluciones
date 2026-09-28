import type { ServiceListItem } from './types';

export const titulo = 'Tecnología al servicio del mantenimiento.';

export const intro =
  'En FORTE creemos que el futuro del mantenimiento combina conocimiento técnico, información y tecnología.';

export const features: ServiceListItem[] = [
  { id: 'diagnostico-electronico', label: 'Diagnóstico electrónico', icon: 'zap' },
  { id: 'gestion-digital-mantenimiento', label: 'Gestión digital de mantenimiento', icon: 'clipboard-check' },
  { id: 'control-neumaticos', label: 'Control de neumáticos', icon: 'gauge' },
  { id: 'evidencia-fotografica', label: 'Evidencia fotográfica', icon: 'camera' },
  { id: 'historial-digital', label: 'Historial digital', icon: 'history' },
  { id: 'trazabilidad', label: 'Trazabilidad', icon: 'link-2' },
];

// IMPORTANTE: esta funcionalidad está EN DESARROLLO. En ningún lugar del sitio
// se debe dar a entender que Blockchain / trazabilidad verificable ya está
// disponible — es una función futura. El badge "En desarrollo" debe
// mantenerse siempre visible junto a este contenido.
export const blockchainCallout = {
  badge: 'En desarrollo',
  title: 'FORTE Blockchain',
  body: 'Nueva generación de trazabilidad: registros digitales verificables para el historial de vehículos y equipos.',
};
