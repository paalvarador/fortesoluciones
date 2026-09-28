import { contact } from './site';
import type { CTAContent, ValueItem } from './types';

export const hero = {
  title: 'SOLUCIONES QUE MUEVEN TU NEGOCIO',
  subtitle:
    'Soluciones automotrices y logísticas para personas y empresas, respaldadas por experiencia, tecnología y un compromiso real con nuestros clientes.',
  primaryCtaLabel: 'SOLICITAR SERVICIO',
  primaryCtaHref: '/contacto',
  secondaryCtaLabel: 'HABLAR CON UN ASESOR',
  secondaryCtaHref: contact.whatsappUrl,
};

export const queHacemos = {
  intro:
    'En FORTE desarrollamos soluciones para mantener vehículos, equipos y operaciones funcionando de manera segura y eficiente.',
  automotriz: {
    title: 'Automotriz',
    items: [
      'Mantenimiento preventivo y correctivo',
      'Diagnóstico electrónico',
      'Mecánica multimarca',
      'Motores',
      'Sistemas eléctricos y electrónicos',
      'Frenos y suspensión',
      'Aire acondicionado',
      'Carrocería y pintura',
      'Lavado y detailing',
    ],
  },
  logistica: {
    title: 'Logística',
    items: [
      'Mantenimiento de flotas',
      'Atención IN SITU',
      'Análisis y control de neumáticos',
      'Mantenimiento de equipos logísticos',
      'Soluciones para transporte y operación',
      'Inspecciones técnicas',
    ],
  },
};

export const porQueForte: ValueItem[] = [
  {
    id: 'confianza',
    title: 'CONFIANZA',
    description: 'Transparencia y responsabilidad: sabemos que manejamos activos clave de tu operación.',
    icon: 'shield-check',
  },
  {
    id: 'experiencia',
    title: 'EXPERIENCIA',
    description: 'Conocimiento técnico y procesos estructurados para toda marca y aplicación.',
    icon: 'wrench',
  },
  {
    id: 'tecnologia',
    title: 'TECNOLOGÍA',
    description: 'Herramientas de diagnóstico y seguimiento para decidir con información real.',
    icon: 'gauge',
  },
  {
    id: 'soluciones-integrales',
    title: 'SOLUCIONES INTEGRALES',
    description: 'Resolvemos la necesidad completa, no solo la falla puntual.',
    icon: 'package',
  },
  {
    id: 'atencion-in-situ',
    title: 'ATENCIÓN IN SITU',
    description: 'Llevamos la solución hasta donde nos necesites.',
    icon: 'map-pin',
  },
];

export const empresasBanner: CTAContent = {
  title:
    'Tu operación no puede detenerse. Nosotros trabajamos para ayudarte a mantenerla en movimiento.',
  subtitle: 'Mantenimiento | Control | Continuidad',
  ctaLabel: 'SOLICITAR ASESORÍA EMPRESARIAL',
  ctaHref: '/contacto',
};
