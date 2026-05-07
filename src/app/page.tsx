import Image from 'next/image';
import { Mail, Phone, MapPin, Wrench } from 'lucide-react'; // Instala lucide-react para los iconos

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-800">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/logo-fortesoluciones.jpeg" // Asegúrate de mover el logo a la carpeta /public
            alt="ForteSoluciones Logo"
            width={280}
            height={100}
            className="drop-shadow-md"
            priority
          />
        </div>

        {/* Mensaje Principal */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
            Sitio Web en Construcción
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Estamos trabajando para ofrecerte la mejor experiencia en 
            <strong> servicios automotrices y logísticos</strong>. 
            Pronto podrás conocer todo nuestro catálogo de soluciones integrales.
          </p>
        </div>

        {/* Badge de Estado */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium animate-pulse">
          <Wrench size={18} />
          <span>Lanzamiento Próximamente</span>
        </div>

        <hr className="border-slate-200" />

        {/* Información de Contacto (Extraída del PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
              <MapPin size={24} />
            </div>
            <p className="text-sm font-medium">Ubicación</p>
            <p className="text-xs text-slate-500">Mapasingue Este. Av 5ta y Av. Vía a Daule</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
              <Phone size={24} />
            </div>
            <p className="text-sm font-medium">Teléfono</p>
            <p className="text-xs text-slate-500">0993388443 (Puntocarec S.A.S.)</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
              <Mail size={24} />
            </div>
            <p className="text-sm font-medium">Contacto</p>
            <p className="text-xs text-slate-500">info@fortesoluciones.com</p>
          </div>
        </div>

        {/* Footer Pie de Página */}
        <footer className="pt-12 text-slate-400 text-xs">
          © {new Date().getFullYear()} ForteSoluciones - Todos los derechos reservados.
        </footer>
      </div>
    </main>
  );
}