import Image from 'next/image';
import { Mail, Phone, MapPin, Settings } from 'lucide-react';

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

        {/* Icono de Motor / Construcción Animado */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-20 rounded-full h-32 w-32 mx-auto"></div>
          <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
            {/* Usamos el icono de Settings o Engine de Lucide */}
            <Settings className="w-16 h-16 text-blue-900 animate-[spin_8s_linear_infinite]" />
          </div>
        </div>

        {/* Mensaje Principal */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
            SITIO EN MANTENIMIENTO
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Estamos afinando los detalles de nuestra plataforma digital para ofrecerte 
            <span className="text-blue-700 font-semibold"> soluciones integrales en mecánica y logística</span>.
          </p>
        </div>

        {/* Info del Cliente extraída del PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
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

        {/* Datos Corporativos (Pie de página) */}
        <div className="pt-10 space-y-1">
          <p className="text-xs text-slate-400 font-semibold">PUNTOCAREC S.A.S.</p>
          <p className="text-[10px] text-slate-400">RUC: 0993388443001</p>
        </div>
      </div>
    </main>
  );
}