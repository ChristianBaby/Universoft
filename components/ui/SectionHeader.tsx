import { Reveal } from "@/components/ui/Reveal";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const align = centered ? "text-center items-center" : "text-left items-start";
  const textColor = light ? "text-white" : "text-navy";
  const labelColor = light ? "text-blue-bright" : "text-blue";
  const descColor = light ? "text-white/70" : "text-navy/60";

  return (
    <Reveal className={`flex flex-col gap-4 ${align}`}>
      {label && (
        <div className={`flex flex-col gap-2 ${centered ? "items-center" : "items-start"}`}>
          <span className={`text-xs font-semibold uppercase tracking-widest ${labelColor}`}>
            {label}
          </span>
          <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-blue to-blue-bright" />
        </div>
      )}
      <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${textColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed lg:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
