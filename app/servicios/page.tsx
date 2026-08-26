import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { HowWeWork } from "@/components/sections/services/HowWeWork";
import { CtaFinal } from "@/components/sections/home/CtaFinal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BackgroundOrbitals } from "@/components/ui/BackgroundOrbitals";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { SITE_URL } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Plataformas virtuales, paginas web, telecomunicaciones y ciberseguridad para empresas en Peru.",
  alternates: {
    canonical: `${SITE_URL}/servicios`,
  },
};

export default function ServiciosPage() {
  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
        <BackgroundOrbitals variant="dark" />
        <GradientBlob color="blue" size="lg" className="-top-32 -right-32 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionHeader
            as="h1"
            label="Nuestros servicios"
            title="Soluciones tecnologicas integrales"
            description="Cada servicio se adapta a las necesidades y objetivos de tu empresa. Trabajamos contigo para encontrar la solucion ideal."
            light
          />
        </div>
      </section>

      <ServicesGrid />
      <HowWeWork />
      <CtaFinal />
    </main>
  );
}
