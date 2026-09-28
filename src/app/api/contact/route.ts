import { Resend } from 'resend';
import { validateContactForm } from '@/lib/validateContactForm';
import { contact } from '@/content/site';

const FALLBACK_MESSAGE = `El formulario no está disponible temporalmente. Escríbenos por WhatsApp al ${contact.phoneDisplay} o al correo ${contact.email}.`;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'validation', fieldErrors: {} }, { status: 400 });
  }

  // Honeypot: si el campo trampa viene lleno, es casi seguro un bot.
  // Respondemos éxito falso sin enviar el correo, para no delatar al bot.
  if (
    typeof body === 'object' &&
    body !== null &&
    'empresaWeb' in body &&
    typeof (body as Record<string, unknown>).empresaWeb === 'string' &&
    (body as Record<string, unknown>).empresaWeb !== ''
  ) {
    console.warn('[contact] honeypot triggered, discarding submission silently');
    return Response.json({ ok: true }, { status: 200 });
  }

  const result = validateContactForm(body);
  if (!result.ok) {
    return Response.json(
      { ok: false, error: 'validation', fieldErrors: result.fieldErrors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, error: 'config', message: FALLBACK_MESSAGE },
      { status: 503 },
    );
  }

  const { nombre, empresa, telefono, correo, tipoVehiculo, servicio, mensaje } = result.data;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'FORTE Soluciones <onboarding@resend.dev>',
      to: contact.email,
      replyTo: correo,
      subject: `Nuevo contacto de ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Empresa: ${empresa ?? '-'}`,
        `Teléfono: ${telefono}`,
        `Correo: ${correo}`,
        `Tipo de vehículo o equipo: ${tipoVehiculo ?? '-'}`,
        `Servicio requerido: ${servicio ?? '-'}`,
        '',
        'Mensaje:',
        mensaje,
      ].join('\n'),
    });
  } catch (error) {
    console.error('[contact] resend send failed', error);
    return Response.json(
      { ok: false, error: 'send_failed', message: FALLBACK_MESSAGE },
      { status: 502 },
    );
  }

  return Response.json({ ok: true }, { status: 200 });
}
