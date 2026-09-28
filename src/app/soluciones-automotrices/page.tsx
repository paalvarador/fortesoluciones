import type { Metadata } from 'next';
import { seo } from '@/content/seo';
import { titulo, intro, services } from '@/content/automotrices';
import PageHeader from '@/components/ui/PageHeader';
import IconBulletList from '@/components/ui/IconBulletList';

export const metadata: Metadata = seo['/soluciones-automotrices'];

export default function SolucionesAutomotricesPage() {
  return (
    <main>
      <PageHeader title={titulo} intro={intro} />
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <IconBulletList items={services} />
        </div>
      </section>
    </main>
  );
}
