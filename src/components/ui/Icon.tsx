import {
  Wrench,
  Gauge,
  ShieldCheck,
  Cog,
  Zap,
  Thermometer,
  Paintbrush,
  Droplets,
  Truck,
  MapPin,
  ClipboardCheck,
  Package,
  Container,
  FileText,
  Shield,
  History,
  Camera,
  Link2,
  Users,
  Heart,
  Award,
  Target,
  Handshake,
  Compass,
  Lightbulb,
  Phone,
  Mail,
  type LucideProps,
} from 'lucide-react';
import type { IconName } from '@/content/types';

export const icons = {
  wrench: Wrench,
  gauge: Gauge,
  'shield-check': ShieldCheck,
  cog: Cog,
  zap: Zap,
  thermometer: Thermometer,
  paintbrush: Paintbrush,
  droplets: Droplets,
  truck: Truck,
  'map-pin': MapPin,
  'clipboard-check': ClipboardCheck,
  package: Package,
  container: Container,
  'file-text': FileText,
  shield: Shield,
  history: History,
  camera: Camera,
  'link-2': Link2,
  users: Users,
  heart: Heart,
  award: Award,
  target: Target,
  handshake: Handshake,
  compass: Compass,
  lightbulb: Lightbulb,
  phone: Phone,
  mail: Mail,
} satisfies Record<string, React.ComponentType<LucideProps>>;

type Props = LucideProps & { name: IconName };

export default function Icon({ name, ...props }: Props) {
  const IconComponent = icons[name as keyof typeof icons] ?? Wrench;
  return <IconComponent {...props} />;
}
