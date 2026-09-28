import type { RouteSeo } from './types';

export const seo: Record<string, RouteSeo> = {
  '/': {
    title: 'FORTE | Soluciones Automotrices y Logísticas en Ecuador',
    description:
      'Soluciones automotrices y logísticas para personas y empresas. Mantenimiento, diagnóstico, flotas, atención IN SITU y soluciones para vehículos y equipos.',
  },
  '/nosotros': {
    title: 'Nosotros | FORTE Soluciones Automotrices y Logísticas',
    description: 'Conoce la misión, visión, valores y propósito de FORTE.',
  },
  '/soluciones-automotrices': {
    title: 'Servicios Automotrices | FORTE',
    description:
      'Mantenimiento preventivo y correctivo, diagnóstico electrónico, motores, electricidad, frenos, suspensión y más.',
  },
  '/soluciones-logisticas': {
    title: 'Soluciones Logísticas y Flotas | FORTE',
    description:
      'Mantenimiento de flotas, atención IN SITU, neumáticos, inspecciones y equipos logísticos.',
  },
  '/separ-filter': {
    title: 'SEPAR FILTER | FORTE Ecuador',
    description:
      'Soluciones de filtración y separación de agua para sistemas de combustible diésel.',
  },
  // El documento del cliente no da copy para esta ruta; se autora aquí siguiendo
  // el mismo tono y longitud que las demás entradas.
  '/tecnologia': {
    title: 'Tecnología | FORTE',
    description:
      'Diagnóstico electrónico, gestión digital de mantenimiento y trazabilidad al servicio de vehículos y equipos.',
  },
  '/empresas': {
    title: 'Soluciones para Empresas | FORTE',
    description:
      'Soluciones de mantenimiento, control y continuidad para flotas y operaciones empresariales.',
  },
  '/contacto': {
    title: 'Contacto | FORTE',
    description: 'Solicita asesoría y servicios automotrices y logísticos con FORTE.',
  },
  // Sin copy del cliente; título/descripción genéricos y coherentes con el resto del sitio.
  '/privacidad': {
    title: 'Aviso de Privacidad | FORTE',
    description:
      'Conoce cómo FORTE recopila, usa y protege los datos personales que compartes a través de nuestro sitio web.',
  },
};
