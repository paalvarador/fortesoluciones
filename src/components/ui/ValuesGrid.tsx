import ValueCard from './ValueCard';
import type { ValueItem } from '@/content/types';

type Props = { values: ValueItem[]; className?: string };

export default function ValuesGrid({ values, className = '' }: Props) {
  return (
    <div className={`mx-auto grid max-w-5xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch ${className}`}>
      {values.map((value) => (
        <ValueCard key={value.id} {...value} />
      ))}
    </div>
  );
}
