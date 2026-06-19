import type { NavLink } from "@/lib/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
];

export const CTA_LINK: NavLink = {
  label: "Solicita una cotización",
  href: "/contacto",
};
