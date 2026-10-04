import { MapPin, Phone, Mail } from 'lucide-react';
import { contact } from '@/content/site';

type Props = { className?: string };

const cardClasses =
  'group flex flex-col items-center rounded-md bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover';
const iconClasses =
  'mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white transition-colors group-hover:bg-brand-600';
const labelClasses = 'eyebrow text-xs';

export default function ContactInfoCards({ className = '' }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 ${className}`}>
      <div className={cardClasses}>
        <span className={iconClasses}>
          <MapPin size={24} />
        </span>
        <p className={labelClasses}>Ubicación</p>
        <p className="mt-2 text-sm font-semibold text-navy-900">{contact.address}</p>
      </div>

      <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        <span className={iconClasses}>
          <Phone size={24} />
        </span>
        <p className={labelClasses}>Llámanos</p>
        <p className="mt-2 text-sm font-semibold text-navy-900">{contact.phoneDisplay}</p>
      </a>

      <a href={`mailto:${contact.email}`} className={cardClasses}>
        <span className={iconClasses}>
          <Mail size={24} />
        </span>
        <p className={labelClasses}>Correo</p>
        <p className="mt-2 break-words text-sm font-semibold text-navy-900">{contact.email}</p>
      </a>
    </div>
  );
}
