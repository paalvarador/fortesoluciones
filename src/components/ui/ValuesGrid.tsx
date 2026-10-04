import ValueCard from './ValueCard';
import type { ValueItem } from '@/content/types';

type Props = { values: ValueItem[]; className?: string };

export default function ValuesGrid({ values, className = '' }: Props) {
  return (
    // Flex en vez de grid para que la última fila incompleta quede centrada.
    <div className={`mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-4 ${className}`}>
      {values.map((value) => (
        <div key={value.id} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
          <ValueCard {...value} />
        </div>
      ))}
    </div>
  );
}
