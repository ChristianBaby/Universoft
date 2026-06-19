# Universoft Systems — Sitio Web Corporativo

## Descripción del proyecto
Sitio web corporativo de Universoft Systems: empresa de desarrollo de software con sede en Cusco, Perú. Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + GSAP + lucide-react.

## Cómo correr el proyecto
```bash
npm run dev     # Servidor de desarrollo en http://localhost:3000
npm run build   # Build de producción
npm run lint    # Linter ESLint
```

## Estructura de carpetas
```
app/                    → Rutas Next.js (App Router)
  layout.tsx            → Root layout: Navbar + Footer + fuente Inter
  page.tsx              → Inicio (Home)
  servicios/page.tsx    → Detalle de los 4 servicios
  nosotros/page.tsx     → Historia, misión, visión, valores
  blog/page.tsx         → Listado de artículos
  blog/[slug]/page.tsx  → Artículo individual
  contacto/page.tsx     → Formulario de cotización
  api/contact/route.ts  → API route del formulario (pendiente: integrar Resend)
  globals.css           → Paleta de marca via @theme (Tailwind v4)

components/
  layout/               → Navbar.tsx, Footer.tsx
  ui/                   → Button.tsx, Reveal.tsx, SectionHeader.tsx
  sections/
    home/               → Hero.tsx, ValueProposition.tsx, ServicesSummary.tsx, WhyUs.tsx, CtaFinal.tsx
    services/           → ServicesGrid.tsx, HowWeWork.tsx
    about/              → AboutContent.tsx
    contact/            → ContactForm.tsx

lib/
  constants/            → blog.ts, contact.ts, navigation.ts, services.ts
  types/                → index.ts (interfaces TypeScript)

public/
  images/               → logo.png, logo-color.png, isotipo.png

content/
  blog/                 → Artículos MDX (pendiente)
```

## Paleta de marca (Tailwind v4 — usar solo estos tokens)
| Token Tailwind   | Hex       | Uso                       |
|------------------|-----------|---------------------------|
| `bg-navy`        | `#0A1A3C` | Fondo oscuro principal    |
| `bg-navy-deep`   | `#0F2A52` | Fondo oscuro secundario   |
| `text-blue`      | `#2563EB` | Acento / CTA              |
| `text-blue-bright`| `#1E66F5`| Acento claro              |
| `bg-cream`       | `#F5F7F0` | Fondo claro del logo      |

## Convenciones de código
- **Componentes de cliente**: marcar con `"use client"` solo cuando sea necesario (estado, efectos, eventos).
- **Animaciones**: Framer Motion para scroll/hover; GSAP solo en Hero (orbital).
- **Imágenes**: siempre usar `next/image`; los PNG van en `public/images/`.
- **Datos**: toda la información estática vive en `lib/constants/`; nunca hardcodear texto en componentes.
- **Tipos**: definir interfaces en `lib/types/index.ts`.
- **Estilos**: solo clases Tailwind. Nada de CSS en línea ni módulos CSS salvo excepción justificada.

## Pendientes (plan de construcción sección 9)
- [x] Paso 1: Inicializar Next.js + Tailwind + dependencias
- [x] Paso 2: Configurar paleta y tipografía en Tailwind
- [x] Paso 3: Layout base (Navbar + Footer)
- [x] Paso 4: Home con hero animado y todas sus secciones
- [x] Paso 5: Página Servicios
- [x] Paso 6: Página Nosotros
- [x] Paso 7: Blog (listado + artículo individual) — falta MDX completo
- [x] Paso 8: Página Contacto con formulario — falta integrar Resend
- [ ] Paso 9: Animaciones Framer Motion + GSAP refinadas
- [ ] Paso 10: SEO/rendimiento y despliegue en Vercel

## Skills de Claude Code recomendadas para este proyecto
- `/run` — lanzar el servidor de desarrollo y verificar la UI en el navegador
- `/verify` — confirmar que un cambio funciona visualmente antes de reportarlo como hecho
- `/code-review` — revisar calidad de código antes de hacer commit o PR
- `/simplify` — limpiar código generado si crece en complejidad
