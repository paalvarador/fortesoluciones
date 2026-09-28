import { describe, expect, it } from 'vitest';
import { validateContactForm, type ContactRequestBody } from './validateContactForm';

function omit<T extends object, K extends keyof T>(obj: T, key: K): Omit<T, K> {
  const copy = { ...obj };
  delete copy[key];
  return copy;
}

const validPayload: ContactRequestBody = {
  nombre: 'Juan Pérez',
  empresa: 'ACME S.A.',
  telefono: '0991234567',
  correo: 'juan@example.com',
  tipoVehiculo: 'Camión',
  servicio: 'Mantenimiento preventivo',
  mensaje: 'Necesito agendar una revisión técnica para mi vehículo lo antes posible.',
  consentimiento: true,
  empresaWeb: '',
};

describe('validateContactForm', () => {
  it('acepta un payload completo y válido, devolviendo los datos recortados/normalizados', () => {
    const result = validateContactForm(validPayload);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data).toEqual({
        nombre: 'Juan Pérez',
        empresa: 'ACME S.A.',
        telefono: '0991234567',
        correo: 'juan@example.com',
        tipoVehiculo: 'Camión',
        servicio: 'Mantenimiento preventivo',
        mensaje: 'Necesito agendar una revisión técnica para mi vehículo lo antes posible.',
        consentimiento: true,
        empresaWeb: '',
      });
    }
  });

  it('acepta un payload válido sin los campos opcionales (empresa, tipoVehiculo, servicio)', () => {
    const rest = omit(omit(omit(validPayload, 'empresa'), 'tipoVehiculo'), 'servicio');
    const result = validateContactForm(rest);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.empresa).toBeUndefined();
      expect(result.data.tipoVehiculo).toBeUndefined();
      expect(result.data.servicio).toBeUndefined();
    }
  });

  describe('entradas no-objeto', () => {
    it.each([null, undefined, 'string', 42, ['array'], true])(
      'devuelve ok:false sin lanzar excepción para input=%p',
      (input) => {
        expect(() => validateContactForm(input)).not.toThrow();
        const result = validateContactForm(input);
        expect(result.ok).toBe(false);
      },
    );
  });

  describe('nombre', () => {
    it('falta -> error requerido', () => {
      const rest = omit(validPayload, 'nombre');
      const result = validateContactForm(rest);
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.nombre).toBe('El nombre es requerido.');
    });

    it('vacío/solo espacios -> error requerido', () => {
      const result = validateContactForm({ ...validPayload, nombre: '   ' });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.nombre).toBe('El nombre es requerido.');
    });

    it('muy corto (1 caracter) -> error de longitud mínima', () => {
      const result = validateContactForm({ ...validPayload, nombre: 'A' });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.fieldErrors.nombre).toBe('El nombre debe tener al menos 2 caracteres.');
      }
    });

    it('exactamente 2 caracteres -> válido (límite inferior)', () => {
      const result = validateContactForm({ ...validPayload, nombre: 'Al' });
      expect(result.ok).toBe(true);
    });

    it('excede MAX_FIELD_LENGTH (5000) -> error de longitud máxima', () => {
      const result = validateContactForm({ ...validPayload, nombre: 'a'.repeat(5001) });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.nombre).toBe('El nombre es demasiado largo.');
    });

    it('exactamente 5000 caracteres -> válido (límite superior)', () => {
      const result = validateContactForm({ ...validPayload, nombre: 'a'.repeat(5000) });
      expect(result.ok).toBe(true);
    });
  });

  describe('telefono', () => {
    it('falta -> error requerido', () => {
      const rest = omit(validPayload, 'telefono');
      const result = validateContactForm(rest);
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.telefono).toBe('El teléfono es requerido.');
    });

    it('contiene letras -> error de caracteres inválidos', () => {
      const result = validateContactForm({ ...validPayload, telefono: '099abc4567' });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.fieldErrors.telefono).toBe(
          'El teléfono solo puede contener dígitos, espacios, + o -.',
        );
      }
    });

    it('menos de 7 dígitos -> error de longitud mínima', () => {
      const result = validateContactForm({ ...validPayload, telefono: '123456' });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.fieldErrors.telefono).toBe('El teléfono debe tener al menos 7 dígitos.');
      }
    });

    it('exactamente 7 dígitos -> válido (límite inferior)', () => {
      const result = validateContactForm({ ...validPayload, telefono: '1234567' });
      expect(result.ok).toBe(true);
    });

    it('acepta espacios, + y - además de dígitos', () => {
      const result = validateContactForm({ ...validPayload, telefono: '+593 99-123-4567' });
      expect(result.ok).toBe(true);
    });
  });

  describe('correo', () => {
    it('falta -> error requerido', () => {
      const rest = omit(validPayload, 'correo');
      const result = validateContactForm(rest);
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.correo).toBe('El correo es requerido.');
    });

    it.each(['sin-arroba.com', 'usuario@', '@dominio.com', 'usuario@dominio', 'a b@dominio.com'])(
      'formato inválido (%s) -> error',
      (correo) => {
        const result = validateContactForm({ ...validPayload, correo });
        expect(result.ok).toBe(false);
        if (!result.ok) expect(result.fieldErrors.correo).toBe('El correo no es válido.');
      },
    );
  });

  describe('mensaje', () => {
    it('falta -> error requerido', () => {
      const rest = omit(validPayload, 'mensaje');
      const result = validateContactForm(rest);
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.mensaje).toBe('El mensaje es requerido.');
    });

    it('muy corto (menos de 10 caracteres) -> error de longitud mínima', () => {
      const result = validateContactForm({ ...validPayload, mensaje: 'corto' });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.fieldErrors.mensaje).toBe('El mensaje debe tener al menos 10 caracteres.');
      }
    });

    it('exactamente 10 caracteres -> válido (límite inferior)', () => {
      const result = validateContactForm({ ...validPayload, mensaje: '1234567890' });
      expect(result.ok).toBe(true);
    });

    it('excede MAX_FIELD_LENGTH (5000) -> error de longitud máxima', () => {
      const result = validateContactForm({ ...validPayload, mensaje: 'a'.repeat(5001) });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.mensaje).toBe('El mensaje es demasiado largo.');
    });
  });

  describe('campos opcionales de texto (empresa, tipoVehiculo, servicio)', () => {
    it('empresa que excede MAX_OPTIONAL_LENGTH (200) -> error', () => {
      const result = validateContactForm({ ...validPayload, empresa: 'a'.repeat(201) });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.fieldErrors.empresa).toBe('El nombre de la empresa es demasiado largo.');
      }
    });

    it('empresa con exactamente 200 caracteres -> válido (límite superior)', () => {
      const result = validateContactForm({ ...validPayload, empresa: 'a'.repeat(200) });
      expect(result.ok).toBe(true);
    });

    it('tipoVehiculo que excede MAX_OPTIONAL_LENGTH (200) -> error', () => {
      const result = validateContactForm({ ...validPayload, tipoVehiculo: 'a'.repeat(201) });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.tipoVehiculo).toBe('Este campo es demasiado largo.');
    });

    it('servicio que excede MAX_OPTIONAL_LENGTH (200) -> error', () => {
      const result = validateContactForm({ ...validPayload, servicio: 'a'.repeat(201) });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.servicio).toBe('Este campo es demasiado largo.');
    });
  });

  describe('consentimiento', () => {
    it('false -> error', () => {
      const result = validateContactForm({ ...validPayload, consentimiento: false });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.fieldErrors.consentimiento).toBe(
          'Debes aceptar el tratamiento de datos personales.',
        );
      }
    });

    it('ausente -> error', () => {
      const rest = omit(validPayload, 'consentimiento');
      const result = validateContactForm(rest);
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.fieldErrors.consentimiento).toBe(
          'Debes aceptar el tratamiento de datos personales.',
        );
      }
    });

    it('valor truthy no-boolean (string "true") -> error, porque exige === true', () => {
      const result = validateContactForm({ ...validPayload, consentimiento: 'true' });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.fieldErrors.consentimiento).toBeDefined();
    });
  });

  describe('honeypot (empresaWeb)', () => {
    it('no participa en la validación: con contenido, sigue siendo ok:true', () => {
      // La lógica de descartar envíos de bots vive en el route handler
      // (src/app/api/contact/route.ts), no en validateContactForm. Aquí solo
      // se copia el valor recibido a la salida cuando el resto es válido.
      const result = validateContactForm({ ...validPayload, empresaWeb: 'contenido-de-bot' });
      expect(result.ok).toBe(true);
      if (result.ok) expect(result.data.empresaWeb).toBe('contenido-de-bot');
    });

    it('ausente -> se normaliza a string vacío, sin producir error', () => {
      const rest = omit(validPayload, 'empresaWeb');
      const result = validateContactForm(rest);
      expect(result.ok).toBe(true);
      if (result.ok) expect(result.data.empresaWeb).toBe('');
    });
  });
});
