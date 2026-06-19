import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-deep to-blue-dark py-24">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <GradientBlob color="blue" size="lg" className="-top-40 -left-20 opacity-30" />
      <GradientBlob color="blue-bright" size="md" className="-bottom-20 -right-20 opacity-20" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            ¿Listo para llevar tu empresa al siguiente nivel?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-lg">
            Cuentanos tu proyecto y te damos una propuesta sin compromiso. Estamos
            listos para ayudarte.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contacto" variant="primary" className="px-8 py-4 text-base">
              Solicita una cotizacion
            </Button>
            <Button href="/servicios" variant="outline" className="px-8 py-4 text-base">
              Ver servicios
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
