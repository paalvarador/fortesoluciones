import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Truck, Wrench } from 'lucide-react';
import { seo } from '@/content/seo';
import {
  hero,
  queHacemos,
  porQueForte,
  empresasBanner,
  solucionesDestacadas,
  destacadosNosotros,
} from '@/content/home';
import { titulo as nosotrosTitulo, historia } from '@/content/nosotros';
import { solucionesHome, separFilterProducto, nosotrosHome } from '@/content/images';
import Hero from '@/components/ui/Hero';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import IconBulletList from '@/components/ui/IconBulletList';
import ValuesGrid from '@/components/ui/ValuesGrid';
import CTABanner from '@/components/ui/CTABanner';
import HeroSlider from '@/components/home/HeroSlider';
import type { ServiceListItem } from '@/content/types';

export const metadata: Metadata = seo['/'];

function toServiceListItems(prefix: string, items: string[], icons: string[]): ServiceListItem[] {
  return items.map((label, index) => ({
    id: `${prefix}-${index}`,
    label,
    icon: icons[index] ?? icons[0],
  }));
}

const imagenesSoluciones = {
  automotriz: solucionesHome.automotriz,
  logistica: solucionesHome.logistica,
  'separ-filter': separFilterProducto[0],
};

export default function Home() {
  const automotrizItems = toServiceListItems('automotriz', queHacemos.automotriz.items, queHacemos.automotriz.icons);
  const logisticaItems = toServiceListItems('logistica', queHacemos.logistica.items, queHacemos.logistica.icons);

  return (
    <main>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCtaLabel={hero.primaryCtaLabel}
        primaryCtaHref={hero.primaryCtaHref}
        secondaryCtaLabel={hero.secondaryCtaLabel}
        secondaryCtaHref={hero.secondaryCtaHref}
      />

      {/* Nuestras soluciones: tarjetas con foto, como "Why choose us" de la referencia. */}
      <section className="relative overflow-hidden px-4 pb-24 pt-16 sm:pt-20">
        <SectionHeading eyebrow="Nuestras soluciones" title="¿Qué hacemos?" subtitle={queHacemos.intro} />

        <div className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-3">
          {solucionesDestacadas.map((solucion) => {
            const imagen = imagenesSoluciones[solucion.id];
            return (
              <Link
                key={solucion.id}
                href={solucion.href}
                className="group flex flex-col overflow-hidden rounded-md bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={imagen.src}
                    alt={imagen.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      solucion.id === 'separ-filter' ? 'object-contain p-4' : 'object-cover'
                    }`}
                  />
                </div>
                <div className="relative flex flex-1 flex-col items-center px-6 pb-7 pt-7 text-center">
                  <span
                    className="absolute -top-0.5 left-1/2 h-1 w-14 -translate-x-1/2 bg-brand-600 transition-all duration-300 group-hover:w-24"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold uppercase leading-tight tracking-wide text-navy-900">
                    {solucion.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                    {solucion.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-brand-600">
                    Ver más
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Nosotros: foto + panel diagonal azul marino con rombo central. */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-y-0 left-0 hidden w-[55%] lg:block" aria-hidden="true">
          <Image
            src={nosotrosHome.principal.src}
            alt=""
            fill
            sizes="55vw"
            className="-scale-x-100 object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/20" />
        </div>
        <div
          className="clip-panel-left absolute inset-y-0 right-0 hidden w-[58%] bg-navy-900 lg:block"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-10 -right-6 h-48 w-8 rotate-[35deg] bg-brand-600"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-10 right-10 h-48 w-2 rotate-[35deg] bg-white/80"
          aria-hidden="true"
        />

        {/* Rombo con foto de detalle, en la unión foto/panel. */}
        <div
          className="absolute left-[42%] top-1/2 z-10 hidden h-44 w-44 -translate-y-1/2 rotate-45 overflow-hidden border-[6px] border-brand-600 bg-white p-1.5 shadow-2xl xl:block"
          aria-hidden="true"
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={nosotrosHome.detalle.src}
              alt=""
              fill
              sizes="200px"
              className="-rotate-45 scale-150 object-cover"
            />
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative h-72 sm:h-96 lg:hidden">
            <Image
              src={nosotrosHome.principal.src}
              alt={nosotrosHome.principal.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="hidden lg:block" />

          <div className="px-4 py-16 sm:py-20 lg:py-24 lg:pl-20 xl:pl-28">
            <p className="eyebrow text-brand-400">Nosotros</p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white md:text-[2.6rem]">
              {nosotrosTitulo}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-navy-100 md:text-base">{historia[1]}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4">
              {destacadosNosotros.map((item) => (
                <div
                  key={item.id}
                  className="rounded-md border border-white/10 bg-navy-950/60 px-4 py-5 text-center transition-colors hover:border-brand-600"
                >
                  <dt className="font-display text-xl font-bold uppercase leading-tight text-white md:text-2xl">
                    {item.title}
                  </dt>
                  <dd className="mt-1 text-xs text-navy-200">{item.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9">
              <Button href="/nosotros" variant="primary">
                Conócenos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios detallados por línea de negocio. */}
      <section className="bg-slate-50 px-4 py-20 sm:py-24">
        <SectionHeading eyebrow="Nuestros servicios" title="Servicios para tu vehículo y tu flota" />
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {[
            { ...queHacemos.automotriz, items: automotrizItems, Icon: Wrench, href: '/soluciones-automotrices' },
            { ...queHacemos.logistica, items: logisticaItems, Icon: Truck, href: '/soluciones-logisticas' },
          ].map(({ title, items, Icon, href }) => (
            <div key={title}>
              <div className="mb-6 flex items-center justify-between gap-4 border-b-2 border-navy-100 pb-4">
                <h3 className="flex items-center gap-3 text-2xl font-bold uppercase tracking-wide text-navy-900">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {title}
                </h3>
                <Link
                  href={href}
                  className="inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700"
                >
                  Ver todo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <IconBulletList items={items} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <SectionHeading eyebrow="Portafolio" title="Algunos de nuestros trabajos realizados" />
        <div className="mx-auto mt-12 max-w-5xl">
          <HeroSlider />
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <SectionHeading eyebrow="Por qué elegirnos" title="¿Por qué FORTE?" />
        <div className="mt-14">
          <ValuesGrid values={porQueForte} />
        </div>
      </section>

      <CTABanner {...empresasBanner} />
    </main>
  );
}
