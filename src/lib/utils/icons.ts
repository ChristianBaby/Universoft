/** Convierte nombres de ícono tipo "ShieldCheck" o "BarChart3" al slug de Lucide ("shield-check", "bar-chart-3"). */
export function iconSlug(name: string): string {
  return name.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}
