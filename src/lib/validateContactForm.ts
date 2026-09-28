// Función PURA de validación — sin imports de Next.js, testeable de forma aislada.

export type ContactRequestBody = {
  nombre: string;
  empresa?: string;
  telefono: string;
  correo: string;
  tipoVehiculo?: string;
  servicio?: string;
  mensaje: string;
  consentimiento: boolean;
  empresaWeb: string;
};

export type ValidationResult =
  | { ok: true; data: ContactRequestBody }
  | { ok: false; fieldErrors: Partial<Record<keyof ContactRequestBody, string>> };

const MAX_FIELD_LENGTH = 5000;
const MAX_OPTIONAL_LENGTH = 200;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+-]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string';
}

function countDigits(value: string): number {
  return (value.match(/\d/g) ?? []).length;
}

export function validateContactForm(input: unknown): ValidationResult {
  if (typeof input !== 'object' || input === null) {
    return { ok: false, fieldErrors: {} };
  }

  const body = input as Record<string, unknown>;
  const fieldErrors: Partial<Record<keyof ContactRequestBody, string>> = {};

  const nombreRaw = isNonEmptyString(body.nombre) ? body.nombre.trim() : '';
  if (!nombreRaw) {
    fieldErrors.nombre = 'El nombre es requerido.';
  } else if (nombreRaw.length < 2) {
    fieldErrors.nombre = 'El nombre debe tener al menos 2 caracteres.';
  } else if (nombreRaw.length > MAX_FIELD_LENGTH) {
    fieldErrors.nombre = 'El nombre es demasiado largo.';
  }

  const empresaRaw = isNonEmptyString(body.empresa) ? body.empresa.trim() : '';
  if (empresaRaw.length > MAX_OPTIONAL_LENGTH) {
    fieldErrors.empresa = 'El nombre de la empresa es demasiado largo.';
  }

  const telefonoRaw = isNonEmptyString(body.telefono) ? body.telefono.trim() : '';
  if (!telefonoRaw) {
    fieldErrors.telefono = 'El teléfono es requerido.';
  } else if (!PHONE_REGEX.test(telefonoRaw)) {
    fieldErrors.telefono = 'El teléfono solo puede contener dígitos, espacios, + o -.';
  } else if (countDigits(telefonoRaw) < 7) {
    fieldErrors.telefono = 'El teléfono debe tener al menos 7 dígitos.';
  } else if (telefonoRaw.length > MAX_FIELD_LENGTH) {
    fieldErrors.telefono = 'El teléfono es demasiado largo.';
  }

  const correoRaw = isNonEmptyString(body.correo) ? body.correo.trim() : '';
  if (!correoRaw) {
    fieldErrors.correo = 'El correo es requerido.';
  } else if (!EMAIL_REGEX.test(correoRaw)) {
    fieldErrors.correo = 'El correo no es válido.';
  } else if (correoRaw.length > MAX_FIELD_LENGTH) {
    fieldErrors.correo = 'El correo es demasiado largo.';
  }

  const tipoVehiculoRaw = isNonEmptyString(body.tipoVehiculo) ? body.tipoVehiculo.trim() : '';
  if (tipoVehiculoRaw.length > MAX_OPTIONAL_LENGTH) {
    fieldErrors.tipoVehiculo = 'Este campo es demasiado largo.';
  }

  const servicioRaw = isNonEmptyString(body.servicio) ? body.servicio.trim() : '';
  if (servicioRaw.length > MAX_OPTIONAL_LENGTH) {
    fieldErrors.servicio = 'Este campo es demasiado largo.';
  }

  const mensajeRaw = isNonEmptyString(body.mensaje) ? body.mensaje.trim() : '';
  if (!mensajeRaw) {
    fieldErrors.mensaje = 'El mensaje es requerido.';
  } else if (mensajeRaw.length < 10) {
    fieldErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  } else if (mensajeRaw.length > MAX_FIELD_LENGTH) {
    fieldErrors.mensaje = 'El mensaje es demasiado largo.';
  }

  if (body.consentimiento !== true) {
    fieldErrors.consentimiento = 'Debes aceptar el tratamiento de datos personales.';
  }

  const empresaWebRaw = isNonEmptyString(body.empresaWeb) ? body.empresaWeb : '';

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    data: {
      nombre: nombreRaw,
      empresa: empresaRaw || undefined,
      telefono: telefonoRaw,
      correo: correoRaw,
      tipoVehiculo: tipoVehiculoRaw || undefined,
      servicio: servicioRaw || undefined,
      mensaje: mensajeRaw,
      consentimiento: true,
      empresaWeb: empresaWebRaw,
    },
  };
}
