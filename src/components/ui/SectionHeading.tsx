type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  /** Para secciones sobre fondo azul marino. */
  inverted?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  inverted = false,
}: Props) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl px-4 ${alignClasses}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${inverted ? 'text-brand-400' : ''}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-3xl font-bold uppercase leading-[1.05] tracking-tight md:text-[2.75rem] ${
          inverted ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg ${align === 'center' ? 'mx-auto max-w-xl' : ''} ${
            inverted ? 'text-navy-100' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
