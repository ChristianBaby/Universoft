"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ServiceOption = "plataformas" | "web" | "telecomunicaciones" | "ciberseguridad" | "";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: ServiceOption;
  message: string;
}

const SERVICE_OPTIONS: { value: ServiceOption; label: string }[] = [
  { value: "plataformas", label: "Plataformas virtuales" },
  { value: "web", label: "Página web informativa" },
  { value: "telecomunicaciones", label: "Telecomunicaciones" },
  { value: "ciberseguridad", label: "Ciberseguridad" },
];

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-700">¡Mensaje enviado!</p>
        <p className="mt-2 text-sm text-green-600">
          Te contactaremos a la brevedad. Gracias por confiar en Universoft Systems.
        </p>
        <Button onClick={() => setStatus("idle")} variant="secondary" className="mt-6">
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy placeholder-navy/40 outline-none transition-all focus:border-blue focus:ring-2 focus:ring-blue/20 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Name + Company */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy/70">
            Nombre completo <span className="text-blue">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy/70">
            Empresa <span className="text-navy/40">(opcional)</span>
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy/70">
            Correo electrónico <span className="text-blue">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy/70">
            Teléfono <span className="text-blue">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+51 000 000 000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-navy/70">
          Servicio de interés <span className="text-blue">*</span>
        </label>
        <select
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {SERVICE_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold text-navy/70">
          Mensaje <span className="text-blue">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tu proyecto..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Hubo un error al enviar. Por favor intenta nuevamente.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "sending"}
        className="w-full py-4 text-base"
      >
        <Send size={16} />
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}
