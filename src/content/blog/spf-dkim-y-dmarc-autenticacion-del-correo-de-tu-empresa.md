---
title: "SPF, DKIM y DMARC: autenticación del correo de tu empresa"
seoTitle: "SPF DKIM DMARC: guía para tu empresa"
description: "Qué son SPF DKIM DMARC, cómo publicarlos en tu DNS y cómo evitar que tus correos caigan en spam o sean suplantados. Guía práctica para pymes."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Ciberseguridad"
cover: "/images/blog/spf-dkim-y-dmarc-autenticacion-del-correo-de-tu-empresa-cover.webp"
coverAlt: "Ilustración de un sobre con un sello de verificación y una llave, símbolo de autenticación del correo"
author: "Christian Pumaccahua Cusihuaman"
readTime: "9 min de lectura"
draft: false
reviewed: true
---

## Respuesta corta

SPF DKIM DMARC son tres registros que se publican en el DNS de tu dominio para que los servidores que reciben tu correo puedan comprobar que el mensaje realmente sale de tu empresa. SPF indica qué servidores pueden enviar en tu nombre, DKIM firma cada mensaje con una clave y DMARC decide qué hacer cuando esas comprobaciones fallan. Juntos reducen la suplantación de tu dominio y ayudan a que tus correos lleguen a la bandeja de entrada.

## Puntos clave

- SPF, DKIM y DMARC son registros DNS; no se instalan en el correo ni en el servidor de la empresa.
- Resuelven dos problemas: que alguien suplante tu dominio y que tus correos legítimos terminen en spam.
- Google exige SPF o DKIM a todos los remitentes, y SPF, DKIM y DMARC a quien envía más de 5.000 correos diarios a Gmail.
- DMARC debe empezar en `p=none` para observar sin bloquear y luego endurecerse por fases.
- Un error en el registro SPF, como superar el límite de consultas DNS, invalida la comprobación completa.

## ¿Qué son SPF, DKIM y DMARC?

SPF, DKIM y DMARC son tres mecanismos de autenticación del correo electrónico que describen, desde el DNS, qué mensajes son legítimos para un dominio. SPF es un registro que lista los servidores autorizados a enviar correo en nombre del dominio; DKIM es una firma criptográfica que viaja dentro del mensaje; y DMARC es la política que indica qué hacer cuando un correo no pasa estas verificaciones.

Ninguno de los tres protege por sí solo. Un correo puede pasar SPF y, aun así, ser falso si el dominio visible en el remitente no coincide con el dominio verificado. Por eso DMARC existe: exige esa coincidencia, que se conoce como alineación.

La siguiente figura resume lo que ocurre con un correo entrante cuando el servidor de destino aplica estas tres comprobaciones.

![Diagrama de flujo: un correo entrante pasa por SPF, DKIM y DMARC, y según la política del dominio se entrega, se envía a spam o se rechaza](/images/blog/diagramas/spf-dkim-y-dmarc-autenticacion-del-correo-de-tu-empresa-flujo.svg)

*Figura 1. Verificación de un correo entrante: SPF, DKIM y DMARC; el resultado final depende de la política `p=` publicada por el dominio.*

## Qué problema resuelven

La autenticación de correo nace de un problema de origen: el correo electrónico no incluyó un mecanismo para verificar al remitente. Cualquier servidor puede afirmar que un mensaje viene de `gerencia@tuempresa.com`, y el destinatario solo ve el nombre que aparece en pantalla. Esa debilidad es la base del fraude por suplantación, que suele terminar en pagos a cuentas falsas o en el robo de credenciales.

Hay un segundo problema, menos visible: la entrega. Los proveedores de correo usan estas señales para decidir si un mensaje es confiable. Si tu empresa envía facturas, cotizaciones o boletines desde servidores que no están declarados en el DNS, es probable que esos correos caigan en spam aunque sean legítimos. Por eso una misma configuración sirve a la seguridad y a la reputación de tu dominio.

Antes de revisar estos registros conviene entender el riesgo completo. La suplantación es uno de los vectores más frecuentes de phishing en empresas, como se explica en [la guía sobre phishing en empresas y cómo identificarlo a tiempo](/blog/phishing-en-empresas-como-identificarlo-antes-de-que-sea-tarde).

## Cómo se publican SPF, DKIM y DMARC en el DNS

Los tres registros se crean en el panel donde administras el dominio (el proveedor de hosting, el registrador o el DNS de Cloudflare, por ejemplo). Los valores siguientes son genéricos y usan el dominio de ejemplo `ejemplo.com`; los tuyos dependen de los servicios que envían correo.

**SPF** es un registro TXT en la raíz del dominio:

```
ejemplo.com.   TXT   "v=spf1 ip4:192.0.2.10 include:spf.servicio.ejemplo.net -all"
```

Aquí `ip4` autoriza un servidor propio, `include` delega la lista a un proveedor externo (correo corporativo, marketing o facturación) y `-all` indica que cualquier otro origen no está autorizado. Muchas empresas empiezan con `~all`, que marca los demás orígenes como sospechosos en lugar de rechazarlos.

**DKIM** es un registro TXT bajo un selector, que es un nombre que elige tu proveedor de correo:

```
s2026._domainkey.ejemplo.com.   TXT   "v=DKIM1; k=rsa; p=CLAVE_PUBLICA"
```

Algunos proveedores piden un CNAME en lugar de pegar la clave, lo que significa que el DNS apunta a una clave que ellos administran. Sigue exactamente las instrucciones de tu proveedor. Google indica que las claves DKIM deben tener al menos 1024 bits y recomienda 2048 bits si el proveedor lo permite.

**DMARC** es un registro TXT en el subdominio `_dmarc`:

```
_dmarc.ejemplo.com.   TXT   "v=DMARC1; p=none; rua=mailto:informes@ejemplo.com"
```

La etiqueta `p` define la política, `rua` indica a dónde llegan los informes agregados que los proveedores de correo envían sobre tu dominio.

## Las tres políticas de DMARC

El estándar DMARC (RFC 7489) define tres valores para la etiqueta `p`. La diferencia entre ellos es lo que ocurre con un correo que no pasa la verificación:

| Política | Qué hace con el correo que falla | Cuándo usarla |
|---|---|---|
| `p=none` | No bloquea; solo genera informes | Al inicio, para descubrir todos los servicios que envían en tu nombre |
| `p=quarantine` | Lo trata como sospechoso, normalmente lo envía a spam | Cuando los informes no muestran remitentes legítimos fallando |
| `p=reject` | Lo rechaza | Cuando ya conoces y controlas todos tus orígenes de envío |

Google confirma que la política mínima exigida a remitentes masivos es `p=none`, pero recomienda pasar a una política más estricta cuando sea posible.

## Despliegue gradual con informes

El error más común es publicar `p=reject` el mismo día. Si una herramienta de facturación, la plataforma de encuestas o el sistema de citas no estaba configurado, sus correos dejarán de llegar a los clientes sin que nadie lo note. El despliegue correcto avanza por fases y usa los informes `rua` como guía.

| Fase | Política | Acción principal | Criterio para avanzar |
|---|---|---|---|
| 1. Observar | `p=none` | Revisar informes y listar todos los servicios que envían correo | Todos los remitentes legítimos aparecen en los informes |
| 2. Corregir | `p=none` | Añadir a SPF y DKIM los servicios faltantes y alinear los dominios | Los remitentes legítimos pasan SPF o DKIM alineado |
| 3. Cuarentena | `p=quarantine` | Vigilar quejas de clientes y correos que no llegan | No hay correos legítimos afectados durante un periodo de observación |
| 4. Rechazo | `p=reject` | Mantener la política y revisar informes de forma periódica | Operación estable sin excepciones pendientes |

La duración de cada fase depende del volumen de correo y de cuántos sistemas envían en tu nombre. No hay un plazo universal, así que la decisión debe basarse en los informes y no en el calendario.

![Línea de tiempo con cuatro fases del despliegue de DMARC: monitorear con p=none, corregir remitentes, cuarentena y rechazo](/images/blog/diagramas/spf-dkim-y-dmarc-autenticacion-del-correo-de-tu-empresa-despliegue.svg)

*Figura 2. Despliegue gradual de DMARC: se endurece la política solo después de corregir a los remitentes legítimos.*

## Requisitos de Google y Yahoo para remitentes masivos

Desde 2024, Google y Yahoo exigen requisitos de autenticación a quienes envían volúmenes altos de correo. La tabla resume los datos clave con su fuente:

| Dato | Valor | Fuente |
|---|---|---|
| Umbral de remitente masivo en Gmail | Más de 5.000 correos diarios | Google, Requisitos para remitentes de correo |
| Autenticación exigida a remitentes masivos | SPF, DKIM y DMARC | Google, Requisitos para remitentes de correo |
| Política DMARC mínima | `p=none` | Google y Yahoo |
| Tasa de spam recomendada | Por debajo de 0,30 % | Google, Postmaster Tools |
| Límite de consultas DNS en SPF | 10 consultas | IETF, RFC 7208, sección 4.6.4 |
| Clave DKIM mínima | 1024 bits (2048 recomendado) | Google, Requisitos para remitentes de correo |

En la documentación de Google, los requisitos se dividen en dos grupos:

- **Todos los remitentes** que envían a Gmail deben usar SPF o DKIM, y mantener una tasa de spam baja. Google indica que debe mantenerse por debajo de 0,30 % en Postmaster Tools.
- **Remitentes masivos**, es decir, quienes envían más de 5.000 correos al día a cuentas de Gmail, deben tener SPF, DKIM y DMARC.
- Los correos de marketing o suscripciones deben permitir darse de baja con un clic, mediante las cabeceras `List-Unsubscribe` y `List-Unsubscribe-Post`.

Yahoo, en su guía para remitentes masivos, pide implementar SPF y DKIM, y publicar una política DMARC con al menos `p=none`, con alineación relajada aceptada. Si tu empresa envía campañas o boletines, revisa ambas guías antes de cada cambio, porque los requisitos se actualizan.

## Cómo comprobarlo

Antes de dar por terminada la configuración, verifica tres cosas: que los registros existan, que contengan los valores correctos y que un correo real pase las comprobaciones. Para esto hay herramientas gratuitas:

- **Google Admin Toolbox, herramienta Messageheader:** pegas las cabeceras completas de un correo enviado desde tu dominio y revisa los resultados de SPF, DKIM y DMARC. Google indica que para pasar DMARC el mensaje debe pasar SPF o DKIM con alineación.
- **Google Admin Toolbox, herramienta Check MX:** consulta los registros DNS de SPF, DKIM y DMARC de tu dominio.
- **MXToolbox** y similares: útiles para consultar registros y detectar errores de sintaxis, aunque son servicios de terceros.

Como método práctico, envía un correo de prueba desde cada servicio que usas (correo, facturación, formularios) a una cuenta de Gmail y revisa la fuente original del mensaje. Si ahí aparecen `spf=pass`, `dkim=pass` y `dmarc=pass`, la configuración funciona para ese servicio.

## Errores comunes

- **Superar 10 consultas DNS en SPF.** El RFC 7208 limita a 10 los mecanismos que generan consultas DNS durante la evaluación; si se excede, el resultado es `permerror` y la verificación falla. Suele pasar al encadenar muchos `include`.
- **Olvidar un servicio de terceros.** El CRM, la plataforma de marketing o el sistema de facturación que envía en tu nombre debe estar en SPF o firmar con DKIM. Cada nuevo proveedor exige revisar el registro.
- **Tener dos registros SPF.** Un dominio debe tener un único registro SPF. Dos registros producen un error y la verificación falla.
- **Firmar con DKIM un dominio distinto.** Si el mensaje está firmado por un dominio que no coincide con el visible en el remitente, DMARC no se cumple aunque DKIM sea válido.
- **Publicar `p=reject` sin observar antes.** Es el error con mayor impacto: los correos legítimos desaparecen sin aviso.
- **Cambiar la clave DKIM sin actualizar el DNS.** Si el proveedor rota la clave y el selector no se actualiza, todos los mensajes fallan la firma.

## Preguntas frecuentes

### ¿Cuánto cuesta implementar SPF, DKIM y DMARC?

Los tres registros se configuran en el DNS sin costo de licencia, pero el trabajo real está en identificar los servicios que envían correo y mantener los registros actualizados. El costo depende de quién administra el dominio y de cuántas herramientas envían en nombre de la empresa. No hay un precio público verificado que aplique a todas las empresas.

### ¿Qué diferencia hay entre SPF y DKIM?

SPF verifica la dirección del servidor que envía el correo, comparándola con una lista publicada en el DNS. DKIM verifica una firma criptográfica incluida en el mensaje, que demuestra que no fue alterado. Cada uno tiene debilidades propias, y por eso DMARC pide que al menos uno esté alineado con el dominio visible.

### ¿Cómo se configura DMARC sin afectar el correo de la empresa?

Empieza con `p=none` y un correo `rua` que reciba los informes. Durante algunas semanas, revisa qué servicios aparecen, corrige los que fallan y solo después pasa a `quarantine`. Esta secuencia evita que los correos legítimos se bloqueen por una configuración incompleta.

### ¿Por qué mis correos llegan a spam aunque tenga SPF?

Porque SPF por sí solo no basta. Un correo puede pasar SPF y aun así no cumplir DMARC si el dominio del remitente visible no coincide con el dominio verificado. Revisa las cabeceras del mensaje y confirma que SPF o DKIM estén alineados. Otras causas comunes son una tasa alta de quejas por spam y la falta de un enlace para darse de baja en los correos masivos.

### ¿Cómo sé si mi dominio está siendo suplantado?

Los informes `rua` de DMARC muestran los orígenes que envían correo con tu dominio, incluidos los que no reconoces. Si aparecen remitentes desconocidos fallando la verificación, es una señal de suplantación o de un servicio mal configurado. Investiga cada origen antes de cambiar la política a `reject`.

### ¿Es suficiente con SPF, DKIM y DMARC para evitar el fraude por correo?

No es suficiente por sí solo. Estos registros protegen la identidad del dominio, pero no evitan que un empleado entregue sus credenciales en una página falsa. Conviene complementarlos con capacitación, autenticación multifactor y procesos de verificación para pagos, como se describe en [la guía de zero trust y autenticación multifactor para pymes](/blog/zero-trust-y-autenticacion-multifactor-guia-para-pymes).

## Glosario rápido

**SPF (Sender Policy Framework):** registro DNS que lista los servidores autorizados a enviar correo en nombre de un dominio.

**DKIM (DomainKeys Identified Mail):** firma criptográfica que se añade al mensaje y se verifica con una clave publicada en el DNS.

**DMARC (Domain-based Message Authentication, Reporting and Conformance):** política que indica qué hacer con los correos que fallan SPF o DKIM alineados con el dominio visible.

**Alineación:** coincidencia entre el dominio visible del remitente y el dominio verificado por SPF o DKIM.

**Selector:** nombre que identifica una clave DKIM dentro del DNS, como `s2026._domainkey`.

**Registro TXT:** tipo de registro DNS que guarda texto; SPF, DKIM y DMARC se publican en este formato.

**Informe rua:** resumen que envían los proveedores de correo a la dirección indicada en DMARC, con el detalle de los mensajes que dicen recibir de tu dominio.

**Remitente masivo:** organización que envía grandes volúmenes de correo; Google lo define como quien envía más de 5.000 correos diarios a Gmail.

## Lecturas relacionadas

- [Plan de respuesta a incidentes de ciberseguridad en 7 pasos](/blog/plan-de-respuesta-a-incidentes-de-ciberseguridad-en-7-pasos)
- [Empresas de ciberseguridad: cómo elegir un proveedor de seguridad informática](/blog/empresas-de-ciberseguridad-como-elegir-un-proveedor-de-seguridad-informatica)
- [Buenas prácticas de ciberseguridad para empresas](/blog/buenas-practicas-ciberseguridad-empresas)

## Fuentes y lecturas recomendadas

- Internet Engineering Task Force (IETF), RFC 7208: *Sender Policy Framework (SPF)*, abril de 2014. https://www.rfc-editor.org/rfc/rfc7208
- IETF, RFC 6376: *DomainKeys Identified Mail (DKIM) Signatures*, septiembre de 2011. https://www.rfc-editor.org/rfc/rfc6376
- IETF, RFC 7489: *Domain-based Message Authentication, Reporting, and Conformance (DMARC)*, marzo de 2015. https://www.rfc-editor.org/rfc/rfc7489
- Google, Centro de ayuda de Google Workspace: *Requisitos para remitentes de correo* (requisitos de SPF, DKIM, DMARC, tasa de spam y cancelación de suscripción). https://support.google.com/a/answer/81126
- Google, Centro de ayuda de Google Workspace: *Solucionar problemas de DMARC*. https://support.google.com/a/answer/10032578
- Yahoo, Sender Hub: *Best practices* (requisitos para remitentes masivos). https://senders.yahooinc.com/best-practices/

*Última revisión: 14 de noviembre de 2026.*

---

Si tu empresa envía facturas, cotizaciones o campañas desde varios sistemas y no sabes qué registros faltan, en Universoft podemos revisar tu configuración de correo como parte de una evaluación de seguridad. Escríbenos desde [nuestra página de contacto](/contacto) o revisa nuestro [servicio de ciberseguridad](/servicios/ciberseguridad).
