import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import HeroSlider from './components/HeroSlider';

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-800">
      <div className="max-w-3xl w-full text-center space-y-8">

        {/* Logo del Cliente */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo-fortesoluciones.jpeg"
            alt="ForteSoluciones Logo"
            width={350}
            height={100}
            style={{ height: 'auto', width: 'auto' }}
            className="object-contain"
            priority
          />
        </div>

        {/* Slider de trabajos */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 tracking-tight">
            Algunos de nuestros trabajos realizados
          </h2>
          <HeroSlider />
        </div>

        {/* Info de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
            <MapPin className="text-blue-600 mb-3" size={28} />
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Ubicación</p>
            <p className="text-sm font-medium mt-1">Mapasingue Este. Av 5ta y Av. Vía a Daule</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
            <Phone className="text-blue-600 mb-3" size={28} />
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Llámanos</p>
            <p className="text-sm font-medium mt-1">0963571606</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
            <Mail className="text-blue-600 mb-3" size={28} />
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Correo</p>
            <p className="text-sm font-medium mt-1">informacion@fortesoluciones.com</p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 space-y-1">
          <p className="text-xs text-slate-400 font-semibold">PUNTOCAREC S.A.S.</p>
          <p className="text-[10px] text-slate-400">RUC: 0993388443001</p>
        </div>

      </div>
    </main>
  );
}
