import type { APIRoute } from "astro";

export const prerender = false;

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  plataformas: "Plataformas virtuales",
  web: "Página web informativa",
  telecomunicaciones: "Telecomunicaciones",
  ciberseguridad: "Ciberseguridad",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const POST: APIRoute = async ({ request }) => {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (body.website) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const company = body.company?.trim() ?? "";

  if (!name || !email || !phone || !service || !message) {
    return Response.json({ error: "Campos requeridos incompletos." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || !SERVICE_LABELS[service]) {
    return Response.json({ error: "Datos inválidos." }, { status: 400 });
  }
  if (message.length > 5000 || name.length > 200) {
    return Response.json({ error: "Mensaje demasiado largo." }, { status: 400 });
  }

  const apiKey = import.meta.env.BREVO_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL;
  const from = import.meta.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contacto: faltan BREVO_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL.");
    return Response.json({ error: "Servicio de correo no disponible." }, { status: 503 });
  }

  const serviceLabel = SERVICE_LABELS[service];
  const response = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Universoft Systems", email: from },
      to: [{ email: to }],
      replyTo: { email, name },
      subject: `Nueva cotización: ${serviceLabel}`,
      htmlContent: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company || "No indicada")}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Servicio:</strong> ${escapeHtml(serviceLabel)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!response.ok) {
    console.error("Contacto: error de Brevo", response.status, await response.text());
    return Response.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
  }

  return Response.json({ ok: true }, { status: 200 });
};
