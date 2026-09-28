import type { Metadata } from 'next';
import { seo } from '@/content/seo';
import { hero, queHacemos, porQueForte, empresasBanner } from '@/content/home';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import IconBulletList from '@/components/ui/IconBulletList';
import ValuesGrid from '@/components/ui/ValuesGrid';
import CTABanner from '@/components/ui/CTABanner';
import HeroSlider from '@/components/home/HeroSlider';
import type { ServiceListItem } from '@/content/types';

export const metadata: Metadata = seo['/'];

function toServiceListItems(prefix: string, items: string[], icon: string): ServiceListItem[] {
  return items.map((label, index) => ({
    id: `${prefix}-${index}`,
    label,
    icon,
  }));
}

export default function Home() {
  const automotrizItems = toServiceListItems('automotriz', queHacemos.automotriz.items, 'wrench');
  const logisticaItems = toServiceListItems('logistica', queHacemos.logistica.items, 'truck');

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

      <section className="px-4 py-16">
        <SectionHeading title="¿Qué hacemos?" subtitle={queHacemos.intro} />
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold text-blue-950">
              {queHacemos.automotriz.title}
            </h3>
            <IconBulletList items={automotrizItems} />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-blue-950">
              {queHacemos.logistica.title}
            </h3>
            <IconBulletList items={logisticaItems} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
            Algunos de nuestros trabajos realizados
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-4xl">
          <HeroSlider />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <SectionHeading title="¿Por qué FORTE?" />
        <div className="mt-10">
          <ValuesGrid values={porQueForte} />
        </div>
      </section>

      <CTABanner {...empresasBanner} />
    </main>
  );
}
