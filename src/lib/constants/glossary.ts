export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  { term: "API", definition: "Forma en que dos programas intercambian datos. Por ejemplo, un sitio web que consulta el stock de un sistema de inventario." },
  { term: "Backup", definition: "Copia de seguridad de la información, guardada fuera del equipo original para poder recuperarla si se pierde o se cifra." },
  { term: "CMS", definition: "Sistema de gestión de contenidos que permite editar textos, imágenes y artículos de una web sin programar." },
  { term: "Core Web Vitals", definition: "Métricas de Google para medir la experiencia en una página: LCP (tiempo hasta mostrar el elemento principal), CLS (estabilidad visual) e INP (respuesta a los clics y toques)." },
  { term: "Datos estructurados", definition: "Información de una página en un formato estándar (schema.org) que ayuda a los buscadores a entender de qué trata: una empresa, un artículo, una pregunta frecuente." },
  { term: "Dominio", definition: "Dirección de un sitio web, como tuempresa.com. Se registra por años ante un registrador." },
  { term: "DNS", definition: "Sistema que traduce el nombre de un dominio a la dirección del servidor. Se configura con registros como A, CNAME y TXT." },
  { term: "ERP", definition: "Software que integra en un solo sistema procesos como finanzas, inventario, compras y recursos humanos." },
  { term: "GEO", definition: "Optimización de contenido para que los asistentes de inteligencia artificial citen un sitio como fuente en sus respuestas." },
  { term: "Hosting", definition: "Servicio de alojamiento donde viven los archivos y la base de datos de un sitio web, disponibles en internet las 24 horas." },
  { term: "HTTPS", definition: "Versión segura de HTTP. Cifra la conexión entre el navegador y el sitio, lo que protege los datos que se envían en formularios." },
  { term: "Phishing", definition: "Intento de engañar a una persona, por correo o mensaje, para que entregue contraseñas o datos. Suele imitar a una empresa conocida." },
  { term: "Pentesting", definition: "Prueba de seguridad controlada en la que se intenta vulnerar un sistema para encontrar fallos antes de que los encuentre un atacante." },
  { term: "Ransomware", definition: "Software malicioso que cifra los archivos de una empresa y exige un pago para devolver el acceso." },
  { term: "Responsive", definition: "Diseño que se adapta al tamaño de la pantalla, desde un celular hasta una computadora de escritorio." },
  { term: "SD-WAN", definition: "Red de área amplia definida por software, que administra los enlaces entre sedes desde un panel central y elige la mejor ruta para cada tipo de tráfico." },
  { term: "SEO", definition: "Optimización de un sitio para que aparezca en los resultados de buscadores como Google." },
  { term: "Software a medida", definition: "Sistema diseñado para los procesos específicos de una empresa, en contraste con un software genérico que sirve para muchos negocios por igual." },
  { term: "VPN", definition: "Conexión cifrada que permite a una persona acceder a la red de su empresa desde fuera de la oficina, de forma segura." },
];
