import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants/contact";
import { BackgroundOrbitals } from "@/components/ui/BackgroundOrbitals";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuentanos tu proyecto y te enviaremos una propuesta personalizada sin compromiso.",
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
};

export default function ContactoPage() {
  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
        <BackgroundOrbitals variant="dark" />
        <GradientBlob color="blue" size="md" className="-bottom-20 -right-20 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionHeader
            as="h1"
            label="Contacto"
            title="Cuentanos tu proyecto"
            description="Te enviaremos una propuesta a tu medida, sin compromiso. Respondemos en menos de 24 horas."
            light
          />
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <h2 className="font-display text-2xl font-bold text-navy">Informacion de contacto</h2>

              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-navy/6 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-blue/30 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md shadow-green-500/20">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy/40">WhatsApp</p>
                      <p className="text-sm font-medium text-navy">+51 {CONTACT.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center gap-4 rounded-2xl border border-navy/6 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-blue/30 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-bright text-white shadow-md shadow-blue/20">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy/40">Telefono</p>
                      <p className="text-sm font-medium text-navy">{CONTACT.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-navy/6 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-blue/30 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-bright text-white shadow-md shadow-blue/20">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy/40">Correo</p>
                      <p className="text-sm font-medium text-navy">{CONTACT.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border border-navy/6 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-bright text-white shadow-md shadow-blue/20">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy/40">Ubicacion</p>
                    <p className="text-sm font-medium text-navy">{CONTACT.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-navy/6 bg-white p-8 shadow-lg">
              <h2 className="font-display mb-6 text-2xl font-bold text-navy">Envianos un mensaje</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
