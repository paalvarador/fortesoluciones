import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { nav, legal, contact, tagline } from '@/content/site';

const headingClasses = 'mb-5 font-display text-lg font-bold uppercase tracking-wide text-white';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <span className="absolute inset-x-0 top-0 h-1 bg-brand-600" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -bottom-16 -right-8 h-64 w-10 rotate-[35deg] bg-brand-600/80"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-16 right-12 h-64 w-2.5 rotate-[35deg] bg-white/50"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr]">
        <div className="space-y-5">
          <Link href="/" className="inline-block rounded-md bg-white px-4 py-3">
            <Image
              src="/logo-fortesoluciones.jpeg"
              alt="FORTE Soluciones"
              width={180}
              height={42}
              style={{ height: 'auto' }}
              className="w-44"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed">{tagline}</p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h2 className={headingClasses}>Navegación</h2>
          <ul className="grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 lg:grid-cols-1">
            {[...nav, { label: 'AVISO DE PRIVACIDAD', href: '/privacidad' }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 font-display font-semibold uppercase tracking-wide transition-colors hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rotate-45 bg-brand-600" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClasses}>Contacto</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
            <li>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex gap-3 break-all transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 text-xs text-navy-300 sm:flex-row sm:justify-between">
          <p className="font-semibold text-navy-200">{legal.legalName}</p>
          <p>RUC: {legal.ruc}</p>
        </div>
      </div>
    </footer>
  );
}
