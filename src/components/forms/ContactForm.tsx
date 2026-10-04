'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { fields, ctaLabel, consentText } from '@/content/contacto';
import { contact } from '@/content/site';

type FieldValues = Record<string, string>;

const initialValues: FieldValues = Object.fromEntries(fields.map((field) => [field.name, '']));

type SubmitState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success' }
  | { status: 'field-errors'; errors: Partial<Record<string, string>> }
  | { status: 'server-error'; message: string };

export default function ContactForm() {
  const [values, setValues] = useState<FieldValues>(initialValues);
  const [consent, setConsent] = useState(false);
  const [empresaWeb, setEmpresaWeb] = useState('');
  const [state, setState] = useState<SubmitState>({ status: 'idle' });

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateClientSide = (): Partial<Record<string, string>> => {
    const errors: Partial<Record<string, string>> = {};

    for (const field of fields) {
      const value = values[field.name]?.trim() ?? '';
      if (field.required && !value) {
        errors[field.name] = `${field.label} es requerido.`;
      }
    }

    if (values.mensaje && values.mensaje.trim().length > 0 && values.mensaje.trim().length < 10) {
      errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    if (values.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo.trim())) {
      errors.correo = 'El correo no es válido.';
    }

    if (!consent) {
      errors.consentimiento = 'Debes aceptar el tratamiento de datos personales.';
    }

    return errors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const clientErrors = validateClientSide();
    if (Object.keys(clientErrors).length > 0) {
      setState({ status: 'field-errors', errors: clientErrors });
      return;
    }

    setState({ status: 'submitting' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, consentimiento: consent, empresaWeb }),
      });

      const result = await response.json();

      if (result.ok) {
        setState({ status: 'success' });
        setValues(initialValues);
        setConsent(false);
        setEmpresaWeb('');
        return;
      }

      if (result.error === 'validation') {
        setState({ status: 'field-errors', errors: result.fieldErrors ?? {} });
        return;
      }

      setState({
        status: 'server-error',
        message:
          result.message ??
          'El formulario no está disponible temporalmente. Escríbenos por WhatsApp o al correo.',
      });
    } catch {
      setState({
        status: 'server-error',
        message:
          'El formulario no está disponible temporalmente. Escríbenos por WhatsApp o al correo.',
      });
    }
  };

  const fieldErrors = state.status === 'field-errors' ? state.errors : {};

  const inputClasses = (hasError: boolean) =>
    `w-full rounded-md border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
      hasError
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
        : 'border-slate-200 focus:border-brand-600 focus:ring-brand-600/15'
    }`;

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {fields.map((field) => {
          const hasError = Boolean(fieldErrors[field.name]);
          return (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label htmlFor={field.name} className="font-display text-sm font-bold uppercase tracking-wide text-navy-900">
                {field.label}
                {field.required && (
                  <span aria-hidden="true" className="text-red-600">
                    {' '}
                    *
                  </span>
                )}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  rows={4}
                  value={values[field.name] ?? ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? `${field.name}-error` : undefined}
                  className={inputClasses(hasError)}
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  value={values[field.name] ?? ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? `${field.name}-error` : undefined}
                  className={inputClasses(hasError)}
                />
              )}
              {fieldErrors[field.name] && (
                <p id={`${field.name}-error`} className="text-xs font-medium text-red-600">
                  {fieldErrors[field.name]}
                </p>
              )}
            </div>
          );
        })}

        {/* Campo honeypot: oculto para personas, visible para bots que autocompletan todo. */}
        <div
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
          aria-hidden="true"
        >
          <label htmlFor="empresaWeb">No completar este campo</label>
          <input
            id="empresaWeb"
            name="empresaWeb"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={empresaWeb}
            onChange={(e) => setEmpresaWeb(e.target.value)}
          />
        </div>

        <div className="flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 p-3">
          <input
            id="consentimiento"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={Boolean(fieldErrors.consentimiento)}
            aria-describedby={fieldErrors.consentimiento ? 'consentimiento-error' : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 accent-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
          />
          <label htmlFor="consentimiento" className="text-sm leading-relaxed text-slate-600">
            {consentText}{' '}
            <Link href="/privacidad" className="font-semibold text-brand-600 underline">
              Ver aviso de privacidad
            </Link>
          </label>
        </div>
        {fieldErrors.consentimiento && (
          <p id="consentimiento-error" className="text-xs font-medium text-red-600">
            {fieldErrors.consentimiento}
          </p>
        )}

        {state.status === 'server-error' && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
            <p>{state.message}</p>
          </div>
        )}

        {state.status === 'success' && (
          <div
            role="status"
            className="flex items-start gap-2 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
            <p>¡Gracias! Tu mensaje fue enviado, un asesor FORTE se pondrá en contacto contigo.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={state.status === 'submitting'}
          className="w-full rounded-full bg-brand-600 px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-900/25 transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {state.status === 'submitting' ? 'Enviando...' : ctaLabel}
        </button>
      </form>

      <p className="text-sm text-slate-600">
        También puedes escribirnos directamente al{' '}
        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-600 underline"
        >
          WhatsApp {contact.phoneDisplay}
        </a>
        .
      </p>
    </div>
  );
}
