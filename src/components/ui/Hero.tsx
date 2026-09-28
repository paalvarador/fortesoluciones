import Image from 'next/image';
import Button from './Button';
import { heroTaller } from '@/content/images';

type Props = {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export default function Hero({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-blue-950 px-4 py-20 sm:py-28">
      {/* Fondo decorativo: imagen del taller con overlay degradado, sin valor
          informativo propio (por eso alt="" y aria-hidden), el mensaje vive
          en el texto de abajo. */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={heroTaller.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-950/90 to-blue-900" />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-200 md:text-lg">{subtitle}</p>
        <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row sm:gap-4">
          <Button href={primaryCtaHref} variant="primary" className="w-full sm:w-auto">
            {primaryCtaLabel}
          </Button>
          <Button href={secondaryCtaHref} variant="secondary" className="w-full sm:w-auto">
            {secondaryCtaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
