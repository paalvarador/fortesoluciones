import Icon from './Icon';
import type { ServiceListItem } from '@/content/types';

type Props = {
  items: ServiceListItem[];
  className?: string;
};

export default function IconBulletList({ items, className = '' }: Props) {
  return (
    <ul className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item.id}
          className="group flex items-center gap-4 rounded-md border-l-4 border-brand-600 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white transition-colors group-hover:bg-brand-600">
            <Icon name={item.icon} className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1 break-words font-display text-base font-semibold uppercase leading-tight tracking-wide text-navy-900">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
