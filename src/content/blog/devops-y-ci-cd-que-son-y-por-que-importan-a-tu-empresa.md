---
title: "DevOps y CI/CD: qué son y por qué importan a tu empresa"
seoTitle: "¿Qué es DevOps? CI/CD explicado para empresas"
description: "Qué es DevOps, cómo funciona un pipeline CI/CD, qué miden las métricas DORA y qué preguntar a tu proveedor de software antes de contratarlo."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Software"
cover: "/images/blog/devops-y-ci-cd-que-son-y-por-que-importan-a-tu-empresa-cover.webp"
coverAlt: "Ilustración de un bucle infinito de luz con etapas de un pipeline, símbolo de DevOps y entrega continua"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: false
reviewed: true
---

## Respuesta corta

DevOps es una forma de trabajar que une al equipo que desarrolla un software con el que lo opera, para entregar cambios con más frecuencia y con menos riesgo. CI/CD es la parte automatizada de ese enfoque: un pipeline que prueba, construye y publica cada cambio, combinando integración continua con entrega o despliegue continuo. Para una empresa, el valor está en detectar errores antes de que lleguen a los clientes, lanzar mejoras con menos esperas y poder revertir un cambio que falla. Las herramientas ayudan, pero el proceso y las personas son lo que determina el resultado.

## Puntos clave

- DevOps une a quienes desarrollan y a quienes operan el software para compartir la responsabilidad por el resultado.
- CI/CD automatiza el camino del código: pruebas, construcción y despliegue.
- Un pipeline típico tiene cinco etapas: código, pruebas automáticas, construcción, despliegue y monitoreo.
- Los entornos de desarrollo, pruebas y producción permiten validar un cambio antes de publicarlo.
- Las métricas DORA miden qué tan rápido y qué tan estable es el proceso de entrega.
- Antes de contratar, pide por escrito cómo se prueba, se despliega y se revierte cada cambio.

Es común que un cambio pequeño, como ajustar el módulo de reservas o de facturación, tarde semanas en llegar a producción. Cuando finalmente se publica, la coordinación de pruebas manuales, ventanas de mantenimiento y permisos vuelve el proceso lento, y un error puede obligar a detener el sistema sin saber con certeza qué cambió. DevOps y CI/CD buscan reducir esa fricción sin perder control.

## ¿Qué es DevOps?

DevOps es un conjunto de prácticas, herramientas y una forma de colaborar en la que el equipo que desarrolla el software y el que lo opera comparten objetivos. En un esquema tradicional, desarrollo busca lanzar cambios rápido y operaciones busca estabilidad, y cada grupo puede trabajar con reglas distintas y pasarse el problema. DevOps propone que ambos respondan por el resultado final: un sistema que funciona para el usuario y que puede cambiar sin romperse.

GitLab describe CI/CD como una práctica DevOps que automatiza la construcción, las pruebas y el despliegue de los cambios de código. Por eso ambos términos se mencionan juntos, aunque no son lo mismo: DevOps es una forma de organizar el trabajo, y CI/CD es el conjunto de prácticas técnicas que la hacen posible.

## ¿Qué es CI/CD?

CI/CD son dos prácticas que suelen trabajar juntas. La sigla no distingue entre dos variantes del último paso, y esa ambigüedad es la confusión más común.

**Integración continua (CI).** Los desarrolladores integran sus cambios a una rama principal con la mayor frecuencia posible. Cada integración se verifica con una construcción y pruebas automáticas, así los errores aparecen pronto. La documentación de Google Cloud sobre entrega continua en Kubernetes describe la integración continua con esa misma idea.

**Entrega continua (CD).** El código queda siempre listo para desplegarse, y una persona decide cuándo publicarlo. GitLab indica que, en la entrega continua, el despliegue final a producción se hace de forma manual.

**Despliegue continuo (CD).** Cada cambio que pasa las pruebas se publica en producción sin aprobación humana. Atlassian explica que la entrega continua permite una aprobación manual antes de producción, mientras que el despliegue continuo no la incluye.

Para una empresa, la pregunta clave es quién aprueba la salida a producción. La herramienta no decide eso: lo decide la política de cambios de la organización.

## Cómo funciona un pipeline CI/CD

Un pipeline es la secuencia automática de pasos que se activa cuando alguien envía un cambio al repositorio. En GitHub Actions, por ejemplo, un workflow es un proceso automatizado definido en un archivo dentro de `.github/workflows`; se compone de jobs (trabajos) y steps (pasos), y se activa con los eventos que indica la clave `on`. Azure Pipelines, de Microsoft, describe el mismo principio: combina integración continua, pruebas continuas y entrega continua para construir, probar y desplegar el código.

La siguiente tabla resume las etapas típicas. La secuencia exacta cambia según el proyecto y la herramienta.

| Etapa | Qué hace | Si algo falla |
|---|---|---|
| Código | Los cambios se envían al repositorio y se integran a la rama principal | El cambio se corrige antes de avanzar |
| Pruebas automáticas | Ejecutan las pruebas que define el equipo, como unitarias, de integración y de seguridad | El pipeline se detiene y avisa a quien hizo el cambio |
| Construcción | Se genera el artefacto, es decir, el paquete o la versión lista para desplegar | No se crea el artefacto y no avanza el proceso |
| Despliegue | El artefacto se publica en un entorno, de pruebas o de producción | Se detiene la publicación o se revierte a la versión anterior |
| Monitoreo | Se observan errores, tiempos de respuesta y uso después de publicar | Se alerta al equipo para corregir o revertir |

*Tabla 1. Etapas típicas de un pipeline CI/CD. Es una descripción general; los detalles dependen del proyecto y de la herramienta.*

Atlassian señala además que un pipeline de despliegue continuo debe poder deshacer un despliegue si algo sale mal. Esa capacidad de reversión es la que evita que la automatización se convierta en un riesgo.

## Entornos y promoción: de desarrollo a producción

Un entorno es un lugar donde corre el sistema con un propósito determinado. Los tres más comunes son:

- **Desarrollo:** donde el equipo programa y prueba cambios individuales.
- **Pruebas (o staging):** una copia lo más parecida posible a producción, donde se valida el conjunto de cambios antes de publicarlo.
- **Producción:** el sistema que usan tus clientes y tus empleados.

La promoción es el paso de un cambio de un entorno al siguiente, solo después de superar las validaciones del anterior. Atlassian describe las etapas de un pipeline como fases que pueden corresponder a hitos de entorno, como pruebas, staging y producción. La figura muestra esa relación.

![Diagrama del pipeline CI/CD: cinco etapas en línea con retroalimentación, y debajo los entornos de desarrollo, pruebas y producción conectados por aprobación](/images/blog/diagramas/devops-y-ci-cd-que-son-y-por-que-importan-a-tu-empresa-pipeline.svg)

*Figura 1. Pipeline CI/CD con promoción entre entornos. Cada cambio avanza al siguiente entorno solo si supera las pruebas de la etapa anterior.*

Si un error llega a producción, conviene preguntar por qué el pipeline no lo detuvo, antes que buscar a quién culpar.

## Métricas DORA: cómo saber si el proceso mejora

Las métricas DORA son un conjunto de indicadores para medir el rendimiento de la entrega de software; sus definiciones vigentes se publican en dora.dev. El modelo actual tiene cinco métricas. Además, el antiguo indicador de tiempo medio de recuperación (MTTR) se renombró como tiempo de recuperación de despliegues fallidos, y se agregó la tasa de retrabajo de despliegues. Por eso, según la guía que consultes, verás nombres distintos.

| Métrica (nombre en dora.dev) | Pregunta que responde | Qué observar |
|---|---|---|
| Tiempo de entrega de cambios (change lead time) | ¿Cuánto tarda un cambio desde que se guarda en el control de versiones hasta producción? | Si un ajuste sencillo tarda semanas, hay cuellos de botella en el proceso |
| Frecuencia de despliegue (deployment frequency) | ¿Cuántas veces se publica en un periodo? | Publicar cambios pequeños con frecuencia suele facilitar encontrar la causa de un fallo |
| Tasa de fallos de cambios (change fail rate) | ¿Qué porcentaje de despliegues requiere corrección inmediata, como una reversión o un parche urgente? | Muestra si las pruebas detectan los problemas a tiempo |
| Tiempo de recuperación de despliegues fallidos (failed deployment recovery time) | ¿Cuánto tarda el equipo en restablecer el servicio cuando un despliegue falla? | Mide qué tan rápido vuelven a funcionar las cosas para el usuario |
| Tasa de retrabajo de despliegues (deployment rework rate) | ¿Qué porcentaje de despliegues no planificados surge de un incidente en producción? | Separa las publicaciones planificadas de las correcciones urgentes |

*Tabla 2. Métricas DORA según dora.dev, con los nombres vigentes. Las guías antiguas usan otros nombres para las mismas ideas.*

Estas métricas funcionan como un ciclo: se miden, se identifica el cuello de botella, se mejora el proceso y se vuelve a medir.

![Diagrama circular con cuatro pasos: cambiar código, probar y desplegar, medir con DORA y mejorar el proceso](/images/blog/diagramas/devops-y-ci-cd-que-son-y-por-que-importan-a-tu-empresa-ciclo.svg)

*Figura 2. Ciclo de mejora continua. Las métricas DORA alimentan la siguiente decisión sobre el proceso de entrega.*

Conviene usar estas métricas para compararte contigo mismo a lo largo del tiempo, no para ordenar equipos con contextos distintos.

## Beneficios para tu empresa

- **Menos errores llegan a los usuarios.** Cada cambio pasa por pruebas automáticas antes de publicarse, aunque estas no reemplazan las pruebas con usuarios.
- **Cambios más pequeños.** Publicar en lotes pequeños facilita identificar qué causó un problema.
- **Reversión más clara.** Si una versión falla, el pipeline puede volver a la anterior.
- **Trazabilidad.** Queda registrado quién cambió qué, qué pruebas pasó y cuándo se publicó.
- **Menos dependencia de una persona.** El proceso vive en el pipeline y en la documentación, no solo en la memoria de un técnico.

Cuando el pipeline debe conectarse con sistemas que ya usas, como un CRM o un módulo de facturación, el trabajo previo de integración define si los datos fluyen sin pérdidas. Lo explicamos en [integración de sistemas: cómo conectar tus plataformas sin perder datos](/blog/integracion-de-sistemas-como-conectar-tus-plataformas-sin-perder-datos).

## Herramientas: GitHub Actions, GitLab CI/CD y Azure Pipelines

Tres opciones con documentación oficial son GitHub Actions, GitLab CI/CD y Azure Pipelines, que forma parte de Azure DevOps. Microsoft indica que Azure Pipelines funciona con cualquier lenguaje o plataforma y que corre en Windows, Linux o macOS. Ninguna herramienta es la mejor en todos los casos: la elección depende de dónde esté tu código, a qué destinos necesitas desplegar y qué sabe administrar tu equipo o tu proveedor. Si el sistema también vivirá en la nube, conviene comparar primero los proveedores; una guía para hacerlo está en [computación en la nube: cómo elegir entre AWS, Azure y Google Cloud](/blog/computacion-en-la-nube-aws-azure-google-cloud-como-elegir).

## Qué preguntar a tu proveedor de software

Si un proveedor desarrolla o mantiene tu sistema, estas preguntas revelan rápido si existe un proceso real:

- ¿Quién es dueño del repositorio de código y de la cuenta del pipeline?
- ¿Qué pruebas automáticas se ejecutan antes de cada publicación?
- ¿Existe un entorno de pruebas separado de producción?
- ¿Quién aprueba el paso a producción?
- ¿Cómo se revierte un despliegue que falla, y cuánto tiempo toma?
- ¿Dónde se guardan las contraseñas y llaves de acceso que usa el pipeline?
- ¿Qué indicadores de entrega se revisan cada mes?

Las respuestas deben quedar por escrito, en el contrato o en la documentación entregable. Para planificar lo que viene después del lanzamiento, revisa [cuánto cuesta el mantenimiento de un sistema después de lanzarlo](/blog/cuanto-cuesta-el-mantenimiento-de-un-sistema-despues-de-lanzarlo).

## Errores comunes

- **Automatizar sin pruebas.** Un pipeline que solo despliega rápido también publica errores rápido.
- **Probar directamente en producción.** Sin un entorno de pruebas separado, cada error llega a los clientes.
- **Guardar contraseñas o llaves en el código o en el archivo del pipeline.** Cualquier persona con acceso al repositorio podría usarlas. Para el control de accesos, revisa [buenas prácticas de ciberseguridad para empresas](/blog/buenas-practicas-ciberseguridad-empresas).
- **No definir cómo se revierte un despliegue.** La reversión debe estar preparada antes de necesitarla.
- **Medir solo la velocidad.** Publicar más rápido sin vigilar la estabilidad aumenta el riesgo.
- **Pensar que la herramienta reemplaza el cambio de forma de trabajar.** Sin acuerdos entre desarrollo y operaciones, el pipeline solo automatiza el desorden.

## Preguntas frecuentes

### ¿Qué es DevOps en una frase?

DevOps es una forma de trabajar en la que desarrollo y operaciones comparten la responsabilidad de que un sistema funcione y pueda cambiar con frecuencia y seguridad.

### ¿Necesito DevOps si mi sistema es pequeño?

No necesariamente. Un sistema con cambios poco frecuentes puede funcionar bien con un proceso sencillo. CI/CD aporta más valor cuando los cambios son frecuentes o cuando un error tiene un costo alto para el negocio.

### ¿Qué diferencia hay entre entrega continua y despliegue continuo?

En la entrega continua el código queda listo y una persona aprueba la salida a producción. En el despliegue continuo, los cambios que pasan las pruebas se publican solos.

### ¿CI/CD reemplaza las pruebas que hace mi equipo?

No. Las pruebas automáticas cubren lo que se pudo automatizar; las pruebas con usuarios y la revisión de negocio siguen siendo necesarias.

### ¿Cuánto tiempo toma implementar CI/CD?

No hay datos públicos verificados para Perú que permitan dar un plazo general. Depende del tamaño del sistema, de la calidad de sus pruebas y de si el código ya está versionado en un repositorio.

### ¿Qué herramienta de CI/CD conviene a mi empresa?

Depende de dónde esté tu código y de a qué destinos necesitas desplegar. Pide a tu proveedor que justifique la elección y que la documente por escrito.

## Glosario rápido

**DevOps:** Forma de trabajar que une a quienes desarrollan y a quienes operan el software.

**Integración continua (CI):** Práctica de integrar cambios de código con frecuencia y verificarlos con pruebas automáticas.

**Entrega continua (CD):** El código queda listo para publicarse en cualquier momento, y una persona decide cuándo.

**Despliegue continuo:** Cada cambio que pasa las pruebas se publica en producción sin aprobación manual.

**Pipeline:** Secuencia automática de pasos que prueba, construye y despliega un cambio.

**Entorno de pruebas (staging):** Copia de validación del sistema, usada antes de publicar en producción.

**Artefacto:** Paquete o versión construida que se despliega.

**Métricas DORA:** Indicadores de velocidad y estabilidad de la entrega de software.

*Última revisión: 14 de noviembre de 2026.*

## Lecturas relacionadas

- [Microservicios vs monolito: qué arquitectura conviene a tu empresa](/blog/microservicios-vs-monolito-que-arquitectura-conviene-a-tu-empresa)
- [Metodologías ágiles: Scrum, Kanban y cascada para quien contrata software](/blog/metodologias-agiles-scrum-kanban-y-cascada-para-quien-contrata-software)

## Fuentes y lecturas recomendadas

- Google Cloud. "Best practices for continuous integration and delivery to Google Kubernetes Engine". Google Cloud, s. f. https://docs.cloud.google.com/kubernetes-engine/docs/concepts/best-practices-continuous-integration-delivery-kubernetes
- DORA. "DORA metrics" (guía de métricas). DORA, s. f. https://dora.dev/guides/dora-metrics/
- DORA. Historia de las métricas DORA (cambios de nombre y del modelo). DORA, s. f. https://dora.dev/insights/dora-metrics-history/
- GitLab. Tema "CI/CD". GitLab, s. f. https://about.gitlab.com/topics/ci-cd/
- Atlassian. "Continuous Delivery Pipeline 101". Atlassian, s. f. https://www.atlassian.com/continuous-delivery/principles/pipeline
- Atlassian. "What Is Continuous Deployment?". Atlassian, s. f. https://www.atlassian.com/continuous-delivery/software-testing/continuous-deployment
- GitHub Docs. "Workflows" (GitHub Actions). GitHub, s. f. https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows
- Microsoft Learn. "What is Azure Pipelines?". Microsoft, 2026. https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines

Si quieres revisar cómo se entregan los cambios en tu sistema actual, puedes escribirnos desde la [página de contacto](/contacto). También puedes conocer nuestro trabajo en [servicios de plataformas](/servicios/plataformas).
