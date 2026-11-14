---
title: "API y webhooks: qué son y cómo conectan los sistemas de tu empresa"
seoTitle: "API y webhooks: cómo conectar sistemas de tu empresa"
description: "Qué es una API y un webhook, cuándo conviene cada uno y qué cuidar en seguridad para conectar tu software con pasarelas de pago, facturación y CRM."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Software"
cover: "/images/blog/api-y-webhooks-que-son-y-como-conectan-tus-sistemas-cover.webp"
coverAlt: "Ilustración de dos sistemas conectados por un puente de luz con paquetes de datos, símbolo de una API"
author: "Christian Pumaccahua Cusihuaman"
readTime: "9 min de lectura"
draft: false
reviewed: true
---

## Respuesta corta

Una API es un conjunto de reglas que permite a un sistema pedir datos o ordenar acciones a otro, normalmente por HTTP. Un webhook es el caso inverso: el sistema de origen envía un aviso a tu sistema cuando ocurre un evento, como un pago aprobado. Usa una API cuando necesitas consultar o modificar datos, y un webhook cuando necesitas reaccionar a algo que pasa en otro sistema, sin consultarlo todo el tiempo.

## El problema: sistemas que no se hablan

Una pyme suele tener varias herramientas que no comparten información: una web con reservas, un sistema de facturación, un CRM para ventas y una hoja de cálculo para el seguimiento de pagos. Mientras los datos viajan a mano, aparecen errores de digitación, clientes que reciben dos veces el mismo correo y reportes que no cuadran con la realidad.

Conectar esos sistemas es el punto donde entran las APIs y los webhooks. Como se explica en la guía sobre [integración de sistemas](/blog/integracion-de-sistemas-como-conectar-tus-plataformas-sin-perder-datos), el objetivo no es solo que los datos lleguen de un lado a otro, sino que lleguen completos, a tiempo y sin duplicarse.

## Qué es una API

API significa interfaz de programación de aplicaciones (*application programming interface*). En la práctica, es la forma documentada en que un software expone sus funciones a otros programas. Gran parte de las APIs modernas usan HTTP, el mismo protocolo de la web. Según MDN, HTTP es un protocolo cliente-servidor: una entidad envía una solicitud y otra responde. Cada solicitud indica un método, como GET para consultar o POST para crear, y una ruta que identifica el recurso.

Dos estilos son especialmente comunes:

- **REST** organiza la información en recursos con URL propias (por ejemplo, `/pedidos/123`) y usa los métodos HTTP para operar sobre ellos. Es el estilo más extendido en integraciones empresariales.
- **GraphQL** permite que el cliente pida exactamente los campos que necesita en una sola consulta. La documentación oficial lo presenta como una forma de solicitar exactamente los datos necesarios, con variables y fragmentos.

Ninguno es mejor en todos los casos. REST suele ser más directo para pasarelas de pago, facturación electrónica o servicios de mensajería. GraphQL resulta útil cuando un panel necesita combinar muchos datos relacionados en una sola respuesta.

## Qué es un webhook

Un webhook es una notificación automática que un servicio envía a una dirección HTTPS de tu sistema cuando ocurre un evento. Stripe lo describe así en su documentación: tras registrar un endpoint, la plataforma envía datos en tiempo real en formato JSON cuando ocurren eventos en la cuenta, como que el banco de un cliente confirma un pago o que un cobro recurrente se realiza.

La diferencia clave con una API es quién inicia la comunicación. En una petición API, tu sistema pregunta. En un webhook, el otro sistema avisa. Esto evita el llamado *polling*, que consiste en consultar cada cierto tiempo si algo cambió. El polling funciona, pero genera tráfico innecesario y retrasa la reacción cuando el evento ocurre justo después de una consulta.

![Secuencia de una petición API y de un webhook entre tu sistema y un servicio externo](/images/blog/diagramas/api-y-webhooks-que-son-y-como-conectan-tus-sistemas-secuencia.svg)

*Figura 1. Primero, tu sistema consulta con una petición API. Después, el servicio externo avisa con un webhook y tu sistema confirma con 200 OK.*

## Cuándo usar API, webhook o importación manual

La siguiente tabla resume las tres formas más comunes de mover información entre sistemas.

| Criterio | Petición API | Webhook | Importación manual (archivo) |
|---|---|---|---|
| Quién inicia la comunicación | Tu sistema | El servicio externo | Una persona |
| Cuándo llega el dato | Cuando tu sistema lo solicita | Cuando ocurre el evento | Cuando alguien carga el archivo |
| Ideal para | Consultar o modificar datos | Reaccionar a pagos, altas o cancelaciones | Cargas puntuales o migraciones |
| Riesgo principal | Límites de uso y claves expuestas | Recibir el mismo evento más de una vez | Errores de digitación y datos desactualizados |

En una pyme, la combinación más habitual es usar webhooks para enterarse de un pago y una API para registrar ese pago en el sistema de facturación o en el CRM.

## Autenticación: cómo se identifica tu sistema

Ninguna integración debería aceptar solicitudes sin identificar quién las envía. Hay dos enfoques frecuentes:

- **Claves de API (API keys):** una cadena secreta que identifica a tu aplicación. Es sencilla de implementar, pero si se filtra, cualquiera puede usarla hasta que se revoque. Por eso deben guardarse fuera del código y rotarse periódicamente.
- **OAuth 2.0:** el protocolo definido en el RFC 6749 del IETF. Describe cómo una aplicación cliente obtiene acceso limitado a recursos protegidos en nombre del titular de la información. Interviene un servidor de autorización que emite tokens de acceso, lo que permite dar permisos concretos sin compartir la contraseña del usuario. Es el enfoque habitual cuando una herramienta debe acceder a datos de otra cuenta, como un CRM que lee contactos de un correo corporativo.

Cuando la integración involucra acceso a clientes o a datos personales, conviene revisar también las recomendaciones de [seguridad y buenas prácticas](/blog/buenas-practicas-ciberseguridad-empresas) antes de publicar la conexión.

## Códigos HTTP: cómo leer los errores

Cada respuesta de una API incluye un código de estado. Entenderlos ahorra horas de diagnóstico. MDN los agrupa por clase, y el primer dígito indica el tipo de respuesta. Estos son los que más aparecen en integraciones:

- **400 Bad Request:** la solicitud está mal formada, por ejemplo, con un campo faltante o un formato incorrecto.
- **401 Unauthorized:** falta autenticación o la clave no es válida.
- **403 Forbidden:** la clave es válida, pero no tiene permiso para esa acción.
- **404 Not Found:** el recurso no existe, como un pedido con un identificador equivocado.
- **409 Conflict:** la solicitud choca con el estado actual, por ejemplo, intentar crear un cliente que ya existe.
- **429 Too Many Requests:** se superó el límite de solicitudes en un periodo. Es la señal de *rate limiting*.
- **500 Internal Server Error** y **503 Service Unavailable:** fallas del lado del servidor. El segundo suele indicar mantenimiento o sobrecarga.

Los códigos 4xx indican un problema con la solicitud, así que reenviar la misma petición produce el mismo error. Los 5xx sugieren que el problema está del lado del servidor, y reintentar más tarde puede dar resultado. Esta diferencia es la base para decidir qué errores reintentar.

## Ejemplos reales en empresas peruanas

Algunos casos donde las APIs y los webhooks aparecen con frecuencia:

- **Pasarela de pagos:** el sitio web envía el cobro a la pasarela por API y recibe un webhook cuando el pago se confirma. Así, la reserva se marca como pagada aunque el cliente cierre la ventana antes de volver. La guía sobre [pasarelas de pago para turismo](/blog/pasarelas-de-pago-para-turismo-como-cobrar-reservas-en-linea) detalla este flujo.
- **Facturación electrónica:** el sistema de ventas envía la información del comprobante al proveedor de facturación por API, y recibe la respuesta de aceptación o rechazo. Si quieres comparar opciones, revisa [qué sistema usar para facturación electrónica](/blog/facturacion-electronica-sunat-que-sistema-usar-en-tu-pyme).
- **CRM:** cuando un formulario web crea un prospecto, una API registra el contacto en el CRM y un webhook avisa al equipo de ventas cuando el prospecto cambia de etapa.
- **WhatsApp Business:** Meta describe sus webhooks como solicitudes HTTP con cargas JSON que envía a un servidor que tú designas. Según su documentación, el servidor debe verificarse al configurarse y Meta puede reenviar webhooks, por lo que pueden llegar notificaciones duplicadas.

## Seguridad en webhooks: no confíes en cualquier solicitud

Un endpoint de webhook es una URL pública. Cualquiera que la conozca puede enviarle datos falsos, así que cada solicitud debe validarse. Stripe recomienda dos capas de protección: restringir las IP de origen, cuando el proveedor las publica, y verificar la firma del mensaje.

La firma funciona así: el proveedor calcula un HMAC con SHA-256 usando un secreto compartido sobre el contenido exacto que envía, e incluye el resultado y una marca de tiempo en un encabezado. Tu sistema recalcula la firma con el mismo secreto y compara los valores. Stripe indica varias reglas que evitan los errores más comunes:

- No modifiques el cuerpo crudo de la solicitud antes de verificar la firma. Cualquier cambio en los bytes hace que la verificación falle. Es un error frecuente en frameworks que parsean el JSON automáticamente.
- Rechaza solicitudes con una marca de tiempo demasiado antigua. Las librerías oficiales de Stripe usan 5 minutos como tolerancia por defecto, y se recomienda sincronizar el reloj del servidor con NTP.
- Rota los secretos periódicamente. Stripe permite mantener el secreto anterior activo hasta 7 días durante el cambio.

El acceso de las personas a los paneles de los proveedores también debe protegerse con MFA, como explica la guía sobre [Zero Trust y autenticación multifactor](/blog/zero-trust-y-autenticacion-multifactor-guia-para-pymes). Un correo que pide cambiar datos de acceso o de pago puede ser un intento de [phishing](/blog/phishing-en-empresas-como-identificarlo-antes-de-que-sea-tarde), aunque parezca venir de un proveedor real.

## Arquitectura de una integración confiable

Un webhook puede llegar tarde, duplicado o fuera de orden. Stripe lo advierte de forma explícita: no garantiza que los eventos lleguen en el orden en que se generaron, y los endpoints pueden recibir el mismo evento más de una vez. Por eso, la recomendación de la plataforma es registrar los identificadores de evento ya procesados y no volver a procesar los que ya aparecen.

Una arquitectura razonable separa la recepción del procesamiento, como muestra la figura 2.

![Arquitectura de integración con endpoint, cola de eventos, procesador idempotente y reintentos](/images/blog/diagramas/api-y-webhooks-que-son-y-como-conectan-tus-sistemas-cola-reintentos.svg)

*Figura 2. El endpoint valida y responde rápido; una cola guarda los eventos; el procesador los aplica sin duplicar; los fallos vuelven a intentarse con espera creciente.*

Los componentes clave son estos:

- **Endpoint:** valida la firma, guarda el evento y responde 2xx de inmediato. Stripe pide responder rápido antes de cualquier lógica compleja, porque un tiempo de espera largo se interpreta como falla.
- **Cola:** almacena los eventos para procesarlos a su ritmo, incluso si llegan muchos al mismo tiempo, como al inicio de mes en un sistema de suscripciones.
- **Procesador idempotente:** aplica cada evento una sola vez, usando su identificador. Si el mismo evento llega de nuevo, no crea otro pago ni otra factura.
- **Reintentos:** cuando el sistema interno no responde, el evento vuelve a la cola con una espera que aumenta en cada intento. Stripe reintenta durante hasta tres días en modo productivo, con retroceso exponencial.
- **Registro de fallidos:** los eventos que agotan sus intentos se guardan para revisión manual. Nada debería desaparecer en silencio.

## iPaaS o desarrollo a medida: cuál conviene

Las plataformas de integración como servicio, conocidas como iPaaS, permiten construir flujos a partir de disparadores y acciones. Zapier, Make y n8n son ejemplos muy usados. n8n puede instalarse en servidores propios, lo que cambia el balance entre costo de licencia y esfuerzo operativo.

La siguiente tabla ayuda a decidir.

| Criterio | Plataforma iPaaS (Zapier, Make, n8n) | Integración a medida |
|---|---|---|
| Tiempo de puesta en marcha | Corto, con conectores preconstruidos | Mayor, porque se diseña y prueba desde cero |
| Flujos simples entre aplicaciones conocidas | Muy adecuado | Puede ser excesivo |
| Reglas de negocio complejas | Limitado: se resuelve con pasos adicionales | Adecuado: la lógica vive en tu código |
| Control de errores, reintentos y auditoría | Depende de la plataforma | Se define según tus necesidades |
| Datos sensibles o de alto volumen | Revisar dónde se procesan y almacenan | Control total de la arquitectura |
| Mantenimiento | Cambios de la plataforma y de los conectores | Responsabilidad del equipo o del proveedor |

Una regla práctica: si el flujo conecta dos o tres herramientas conocidas, sin reglas especiales, un iPaaS suele ser suficiente. Si la integración mueve dinero, facturas o datos personales, o si debe garantizar que nada se pierda, la integración a medida con cola y reintentos ofrece más control.

## Errores comunes

- **Usar polling cuando existe un webhook.** Consultar cada minuto consume recursos y retrasa la reacción.
- **Procesar el evento antes de responder.** Si el proceso tarda, el servicio externo puede marcarlo como fallido y reenviarlo.
- **Ignorar los duplicados.** Sin control por identificador, un mismo pago puede registrarse dos veces.
- **Dejar la clave de API en el código.** Basta con subir el repositorio a un lugar público para exponerla.
- **No revisar los límites de uso.** Un proceso masivo puede recibir errores 429 y perder datos si no reintenta con espera.
- **Confiar en que todo llegará en orden.** Diseñar el sistema para que las acciones no dependan del orden de los eventos evita muchos problemas.

## Preguntas frecuentes

### ¿Una API y un webhook sirven para lo mismo?

No exactamente. La API permite a tu sistema pedir o modificar datos cuando lo necesita. El webhook permite que otro sistema te avise cuando ocurre algo. En muchas integraciones se usan juntos.

### ¿Qué significa un código 200 en un webhook?

Indica que tu endpoint recibió el evento correctamente. Conviene responder 2xx solo después de validar la firma y guardar el evento, no después de procesarlo por completo.

### ¿Por qué un webhook puede llegar dos veces?

Porque los servicios reintentan la entrega cuando no reciben una respuesta válida a tiempo. Por eso el procesamiento debe ser idempotente y usar el identificador del evento para detectar duplicados.

### ¿Necesito un programador para conectar mis sistemas?

Para flujos simples entre aplicaciones con conectores, una plataforma iPaaS puede bastar, con apoyo de alguien que la configure. Para reglas propias, datos sensibles o garantías de entrega, conviene una integración diseñada por desarrolladores.

## Glosario rápido

**API:** conjunto de reglas y endpoints que permite a un sistema usar las funciones o datos de otro.

**Webhook:** notificación HTTP que un servicio envía a tu sistema cuando ocurre un evento.

**Endpoint:** dirección URL donde un sistema recibe solicitudes.

**Polling:** consulta periódica a un sistema para saber si hubo cambios.

**OAuth 2.0:** protocolo de autorización que permite acceso limitado a recursos sin compartir la contraseña.

**Idempotencia:** propiedad por la que repetir una operación con el mismo evento no produce efectos adicionales.

**iPaaS:** plataforma de integración como servicio, con flujos construidos a partir de disparadores y acciones.

**Rate limiting:** límite de solicitudes por periodo que un servicio impone para proteger su infraestructura.

## Fuentes y lecturas recomendadas

- Stripe, *Receive Stripe events in your webhook endpoint* (documentación oficial de webhooks): https://docs.stripe.com/webhooks
- Mozilla Developer Network (MDN), *Overview of HTTP*: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
- Mozilla Developer Network (MDN), *HTTP response status codes*: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- Internet Engineering Task Force (IETF), *RFC 6749: The OAuth 2.0 Authorization Framework*, 2012: https://www.rfc-editor.org/rfc/rfc6749.html
- GraphQL Foundation, *Learn GraphQL*: https://graphql.org/learn/
- Meta, *WhatsApp Business Platform: Webhooks overview*: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview
- Automation Atlas, *What Is iPaaS (Integration Platform as a Service)?*: https://automationatlas.io/answers/what-is-ipaas/

Si tus sistemas necesitan integrarse con pasarelas, facturación, CRM o mensajería, puedes [escribirnos a través de nuestro formulario de contacto](/contacto). Nuestro equipo de [desarrollo de plataformas](/servicios/plataformas) puede evaluar qué conexiones conviene construir a medida y cuáles resuelve mejor una herramienta existente.
