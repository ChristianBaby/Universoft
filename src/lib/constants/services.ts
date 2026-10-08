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
    href: "/servicios/plataformas",
    image: "/images/stock/plataformas-virtuales.jpg",
    heroImage: "/images/stock/plataformas-virtuales.jpg",
    longDescription:
      "Diseñamos y desarrollamos plataformas digitales a medida que centralizan la operación de tu empresa en un solo lugar. Desde portales de clientes y sistemas ERP hasta marketplaces e intranets corporativas, creamos soluciones que automatizan tareas, mejoran la colaboración entre equipos y te permiten tomar decisiones basadas en datos en tiempo real. Nuestras plataformas se integran con pasarelas de pago, APIs de terceros y servicios en la nube para ofrecer una experiencia completa y escalable.",
    benefits: [
      {
        title: "Automatización de procesos",
        description:
          "Elimina tareas repetitivas y reduce errores humanos automatizando flujos de trabajo como facturación, inventarios, seguimiento de pedidos y atención al cliente.",
        icon: "Zap",
      },
      {
        title: "Datos centralizados",
        description:
          "Toda la información de tu empresa en un solo lugar: clientes, ventas, inventarios y reportes accesibles desde cualquier dispositivo con conexión a internet.",
        icon: "Database",
      },
      {
        title: "Colaboración en tiempo real",
        description:
          "Equipos distribuidos trabajando de forma coordinada gracias a herramientas de comunicación, gestión de tareas y documentos compartidos integrados en la plataforma.",
        icon: "Users",
      },
      {
        title: "Escalabilidad y crecimiento",
        description:
          "Arquitectura diseñada para crecer con tu negocio. Añade módulos, usuarios y funcionalidades sin necesidad de reconstruir el sistema desde cero.",
        icon: "TrendingUp",
      },
    ],
    technologies: ["React / Next.js", "Node.js", "PostgreSQL", "AWS / Azure", "APIs REST & GraphQL"],
    useCases: [
      {
        title: "Portales de clientes y CRM",
        description:
          "Sistemas donde tus clientes pueden consultar estados de pedidos, realizar pagos, enviar solicitudes y comunicarse con tu equipo de forma directa y segura.",
      },
      {
        title: "Sistemas ERP a medida",
        description:
          "Plataformas que integran finanzas, inventario, recursos humanos y operaciones en un solo panel, eliminando hojas de cálculo y procesos manuales.",
      },
      {
        title: "Marketplaces e e-commerce",
        description:
          "Tiendas online y marketplaces con catálogos dinámicos, carritos de compra, pasarelas de pago integradas y paneles de administración completos.",
      },
      {
        title: "Intranets y plataformas e-learning",
        description:
          "Espacios digitales internos para capacitación, comunicación corporativa y gestión del conocimiento con seguimiento de progreso y evaluaciones.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tiempo toma desarrollar una plataforma virtual?",
        answer:
          "Depende de la complejidad. Un MVP funcional puede estar listo en 8 a 12 semanas, mientras que plataformas más complejas con múltiples integraciones pueden tomar de 4 a 6 meses. Trabajamos con metodologías ágiles para entregar valor desde las primeras semanas.",
      },
      {
        question: "¿Puedo integrar mi plataforma con sistemas que ya uso?",
        answer:
          "Sí. Diseñamos nuestras plataformas con APIs abiertas que se conectan con herramientas como Stripe, PayPal, Google Workspace, sistemas contables, CRMs existentes y cualquier servicio que ofrezca una API.",
      },
      {
        question: "¿Qué pasa después de la entrega?",
        answer:
          "Ofrecemos planes de soporte y mantenimiento continuo que incluyen corrección de errores, actualizaciones de seguridad, mejoras de rendimiento y desarrollo de nuevas funcionalidades según las necesidades del negocio.",
      },
      {
        question: "¿Mi plataforma funcionará en dispositivos móviles?",
        answer:
          "Absolutamente. Todas nuestras plataformas son responsive por defecto, adaptándose a cualquier tamaño de pantalla. También podemos desarrollar apps nativas o híbridas si tu proyecto lo requiere.",
      },
    ],
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
    href: "/servicios/web",
    image: "/images/stock/paginas-web.jpg",
    heroImage: "/images/stock/paginas-web.jpg",
    longDescription:
      "Tu sitio web es la cara digital de tu empresa y en muchos casos la primera impresión que un cliente potencial tiene de tu negocio. Diseñamos y desarrollamos páginas web informativas que combinan un diseño visual moderno con rendimiento técnico de primer nivel. Cada sitio está optimizado para motores de búsqueda (SEO), cumple con las métricas Core Web Vitals de Google y se adapta perfectamente a cualquier dispositivo, desde un smartphone hasta una pantalla de escritorio.",
    benefits: [
      {
        title: "Visibilidad 24/7",
        description:
          "Tu empresa disponible para clientes potenciales las 24 horas del día, los 7 días de la semana. Un sitio web profesional trabaja por ti incluso cuando tu oficina está cerrada.",
        icon: "Globe",
      },
      {
        title: "Posicionamiento SEO",
        description:
          "Sitios construidos con las mejores prácticas de SEO técnico y de contenido para que aparezcas en los primeros resultados de Google cuando tus clientes busquen tus servicios.",
        icon: "Search",
      },
      {
        title: "Diseño responsive",
        description:
          "Más del 62% del tráfico web proviene de dispositivos móviles. Nuestros sitios se ven y funcionan perfecto en cualquier pantalla, garantizando una experiencia óptima.",
        icon: "Smartphone",
      },
      {
        title: "Generación de leads",
        description:
          "Formularios de contacto, llamadas a la acción estratégicas y embudos de conversión diseñados para convertir visitantes en clientes potenciales de forma efectiva.",
        icon: "BarChart3",
      },
    ],
    technologies: ["Next.js / React", "Tailwind CSS", "WordPress / Headless CMS", "Google Analytics", "Schema.org / SEO técnico"],
    useCases: [
      {
        title: "Sitios corporativos",
        description:
          "Páginas web profesionales que presentan tu empresa, servicios, equipo y valores de marca con un diseño que transmite confianza y credibilidad.",
      },
      {
        title: "Landing pages de conversión",
        description:
          "Páginas de aterrizaje enfocadas en una acción específica: captar leads, promocionar un producto o servicio, o registrar usuarios para un evento.",
      },
      {
        title: "Portafolios y sitios institucionales",
        description:
          "Sitios para profesionales independientes, estudios creativos e instituciones que necesitan mostrar su trabajo, trayectoria y logros de forma atractiva.",
      },
      {
        title: "Blogs y centros de contenido",
        description:
          "Plataformas de contenido optimizadas para SEO que posicionan a tu empresa como referente en tu industria y atraen tráfico orgánico cualificado.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tarda en estar lista mi página web?",
        answer:
          "Un sitio informativo estándar toma entre 3 y 6 semanas desde el diseño hasta el lanzamiento. Sitios más complejos con funcionalidades especiales pueden requerir de 6 a 10 semanas.",
      },
      {
        question: "¿Puedo actualizar el contenido yo mismo?",
        answer:
          "Sí. Implementamos paneles de administración intuitivos (CMS) para que puedas editar textos, imágenes, publicar artículos y gestionar contenido sin necesidad de conocimientos técnicos.",
      },
      {
        question: "¿El sitio estará optimizado para Google?",
        answer:
          "Cada sitio incluye optimización SEO técnica: metaetiquetas, estructura de encabezados, schema markup, sitemap XML, velocidad de carga optimizada y configuración de Google Search Console.",
      },
      {
        question: "¿Incluye hosting y dominio?",
        answer:
          "Te asesoramos en la elección del hosting y dominio más adecuados. Podemos gestionar el despliegue en plataformas como Vercel, AWS o servidores tradicionales según tus necesidades y presupuesto.",
      },
    ],
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
    href: "/servicios/telecomunicaciones",
    image: "/images/stock/telecomunicaciones.jpg",
    heroImage: "/images/stock/telecomunicaciones.jpg",
    longDescription:
      "La conectividad es el sistema nervioso de cualquier empresa moderna. Diseñamos, implementamos y mantenemos soluciones de telecomunicaciones que garantizan una comunicación estable, rápida y segura para tu organización. Desde el cableado estructurado y la configuración de redes hasta sistemas de comunicación unificada y monitoreo de infraestructura, nos encargamos de que tu empresa esté siempre conectada sin interrupciones.",
    benefits: [
      {
        title: "Conectividad confiable",
        description:
          "Infraestructura de red diseñada para ofrecer máxima disponibilidad y mínima latencia, con redundancia que garantiza que tu empresa nunca pierda conexión.",
        icon: "Wifi",
      },
      {
        title: "Comunicación unificada",
        description:
          "Integra llamadas, videoconferencias, mensajería y colaboración en una sola plataforma para que tu equipo se comunique de forma eficiente sin importar dónde se encuentre.",
        icon: "Phone",
      },
      {
        title: "Infraestructura robusta",
        description:
          "Servidores, switches, routers y puntos de acceso configurados profesionalmente con segmentación de red, políticas de seguridad y capacidad para crecer.",
        icon: "Server",
      },
      {
        title: "Seguridad de red",
        description:
          "Firewalls, VPNs, segmentación de tráfico y monitoreo continuo para proteger tu red contra accesos no autorizados y amenazas externas.",
        icon: "Shield",
      },
    ],
    technologies: ["Fibra óptica", "Redes 5G", "SD-WAN", "VoIP / SIP", "WiFi 6E / WiFi 7"],
    useCases: [
      {
        title: "Redes corporativas",
        description:
          "Diseño e implementación de redes LAN/WAN para oficinas, con cableado estructurado, configuración de switches y puntos de acceso inalámbricos de alto rendimiento.",
      },
      {
        title: "Equipos remotos e híbridos",
        description:
          "Soluciones VPN, acceso remoto seguro y herramientas de colaboración que permiten a empleados distribuidos trabajar como si estuvieran en la oficina.",
      },
      {
        title: "Telefonía IP y videoconferencia",
        description:
          "Sistemas VoIP que reemplazan las líneas telefónicas tradicionales, reduciendo costos hasta un 60% e integrando videoconferencia y mensajería empresarial.",
      },
      {
        title: "Monitoreo de infraestructura",
        description:
          "Sistemas de vigilancia en tiempo real que detectan fallos, cuellos de botella y amenazas en tu red antes de que afecten la productividad de tu equipo.",
      },
    ],
    faq: [
      {
        question: "¿Pueden mejorar la red que ya tengo?",
        answer:
          "Sí. Realizamos auditorías de tu infraestructura actual, identificamos puntos de mejora y proponemos una hoja de ruta para optimizar el rendimiento sin necesidad de reemplazar todo desde cero.",
      },
      {
        question: "¿Qué tan rápido pueden implementar una solución?",
        answer:
          "Una auditoría y propuesta técnica toma de 1 a 2 semanas. La implementación varía según el alcance: desde unos días para configuraciones simples hasta 4 a 8 semanas para proyectos de infraestructura completa.",
      },
      {
        question: "¿Ofrecen soporte técnico continuo?",
        answer:
          "Sí. Tenemos planes de soporte que incluyen monitoreo proactivo, atención a incidencias, mantenimiento preventivo y asesoría técnica con tiempos de respuesta garantizados.",
      },
      {
        question: "¿Trabajan con empresas pequeñas o solo grandes corporaciones?",
        answer:
          "Trabajamos con empresas de todos los tamaños. Adaptamos nuestras soluciones al presupuesto y necesidades de cada cliente, desde startups con 5 empleados hasta organizaciones con cientos de usuarios.",
      },
    ],
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
    href: "/servicios/ciberseguridad",
    image: "/images/stock/ciberseguridad.jpg",
    heroImage: "/images/stock/ciberseguridad.jpg",
    longDescription:
      "En un mundo donde los ciberataques son cada vez más sofisticados y frecuentes, proteger la información de tu empresa no es opcional, es una necesidad estratégica. Ofrecemos servicios integrales de ciberseguridad que van desde la prevención hasta la respuesta a incidentes: auditorías de vulnerabilidades, protección de datos, monitoreo continuo y capacitación a tu equipo. Nuestro enfoque va más allá de la defensa reactiva para construir verdadera resiliencia digital en tu organización.",
    benefits: [
      {
        title: "Protección de datos",
        description:
          "Cifrado, control de accesos y políticas de seguridad que protegen la información sensible de tu empresa contra filtraciones, robos y accesos no autorizados.",
        icon: "ShieldCheck",
      },
      {
        title: "Cumplimiento normativo",
        description:
          "Te ayudamos a cumplir con regulaciones como la Ley de Protección de Datos Personales, GDPR, NIS2 y estándares de la industria, evitando sanciones y fortaleciendo la confianza del cliente.",
        icon: "FileCheck",
      },
      {
        title: "Monitoreo y detección",
        description:
          "Vigilancia continua de tus sistemas para detectar amenazas en tiempo real, con alertas automáticas y protocolos de respuesta que minimizan el impacto de cualquier incidente.",
        icon: "Eye",
      },
      {
        title: "Cultura de seguridad",
        description:
          "Programas de capacitación para tu equipo que convierten al factor humano de eslabón débil a primera línea de defensa contra phishing, ingeniería social y amenazas internas.",
        icon: "GraduationCap",
      },
    ],
    technologies: ["Firewalls / WAF", "SIEM / SOC", "Endpoint Protection (EDR)", "Autenticación multifactor (MFA)", "Pentesting / Ethical Hacking"],
    useCases: [
      {
        title: "Auditorías de vulnerabilidades",
        description:
          "Análisis exhaustivo de tu infraestructura, aplicaciones web y redes para identificar brechas de seguridad antes de que los atacantes las exploten.",
      },
      {
        title: "Cifrado y protección de datos",
        description:
          "Implementación de cifrado en tránsito y en reposo, gestión de claves, backups seguros y políticas de acceso basadas en el principio de menor privilegio.",
      },
      {
        title: "Respuesta a incidentes",
        description:
          "Planes de contingencia, protocolos de respuesta y recuperación ante ataques de ransomware, brechas de datos y otras emergencias de seguridad.",
      },
      {
        title: "Formación y concientización",
        description:
          "Talleres prácticos y simulacros de phishing que enseñan a tu equipo a identificar amenazas, manejar información sensible y reportar actividades sospechosas.",
      },
    ],
    faq: [
      {
        question: "¿Mi empresa es lo suficientemente grande para necesitar ciberseguridad?",
        answer:
          "Sí. El 43% de los ciberataques están dirigidos a pequeñas y medianas empresas precisamente porque suelen tener menos protección. No importa el tamaño, toda empresa con datos digitales necesita ciberseguridad.",
      },
      {
        question: "¿Qué incluye una auditoría de vulnerabilidades?",
        answer:
          "Incluye escaneo de puertos, análisis de configuraciones, pruebas de penetración controladas, revisión de políticas de acceso y un reporte detallado con hallazgos priorizados por nivel de riesgo y recomendaciones de remediación.",
      },
      {
        question: "¿Cómo protegen contra ransomware?",
        answer:
          "Implementamos una estrategia en capas: backups automáticos con la regla 3-2-1, segmentación de red, protección de endpoints, monitoreo de comportamiento anómalo y planes de recuperación ante desastres probados regularmente.",
      },
      {
        question: "¿Ofrecen monitoreo 24/7?",
        answer:
          "Sí. Nuestro servicio de monitoreo incluye vigilancia continua con alertas automáticas, análisis de logs, detección de intrusiones y respuesta inicial a incidentes con tiempos de reacción definidos por SLA.",
      },
    ],
  },
];

export const HOW_WE_WORK = [
  { step: 1, title: "Contacto y entendimiento", description: "Escuchamos tu proyecto y necesidades." },
  { step: 2, title: "Propuesta y cotización", description: "Te presentamos un plan claro y sin compromiso." },
  { step: 3, title: "Diseño y desarrollo", description: "Construimos la solución con calidad técnica." },
  { step: 4, title: "Pruebas y entrega", description: "Validamos que todo funcione antes de lanzar." },
  { step: 5, title: "Soporte y mantenimiento", description: "Te acompañamos después de la entrega." },
];
