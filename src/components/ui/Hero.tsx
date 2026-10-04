import Image from 'next/image';
import { Gauge, Truck, Wrench } from 'lucide-react';
import Button from './Button';
import { heroTaller, heroVehiculos } from '@/content/images';

type Props = {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

// Íconos flotantes unidos por un arco punteado (guiño a la referencia del cliente).
const badges = [
  { Icon: Wrench, label: 'Automotriz', className: 'left-[6%] top-[30%]' },
  { Icon: Gauge, label: 'Diagnóstico', className: 'left-[36%] top-[6%]' },
  { Icon: Truck, label: 'Logística', className: 'right-[4%] top-[14%]' },
];

export default function Hero({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      {/* Fondo decorativo: foto del taller con overlay azul marino. Sin valor
          informativo propio (alt="" y aria-hidden), el mensaje vive en el texto. */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={heroTaller.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-36 lg:pt-24">
        <div className="space-y-6">
          <p className="eyebrow text-white">Servicios automotrices &amp; logísticos</p>
          <h1 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
            {title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-navy-100 md:text-lg">{subtitle}</p>
          <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:gap-4">
            <Button href={primaryCtaHref} variant="primary" className="w-full sm:w-auto">
              {primaryCtaLabel}
            </Button>
            <Button href={secondaryCtaHref} variant="secondary" className="w-full sm:w-auto">
              {secondaryCtaLabel}
            </Button>
          </div>
        </div>

        {/* Composición visual (solo desktop). */}
        <div className="relative hidden h-[460px] lg:block" aria-hidden="true">
          <svg
            className="absolute inset-x-0 top-0 h-48 w-full text-white/50"
            viewBox="0 0 500 200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M40 180 C 90 40, 260 -10, 470 90"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="7 8"
            />
          </svg>

          {badges.map(({ Icon, label, className }) => (
            <div
              key={label}
              className={`absolute z-20 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full border-4 border-navy-900/40 bg-white text-navy-900 shadow-2xl ${className}`}
            >
              <Icon className="h-7 w-7 text-brand-600" strokeWidth={2.2} />
            </div>
          ))}

          <div className="clip-parallelogram absolute bottom-6 left-0 h-[300px] w-[62%] overflow-hidden shadow-2xl">
            <Image
              src={heroVehiculos.auto.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 380px, 0px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
          </div>
          <div className="clip-parallelogram absolute bottom-0 right-0 h-[250px] w-[50%] overflow-hidden">
            <Image
              src={heroVehiculos.camion.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 320px, 0px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
          <span className="clip-parallelogram absolute bottom-0 right-[47%] h-[250px] w-4 bg-brand-600" />
        </div>
      </div>

      {/* Franjas diagonales tipo "pista" al pie del hero. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20" aria-hidden="true">
        <div className="absolute inset-0 bg-white [clip-path:polygon(0_100%,100%_35%,100%_100%)]" />
        <div className="absolute inset-0 bg-brand-600 [clip-path:polygon(0_100%,100%_10%,100%_30%,0_100%)]" />
      </div>
    </section>
  );
}
