---
title: "Rediseño web sin perder SEO: guía de migración y redirecciones 301"
seoTitle: "Rediseño web sin perder SEO: guía de migración"
description: "Cómo renovar página web sin perder posiciones: inventario de URLs, redirecciones 301, pruebas, lanzamiento y monitoreo en Search Console, paso a paso."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Web"
cover: "/images/blog/rediseno-web-sin-perder-seo-guia-de-migracion-y-redirecciones-301-cover.webp"
coverAlt: "Ilustración de una página antigua que se transforma en una nueva con una flecha de redirección, símbolo de rediseño web"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: true
reviewed: false
---
## Respuesta corta

Un rediseño web conserva su posicionamiento cuando cada URL antigua que tenía visitas o enlaces redirige con una redirección 301 a su página equivalente en el sitio nuevo, el contenido importante se mantiene y ningún bloqueo técnico impide el rastreo. Según la documentación de Google, lo recomendable es usar redirecciones permanentes del sitio anterior al nuevo siguiendo el mapeo planificado, enviar el sitemap nuevo en Search Console y cambiar una sola cosa a la vez. En Universoft, el desarrollo de un sitio informativo toma de 3 a 6 semanas, y el de un sitio con funciones especiales, de 6 a 10 semanas.

## Puntos clave

- Antes de diseñar, inventaria todas las URLs que tienen tráfico, enlaces o impresiones en Google.
- Cada URL antigua debe apuntar a una sola URL nueva mediante una redirección 301.
- Mantén títulos, descripciones, encabezados y datos estructurados de las páginas importantes.
- Verifica en un entorno de pruebas que no quede bloqueado el rastreo, y retira esos bloqueos al lanzar.
- Espera fluctuaciones temporales y mide durante al menos cuatro semanas en Search Console.

## El riesgo: un rediseño puede perder en semanas lo que costó años construir

Renovar una página web es una decisión habitual cuando el diseño quedó antiguo, el sitio no se adapta bien al celular o el contenido ya no refleja lo que ofrece la empresa. Sin embargo, un rediseño mal planificado puede hacer lo contrario: cambiar las direcciones de las páginas, eliminar contenido que recibía visitas y dejar enlaces rotos. El resultado suele ser una caída de tráfico que se nota en las semanas siguientes al lanzamiento.

El problema no es el diseño nuevo en sí, sino la pérdida de la continuidad técnica. Google encuentra las páginas por sus direcciones y guarda señales asociadas a ellas. Si una dirección desaparece sin un destino claro, esas señales se pierden o tardan en transferirse. Por eso una migración bien hecha se parece más a un traslado ordenado que a un cambio de decoración.

Antes de decidir, conviene confirmar que el motivo del cambio es real. Las señales de que una web necesita renovación, como la velocidad, la adaptación al celular o la seguridad, están desarrolladas en [5 señales de que tu web necesita una renovación](/blog/5-senales-de-que-tu-web-necesita-renovacion).

## ¿Cuándo conviene renovar una página web?

Renovar tiene sentido cuando el sitio ya no cumple su función comercial. Algunas situaciones frecuentes son:

- El sitio tarda demasiado en cargar y no hay forma sencilla de corregirlo sobre la base actual.
- El contenido está desactualizado, incluidos servicios, precios o datos de contacto.
- La estructura de navegación no permite agregar nuevas secciones sin desordenar el resto.
- El sitio no se muestra bien en celulares o usa tecnologías que ya no reciben soporte.

Si el problema es solo de contenido, muchas veces basta con actualizarlo sin cambiar las URLs. Un rediseño completo es más delicado porque cambia casi todo a la vez, y ese es precisamente el origen de la mayor parte de los riesgos de SEO.

## ¿Qué es una migración de sitio web?

Una migración de sitio web es cualquier cambio que modifica la dirección de páginas, la estructura del dominio o la plataforma sobre la que funciona el sitio. Google distingue entre cambiar las URLs de un sitio, cambiar de dominio y otros cambios de estructura, y recomienda tratarlos con un plan explícito.

En un rediseño, la migración puede ser pequeña (cambiar algunas rutas) o grande (cambiar todas las rutas, el gestor de contenidos y el dominio). En ambos casos, el mismo principio aplica: lo que ya se encontraba antes debe seguir encontrándose después.

## Riesgos de SEO al migrar

Los riesgos más comunes se agrupan en cuatro categorías:

1. **Cambio de URLs sin redirecciones.** Las páginas antiguas responden con error 404 y pierden su historial de visitas y enlaces.
2. **Contenido eliminado.** Páginas que recibían tráfico desaparecen porque nadie las incluyó en el sitio nuevo.
3. **Bloqueos por error.** Una marca noindex o una regla en robots.txt que sirvió para el entorno de pruebas se queda en la versión publicada.
4. **Velocidad y rendimiento.** Un diseño más pesado puede empeorar la experiencia justo en el momento en que Google revisa el sitio nuevo.

La velocidad merece una atención especial. Si el rediseño añade imágenes, animaciones o scripts sin revisión, la página puede cargar más lento. La guía sobre [por qué una página lenta te cuesta clientes](/blog/velocidad-de-carga-web-por-que-una-pagina-lenta-te-cuesta-clientes) explica por qué esto afecta tanto a los visitantes como a la búsqueda.

## Qué recomienda Google para migrar URLs

La guía oficial de Google sobre cambios de URL establece los pasos básicos del proceso. Resumidos, son estos:

- **Redirecciones permanentes del sitio antiguo al nuevo**, siguiendo el mapeo que hayas preparado. Google recomienda redirecciones del lado del servidor.
- **Enviar el sitemap nuevo** en Search Console para que Google conozca las URLs actuales.
- **Si cambias de dominio**, presentar un cambio de dirección en Search Console para el sitio antiguo.
- **Cambiar solo una cosa a la vez**, para poder identificar la causa si algo sale mal.
- **Retirar los bloqueos** de noindex o de robots.txt que se usaron solo durante la migración.

La misma guía indica que un sitio pequeño o mediano puede tardar unas semanas en mover la mayoría de sus páginas, y que los sitios grandes tardan más. No hay frecuencias fijas de rastreo: Googlebot depende del tamaño del sitio. También advierte que es normal que el posicionamiento fluctúe durante la mudanza y que se estabiliza con el tiempo.

## ¿Qué es una redirección 301?

Una redirección 301 es una respuesta del servidor que indica que una página se trasladó de forma permanente a otra dirección. Cuando un visitante o un buscador solicita la URL antigua, el servidor la envía automáticamente a la URL nueva.

Según la documentación de Google sobre redirecciones, los códigos 301 y 308 indican que la página se movió de forma permanente, y la redirección 301 se usa como señal para identificar la URL que debe considerarse canónica. Por eso es la opción habitual para un rediseño.

## Tipos de redirección y cuándo usar cada una

La siguiente tabla resume los tipos más comunes. Los datos de la columna de criterio provienen de la documentación de Google sobre redirecciones.

| Código | Tipo | Cuándo usarla | Criterio según Google |
|---|---|---|---|
| 301 | Permanente | URL que se movió para siempre, como en un rediseño | Señal de que la nueva URL debe considerarse canónica |
| 302 | Temporal | Movimiento provisional, por ejemplo una página en mantenimiento | No se usa como señal de que el destino sea canónico |
| 307 | Temporal | Redirección temporal que debe conservar el método de la petición | Listada como temporal |
| 308 | Permanente | Movimiento definitivo que debe conservar el método de la petición | Listada como permanente, con el mismo significado que la 301 |

Para una migración de rediseño, la opción adecuada es casi siempre la 301 (o la 308 si tu plataforma la recomienda). Usar un 302 para un cambio definitivo es un error frecuente porque Google no lo trata como señal de que la página nueva reemplaza a la antigua. Google también indica que una redirección meta refresh con retardo se trata como temporal, mientras que una inmediata (0 segundos) se trata como permanente; lo más seguro es resolver el cambio en el servidor.

## Plan por fases: antes, durante y después

Una migración ordenada se divide en fases. Cada una tiene un entregable claro y una forma de verificar que está lista para avanzar.

### Fase 1: inventario de URLs

Exporta la lista completa de direcciones del sitio actual. Cruza esa lista con el rendimiento en Search Console (clics, impresiones y páginas que aparecen en los resultados) y con las páginas más visitadas en tu herramienta de analítica. Las páginas que tienen enlaces desde otros sitios también deben incluirse, porque esos enlaces dejan de funcionar si la dirección cambia sin redirección.

### Fase 2: mapa de redirecciones 301

Crea una tabla con la URL antigua, la URL nueva equivalente y el tipo de redirección. Cada URL antigua debe tener un destino concreto. Si una página no tiene equivalente, la mejor opción suele ser redirigirla a la página más relacionada, no a la página de inicio de forma masiva. Evita las cadenas de redirección (una URL que redirige a otra que a su vez redirige a una tercera), porque complican el rastreo y suman tiempo de carga.

![Mapa de redirecciones con cuatro filas: cada URL antigua apunta con una flecha 301 a una URL nueva](/images/blog/diagramas/rediseno-web-sin-perder-seo-guia-de-migracion-y-redirecciones-301-mapa-redirecciones.svg)

*Figura 1. Cada URL antigua con visitas o enlaces redirige con 301 a una sola URL nueva.*

### Fase 3: mantener metadatos y contenido importante

Las páginas que ya posicionan conservan su valor si mantienen el mismo propósito. Conserva los títulos y las descripciones que funcionaban, los encabezados principales y el contenido útil. Si el rediseño cambia textos, revisa que las consultas que atraían visitas sigan presentes en la página nueva. Si usas datos estructurados, verifica que se mantienen y que coinciden con lo visible. La guía sobre [datos estructurados](/blog/datos-estructurados-schema-org-json-ld-que-marcar-en-tu-sitio-web) describe cómo revisarlos.

### Fase 4: pruebas en un entorno de pruebas

Antes de publicar, prueba el sitio nuevo en un entorno separado. Es normal bloquear ese entorno para que Google no lo indexe, pero ese bloqueo debe desaparecer en el lanzamiento. Revisa que todas las redirecciones funcionen, que no haya cadenas, que las páginas importantes respondan y que los formularios y los enlaces internos apunten a las URLs correctas.

### Fase 5: lanzamiento

El día del cambio, publica el sitio nuevo, activa el mapa de redirecciones, retira los bloqueos temporales de noindex y robots.txt, y revisa de inmediato una muestra de las URLs más importantes. No hagas más cambios ese mismo día, para que sea más fácil identificar la causa de cualquier problema.

### Fase 6: sitemap nuevo y monitoreo

Envía el sitemap nuevo en Search Console y sigue la evolución del sitio durante las semanas siguientes.

![Línea de tiempo horizontal con cinco hitos: inventario, mapa 301, pruebas, lanzamiento y monitoreo durante cuatro semanas](/images/blog/diagramas/rediseno-web-sin-perder-seo-guia-de-migracion-y-redirecciones-301-linea-de-tiempo.svg)

*Figura 2. Línea de tiempo de una migración, desde el inventario hasta el monitoreo de las primeras cuatro semanas.*

| Fase | Qué hacer | Señal de que está lista |
|---|---|---|
| Antes | Inventario de URLs, mapa 301, copia de contenido y metadatos, prueba en entorno de pruebas | Cada URL importante tiene destino y todas las redirecciones responden |
| Durante | Publicar, activar redirecciones, retirar noindex y bloqueos de robots.txt, enviar sitemap nuevo | Las páginas clave responden con código 200 y no tienen bloqueos |
| Después | Revisar Search Console, errores 404, rendimiento y velocidad | Los errores bajan y las páginas importantes siguen siendo indexadas |

## Qué medir en las cuatro semanas posteriores

El monitoreo debe ser semanal y comparar con el periodo anterior al lanzamiento. Estas son las medidas más útiles:

- **Rendimiento en Search Console:** clics, impresiones y posición media, comparando las páginas antiguas con sus equivalentes nuevas.
- **Páginas indexadas y errores de rastreo:** que el número de páginas con problemas disminuya en lugar de crecer.
- **Errores 404:** URLs antiguas que no tienen redirección y deben corregirse.
- **Sitemap:** que Search Console reporte el sitemap nuevo sin errores.
- **Tráfico orgánico en analítica:** que las páginas de destino de las redirecciones reciban visitas.
- **Velocidad de carga:** que las páginas principales sigan cargando en un tiempo razonable.

Es normal ver fluctuaciones en las primeras semanas. Lo que debe preocupar es una tendencia que no se recupera, un aumento de errores o la desaparición de páginas que antes recibían visitas.

## Errores comunes

- **Cadenas de redirección.** Una URL que pasa por dos o tres destinos antes de llegar a la final. Redirige siempre al destino definitivo.
- **Noindex olvidado.** Google indica que se deben retirar los noindex y los bloqueos de robots.txt que se usaron solo para la migración. Si quedan en la versión publicada, las páginas pueden dejar de indexarse.
- **robots.txt que bloquea todo.** Un archivo de pruebas que deniega el acceso a todo el sitio puede llegar a producción por error. Revisa este archivo al lanzar.
- **Redirigir todo a la página de inicio.** Esta práctica pierde la relación entre cada página antigua y su contenido equivalente.
- **Eliminar páginas con visitas sin redirigirlas.** Revisa el inventario antes de dar de baja cualquier URL.
- **Cambiar todo a la vez.** Si cambian el dominio, el diseño, el gestor de contenidos y las URLs en el mismo día, es muy difícil saber qué causó un problema. Google recomienda cambiar una cosa a la vez.
- **Olvidar los metadatos.** Un rediseño puede reemplazar títulos y descripciones que funcionaban por textos genéricos.

## Plazos de referencia

Los plazos de Universoft para el desarrollo son de 3 a 6 semanas para un sitio informativo y de 6 a 10 semanas para un sitio con funciones especiales. Por su parte, Google indica que el tiempo de migración depende del tamaño del sitio y que el posicionamiento se estabiliza con el tiempo. Para entender qué influye en el costo de una web nueva, revisa [cuánto cuesta una página web profesional en Perú](/blog/cuanto-cuesta-una-pagina-web-profesional-en-peru).

## Preguntas frecuentes

### ¿Cuánto tarda Google en reflejar un rediseño web?

Según la documentación de Google, un sitio pequeño o mediano puede tardar unas semanas en mover la mayoría de sus páginas, y los sitios grandes tardan más. No hay una frecuencia fija de rastreo, así que el tiempo depende del tamaño del sitio.

### ¿Puedo perder posiciones al renovar mi página web?

Sí, es posible. Google indica que es normal que haya fluctuaciones temporales durante una migración. Las pérdidas que no se recuperan suelen deberse a redirecciones faltantes, bloqueos olvidados o contenido eliminado sin reemplazo.

### ¿Qué es una redirección 301?

Una redirección 301 indica que una página se movió de forma permanente a otra dirección. Es la opción habitual para un rediseño, porque transfiere la página antigua a su equivalente nuevo.

### ¿Puedo usar una redirección 302 para la migración?

No es lo recomendable para un cambio definitivo. Google indica que un 302 es temporal y no se usa como señal de que el destino sea la URL canónica.

### ¿Necesito enviar el sitemap nuevo?

Sí. La guía de Google recomienda enviar el sitemap nuevo en Search Console después de la migración, para que el buscador conozca las URLs actuales.

### ¿Debo cambiar todas las URLs de mi sitio?

No necesariamente. Si las URLs actuales son claras y funcionan bien, puedes mantenerlas. Cambiar una dirección solo tiene sentido si mejora la claridad del sitio, y en ese caso debe acompañarse de una redirección 301.

### ¿Cuánto cuesta renovar una página web en Perú?

No hay datos públicos verificados para Perú que permitan dar un precio general para un rediseño. El costo depende del número de páginas, de las funciones y de la migración. Si necesitas una estimación, escríbenos desde la página de [contacto](/contacto).

## Glosario rápido

**Redirección 301:** respuesta del servidor que indica un traslado permanente de una página a otra dirección.

**Redirección 302:** respuesta del servidor que indica un traslado temporal.

**Mapa de redirecciones:** tabla que relaciona cada URL antigua con su URL nueva equivalente.

**Cadena de redirección:** secuencia en la que una URL redirige a otra que a su vez redirige a una tercera.

**Noindex:** instrucción que pide a los buscadores no incluir una página en su índice.

**robots.txt:** archivo que indica a los rastreadores qué partes del sitio pueden recorrer.

**Sitemap:** archivo que lista las URLs de un sitio para facilitar su descubrimiento.

**Search Console:** herramienta gratuita de Google que muestra el rendimiento del sitio y sus errores de rastreo.

## Lecturas relacionadas

- [GEO vs SEO: cómo optimizar para buscadores y motores de IA](/blog/geo-vs-seo-como-optimizar-para-buscadores-y-motores-de-ia)

## Fuentes y lecturas recomendadas

- Google Search Central, "Cambiar URLs de un sitio", https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes (consultada el 14 de noviembre de 2026).
- Google Search Central, documentación sobre redirecciones 301, 302, 307 y 308, https://developers.google.com/search/docs/crawling-indexing/301-redirects (consultada el 14 de noviembre de 2026).

*Última revisión: 14 de noviembre de 2026.*

Si estás evaluando un rediseño, puedes empezar por una conversación desde la página de [contacto](/contacto). Para sitios corporativos, el servicio relevante es el de [desarrollo web](/servicios/web), que incluye la planificación de la migración.
