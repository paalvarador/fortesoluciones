import type { Metadata } from 'next';
import { seo } from '@/content/seo';
import { titulo, historia, mision, vision, valores } from '@/content/nosotros';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import ValuesGrid from '@/components/ui/ValuesGrid';

export const metadata: Metadata = seo['/nosotros'];

export default function NosotrosPage() {
  return (
    <main>
      <PageHeader title={titulo} />

      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16">
        {historia.map((parrafo, index) => (
          <p key={index} className="text-base leading-relaxed text-slate-600">
            {parrafo}
          </p>
        ))}
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <SectionHeading eyebrow="Nuestro compromiso" title="Misión" />
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600">
          {mision}
        </p>
      </section>

      <section className="px-4 py-16">
        <SectionHeading eyebrow="Hacia dónde vamos" title="Visión" />
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600">
          {vision}
        </p>
      </section>

      <section className="bg-slate-50 py-16">
        <SectionHeading title="Nuestros valores" />
        <div className="mt-10">
          <ValuesGrid values={valores} />
        </div>
      </section>
    </main>
  );
}
