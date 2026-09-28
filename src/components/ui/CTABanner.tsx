import Button from './Button';
import type { CTAContent } from '@/content/types';

export default function CTABanner({ title, subtitle, body, ctaLabel, ctaHref }: CTAContent) {
  return (
    <section className="bg-blue-950 px-4 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        {subtitle && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">{subtitle}</p>
        )}
        <h2 className="text-xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
        {body && <p className="text-sm text-blue-100 md:text-base">{body}</p>}
        <div className="pt-3">
          <Button
            href={ctaHref}
            variant="secondary"
            className="!bg-white shadow-md hover:!bg-blue-50"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
