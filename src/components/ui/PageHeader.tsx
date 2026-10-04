import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { pageHeaderFondos } from '@/content/images';

type Props = {
  title: string;
  intro?: string;
  /** Etiqueta corta para la miga de pan (p. ej. "Nosotros"). */
  eyebrow?: string;
  image?: keyof typeof pageHeaderFondos;
};

export default function PageHeader({ title, intro, eyebrow, image = 'default' }: Props) {
  return (
    <div className="relative isolate overflow-hidden bg-navy-950 px-4 pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={pageHeaderFondos[image]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow && (
            <nav aria-label="Miga de pan" className="mb-5">
              <ol className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em]">
                <li>
                  <Link href="/" className="text-navy-200 transition-colors hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-4 w-4 text-brand-500" />
                </li>
                <li className="text-brand-400" aria-current="page">
                  {eyebrow}
                </li>
              </ol>
            </nav>
          )}
          <h1 className="text-3xl font-bold uppercase leading-[1] tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100 md:text-lg">
              {intro}
            </p>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14" aria-hidden="true">
        <div className="absolute inset-0 bg-white [clip-path:polygon(0_100%,100%_35%,100%_100%)]" />
        <div className="absolute inset-0 bg-brand-600 [clip-path:polygon(0_100%,100%_5%,100%_25%,0_100%)]" />
      </div>
    </div>
  );
}
