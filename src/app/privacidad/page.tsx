import type { Metadata } from 'next';
import { seo } from '@/content/seo';
import { titulo, parrafos } from '@/content/privacidad';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = seo['/privacidad'];

export default function PrivacidadPage() {
  return (
    <main>
      <PageHeader title={titulo} />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-4">
          {parrafos.map((parrafo, index) => (
            <p key={index} className="text-base leading-relaxed text-slate-600">
              {parrafo}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
