"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BackgroundOrbitals } from "@/components/ui/BackgroundOrbitals";

const REASONS = [
  "Equipo especializado en desarrollo de software.",
  "Soluciones escalables y totalmente a medida.",
  "Procesos claros y comunicacion constante.",
  "Soporte y mantenimiento posterior a la entrega.",
];

const STATS = [
  { value: 100, suffix: "%", label: "Proyectos completados" },
  { value: 4, suffix: "+", label: "Servicios especializados" },
  { value: 24, suffix: "/7", label: "Soporte disponible" },
  { value: null, display: "∞", label: "Compromiso con el cliente" },
];

function useCountUp(target: number | null, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, started]);

  return { count, ref };
}

function StatCard({ value, suffix, display, label }: (typeof STATS)[number]) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
    >
      <div className="h-0.5 -mt-6 mx-auto w-12 mb-5 rounded-full bg-gradient-to-r from-blue to-blue-bright" />
      <p className="font-display text-4xl font-bold text-blue-bright">
        {display ?? `${count}${suffix}`}
      </p>
      <p className="mt-2 text-xs text-white/60">{label}</p>
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=60"
        alt=""
        fill
        className="object-cover opacity-10"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/85" />

      <BackgroundOrbitals variant="dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <SectionHeader
              label="¿Por que elegirnos?"
              title="Tecnologia confiable, equipo comprometido"
              description="En Universoft Systems no vendemos software generico. Construimos soluciones pensadas para tu negocio, con un acompanamiento real en cada etapa."
              centered={false}
              light
            />

            <ul className="mt-10 flex flex-col gap-4">
              {REASONS.map((reason, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-blue-bright" />
                    <span className="text-sm leading-relaxed text-white/80">{reason}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
