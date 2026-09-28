import type { ProcessStep } from './types';

export const procesoForte: ProcessStep[] = [
  { step: 1, title: 'RECIBIMOS', description: 'Conocemos el vehículo y la necesidad.' },
  { step: 2, title: 'INSPECCIONAMOS', description: 'Realizamos una evaluación técnica.' },
  { step: 3, title: 'DIAGNOSTICAMOS', description: 'Identificamos causas y prioridades.' },
  { step: 4, title: 'PROPONEMOS', description: 'Presentamos solución y presupuesto.' },
  { step: 5, title: 'EJECUTAMOS', description: 'Realizamos el trabajo autorizado.' },
  { step: 6, title: 'VERIFICAMOS', description: 'Realizamos controles y pruebas.' },
  {
    step: 7,
    title: 'ENTREGAMOS',
    description: 'Explicamos el trabajo realizado y recomendaciones.',
  },
  { step: 8, title: 'ACOMPAÑAMOS', description: 'Mantenemos el seguimiento del vehículo.' },
];
