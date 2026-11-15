---
title: "Plataformas virtuales de aprendizaje (LMS): Moodle, a medida o SaaS"
seoTitle: "Plataforma virtual (LMS): Moodle, a medida o SaaS"
description: "Qué es una plataforma virtual (LMS), sus funciones clave, estándares como SCORM y xAPI, y cómo elegir entre Moodle, un SaaS o un desarrollo a medida."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Plataformas"
cover: "/images/blog/plataformas-virtuales-de-aprendizaje-lms-moodle-a-medida-o-saas-cover.webp"
coverAlt: "Ilustración de un birrete, un libro abierto y un monitor con módulos de curso, símbolo de plataforma de aprendizaje en línea"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: true
reviewed: false
---

## Respuesta corta

Una plataforma virtual de aprendizaje, o LMS (Learning Management System), es un sistema que organiza cursos, matrículas, evaluaciones, certificados y seguimiento de los estudiantes en un solo lugar. Puede construirse sobre software libre como Moodle, contratarse como servicio en la nube (SaaS) o desarrollarse a medida cuando la organización necesita reglas, pagos o integraciones propias. La elección depende sobre todo del número de usuarios, del nivel de personalización que se necesita y de quién será dueño de los datos.

## Puntos clave

- Un LMS administra el ciclo completo de un curso: contenidos, matrícula, evaluación, certificado y seguimiento.
- Los estándares SCORM, xAPI y LTI permiten que contenidos y herramientas externas se conecten con la plataforma.
- Moodle es software libre bajo la licencia GNU GPL, y puede instalarse en servidores propios o contratarse en la nube.
- Un SaaS reduce la administración técnica, pero paga una suscripción recurrente y tiene límites de personalización.
- Un desarrollo a medida da control total sobre flujos y datos, a cambio de una inversión inicial y un mantenimiento propio.
- La accesibilidad (WCAG 2.2) y la protección de datos personales, incluidos los de menores, conviene definirlas desde el inicio.

Muchas academias, áreas de capacitación y universidades empiezan con grupos de mensajería, hojas de cálculo y archivos enviados por correo. Eso funciona con pocos alumnos, pero se vuelve difícil de controlar cuando hay que saber quién se matriculó, quién terminó, quién pagó y quién recibió su certificado. Una plataforma virtual reúne esa información en un solo sistema. Si todavía evalúas si tu organización la necesita, lee [por qué tu empresa necesita una plataforma virtual](/blog/por-que-tu-empresa-necesita-una-plataforma-virtual).

## ¿Qué es una plataforma virtual de aprendizaje?

Un LMS es el software que gestiona la formación: publica el contenido, controla quién está inscrito, recibe entregas, registra calificaciones y muestra el avance de cada persona. Moodle lo describe como un sistema que ofrece a educadores, administradores y estudiantes una única plataforma integrada para crear entornos de aprendizaje personalizados, según su documentación oficial.

"Plataforma e-learning" es un término más general, que abarca también los contenidos que se usan con el LMS.

## Funciones clave de una plataforma virtual

Una plataforma madura suele combinar estos módulos:

- **Cursos y contenidos:** publicar lecciones, documentos, videos y recursos, organizados por módulos o unidades.
- **Matrículas y usuarios:** dar de alta a estudiantes, docentes y administradores, y asignarles cursos según reglas (por grupo, por cargo o por pago).
- **Evaluaciones:** cuestionarios, tareas con entrega, rúbricas y, en algunos casos, exámenes con control de tiempo.
- **Certificados:** emitir una constancia automática al completar requisitos, idealmente con un código verificable.
- **Seguimiento:** reportes de avance, tiempo de estudio, calificaciones y abandono, para tomar decisiones con datos.
- **Pagos y facturación:** cobrar cursos o cuotas, y emitir comprobantes. Este módulo casi siempre se integra con un proveedor de pagos o con el sistema de facturación de la empresa.
- **Videoconferencia:** sesiones en vivo. Suele resolverse con una herramienta externa conectada al LMS, en lugar de desarrollarla desde cero.

![Diagrama de los módulos de un LMS: el núcleo de cursos y usuarios se conecta con evaluaciones, certificados, seguimiento, pagos, videoconferencia y estándares de integración](/images/blog/diagramas/plataformas-virtuales-de-aprendizaje-lms-moodle-a-medida-o-saas-modulos.svg)

*Figura 1. Módulos típicos de un LMS. El núcleo gestiona cursos y usuarios, y las integraciones conectan herramientas externas.*

Para ver cómo se combinan esos módulos desde la perspectiva de quien estudia, la figura 2 resume el recorrido típico: matrícula, estudio, evaluación y certificado.

![Flujo del estudiante en una plataforma virtual: matrícula, estudio de contenidos, evaluación y emisión de certificado](/images/blog/diagramas/plataformas-virtuales-de-aprendizaje-lms-moodle-a-medida-o-saas-flujo-estudiante.svg)

*Figura 2. Recorrido del estudiante en un LMS, de la matrícula al certificado.*

## Estándares que hacen posible la integración: SCORM, xAPI y LTI

Un error frecuente es suponer que cualquier contenido o herramienta funciona en cualquier plataforma. Tres estándares resuelven partes distintas de ese problema, y conviene conocer cuál necesitas.

| Estándar | Qué resuelve | Fuente oficial |
| --- | --- | --- |
| SCORM (Sharable Content Object Reference Model) | Empaqueta cursos en un formato que el LMS puede abrir y reportar avance y calificación. | ADL, [adlnet.gov](https://adlnet.gov/past-projects/scorm). ADL ofrece SCORM como proyecto histórico y recomienda xAPI para nuevas implementaciones. |
| xAPI (Experience API, también llamada Tin Can) | Registra experiencias como sentencias de la forma actor, verbo y objeto, enviadas en JSON a un Learning Record Store (LRS). Sirve para actividades fuera del LMS, como simulaciones o aplicaciones móviles. | ADL, [especificación xAPI](https://github.com/adlnet/xAPI-Spec/blob/1.0.2/xAPI.md) |
| LTI (Learning Tools Interoperability) | Conecta herramientas externas con el LMS sin pedir un inicio de sesión separado. La versión 1.3 usa OpenID Connect y tokens JWT firmados. | 1EdTech, [especificación LTI](https://standards.1edtech.org/lti/specifications/core/lti-spec) |

Dos matices: SCORM reporta lo que pasa dentro de un paquete de curso, mientras que xAPI puede registrar casi cualquier experiencia. LTI Advantage, a su vez, añade servicios para enlazar contenidos, sincronizar participantes y enviar calificaciones, según 1EdTech. Antes de contratar, confirma qué versión de LTI soporta cada herramienta, porque la compatibilidad no es automática.

## Tres caminos: Moodle, SaaS o a medida

No existe una opción correcta para todos. La tabla resume las diferencias principales, con el criterio o la fuente de cada una.

| Criterio | Moodle (código abierto, autoalojado o en la nube) | SaaS (por ejemplo, Canvas, Google Classroom o Teachable) | Desarrollo a medida |
| --- | --- | --- | --- |
| Costo de licencia | Sin licencia por uso: el software es libre bajo GNU GPL, según [Moodle Docs](https://docs.moodle.org/en/Moodle) | Suscripción o comisiones, según el proveedor | Ninguna licencia de terceros en el núcleo, pero sí desarrollo |
| Costo recurrente | Hosting, soporte, administración y horas de un especialista | Suscripción por usuario o por sitio, y en algunos casos comisiones por venta | Mantenimiento, hosting y evolución del sistema |
| Personalización | Alta, con plugins y código propio, aunque aumenta el costo de actualizar | Limitada a lo que ofrece el proveedor | Total, según el alcance contratado |
| Control de datos | Alto si se aloja en servidores propios; depende del proveedor si se usa en la nube | Depende de las condiciones y la ubicación del proveedor | Alto, siempre que el contrato y la arquitectura lo definan |
| Puesta en marcha | Rápida en una instalación básica; más lenta si se adapta mucho | Muy rápida | La más lenta: depende de requisitos y de la complejidad |
| Integraciones | Amplia, con plugins y LTI | Las que ofrece el proveedor | Las que se programen, incluidos pagos y facturación propios |

### Moodle: software libre con comunidad amplia

Moodle se distribuye bajo GNU GPL, así que puede adaptarse sin pagar licencia por uso. Su desarrollo lo mantiene Moodle Pty Ltd (Moodle HQ), y la [documentación oficial](https://docs.moodle.org/en/Moodle) está disponible en varios idiomas. Para quien no quiere administrar servidores existen MoodleCloud, un servicio alojado de pago, y Moodle Workplace, para empresas.

Moodle conviene cuando hay un administrador técnico o un proveedor que lo mantenga. Su principal reto es el mantenimiento: cada plugin y cada personalización debe revisarse en cada actualización.

### SaaS: rápido de empezar, con límites

Un SaaS se contrata en la nube y el proveedor se encarga de la infraestructura. Ejemplos conocidos son Canvas, Google Classroom y Teachable.

- **Canvas**, de Instructure, se presenta en su sitio oficial como un LMS en la nube con calificación en un solo lugar (SpeedGrader), libro de calificaciones, cursos replicables (Blueprint) y más de 1000 integraciones con herramientas externas. Su oferta se dirige a K-12, educación superior, y a empresas y gobierno con Canvas Career. Fuente: [instructure.com/canvas](https://www.instructure.com/canvas).
- **Google Classroom** es la herramienta de Google para aulas y su centro de ayuda oficial documenta cada función. Es sencillo para cursos con docentes y grupos, pero tiene menos capacidades nativas para venta de cursos o certificación avanzada. Fuente: [Ayuda de Google Classroom](https://support.google.com/edu/classroom/answer/6025224?hl=en).
- **Teachable** se orienta a quien vende cursos. Su sitio oficial describe un constructor de cursos con arrastrar y soltar, certificados de finalización, aplicaciones para iOS y Android, y un cobro integrado. Su página de preguntas frecuentes indica una comisión por transacción de 7,5 % en el plan inicial y de 0 % en los planes superiores cuando se usa su cobro integrado. Confirma esas condiciones en su página de precios antes de decidir, porque la misma FAQ contiene una contradicción sobre la existencia de un plan gratuito. Fuente: [teachable.com](https://teachable.com).

### Desarrollo a medida: control total con más inversión

Un desarrollo a medida conviene cuando el proceso de negocio es propio y no encaja en un LMS genérico. Por ejemplo, una academia con matrículas ligadas a convenios, cuotas con facturación electrónica o reglas de acceso por tipo de cliente. También cuando los datos deben quedarse en infraestructura controlada por la organización o cuando hay que integrar la formación con un sistema de gestión existente.

El costo no termina con la entrega: el sistema necesita mantenimiento y soporte, así que conviene empezar con un alcance mínimo y ampliar por etapas. Compáralo con software genérico en [software a medida frente a soluciones genéricas](/blog/software-a-medida-vs-soluciones-genericas).

## Qué funciones necesita cada tipo de institución

Las necesidades cambian según quién enseña y quién aprende. La siguiente tabla orienta la definición de requisitos antes de elegir la tecnología.

| Función | Academia (cursos abiertos o de pago) | Empresa (capacitación interna) | Universidad (programas formales) |
| --- | --- | --- | --- |
| Cursos | Catálogo público, con vista previa y venta | Rutas por cargo, inducción y actualizaciones | Asignaturas por periodo académico |
| Matrícula | Automática tras el pago | Asignación por área o rol | Integrada con el sistema académico |
| Evaluaciones | Cuestionarios y proyectos | Competencias y prácticas con registro | Exámenes, rúbricas y control de identidad |
| Certificados | Constancia de finalización, con código verificable | Constancias para cumplimiento interno | Certificados oficiales con validación |
| Seguimiento | Ventas, abandono y progreso | Cumplimiento y brechas por área | Asistencia, notas y reportes para docentes |
| Pagos | Crítico: cobro, comprobante y reembolsos | Normalmente interno, sin cobro al alumno | Cobros de matrícula, generalmente en el sistema administrativo |
| Integraciones | Pasarelas de pago y correo | Directorio de usuarios y sistemas de RR. HH. | Sistema académico, biblioteca y videoconferencia |

## Criterios para decidir

Antes de comparar proveedores, responde por escrito estas cinco preguntas. Las respuestas sirven para pedir cotizaciones comparables.

- **Usuarios y picos:** cuántas personas usarán la plataforma al mismo tiempo, en qué temporadas y con qué crecimiento.
- **Personalización:** qué flujos son estándar y cuáles son propios de la organización.
- **Pagos y facturación:** qué pasarela, qué comprobantes y qué sistema contable deben conectarse.
- **Propiedad de los datos:** dónde se almacenan, quién puede exportarlos y en qué formato, y qué ocurre si se termina el contrato.
- **Costo total a tres años:** suma licencias, comisiones, hosting, mantenimiento y horas de soporte, no solo la cuota inicial.

Compara siempre con el mismo alcance. Una cotización sin funciones de seguimiento o sin integración de pagos no es comparable con otra que sí las incluye.

## Accesibilidad: un requisito desde el diseño

Las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2 son una Recomendación del W3C publicada el 5 de octubre de 2023. Según el anuncio oficial del W3C, agregan nueve criterios de éxito y retiran el criterio 4.1.1 Análisis, declarado obsoleto. Entre las novedades figuran criterios sobre la visibilidad del foco del teclado, las operaciones de arrastrar y soltar y la autenticación accesible. Fuente: [anuncio del W3C](https://www.w3.org/WAI/news/2023-10-05/wcag22rec) y [texto de la recomendación](https://www.w3.org/TR/2023/REC-WCAG22-20231005/).

En un LMS, esto se traduce en acciones concretas: videos con subtítulos, documentos con estructura legible por lectores de pantalla, evaluaciones que se pueden completar solo con teclado y tiempos ajustables cuando un estudiante lo necesita.
## Seguridad y datos personales de los alumnos

Una plataforma guarda nombres, correos, calificaciones, pagos y, en muchos casos, datos de menores de edad. En Perú, la base es la Ley N.° 29733, Ley de Protección de Datos Personales, cuyo reglamento vigente es el Decreto Supremo N.° 016-2024-JUS, publicado el 30 de noviembre de 2024. Ese reglamento derogó el Decreto Supremo N.° 003-2013-JUS. Fuentes: [ANPD, DS 016-2024-JUS](https://www.gob.pe/institucion/anpd/normas-legales/6554453-16-2024-jus) y [ANPD, Ley N.° 29733](https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011). Para una visión general de las obligaciones de una empresa, revisa [qué debe cumplir tu empresa según la Ley de Protección de Datos Personales](/blog/ley-proteccion-datos-personales-peru-que-debe-cumplir-tu-empresa).

Para una plataforma educativa, conviene revisar con un asesor legal tres puntos: la base legal para tratar los datos, la forma de obtener el consentimiento cuando hay menores de edad, y los plazos de conservación. Las reglas de consentimiento para menores dependen de la edad y del contexto, así que no conviene aplicar una regla general sin revisar el texto oficial.

En seguridad técnica, las medidas básicas son el acceso con autenticación multifactor para docentes y administradores, roles con permisos mínimos y copias de seguridad probadas. Puedes profundizar en estas medidas en la [guía de Zero Trust y autenticación multifactor](/blog/zero-trust-y-autenticacion-multifactor-guia-para-pymes).

## Errores comunes

- **Elegir solo por la cuota inicial.** Las comisiones, el hosting y el mantenimiento suelen pesar más a mediano plazo.
- **Contratar un SaaS sin revisar la exportación de datos.** Conviene saber cómo salen los registros de alumnos y calificaciones antes de firmar.
- **Tratar SCORM, xAPI y LTI como intercambiables.** Cada uno resuelve un problema distinto.
- **Dejar la accesibilidad para el final.** Corregir una plataforma ya construida cuesta más que diseñarla accesible desde el inicio.
- **Inscribir menores sin revisar el consentimiento.** Es un riesgo legal que debe resolverse antes del lanzamiento.
- **Personalizar en exceso un sistema libre.** Cada cambio profundo complica las actualizaciones y crea dependencia de una sola persona.

## Preguntas frecuentes

### ¿Qué es una plataforma virtual de aprendizaje?

Es un sistema de software que gestiona cursos, matrículas, evaluaciones, certificados y seguimiento de los estudiantes. Se conoce como LMS, por sus siglas en inglés. Puede ser de código abierto, un servicio en la nube o un desarrollo propio.

### ¿Moodle es gratis?

Moodle es software libre bajo GNU GPL, así que no se paga una licencia por usarlo. Sí hay costos de servidor, hosting, personalización, soporte y mantenimiento, según cómo se implemente.

### ¿Qué diferencia hay entre SCORM y xAPI?

SCORM empaqueta cursos y reporta avance y calificación al LMS. xAPI registra experiencias como sentencias de actor, verbo y objeto, y puede hacerlo también fuera del LMS. Para contenidos nuevos, ADL recomienda xAPI.

### ¿Cuánto cuesta una plataforma virtual en Perú?

No hay datos públicos verificados para Perú sobre precios generales de plataformas virtuales. El costo depende de los usuarios, las funciones, las integraciones y si se contrata en la nube o a medida. Pide cotizaciones con el mismo alcance para compararlas.

### ¿Si ya uso Google Classroom, necesito un LMS?

Depende de lo que necesites. Classroom cubre bien la gestión de aulas y tareas de un grupo de docentes. Si necesitas venta de cursos, emisión de certificados con reglas propias o integración con pagos y facturación, conviene evaluar una plataforma más completa.

### ¿Una plataforma virtual sirve para la capacitación interna de una empresa?

Sí. En empresas, el LMS suele servir para inducción, capacitación por cargo, cumplimiento normativo y evaluación de competencias. Lo importante es que se conecte con el directorio de usuarios y que registre el avance de cada persona.

## Glosario rápido

**LMS:** sistema de gestión del aprendizaje que administra cursos, usuarios, evaluaciones y certificados.

**SCORM:** conjunto de especificaciones para empaquetar cursos y reportar avance y calificación al LMS.

**xAPI:** especificación para registrar experiencias de aprendizaje como sentencias de actor, verbo y objeto.

**LRS:** servidor que recibe, guarda y consulta los registros generados con xAPI.

**LTI:** estándar que conecta herramientas externas con un LMS sin un inicio de sesión separado.

**SaaS:** software como servicio, contratado en la nube y mantenido por el proveedor.

**WCAG:** pautas del W3C para hacer el contenido web accesible a personas con discapacidad.

*Última revisión: 14 de noviembre de 2026.*

## Fuentes y lecturas recomendadas

- Moodle, *What is Moodle?*, documentación oficial. https://docs.moodle.org/en/Moodle
- ADL, *SCORM*, página oficial de proyectos. https://adlnet.gov/past-projects/scorm
- ADL, *xAPI Specification*, versión 1.0.2 en el repositorio oficial. https://github.com/adlnet/xAPI-Spec/blob/1.0.2/xAPI.md
- 1EdTech, *LTI Core Specification*. https://standards.1edtech.org/lti/specifications/core/lti-spec
- W3C, *WCAG 2.2 es una Recomendación*, anuncio del 5 de octubre de 2023. https://www.w3.org/WAI/news/2023-10-05/wcag22rec
- W3C, *Web Content Accessibility Guidelines (WCAG) 2.2*, Recomendación de 2023. https://www.w3.org/TR/2023/REC-WCAG22-20231005/
- Instructure, *Canvas LMS*, página oficial. https://www.instructure.com/canvas
- Google, *Ayuda de Google Classroom*, centro de ayuda oficial. https://support.google.com/edu/classroom/answer/6025224?hl=en
- Teachable, página oficial y preguntas frecuentes. https://teachable.com
- ANPD (Gobierno del Perú), *Decreto Supremo N.° 016-2024-JUS*, Reglamento de la Ley N.° 29733, 2024. https://www.gob.pe/institucion/anpd/normas-legales/6554453-16-2024-jus
- ANPD (Gobierno del Perú), *Ley N.° 29733, Ley de Protección de Datos Personales*, 2011. https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011

Universoft desarrolló la plataforma de Escuela Global, un caso real de LMS a medida. Si estás evaluando una plataforma para tu academia o tu empresa, [contáctanos](/contacto) y revisamos con [nuestros servicios de plataformas](/servicios/plataformas) cuál de las tres opciones encaja con tu caso.
