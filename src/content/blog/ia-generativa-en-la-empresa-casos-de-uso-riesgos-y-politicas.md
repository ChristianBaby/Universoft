---
title: "IA generativa en la empresa: casos de uso, riesgos y políticas internas"
seoTitle: "IA generativa en la empresa: riesgos y políticas"
description: "Casos de uso de IA generativa por área, riesgos como la fuga de datos y las alucinaciones, y una política interna mínima para usarla con criterio."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Software"
cover: "/images/blog/ia-generativa-en-la-empresa-casos-de-uso-riesgos-y-politicas-cover.webp"
coverAlt: "Dos personas revisando un documento frente a una laptop en una oficina"
author: "Christian Pumaccahua Cusihuaman"
readTime: "9 min de lectura"
draft: true
reviewed: false
---

## Respuesta corta

La IA generativa es un tipo de inteligencia artificial que crea texto, imágenes, código o resúmenes a partir de instrucciones. En una empresa puede ahorrar tiempo en atención, marketing, desarrollo, finanzas y trabajo legal, pero también introduce riesgos concretos: fuga de datos confidenciales, alucinaciones, problemas de propiedad intelectual y sesgos. La forma práctica de usarla es con una política interna escrita que defina qué información no se puede subir, qué resultados siempre deben ser revisados por una persona y qué uso queda registrado.

## Por qué una pyme necesita reglas para la IA

En muchas empresas peruanas la IA generativa ya entró por la puerta trasera. Un vendedor pega en un chatbot la lista de clientes para redactar un correo, una contadora le pide a una herramienta que resuma un contrato o un programador envía un fragmento de código con credenciales incluidas. Nadie lo hizo con mala intención, pero la empresa perdió control sobre información que quizá no debía salir.

Prohibir la herramienta por completo rara vez funciona: el personal la usará igual, desde su celular. Es más útil definir qué se puede hacer, con qué herramientas y con qué límites, y eso es lo que hace una política interna corta y clara. Si tu empresa planea ir más allá y poner agentes que actúen sobre sus sistemas, conviene leer antes el artículo sobre [agentes de IA para empresas y cómo aplicarlos en una pyme](/blog/agentes-de-ia-para-empresas-que-son-y-como-aplicarlos-en-una-pyme), porque los riesgos crecen cuando la IA no solo redacta, sino que ejecuta.

## Qué es la IA generativa

La IA generativa son modelos entrenados con grandes volúmenes de datos que producen contenido nuevo en respuesta a una instrucción, llamada *prompt*. Lo que produce puede ser un texto, una imagen, una tabla o código. Su resultado es probabilístico: el modelo construye la respuesta más plausible según el contexto, no la verifica contra una base de hechos por defecto.

Esa característica explica casi todos sus beneficios y casi todos sus riesgos. Redacta bien y rápido, pero puede sonar seguro cuando se equivoca. Por eso el National Institute of Standards and Technology (NIST) de Estados Unidos publicó en julio de 2024 un perfil específico para IA generativa, que identifica riesgos propios o agravados por esta tecnología y sugiere acciones para gestionarlos.

## Casos de uso por área

Los casos más útiles dependen de cada área. Lo que sigue son usos frecuentes, siempre con revisión humana en la salida.

### Atención al cliente

Redactar borradores de respuestas a consultas frecuentes, resumir el historial de un cliente antes de una llamada o traducir mensajes. El riesgo está en que el borrador prometa algo que la empresa no puede cumplir, por eso las respuestas sobre precios, garantías o plazos deben usar información aprobada.

### Marketing

Generar ideas de contenido, adaptar un mensaje a distintos canales o preparar variantes de un anuncio. Aquí el riesgo principal es la propiedad intelectual: imágenes o textos que imitan obras existentes, o afirmaciones sobre el producto que no están respaldadas.

### Desarrollo de software

Explicar código, proponer pruebas, escribir documentación o revisar errores. Es uno de los usos más productivos, pero el código generado debe revisarse y probarse como cualquier otro. No se deben pegar en la herramienta claves, tokens ni datos reales de producción.

### Finanzas

Preparar plantillas de reportes, explicar una fórmula en una hoja de cálculo o resumir un informe interno. La regla básica es que las cifras no se tomen del texto generado: se verifican contra el sistema contable.

### Legal y contratos

Comparar versiones de un contrato, identificar cláusulas que requieren atención o preparar un borrador inicial. Es un apoyo para una revisión profesional, nunca un sustituto. Los contratos con datos de clientes o proveedores pueden contener información personal y confidencial que no debe subirse sin una evaluación previa.

## Riesgos que la empresa debe conocer

El marco del NIST describe varios riesgos que aplican directamente a una empresa. Cuatro de ellos son los que más impacto suelen tener en una pyme.

### Fuga de datos y privacidad

El NIST identifica la privacidad de los datos como un riesgo específico de la IA generativa, incluida la filtración o el uso no autorizado de datos personales o sensibles. En la práctica, el riesgo aparece cuando un colaborador pega una base de clientes, un informe financiero o una conversación con un cliente en una herramienta que no está aprobada por la empresa. Según cómo se configure el servicio, esa información puede almacenarse o usarse de formas que la empresa no controla.

Por eso la primera línea de defensa es clasificar la información. Un dato personal de un cliente, una contraseña o un contrato en negociación no deberían entrar en cualquier herramienta.

### Propiedad intelectual

El NIST también incluye la propiedad intelectual entre los riesgos de la IA generativa, por la posibilidad de producir contenido que reproduce obras protegidas sin autorización, o de exponer secretos comerciales cuando alguien los incluye en una instrucción. Para una empresa, dos preguntas son útiles antes de publicar: quién es titular del contenido generado y si el material de entrada le pertenece o tiene permiso para usarlo.

### Alucinaciones

El NIST agrupa bajo el término *confabulación* la producción de contenido falso o engañoso. Es el riesgo más visible: una cifra inventada, una cita inexistente o una norma que no existe. La mitigación recomendada es verificar las fuentes y citas antes de usar el resultado. El texto generado nunca debe ser la fuente primaria de un dato.

### Sesgos

El NIST describe el sesgo dañino y la homogeneización como riesgos de la IA generativa: el modelo puede reproducir estereotipos o favorecer ciertos patrones en sus respuestas. En procesos que afectan a personas, como selección de personal o evaluación de clientes, esto exige revisión humana y criterios explícitos que no dependan solo de lo que sugiera la herramienta.

## Qué dice el marco legal peruano

Dos normas son relevantes para una empresa peruana.

La primera es la **Ley 29733, de Protección de Datos Personales**. Si la IA procesa datos personales de clientes, empleados o proveedores, la empresa sigue siendo responsable de cómo se tratan esos datos. Eso implica tratarlos con una finalidad legítima, aplicar medidas de seguridad y respetar los derechos de los titulares. El artículo sobre [qué debe cumplir tu empresa con la ley de protección de datos personales](/blog/ley-proteccion-datos-personales-peru-que-debe-cumplir-tu-empresa) explica las obligaciones básicas.

La segunda es la **Ley 31814**, que promueve el uso de la inteligencia artificial en favor del desarrollo económico y social del país. Su reglamento fue aprobado por el Decreto Supremo 115-2025-PCM y publicado en El Peruano el 9 de setiembre de 2025. Este artículo no resume las obligaciones concretas del reglamento, porque conviene leer el texto oficial directamente antes de aplicarlo en la empresa. Puedes consultarlo en [El Peruano](https://busquedas.elperuano.pe/dispositivo/NL/2436426-1).

## Tareas apropiadas y tareas que requieren precaución

La siguiente tabla sirve como guía general. Lo que decide el caso concreto es la información que entra y la consecuencia de un error.

| Tarea | Apropiada con revisión básica | Requiere precaución o aprobación previa |
|---|---|---|
| Redactar un correo genérico sin datos del cliente | Sí | No aplica |
| Resumir un documento público | Sí | No aplica |
| Generar ideas para publicaciones | Sí, revisando que no copien obras | Solo si se usan imágenes de terceros |
| Responder una consulta de cliente con datos reales | Solo con plantilla aprobada | Sí, si incluye datos personales o precios |
| Analizar una base de clientes o de empleados | No | Requiere evaluación de privacidad y herramienta aprobada |
| Revisar un contrato con información confidencial | No, salvo herramienta aprobada | Requiere revisión legal y control de acceso |
| Generar código de una función sin credenciales | Sí, con pruebas y revisión | No aplica |
| Pegar código con claves, tokens o datos de producción | No | No debe hacerse |
| Preparar una cifra para un reporte financiero | Solo como borrador | Las cifras se verifican con el sistema contable |

## ¿Puedo usar IA con esta información?

Antes de subir cualquier contenido a una herramienta, conviene pasar por una pregunta simple. La figura 1 resume el flujo de decisión.

![Diagrama de decisión: ¿puedo usar IA con esta información? Pregunta si hay datos personales, financieros o secretos, y si hay herramienta aprobada o revisión humana](/images/blog/diagramas/ia-generativa-en-la-empresa-casos-de-uso-riesgos-y-politicas-decision.svg)

*Figura 1. Flujo de decisión antes de usar IA generativa. Si la información es sensible y no hay herramienta aprobada, no se sube. Si no es sensible, la revisión humana define el uso.*

El flujo parte de la clasificación del dato, no de la herramienta. Una herramienta puede ser excelente y aun así no ser adecuada para un dato confidencial si la empresa no la ha evaluado.

## Política interna mínima

Una política útil cabe en una o dos páginas. No necesita ser un documento legal complejo, pero sí debe ser conocida, entendida y revisada. Estos tres elementos son el núcleo.

**Qué datos no se suben.** Datos personales de clientes, empleados o proveedores, contraseñas y claves, información financiera no publicada, contratos en negociación y cualquier secreto comercial. Si hay duda, se trata como confidencial.

**Revisión humana obligatoria.** Ninguna salida de IA se envía a un cliente, se publica o se usa para decidir sobre una persona sin que alguien responsable la haya revisado. Las cifras, citas y afirmaciones sobre normas se verifican contra la fuente original.

**Registro de uso.** La empresa debe saber qué herramientas están aprobadas, quién es responsable de cada una y qué tipos de uso se permiten. Un registro simple basta para empezar: qué herramienta, para qué área, qué tipo de información y quién la revisó.

La siguiente lista de control sirve para revisar la política cada trimestre o cuando cambie alguna herramienta.

| Control | Pregunta de verificación | Responsable sugerido |
|---|---|---|
| Herramientas aprobadas | ¿Existe una lista escrita de herramientas autorizadas, con su configuración de privacidad revisada? | Gerencia o área de TI |
| Clasificación de datos | ¿El personal sabe identificar qué información es personal, financiera o confidencial? | Cada área, con apoyo de TI |
| Prohibiciones claras | ¿La política enumera los datos que nunca se suben a herramientas de IA? | Gerencia |
| Revisión humana | ¿Toda salida que va a clientes o decisiones sobre personas tiene una revisión registrada? | Jefe de área |
| Verificación de datos | ¿Las cifras, citas y normas se contrastan con la fuente original? | Quien produce el documento |
| Registro de uso | ¿Se registran herramienta, área, tipo de información y revisor? | TI o administración |
| Capacitación | ¿Todo el personal conoce la política y sabe a quién consultar dudas? | Recursos humanos |
| Incidentes | ¿Existe un procedimiento para reportar un dato subido por error? | Gerencia y TI |

La figura 2 muestra el ciclo mínimo de uso responsable, desde describir la tarea hasta registrar el uso.

![Ciclo de uso responsable de IA: describir la tarea, clasificar el dato, usar herramienta aprobada, revisar la salida y registrar el uso](/images/blog/diagramas/ia-generativa-en-la-empresa-casos-de-uso-riesgos-y-politicas-politica.svg)

*Figura 2. Ciclo de uso responsable. El paso de clasificación del dato es el punto de control: si el dato es sensible y no existe una herramienta aprobada, el proceso se detiene.*

Si un colaborador ya subió información sensible a una herramienta no aprobada, la reacción importa tanto como la prevención. Lo recomendable es reportarlo de inmediato al responsable, documentar qué se subió y revisar la configuración del servicio. Castigar a quien reporta suele hacer que el problema se oculte.

## Errores comunes

- **Creer que una herramienta gratuita y una de pago tienen la misma protección de datos.** Las condiciones de uso y de privacidad pueden ser distintas, y conviene leerlas antes de aprobar una herramienta.
- **Usar la IA como fuente primaria.** Un resumen generado es un punto de partida, no una referencia verificada.
- **Aprobar una herramienta sin definir para qué tipo de información se usa.** La misma herramienta puede servir para redactar ideas y no para analizar una base de clientes.
- **Redactar una política que nadie lee.** Una lista de tres páginas que el personal conoce vale más que un manual de treinta que nadie abre.
- **Tratar la política como un trámite único.** Las herramientas cambian, sus condiciones se actualizan y el equipo rota. La política debe revisarse con regularidad.

## Preguntas frecuentes

### ¿Podemos prohibir la IA generativa en la empresa?

Se puede, pero suele ser poco efectivo, porque el personal la usará desde dispositivos personales sin que nadie lo vea. Una alternativa más sólida es aprobar algunas herramientas, definir los datos prohibidos y establecer revisiones. Así la empresa mantiene control sin perder el uso legítimo.

### ¿Qué información nunca debo subir a una herramienta de IA?

Como regla general, no subas datos personales de clientes o empleados, contraseñas o claves, información financiera no publicada, contratos en negociación ni secretos comerciales. Si no estás seguro de si un dato es sensible, trátalo como confidencial y consulta antes de usarlo.

### ¿Quién es responsable si la IA genera un contenido con errores?

La empresa que publica o usa el contenido es la responsable de revisarlo y de sus consecuencias, sin importar qué herramienta lo generó. Por eso la revisión humana es obligatoria en los contenidos que llegan a clientes o afectan decisiones.

### ¿La Ley 29733 aplica si solo uso la IA para redactar correos?

Depende de lo que contenga el correo. Si incluye datos personales de clientes o empleados, esos datos siguen sujetos a la ley aunque el texto lo haya redactado una herramienta. Si el correo es genérico y no contiene datos personales, la exposición es menor.

### ¿Necesitamos una política escrita si somos una empresa pequeña?

Sí, aunque sea breve. Una política corta reduce la improvisación, ayuda a que el equipo sepa qué puede hacer y deja evidencia de que la empresa tomó medidas razonables.

### ¿Cómo sé si una herramienta de IA es adecuada para mi empresa?

Revisa su política de privacidad, si ofrece opciones para no usar tus datos en el entrenamiento, dónde se almacena la información, qué controles de acceso tiene y si cumple con los requisitos de tu sector. Documenta esa evaluación antes de aprobar su uso.

## Glosario rápido

**IA generativa:** tipo de inteligencia artificial que produce contenido nuevo, como texto, imágenes o código, a partir de instrucciones.

**Prompt:** instrucción o texto que se le envía a un modelo de IA para obtener una respuesta.

**Alucinación o confabulación:** producción de contenido falso o engañoso que parece plausible.

**Fuga de datos:** exposición no autorizada de información confidencial o personal, por cualquier vía.

**Dato personal:** información que permite identificar a una persona, según la Ley 29733.

**Revisión humana:** verificación de un resultado por una persona responsable antes de usarlo.

**Política interna:** conjunto escrito de reglas que define cómo el personal puede usar una tecnología.

**Clasificación de datos:** proceso de identificar si una información es pública, interna, confidencial o personal.

## Fuentes y lecturas recomendadas

- National Institute of Standards and Technology (NIST), "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile" (NIST AI 600-1), julio de 2024. https://doi.org/10.6028/NIST.AI.600-1
- Perú, Decreto Supremo 115-2025-PCM, que aprueba el reglamento de la Ley 31814, publicado en El Peruano el 9 de setiembre de 2025. https://busquedas.elperuano.pe/dispositivo/NL/2436426-1
- Perú, Ley 29733, Ley de Protección de Datos Personales. Revisa el texto vigente en el portal oficial del Estado antes de aplicarla; el artículo del blog citado arriba resume sus obligaciones básicas.

## Siguiente paso

Si quieres revisar qué procesos de tu empresa podrían usar IA generativa sin exponer datos sensibles, puedes escribirnos desde la [página de contacto](/contacto). Para los controles de acceso y la protección de la información, revisa nuestro servicio de [ciberseguridad](/servicios/ciberseguridad).

También te puede interesar el artículo sobre [cómo aparecer en ChatGPT y Perplexity siendo una pyme](/blog/como-aparecer-en-chatgpt-y-perplexity-para-pymes), y el de [automatización de procesos y cómo una plataforma reduce costos](/blog/automatizacion-de-procesos-como-una-plataforma-reduce-costos), donde se explica cuándo conviene automatizar antes de sumar IA.
