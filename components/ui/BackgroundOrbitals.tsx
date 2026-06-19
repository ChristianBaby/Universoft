"use client";

interface BackgroundOrbitalsProps {
  variant?: "light" | "dark";
  className?: string;
}

export function BackgroundOrbitals({ variant = "dark", className = "" }: BackgroundOrbitalsProps) {
  const strokeColor = variant === "dark" ? "rgba(255,255,255,0.06)" : "rgba(10,26,60,0.06)";
  const dotColor = variant === "dark" ? "rgba(37,99,235,0.3)" : "rgba(37,99,235,0.2)";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 800"
        fill="none"
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Orbit 1 — large, slow */}
        <g style={{ animation: "orbit 45s linear infinite", transformOrigin: "600px 400px" }}>
          <ellipse cx="600" cy="400" rx="500" ry="300" stroke={strokeColor} strokeWidth="1" />
          <circle cx="1100" cy="400" r="3" fill={dotColor} />
        </g>

        {/* Orbit 2 — medium, reverse */}
        <g style={{ animation: "orbit-reverse 35s linear infinite", transformOrigin: "600px 400px" }}>
          <ellipse
            cx="600" cy="400" rx="380" ry="220"
            stroke={strokeColor} strokeWidth="1"
            transform="rotate(15 600 400)"
          />
          <circle cx="980" cy="400" r="2.5" fill={dotColor} transform="rotate(15 600 400)" />
        </g>

        {/* Orbit 3 — small, fast */}
        <g style={{ animation: "orbit 25s linear infinite", transformOrigin: "600px 400px" }}>
          <ellipse
            cx="600" cy="400" rx="250" ry="140"
            stroke={strokeColor} strokeWidth="1"
            transform="rotate(-10 600 400)"
          />
          <circle cx="850" cy="400" r="2" fill={dotColor} transform="rotate(-10 600 400)" />
        </g>
      </svg>
    </div>
  );
}
