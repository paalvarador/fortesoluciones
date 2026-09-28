import type { Metadata } from 'next';
import { Construction } from 'lucide-react';
import { seo } from '@/content/seo';
import { titulo, intro, features, blockchainCallout } from '@/content/tecnologia';
import PageHeader from '@/components/ui/PageHeader';
import IconBulletList from '@/components/ui/IconBulletList';

export const metadata: Metadata = seo['/tecnologia'];

export default function TecnologiaPage() {
  return (
    <main>
      <PageHeader title={titulo} intro={intro} />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <IconBulletList items={features} />
        </div>
      </section>

      <section className="px-4 pb-16">
        {/* Callout intencionalmente distinto: borde punteado, paleta ámbar/gris
            y opacidad reducida para dejar inequívoco que NO es una función
            disponible hoy (ver comentario en content/tecnologia.ts). */}
        <div className="mx-auto max-w-3xl rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center opacity-90">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-950">
            <Construction className="h-3.5 w-3.5" aria-hidden="true" />
            {blockchainCallout.badge}
          </span>
          <h2 className="mt-3 text-xl font-extrabold text-slate-500">
            {blockchainCallout.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">{blockchainCallout.body}</p>
        </div>
      </section>
    </main>
  );
}
