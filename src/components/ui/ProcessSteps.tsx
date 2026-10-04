import type { ProcessStep } from '@/content/types';

type Props = { steps: ProcessStep[] };

export default function ProcessSteps({ steps }: Props) {
  return (
    <ol className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((item, index) => (
        <li
          key={item.step}
          className="group relative flex flex-col gap-2 rounded-md bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white">
              {String(item.step).padStart(2, '0')}
            </span>
            {index < steps.length - 1 && (
              <span
                className="hidden h-px flex-1 border-t-2 border-dashed border-navy-200 lg:block"
                aria-hidden="true"
              />
            )}
          </div>
          <h3 className="mt-2 text-lg font-bold uppercase leading-tight tracking-wide text-navy-900">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
