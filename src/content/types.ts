export type NavItem = { label: string; href: string };

// ver Icon.tsx para el catálogo — no importes JSX de lucide-react aquí
export type IconName = string;

export type ServiceListItem = { id: string; label: string; icon: IconName };

export type ValueItem = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export type ProcessStep = { step: number; title: string; description: string };

export type CTAContent = {
  title: string;
  subtitle?: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ContentImage = { src: string; alt: string };

export type ContactChannel = {
  phoneDisplay: string;
  phoneIntl: string;
  whatsappUrl: string;
  email: string;
  address: string;
};

export type RouteSeo = { title: string; description: string };

export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'tel' | 'email' | 'textarea';
  required: boolean;
};
