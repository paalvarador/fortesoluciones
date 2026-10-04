import Icon from './Icon';
import type { ValueItem } from '@/content/types';

export default function ValueCard({ title, description, icon }: ValueItem) {
  return (
    <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-md bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <span
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-600 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy-100 bg-white text-brand-600 transition-colors group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-bold uppercase leading-tight tracking-wide text-navy-900">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
