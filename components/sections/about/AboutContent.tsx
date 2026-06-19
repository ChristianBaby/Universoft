import { Target, Eye, Heart } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const VALUES = [
  "Compromiso con resultados",
  "Calidad y mejora continua",
  "Transparencia",
  "Innovacion",
  "Seguridad y responsabilidad con la informacion",
];

const CARDS = [
  {
    icon: Target,
    title: "Mision",
    content:
      "Impulsar el crecimiento de las empresas mediante soluciones de software confiables, seguras y a la medida de sus necesidades.",
  },
  {
    icon: Eye,
    title: "Vision",
    content:
      "Ser una empresa de tecnologia reconocida por la calidad, innovacion y cercania con la que transformamos las ideas de nuestros clientes en realidades digitales.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Who we are */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="Quienes somos"
                title="Una empresa comprometida con tu transformacion digital"
                description="Universoft Systems es una empresa de desarrollo de software comprometida con crear soluciones tecnologicas que generen valor real. Combinamos talento tecnico, creatividad y un trato cercano para acompanar a cada empresa en su transformacion digital."
                centered={false}
              />
            </div>
            <Reveal delay={0.2} direction="right">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="Equipo de trabajo tecnologico"
                  width={800}
                  height={600}
                  className="rounded-3xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-3xl" />
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-2xl bg-navy/80 p-6 backdrop-blur-md border border-white/10">
                    <p className="text-sm leading-relaxed text-white/80 italic">
                      &ldquo;Nuestro objetivo es que la tecnologia no sea un obstaculo, sino el
                      puente que lleva tu empresa al futuro.&rdquo;
                    </p>
                    <p className="mt-2 text-xs font-semibold text-blue-bright">
                      — Equipo Universoft Systems
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {CARDS.map(({ icon: Icon, title, content }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="flex flex-col gap-4 rounded-2xl border border-navy/6 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all hover:shadow-lg hover:border-blue/20 hover:-translate-y-1">
                  <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-blue to-blue-bright" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-bright text-white shadow-md shadow-blue/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-navy/60">{content}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-4 rounded-2xl border border-navy/6 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all hover:shadow-lg hover:border-blue/20 hover:-translate-y-1">
                <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-blue to-blue-bright" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-bright text-white shadow-md shadow-blue/20">
                  <Heart size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">Valores</h3>
                <ul className="flex flex-col gap-2">
                  {VALUES.map((value) => (
                    <li key={value} className="flex items-center gap-2 text-sm text-navy/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue to-blue-bright shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
