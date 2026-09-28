import Link from 'next/link';
import { nav, legal } from '@/content/site';
import ContactInfoCards from '@/components/ui/ContactInfoCards';

export default function Footer() {
  return (
    <footer className="border-t border-blue-900 bg-blue-950 text-slate-200">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
        <ContactInfoCards />

        <nav aria-label="Navegación del pie de página" className="border-t border-white/10 pt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-300 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacidad" className="text-slate-300 transition-colors hover:text-white">
                Aviso de Privacidad
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-1 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          <p className="font-semibold text-slate-300">{legal.legalName}</p>
          <p>RUC: {legal.ruc}</p>
        </div>
      </div>
    </footer>
  );
}
