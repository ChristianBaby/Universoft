"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";

const ParticleSphere = dynamic(
  () => import("@/components/three/ParticleSphere").then((m) => m.ParticleSphere),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/10 to-blue-bright/5 blur-2xl" />
    ),
  }
);

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy flex items-center">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-deep to-navy-light opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15)_0%,_transparent_60%)]" />

      {/* Gradient blobs for depth */}
      <GradientBlob color="blue" size="lg" className="-top-32 -right-32 opacity-40" />
      <GradientBlob color="blue-bright" size="md" className="bottom-0 left-1/4 opacity-20" />

      {/* Three.js Particle Sphere — desktop only */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%] hidden lg:block w-[650px] h-[650px]">
        <ParticleSphere />
      </div>

      {/* Mobile fallback: subtle gradient orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 lg:hidden w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue/10 to-blue-bright/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="inline-block rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-bright mb-6"
          >
            Cusco, Peru — Desarrollo de Software
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Transformamos ideas en{" "}
            <span className="bg-gradient-to-r from-blue-bright to-blue bg-clip-text text-transparent">
              soluciones tecnologicas
            </span>{" "}
            que impulsan tu empresa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed text-white/60 lg:text-xl"
          >
            Desarrollamos software a medida, plataformas virtuales, sitios
            informativos, telecomunicaciones y ciberseguridad para que tu negocio
            crezca con tecnologia confiable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/contacto" variant="primary" className="px-8 py-4 text-base">
              Solicita una cotizacion
            </Button>
            <Button href="/servicios" variant="outline" className="px-8 py-4 text-base">
              Conoce nuestros servicios
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
