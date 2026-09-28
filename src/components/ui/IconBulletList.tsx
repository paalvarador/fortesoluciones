import Icon from './Icon';
import type { ServiceListItem } from '@/content/types';

type Props = {
  items: ServiceListItem[];
  className?: string;
};

export default function IconBulletList({ items, className = '' }: Props) {
  return (
    <ul className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Icon name={item.icon} className="h-5 w-5" />
          </span>
          <span className="text-sm font-medium text-slate-700">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
