import type { Metadata } from 'next';
import { seo } from '@/content/seo';
import { titulo, body, ctaLabel, ctaHref } from '@/content/empresas';
import { procesoForte } from '@/content/proceso';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import ProcessSteps from '@/components/ui/ProcessSteps';

export const metadata: Metadata = seo['/empresas'];

export default function EmpresasPage() {
  return (
    <main>
      <PageHeader title={titulo} intro={body} eyebrow="Empresas" image="logistica" />

      <div className="px-4 py-10 text-center">
        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </div>

      <section className="bg-slate-50 px-4 py-16">
        <SectionHeading eyebrow="Cómo trabajamos" title="Proceso FORTE" />
        <div className="mt-10">
          <ProcessSteps steps={procesoForte} />
        </div>
      </section>
    </main>
  );
}
