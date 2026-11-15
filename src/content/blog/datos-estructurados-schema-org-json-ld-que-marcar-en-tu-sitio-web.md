---
title: "Datos estructurados Schema.org (JSON-LD): qué marcar en el sitio web de tu empresa"
seoTitle: "Datos estructurados (JSON-LD): qué marcar en tu web"
description: "Qué son los datos estructurados, cómo usar Schema.org y JSON-LD en tu web empresarial, qué tipos marcar, cómo validarlos y qué errores evitar."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Web"
cover: "/images/blog/datos-estructurados-schema-org-json-ld-que-marcar-en-tu-sitio-web-cover.webp"
coverAlt: "Ilustración de una página web con llaves y etiquetas conectadas a un grafo de nodos, símbolo de datos estructurados"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: true
reviewed: false
---
## Respuesta corta

Los datos estructurados son fragmentos de información con un formato estándar que describen de forma explícita qué es una página, quién la publica o qué servicio ofrece. Schema.org es el vocabulario común de tipos y propiedades que se usa para escribirlos, y Google recomienda implementarlos en formato JSON-LD cuando la configuración del sitio lo permite. Solo deben describir contenido visible para el usuario y conviene validarlos con las herramientas oficiales. Según la documentación de Google, las funciones de IA no requieren marcado especial, y desde el 7 de mayo de 2026 los resultados enriquecidos de preguntas frecuentes (FAQ) ya no se muestran en la Búsqueda de Google.

## Puntos clave

- Los datos estructurados explican a un buscador qué significa tu contenido, sin que tenga que adivinarlo.
- Schema.org es el vocabulario; JSON-LD es la forma recomendada de escribirlo.
- Marca solo lo que el visitante puede ver en la página.
- Un marcado correcto no garantiza resultados especiales en Google, pero es una base de claridad para tu web.
- Valida cada página después de publicarla y revisa los informes de Search Console.

## El problema: tu web dice mucho, pero el buscador no siempre lo entiende

Una empresa de software o de servicios suele tener una página de inicio, una sección de servicios, un blog y un formulario de contacto. Para una persona, el sitio es claro. Para un buscador, cada página es un conjunto de textos, títulos e imágenes que debe interpretar. A veces acierta; otras veces asocia el nombre de la empresa con una actividad distinta, o no identifica qué servicios ofrece.

Los datos estructurados reducen esa ambigüedad. En lugar de dejar que el buscador deduzca que la página describe una organización, un artículo o una lista de servicios, el sitio lo declara con un lenguaje común. Esto no reemplaza el contenido ni el SEO técnico, pero sí complementa ambos. Si todavía no revisaste la base de tu sitio, la [checklist de SEO técnico para webs empresariales](/blog/seo-tecnico-checklist-para-webs-empresariales-2026) es un buen punto de partida.

## ¿Qué son los datos estructurados?

Los datos estructurados son información escrita en un formato predefinido que un programa puede leer sin interpretar el texto libre. Google los describe en su documentación como una forma de dar al buscador detalles sobre el contenido de una página, para que pueda comprenderlo mejor y, cuando corresponda, mostrarlo de forma especial en los resultados.

Un ejemplo sencillo: el texto "Universoft Systems · Cusco" puede significar muchas cosas. Un dato estructurado puede declarar que el nombre corresponde a una organización, que su dirección web es una URL concreta y que su logotipo está en una imagen determinada. La información queda explícita.

## ¿Qué es Schema.org y por qué importa?

Schema.org es un vocabulario compartido de tipos (por ejemplo, Organization, Article, Product o Service) y de propiedades (como name, url o datePublished) que se usa para describir entidades en la web. Los principales buscadores lo utilizan como referencia común, de modo que un mismo marcado puede ser interpretado de forma consistente.

Antes de usar un tipo, revisa su definición y sus propiedades en schema.org. Por ejemplo, la página de ProfessionalService lo ubica como subtipo de LocalBusiness, que a su vez pertenece a Organization. Algunos tipos cambian de estado con el tiempo, así que conviene confirmar en la fuente oficial que el tipo que vas a usar sigue vigente antes de implementarlo.

## ¿Por qué JSON-LD es el formato recomendado?

Google reconoce tres formatos para datos estructurados: JSON-LD, Microdata y RDFa. Su documentación indica que, en general, recomienda JSON-LD si la configuración del sitio lo permite.

La ventaja práctica de JSON-LD es que el marcado vive en un bloque independiente dentro del HTML, separado del texto visible. Eso facilita editarlo sin tocar el diseño de la página, y reduce el riesgo de romper la maquetación. Microdata y RDFa funcionan también, pero se escriben mezclados con las etiquetas visibles, lo que los vuelve más difíciles de mantener cuando la web crece.

## Cómo lee un buscador una página con y sin datos estructurados

La diferencia puede resumirse en una lectura por inferencia frente a una lectura explícita. Sin datos estructurados, el buscador parte del texto y de los encabezados, y tiene que adivinar el tipo de contenido. Con datos estructurados, el sitio entrega una descripción declarada que puede contrastar con lo que se ve en pantalla.

![Comparación de dos paneles: sin datos estructurados el buscador adivina el tipo de negocio; con JSON-LD lee un bloque que declara la entidad](/images/blog/diagramas/datos-estructurados-schema-org-json-ld-que-marcar-en-tu-sitio-web-como-lee-buscador.svg)

*Figura 1. Sin datos estructurados, el buscador infiere el tipo de negocio a partir del texto; con JSON-LD, la página declara de forma explícita qué entidad describe.*

## Tipos útiles para una empresa de servicios

No conviene marcar todo. Empieza por los tipos que describen tu organización, tus servicios y tu contenido. La siguiente tabla resume los más útiles para una empresa de servicios y cómo se aplican.

| Tipo | Para qué sirve | Dónde usarlo | Propiedades clave |
|---|---|---|---|
| Organization (o LocalBusiness) | Identifica a la empresa | Página de inicio | name, url, logo, sameAs |
| WebSite | Nombre del sitio y, si existe, su buscador interno | Página de inicio | name, url |
| Article | Describe un artículo de blog | Cada artículo | headline, datePublished, dateModified, author |
| BreadcrumbList | Muestra la ruta de navegación de la página | Páginas internas | itemListElement, position, name, item |
| FAQPage | Marca preguntas y respuestas visibles | Sección de preguntas frecuentes | mainEntity, Question, acceptedAnswer |
| Service | Describe un servicio que ofreces | Páginas de servicios | name, description, provider, areaServed |
| Product | Describe un producto con precio | Tiendas en línea | name, offers, price, priceCurrency |

Algunas observaciones sobre la tabla:

- **Organization** es la base de casi cualquier sitio corporativo. Si la empresa atiende en un local o en una zona concreta, LocalBusiness puede ser más preciso, siempre que los datos coincidan con la realidad.
- **Article** tiene sentido en cada entrada del blog. Las fechas de publicación y de actualización deben coincidir con lo que el lector ve en la página.
- **FAQPage** ya no genera resultados enriquecidos en Google, como se explica en la siguiente sección.
- **Service** ayuda a describir con precisión cada oferta, pero no garantiza que aparezca en un formato especial.
- **Product** solo corresponde si vendes un producto con precio visible. No es adecuado para un servicio de desarrollo a medida.

## Qué ha cambiado con las preguntas frecuentes (FAQPage)

Muchos sitios marcaban sus preguntas frecuentes con FAQPage para obtener resultados enriquecidos con las respuestas debajo del enlace. Esa presentación ya no existe. La documentación oficial de Google sobre el marcado FAQPage indica que la función ya no aparece en la Búsqueda de Google a partir del 7 de mayo de 2026.

Esto cambia la prioridad. Una sección de preguntas frecuentes sigue siendo útil para quien visita tu sitio, porque responde dudas reales y reduce consultas repetidas. Lo que ya no conviene es implementar el marcado FAQPage con la expectativa de ver resultados enriquecidos. Si ya lo tienes, puedes mantenerlo mientras las preguntas y respuestas sean visibles y exactas, pero no conviene esperar una ventaja en la Búsqueda de Google.

## Datos estructurados y funciones de IA

Un tema frecuente es si los datos estructurados ayudan a aparecer en las respuestas generadas por inteligencia artificial. Según la documentación de Google sobre sus funciones de IA, no hay requisitos adicionales para aparecer en AI Overviews o en AI Mode, ni optimizaciones especiales necesarias. La misma documentación señala que tampoco existe un marcado schema.org especial que deba añadirse para ello.

Eso no significa que la web no deba ser clara. Lo que suele ayudar es el contenido que responde preguntas concretas, con datos atribuidos y una estructura legible. Para ese enfoque, la guía [cómo aparecer en ChatGPT y Perplexity siendo una pyme](/blog/como-aparecer-en-chatgpt-y-perplexity-para-pymes) desarrolla los criterios principales. Para otros sistemas de IA no encontramos documentación pública equivalente, así que no conviene asumir que el marcado tiene el mismo efecto en todos.

## Un ejemplo de JSON-LD para la página de inicio

El siguiente ejemplo usa el dominio ejemplo.com y datos ficticios. Describe una organización con su nombre, dirección web, logotipo y perfiles oficiales. Antes de usarlo, reemplaza cada valor por los datos reales de tu empresa y asegúrate de que aparezcan en la página.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Empresa Ejemplo S.A.C.",
  "url": "https://www.ejemplo.com/",
  "logo": "https://www.ejemplo.com/images/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/empresa-ejemplo"
  ]
}
```

Este bloque se coloca dentro de la página, normalmente en una etiqueta `<script type="application/ld+json">`. Si tu sitio genera páginas desde plantillas, conviene que los datos vengan de una sola fuente de información. Así evitas que el nombre, la dirección o el logotipo cambien de un lugar a otro sin que lo notes.

## Cómo validar tu marcado

Un marcado sin validar puede tener errores de sintaxis o propiedades incorrectas. Hay dos herramientas que conviene usar en conjunto:

- **Prueba de resultados enriquecidos de Google.** Permite probar una URL pública o un fragmento de código. Indica qué resultados enriquecidos puede generar el marcado y distingue entre errores y advertencias. Los errores impiden que la página sea elegible; las advertencias pueden limitar la presentación, pero no la descartan. Pasar la prueba no garantiza que aparezca un resultado especial, y la herramienta no detecta problemas que no sean de sintaxis.
- **Validador de marcado de Schema.org.** Revisa que el código siga la estructura del vocabulario, aunque no evalúa si el contenido es útil ni si coincide con lo visible.

Conviene usar la Prueba de resultados enriquecidos mientras se desarrolla el marcado y, después de publicar, revisar los informes de estado de resultados enriquecidos en Search Console. La herramienta de inspección de URL de Search Console permite confirmar qué versión de la página ha indexado Google.

![Diagrama de cuatro pasos: definir tipos, escribir JSON-LD, publicar y probar, revisar en Search Console, con un ciclo de corrección](/images/blog/diagramas/datos-estructurados-schema-org-json-ld-que-marcar-en-tu-sitio-web-flujo-validacion.svg)

*Figura 2. Flujo recomendado: definir los tipos, escribir el JSON-LD, publicar y probar, y revisar en Search Console; cualquier error vuelve al paso de escritura.*

## Errores comunes

| Error | Por qué ocurre | Solución |
|---|---|---|
| Marcar contenido que no se ve | Se copia un bloque de una plantilla con reseñas o precios que la página no muestra | Marca solo lo visible; Google indica que no se debe marcar contenido que no sea visible para el lector |
| Datos inconsistentes | El nombre o la dirección cambian entre el pie de página y el JSON-LD | Usa una sola fuente de datos y revisa ambas versiones |
| Reseñas falsas o irrelevantes | Se incluyen valoraciones que no provienen de clientes reales | Usa solo reseñas verificables y relacionadas con la página |
| Tipo incorrecto | Se usa Product para un servicio, o Article para una página de inicio | Elige el tipo que describe la página principal, según la definición en schema.org |
| URLs o imágenes rotas | El logotipo o la página de perfil ya no existen | Prueba cada URL del bloque y corrígela cuando cambie |
| Copiar ejemplos sin adaptar | Quedan valores como ejemplo.com en el sitio publicado | Revisa cada propiedad antes de publicar |

Un último error frecuente es pensar que el marcado sustituye al contenido. Un bloque JSON-LD perfecto no compensa una página sin información útil. El orden correcto es primero hacer la página clara y después describirla con precisión. Si la página además tarda en cargar, conviene revisar antes la [velocidad de carga](/blog/velocidad-de-carga-web-por-que-una-pagina-lenta-te-cuesta-clientes); y si estás pensando en un rediseño, la [guía de migración y redirecciones 301](/blog/rediseno-web-sin-perder-seo-guia-de-migracion-y-redirecciones-301) explica cómo no perder lo ya posicionado.

## Preguntas frecuentes

### ¿Los datos estructurados garantizan que mi web aparezca con resultados especiales?

No. Según la documentación de Google, el marcado permite que la página sea elegible para ciertos resultados enriquecidos, pero no garantiza que se muestren. Google también advierte que no deben usarse para describir información que el usuario no ve.

### ¿Cuánto cuesta implementar datos estructurados en una web?

No hay datos públicos verificados para Perú sobre precios de esta tarea. El costo depende de si el sitio es nuevo o existente, de cuántas plantillas tiene y de qué tipos se implementan. Si necesitas una estimación para tu caso, escríbenos desde la página de [contacto](/contacto).

### ¿Es mejor JSON-LD que microdatos?

Google recomienda JSON-LD cuando la configuración del sitio lo permite. Al estar separado del HTML visible, es más sencillo de mantener y de revisar. Microdatos y RDFa siguen siendo formatos válidos, pero requieren mezclar el marcado con el diseño.

### ¿Los datos estructurados son lo mismo que el SEO técnico?

No. El SEO técnico abarca el rastreo, la indexación, la velocidad y la estructura del sitio. Los datos estructurados son una parte concreta que describe el contenido. Se complementan, pero uno no reemplaza al otro.

### ¿Necesito datos estructurados para aparecer en ChatGPT o Perplexity?

Según la documentación de Google sobre sus funciones de IA, no se requiere marcado especial para aparecer en esas funciones. Para otros sistemas no encontramos documentación pública equivalente. Lo más útil es un contenido claro, con datos atribuidos y fácil de citar.

### ¿Con qué frecuencia debo validar el marcado?

Valídalo al publicar una página nueva y cada vez que cambies una plantilla o un dato de la empresa. Revisa también los informes de Search Console después de un cambio importante.

## Glosario rápido

**Datos estructurados:** información con formato estándar que describe el contenido de una página para un buscador.

**Schema.org:** vocabulario compartido de tipos y propiedades para describir entidades en la web.

**JSON-LD:** formato recomendado por Google para escribir datos estructurados en un bloque independiente del HTML.

**Resultado enriquecido:** presentación especial de un resultado de búsqueda, con información adicional.

**Entidad:** objeto que el buscador reconoce, como una empresa, una persona, un producto o un artículo.

**Validador:** herramienta que revisa si el marcado tiene errores de sintaxis o de estructura.

**Migas de pan (breadcrumb):** ruta de navegación que muestra en qué sección del sitio se encuentra una página.

**Search Console:** herramienta gratuita de Google que muestra cómo aparece tu sitio en la Búsqueda y qué errores tiene.

## Lecturas relacionadas

- [GEO vs SEO: cómo optimizar para buscadores y motores de IA](/blog/geo-vs-seo-como-optimizar-para-buscadores-y-motores-de-ia)

## Fuentes y lecturas recomendadas

- Google Search Central, "Introducción a los datos estructurados", https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data (consultada el 14 de noviembre de 2026).
- Google Search Central, "Directrices generales de datos estructurados", https://developers.google.com/search/docs/appearance/structured-data/sd-policies (consultada el 14 de noviembre de 2026).
- Google Search Central, "Marcado de preguntas frecuentes (FAQPage)", https://developers.google.com/search/docs/appearance/structured-data/faqpage (consultada el 14 de noviembre de 2026).
- Google Search Central, "Funciones de IA en la Búsqueda de Google", https://developers.google.com/search/docs/appearance/ai-features (consultada el 14 de noviembre de 2026).
- Google, "Prueba de resultados enriquecidos", https://search.google.com/test/rich-results (consultada el 14 de noviembre de 2026).
- Schema.org, "Validador de marcado", https://validator.schema.org/ (consultada el 14 de noviembre de 2026).
- Schema.org, "ProfessionalService", https://schema.org/ProfessionalService (consultada el 14 de noviembre de 2026).

*Última revisión: 14 de noviembre de 2026.*

Si quieres revisar qué datos estructurados conviene tener en tu sitio, escríbenos desde [contacto](/contacto). Para una web corporativa, el servicio relevante es el de [desarrollo y mantenimiento web](/servicios/web).
