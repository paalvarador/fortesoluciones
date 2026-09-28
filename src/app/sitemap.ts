import { MetadataRoute } from 'next';
import { siteUrl } from '@/content/site';

const routes = [
  '',
  '/nosotros',
  '/soluciones-automotrices',
  '/soluciones-logisticas',
  '/separ-filter',
  '/tecnologia',
  '/empresas',
  '/contacto',
  '/privacidad',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
