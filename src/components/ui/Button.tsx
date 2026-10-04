import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'dark';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  /** Flecha a la derecha, como los CTAs de la referencia del cliente. */
  arrow?: boolean;
};

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-900/25 hover:bg-brand-700 focus-visible:ring-brand-600',
  // Pensado para fondos oscuros (hero, banners).
  secondary:
    'border-2 border-white/70 text-white hover:border-white hover:bg-white hover:text-navy-900 focus-visible:ring-white',
  dark: 'bg-navy-900 text-white hover:bg-navy-800 focus-visible:ring-navy-900',
};

export default function Button({
  href,
  variant = 'primary',
  arrow = true,
  className = '',
  children,
  ...rest
}: Props) {
  const isExternal = href.startsWith('http');
  const classes = `group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
