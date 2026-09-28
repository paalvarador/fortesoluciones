type Props = {
  title: string;
  intro?: string;
};

export default function PageHeader({ title, intro }: Props) {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 px-4 py-14 text-center sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">{title}</h1>
        {intro && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 md:text-lg">{intro}</p>
        )}
      </div>
    </div>
  );
}
