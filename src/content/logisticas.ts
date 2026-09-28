import { contact } from './site';
import type { CTAContent, ServiceListItem } from './types';

export const titulo = 'Mantenemos en movimiento tu operación.';

export const intro =
  'Diseñamos soluciones de mantenimiento y control para empresas que dependen de sus vehículos y equipos para operar.';

export const services: ServiceListItem[] = [
  { id: 'mantenimiento-flotas', label: 'Mantenimiento de flotas', icon: 'truck' },
  { id: 'atencion-in-situ', label: 'Atención IN SITU', icon: 'map-pin' },
  { id: 'inspecciones-tecnicas', label: 'Inspecciones técnicas', icon: 'clipboard-check' },
  { id: 'control-seguimiento-kilometraje', label: 'Control y seguimiento de kilometraje', icon: 'gauge' },
  { id: 'gestion-control-neumaticos', label: 'Gestión y control de neumáticos', icon: 'history' },
  { id: 'mantenimiento-equipos-logisticos', label: 'Mantenimiento de equipos logísticos', icon: 'wrench' },
  { id: 'montacargas-hidraulicos-neumaticos', label: 'Montacargas y sistemas hidráulicos/neumáticos', icon: 'cog' },
  { id: 'portacontenedores-equipos-transporte', label: 'Portacontenedores y equipos de transporte', icon: 'container' },
  { id: 'reportes-tecnicos-evidencia', label: 'Reportes técnicos y evidencia de trabajos', icon: 'file-text' },
];

export const gestionNeumaticos = {
  title: 'Gestión inteligente de neumáticos',
  items: [
    { id: 'inspeccion-control-desgaste', label: 'Inspección y control de desgaste', icon: 'gauge' },
    { id: 'seguimiento-kilometraje', label: 'Seguimiento de kilometraje', icon: 'history' },
    { id: 'identificacion-individual', label: 'Identificación individual', icon: 'file-text' },
    { id: 'marcacion-engrave', label: 'Marcación/engrave', icon: 'wrench' },
    { id: 'control-posicion', label: 'Control de posición', icon: 'map-pin' },
    { id: 'historial-neumaticos', label: 'Historial de neumáticos', icon: 'history' },
    { id: 'analisis-rendimiento', label: 'Análisis de rendimiento', icon: 'gauge' },
    { id: 'recomendaciones-reemplazo', label: 'Recomendaciones de reemplazo', icon: 'clipboard-check' },
  ] as ServiceListItem[],
};

export const atencionInSitu = {
  title: 'Llevamos FORTE hasta donde lo necesitas',
  body: 'Cuando un vehículo o equipo no puede llegar al taller, nuestro equipo puede trasladar la solución hasta el lugar donde se encuentra, facilitando la continuidad de la operación.',
};

export const empresasSubseccion: CTAContent = {
  title: 'Soluciones para empresas que no pueden detenerse.',
  body: 'Una flota eficiente necesita información, planificación y control. En FORTE ayudamos a empresas a gestionar el mantenimiento de sus vehículos y equipos mediante procesos técnicos, seguimiento y evidencia de los trabajos realizados.',
  ctaLabel: 'HABLE CON UN ASESOR FORTE',
  ctaHref: contact.whatsappUrl,
};
