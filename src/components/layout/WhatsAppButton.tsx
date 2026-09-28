import { MessageCircle } from 'lucide-react';
import { contact } from '@/content/site';

export default function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-4 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-900/20 transition-transform hover:scale-105 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
