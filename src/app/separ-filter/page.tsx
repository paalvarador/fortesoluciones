import type { Metadata } from 'next';
import Image from 'next/image';
import { seo } from '@/content/seo';
import {
  titulo,
  intro,
  problema,
  proteccion,
  objetivo,
  aplicaciones,
  ctaLabel,
  ctaHref,
} from '@/content/separFilter';
import { separFilterProducto } from '@/content/images';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = seo['/separ-filter'];

export default function SeparFilterPage() {
  return (
    <main>
      <PageHeader title={titulo} intro={intro} eyebrow="Separ Filter" image="tecnologia" />

      <section className="px-4 pt-16">
        <div className="mx-auto grid max-w-3xl grid-cols-2 items-start gap-4 sm:gap-6">
          {separFilterProducto.map((foto) => (
            <div
              key={foto.src}
              className="overflow-hidden rounded-md bg-white shadow-card"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                width={foto.width}
                height={foto.height}
                sizes="(min-width: 640px) 360px, 45vw"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16">
        <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-md border-l-4 border-brand-600 bg-white p-6 shadow-card">
            <dt className="eyebrow text-xs">Problema</dt>
            <dd className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">{problema}</dd>
          </div>
          <div className="rounded-md border-l-4 border-brand-600 bg-white p-6 shadow-card">
            <dt className="eyebrow text-xs">
              Protección
            </dt>
            <dd className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">{proteccion}</dd>
          </div>
          <div className="rounded-md border-l-4 border-brand-600 bg-white p-6 shadow-card">
            <dt className="eyebrow text-xs">Objetivo</dt>
            <dd className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">{objetivo}</dd>
          </div>
          <div className="rounded-md border-l-4 border-brand-600 bg-white p-6 shadow-card">
            <dt className="eyebrow text-xs">
              Aplicaciones
            </dt>
            <dd className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">{aplicaciones}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-slate-50 px-4 py-16 text-center">
        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </section>
    </main>
  );
}
