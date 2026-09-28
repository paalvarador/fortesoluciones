'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/content/site';
import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo-fortesoluciones.jpeg"
            alt="FORTE Soluciones"
            width={160}
            height={48}
            style={{ height: 'auto', width: 'auto' }}
            className="max-h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 xl:block" aria-label="Navegación principal">
          <ul className="flex flex-nowrap items-center gap-x-4 text-sm font-medium">
            {nav.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="whitespace-nowrap">
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative py-1 transition-colors hover:text-blue-700 ${
                      isActive
                        ? 'text-blue-700 after:absolute after:-bottom-[13px] after:left-0 after:h-0.5 after:w-full after:bg-blue-700'
                        : 'text-slate-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
