import type { Metadata } from 'next';
import { seo } from '@/content/seo';
import {
  titulo,
  intro,
  services,
  gestionNeumaticos,
  atencionInSitu,
  empresasSubseccion,
} from '@/content/logisticas';
import PageHeader from '@/components/ui/PageHeader';
import IconBulletList from '@/components/ui/IconBulletList';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = seo['/soluciones-logisticas'];

export default function SolucionesLogisticasPage() {
  return (
    <main>
      <PageHeader title={titulo} intro={intro} />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <IconBulletList items={services} />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <SectionHeading title={gestionNeumaticos.title} />
        <div className="mx-auto mt-10 max-w-4xl">
          <IconBulletList items={gestionNeumaticos.items} />
        </div>
      </section>

      <section className="px-4 py-16">
        <SectionHeading title={atencionInSitu.title} />
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-600">
          {atencionInSitu.body}
        </p>
      </section>

      <CTABanner {...empresasSubseccion} />
    </main>
  );
}
