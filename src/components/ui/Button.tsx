import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-blue-700 text-white shadow-sm hover:bg-blue-800 focus-visible:ring-blue-700',
  secondary:
    'bg-white text-blue-700 border border-blue-700 hover:bg-blue-50 focus-visible:ring-blue-700',
};

export default function Button({ href, variant = 'primary', className = '', children, ...rest }: Props) {
  const isExternal = href.startsWith('http');
  const classes = `inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
