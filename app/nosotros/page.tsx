import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/about/AboutContent";
import { CtaFinal } from "@/components/sections/home/CtaFinal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BackgroundOrbitals } from "@/components/ui/BackgroundOrbitals";
import { GradientBlob } from "@/components/ui/GradientBlob";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Universoft Systems: nuestra historia, mision, vision, valores y el equipo detras de cada proyecto.",
};

export default function NosotrosPage() {
  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
        <BackgroundOrbitals variant="dark" />
        <GradientBlob color="blue-bright" size="md" className="-top-20 left-1/3 opacity-25" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Sobre nosotros"
            title="Equipo comprometido con tu exito"
            description="Conoce a las personas detras de Universoft Systems y los principios que guian nuestro trabajo."
            light
          />
        </div>
      </section>

      <AboutContent />
      <CtaFinal />
    </main>
  );
}
