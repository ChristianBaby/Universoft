import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HOW_WE_WORK } from "@/lib/constants/services";

export function HowWeWork() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Proceso"
          title="Como trabajamos"
          description="Un proceso claro y transparente para que siempre sepas en que etapa esta tu proyecto."
        />

        {/* Timeline */}
        <div className="mt-16">
          {/* Desktop: horizontal */}
          <div className="hidden lg:flex items-start gap-0">
            {HOW_WE_WORK.map(({ step, title, description }, i) => (
              <Reveal key={step} delay={i * 0.1} className="flex-1">
                <div className="flex flex-col items-center text-center">
                  {/* Circle + line */}
                  <div className="relative flex w-full items-center justify-center">
                    {i > 0 && (
                      <div className="absolute left-0 right-1/2 top-1/2 h-0.5 bg-gradient-to-r from-blue/20 to-blue" />
                    )}
                    {i < HOW_WE_WORK.length - 1 && (
                      <div className="absolute left-1/2 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue to-blue/20" />
                    )}
                    <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-bright text-sm font-bold text-white shadow-lg shadow-blue/30">
                      {step}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="mt-4 px-2">
                    <h3 className="font-display text-sm font-semibold text-navy">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-navy/60">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="flex flex-col gap-0 lg:hidden">
            {HOW_WE_WORK.map(({ step, title, description }, i) => (
              <Reveal key={step} delay={i * 0.1}>
                <div className="flex gap-4">
                  {/* Line + circle */}
                  <div className="flex flex-col items-center">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue to-blue-bright text-sm font-bold text-white shadow-lg shadow-blue/30">
                      {step}
                    </span>
                    {i < HOW_WE_WORK.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-blue to-blue/10" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pb-8">
                    <h3 className="font-display text-sm font-semibold text-navy">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-navy/60">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
