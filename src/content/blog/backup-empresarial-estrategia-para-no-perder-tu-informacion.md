---
title: "Backup empresarial: la estrategia que evita perder tu información"
seoTitle: "Backup empresarial: cómo no perder tu información"
description: "Backup empresarial con regla 3-2-1, RPO y RTO, copias inmutables y pruebas de restauración para recuperar tu información cuando la necesites."
publishedAt: 2026-05-14
updatedAt: 2026-11-14
category: "Ciberseguridad"
cover: "/images/blog/backup-empresarial-estrategia-para-no-perder-tu-informacion-cover.webp"
coverAlt: "Servidores de almacenamiento de datos en un centro de cómputo"
author: "Christian Pumaccahua Cusihuaman"
readTime: "9 min de lectura"
draft: false
reviewed: true
---
## Respuesta corta

Un backup empresarial es una copia de respaldo de la información de la empresa, planificada y protegida, que se puede restaurar dentro de un plazo definido. Para que funcione, aplica la regla 3-2-1 (tres copias, en dos tipos de soporte y una fuera del sitio), guarda al menos una copia inmutable o desconectada frente al ransomware, define cuánta información puedes perder (RPO) y cuánto tiempo puedes estar sin sistemas (RTO), y restaura de prueba con regularidad.

## La diferencia entre un incidente y una catástrofe

Un [ataque de ransomware](/blog/ransomware-en-peru-como-proteger-tu-empresa), un disco duro que falla o un error humano que borra la carpeta equivocada tienen algo en común: la gravedad del daño depende, en gran medida, de si existe una copia de respaldo funcional. Según el *Ransomware Trends Report 2024* de Veeam, que encuestó a 1,200 responsables de TI, [en promedio el 41% de los datos se ve comprometido durante un ciberataque, y solo el 57% de los datos comprometidos se logra recuperar](https://www.veeam.com/blog/announcing-rw24.html). Lo que no se recupera, sin una copia confiable, se pierde para siempre.

## Qué significa realmente tener un backup

Tener "una copia en otro disco" no es lo mismo que tener una estrategia de backup. Un backup empresarial serio responde a tres preguntas: qué se respalda, con qué frecuencia, y dónde se guarda esa copia para que no sufra el mismo problema que afectó al original. Un disco externo conectado permanentemente al mismo servidor, por ejemplo, se cifra junto con todo lo demás si hay un ataque de ransomware.

## La regla 3-2-1, explicada sin tecnicismos

Es el estándar más usado en la industria porque es simple de recordar y difícil de romper. CISA, la agencia de ciberseguridad de Estados Unidos, la recomienda como guía básica para respaldar información de empresas y organismos públicos.

**3 copias de la información.** El original más dos respaldos, para que la pérdida de una copia nunca signifique la pérdida total.

**2 tipos de soporte distintos.** Por ejemplo, un respaldo local y uno en la nube, para no depender de un solo tipo de falla. Un disco dañado no afecta a una copia en la nube, y viceversa.

**1 copia fuera del sitio físico.** Si un incendio, un robo o una falla eléctrica afecta a la oficina, la copia que está en otro lugar sigue intacta.

![Diagrama de la regla 3-2-1: tres copias, dos tipos de soporte y una copia fuera del sitio](/images/blog/diagramas/backup-empresarial-estrategia-para-no-perder-tu-informacion-321.svg)

*Figura 1. Regla 3-2-1: tres copias de la información, dos tipos de soporte y una copia fuera del sitio.*

![Técnico revisando el cableado y los servidores de un centro de datos](/images/blog/backup-empresarial-estrategia-para-no-perder-tu-informacion-inline-1.webp)

## La variante 3-2-1-1-0 y por qué se menciona tanto

Muchos proveedores extienden la regla a 3-2-1-1-0: una copia adicional inmutable o desconectada (el primer "1") y cero errores al verificar la restauración (el "0"). Conviene tenerlo claro: CISA no define esa variante como requisito; es una extensión que usa la industria. Como guía práctica es útil, porque la copia inmutable responde al ransomware y la verificación obliga a comprobar que la copia realmente sirve.

## RPO y RTO: cuánta información puedes perder y cuánto tiempo puedes parar

Antes de elegir una herramienta, la empresa debe definir dos métricas por cada sistema crítico:

- **RPO (Recovery Point Objective):** la cantidad máxima de datos que puedes perder, medida en tiempo. Si tu RPO es de 4 horas y tu último backup válido es de las 08:00, un incidente a las 11:30 costaría unas 3,5 horas de registros.
- **RTO (Recovery Time Objective):** el tiempo máximo que puedes tardar en volver a operar. Si el RTO del sistema de facturación es de 8 horas, la restauración debe completarse dentro de esa ventana.

Los valores siguientes son ilustrativos, no recomendaciones universales. Cada empresa los define según su operación:

| Métrica | Pregunta que responde | Ejemplo para una PYME | Cómo se reduce |
|---|---|---|---|
| RPO | ¿Cuántos datos puedo perder? | 24 horas para archivos de diseño; 15 minutos para pedidos en línea | Respaldar con más frecuencia o replicar la información |
| RTO | ¿Cuánto tiempo puedo estar sin el sistema? | 8 horas para el sistema de facturación; 1 hora para la pasarela de pagos | Preparar la restauración de antemano y documentar cada paso |

NIST, en su guía de planificación de contingencia (SP 800-34 Rev. 1), trabaja con este mismo enfoque: primero se identifican los sistemas críticos y sus tiempos de recuperación, y después se diseñan los respaldos y los procedimientos.

## Tipos de copia: completa, incremental y diferencial

No todas las copias se hacen igual. Combinar tipos reduce el tiempo y el espacio que consume cada respaldo, pero también cambia lo que se necesita para restaurar.

| Tipo | Qué copia | Ventaja | Desventaja | Uso habitual |
|---|---|---|---|---|
| Completa | Todo el conjunto de datos | Restauración simple, desde un solo respaldo | Consume más espacio y tiempo | Base semanal o mensual |
| Incremental | Solo lo cambiado desde el último respaldo, de cualquier tipo | Rápida y ocupa poco espacio | Restaurar requiere la cadena completa de respaldos | Copia diaria |
| Diferencial | Lo cambiado desde la última copia completa | Restauración en dos pasos: la completa y la última diferencial | El tamaño crece con los días | Punto intermedio entre ambas |

Una combinación frecuente en pymes es una copia completa semanal, con copias incrementales o diferenciales diarias. Lo importante es que la política esté escrita y que alguien sepa restaurarla.

## Copias inmutables: la defensa contra el ransomware

Los ataques modernos buscan primero los respaldos. CISA, en su guía #StopRansomware, recomienda mantener copias de respaldo cifradas y desconectadas (offline) de la información crítica, y probar su disponibilidad e integridad con regularidad. La idea de fondo es que un atacante con acceso a la red no pueda modificar ni borrar la copia.

Las plataformas de nube ofrecen mecanismos de inmutabilidad (WORM, *write once, read many*) que cumplen esa función:

- **AWS S3 Object Lock** tiene dos modos. En *compliance*, ningún usuario, ni siquiera el usuario root, puede borrar o sobrescribir la versión protegida antes de que venza la retención, y el modo no puede cambiarse. En *governance*, los usuarios con permiso especial pueden anular la retención. AWS recomienda probar primero en governance antes de pasar a compliance.
- **Azure Immutable Blob Storage** tiene dos tipos de política. La *retención basada en tiempo* impide modificar o borrar los datos durante un intervalo, y una vez bloqueada no se puede eliminar ni reducir (solo extender). La *retención legal* mantiene los datos protegidos hasta que se retire explícitamente.

| Modalidad | Ejemplo | Qué protege | Límite a considerar |
|---|---|---|---|
| Desconectada (offline) | Disco o cinta retirada del equipo después de cada copia | Aislamiento total de la red | Depende de que alguien cumpla el procedimiento |
| Inmutable con retención | AWS S3 Object Lock en modo compliance; Azure con retención basada en tiempo bloqueada | Nadie puede modificar ni borrar durante el plazo | Retención fija; una configuración errónea puede bloquear datos más tiempo del previsto |
| Cuenta o credenciales separadas | Copia en una cuenta de nube con accesos distintos a los de la red | Que un atacante con acceso a la red no llegue a la copia | Exige gestionar accesos y revisarlos |

Las copias inmutables no reemplazan a la prevención. Un [correo de phishing](/blog/phishing-en-empresas-como-identificarlo-antes-de-que-sea-tarde) que roba una contraseña de administrador puede afectar también a los respaldos si estos comparten credenciales con la red.

## Tendencias 2026: más recuperación con backup, y costos que siguen subiendo

El informe *State of Ransomware 2026* de Sophos muestra dos señales. La primera es positiva: la recuperación a partir de copias de seguridad llegó al 66% de los casos de datos cifrados, frente al 54% de 2025. La segunda es una advertencia: el coste medio de recuperación se sitúa en 1,7 millones de dólares por incidente, mientras que el 48% de las víctimas de cifrado pagó el rescate para restaurar sus datos.

Para una pyme peruana, la lectura práctica es que el backup ya no es solo una protección técnica: es lo que determina si la empresa paga un rescate, se queda parada semanas o recupera la operación en días. Los datos de Sophos son globales; no hay cifras públicas verificadas por sector para Perú que permitan estimar el impacto local con precisión.

## Nube, local o híbrido: qué elegir según tu caso

| Opción | Fortalezas | Limitaciones | Mejor para |
|---|---|---|---|
| Local | Restauración rápida dentro de la oficina | Afectada por incendio, robo o un ataque que alcance la red | Restaurar archivos o equipos con frecuencia |
| Nube | Copia fuera del sitio, con opciones de inmutabilidad | La velocidad depende del enlace de internet y hay costos de almacenamiento y transferencia | Cumplir la regla de la copia externa |
| Híbrido | Combina velocidad local y copia externa | Más componentes que administrar y documentar | Empresas con varios sistemas críticos |

En la práctica, el híbrido es la opción más común en empresas con sistemas críticos, porque permite restaurar rápido desde lo local y sobrevivir a un desastre en la oficina gracias a la copia externa.

## Pruebas de restauración: la parte que más se omite

El error más frecuente no es la falta de backup, sino no comprobar que funciona. Una copia que nunca se restauró de prueba puede estar corrupta, incompleta o desactualizada sin que nadie lo note, hasta el día en que realmente se necesita. CISA recomienda probar los respaldos para asegurar que el equipo pueda restaurar los datos completos y también parcialmente.

Una prueba útil tiene cuatro pasos: elegir un sistema, restaurarlo en un entorno separado, medir cuánto tardó (para comparar con el RTO) y revisar que los datos estén completos y se abran sin errores. Registra el resultado y los problemas encontrados.

## Retención y cumplimiento en Perú

La Ley N.° 29733, de Protección de Datos Personales, obliga a las empresas que tratan datos personales a adoptar medidas de seguridad. Los respaldos también contienen datos personales (clientes, trabajadores, proveedores), así que forman parte de ese tratamiento. El reglamento vigente es el Decreto Supremo N.° 016-2024-JUS, que reemplazó al Decreto Supremo N.° 003-2013-JUS. Revisa el texto actualizado en el portal de la Autoridad Nacional de Protección de Datos Personales antes de definir tu política.

Dos decisiones prácticas: cuánto tiempo conservar cada tipo de dato, y cómo eliminarlo cuando ya no corresponde. Si una política de eliminación exige borrar un dato, ese dato también debe salir de las copias según el procedimiento que la empresa defina. Para el detalle legal, consulta con tu asesor. Puedes revisar también la [guía sobre la ley de protección de datos personales en Perú](/blog/ley-proteccion-datos-personales-peru-que-debe-cumplir-tu-empresa).

## Plan de recuperación ante desastres mínimo

Un plan de recuperación no tiene que ser extenso para ser útil. Como mínimo, debería incluir:

1. **Inventario** de sistemas, bases de datos y archivos críticos, con su dueño.
2. **RPO y RTO** definidos para cada sistema del inventario.
3. **Regla 3-2-1** aplicada a cada sistema, con al menos una copia inmutable o desconectada.
4. **Responsables y contactos** para declarar el incidente y decidir la restauración.
5. **Procedimiento de restauración** escrito, con pasos que cualquier técnico entienda.
6. **Pruebas periódicas** de restauración, con registro de resultados y tiempos medidos.

NIST describe la planificación de contingencia como un proceso continuo que incluye desarrollar, probar y mantener el plan, no como un documento que se escribe una vez.

## Errores comunes que dejan el backup inservible justo cuando se necesita

- **Guardar la copia en el mismo servidor o en la misma red** sin aislamiento; el ransomware la cifra junto con el original.
- **Usar las mismas credenciales de administrador** para el sistema y para los respaldos.
- **No respaldar los servicios en la nube**, como correo, CRM o tienda en línea, porque se asume que el proveedor se encarga de todo. Conviene revisar qué incluye el servicio y qué no.
- **Asumir que la nube es automáticamente inmutable.** La inmutabilidad debe configurarse y probarse.
- **Ignorar las alertas del software de respaldo.** Un trabajo fallido que nadie revisa puede pasar semanas sin copias.
- **No medir el tiempo de restauración**, así que el RTO es una suposición y no un dato.

## Lista de verificación

- [ ] Hay un inventario de sistemas y datos críticos, con su responsable.
- [ ] Cada sistema tiene RPO y RTO definidos por escrito.
- [ ] Se aplica la regla 3-2-1, con al menos una copia fuera del sitio.
- [ ] Una copia está desconectada o es inmutable, con accesos separados de la red.
- [ ] Las alertas de los trabajos de respaldo llegan a una persona concreta.
- [ ] Hay un procedimiento de restauración escrito y accesible sin depender de una sola persona.
- [ ] Se hizo una restauración de prueba en los últimos meses, con tiempos registrados.
- [ ] La política de retención y eliminación de datos personales está documentada.

## Cómo encaja el backup en la estrategia general de tu empresa

El backup es una pieza dentro de una estrategia más amplia de ciberseguridad, junto con la prevención de [phishing](/blog/phishing-en-empresas-como-identificarlo-antes-de-que-sea-tarde) y las [buenas prácticas de acceso y contraseñas](/blog/buenas-practicas-ciberseguridad-empresas). Ninguna de estas medidas reemplaza a las otras: la prevención reduce la probabilidad de un incidente, y el backup determina qué tan grave es el daño cuando, a pesar de todo, ocurre.

## Preguntas frecuentes

### ¿Qué es un backup empresarial?

Es una copia de respaldo de los datos y sistemas de la empresa, programada, protegida y verificada, que permite restaurar la operación después de un incidente. Va más allá de copiar archivos: define qué se respalda, con qué frecuencia, dónde se guarda y cómo se restaura.

### ¿Cuántas copias de backup necesita una empresa pequeña?

Como punto de partida, la regla 3-2-1: tres copias de la información, en dos tipos de soporte y una fuera del sitio. Las empresas con sistemas muy críticos suelen agregar una copia inmutable o desconectada. El número exacto depende de cuánta información puede perder la empresa.

### ¿Un backup en la nube es suficiente?

No necesariamente. Una copia en la nube cubre incendios y robos en la oficina, pero debe tener accesos separados y, idealmente, inmutabilidad. Además, la velocidad de restauración depende del enlace de internet. Muchas empresas combinan una copia local para restaurar rápido con una copia externa.

### ¿Qué diferencia hay entre RPO y RTO?

El RPO mide cuántos datos puedes perder, medido en tiempo: si tu RPO es de 4 horas, aceptas perder hasta 4 horas de información. El RTO mide cuánto tiempo puedes estar sin el sistema. Uno define la frecuencia de los respaldos; el otro, la velocidad de la restauración.

### ¿Un backup protege contra el ransomware?

Puede protegerte si está aislado del resto de la red y no puede ser modificado ni borrado por un atacante. Una copia accesible desde el mismo equipo infectado normalmente no sirve. Por eso se recomiendan copias desconectadas o inmutables.

### ¿Cada cuánto debo probar la restauración?

Depende de la criticidad de cada sistema, pero una prueba periódica, registrada y con tiempos medidos es la práctica recomendada. Lo importante es que la prueba exista: sin ella no sabes si el RTO se cumple.

## Glosario rápido

**Backup:** copia de respaldo de datos o sistemas que permite restaurarlos después de una pérdida.

**RPO (Recovery Point Objective):** cantidad máxima de datos que la empresa puede perder, medida en tiempo.

**RTO (Recovery Time Objective):** tiempo máximo aceptable para volver a operar después de un incidente.

**Copia incremental:** respaldo que guarda solo los cambios desde el último respaldo, de cualquier tipo.

**Copia diferencial:** respaldo que guarda los cambios desde la última copia completa.

**Inmutable (WORM):** dato que no puede modificarse ni borrarse durante un plazo definido.

**Copia offline:** respaldo desconectado de la red, por lo que un atacante no puede alcanzarlo desde los equipos.

**Restauración de prueba:** recuperación de una copia en un entorno separado para comprobar que funciona y medir el tiempo.

## Fuentes y lecturas recomendadas

- CISA, *Back Business Data*, Cybersecurity and Infrastructure Security Agency. https://www.cisa.gov/back-business-data (consultada en noviembre de 2026).
- CISA, *#StopRansomware Guide*, Cybersecurity and Infrastructure Security Agency, actualizada en 2023. https://www.cisa.gov/stopransomware/ransomware-guide
- NIST, *SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems*, National Institute of Standards and Technology, 2010. https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
- AWS, *Locking objects with Object Lock*, Amazon S3 User Guide. https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html (consultada en noviembre de 2026).
- Microsoft, *Immutable storage for Azure Blob data overview*, Microsoft Learn. https://learn.microsoft.com/azure/storage/blobs/immutable-storage-overview (consultada en noviembre de 2026).
- Veeam, *Announcing the 2024 Ransomware Trends Report*, Veeam Software, 2024. https://www.veeam.com/blog/announcing-rw24.html
- Sophos, *State of Ransomware 2026*, Sophos, 2026. https://www.sophos.com/blog/sophos-state-of-ransomware-2026
- Autoridad Nacional de Protección de Datos Personales, *Ley N.° 29733, Ley de protección de datos personales*, Ministerio de Justicia y Derechos Humanos del Perú, 2011. https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011
- Decreto Supremo N.° 016-2024-JUS, reglamento de la Ley N.° 29733, El Peruano, 2024. Texto disponible en el Congreso de la República: https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ds_016-2024-jus.pdf

Si tus respaldos actuales no se han probado nunca, [contáctanos](/contacto) para revisarlos. En Universoft Systems acompañamos a las empresas en su [ciberseguridad](/servicios/ciberseguridad), desde la estrategia de respaldo hasta la restauración.
