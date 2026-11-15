---
title: "Qué es el desarrollo de software a medida: fases, metodologías y entregables"
seoTitle: "Desarrollo de software a medida: fases y entregables"
description: "Qué es el desarrollo de software a medida, sus seis fases, los entregables que debes recibir, los modelos de contratación y los riesgos a vigilar."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Software"
cover: "/images/blog/que-es-el-desarrollo-de-software-a-medida-fases-metodologias-y-entregables-cover.webp"
coverAlt: "Ilustración de bloques de código que se ensamblan en una aplicación a medida sobre una cuadrícula de planos, símbolo de desarrollo de software a medida"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: false
reviewed: true
---

## Respuesta corta

El desarrollo de software a medida es la creación de un sistema diseñado para los procesos, reglas y usuarios de una empresa, en lugar de adaptar la operación a un producto genérico. Suele avanzar por seis fases (descubrimiento, diseño, desarrollo, pruebas, despliegue y soporte), y cada una debería dejar entregables que puedas revisar. Antes de firmar conviene confirmar qué recibirás al final, quién conserva los derechos sobre el código y qué modelo de contratación se ajusta al alcance.

## Puntos clave

- El desarrollo de software a medida, también llamado software personalizado, parte de los procesos reales de tu empresa.
- El ciclo de vida suele tener seis fases, y cada una debe producir un entregable verificable.
- Como cliente deberías recibir código fuente, documentación técnica, manual de usuario y accesos a nombre de la empresa.
- Los modelos más comunes son precio cerrado, tiempo y materiales y equipo dedicado; cada uno reparte el riesgo de forma distinta.
- La titularidad del código debe quedar escrita en el contrato y no conviene darla por supuesta.
- Los cambios de alcance son la fuente más frecuente de retrasos y se controlan con un registro de requisitos y criterios de aceptación.

Muchas empresas peruanas llegan al desarrollo de un sistema después de intentar resolver el problema con hojas de cálculo, con un programa comprado que no encaja o con un sistema antiguo que nadie quiere tocar. Cuando se decide construir una solución propia aparecen preguntas prácticas: cuánto tarda, qué recibe la empresa al final y quién es dueño de lo que se programa. Un proyecto que no responde esas preguntas desde el inicio suele terminar con retrasos, costos mayores a los previstos y un código que solo entiende el proveedor.

Esta guía explica el concepto, las fases, los entregables, los modelos de contratación y los riesgos más comunes. No es asesoría legal ni fija precios: para cifras de costos y plazos revisa las guías enlazadas al final.

## ¿Qué es el desarrollo de software a medida?

El desarrollo de software a medida es el proceso de diseñar, construir, probar y mantener una aplicación o sistema pensado para los procesos, reglas y usuarios de una organización específica. A diferencia de un producto de estante, el sistema se ajusta a la empresa y no al revés.

Esto no significa que todo deba construirse desde cero. Muchos proyectos usan librerías, servicios en la nube y componentes existentes, y programan a medida solo lo que aporta una ventaja propia. Por eso conviene distinguir qué partes son diferenciadoras y cuáles pueden comprarse. El artículo [software a medida frente a soluciones genéricas](/blog/software-a-medida-vs-soluciones-genericas) profundiza en esa decisión.

Para el cliente, el resultado de un proyecto es un conjunto de piezas: el sistema en funcionamiento, el código que lo sostiene, la documentación que permite entenderlo y los accesos para operarlo. La calidad de la relación con el proveedor depende en gran medida de que esas piezas estén definidas desde el principio.

## Las seis fases del ciclo de vida del software

La norma internacional ISO/IEC/IEEE 12207 describe los procesos del ciclo de vida del software (adquisición, suministro, desarrollo, operación, mantenimiento y retiro) como un marco común, sin imponer una secuencia única. Por eso la forma de ejecutarlos varía: un proyecto puede avanzar en bloques cortos o en etapas largas. Aun así, la mayoría de proyectos de software a medida pasan por las mismas seis fases.

| Fase | Qué se hace | Entregable principal |
|---|---|---|
| Descubrimiento | Entender el problema, los procesos actuales, los usuarios y el alcance | Documento de requisitos y alcance |
| Diseño | Definir pantallas, flujos, datos y arquitectura técnica | Prototipos y documento de arquitectura |
| Desarrollo | Programar por módulos, con revisiones de código | Código fuente en un repositorio controlado |
| Pruebas | Verificar funciones, seguridad básica y casos de uso reales | Informe de pruebas y lista de errores corregidos |
| Despliegue | Publicar el sistema en producción y capacitar a los usuarios | Manual de usuario, accesos y guía de despliegue |
| Soporte | Atender incidencias, ajustes y mejoras después del lanzamiento | Plan de soporte y registro de cambios |

*Tabla 1. Fases del desarrollo a medida y su entregable principal. Criterio: práctica habitual de la ingeniería de software, alineada con el marco de procesos de ISO/IEC/IEEE 12207; no es una tabla normativa.*

![Diagrama de ciclo de vida con seis fases en línea (descubrimiento, diseño, desarrollo, pruebas, despliegue y soporte) y una flecha de retorno desde soporte hacia diseño](/images/blog/diagramas/que-es-el-desarrollo-de-software-a-medida-fases-metodologias-y-entregables-ciclo.svg)

*Figura 1. Ciclo de vida por fases. Los cambios que surgen en soporte vuelven a la etapa de diseño para evaluarse antes de desarrollarse.*

En la práctica las fases se solapan. Por ejemplo, mientras se programa un módulo de ventas, el equipo puede estar probando otro. Lo importante es que cada fase tenga una salida clara. En el descubrimiento, por ejemplo, el valor está en entrevistar a quienes realmente operan el proceso y documentar lo que hacen hoy, incluidas las excepciones. Un prototipo en la fase de diseño cuesta mucho menos de corregir que una función ya programada, por eso conviene validarlo con usuarios reales antes de avanzar.

## Entregables que debes recibir

Un error frecuente es evaluar un proyecto solo por la aplicación que se ve en pantalla. Un proyecto bien cerrado entrega también el material que permite mantener, auditar y transferir el sistema. La siguiente figura resume el flujo de entregables que conviene pedir en cada fase.

![Diagrama con seis filas, cada fase conectada por una flecha a su entregable: documento de requisitos, prototipos y arquitectura, código fuente, informe de pruebas, manual y accesos, y plan de soporte](/images/blog/diagramas/que-es-el-desarrollo-de-software-a-medida-fases-metodologias-y-entregables-entregables.svg)

*Figura 2. Flujo de entregables por fase. El código fuente, resaltado en ámbar, es el entregable que más conviene verificar antes de cerrar el proyecto.*

Como cliente, conviene exigir por escrito al menos estos elementos:

- **Código fuente completo**, almacenado en un repositorio al que la empresa tenga acceso, con historial de cambios.
- **Documentación técnica**: arquitectura, modelo de datos, variables de configuración e instrucciones de instalación.
- **Manual de usuario** y materiales de capacitación para los roles que operarán el sistema.
- **Accesos administrativos** a servicios, dominio, base de datos y cuentas en la nube, a nombre de la empresa y no del proveedor.
- **Informe de pruebas** con la lista de errores conocidos y los que quedaron pendientes.
- **Actas de aceptación** firmadas por cada entrega importante.

Recibir el código no equivale, por sí solo, a ser dueño de los derechos sobre él. Ese punto se trata más adelante.

## Modelos de contratación: precio cerrado, tiempo y materiales o equipo dedicado

La forma de cobrar define cómo se reparte el riesgo entre la empresa y el proveedor. No existe un modelo mejor en todos los casos. La siguiente tabla compara los tres esquemas más usados, según comparativas comerciales de proveedores de software.

| Modelo | Cómo se paga | Conviene cuando | Riesgo principal para el cliente |
|---|---|---|---|
| Precio cerrado | Un monto fijo por un alcance definido | Los requisitos son estables y están bien documentados | Los cambios se cobran aparte, y el proveedor puede recortar funciones para cumplir el monto |
| Tiempo y materiales | Por horas o días de trabajo efectivamente realizado | El alcance aún se descubre o cambia con frecuencia | Presupuesto menos predecible si no hay control semanal del avance |
| Equipo dedicado | Tarifa periódica por un equipo que trabaja solo en tu producto | El sistema evoluciona durante meses o años | Costo fijo aunque algunas semanas avancen poco; exige gestión activa del cliente |

*Tabla 2. Modelos de contratación. Fuente: comparativas comerciales de proveedores (Cubix, referencia de la sección de fuentes). No son una norma ni un ranking; el criterio es el grado de certeza sobre el alcance.*

Un precio cerrado no es necesariamente más barato. Cuando el alcance es incierto, el proveedor suele incluir un margen para cubrir esa incertidumbre. En cambio, con tiempo y materiales la empresa gana flexibilidad, pero necesita revisar con regularidad el avance y las horas facturadas. El equipo dedicado funciona bien para productos vivos, aunque exige definir prioridades con claridad para que el equipo no se disperse.

Para cifras de costos y plazos, revisa las guías [cuánto cuesta desarrollar una plataforma a medida en Perú](/blog/cuanto-cuesta-desarrollar-una-plataforma-a-medida-en-peru) y [cuánto tarda desarrollar un sistema a medida en Perú](/blog/cuanto-tarda-desarrollar-un-sistema-a-medida-en-peru).

## Ciclo de vida, normas y estándares: qué referencia usar

Cuando un proveedor habla de "proceso" o "calidad", conviene pedirle que indique qué marco usa. La norma ISO/IEC/IEEE 12207 es la referencia internacional más citada para los procesos del ciclo de vida del software. Según la ficha pública de ISO, la edición vigente es la de 2026, que reemplaza a la de 2017. El estándar no obliga a una metodología concreta y, según su alcance, aplica también a enfoques ágiles, lo que permite usarlo como lista de verificación independiente de cómo se organiza el equipo.

No necesitas que tu proveedor certifique su proceso con esta norma para trabajar bien. Sí es razonable pedirle que describa cómo cubre las fases de la tabla anterior y qué documentos produce en cada una. La metodología de trabajo (cascada, Scrum o Kanban) se explica en la guía sobre [metodologías ágiles](/blog/metodologias-agiles-scrum-kanban-y-cascada-para-quien-contrata-software).

## Propiedad intelectual y del código en Perú

En Perú, el Decreto Legislativo 822, Ley sobre el Derecho de Autor, protege a los programas de ordenador como obras. Según el texto recogido en WIPO Lex, la ley reconoce como objeto de protección a los programas de ordenador en su artículo 5, literal k). No pude leer el texto completo de los artículos sobre obras encargadas o de titularidad en relaciones contractuales, así que no describo sus reglas en detalle.

En términos generales, la ley reconoce al autor una titularidad originaria por el solo hecho de la creación, y los derechos patrimoniales pueden transferirse o licenciarse. En la práctica, los contratos de software a medida suelen seguir dos caminos: el proveedor conserva la titularidad y la empresa recibe una licencia de uso, o la titularidad se transfiere a la empresa. Ambos esquemas son posibles, pero no deberían quedar implícitos.

Por eso el contrato debe decir expresamente qué ocurre con el código, la documentación, las herramientas internas creadas para el proyecto y las mejoras posteriores. Si el texto no lo dice, no hay forma segura de asumir que la empresa es dueña del sistema. Revisa esa cláusula con un abogado antes de firmar.

## Riesgos frecuentes y cómo mitigarlos

Los proyectos de software a medida fallan por razones que suelen verse desde el principio. La siguiente tabla resume las señales de alerta más comunes y la medida que conviene tomar.

| Riesgo | Señal de alerta | Mitigación |
|---|---|---|
| Alcance ambiguo | La propuesta incluye frases como "y otras funciones necesarias" | Lista de requisitos numerada y criterios de aceptación por función |
| Cambios sin control | Cada ajuste se negocia de palabra, sin acta | Proceso de cambios con costo y plazo aprobados por escrito |
| Dependencia del proveedor | El código no está en un repositorio de la empresa | Repositorio y accesos a nombre de la empresa desde la primera semana |
| Seguridad débil | Accesos compartidos o contraseñas dentro del código | Revisión básica de seguridad antes del despliegue y gestión segura de credenciales |
| Soporte abandonado | Nadie responde después del lanzamiento | Contrato de soporte con tiempos de respuesta definidos |

*Tabla 3. Riesgos frecuentes en proyectos de software a medida y su mitigación. Elaboración propia a partir de prácticas habituales. No hay datos públicos verificados para Perú sobre la frecuencia de estos problemas.*

## Errores comunes al contratar software a medida

- **Elegir solo por precio** sin comparar entregables, fases y garantías de soporte.
- **Aceptar un prototipo como si fuera el sistema terminado.** Un diseño navegable no incluye reglas de negocio, seguridad ni integraciones.
- **Dejar la titularidad sin cláusula escrita**, o asumir que pagar el desarrollo transfiere automáticamente el código.
- **No pedir acceso al repositorio** desde el inicio, lo que deja a la empresa sin forma de revisar el avance.
- **Olvidar el mantenimiento en el presupuesto.** El sistema necesita actualizaciones, respaldo y atención de incidencias después del lanzamiento.

## Preguntas frecuentes

### ¿Qué es el desarrollo de software a medida?

Es la creación de un sistema diseñado para los procesos y usuarios de una empresa específica. A diferencia de un producto genérico, se ajusta a las reglas del negocio y puede integrarse con otros sistemas.

### ¿Cuánto cuesta el desarrollo de software a medida?

Depende del alcance, del modelo de contratación y del equipo que lo construye. Esta guía no muestra cifras porque no hay una fuente pública verificada que aplique a todos los casos. Para rangos y ejemplos, revisa la guía sobre [costos de una plataforma a medida en Perú](/blog/cuanto-cuesta-desarrollar-una-plataforma-a-medida-en-peru).

### ¿Cuánto tarda un proyecto de software personalizado?

Depende de la complejidad, de cuántas integraciones tenga y de qué tan rápido pueda validar la empresa cada entrega. Los plazos de referencia se explican en la guía sobre [cuánto tarda desarrollar un sistema a medida](/blog/cuanto-tarda-desarrollar-un-sistema-a-medida-en-peru).

### ¿Qué diferencia hay entre software a medida y un software de estante?

El software de estante es un producto que se vende igual a muchos clientes y se adapta, en el mejor caso, con configuraciones. El software a medida se diseña para una empresa, lo que da más control, pero exige más planificación y un contrato bien definido.

### ¿Qué entregables debo exigir al proveedor?

Como mínimo, código fuente en un repositorio de la empresa, documentación técnica, manual de usuario, accesos administrativos a nombre de la empresa, informe de pruebas y actas de aceptación firmadas.

### ¿Quién es dueño del código de un sistema a medida?

Depende de lo que diga el contrato. La ley reconoce derechos al autor y los derechos patrimoniales pueden transferirse o licenciarse, así que la cláusula debe ser expresa. Consulta con un abogado antes de firmar.

### ¿Conviene un contrato de precio cerrado?

Conviene cuando el alcance es estable y está documentado con detalle. Si el sistema aún se está definiendo, un esquema de tiempo y materiales con revisiones periódicas suele dar más control.

## Glosario rápido

**Código fuente:** conjunto de instrucciones escritas por los programadores, a partir del cual se genera el sistema que usan las personas.

**Repositorio:** espacio que guarda el código y su historial de cambios, al que la empresa debe tener acceso.

**Entregable:** producto verificable que se recibe al terminar una fase, como un documento, un prototipo o una versión probada.

**Criterio de aceptación:** condición concreta que debe cumplirse para aprobar una función.

**Despliegue:** publicación del sistema en el entorno donde lo usan los usuarios reales.

**Titularidad:** derecho de propiedad sobre una obra, en este caso el código y la documentación.

**Backlog:** lista ordenada de funciones y tareas pendientes, con su prioridad.

**Soporte:** atención posterior al lanzamiento para resolver incidencias, aplicar actualizaciones y atender mejoras.

*Última revisión: 14 de noviembre de 2026.*

## Fuentes y lecturas recomendadas

- ISO, *ISO/IEC/IEEE 12207:2026, Software and systems engineering: Software life cycle processes*. https://www.iso.org/standard/90219.html (edición 2026). La página no se pudo abrir directamente; la información proviene de resultados de búsqueda.
- IEEE Standards Association, ficha de *ISO/IEC/IEEE 12207*. https://standards.ieee.org/standard/12207- (indica que la edición de 2017 está superada).
- WIPO Lex, *Decreto Legislativo 822, Ley sobre el Derecho de Autor*, Perú (año no verificado en la ficha). https://www.wipo.int/wipolex/es/legislation/details/8237 (se consultó el texto recogido en la ficha; no se leyeron los artículos sobre obras por encargo).
- Cubix, *Software Development Engagement Models: Fixed Price vs Time & Materials vs Dedicated Team*. Referencia comercial, sin año visible. https://www.cubix.co/blog/software-development-engagement-models/

Si quieres revisar el alcance de tu proyecto o la forma de contratarlo, puedes escribirnos desde la [página de contacto](/contacto). Si el proyecto es una plataforma para tu operación, también puedes conocer nuestro [servicio de plataformas](/servicios/plataformas).
