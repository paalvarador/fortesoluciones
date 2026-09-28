import { Compass } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Compass className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">Error 404</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 md:text-4xl">
          No encontramos esta página.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-600">
          La página que buscas no existe o fue movida. Vuelve al inicio para seguir explorando las
          soluciones de FORTE.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Volver al inicio
          </Button>
        </div>
      </div>
    </main>
  );
}
