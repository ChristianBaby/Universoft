import { Monitor, Globe, Network, ShieldCheck, type LucideProps } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants/services";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Monitor,
  Globe,
  Network,
  ShieldCheck,
};

export function ServicesSummary() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Servicios"
          title="Soluciones tecnologicas para tu empresa"
          description="Ofrecemos un portafolio completo de servicios adaptados a las necesidades de cada negocio."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ id, title, description, icon, href, image }, i) => {
            const Icon = ICON_MAP[icon] ?? Monitor;
            return (
              <Reveal key={id} delay={i * 0.1}>
                <Link
                  href={href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-navy/6 bg-white transition-all duration-300 hover:shadow-xl hover:border-blue/30 hover:-translate-y-1"
                >
                  {/* Image header */}
                  {image && (
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-white shadow-md">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-navy">{title}</h3>
                    <p className="text-sm leading-relaxed text-navy/60 flex-1">{description}</p>
                    <span className="text-xs font-semibold text-blue group-hover:underline">
                      Ver mas →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
