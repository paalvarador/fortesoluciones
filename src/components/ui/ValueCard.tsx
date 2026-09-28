import Icon from './Icon';
import type { ValueItem } from '@/content/types';

export default function ValueCard({ title, description, icon }: ValueItem) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="text-sm font-bold uppercase tracking-wide text-blue-950">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
