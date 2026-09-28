import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import ContactForm from '@/components/forms/ContactForm';
import { fields } from '@/content/contacto';

describe('ContactForm — honeypot', () => {
  beforeEach(() => {
    // El componente no hace fetch al montar, pero se aísla de la red por si acaso.
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve({ json: () => Promise.resolve({ ok: true }) })),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    cleanup();
  });

  it('el input honeypot (name="empresaWeb") existe en el DOM', () => {
    render(<ContactForm />);
    const honeypot = document.querySelector('input[name="empresaWeb"]');
    expect(honeypot).not.toBeNull();
  });

  it('el input honeypot tiene tabIndex={-1}, quedando fuera del orden de foco por Tab', () => {
    render(<ContactForm />);
    const honeypot = document.querySelector('input[name="empresaWeb"]') as HTMLInputElement;
    expect(honeypot.tabIndex).toBe(-1);
  });

  it('el contenedor del honeypot tiene aria-hidden="true" (oculta también al input para lectores de pantalla)', () => {
    render(<ContactForm />);
    const honeypot = document.querySelector('input[name="empresaWeb"]') as HTMLInputElement;
    const hiddenAncestor = honeypot.closest('[aria-hidden="true"]');
    expect(hiddenAncestor).not.toBeNull();
  });

  it('el honeypot se oculta con posicionamiento fuera de pantalla, no con display:none (para no delatar el truco a los bots)', () => {
    render(<ContactForm />);
    const honeypot = document.querySelector('input[name="empresaWeb"]') as HTMLInputElement;
    const container = honeypot.parentElement as HTMLElement;
    expect(container.style.display).not.toBe('none');
    expect(container.style.position).toBe('absolute');
    expect(container.style.left).toBe('-9999px');
  });

  it('el honeypot no aparece en el orden secuencial de foco (todos los demás campos tienen tabIndex >= 0)', () => {
    render(<ContactForm />);
    const focusableInputs = Array.from(
      document.querySelectorAll('input, textarea, button'),
    ) as HTMLElement[];
    const honeypot = document.querySelector('input[name="empresaWeb"]');

    for (const el of focusableInputs) {
      if (el === honeypot) continue;
      expect(el.tabIndex).not.toBe(-1);
    }
    expect((honeypot as HTMLElement).tabIndex).toBe(-1);
  });
});

describe('ContactForm — campos requeridos reales', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve({ json: () => Promise.resolve({ ok: true }) })),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    cleanup();
  });

  const requiredFields = fields.filter((f) => f.required);
  const optionalFields = fields.filter((f) => !f.required);

  it('contacto.ts declara al menos un campo requerido (sanity check)', () => {
    expect(requiredFields.length).toBeGreaterThan(0);
  });

  it.each(requiredFields)(
    'el campo requerido "$name" está presente y marcado required en el DOM',
    (field) => {
      render(<ContactForm />);
      const el = document.querySelector(`#${field.name}`) as HTMLInputElement | HTMLTextAreaElement | null;
      expect(el, `no se encontró el elemento #${field.name}`).not.toBeNull();
      expect(el?.required).toBe(true);
    },
  );

  it.each(optionalFields)('el campo opcional "$name" está presente pero no required', (field) => {
    render(<ContactForm />);
    const el = document.querySelector(`#${field.name}`) as HTMLInputElement | HTMLTextAreaElement | null;
    expect(el, `no se encontró el elemento #${field.name}`).not.toBeNull();
    expect(el?.required).toBe(false);
  });

  it('el checkbox de consentimiento está presente en el DOM', () => {
    render(<ContactForm />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
