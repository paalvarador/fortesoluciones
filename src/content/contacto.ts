import type { FormField } from './types';

export const titulo = '¿Necesitas una solución?';

export const body = 'Cuéntanos qué necesitas y un asesor FORTE se pondrá en contacto contigo.';

export const ctaLabel = 'SOLICITAR ASESORÍA';

export const fields: FormField[] = [
  { name: 'nombre', label: 'Nombre', type: 'text', required: true },
  { name: 'empresa', label: 'Empresa', type: 'text', required: false },
  { name: 'telefono', label: 'Teléfono', type: 'tel', required: true },
  { name: 'correo', label: 'Correo', type: 'email', required: true },
  { name: 'tipoVehiculo', label: 'Tipo de vehículo o equipo', type: 'text', required: false },
  { name: 'servicio', label: 'Servicio requerido', type: 'text', required: false },
  { name: 'mensaje', label: 'Mensaje', type: 'textarea', required: true },
];

export const consentText =
  'Acepto el tratamiento de mis datos personales de acuerdo con el Aviso de Privacidad.';
