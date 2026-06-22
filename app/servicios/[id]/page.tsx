import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor, Globe, Network, ShieldCheck,
  Zap, Database, Users, TrendingUp,
  Search, Smartphone, BarChart3,
  Wifi, Phone, Server, Shield,
  FileCheck, Eye, GraduationCap,
  ArrowLeft, ChevronDown, CheckCircle2,
  type LucideProps,
} from "lucide-react";
import { SERVICES } from "@/lib/constants/services";
import { Button } from "@/components/ui/Button";
import { BackgroundOrbitals } from "@/components/ui/BackgroundOrbitals";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { CtaFinal } from "@/components/sections/home/CtaFinal";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Monitor, Globe, Network, ShieldCheck,
  Zap, Database, Users, TrendingUp,
  Search, Smartphone, BarChart3,
  Wifi, Phone, Server, Shield,
  FileCheck, Eye, GraduationCap,
};

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return {};
  return {
    title: service.title,
    description: service.longDescription ?? service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);

  if (!service) notFound();

  const ServiceIcon = iconMap[service.icon] ?? Monitor;

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
        <BackgroundOrbitals variant="dark" />
        <GradientBlob color="blue" size="lg" className="-top-32 -right-32 opacity-30" />
        <GradientBlob color="blue-bright" size="md" className="bottom-0 left-1/4 opacity-20" />

        {service.heroImage && (
          <div className="absolute inset-0">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover opacity-15"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
          </div>
        )}

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Link
            href="/servicios"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Todos los servicios
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-blue-bright text-white shadow-lg shadow-blue/30">
              <ServiceIcon size={24} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-bright">
              {service.title}
            </span>
          </div>

          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl max-w-3xl">
            {service.title}
          </h1>

          {service.longDescription && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg">
              {service.longDescription}
            </p>
          )}

          <div className="mt-8">
            <Button href="/contacto" variant="primary" className="px-8 py-4 text-base">
              Solicitar cotizacion
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue">
                Beneficios
              </span>
              <div className="mx-auto mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue to-blue-bright" />
              <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
                ¿Por que elegir este servicio?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {service.benefits.map((benefit) => {
                const BenefitIcon = iconMap[benefit.icon] ?? CheckCircle2;
                return (
                  <div
                    key={benefit.title}
                    className="group rounded-2xl border border-navy/8 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-blue/20"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue/10 to-blue-bright/10 text-blue transition-colors group-hover:from-blue group-hover:to-blue-bright group-hover:text-white">
                      <BenefitIcon size={22} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      {service.useCases && service.useCases.length > 0 && (
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue">
                Casos de uso
              </span>
              <div className="mx-auto mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue to-blue-bright" />
              <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
                ¿Como lo aplicamos?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {service.useCases.map((useCase, i) => (
                <div
                  key={useCase.title}
                  className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-bright text-sm font-bold text-white shadow-md shadow-blue/20">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy">{useCase.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue">
                Stack tecnologico
              </span>
              <div className="mx-auto mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue to-blue-bright" />
              <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
                Tecnologias que utilizamos
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-navy/10 bg-navy/[0.03] px-6 py-3 text-sm font-medium text-navy/80 transition-colors hover:border-blue/30 hover:bg-blue/5 hover:text-blue"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue">
                Preguntas frecuentes
              </span>
              <div className="mx-auto mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-blue to-blue-bright" />
              <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
                Resolvemos tus dudas
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {service.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-navy/8 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-navy select-none [&::-webkit-details-marker]:hidden list-none">
                    {item.question}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-navy/40 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-navy/60">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaFinal />
    </main>
  );
}
