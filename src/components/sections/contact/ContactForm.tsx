import { useEffect, useState } from "react";

type ServiceOption = "plataformas" | "web" | "telecomunicaciones" | "ciberseguridad" | "";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: ServiceOption;
  budget: string;
  timeline: string;
  message: string;
  website: string;
}

const BUDGET_OPTIONS = [
  "Menos de US$ 1,000",
  "US$ 1,000 a 5,000",
  "US$ 5,000 a 15,000",
  "Más de US$ 15,000",
  "Aún no lo sé",
];

const TIMELINE_OPTIONS = ["Lo antes posible", "En 1 a 3 meses", "Más de 3 meses", "Aún no lo sé"];

const SERVICE_OPTIONS: { value: Exclude<ServiceOption, "">; label: string }[] = [
  { value: "plataformas", label: "Plataformas virtuales" },
  { value: "web", label: "Página web informativa" },
  { value: "telecomunicaciones", label: "Redes y comunicaciones empresariales" },
  { value: "ciberseguridad", label: "Ciberseguridad para empresas" },
];

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
};

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder-navy/40 outline-none transition-all focus:border-blue focus:ring-2 focus:ring-blue/20";

const labelClass = "mb-1.5 block text-xs font-semibold text-navy/70";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("servicio");
    if (SERVICE_OPTIONS.some((option) => option.value === requested)) {
      setForm((prev) => ({ ...prev, service: requested as ServiceOption }));
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
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
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-700">¡Mensaje enviado!</p>
        <p className="mt-2 text-sm text-green-700/80">
          Te contactaremos a la brevedad. Gracias por confiar en Universoft Systems.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-xl border border-navy/15 px-6 py-3 text-sm font-semibold text-navy hover:border-blue/40"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nombre completo <span className="text-blue">*</span>
          </label>
          <input id="name" type="text" name="name" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Empresa <span className="text-navy/40">(opcional)</span>
          </label>
          <input id="company" type="text" name="company" autoComplete="organization" value={form.company} onChange={handleChange} placeholder="Nombre de tu empresa" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Correo electrónico <span className="text-blue">*</span>
          </label>
          <input id="email" type="email" name="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono <span className="text-blue">*</span>
          </label>
          <input id="phone" type="tel" name="phone" required autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+51 000 000 000" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Servicio de interés <span className="text-blue">*</span>
        </label>
        <select id="service" name="service" required value={form.service} onChange={handleChange} className={inputClass}>
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Presupuesto aproximado <span className="text-navy/40">(opcional)</span>
          </label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
            <option value="">Selecciona un rango</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            ¿Cuándo lo necesitas? <span className="text-navy/40">(opcional)</span>
          </label>
          <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange} className={inputClass}>
            <option value="">Selecciona un plazo</option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Mensaje <span className="text-blue">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Cuéntanos sobre tu proyecto..." className={`${inputClass} resize-none`} />
      </div>

      {/* Campo trampa para bots: oculto a personas */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">No completar</label>
        <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Hubo un error al enviar. Por favor intenta nuevamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-blue py-4 text-base font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
