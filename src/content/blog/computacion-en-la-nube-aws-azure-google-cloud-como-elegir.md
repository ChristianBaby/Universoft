---
title: "Computación en la nube: cómo elegir entre AWS, Azure y Google Cloud en tu empresa"
seoTitle: "Nube: cómo elegir entre AWS, Azure y Google Cloud"
description: "Computación en la nube explicada: qué son IaaS, PaaS y SaaS, qué protege el proveedor y qué te toca a ti, y cómo comparar AWS, Azure y Google Cloud."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Plataformas"
cover: "/images/blog/computacion-en-la-nube-aws-azure-google-cloud-como-elegir-cover.webp"
coverAlt: "Ilustración de una nube conectada a servidores, símbolo de computación en la nube"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: true
reviewed: false
---
**Respuesta corta:** La computación en la nube consiste en usar servidores, plataformas y aplicaciones a través de internet, en general pagando según lo que consumes. Para elegir entre AWS, Azure y Google Cloud conviene empezar por el tipo de servicio que necesitas (IaaS, PaaS o SaaS), las herramientas que ya usa tu equipo, la región donde están tus usuarios y cuánto control quieres sobre la infraestructura. Ningún proveedor es el mejor en todos los casos; la decisión depende de tu empresa.

Muchas empresas peruanas llegan a la nube por una necesidad concreta: el sistema de ventas se vuelve lento en temporada alta, el equipo necesita trabajar desde casa o los respaldos ya no caben en el servidor de la oficina. El problema aparece cuando la elección del proveedor se toma por recomendación de un conocido o por publicidad, sin revisar qué servicios se necesitan, dónde quedan los datos y quién va a administrar la plataforma después.
## Qué es la computación en la nube y qué significan IaaS, PaaS y SaaS

La nube es un modelo en el que tu empresa obtiene recursos de cómputo, almacenamiento o aplicaciones desde la infraestructura de un proveedor, en lugar de comprarlos y mantenerlos en su propia oficina o centro de datos. La diferencia está en cuánto de esa pila tecnológica administras tú y cuánto administra el proveedor. Por eso se habla de tres modelos de servicio.

- **IaaS (infraestructura como servicio):** alquilas la base: máquinas virtuales, redes y almacenamiento. Tú decides el sistema operativo, las aplicaciones y la configuración. Ejemplos de la documentación de Azure son las máquinas virtuales, los discos y las redes virtuales.
- **PaaS (plataforma como servicio):** despliegas tu aplicación sobre un entorno ya preparado, sin administrar máquinas virtuales ni sistemas operativos. Azure menciona como ejemplos App Service, Azure Functions, Azure SQL Database y Azure Storage.
- **SaaS (software como servicio):** usas una aplicación lista para trabajar, como Microsoft 365 o Dynamics 365, según la misma documentación de Microsoft.

En la práctica, muchas empresas combinan los tres. La siguiente figura resume quién gestiona cada capa en cada modelo, según la matriz de responsabilidades publicada por Microsoft.

![Diagrama de capas que muestra qué gestiona el cliente y qué gestiona el proveedor en IaaS, PaaS y SaaS](/images/blog/diagramas/computacion-en-la-nube-aws-azure-google-cloud-como-elegir-capas.svg)

*Figura 1. Quién gestiona cada capa en IaaS, PaaS y SaaS. Elaboración propia basada en la matriz de responsabilidades de Microsoft Azure.*

## El modelo de responsabilidad compartida: qué protege el proveedor y qué te toca a ti

Ningún proveedor de nube asume toda la seguridad de tu empresa. Todos describen un modelo de responsabilidad compartida: el proveedor protege la infraestructura que opera, y el cliente protege lo que configura, lo que almacena y quién accede a ello. AWS lo resume así: protege la infraestructura que ejecuta sus servicios, mientras que la seguridad "en la nube" depende de los servicios que elijas y de cómo los configures.

La diferencia práctica se ve al comparar dos tipos de servicio de AWS. En una máquina virtual de EC2, el cliente debe realizar toda la configuración de seguridad y la administración, incluidas las actualizaciones y parches del sistema operativo. En servicios más abstraídos como S3 o DynamoDB, AWS gestiona más capas y la responsabilidad del cliente se concentra en los datos, el cifrado y los permisos de acceso.

Microsoft describe algunas responsabilidades que siempre conservas, sin importar el modelo: tus datos, tus identidades y cuentas, la gestión de accesos y los dispositivos desde los que se conectan tus usuarios. La siguiente figura muestra esa división de forma simple.

![Diagrama del modelo de responsabilidad compartida con dos bandas: seguridad del proveedor y seguridad del cliente](/images/blog/diagramas/computacion-en-la-nube-aws-azure-google-cloud-como-elegir-responsabilidad.svg)

*Figura 2. Modelo de responsabilidad compartida. La banda superior la gestiona el proveedor; la inferior, la empresa que contrata el servicio.*

Esto tiene una consecuencia directa: migrar a la nube no elimina el trabajo de seguridad, lo redistribuye. Si una cuenta de administrador queda sin autenticación multifactor o un bucket de almacenamiento se publica por error, el problema es del cliente, aunque el proveedor tenga una infraestructura muy protegida.

## Cómo comparar AWS, Azure y Google Cloud sin caer en "el mejor"

Los tres proveedores ofrecen una gran cantidad de servicios y regiones en todo el mundo. Por eso, una comparación útil no busca un ganador general, sino responde a criterios de tu empresa. La siguiente tabla resume los criterios que suelen pesar más en una pyme o en una empresa mediana. Donde la documentación oficial no permite una afirmación general, la tabla lo indica para que lo verifiques en tu caso.

| Criterio | AWS | Microsoft Azure | Google Cloud |
|---|---|---|---|
| Amplitud del catálogo de servicios | Catálogo extenso, con servicios para casi cualquier necesidad técnica | Catálogo extenso, con buena integración con productos Microsoft | Catálogo extenso; revisa en su documentación los servicios de datos que necesitas |
| Integración con Microsoft 365 | Posible, pero requiere configuración adicional de identidades | Natural: toda suscripción de Microsoft 365 ya usa Microsoft Entra ID como directorio | Posible, con integración vía identidades y herramientas propias |
| Identidad y accesos | Servicio IAM propio | Microsoft Entra ID, que es la misma identidad de Microsoft 365 | Cloud Identity e IAM propios |
| Facilidad para una pyme sin área de TI | Depende del partner o del equipo que lo administre | Suele ser más sencillo si la empresa ya administra Microsoft 365 | Depende del equipo; verifica la curva de aprendizaje con tu proveedor |
| Regiones en Sudamérica | São Paulo | São Paulo, Santiago y Río (acceso restringido) | São Paulo y Santiago |
| Soporte en español | Verificar en el plan contratado | Verificar en el plan contratado | Verificar en el plan contratado |

*Tabla 1. Criterios de comparación. Las celdas describen diferencias de enfoque según la documentación oficial revisada; no son un ranking.*

Sobre el soporte en español no encontramos una respuesta general en la documentación pública: depende del plan contratado, así que conviene pedirlo por escrito antes de decidir.

Para convertir la tabla en una decisión, la siguiente tabla propone puntos de partida según la situación de la empresa. Son orientaciones, no reglas.

| Situación de tu empresa | Punto de partida razonable | Qué verificar antes de firmar |
|---|---|---|
| Ya usas Microsoft 365 y administras usuarios en Microsoft Entra ID | Azure, por la continuidad de identidades y licencias | Licencias, roles de administrador y región elegida |
| Tu equipo técnico ya trabaja con un proveedor | Ese proveedor, salvo que falte algún servicio clave | Servicios disponibles en la región que necesitas |
| Necesitas servicios especializados y tienes experiencia en la nube | AWS, si los servicios que requieres están en su documentación | Costos de cada servicio y capacitación del equipo |
| Tu proyecto depende de herramientas de Google | Google Cloud | Compatibilidad con tus sistemas actuales |
| No tienes equipo técnico interno | Un proveedor de servicios gestionados que opere cualquiera de las tres plataformas | Contrato, soporte en español, responsabilidades y salida |

*Tabla 2. Qué elegir según tu caso. Los puntos de partida son orientativos y deben validarse con tu equipo o con un proveedor especializado.*

## Regiones cerca de Perú: qué confirmamos y qué no

La región donde se alojan tus datos afecta la latencia, la disponibilidad del servicio y, en algunos casos, los requisitos de cumplimiento. Para esta guía revisamos las listas oficiales de regiones de AWS y Azure, y la documentación de Google Cloud, el 14 de noviembre de 2026. Esto es lo que pudimos confirmar:

| Proveedor | Región | Ubicación | Observación |
|---|---|---|---|
| AWS | sa-east-1 (South America) | São Paulo, Brasil | Es la única región de Sudamérica en la lista oficial de AWS, y no requiere habilitación previa |
| Azure | brazilsouth (Brazil South) | Estado de São Paulo, Brasil | Tiene 3 zonas de disponibilidad y está pareada con South Central US |
| Azure | chilecentral (Chile Central) | Santiago, Chile | Tiene 3 zonas de disponibilidad y no tiene región pareada |
| Azure | brazilsoutheast (Brazil Southeast) | Río de Janeiro, Brasil | Acceso restringido a escenarios específicos, como recuperación ante desastres |
| Google Cloud | southamerica-east1 | São Paulo, Brasil | Documentada en la página de ubicaciones de productos de Google Cloud |
| Google Cloud | southamerica-west1 | Santiago, Chile | Documentada en la página de ubicaciones de productos de Google Cloud |

*Tabla 3. Regiones de Sudamérica confirmadas en la documentación oficial. Ningún proveedor de esta tabla es el más cercano en todos los casos; la latencia depende de tu red y de tu operador.*

Dos aclaraciones importantes. Primera: en las listas oficiales de AWS y Azure que revisamos no aparece ninguna región en Perú. Segunda: la disponibilidad de cada servicio cambia según la región. Antes de elegir una región, revisa que los servicios que necesitas estén disponibles en ella.

## Costos y cómo evitar sorpresas: FinOps básico

La nube convierte un gasto fijo en un gasto variable, y eso también puede generar facturas que nadie anticipó. El FinOps Foundation define FinOps como un marco operativo y una práctica cultural que maximiza el valor de negocio de la tecnología, y pone énfasis en la colaboración entre ingeniería, finanzas y áreas de negocio.

En una pyme no hace falta un equipo especializado para empezar. Estas prácticas básicas ayudan a evitar la mayoría de las sorpresas:

- **Etiqueta cada recurso** con el proyecto, el área responsable y el entorno (producción, pruebas o desarrollo). Sin etiquetas, nadie sabe qué costo le corresponde a cada sistema.
- **Configura presupuestos y alertas** en cada cuenta o suscripción, para recibir aviso antes de que el consumo se dispare.
- **Apaga o reduce los entornos de prueba** fuera del horario de trabajo, si el proveedor y tu aplicación lo permiten.
- **Revisa el consumo cada mes** con una persona responsable. Un costo que nadie revisa suele crecer sin control.
- **Compara la estimación antes de desplegar** con la calculadora de precios de cada proveedor, por servicio y región.

El costo total incluye capacitación, soporte y tiempo de migración, no solo la factura mensual.

## Seguridad: lo que cambia y lo que sigue siendo tuyo

La seguridad física del centro de datos pasa a ser responsabilidad del proveedor, pero la configuración de accesos, la protección de datos y los dispositivos siguen siendo tuyos.

Algunas medidas básicas que conviene establecer desde el inicio:

- Activar autenticación multifactor para todos los administradores y, después, para todos los usuarios.
- Aplicar el principio de mínimo privilegio: cada persona tiene solo los permisos que necesita para su trabajo.
- Definir quién puede crear recursos públicos y bajo qué condiciones.

Si tu empresa usa Microsoft 365, es importante revisar cómo se integrará la identidad. Microsoft indica que toda suscripción de Microsoft 365, Azure o Dynamics 365 ya usa Microsoft Entra ID como directorio, por lo que la administración de usuarios puede centralizarse. Esa centralización es una ventaja, pero también significa que un error de configuración afecta a más sistemas a la vez.

## Cuándo no conviene migrar

La nube no es la respuesta para todos los casos. Hay situaciones en las que conviene esperar, replantear la migración o mantener parte de la infraestructura en local:

- **El sistema depende de equipos o conexiones locales** que no pueden moverse, como un equipo especializado conectado a una máquina física.
- **No tienes quién administre la plataforma** ni un proveedor que lo haga por ti. Una nube mal administrada puede ser más riesgosa que un servidor bien cuidado.
- **Tu carga es pequeña y estable** y el costo mensual de la nube supera lo que pagarías por mantener la solución como está. Conviene hacer esta comparación con números reales, no con intuiciones.
- **El proceso aún no está definido.** Migrar una operación desordenada solo traslada el desorden a otro lugar.
- **Hay requisitos contractuales o regulatorios** sobre la ubicación de los datos que todavía no se han revisado. En ese caso, primero hay que revisar la norma aplicable, como la Ley de Protección de Datos Personales en el Perú.

## Errores comunes al elegir un proveedor de nube

- **Elegir por marca o por recomendación sin comparar servicios.** Lo que importa es que tu sistema tenga todos los servicios que necesita en la región correcta.
- **Dar permisos de administrador a todo el equipo.** Es una de las causas más frecuentes de incidentes en entornos cloud.
- **Migrar todo de una vez.** Una migración por fases reduce el riesgo y permite corregir errores antes de afectar a toda la operación.
- **No medir el costo después de desplegar.** Un presupuesto mensual sin revisión no sirve como control.
## Preguntas frecuentes

### ¿La nube es más segura que un servidor en mi oficina?

Depende de la configuración. Los proveedores protegen su infraestructura física y de red, pero la seguridad de tus cuentas, tus datos y tus accesos sigue siendo responsabilidad de tu empresa. Una nube bien configurada puede ser más segura que un servidor local sin mantenimiento; una nube mal configurada puede exponer información con mucha facilidad.

### ¿Necesito un equipo técnico para usar AWS, Azure o Google Cloud?

No necesariamente para empezar, pero sí alguien responsable de administrar cuentas, permisos, costos y respaldos. Muchas pymes contratan a un proveedor de servicios gestionados que opere la plataforma por ellas. Lo importante es que la responsabilidad esté definida por escrito.

### ¿Qué tan importante es la región para mi empresa?

Es importante por la latencia, por la disponibilidad de servicios y por los requisitos de cumplimiento de tus datos. Antes de elegir, confirma que el servicio que necesitas esté disponible en la región y revisa la norma aplicable a tu sector.

### ¿Cómo sé si mi costo mensual en la nube es razonable?

Compara el costo con el valor que genera el sistema: cuántas operaciones procesa, cuánto tiempo ahorra al equipo y cuánto cuesta mantenerlo en local. Revisa el consumo por etiqueta y por servicio cada mes, y ajusta lo que esté sobredimensionado.

### ¿Qué pasa con mis datos si cambio de proveedor en el futuro?

Depende del servicio y del contrato. Antes de firmar, pregunta por los formatos de exportación, los tiempos de salida y las condiciones de eliminación de datos. Un proveedor que no responde estas preguntas con claridad es un riesgo que conviene considerar.

## Glosario rápido

**IaaS:** Infraestructura como servicio. Alquilas máquinas virtuales, redes y almacenamiento, y administras el sistema operativo y las aplicaciones.

**PaaS:** Plataforma como servicio. Despliegas aplicaciones sobre un entorno administrado por el proveedor.

**SaaS:** Software como servicio. Usas una aplicación lista para trabajar, sin administrar su infraestructura.

**Región:** Zona geográfica donde un proveedor opera centros de datos. Cada región tiene un catálogo de servicios que puede ser distinto.

**Zona de disponibilidad:** Centro de datos independiente dentro de una región. Desplegar en varias zonas reduce el riesgo de caída total.

**Responsabilidad compartida:** Modelo en el que el proveedor protege la infraestructura y el cliente protege sus datos, identidades y configuraciones.

**FinOps:** Práctica que combina finanzas, tecnología y negocio para gestionar y optimizar el costo de la nube.

## Fuentes y lecturas recomendadas

- Microsoft Learn. "List of Azure Regions" (regiones, zonas de disponibilidad y ubicaciones). Microsoft, 2026. https://learn.microsoft.com/en-us/azure/reliability/regions-list
- Amazon Web Services. "AWS Regions and Availability Zones" (lista de regiones y estado de habilitación). AWS, 2026. https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html
- Google Cloud. "Cloud locations" (cantidad de regiones y página de productos por región). Google, 2026. https://cloud.google.com/about/locations
- Google Cloud. "Cloud Logging: Locations" (región southamerica-west1). Google, 2026. https://docs.cloud.google.com/logging/docs/region-support
- Google Cloud. "Workstations: Locations" (región de São Paulo). Google, 2026. https://docs.cloud.google.com/workstations/docs/locations
- Microsoft Learn. "Shared responsibility in the cloud" (matriz de responsabilidades y modelos IaaS, PaaS y SaaS). Microsoft, 2026. https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility
- Amazon Web Services. "Shared Responsibility Model" (seguridad de la nube y seguridad en la nube). AWS. https://aws.amazon.com/compliance/shared-responsibility-model/
- Microsoft Learn. "What is Microsoft Entra?" (identidad de Microsoft 365 y Azure). Microsoft, 2026. https://learn.microsoft.com/en-us/entra/fundamentals/what-is-entra
- FinOps Foundation. "What is FinOps?" (definición y principios). FinOps Foundation. https://www.finops.org/introduction/what-is-finops/

No encontramos en las fuentes revisadas cifras públicas verificadas de precios comparados entre los tres proveedores, por lo que esta guía no incluye montos.

Si quieres revisar qué opción encaja con tus sistemas actuales, puedes escribirnos desde la [página de contacto](/contacto). También puedes conocer nuestro trabajo en [servicios de plataformas](/servicios/plataformas).

Relacionados: [RPA, low-code o software a medida: cómo automatizar los procesos de tu empresa](/blog/rpa-low-code-o-software-a-medida-como-automatizar-procesos), [Automatización de procesos: cómo una plataforma reduce costos](/blog/automatizacion-de-procesos-como-una-plataforma-reduce-costos), [Integración de sistemas: cómo conectar tus plataformas sin perder datos](/blog/integracion-de-sistemas-como-conectar-tus-plataformas-sin-perder-datos), [Software a medida vs. soluciones genéricas](/blog/software-a-medida-vs-soluciones-genericas) y [Cuánto cuesta desarrollar una plataforma a medida en Perú](/blog/cuanto-cuesta-desarrollar-una-plataforma-a-medida-en-peru).
