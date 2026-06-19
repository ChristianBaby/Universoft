# Universoft Systems — Sitio Web Corporativo

> **Fuente de verdad del proyecto.** Este archivo guía la construcción del sitio web. Léelo antes de generar o modificar código.

Universoft Systems es una empresa dedicada **exclusivamente al desarrollo de software** que ofrece soluciones tecnológicas a empresas y clientes: plataformas virtuales, páginas informativas, telecomunicaciones y ciberseguridad. Este sitio es su carta de presentación, por lo que debe verse **moderno, profesional y animado**, al nivel de referentes como Vercel, Linear, Stripe y Platzi.

---

## 1. Objetivos del sitio

1. **Captar clientes / leads** (solicitudes de cotización y consultoría).
2. **Mostrar servicios y capacidad técnica** de la empresa.
3. **Reforzar la marca** como referente tecnológico confiable.

---

## 2. Stack técnico (aprobado)

| Capa | Tecnología |
|------|------------|
| Framework | **Next.js** (App Router, React, TypeScript) |
| Estilos | **Tailwind CSS** |
| Animaciones | **Framer Motion** (scroll/hover) + **GSAP** (efectos del hero) |
| Íconos | **lucide-react** |
| Formulario | Validación + envío por correo (Resend / EmailJS / API route) |
| Blog | Markdown/MDX o CMS headless (Sanity / Contentful) |
| Hosting | **Vercel** |
| Dominio | **universoft.net** |

### Comandos de inicio

```bash
# Crear el proyecto Next.js (TypeScript + Tailwind + App Router)
npx create-next-app@latest universoft --typescript --tailwind --app --eslint

cd universoft

# Instalar dependencias de animación e íconos
npm install framer-motion gsap lucide-react

# Levantar entorno de desarrollo
npm run dev
```

---

## 3. Identidad visual (aprobada)

### Paleta de colores

```css
:root {
  --navy:        #0A1A3C; /* principal */
  --navy-deep:   #0F2A52; /* secundario */
  --blue:        #2563EB; /* acento / CTA */
  --blue-bright: #1E66F5; /* acento claro */
  --bg-cream:    #F5F7F0; /* fondo claro (del logo) */
  --bg-white:    #FFFFFF;
  --text-dark:   #0A1A3C; /* texto sobre claro */
  --text-light:  #FFFFFF; /* texto sobre oscuro */
}
```

### Tipografía
- **Títulos y marca:** la tipografía del logo de Universoft Systems.
- **Cuerpo:** una sans-serif moderna y muy legible (ej. Inter o Poppins) que combine con la del logo.
- Titulares grandes, mucho espacio en blanco.

### Logo
- El archivo del logo está en el proyecto (`/public/logo.png`). Crear versión en blanco para fondos oscuros y un favicon a partir del isotipo (orbital con cuadrados).

---

## 4. Estructura del sitio (páginas)

```
/                 Inicio (Home)
/servicios        Detalle de los 4 servicios
/nosotros         Historia, misión, visión, valores, equipo
/blog             Listado de artículos
/blog/[slug]      Artículo individual
/contacto         Formulario + cotización
```

### Navegación
- **Navbar fija (sticky):** logo + enlaces (Inicio, Servicios, Nosotros, Blog) + botón destacado **"Solicita una cotización"**.
- **Footer:** logo, enlaces rápidos, datos de contacto, redes sociales y derechos.

---

## 5. Contenido por página (listo para usar)

### 5.1 Inicio

**Hero**
- Titular: *Transformamos ideas en soluciones tecnológicas que impulsan tu empresa.*
- Subtítulo: *En Universoft Systems desarrollamos software a medida, plataformas virtuales, sitios informativos, telecomunicaciones y ciberseguridad para que tu negocio crezca con tecnología confiable.*
- CTA primario: **Solicita una cotización** → `/contacto`
- CTA secundario: **Conoce nuestros servicios** → `/servicios`

**Propuesta de valor (4 bloques)**
- Software a medida: construimos exactamente lo que tu empresa necesita.
- Tecnología moderna: usamos las mejores herramientas y prácticas del mercado.
- Acompañamiento real: te asesoramos desde la idea hasta el lanzamiento y soporte.
- Seguridad primero: protegemos tu información y la de tus clientes.

**Resumen de servicios:** 4 tarjetas con ícono enlazando a `/servicios`.

**¿Por qué elegirnos?**
- Equipo especializado en desarrollo de software.
- Soluciones escalables y a medida.
- Procesos claros y comunicación constante.
- Soporte y mantenimiento posterior a la entrega.

**CTA final:** *¿Listo para llevar tu empresa al siguiente nivel? Cuéntanos tu proyecto y te damos una propuesta sin compromiso.*

### 5.2 Servicios

Intro: *Ofrecemos soluciones tecnológicas integrales. Cada servicio se adapta a las necesidades y objetivos de tu empresa.*

**1. Creación de plataformas virtuales** — plataformas web y apps que digitalizan y automatizan procesos: portales de clientes, sistemas de gestión, marketplaces, intranets y apps a medida. Incluye análisis y diseño, desarrollo front/back, integraciones (pagos, APIs), pruebas, despliegue y soporte.

**2. Páginas web informativas** — sitios modernos, rápidos y responsivos optimizados para SEO y móviles. Incluye diseño personalizado, optimización SEO/velocidad, adaptación a todos los dispositivos y panel para actualizar contenido.

**3. Telecomunicaciones** — soluciones para mantener la empresa conectada de forma estable y segura. Incluye asesoría e implementación de redes, comunicación para equipos y monitoreo de infraestructura.

**4. Ciberseguridad** — protección de información y sistemas frente a amenazas. Incluye auditorías y análisis de vulnerabilidades, protección de datos, monitoreo y respuesta a incidentes, y capacitación al equipo.

**Cómo trabajamos:** 1) Contacto y entendimiento · 2) Propuesta y cotización · 3) Diseño y desarrollo · 4) Pruebas y entrega · 5) Soporte y mantenimiento.

### 5.3 Nosotros

- **Quiénes somos:** *Universoft Systems es una empresa de desarrollo de software comprometida con crear soluciones tecnológicas que generen valor real. Combinamos talento técnico, creatividad y un trato cercano para acompañar a cada empresa en su transformación digital.*
- **Misión:** *Impulsar el crecimiento de las empresas mediante soluciones de software confiables, seguras y a la medida de sus necesidades.*
- **Visión:** *Ser una empresa de tecnología reconocida por la calidad, innovación y cercanía con la que transformamos las ideas de nuestros clientes en realidades digitales.*
- **Valores:** compromiso con resultados · calidad y mejora continua · transparencia · innovación · seguridad y responsabilidad con la información.
- **Equipo:** sección con perfiles (desarrollo, diseño, seguridad, gestión de proyectos).

### 5.4 Blog

Listado de artículos (título, portada, fecha, categoría) + página de artículo individual. Ideas iniciales:
- ¿Por qué tu empresa necesita una plataforma virtual?
- 5 señales de que tu web necesita una renovación.
- Buenas prácticas básicas de ciberseguridad para empresas.
- Software a medida vs. soluciones genéricas: ¿qué te conviene?

### 5.5 Contacto / Cotización

Intro: *Cuéntanos sobre tu proyecto y te enviaremos una propuesta a tu medida, sin compromiso.*

**Campos del formulario:** Nombre completo · Empresa (opcional) · Correo · Teléfono · Servicio de interés (plataformas / web informativa / telecomunicaciones / ciberseguridad) · Mensaje.

---

## 6. Datos de contacto (reales)

| Dato | Valor |
|------|-------|
| Teléfono / WhatsApp | **953862509** |
| Correo principal | **universoftsystems@gmail.com** |
| Correo alternativo | **christianfx08@gmail.com** |
| Ubicación | **Cusco, Perú** |
| Redes | LinkedIn, Facebook, Instagram, TikTok *(los enlaces los agrega el dueño en el código — dejar variables/placeholder en el footer)* |

> En el footer y la página de contacto, el botón de WhatsApp debe enlazar a `https://wa.me/51953862509` (código de país Perú +51).

---

## 7. Diseño y animaciones

### Principios
- Mucho espacio en blanco y jerarquía visual clara.
- Servicios en tarjetas con íconos y hover.
- Diseño 100% responsivo (móvil, tablet, escritorio).

### Animaciones (deben ser sutiles y rápidas, nunca recargar)
- **Aparición al hacer scroll** (fade-in / slide-up) con Framer Motion.
- **Hero animado** con GSAP: gradiente animado o un **orbital con partículas** que evoque el isotipo del logo.
- **Hover interactivo** en tarjetas y botones.
- **Transiciones suaves** entre páginas.
- **Contadores animados** (proyectos entregados, clientes).

### Patrones de implementación sugeridos

```tsx
// Aparición al hacer scroll — componente reutilizable (Framer Motion)
"use client";
import { motion } from "framer-motion";

export function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

```tsx
// Hero orbital con GSAP — registrar dentro de un useEffect en un componente cliente
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroOrbital() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".orbit", { rotate: 360, duration: 24, repeat: -1, ease: "none" });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div ref={ref}>{/* SVG/elementos del orbital aquí */}</div>;
}
```

---

## 8. Requerimientos no funcionales

- **Rendimiento:** carga rápida (optimizar imágenes con `next/image`, code splitting).
- **SEO:** metadata por página, URLs limpias, Open Graph, sitemap, datos estructurados.
- **Accesibilidad:** contraste adecuado, navegación por teclado, etiquetas alt.
- **Seguridad:** HTTPS, protección de formularios contra spam.
- **Responsivo:** correcto en todos los dispositivos.
- **Analítica:** Google Analytics (o similar) opcional.

---

## 9. Plan de construcción sugerido (para Claude Code)

1. Inicializar Next.js + Tailwind e instalar dependencias (sección 2).
2. Configurar paleta y tipografía en Tailwind (sección 3).
3. Crear layout base: Navbar sticky + Footer con datos reales (sección 6).
4. Construir Home con hero animado y todas sus secciones (5.1).
5. Página Servicios con las 4 soluciones (5.2).
6. Página Nosotros (5.3).
7. Blog: listado + artículo individual con MDX (5.4).
8. Página Contacto con formulario funcional (5.5).
9. Añadir animaciones Framer Motion + GSAP (sección 7).
10. Optimizar SEO/rendimiento y preparar despliegue en Vercel (sección 8).
