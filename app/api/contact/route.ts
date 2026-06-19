import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ContactPayload;

  const { name, email, phone, service, message } = body;
  if (!name || !email || !phone || !service || !message) {
    return NextResponse.json({ error: "Campos requeridos incompletos." }, { status: 400 });
  }

  /*
   * TODO: Integrar servicio de envío de correo.
   * Opciones: Resend (recomendado), EmailJS, Nodemailer.
   *
   * Ejemplo con Resend:
   *   import { Resend } from "resend";
   *   const resend = new Resend(process.env.RESEND_API_KEY);
   *   await resend.emails.send({ from, to, subject, html });
   *
   * Configurar la variable de entorno RESEND_API_KEY en .env.local
   */

  console.log("Nuevo contacto recibido:", { name, email, phone, service, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}
