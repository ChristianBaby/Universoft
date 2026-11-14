---
title: "App móvil o PWA: qué conviene a tu empresa en Perú"
seoTitle: "App móvil o PWA: cuál elegir para tu empresa"
description: "Compara app nativa, multiplataforma y PWA: costos relativos, límites, plazos y criterios para decidir qué conviene a tu empresa en Perú."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Plataformas"
cover: "/images/blog/app-movil-o-pwa-que-conviene-a-tu-empresa-en-peru-cover.webp"
coverAlt: "Mano sosteniendo un celular con líneas de código en la pantalla"
author: "Christian Pumaccahua Cusihuaman"
readTime: "9 min de lectura"
draft: true
reviewed: false
---

## Respuesta corta

Una app nativa se desarrolla para cada sistema operativo, una app multiplataforma usa un mismo código para varios sistemas y una PWA (aplicación web progresiva) es un sitio web que se puede instalar y usar sin conexión en algunos casos. Para la mayoría de negocios que solo necesitan llegar a clientes o empleados desde el celular, una PWA o una multiplataforma suele ser suficiente. La app nativa se justifica cuando se requiere un acceso intensivo al hardware o una experiencia muy específica del sistema.

## Cuando el cliente pregunta "¿tienen app?"

En muchas empresas peruanas la decisión llega como una pregunta simple: "¿necesitamos una app?". Detrás hay dudas más concretas: si los clientes van a reservar desde el celular, si el equipo de campo necesita funcionar sin señal, si conviene publicar en la tienda de Apple y de Google, o si basta con una versión web bien hecha.

Conviene separar tres caminos que suelen confundirse, porque cada uno tiene ventajas, límites y un mantenimiento distinto.

## Tres caminos: nativa, multiplataforma y PWA

La app nativa se escribe con las herramientas oficiales de cada plataforma. Para Android se usa Kotlin o Java, y para iOS, Swift. Da acceso completo a las funciones del sistema, pero implica mantener dos desarrollos.

La multiplataforma usa un solo código para generar apps en Android y iOS. Flutter, por ejemplo, se describe en su documentación oficial como un framework de Google para crear aplicaciones compiladas de forma nativa para móvil, web y escritorio desde una sola base de código, con el lenguaje Dart. React Native, por su parte, permite escribir la interfaz con React y JavaScript; según su documentación, sus componentes se traducen en vistas nativas de Android y iOS en tiempo de ejecución.

La PWA es una aplicación web que, según la documentación de MDN, puede instalarse en el dispositivo, funcionar sin conexión y en segundo plano gracias a los service workers, y recibir notificaciones push. Se usa un solo sitio para todos los dispositivos y no pasa por una tienda para instalarse.

La siguiente tabla compara los tres caminos en los criterios que más pesan al decidir.

| Criterio | App nativa | Multiplataforma (Flutter, React Native) | PWA |
|---|---|---|---|
| Código a mantener | Uno por sistema operativo | Una base común para Android e iOS | Un solo sitio web |
| Publicación en tiendas | Sí, Google Play y App Store | Sí, en ambas tiendas | No es obligatoria; se instala desde el navegador |
| Acceso al hardware | Completo, según cada sistema | Amplio, con plugins para funciones específicas | Limitado y variable según el navegador y el sistema |
| Funcionamiento sin conexión | Sí | Sí | Sí, con service workers bien diseñados |
| Notificaciones push | Sí | Sí | Depende del sistema y de cómo se instala |
| Velocidad de actualización | Depende de la publicación en tienda | Depende de la publicación en tienda | Inmediata al desplegar el sitio |

## Qué ofrece una PWA y dónde se queda corta

Las PWA tienen ventajas claras. Un solo desarrollo llega a computadoras y celulares, las actualizaciones se publican sin pasar por la revisión de una tienda y el usuario puede instalarla con un clic desde el navegador. Para un catálogo, un sistema de reservas o un portal de clientes, esa combinación suele ser suficiente.

Sus límites también son reales. El primero es el soporte de notificaciones en iPhone: según WebKit, Apple añadió Web Push para aplicaciones web agregadas a la pantalla de inicio en iOS y iPadOS 16.4, y solo se pueden pedir permisos en respuesta a un toque del usuario dentro de esa aplicación instalada. Un sitio abierto en Safari no puede pedir permiso de notificaciones. Por eso, si las notificaciones son parte central del servicio, hay que probarlas en los dispositivos reales de los usuarios.

El segundo límite es el acceso al hardware. MDN describe capacidades como el uso sin conexión, la instalación y la integración con el sistema, pero el acceso a sensores, Bluetooth o cámara depende de cada API del navegador y de cada sistema operativo. Antes de prometer una función así, conviene revisar la compatibilidad de esa API específica.

El tercer límite es la distribución. Una PWA no aparece en las tiendas de forma natural, y eso influye en la confianza y en el descubrimiento. Además, las reglas de tienda pueden afectar a un producto que se presente como un sitio envuelto en una app. Según las directrices de App Store de Apple, la guía 4.2 pide que una app tenga funciones, contenido e interfaz que la distingan de un sitio web empaquetado, y señala que los clips web o las colecciones de enlaces no son suficientes en general.

## Ventajas y límites de la app nativa y la multiplataforma

La app nativa ofrece la mejor integración con el sistema operativo: notificaciones confiables, acceso completo a sensores, cámara, biometría y funciones avanzadas. Es la opción más razonable cuando el uso de la app depende de esas capacidades o cuando la experiencia debe seguir exactamente las guías de diseño de cada plataforma. Su desventaja es que cada sistema requiere desarrollo, pruebas y mantenimiento propios.

La multiplataforma reduce ese doble trabajo. Una sola base de código sirve para Android e iOS, y el equipo puede actualizar ambas versiones a la vez. El riesgo está en depender de plugins de terceros para funciones muy específicas, y en que algunas tareas de rendimiento o de interfaz requieran código nativo. Por eso conviene validar, antes de empezar, que las funciones críticas tengan soporte maduro en el framework elegido.

Para las dos opciones aplican las reglas de las tiendas. Según la guía 3.1.1 de Apple, si una app desbloquea funciones o contenido digital, como suscripciones o acceso premium, debe usar su sistema de compras dentro de la aplicación, salvo los casos que la misma guía excepciona. Si la empresa vende servicios que se consumen fuera de la app, como una reserva de tour o un servicio presencial, la regla se aplica de otra forma. Revisa la guía vigente antes de diseñar el flujo de pago.

## Costos relativos y plazos: lo que sí podemos decir

Este artículo no publica tarifas de mercado porque no encontramos fuentes públicas verificadas para precios de apps en Perú. Lo que sí se puede comparar son los factores que encarecen cada opción.

- **PWA:** un solo desarrollo web, sin proceso de publicación en tiendas. Suele ser la opción de menor costo inicial cuando las funciones nativas no son indispensables.
- **Multiplataforma:** una sola base de código para dos sistemas. Su costo se reparte entre Android e iOS, pero exige un equipo que domine el framework y pruebas en dispositivos reales.
- **App nativa:** dos desarrollos, dos bases de código y dos ciclos de pruebas. Su costo sube cuando se necesitan ambas plataformas con la misma calidad.

En cuanto a plazos, según la guía de Universoft, un MVP de sistema toma entre 8 y 12 semanas, un proyecto complejo entre 4 y 6 meses, un sitio informativo entre 3 y 6 semanas y un sitio con funciones especiales entre 6 y 10 semanas. Una app de cualquiera de los tres tipos depende del alcance, de las integraciones con otros sistemas y del número de plataformas, por lo que el plazo debe definirse con una lista de funciones concreta. Si quieres entender cómo se estiman estos tiempos, revisa el artículo sobre [cuánto tarda desarrollar un sistema a medida en Perú](/blog/cuanto-tarda-desarrollar-un-sistema-a-medida-en-peru).

## Conectividad móvil en Perú: el contexto que importa

Un factor que pesa en la decisión es cómo se conectan los usuarios. Según el INEI, citado por El Peruano, el uso de internet a través del celular es la vía dominante en el país. En su reporte sobre 2025, la nota indica que el 88,1 % de las mujeres se conectaba a internet por este medio. No encontramos una cifra oficial verificada para el total de la población con el mismo indicador, por lo que no la usamos aquí.

Para una empresa, la consecuencia práctica es que cualquier solución, sea PWA o app, debe funcionar bien en pantallas pequeñas, con conexiones móviles intermitentes y en equipos de gama media. Puedes profundizar en este punto en el artículo sobre [velocidad de carga web](/blog/velocidad-de-carga-web-por-que-una-pagina-lenta-te-cuesta-clientes).

## Criterios para decidir

Antes de elegir, responde estas preguntas con el equipo y con los usuarios reales:

- **Presupuesto:** ¿cuánto se puede invertir en el primer lanzamiento y en el mantenimiento anual?
- **Conexión:** ¿la app debe funcionar sin señal, por ejemplo en campo o en un depósito?
- **Hardware:** ¿necesita cámara, GPS, Bluetooth, biometría o sensores de forma constante?
- **Distribución:** ¿los usuarios la buscarán en la tienda o llegarán desde un enlace, un código QR o un correo?
- **Frecuencia de uso:** ¿la usarán todos los días o de vez en cuando?
- **Equipo interno:** ¿quién mantendrá el producto y qué tecnologías domina?

Si la respuesta a la mayoría de estas preguntas apunta a un uso ocasional, sin hardware especial y con distribución por enlace, una PWA suele ser la opción más razonable para empezar. Si la decisión forma parte de un proyecto mayor, compara con [software a medida frente a soluciones genéricas](/blog/software-a-medida-vs-soluciones-genericas) y revisa [cuánto cuesta una plataforma a medida en Perú](/blog/cuanto-cuesta-desarrollar-una-plataforma-a-medida-en-peru).

## Qué elegir según tu caso

La siguiente tabla resume recomendaciones frecuentes. Son orientaciones, no reglas: cada proyecto necesita una evaluación con su lista de funciones.

| Tu caso | Opción que suele convenir | Por qué |
|---|---|---|
| Catálogo o reservas que los clientes usan de vez en cuando | PWA | Un solo sitio, instalable y sin proceso de tienda |
| Equipo de campo que necesita cámara, GPS y trabajo sin señal | Nativa o multiplataforma | Acceso completo al hardware y uso sin conexión más robusto |
| Venta de suscripciones digitales dentro de la app | Multiplataforma o nativa, revisando las reglas de compra | Las tiendas exigen sus sistemas de pago para contenido digital |
| Presupuesto limitado y necesidad de llegar a Android e iOS | Multiplataforma | Un solo código para dos sistemas |
| Herramienta interna para empleados con equipos conocidos | PWA | Se despliega sin distribución en tiendas y se actualiza al instante |

El siguiente diagrama resume el razonamiento en forma de árbol de decisión.

![Árbol de decisión: si necesita hardware o funcionamiento sin conexión, elige nativa o multiplataforma; si necesita tienda y notificaciones, multiplataforma; en otros casos, PWA](/images/blog/diagramas/app-movil-o-pwa-que-conviene-a-tu-empresa-en-peru-arbol.svg)

*Figura 1. Árbol de decisión simplificado. Sirve para una primera conversación; cada caso requiere revisar sus funciones con detalle.*

## Cómo se comparan las capas de cada opción

La diferencia también se ve en las capas: la app habla con el sistema operativo y la PWA, con el navegador. Esa diferencia explica tanto su ventaja en distribución como sus límites en el hardware.

![Comparación de capas: la app nativa usa componentes del sistema operativo y la tienda; la PWA usa el navegador y un service worker](/images/blog/diagramas/app-movil-o-pwa-que-conviene-a-tu-empresa-en-peru-capas.svg)

*Figura 2. Comparación de capas entre una app nativa y una PWA. La PWA depende del navegador; la app nativa, del sistema operativo y de la tienda.*

## Errores comunes al elegir

- **Elegir por moda.** Una app puede parecer necesaria cuando una PWA resolvería el caso con menos costo.
- **Prometer notificaciones sin probarlas.** En iPhone, la PWA tiene reglas propias que deben validarse con usuarios reales.
- **Subestimar el mantenimiento.** Cada versión del sistema operativo y de las tiendas trae cambios; una app sin mantenimiento deja de funcionar bien.
- **No definir las funciones antes de cotizar.** Sin una lista concreta, cualquier plazo o presupuesto es una suposición.
- **Ignorar la conexión real de los usuarios.** Diseñar solo para una red de oficina deja fuera a quienes usan el celular en la calle o en zonas con señal intermitente.

## Preguntas frecuentes

### ¿Una PWA puede reemplazar a una app en la tienda?

Depende de las funciones. Para catálogos, reservas, formularios y portales de clientes suele ser suficiente. Si se necesitan sensores, funciones de bajo nivel o presencia en la tienda como canal principal, conviene evaluar una app nativa o multiplataforma.

### ¿La PWA funciona sin conexión?

Puede hacerlo, porque los service workers permiten guardar recursos en caché y servir contenido cuando no hay red. Qué se puede hacer offline depende del diseño de la aplicación, por ejemplo si se pueden registrar datos y sincronizarlos después.

### ¿Las notificaciones push funcionan en iPhone?

Sí, pero con condiciones. Según WebKit, en iOS y iPadOS 16.4 o superior las notificaciones web funcionan para aplicaciones agregadas a la pantalla de inicio, y el permiso se pide en respuesta a un toque del usuario. Un sitio abierto en Safari no puede solicitar ese permiso.

### ¿Flutter o React Native: cuál elegir?

Depende sobre todo del equipo. Flutter usa Dart y reúne en un framework la interfaz y el renderizado; React Native usa JavaScript y React, y se apoya en componentes nativos de cada plataforma. Si el equipo ya programa en React, React Native suele ser una transición natural; si necesita una interfaz muy uniforme entre plataformas, Flutter es una opción frecuente.

### ¿Cuánto cuesta una app en Perú?

No publicamos tarifas de mercado porque no encontramos fuentes verificadas para precios de apps en el país. El costo depende del alcance, de las integraciones y de las plataformas. Para estimar de forma realista, conviene preparar una lista de funciones y pedir una evaluación técnica.

### ¿Necesito publicar mi app en las tiendas?

Para una app nativa o multiplataforma, la publicación es el medio habitual de distribución. Una PWA se instala desde el navegador y no pasa por una tienda.

## Glosario rápido

**App nativa:** Aplicación desarrollada con las herramientas oficiales de un sistema operativo específico.

**Multiplataforma:** Aplicación desarrollada con un mismo código para varios sistemas, como Android e iOS.

**PWA:** Aplicación web progresiva; un sitio que se puede instalar y usar con funciones similares a una app.

**Service worker:** Script que el navegador ejecuta en segundo plano para manejar caché, uso sin conexión y notificaciones.

**Notificación push:** Mensaje que el sistema muestra al usuario aunque la aplicación no esté abierta.

**MVP:** Producto mínimo viable; primera versión con las funciones esenciales para validar una idea con usuarios.

## Fuentes y lecturas recomendadas

- MDN Web Docs, "Progressive web apps". Mozilla, consultado en 2026. https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
- WebKit, "Web Push for Web Apps on iOS and iPadOS". Apple, anuncio de iOS 16.4. https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados
- Apple, "App Store Review Guidelines" (secciones 3.1.1 y 4.2). Apple, consultado en 2026. https://developer.apple.com/app-store/review/guidelines/
- Flutter, "FAQ". Google, consultado en 2026. https://docs.flutter.dev/resources/faq
- React Native, "Core Components and Native Components". Meta, consultado en 2026. https://reactnative.dev/docs/intro-react-native-components
- El Peruano, "Uso de internet en mujeres alcanza 80,8 % en 2025" (nota que cita datos del INEI). Diario El Peruano, 2026. https://www.elperuano.pe/noticia/290010-uso-de-internet-en-mujeres-alcanza-808-en-2025-frente-al-305-registrado-en-2010
- INEI, "Boletín de estadísticas de las TIC, octubre-diciembre 2025" (para revisar los indicadores oficiales completos). INEI, 2026. https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-oct_dic2025.pdf

Nota: el boletín del INEI se listó como lectura recomendada porque no pudimos leer su contenido en esta revisión; las cifras citadas en el texto provienen de la nota de El Peruano.

Si tu empresa evalúa una app o una PWA, escríbenos desde [contacto](/contacto) con la lista de funciones que necesitas. Revisamos el caso con [nuestros servicios web](/servicios/web) y de plataformas antes de recomendar una ruta.
