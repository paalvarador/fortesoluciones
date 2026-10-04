import Image from 'next/image';
import Button from './Button';
import { ctaFondo } from '@/content/images';
import type { CTAContent } from '@/content/types';

export default function CTABanner({ title, subtitle, body, ctaLabel, ctaHref }: CTAContent) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 px-4 py-16 text-white sm:py-20">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image src={ctaFondo.src} alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/80" />
        {/* Franjas diagonales roja y blanca en la esquina, como en la referencia. */}
        <span className="absolute -right-10 -top-10 h-[150%] w-10 rotate-[35deg] bg-brand-600" />
        <span className="absolute right-12 -top-10 h-[150%] w-2.5 rotate-[35deg] bg-white/80" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-4">
          {subtitle && <p className="eyebrow text-brand-400">{subtitle}</p>}
          <h2 className="text-2xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
            {title}
          </h2>
          {body && <p className="text-sm leading-relaxed text-navy-100 md:text-base">{body}</p>}
        </div>
        <Button href={ctaHref} variant="primary" className="shrink-0">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
