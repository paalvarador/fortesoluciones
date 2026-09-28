import type { ServiceListItem } from './types';

export const titulo = 'Soluciones para mantener tu vehículo en movimiento.';

export const intro =
  'Atendemos vehículos livianos y pesados, gasolina y diésel, con servicios de mantenimiento preventivo, correctivo, diagnóstico y reparación.';

export const services: ServiceListItem[] = [
  { id: 'mantenimiento-preventivo-correctivo', label: 'Mantenimiento preventivo y correctivo', icon: 'wrench' },
  { id: 'diagnostico-electronico-electrico', label: 'Diagnóstico electrónico y eléctrico', icon: 'zap' },
  { id: 'reparacion-mantenimiento-motores', label: 'Reparación y mantenimiento de motores', icon: 'cog' },
  { id: 'sistemas-combustible', label: 'Sistemas de combustible', icon: 'droplets' },
  { id: 'sistemas-refrigeracion-lubricacion', label: 'Sistemas de refrigeración y lubricación', icon: 'thermometer' },
  { id: 'frenos-suspension', label: 'Frenos y suspensión', icon: 'gauge' },
  { id: 'electricidad-electronica-automotriz', label: 'Electricidad y electrónica automotriz', icon: 'zap' },
  { id: 'aire-acondicionado', label: 'Aire acondicionado', icon: 'thermometer' },
  { id: 'carroceria-pintura', label: 'Carrocería y pintura', icon: 'paintbrush' },
  { id: 'lavado-detailing', label: 'Lavado y detailing', icon: 'droplets' },
];
