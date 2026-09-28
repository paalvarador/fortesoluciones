type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-2xl px-4 text-center">
      {eyebrow && (
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>
          <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
        </div>
      )}
      <h2 className="text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
