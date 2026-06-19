import type { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    id: "plataformas",
    title: "Plataformas Virtuales",
    description:
      "Plataformas web y apps que digitalizan y automatizan procesos de tu empresa.",
    features: [
      "Portales de clientes y sistemas de gestión",
      "Marketplaces e intranets corporativas",
      "Aplicaciones web a medida",
      "Integraciones con pagos y APIs externas",
      "Pruebas, despliegue y soporte continuo",
    ],
    icon: "Monitor",
    href: "/servicios#plataformas",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "web",
    title: "Páginas Web Informativas",
    description:
      "Sitios modernos, rápidos y responsivos optimizados para SEO y dispositivos móviles.",
    features: [
      "Diseño personalizado acorde a tu marca",
      "Optimización SEO y velocidad de carga",
      "Adaptación a todos los dispositivos",
      "Panel de administración de contenido",
    ],
    icon: "Globe",
    href: "/servicios#web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "telecomunicaciones",
    title: "Telecomunicaciones",
    description:
      "Soluciones para mantener tu empresa conectada de forma estable y segura.",
    features: [
      "Asesoría e implementación de redes",
      "Comunicación para equipos distribuidos",
      "Monitoreo de infraestructura",
    ],
    icon: "Network",
    href: "/servicios#telecomunicaciones",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "ciberseguridad",
    title: "Ciberseguridad",
    description:
      "Protección de información y sistemas frente a amenazas digitales.",
    features: [
      "Auditorías y análisis de vulnerabilidades",
      "Protección y cifrado de datos",
      "Monitoreo y respuesta a incidentes",
      "Capacitación al equipo en seguridad",
    ],
    icon: "ShieldCheck",
    href: "/servicios#ciberseguridad",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80",
  },
];

export const HOW_WE_WORK = [
  { step: 1, title: "Contacto y entendimiento", description: "Escuchamos tu proyecto y necesidades." },
  { step: 2, title: "Propuesta y cotización", description: "Te presentamos un plan claro y sin compromiso." },
  { step: 3, title: "Diseño y desarrollo", description: "Construimos la solución con calidad técnica." },
  { step: 4, title: "Pruebas y entrega", description: "Validamos que todo funcione antes de lanzar." },
  { step: 5, title: "Soporte y mantenimiento", description: "Te acompañamos después de la entrega." },
];
