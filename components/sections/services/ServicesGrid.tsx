import { Monitor, Globe, Network, ShieldCheck, CheckCircle2, ArrowRight, type LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants/services";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Monitor,
  Globe,
  Network,
  ShieldCheck,
};

export function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-24">
          {SERVICES.map(({ id, title, description, features, icon, image, href }, i) => {
            const Icon = ICON_MAP[icon] ?? Monitor;
            const isEven = i % 2 === 0;

            return (
              <Reveal key={id}>
                <div
                  id={id}
                  className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                    !isEven ? "lg:[&>*:first-child]:order-last" : ""
                  }`}
                >
                  {/* Image block */}
                  <div className="flex items-center justify-center">
                    <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl lg:h-80">
                      {image ? (
                        <>
                          <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                        </>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-navy">
                          <Icon size={72} className="text-blue-bright" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-bright text-white shadow-md shadow-blue/20">
                      <Icon size={20} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-navy/60">{description}</p>
                    <ul className="mt-6 flex flex-col gap-3">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue" />
                          <span className="text-sm text-navy/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-bright transition-colors"
                    >
                      Ver mas detalles
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
