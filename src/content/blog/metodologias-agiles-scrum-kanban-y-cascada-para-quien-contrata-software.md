---
title: "Metodologías ágiles: Scrum, Kanban y cascada para quien contrata software"
seoTitle: "Metodologías ágiles: Scrum, Kanban y cascada"
description: "Metodologías ágiles explicadas para quien contrata software: qué es Scrum, qué es Kanban, cuándo conviene la cascada y qué pedir al proveedor."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Software"
cover: "/images/blog/metodologias-agiles-scrum-kanban-y-cascada-para-quien-contrata-software-cover.webp"
coverAlt: "Ilustración de un ciclo de sprint con tarjetas que avanzan por columnas, símbolo de metodologías ágiles"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: true
reviewed: false
---

## Respuesta corta

Las metodologías ágiles organizan el desarrollo de software en entregas cortas que se revisan con el cliente, en lugar de un único entregable al final. Scrum trabaja en sprints de un mes o menos con roles, eventos y artefactos definidos; Kanban visualiza el trabajo en un tablero y limita las tareas en curso; la cascada completa una fase antes de iniciar la siguiente. Ninguna es mejor en todos los casos: la elección depende de cuán clara esté la solución y de cuánto probablemente cambie durante el proyecto.

## Puntos clave

- Ágil no significa improvisar: significa entregar con frecuencia y decidir según lo que ya funciona.
- En Scrum, al final de cada sprint debe existir un incremento usable del producto.
- Kanban muestra el flujo de trabajo en columnas y limita cuántas tareas se hacen a la vez.
- La cascada suele funcionar mejor cuando el alcance es estable y los cambios son costosos.
- Como cliente, pide demos periódicas, un backlog visible y una definición de terminado escrita.
- El método influye en plazos y costos, pero la cifra final depende sobre todo del alcance y del equipo.

Quien contrata software no necesita dominar la jerga para tomar buenas decisiones, pero sí entender qué significa cada método en la práctica. Un proveedor puede decir que trabaja "ágil" y, aun así, entregar todo al final si no hay revisiones reales. Del mismo modo, un proyecto con cascada puede salir bien si el alcance está muy bien definido desde el inicio.

Esta guía explica Scrum, Kanban y la cascada con un lenguaje pensado para el cliente, indica cuándo conviene cada una y qué observar durante el proyecto.

## ¿Qué es una metodología ágil?

Una metodología ágil es una forma de organizar el desarrollo de software en ciclos cortos que producen algo utilizable y que se revisan con el cliente para decidir el siguiente paso.

El Manifiesto Ágil, publicado en 2001 por un grupo de desarrolladores, resume esta idea en cuatro valores. Según el texto en inglés disponible en agilemanifesto.org, el manifiesto prefiere:

- Individuos e interacciones sobre procesos y herramientas.
- Software funcionando sobre documentación exhaustiva.
- Colaboración con el cliente sobre negociación contractual.
- Respuesta ante el cambio sobre seguir un plan al pie de la letra.

*La traducción de los valores es propia. El manifiesto no define roles ni fechas concretas; esas decisiones se toman en cada método.*

## Scrum: roles, eventos y artefactos

Scrum es el marco ágil más usado en desarrollo de software. La Guía de Scrum 2020, de Ken Schwaber y Jeff Sutherland, lo describe con tres partes: roles (que la guía llama responsabilidades), eventos y artefactos.

Las tres responsabilidades son los **Desarrolladores**, el **Product Owner** (quien prioriza lo que se construye) y el **Scrum Master** (quien cuida que el marco se aplique bien y elimina obstáculos). Los eventos son el **Sprint**, la **Planificación del Sprint**, el **Daily Scrum** (una reunión diaria corta de coordinación), la **Revisión del Sprint** y la **Retrospectiva del Sprint**. Los artefactos son el **Product Backlog**, el **Sprint Backlog** y el **Incremento**, cada uno con su compromiso: el Objetivo del Producto, el Objetivo del Sprint y la Definición de Terminado.

Para el cliente, lo más valioso de Scrum está en la Revisión del Sprint: ahí se muestra lo construido y se decide el orden de lo que sigue. La siguiente figura resume cómo se repite el ciclo.

![Diagrama del ciclo de un Sprint con cuatro cajas: planificación, Daily Scrum, revisión y retrospectiva, unidas por flechas y con un círculo central que indica un sprint de un mes o menos](/images/blog/diagramas/metodologias-agiles-scrum-kanban-y-cascada-para-quien-contrata-software-sprint.svg)

*Figura 1. Ciclo de un Sprint en Scrum. Según la Guía de Scrum 2020, un Sprint dura un mes o menos, y cada uno termina con un incremento del producto.*

Scrum tiene una regla importante para el cliente: la duración del Sprint es fija durante el proyecto. Así, el equipo y la empresa aprenden un ritmo de entrega. Lo que varía es el alcance que cabe en cada sprint, según lo que el Product Owner priorice.

## Scrum vs Kanban: diferencias prácticas

Kanban no es un marco completo como Scrum. Es un método para visualizar el trabajo, limitar lo que está en curso y mejorar el flujo. Se usa tanto de forma independiente como dentro de equipos Scrum.

La Kanban Guide for Scrum Teams, publicada por Scrum.org, explica cómo los equipos Scrum pueden aplicar ideas de flujo y Kanban sin reemplazar la Guía de Scrum. Según la página de Scrum.org, la guía está pensada para quienes ya trabajan con Scrum y busca complementar su implementación.

En términos prácticos, Scrum entrega en ciclos fijos y se evalúa por incrementos; Kanban entrega de forma continua y se evalúa por el tiempo que tarda cada tarea en recorrer el tablero. Por eso Kanban suele encajar mejor con trabajo que llega sin orden, como soporte o incidencias, mientras que Scrum encaja mejor con la construcción de funciones nuevas que se revisan por etapas.

## La metodología cascada: cuándo tiene sentido

La cascada, o modelo en cascada, organiza el proyecto en fases que se completan una tras otra: requisitos, diseño, desarrollo, pruebas y entrega. Cada fase suele cerrarse con documentos aprobados antes de pasar a la siguiente.

El término se popularizó después de que Winston W. Royce presentara en 1970 un artículo sobre la gestión de grandes sistemas de software. Historiadores han discutido cómo se interpretó ese trabajo: según la ficha de Wikipedia sobre Royce, el artículo describía un proceso por etapas, pero también planteaba iterar, un punto que se pierde en la lectura popular.

En la práctica, la cascada puede funcionar cuando el alcance está muy bien definido, cuando los cambios tienen un costo alto o cuando el proyecto debe cumplir requisitos formales de aprobación. Su límite aparece cuando el problema real se entiende mejor durante la construcción: los errores de requisitos se descubren tarde y corregirlos es más caro.

## Tabla comparativa: cascada, Kanban y Scrum

La siguiente tabla compara los tres enfoques desde la perspectiva del cliente.

| Aspecto | Cascada | Kanban | Scrum |
|---|---|---|---|
| Organización | Fases secuenciales | Tablero con flujo continuo | Sprints de un mes o menos |
| Cuándo conviene | Alcance estable y cambios costosos | Trabajo continuo, soporte o incidencias | Producto que evoluciona con retroalimentación frecuente |
| Cómo se ve el avance | Al cerrar cada fase | Tarjetas que avanzan por columnas | Incremento usable al final de cada sprint |
| Riesgo principal | Descubrir errores de requisitos muy tarde | Demasiado trabajo en curso y prioridades difusas | Product Owner ausente o sprints sin objetivo claro |
| Qué se le pide al cliente | Aprobar documentos por fase | Definir políticas y prioridades | Participar en revisiones y ordenar el backlog |

*Tabla 1. Comparación de los tres enfoques. Criterio: síntesis de las guías citadas en la sección de fuentes; no hay un ranking universal.*

![Comparación de tres flujos de trabajo: cascada con cinco fases en línea, Kanban con cuatro columnas de tablero y Scrum con tres pasos repetidos en sprints](/images/blog/diagramas/metodologias-agiles-scrum-kanban-y-cascada-para-quien-contrata-software-flujos.svg)

*Figura 2. Flujo básico de cada enfoque. En cascada el trabajo avanza fase por fase; en Kanban, por columnas; en Scrum, en sprints repetidos.*

## Métodos híbridos: combinar sin perder control

Muchos proveedores combinan enfoques. Un esquema frecuente es contratar el alcance general con fases de aprobación, mientras el equipo desarrolla por sprints dentro de cada fase. Otro es usar Scrum para construir funciones y Kanban para atender incidencias después del lanzamiento.

Un híbrido es válido si el contrato indica qué se entrega, cuándo y quién decide las prioridades. Lo que no conviene es un híbrido sin nombre: si el proveedor no puede explicar en qué parte del proyecto usa cada método, es una señal para pedir más detalle.

## Qué pedir al proveedor y qué observar

Un cliente no técnico puede evaluar el método a través de prácticas visibles. La siguiente tabla resume lo que conviene pedir y las señales que indican un problema.

| Qué pedir | Por qué sirve | Señal de alerta |
|---|---|---|
| Demos periódicas de lo construido | Permite ver funciones que realmente funcionan | Solo muestran diagramas o presentaciones |
| Backlog visible y priorizado | Muestra qué se hace y qué sigue | La lista de pendientes está oculta o sin prioridades |
| Definición de terminado escrita | Evita entregas a medias que se dan por cerradas | "Terminado" significa "programado", pero no probado |
| Objetivo claro para cada sprint o entrega | Da foco a cada ciclo | Objetivos genéricos como "avanzar con el sistema" |
| Acceso al tablero o a la herramienta de gestión | Da transparencia sobre el avance | Solo reciben reportes resumidos en PDF |
| Registro escrito de decisiones y cambios | Evita acuerdos verbales que luego se discuten | Los cambios se aceptan de palabra |

*Tabla 2. Qué pedir y qué observar en un proveedor. Elaboración propia a partir de las prácticas descritas en las guías citadas.*

## Cómo se refleja en plazos y costos

El método cambia la forma en que se ve el dinero y el tiempo, aunque no fija por sí solo una cifra. Con Scrum, el costo suele medirse por equipo y por periodo, y el alcance se ajusta en cada sprint según prioridades. Con cascada, el presupuesto se concentra en la cotización inicial, y cualquier cambio tardío suele costar más. Con Kanban, el ritmo depende de cuántas tareas puede terminar el equipo en un periodo, lo que facilita ver la capacidad real.

Por eso no conviene comparar propuestas solo por el nombre del método. Dos proveedores con Scrum pueden tener costos muy distintos si uno tiene un backlog claro y el otro no. Para entender cómo se traduce esto en precios y plazos, revisa la guía sobre [cuánto cuesta desarrollar una plataforma a medida en Perú](/blog/cuanto-cuesta-desarrollar-una-plataforma-a-medida-en-peru) y la de [cuánto tarda desarrollar un sistema a medida en Perú](/blog/cuanto-tarda-desarrollar-un-sistema-a-medida-en-peru).

## Errores comunes al elegir o evaluar un método

- **Pedir "ágil" y firmar un alcance cerrado** sin revisiones intermedias. Eso mezcla lo peor de ambos mundos.
- **Confundir sprint con fecha de entrega final.** El sprint es un ciclo de revisión; el lanzamiento depende de cuántos incrementos se acumulen.
- **Tener un Product Owner ausente.** Si nadie decide las prioridades, el equipo espera y el avance se frena.
- **Usar la velocidad del equipo para comparar proveedores.** Cada equipo estima de forma distinta, así que la cifra no sirve para comparar.
- **Cambiar de método a mitad del proyecto** sin acuerdo escrito sobre el alcance, el costo y los plazos.
- **Aceptar demos que no muestran nada que funcione** en un entorno real.

## Preguntas frecuentes

### ¿Qué es Scrum y para qué sirve?

Scrum es un marco para organizar el desarrollo en sprints de un mes o menos, con roles, eventos y artefactos definidos. Sirve para construir productos que cambian con el tiempo y necesitan revisiones frecuentes con el cliente.

### ¿Qué diferencia hay entre Scrum y Kanban?

Scrum trabaja en ciclos fijos y entrega incrementos al final de cada sprint. Kanban trabaja con un flujo continuo en un tablero, limitando el trabajo en curso. Scrum se adapta bien a la construcción de funciones nuevas; Kanban, a trabajo que llega sin orden, como incidencias.

### ¿Cuándo conviene la metodología cascada?

Conviene cuando el alcance es estable, los requisitos están bien documentados y los cambios tienen un costo alto o deben aprobarse formalmente. Si el problema se entiende mejor durante la construcción, suele ser menos flexible.

### ¿Un proyecto ágil es más barato que uno con cascada?

No necesariamente. El costo depende del alcance, del equipo y de la calidad de la gestión. Un proyecto ágil puede costar más si el cliente no revisa ni prioriza, y uno con cascada puede costar más si los cambios llegan tarde.

### ¿Qué debo pedir al proveedor si trabaja con Scrum?

Pide demos periódicas, un backlog visible y priorizado, una definición de terminado escrita y un objetivo claro para cada sprint. También conviene que el Product Owner esté disponible para tomar decisiones.

### ¿Se pueden combinar Scrum y Kanban en un mismo proyecto?

Sí. Es frecuente usar Scrum para construir funciones y Kanban para atender incidencias o tareas de soporte. Lo importante es que el proveedor explique en qué parte usa cada método.

### ¿Cómo se refleja el método en el costo final?

El método influye en cómo se mide el avance y en cuándo aparecen los costos de los cambios, pero el costo final depende del alcance, del equipo y de la gestión del proyecto. Una propuesta debe explicar cómo se controla cada una de esas variables.

## Glosario rápido

**Sprint:** ciclo de trabajo de duración fija, de un mes o menos, al final del cual debe existir un incremento usable.

**Product Owner:** responsable de priorizar el trabajo del equipo y de tomar las decisiones sobre el producto.

**Product Backlog:** lista ordenada de todo lo que podría construirse para el producto.

**Incremento:** suma de los elementos terminados durante un sprint, lista para revisarse.

**Definición de terminado:** criterios acordados que debe cumplir un elemento para considerarse completo.

**Daily Scrum:** reunión diaria corta en la que el equipo coordina el trabajo del día.

**WIP (trabajo en curso):** cantidad de tareas que están en proceso al mismo tiempo. Kanban busca limitarla.

*Última revisión: 14 de noviembre de 2026.*

## Lecturas relacionadas

- [Qué es un MVP y cómo validar una idea de software antes de invertir](/blog/que-es-un-mvp-y-como-validar-una-idea-de-software)
- [Qué es el desarrollo de software a medida: fases, metodologías y entregables](/blog/que-es-el-desarrollo-de-software-a-medida-fases-metodologias-y-entregables)
- [DevOps y CI/CD: qué son y por qué importan a tu empresa](/blog/devops-y-ci-cd-que-son-y-por-que-importan-a-tu-empresa)

## Fuentes y lecturas recomendadas

- Schwaber, K. y Sutherland, J., *The Scrum Guide*, edición 2020. https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf (se verificaron los roles, eventos y artefactos desde el índice del PDF).
- Autores del Manifiesto Ágil, *Manifesto for Agile Software Development*, 2001. https://agilemanifesto.org/ (los cuatro valores se citan del texto en inglés; la traducción es propia).
- Scrum.org, *The Kanban Guide for Scrum Teams*, edición 2021 según la página de la guía. https://www.scrum.org/resources/kanban-guide-scrum-teams
- Royce, W. W., "Managing the Development of Large Software Systems", IEEE WESCON, 1970. No se leyó el artículo original; la referencia proviene de la ficha de Wikipedia. https://en.wikipedia.org/wiki/Winston_W._Royce

Si quieres revisar qué método conviene a tu proyecto y qué pedir en la propuesta, puedes escribirnos desde la [página de contacto](/contacto). Si lo que necesitas es una plataforma para tu operación, también puedes revisar nuestro [servicio de plataformas](/servicios/plataformas).
