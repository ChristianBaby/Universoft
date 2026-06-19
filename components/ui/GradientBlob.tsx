interface GradientBlobProps {
  color?: "blue" | "blue-bright" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-80 h-80",
  lg: "w-[500px] h-[500px]",
};

const colorMap = {
  blue: "bg-blue/15",
  "blue-bright": "bg-blue-bright/15",
  navy: "bg-navy/20",
};

export function GradientBlob({
  color = "blue",
  size = "md",
  className = "",
}: GradientBlobProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-[100px] select-none ${sizeMap[size]} ${colorMap[color]} ${className}`}
      aria-hidden="true"
    />
  );
}
