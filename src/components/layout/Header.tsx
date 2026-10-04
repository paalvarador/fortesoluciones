'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { nav, contact } from '@/content/site';
import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Barra superior de contacto (solo desktop/tablet). */}
      <div className="relative hidden overflow-hidden bg-navy-950 text-[13px] text-navy-100 md:block">
        <span
          className="absolute -left-6 top-0 h-full w-24 -skew-x-[35deg] border-r-[6px] border-white/90 bg-brand-600"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 pl-24">
          <p className="flex min-w-0 items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
            <span className="truncate">{contact.address}</span>
          </p>
          <div className="flex shrink-0 items-center gap-6">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
              {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="hidden items-center gap-2 transition-colors hover:text-white lg:flex"
            >
              <Mail className="h-4 w-4 text-brand-400" aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 shadow-[0_6px_24px_-18px_rgba(14,20,38,0.5)] backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo-fortesoluciones.jpeg"
              alt="FORTE Soluciones"
              width={160}
              height={48}
              style={{ height: 'auto', width: 'auto' }}
              className="max-h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden min-w-0 xl:block" aria-label="Navegación principal">
            <ul className="flex flex-nowrap items-center gap-x-5 font-display text-[15px] font-bold uppercase tracking-wide">
              {nav.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <li key={item.href} className="whitespace-nowrap">
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative py-2 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[3px] after:rounded-full after:bg-brand-600 after:transition-all hover:text-brand-600 ${
                        isActive
                          ? 'text-brand-600 after:w-6'
                          : 'text-navy-900 after:w-0 hover:after:w-6'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contacto"
              className="group hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-900/20 transition-colors hover:bg-brand-700 sm:inline-flex"
            >
              Cotizar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
