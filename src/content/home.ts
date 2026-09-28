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
    description:
      'Trabajamos con transparencia y responsabilidad porque sabemos que nuestros clientes ponen en nuestras manos activos importantes para su operación.',
    icon: 'shield-check',
  },
  {
    id: 'experiencia',
    title: 'EXPERIENCIA',
    description:
      'Aplicamos conocimiento técnico y procesos estructurados para atender vehículos y equipos de diferentes marcas y aplicaciones.',
    icon: 'wrench',
  },
  {
    id: 'tecnologia',
    title: 'TECNOLOGÍA',
    description:
      'Utilizamos herramientas de diagnóstico, control y seguimiento que permiten tomar decisiones basadas en información.',
    icon: 'gauge',
  },
  {
    id: 'soluciones-integrales',
    title: 'SOLUCIONES INTEGRALES',
    description:
      'Buscamos resolver las necesidades del cliente desde una perspectiva integral, no solamente reparar una falla puntual.',
    icon: 'package',
  },
  {
    id: 'atencion-in-situ',
    title: 'ATENCIÓN IN SITU',
    description:
      'Llevamos nuestras soluciones hasta donde el cliente las necesita, facilitando la continuidad de sus operaciones.',
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
