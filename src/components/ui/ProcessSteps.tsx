import type { ProcessStep } from '@/content/types';

type Props = { steps: ProcessStep[] };

export default function ProcessSteps({ steps }: Props) {
  return (
    <ol className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((item, index) => (
        <li
          key={item.step}
          className="relative flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
              {String(item.step).padStart(2, '0')}
            </span>
            {index < steps.length - 1 && (
              <span className="hidden h-px flex-1 bg-blue-200 lg:block" aria-hidden="true" />
            )}
          </div>
          <h3 className="mt-1 text-sm font-bold uppercase tracking-wide text-blue-950">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
