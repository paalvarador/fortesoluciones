import type { Metadata } from 'next';
import { seo } from '@/content/seo';
import { titulo, body } from '@/content/contacto';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfoCards from '@/components/ui/ContactInfoCards';

export const metadata: Metadata = seo['/contacto'];

export default function ContactoPage() {
  return (
    <main>
      <PageHeader title={titulo} intro={body} eyebrow="Contacto" />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <ContactInfoCards className="mx-auto max-w-4xl" />
      </section>
    </main>
  );
}
