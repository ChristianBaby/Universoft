---
title: "Plan de respuesta a incidentes de ciberseguridad en 7 pasos"
seoTitle: "Plan de respuesta a incidentes en 7 pasos"
description: "Cómo armar un plan de respuesta a incidentes de ciberseguridad en 7 pasos para tu pyme: roles, primeras 24 horas, simulacros y plazos de aviso en Perú."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Ciberseguridad"
cover: "/images/blog/plan-de-respuesta-a-incidentes-de-ciberseguridad-en-7-pasos-cover.webp"
coverAlt: "Ilustración de un ciclo de siete nodos alrededor de una baliza de alerta, símbolo de respuesta a incidentes"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: true
reviewed: false
---

## Respuesta corta

Un plan de respuesta a incidentes es el procedimiento escrito que dice qué hacer, quién lo hace y en qué orden cuando ocurre un ciberataque o una fuga de datos. La guía del NIST *SP 800-61 Rev. 3* organiza las recomendaciones de respuesta a incidentes dentro del Marco de Ciberseguridad NIST CSF 2.0. Para una pyme, un plan útil cabe en pocas páginas, define roles y contactos antes de que haya un incidente y se prueba con simulacros.

## Puntos clave

- Un plan de respuesta a incidentes se escribe antes del ataque; improvisarlo durante el incidente suele costar más tiempo.
- Los siete pasos son preparar, detectar, contener, erradicar, recuperar, comunicar y aprender.
- Cada rol debe tener un responsable y un suplente con tareas concretas.
- Las acciones cambian según el tipo de incidente: phishing, ransomware o fuga de datos.
- En Perú, la notificación a la Autoridad Nacional de Protección de Datos Personales puede exigir un plazo de hasta 48 horas.
- Un simulacro al año revela qué pasos no funcionan antes de que haga falta.

## ¿Qué es un plan de respuesta a incidentes de ciberseguridad?

Un plan de respuesta a incidentes es un documento operativo que establece los pasos, responsables, contactos y criterios de decisión para manejar un evento de seguridad que afecta a la empresa. No es una política general de seguridad: es una guía de acción que se usa en el momento de la presión, cuando el equipo tiene menos tiempo y más dudas.

Un incidente de ciberseguridad es cualquier evento que compromete la confidencialidad, integridad o disponibilidad de los sistemas o de la información. Un correo de phishing que obtiene una contraseña, un equipo cifrado por ransomware y un archivo de clientes enviado por error son incidentes, aunque su gravedad sea distinta.

## Por qué una pyme necesita un plan antes del incidente

Muchas pymes no tienen un equipo de seguridad dedicado. Cuando ocurre un ataque, la persona que contesta el teléfono suele ser el gerente, el administrador de sistemas o un proveedor externo, y pocas veces saben a quién avisar o si deben apagar equipos. Esa improvisación puede hacer que se borren registros útiles, que el ataque se propague por la red o que se pierdan plazos legales.

El plan no elimina el riesgo, pero reduce el daño y ordena las decisiones.

## El ciclo de respuesta: NIST y CISA

El NIST publicó la versión final de su guía *SP 800-61 Rev. 3*, en abril de 2025, que reemplaza a la revisión de 2012. Esta versión organiza las recomendaciones de respuesta a incidentes según las funciones del Marco de Ciberseguridad NIST CSF 2.0, y forma parte de la gestión del riesgo de ciberseguridad de la organización, no solo del equipo técnico.

La Agencia de Ciberseguridad y Seguridad de Infraestructura de Estados Unidos (CISA) complementa esta visión con guías prácticas, como su guía #StopRansomware, que indica acciones concretas durante un ataque de ransomware. El siguiente diagrama resume el ciclo que usa este artículo.

![Diagrama circular con siete pasos de respuesta a incidentes: preparar, detectar, contener, erradicar, recuperar, comunicar y aprender](/images/blog/diagramas/plan-de-respuesta-a-incidentes-de-ciberseguridad-en-7-pasos-ciclo.svg)

*Figura 1. Ciclo de respuesta a incidentes en siete pasos. Lo aprendido en la fase final alimenta la preparación del siguiente ciclo.*

## Los 7 pasos de respuesta para una pyme

Los siete pasos son una forma práctica de ordenar las recomendaciones del NIST y de CISA a la escala de una pequeña o mediana empresa. No son una secuencia oficial del NIST, sino una adaptación para pymes. No requieren un equipo grande, pero sí asignar responsables.

### 1. Preparar

Antes de cualquier incidente, la empresa define a sus responsables, sus contactos de emergencia, las copias de respaldo y los registros que deben conservarse. También decide qué sistemas son críticos, porque esa lista determina el orden de la recuperación. Un inventario simple de equipos, cuentas administrativas y proveedores con acceso ya es un avance importante.

### 2. Detectar

La detección depende de tener alertas y de que alguien las mire. Los indicios más comunes son un inicio de sesión desde una ubicación inusual, archivos con extensiones extrañas, un correo de cliente que dice haber recibido algo inesperado o un sistema que se vuelve lento sin razón aparente. Todo aviso debe registrarse con fecha y hora, aunque resulte ser falsa alarma.

### 3. Contener

Contener significa limitar el daño sin destruir la evidencia. Puede implicar desconectar un equipo de la red, desactivar una cuenta comprometida o bloquear un dominio malicioso. CISA recomienda aislar los sistemas afectados de forma coordinada y usar canales fuera de la red comprometida, como el teléfono, para que el atacante no reciba la alerta.

### 4. Erradicar

Erradicar es eliminar la causa: el malware, la cuenta vulnerada o la puerta de entrada. Antes de dar por terminada esta fase, conviene verificar que no queden accesos secundarios, cambiar credenciales compartidas y revisar si el mismo atacante tiene presencia en otros equipos.

### 5. Recuperar

La recuperación restablece los servicios de forma ordenada. CISA indica restaurar los datos desde respaldos sin conexión y cifrados, y reconectar los sistemas a medida que se verifica que están limpios. Prioriza los servicios críticos y evita volver a conectar equipos que aún no se han revisado.

### 6. Comunicar

La comunicación cubre a los empleados, los clientes, los proveedores y las autoridades que correspondan. Debe haber un vocero, mensajes preaprobados y un registro de lo que se informó y cuándo. Esta fase también incluye las obligaciones legales, que se explican más adelante.

### 7. Aprender

Al cerrar el incidente, el equipo revisa qué pasó, qué funcionó y qué debe cambiar. El resultado debe ser una lista de mejoras con responsables y fechas, que actualiza el plan. Si la revisión no produce cambios, probablemente el incidente no se analizó a fondo.

## Roles y responsabilidades

Cada rol necesita una persona titular, una suplente y un contacto de emergencia. En una pyme, una misma persona puede cubrir varios roles, pero conviene que las tareas queden escritas.

| Rol | Responsable de | Tarea principal |
|---|---|---|
| Coordinador del incidente | Dirigir la respuesta | Declarar el incidente, tomar decisiones y llevar la bitácora |
| Responsable técnico | Contención y recuperación | Aislar equipos, preservar evidencia y restaurar servicios |
| Responsable legal o de cumplimiento | Obligaciones de aviso | Evaluar plazos de notificación y textos oficiales |
| Vocero | Comunicación externa | Informar a clientes y medios con mensajes aprobados |
| Responsable de personas | Comunicación interna | Avisar al personal y dar instrucciones claras |
| Proveedor externo | Apoyo especializado | Análisis forense y recuperación, según contrato |

## Qué documentar

La bitácora del incidente es tan importante como las acciones técnicas. Debe registrar la hora de detección, quién la reportó, qué sistemas se afectaron, qué decisiones se tomaron y quién las aprobó. También conviene conservar capturas de pantalla, registros del sistema y copias de correos relevantes, sin modificarlos. Si el caso termina en una denuncia o en una investigación, esa evidencia determina la calidad de la respuesta.

## Obligaciones de aviso en Perú

En Perú, la Ley 29733, de Protección de Datos Personales, y su reglamento aprobado por el Decreto Supremo 016-2024-JUS obligan a notificar ciertos incidentes de seguridad. El reglamento entró en vigencia el 31 de marzo de 2025, según la nota de El Peruano.

Según esa nota, la notificación debe hacerse a la Autoridad Nacional de Protección de Datos Personales (ANPD) cuando el incidente afecta a un gran número de personas o implica datos sensibles, y el plazo es de máximo 48 horas desde que la empresa tiene conocimiento del incidente.

| Dato | Qué establece | Fuente |
|---|---|---|
| Norma | Reglamento de la Ley 29733, DS 016-2024-JUS | El Peruano, nota del 27 de marzo de 2025 |
| Entrada en vigor | 31 de marzo de 2025 | El Peruano |
| Destinatario | Autoridad Nacional de Protección de Datos Personales (ANPD) | El Peruano |
| Supuestos | Incidentes que afectan a un gran número de personas o datos sensibles | El Peruano |
| Plazo | Máximo 48 horas desde que se tiene conocimiento | El Peruano |

No pudimos abrir el texto completo del decreto, así que conviene verificar los plazos y los destinatarios en su versión oficial. Otras obligaciones, como avisar a los titulares de los datos o a otras entidades, no las verificamos en fuentes primarias. Antes de notificar, consulta con un abogado especializado en protección de datos; esta guía no reemplaza ese asesoramiento.

## Acciones según el tipo de incidente

Cada tipo de incidente exige una secuencia diferente. La tabla resume las primeras acciones; el detalle técnico debe acordarse con el proveedor de sistemas.

| Tipo de incidente | Primeras acciones | Qué evitar |
|---|---|---|
| Phishing | Desactivar la cuenta comprometida, cambiar la contraseña, revisar reglas de reenvío y avisar a quienes recibieron el correo | Hacer clic en el enlace o responder al remitente |
| Ransomware | Aislar los equipos afectados, conservar evidencia y restaurar desde respaldos sin conexión | Apagar equipos sin registrar lo ocurrido o restaurar sobre sistemas no revisados |
| Fuga de datos | Identificar qué datos salieron, cerrar el acceso, evaluar el aviso legal y documentar cada paso | Borrar registros, minimizar el alcance antes de conocerlo o comunicar sin validar hechos |

Sobre el ransomware, la guía de CISA recomienda preservar evidencia como una imagen del sistema y una captura de memoria de una muestra de equipos afectados. Tampoco indica si conviene pagar el rescate; sí sugiere consultar a las autoridades por posibles descifradores disponibles. Para más detalle sobre este caso, revisa [la guía sobre ransomware en Perú y cómo proteger a tu empresa](/blog/ransomware-en-peru-como-proteger-tu-empresa). Como la restauración depende de tener copias fuera de la red, también conviene revisar [la estrategia de backup empresarial](/blog/backup-empresarial-estrategia-para-no-perder-tu-informacion).

## Lista de verificación de las primeras 24 horas

Las primeras horas son las más críticas. Esta lista sirve como guía inicial y debe adaptarse al tamaño de la empresa.

- Registrar la hora de detección, quién la reportó y qué se observó.
- Activar al coordinador del incidente y convocar a los responsables.
- Aislar los sistemas afectados sin apagarlos si todavía hay evidencia útil en memoria.
- Desactivar las cuentas comprometidas y cambiar las credenciales compartidas.
- Preservar registros, correos y capturas antes de modificar algo.
- Confirmar qué datos o sistemas están involucrados.
- Consultar con el proveedor de sistemas y, si corresponde, con el asesor legal.
- Revisar los plazos de notificación aplicables.
- Preparar un mensaje inicial aprobado para el personal y, si es necesario, para clientes.
- Abrir la bitácora oficial y registrar cada decisión con su hora.

El siguiente diagrama muestra cuatro hitos orientativos dentro de esas 24 horas.

![Línea de tiempo con cuatro hitos en las primeras 24 horas: detectar y registrar, contener y avisar, evaluar el alcance y preparar la comunicación](/images/blog/diagramas/plan-de-respuesta-a-incidentes-de-ciberseguridad-en-7-pasos-linea-24h.svg)

*Figura 2. Hitos orientativos de las primeras 24 horas de un incidente. Los tiempos deben ajustarse a la realidad de cada empresa.*

## Simulacros: cómo probar el plan

Un plan que nunca se practicó falla en el primer contacto con la realidad. Si el escenario parte de una cuenta comprometida, el simulacro también debe revisar la autenticación de los accesos, como se explica en [la guía de zero trust y autenticación multifactor para pymes](/blog/zero-trust-y-autenticacion-multifactor-guia-para-pymes). Un simulacro sencillo puede ser una mesa de trabajo de una hora: el coordinador plantea un escenario, por ejemplo un correo de phishing que obtuvo una contraseña de administrador, y cada rol explica qué haría con sus herramientas. Anota los pasos que no se pueden cumplir, porque esas brechas son las mejoras más valiosas.

Conviene repetir el simulacro al menos una vez al año y después de cambios importantes, como un nuevo proveedor de sistemas o una migración a la nube. Si necesitas apoyo para diseñar estas pruebas, puedes empezar por el [análisis de vulnerabilidades y pruebas de seguridad](/servicios/ciberseguridad).

## Errores comunes

- **Esperar a tener un ataque para escribir el plan.** Sin plan previo, las decisiones se toman con prisa y sin información.
- **Apagar los equipos sin registrar nada.** Se pierde evidencia que ayuda a entender el alcance y, en algunos casos, a denunciar.
- **Restaurar copias sin verificar.** Un respaldo puede contener el mismo malware si se hizo después de la infección o si está conectado a la red.
- **No tener contactos fuera de la red.** Si el correo corporativo está comprometido, el plan debe incluir teléfonos y canales alternativos.
- **Olvidar los plazos legales.** Un aviso tardío puede empeorar la situación aunque la contención haya sido correcta.
- **Comunicar antes de validar.** Un mensaje incorrecto a clientes genera daño adicional y complica la investigación.

## Preguntas frecuentes

### ¿Qué es un plan de respuesta a incidentes?

Es un documento que define los pasos, responsables y contactos para actuar ante un incidente de ciberseguridad. Se escribe antes del evento para que el equipo sepa qué hacer en las primeras horas.

### ¿Cuánto tiempo toma crear un plan para una pyme?

Depende del tamaño de la empresa y de cuántos sistemas tenga. Un primer borrador puede prepararse en pocas sesiones de trabajo, pero debe revisarse con los responsables técnicos y legales. No hay un plazo público verificado que aplique a todas las empresas.

### ¿Cuándo debo avisar a mis clientes de una fuga de datos?

Depende de qué datos se vieron afectados y de las obligaciones aplicables. En Perú, la notificación a la ANPD tiene un plazo de hasta 48 horas en los supuestos previstos en el reglamento. Para decidir sobre clientes y otras entidades, consulta con un abogado especializado.

### ¿Qué hago si sospecho que me hackearon?

Aísla los equipos sospechosos sin apagarlos si puedes, cambia las contraseñas desde otro dispositivo limpio, registra lo que observaste y avisa al coordinador del incidente. Evita borrar archivos o improvisar reparaciones antes de documentar el caso.

### ¿Debo pagar el rescate si me secuestran los archivos?

Es una decisión que debe tomarse con asesoría legal y de las autoridades. La guía #StopRansomware de CISA no indica si conviene pagar; recomienda consultar a las autoridades sobre posibles descifradores. Pagar no garantiza recuperar los datos.

### ¿Con qué frecuencia debo hacer simulacros?

Al menos una vez al año, y cada vez que cambien proveedores, sistemas críticos o personal responsable. Un simulacro breve bastará para detectar las brechas más evidentes.

## Glosario rápido

**Incidente de ciberseguridad:** evento que compromete la confidencialidad, integridad o disponibilidad de sistemas o información.

**Contención:** acciones que limitan el daño de un incidente sin eliminar la evidencia.

**Erradicación:** eliminación de la causa del incidente, como malware o accesos no autorizados.

**Respaldo sin conexión:** copia de seguridad almacenada fuera de la red, que no puede alterarse desde los equipos comprometidos.

**Evidencia forense:** registros, imágenes y capturas que permiten reconstruir lo ocurrido.

**Ransomware:** software malicioso que cifra archivos y exige un pago para devolver el acceso.

**ANPD:** Autoridad Nacional de Protección de Datos Personales, a la que se notifican los incidentes de seguridad según el reglamento de la Ley 29733.

**Bitácora de incidente:** registro cronológico de hechos, decisiones y acciones durante la respuesta.

## Lecturas relacionadas

- [Pentesting vs escaneo de vulnerabilidades: diferencias y cuándo contratar cada uno](/blog/pentesting-vs-escaneo-de-vulnerabilidades-diferencias-y-cuando-contratar)
- [Empresas de ciberseguridad: cómo elegir un proveedor de seguridad informática](/blog/empresas-de-ciberseguridad-como-elegir-un-proveedor-de-seguridad-informatica)
- [SPF, DKIM y DMARC: autenticación del correo de tu empresa](/blog/spf-dkim-y-dmarc-autenticacion-del-correo-de-tu-empresa)

## Fuentes y lecturas recomendadas

- National Institute of Standards and Technology (NIST), *SP 800-61 Rev. 3: Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile*, abril de 2025. https://csrc.nist.gov/pubs/sp/800/61/r3/final
- Cybersecurity and Infrastructure Security Agency (CISA), *#StopRansomware Guide*. https://www.cisa.gov/stopransomware/ransomware-guide
- El Peruano, nota *Minjusdh: el lunes 31 regirá nuevo reglamento de ley*, 27 de marzo de 2025, sobre el reglamento de la Ley 29733 aprobado por el Decreto Supremo 016-2024-JUS. https://www.elperuano.pe/noticia/266995-minjusdh-el-lunes-31-regira-nuevo-reglamento-de-ley

*Última revisión: 14 de noviembre de 2026.*

---

Si tu empresa aún no tiene un plan de respuesta o quieres revisar el que ya existe, puedes conversar con nuestro equipo desde [la página de contacto](/contacto). También puedes conocer cómo trabajamos en [servicios de ciberseguridad](/servicios/ciberseguridad).
