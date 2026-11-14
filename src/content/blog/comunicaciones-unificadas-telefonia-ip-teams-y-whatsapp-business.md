---
title: "Comunicaciones unificadas: telefonía IP, Teams y WhatsApp Business para empresas"
seoTitle: "Comunicaciones unificadas: telefonía IP, Teams y WhatsApp"
description: "La telefonía IP, Teams y WhatsApp Business pueden unificarse en una centralita en la nube. Te explicamos cómo funciona y qué revisar antes de migrar."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Telecomunicaciones"
cover: "/images/blog/comunicaciones-unificadas-telefonia-ip-teams-y-whatsapp-business-cover.webp"
coverAlt: "Dos personas con diademas de atención al cliente trabajando frente a sus equipos de cómputo"
author: "Christian Pumaccahua Cusihuaman"
readTime: "9 min de lectura"
draft: true
reviewed: false
---

## Respuesta corta

Las comunicaciones unificadas (UCaaS) reúnen llamadas, mensajes y reuniones en una sola plataforma, y la telefonía IP es la tecnología que transporta la voz por internet. Frente a la telefonía convencional, suele reducir el costo de las líneas físicas y facilita agregar usuarios, pero depende de una red estable y de priorizar el tráfico de voz. La integración con Microsoft Teams y con WhatsApp Business tiene requisitos concretos que cada plataforma documenta y que pueden cambiar.

## El problema: llamadas repartidas entre varios canales

Muchas pymes tienen sus llamadas repartidas entre un fijo en recepción, celulares personales de los vendedores, un número de WhatsApp que atiende una sola persona y una cuenta de Teams que nadie usa para llamar. El cliente no sabe a quién llamar, el equipo no ve el historial y la empresa no puede medir cuántas llamadas pierde.

Las comunicaciones unificadas buscan un sistema central que decida cómo entra cada llamada o mensaje, quién lo atiende y qué queda registrado.

## Qué son las comunicaciones unificadas

Las comunicaciones unificadas, conocidas como UCaaS (Unified Communications as a Service), son servicios en la nube que integran voz, mensajería, videollamadas y reuniones. Un usuario puede atender desde un teléfono IP, una aplicación en la computadora o su celular, usando el mismo número de la empresa.

En la práctica, el sistema vive en la nube del proveedor, los usuarios se agregan desde un panel de administración y las llamadas pueden conectarse con el CRM, de modo que el historial de un cliente queda en un solo lugar. Si quieres ver hacia dónde se mueven estas tecnologías, revisa [las tecnologías emergentes que conviene vigilar en 2027](/blog/tecnologias-emergentes-que-vigilar-en-2027-guia-para-empresas-peruanas).

## Telefonía IP: cómo viaja la voz

La telefonía IP, o VoIP (Voice over IP), convierte la voz en paquetes de datos que viajan por la red de la empresa y por internet. El protocolo SIP (Session Initiation Protocol) se encarga de establecer, modificar y terminar las llamadas. Tres piezas aparecen en casi todos los proyectos:

- **Troncal SIP:** la conexión entre tu centralita y el proveedor que entrega las llamadas hacia la red telefónica pública.
- **Softphone:** una aplicación de computadora o celular que funciona como teléfono corporativo.
- **Teléfono IP:** un equipo de escritorio conectado a la red de datos en lugar de a una línea de cobre.

En telefonía tradicional, el operador entrega la línea y se encarga de su funcionamiento. En telefonía IP, la calidad de la llamada depende de tu red local, de tu conexión a internet y del proveedor de la centralita.

## Tabla comparativa: telefonía convencional, IP y comunicaciones unificadas

| Aspecto | Telefonía convencional | Telefonía IP (VoIP) | Comunicaciones unificadas (UCaaS) |
|---|---|---|---|
| Medio de transporte | Líneas físicas del operador | Red de datos e internet | Red de datos e internet, con varios canales |
| Extensiones | Una línea física por extensión | Extensiones virtuales o teléfonos IP | Usuarios con teléfono, app o navegador |
| Alta de un nuevo usuario | Puede requerir instalación o visita técnica | Configuración en la centralita | Asignación desde un panel de administración |
| Canales que integra | Voz | Voz y funciones de la centralita | Voz, mensajes, reuniones y, según el caso, WhatsApp |
| Principal punto de falla | Línea del operador | Red local y conexión a internet | Red local, conexión y disponibilidad del proveedor cloud |

*Tabla 1. Comparación general de los tres modelos. Es una descripción cualitativa; no incluye tarifas porque los precios varían según proveedor, plan y volumen.*

![Arquitectura de comunicaciones unificadas con canales de usuario conectados a una centralita en la nube, el CRM y la red telefónica](/images/blog/diagramas/comunicaciones-unificadas-telefonia-ip-teams-y-whatsapp-business-arquitectura.svg)

*Figura 1. Arquitectura de comunicaciones unificadas: teléfonos, apps, Teams y WhatsApp se conectan a una centralita en la nube, que a su vez se integra con el CRM y con la red telefónica pública.*

## Microsoft Teams Phone: la telefonía dentro de Teams

Si tu empresa usa Microsoft 365, Teams Phone permite que la telefonía funcione dentro de la misma aplicación donde el equipo chatea y se reúne. Microsoft lo describe como un sistema de telefonía en la nube que reemplaza a las centralitas tradicionales para las llamadas de Teams.

Las llamadas entre usuarios de Teams funcionan de inmediato. Las llamadas a números externos, en cambio, necesitan una conexión a la red telefónica pública, que Microsoft indica que puede hacerse con planes de llamadas de Microsoft (Calling Plans), Operator Connect o Direct Routing. La disponibilidad depende del país, así que conviene confirmarla con un proveedor local antes de decidir.

## WhatsApp Business Platform: lo que permite hoy

WhatsApp puede formar parte de la estrategia en dos niveles, mensajería y llamadas, que tienen reglas distintas.

En **llamadas**, la documentación de Meta exige usar el número con la Cloud API (no con la aplicación WhatsApp Business), suscribir la aplicación al campo de webhook `calls`, salvo que se use SIP, y habilitar las funciones de llamadas en el número. También pide un límite diario de mensajería de al menos 2,000 destinatarios únicos.

Hay dos tipos de llamada. Las **iniciadas por el usuario** están disponibles donde existe la Cloud API. Las **iniciadas por la empresa** requieren permiso previo del cliente; sin él, la API devuelve el error 138006, y no están disponibles en Estados Unidos, Canadá, Egipto, Vietnam ni Nigeria. Meta además fija niveles de intentos por número, medidos en un periodo móvil de 24 horas. Video y compartir pantalla aparecen como funciones planeadas o en desarrollo, así que no conviene diseñar un proceso que dependa de ellas. SIP sí es compatible, con habilitación explícita.

En **mensajes**, Meta limita a cuántos números distintos puede escribir una empresa fuera de la ventana de atención al cliente, en un periodo móvil de 24 horas. Para subir ese límite, la empresa debe entregar mensajes con plantillas aprobadas y de buena calidad. Una campaña masiva no es lo mismo que una conversación de atención.

Estas reglas pueden cambiar. Revisa la documentación vigente en developers.facebook.com antes de comprometer un proceso comercial.

## Centralita virtual y enrutamiento por horario

Una centralita virtual recibe las llamadas del número de la empresa y decide a quién entregarlas. Su función más útil para una pyme es el **enrutamiento por horario**: dentro del horario de atención, la llamada suena en la cola de agentes; fuera de horario, pasa a un buzón de voz o a un mensaje automático.

![Flujo de una llamada entrante: si está dentro del horario suena la cola de agentes; si está fuera, pasa al buzón de voz](/images/blog/diagramas/comunicaciones-unificadas-telefonia-ip-teams-y-whatsapp-business-llamada-entrante.svg)

*Figura 2. Flujo de una llamada entrante con enrutamiento por horario. La regla puede definirse por sede, por número o por tipo de llamada.*

Así se evitan dos problemas frecuentes: llamadas que suenan sin nadie para atenderlas y clientes que no saben cuándo pueden comunicarse. Si el buzón genera un aviso por correo o por WhatsApp, el mensaje no se pierde aunque el equipo esté ocupado. La regla conviene revisarla cuando cambien los horarios o se abran nuevas sedes.

## Calidad de servicio: el ancho de banda no es todo

Muchas migraciones fallan por la red, no por la plataforma. Microsoft documenta que, para llamadas de audio uno a uno, los requisitos son de 10 kbps mínimo, 58 kbps recomendado y 76 kbps para el mejor rendimiento, en subida y bajada, por cada dispositivo de usuario. Son cifras por endpoint, y no incluyen el tráfico de otras aplicaciones que comparten la conexión.

El ancho de banda no basta. Microsoft explica que los problemas típicos de voz son el jitter (llegadas desiguales de los paquetes, que pueden cortar sílabas), la pérdida de paquetes y el retardo de ida y vuelta, que obliga a las personas a hablar encima unas de otras. Para evitarlo, la documentación recomienda calidad de servicio (QoS), que prioriza el tráfico en tiempo real frente a descargas.

| Elemento | Qué indica la documentación de Microsoft | Por qué importa |
|---|---|---|
| Audio uno a uno | 10/10 kbps mínimo, 58/58 recomendado, 76/76 óptimo (subida/bajada, por endpoint) | Define el ancho de banda mínimo por usuario en llamadas de voz |
| Video uno a uno | 150/150 kbps mínimo, 1,500/1,500 recomendado | Si el equipo usa video, el consumo sube de forma importante |
| Puertos UDP de medios | Preferencia por 3478-3481; en algunos entornos, 49152-53247 | Si estos puertos están bloqueados, el establecimiento de medios puede fallar |
| Marcado QoS para audio | DSCP 46 (EF) con puertos de origen 50,000–50,019 | Hace que la voz pase primero en routers y switches |
| VPN | Recomienda evitar la VPN para el tráfico en tiempo real o usar split tunnel | La VPN añade latencia y sobrecarga a la voz |

*Tabla 2. Requisitos técnicos según la documentación de Microsoft Learn. Las cifras de ancho de banda son por endpoint; para dimensionar cada sede, Microsoft ofrece la herramienta Network Planner en el Teams admin center.*

Si tu red ya presenta caídas o lentitud, revisa primero las [señales de que tu red necesita una auditoría](/blog/auditoria-red-empresarial-senales-de-alerta). El WiFi también cuenta: Microsoft advierte que las redes inalámbricas no siempre están diseñadas para tráfico en tiempo real, y recomienda planificar canales y ubicación de los puntos de acceso. La guía sobre [errores comunes en redes WiFi empresariales](/blog/wifi-empresarial-seguro-errores-comunes-que-exponen-tu-red) es un buen punto de partida.

## Numeración y regulación en el Perú

Según las referencias consultadas, la numeración telefónica se rige por el Plan Técnico Fundamental de Numeración, aprobado por la Resolución Suprema N° 022-2002-MTC y modificado en distintos momentos. La portabilidad numérica móvil, que permite conservar tu número al cambiar de operador, nace de la Ley N° 28999 y es obligatoria desde el 1 de enero de 2010, según el MTC.

No encontramos una norma pública específica y vigente sobre telefonía IP empresarial ni sobre la numeración de centralitas en la nube. Tampoco hay datos públicos verificados sobre el estado actual de la portabilidad en telefonía fija. Antes de contratar, pide por escrito al proveedor qué numeración puede asignar y cómo se realizaría una eventual portabilidad, y consulta el portal de OSIPTEL y las normas del MTC.

## Costos: qué pesa en la comparación

Comparar costos exige mirar más que la tarifa mensual. Pesan el licenciamiento por usuario, el plan de llamadas hacia la red pública, los equipos o aplicaciones, la instalación y el ancho de banda adicional que pueda requerir la red. Para una comparación de ahorro enfocada en la línea fija, revisa [VoIP frente a telefonía tradicional](/blog/voip-vs-telefonia-tradicional-cuanto-ahorra-tu-empresa).

No incluimos tarifas porque no encontramos fuentes públicas verificadas que sirvan de referencia para el Perú, y porque los precios dependen del proveedor, del plan y del volumen. Lo sensato es pedir cotizaciones con el mismo detalle: número de usuarios, sedes, minutos estimados hacia celulares, fijos e internacional, y si se requiere WhatsApp o integración con el CRM.

## Qué elegir según tu caso

| Situación de la empresa | Opción que suele encajar | Qué revisar primero |
|---|---|---|
| Pocas extensiones, una sola sede y llamadas sencillas | Telefonía IP con teléfonos o softphones | Ancho de banda, QoS en el router y respaldo de energía |
| Empresa que ya usa Microsoft 365 y trabaja en Teams | Teams Phone | Licencias y plan de llamadas externas (Calling Plans, Operator Connect o Direct Routing) |
| Atención a clientes por WhatsApp con volumen constante | Cloud API de WhatsApp Business conectada a la centralita o al CRM | Límites de mensajería, permisos de los clientes y plantillas |
| Varias sedes o personal que trabaja desde casa | Comunicaciones unificadas en la nube con enrutamiento centralizado | Split tunnel de la VPN, calidad de cada sede y reportes |

*Tabla 3. Orientación general para elegir según el caso. Es un punto de partida: cada empresa debe validar la opción con su red y sus procesos.*

## Errores comunes

- **Migrar sin medir la red.** Se contrata el servicio y luego aparecen cortes. Mide la conexión de cada sede antes de cambiar.
- **Tratar WhatsApp como una llamada más.** La API tiene requisitos de número, permisos y límites que deben diseñarse desde el inicio.
- **Olvidar la QoS.** Sin priorización, una descarga grande puede degradar todas las llamadas de la oficina.
- **Usar la VPN para toda la voz.** La calidad suele empeorar. Conviene una ruta directa para el tráfico de Teams o de la centralita, y si tu equipo trabaja desde casa, revisa las [redes para equipos remotos e híbridos](/blog/redes-para-equipos-remotos-e-hibridos-guia-empresas-peruanas).
- **Decidir solo por el precio por minuto.** El costo real incluye la red, el soporte y el tiempo que el equipo pierde cuando el sistema falla.

## Preguntas frecuentes

### ¿La telefonía IP reemplaza por completo a la línea fija?

Puede hacerlo en muchas empresas, pero algunas mantienen una línea de respaldo mientras validan la calidad de su red. La decisión depende de la infraestructura de cada sede.

### ¿Necesito una red nueva para usar telefonía IP?

No necesariamente, pero sí una red con ancho de banda suficiente, priorización de voz y estabilidad. Muchas veces el cambio consiste en ordenar la red existente.

### ¿Puedo atender WhatsApp Business desde la misma centralita?

En muchos casos sí, mediante la Cloud API integrada con la plataforma o con el CRM. Las llamadas tienen reglas propias de Meta, como activar las funciones de llamadas en el número y contar con permiso del cliente para las llamadas iniciadas por la empresa.

### ¿Teams Phone sirve si mis clientes llaman a un número fijo o celular?

Sí, pero las llamadas externas requieren conexión a la red telefónica pública, por ejemplo con Calling Plans, Operator Connect o Direct Routing. Confirma con el proveedor qué opción está disponible en tu país.

### ¿Qué debo revisar sobre numeración en el Perú?

Confirma por escrito qué numeración puede asignar el proveedor y en qué condiciones puedes conservar tu número actual. No encontramos una norma pública específica sobre telefonía IP empresarial, así que consulta OSIPTEL y el MTC.

## Glosario rápido

**UCaaS:** comunicaciones unificadas como servicio en la nube, que integran voz, mensajes y reuniones.

**VoIP:** voz sobre protocolo de internet; transporta las llamadas como paquetes de datos.

**SIP:** protocolo que establece, modifica y termina las llamadas de voz.

**Troncal SIP:** conexión entre la centralita y el proveedor que entrega las llamadas a la red telefónica pública.

**Softphone:** aplicación de computadora o celular que funciona como teléfono.

**PSTN:** red telefónica pública conmutada, la red de fijos y celulares tradicional.

**Jitter:** variación en la llegada de los paquetes de voz; puede causar cortes o palabras perdidas.

**QoS:** calidad de servicio; prioriza el tráfico sensible al retardo, como la voz.

## Fuentes y lecturas recomendadas

- Microsoft Learn, "Prepare your organization's network for Teams" (Microsoft, documentación actualizada en 2026): https://learn.microsoft.com/en-us/microsoftteams/prepare-network
- Microsoft Learn, "Implement Quality of Service in Microsoft Teams" (Microsoft): https://learn.microsoft.com/en-us/microsoftteams/qos-in-teams
- Microsoft, página de Teams Phone (Microsoft, consultada en noviembre de 2026): https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone
- Meta for Developers, "Cloud API Calling" (Meta, documentación de WhatsApp Business Platform): https://developers.facebook.com/documentation/business-messaging/whatsapp/calling
- Meta for Developers, "Business-initiated calls" (Meta): https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls
- Meta for Developers, "Messaging limits" (Meta): https://developers.facebook.com/docs/whatsapp/messaging-limits
- OSIPTEL, reglamento de portabilidad numérica móvil, DS 040-2007-MTC (Ley N° 28999): https://www.osiptel.gob.pe/media/u4gnc1yb/ds040-2007-mtc-ley-28999-osiptel.pdf

Si quieres evaluar si tu red y tus procesos están listos para telefonía IP, Teams o WhatsApp, revisa nuestros [servicios de telecomunicaciones](/servicios/telecomunicaciones) o [escríbenos desde la página de contacto](/contacto).
