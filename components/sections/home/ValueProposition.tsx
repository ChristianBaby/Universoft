import { Code2, Cpu, Users, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BackgroundOrbitals } from "@/components/ui/BackgroundOrbitals";

const VALUES = [
  {
    icon: Code2,
    title: "Software a medida",
    description: "Construimos exactamente lo que tu empresa necesita, sin soluciones genericas.",
  },
  {
    icon: Cpu,
    title: "Tecnologia moderna",
    description: "Usamos las mejores herramientas y practicas del mercado para garantizar calidad.",
  },
  {
    icon: Users,
    title: "Acompanamiento real",
    description: "Te asesoramos desde la idea hasta el lanzamiento y el soporte posterior.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad primero",
    description: "Protegemos tu informacion y la de tus clientes en cada linea de codigo.",
  },
];

export function ValueProposition() {
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      <BackgroundOrbitals variant="light" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Nuestra propuesta"
          title="¿Por que trabajar con nosotros?"
          description="Cada proyecto es unico. Por eso ofrecemos soluciones a medida con un equipo comprometido con tu crecimiento."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="group flex flex-col gap-4 rounded-2xl border border-navy/6 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-blue/20 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-bright text-white shadow-lg shadow-blue/20">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-base font-semibold text-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
