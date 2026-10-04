'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { nav } from '@/content/site';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // El overlay y el panel se montan vía portal a document.body (ver abajo):
  // <header> tiene backdrop-blur (backdrop-filter), y cualquier ancestro con
  // filter/backdrop-filter se convierte en el "containing block" de sus
  // descendientes position:fixed — eso encogía el drawer a la altura del
  // header (~68px) en vez de la pantalla completa. Portalear a <body> saca
  // el overlay/panel de ese árbol y los deja fijos respecto al viewport real.
  useEffect(() => {
    // `document` no existe en el render de servidor; el portal solo puede
    // montarse tras la hidratación, así que este es uno de los casos
    // legítimos de setState en un efecto (sincronizar con la disponibilidad
    // real del DOM del navegador, no un valor derivable durante el render).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Cierra el menú cada vez que cambia la ruta (ajuste de estado durante el
  // render, sin useEffect, siguiendo el patrón recomendado por React).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Cierra con Escape y bloquea el scroll del body mientras el drawer está abierto.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="rounded-md p-2 text-navy-900 hover:bg-slate-100"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {mounted &&
        createPortal(
          <>
            {/* Fondo oscuro */}
            <div
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className={`fixed inset-0 z-40 bg-navy-950/60 transition-opacity duration-300 ${
                open ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            />

            {/* Panel del drawer */}
            <nav
              id="mobile-nav-panel"
              aria-label="Navegación móvil"
              inert={!open}
              className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85%] transform flex-col overflow-y-auto bg-navy-950 shadow-xl transition-transform duration-300 ease-in-out ${
                open ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="eyebrow text-brand-400">Menú</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="rounded-md p-2 text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-1 flex-col gap-1 px-3 py-4 font-display text-base font-bold uppercase tracking-wide">
                {nav.map((item) => {
                  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`block rounded-md border-l-4 px-3 py-3 transition-colors ${
                          isActive
                            ? 'border-brand-600 bg-white/5 text-white'
                            : 'border-transparent text-navy-100 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="border-t border-white/10 p-5">
                <Link
                  href="/contacto"
                  className="flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-700"
                >
                  Solicitar cotización
                </Link>
              </div>
            </nav>
          </>,
          document.body,
        )}
    </div>
  );
}
