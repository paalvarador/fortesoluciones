import type { ContactChannel, NavItem } from './types';

export const nav: NavItem[] = [
  { label: 'INICIO', href: '/' },
  { label: 'NOSOTROS', href: '/nosotros' },
  { label: 'SOLUCIONES AUTOMOTRICES', href: '/soluciones-automotrices' },
  { label: 'SOLUCIONES LOGÍSTICAS', href: '/soluciones-logisticas' },
  { label: 'SEPAR FILTER', href: '/separ-filter' },
  { label: 'TECNOLOGÍA', href: '/tecnologia' },
  { label: 'EMPRESAS', href: '/empresas' },
  { label: 'CONTACTO', href: '/contacto' },
];

export const contact: ContactChannel = {
  phoneDisplay: '096 357 1606',
  phoneIntl: '593963571606',
  whatsappUrl: 'https://wa.me/593963571606',
  email: 'informacion@fortesoluciones.com',
  address: 'Mapasingue Este. Av 5ta y Av. Vía a Daule, Guayaquil, Ecuador',
};

export const legal = {
  legalName: 'PUNTOCAREC S.A.S.',
  ruc: '0993388443001',
};

export const siteUrl = 'https://www.fortesoluciones.com';
export const tagline = 'Soluciones que mueven personas, empresas y oportunidades.';
export const promise = 'Soluciones que generan confianza.';
