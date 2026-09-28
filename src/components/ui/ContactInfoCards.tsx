import { MapPin, Phone, Mail } from 'lucide-react';
import { contact } from '@/content/site';

type Props = { className?: string };

export default function ContactInfoCards({ className = '' }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-5 md:grid-cols-3 ${className}`}>
      <div className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
        <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <MapPin size={24} />
        </span>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Ubicación
        </p>
        <p className="mt-1 text-sm font-medium text-slate-800">{contact.address}</p>
      </div>

      <div className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
        <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Phone size={24} />
        </span>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Llámanos
        </p>
        <p className="mt-1 text-sm font-medium text-slate-800">{contact.phoneDisplay}</p>
      </div>

      <div className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
        <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Mail size={24} />
        </span>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Correo</p>
        <p className="mt-1 break-words text-sm font-medium text-slate-800">{contact.email}</p>
      </div>
    </div>
  );
}
