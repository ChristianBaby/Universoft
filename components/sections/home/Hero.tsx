"use client";

import { useEffect, useMemo } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

/* ─── Starfield ──────────────────────────────────────────────────────────────── */

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function generateStars(count: number, seed: number) {
  const rand = seededRandom(seed);
  return Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    size: rand() * 1.5 + 0.5,
    opacity: rand() * 0.5 + 0.2,
    twinkle: rand() > 0.6,
    delay: rand() * 5,
  }));
}

function Starfield() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const layer1X = useTransform(mouseX, [-1, 1], [-20, 20]);
  const layer1Y = useTransform(mouseY, [-1, 1], [-20, 20]);
  const layer2X = useTransform(mouseX, [-1, 1], [-35, 35]);
  const layer2Y = useTransform(mouseY, [-1, 1], [-35, 35]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  const layer1 = useMemo(() => generateStars(90, 42), []);
  const layer2 = useMemo(() => generateStars(55, 137), []);
  const layer3 = useMemo(() => generateStars(30, 313), []);

  const layer3X = useTransform(mouseX, [-1, 1], [-50, 50]);
  const layer3Y = useTransform(mouseY, [-1, 1], [-50, 50]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Layer 1: dense white stars */}
      <motion.div className="absolute inset-[-40px]" style={{ x: layer1X, y: layer1Y }}>
        {layer1.map((star, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white ${star.twinkle ? "animate-[twinkle_3s_ease-in-out_infinite]" : ""}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity + 0.15,
              boxShadow: star.size > 1 ? `0 0 ${star.size * 4}px rgba(255,255,255,0.6)` : `0 0 2px rgba(255,255,255,0.3)`,
              animationDelay: star.twinkle ? `${star.delay}s` : undefined,
            }}
          />
        ))}
      </motion.div>
      {/* Layer 2: blue-tinted stars */}
      <motion.div className="absolute inset-[-40px]" style={{ x: layer2X, y: layer2Y }}>
        {layer2.map((star, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${star.twinkle ? "animate-[twinkle_4s_ease-in-out_infinite]" : ""}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity * 0.7,
              background: "#7da2e8",
              boxShadow: `0 0 ${star.size * 3}px rgba(125,162,232,0.6)`,
              animationDelay: star.twinkle ? `${star.delay}s` : undefined,
            }}
          />
        ))}
      </motion.div>
      {/* Layer 3: bright accent stars with strong glow */}
      <motion.div className="absolute inset-[-60px]" style={{ x: layer3X, y: layer3Y }}>
        {layer3.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-[twinkle_5s_ease-in-out_infinite]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size * 1.2,
              height: star.size * 1.2,
              opacity: star.opacity + 0.2,
              background: "#bfdbfe",
              boxShadow: `0 0 ${star.size * 6}px rgba(191,219,254,0.7), 0 0 ${star.size * 12}px rgba(37,99,235,0.3)`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Comets ─────────────────────────────────────────────────────────────────── */

const cometPaths = [
  { x: -5, y: 15, angle: 30, duration: 6, delay: 1, tailLength: 120, size: 2 },
  { x: -5, y: 50, angle: 18, duration: 8, delay: 5, tailLength: 90, size: 1.5 },
  { x: -5, y: 75, angle: 35, duration: 7, delay: 10, tailLength: 140, size: 2.5 },
  { x: -5, y: 30, angle: 12, duration: 10, delay: 15, tailLength: 100, size: 1.8 },
  { x: -5, y: 85, angle: 25, duration: 5.5, delay: 20, tailLength: 110, size: 2 },
];

function Comets() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {cometPaths.map((comet, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${comet.x}%`,
            top: `${comet.y}%`,
            transform: `rotate(${comet.angle}deg)`,
          }}
        >
          <div
            style={{
              width: comet.tailLength,
              height: comet.size,
              borderRadius: comet.size,
              background: `linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.15) 20%, rgba(147,197,253,0.6) 80%, #fff 100%)`,
              boxShadow: `0 0 ${comet.size * 6}px rgba(147,197,253,0.6), 0 0 ${comet.size * 15}px rgba(37,99,235,0.3)`,
              animation: `comet-fly ${comet.duration}s linear ${comet.delay}s infinite`,
              opacity: 0,
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Solar System ───────────────────────────────────────────────────────────── */

const orbits = [
  { size: 340, tiltX: 65, tiltZ: -15, duration: 18, reverse: false, planetSize: 12, planetColor: "#2563EB", glowColor: "rgba(37,99,235,0.9)", glowSize: 20 },
  { size: 480, tiltX: 72, tiltZ: 25, duration: 28, reverse: true, planetSize: 9, planetColor: "#1E66F5", glowColor: "rgba(30,102,245,0.85)", glowSize: 16 },
  { size: 620, tiltX: 58, tiltZ: -30, duration: 38, reverse: false, planetSize: 16, planetColor: "#3b82f6", glowColor: "rgba(59,130,246,0.8)", glowSize: 24 },
  { size: 740, tiltX: 76, tiltZ: 12, duration: 52, reverse: true, planetSize: 7, planetColor: "#93c5fd", glowColor: "rgba(147,197,253,0.7)", glowSize: 12 },
];

function SolarSystem() {
  return (
    <div className="relative w-full h-full" style={{ perspective: "1200px" }}>
      {/* Glow behind isotipo — illuminates the space */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]"
        style={{ width: 600, height: 600, background: "rgba(37,99,235,0.25)", animation: "pulse-glow 5s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{ width: 380, height: 380, background: "rgba(30,102,245,0.4)", animation: "pulse-glow 3.5s ease-in-out infinite 0.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
        style={{ width: 200, height: 200, background: "rgba(96,165,250,0.45)", animation: "pulse-glow 2.5s ease-in-out infinite 1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px]"
        style={{ width: 120, height: 120, background: "rgba(147,197,253,0.35)", animation: "pulse-glow 2s ease-in-out infinite 1.5s" }}
      />

      {/* Isotipo — brighter glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div
          style={{
            filter:
              "drop-shadow(0 0 35px rgba(37,99,235,0.9)) drop-shadow(0 0 80px rgba(30,102,245,0.6)) drop-shadow(0 0 140px rgba(37,99,235,0.35)) drop-shadow(0 0 200px rgba(37,99,235,0.15))",
          }}
        >
          <Image
            src="/images/isotipo-transparent.png"
            alt="Universoft Systems"
            width={110}
            height={110}
            className="select-none"
            priority
            draggable={false}
          />
        </div>
      </div>

      {/* Accent ring around isotipo — bigger */}
      <div
        className="absolute top-1/2 left-1/2 z-[5]"
        style={{
          width: 200,
          height: 200,
          marginLeft: -100,
          marginTop: -100,
          transform: "rotateX(65deg) rotateZ(-10deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative w-full h-full rounded-full"
          style={{
            border: "1px solid rgba(37,99,235,0.35)",
            boxShadow: "0 0 15px rgba(37,99,235,0.15), inset 0 0 15px rgba(37,99,235,0.08)",
            animation: "orbit 8s linear infinite",
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 6,
              height: 6,
              top: -3,
              left: "50%",
              marginLeft: -3,
              background: "#60a5fa",
              boxShadow: "0 0 14px 4px rgba(96,165,250,0.9), 0 0 30px 6px rgba(37,99,235,0.4)",
            }}
          />
        </div>
      </div>

      {/* Orbital rings with planets */}
      {orbits.map((orbit, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2"
          style={{
            width: orbit.size,
            height: orbit.size,
            marginLeft: -orbit.size / 2,
            marginTop: -orbit.size / 2,
            transform: `rotateX(${orbit.tiltX}deg) rotateZ(${orbit.tiltZ}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative w-full h-full rounded-full"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 8px rgba(37,99,235,0.08)",
              animation: `${orbit.reverse ? "orbit-reverse" : "orbit"} ${orbit.duration}s linear infinite`,
            }}
          >
            {/* Planet with bright glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: orbit.planetSize,
                height: orbit.planetSize,
                top: -orbit.planetSize / 2,
                left: "50%",
                marginLeft: -orbit.planetSize / 2,
                background: `radial-gradient(circle at 35% 35%, #fff 0%, ${orbit.planetColor} 60%)`,
                boxShadow: `0 0 ${orbit.glowSize}px ${orbit.glowColor}, 0 0 ${orbit.glowSize * 2}px ${orbit.glowColor.replace(/[\d.]+\)$/, "0.3)")}`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#040c1f" }}>
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020810] via-navy to-[#040c1f]" />

      {/* Nebula glow effects — brighter */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_40%,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_60%,rgba(30,102,245,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_60%_45%,rgba(37,99,235,0.08)_0%,transparent_100%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />

      {/* Starfield with parallax */}
      <Starfield />

      {/* Comets */}
      <Comets />

      {/* Solar system — solo desktop, se omite en mobile por rendimiento */}
      <div className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 hidden lg:block w-[780px] h-[780px]">
        <SolarSystem />
      </div>

      {/* Isotipo simple — mobile (sin orbitas ni blur pesado) */}
      <div className="pointer-events-none absolute right-[-8%] top-[8%] lg:hidden opacity-40">
        <Image
          src="/images/isotipo-transparent.png"
          alt=""
          width={140}
          height={124}
          className="select-none"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ textShadow: "0 0 80px rgba(37,99,235,0.2), 0 0 30px rgba(37,99,235,0.1), 0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Transformamos ideas en{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] via-blue-bright to-blue bg-clip-text text-transparent">
              soluciones tecnologicas
            </span>{" "}
            que impulsan tu empresa.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 lg:text-xl"
          >
            Desarrollamos software a medida, plataformas virtuales, sitios
            informativos, telecomunicaciones y ciberseguridad para que tu negocio
            crezca con tecnologia confiable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button
              href="/contacto"
              variant="primary"
              className="px-8 py-4 text-base shadow-[0_0_40px_rgba(37,99,235,0.35)]"
            >
              Solicita una cotizacion
            </Button>
            <Button
              href="/servicios"
              variant="outline"
              className="px-8 py-4 text-base"
            >
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
          <ChevronDown size={24} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
