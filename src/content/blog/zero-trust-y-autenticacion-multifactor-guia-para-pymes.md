---
title: "Zero Trust y autenticación multifactor: guía de seguridad para pymes"
seoTitle: "Zero Trust y MFA: guía de seguridad para pymes"
description: "Qué es Zero Trust, cómo funciona la autenticación multifactor y qué pasos seguir en una pyme de 10 a 50 personas para proteger sus accesos."
publishedAt: 2026-11-14
updatedAt: 2026-11-14
category: "Ciberseguridad"
cover: "/images/blog/zero-trust-y-autenticacion-multifactor-guia-para-pymes-cover.webp"
coverAlt: "Candado dorado de combinación sobre un teclado de computadora, junto a tarjetas"
author: "Christian Pumaccahua Cusihuaman"
readTime: "9 min de lectura"
draft: true
reviewed: false
---

## Respuesta corta

Zero Trust es un modelo de seguridad que no confía en una persona o un equipo solo por estar dentro de la red de la empresa: cada acceso se verifica según la identidad, el dispositivo y el contexto. La autenticación multifactor (MFA) es una de sus piezas centrales, y las llaves de seguridad FIDO2 y las passkeys son hoy las opciones más resistentes al phishing. Una pyme puede empezar por el correo, las cuentas de administración y los permisos, sin esperar a tener un proyecto de años.

## Un acceso dentro de la oficina no debería abrir todo

Durante mucho tiempo, la seguridad de muchas empresas se pensó como un castillo: un muro fuerte en el borde de la red y, adentro, confianza. Ese supuesto se debilita cuando el equipo trabaja desde casa, usa computadoras personales, se conecta desde cualquier lugar o depende de servicios en la nube y de proveedores externos. Quien obtiene una contraseña válida dentro del perímetro suele tener margen para moverse sin ser detectado.

En una pyme de 10 a 50 personas, el problema se ve en situaciones concretas: un colaborador que reutiliza su clave en varias plataformas, un proveedor de soporte que conserva acceso aunque ya no trabaja con la empresa, o una cuenta de administrador compartida por todo el equipo. Ninguno de estos casos requiere un ataque sofisticado. Como se explica en la guía sobre [phishing en empresas](/blog/phishing-en-empresas-como-identificarlo-antes-de-que-sea-tarde), muchas veces basta con que una contraseña válida llegue a manos equivocadas.

## Qué es Zero Trust, en términos simples

Zero Trust, o confianza cero, suele resumirse con la idea de nunca confiar y siempre verificar. El National Institute of Standards and Technology (NIST) de Estados Unidos lo describe en la publicación SP 800-207, versión final de agosto de 2020: el modelo traslada la protección desde el perímetro de la red hacia cada recurso individual, y la ubicación por sí sola no otorga confianza. La idea no es eliminar la red interna, sino tratar cada solicitud de acceso como si pudiera venir de un origen no confiable.

Conviene aclarar algo: Zero Trust no es un producto que se compra e instala. Es una forma de diseñar los accesos, que se implementa con herramientas que muchas empresas ya tienen en parte, como proveedores de identidad, MFA, gestión de dispositivos y reglas de acceso. Por eso puede avanzar por etapas.

## Principios de Zero Trust que una pyme puede aplicar

NIST resume el modelo en siete principios. Para una pyme, la versión práctica se puede reducir a cuatro ideas:

- **Identidad verificada en cada acceso.** Una sesión no debería mantenerse abierta indefinidamente sin volver a validar al usuario.
- **Dispositivo conocido y en buen estado.** Una cuenta válida desde un equipo sin actualizar o no registrado también representa un riesgo.
- **Acceso por necesidad, no por costumbre.** Cada persona debe tener solo los permisos que su puesto requiere.
- **Monitoreo continuo.** Los accesos se revisan y las decisiones se ajustan cuando cambia el contexto.

La Cybersecurity and Infrastructure Security Agency (CISA) de Estados Unidos publicó además el Zero Trust Maturity Model. Organiza el avance en cinco pilares (identidad, dispositivos, redes, aplicaciones y cargas de trabajo, y datos) y cuatro etapas de madurez: tradicional, inicial, avanzado y óptimo. El modelo está pensado para agencias federales, pero sirve como mapa para decidir qué atender primero. En la mayoría de pymes, el pilar de identidad es el punto de partida.

El flujo de la figura 1 resume cómo se ve un acceso bajo este enfoque.

![Flujo de acceso Zero Trust: usuario, verificación de identidad y dispositivo, política y recurso](/images/blog/diagramas/zero-trust-y-autenticacion-multifactor-guia-para-pymes-flujo-acceso.svg)

*Figura 1. Flujo de acceso en Zero Trust: cada solicitud pasa por verificación y política antes de llegar al recurso.*

## Autenticación multifactor: qué es y qué tipos existen

La autenticación multifactor exige dos o más factores de naturaleza distinta: algo que la persona sabe (una contraseña), algo que tiene (un teléfono o una llave) o algo que es (una huella). CISA señala en su página oficial sobre MFA que cualquier MFA es mejor que ninguna, pero que los métodos más fuertes deben preferirse. La diferencia entre métodos está en qué tan fácil resulta engañar a la persona o robar el segundo factor.

La siguiente tabla compara los tipos más comunes. Los costos son una orientación general, no una cotización: dependen del proveedor y de la cantidad de usuarios.

| Método de MFA | Resistencia al phishing | Comodidad | Costo (en general) |
|---|---|---|---|
| Código por SMS o llamada de voz | Baja: el código puede ser capturado en un sitio falso | Alta | Bajo |
| App de códigos de un solo uso | Media: el código puede ingresarse en un sitio falso | Media | Bajo |
| Notificación push con número de verificación | Media: obliga a revisar la pantalla de acceso, pero no es tan fuerte como una llave | Alta | Bajo |
| Llave FIDO2 o passkey | Alta: usa criptografía de clave pública y no depende de que el usuario escriba un código | Alta una vez configurada | Bajo a medio (la llave física tiene costo) |

## Llaves FIDO2 y passkeys: qué recomiendan las fuentes oficiales

CISA publicó en octubre de 2022 una alerta en la que insta a las organizaciones a implementar MFA resistente al phishing, y a usar number matching mientras tanto para mitigar la fatiga de notificaciones. La misma página indica que el number matching no es tan fuerte como el MFA resistente al phishing, pero que es una mitigación intermedia útil. En su página sobre MFA, CISA afirma que la única autenticación resistente al phishing ampliamente disponible es FIDO/WebAuthn.

Las passkeys son la versión de consumo de ese estándar. La FIDO Alliance las describe como un reemplazo de la contraseña basado en pares de claves criptográficas, guardadas en el teléfono, la computadora o una llave de seguridad, que se desbloquean con biometría o un PIN. Según la alianza, la resistencia al phishing es un objetivo de diseño: al no existir una contraseña que escribir, no hay nada que una página falsa pueda robar.

En la práctica, no todos los sistemas de una pyme soportan estos métodos. Conviene revisar con cada proveedor qué opciones ofrece, empezar por el correo electrónico, el almacenamiento en la nube y los accesos de administración, y dejar los sistemas sin soporte como excepción documentada con un plan de reemplazo.

## Contraseñas y mínimo privilegio: lo básico que sostiene todo

Ningún factor adicional compensa una contraseña repetida en veinte plataformas. Un gestor de contraseñas permite usar una clave distinta para cada cuenta y compartir de forma controlada las credenciales de equipo, en lugar de anotarlas en hojas de cálculo o en mensajes de chat. Para las cuentas de administración, la recomendación habitual es usar una cuenta separada de la que se utiliza para el correo y las tareas diarias, con MFA resistente al phishing.

El principio de mínimo privilegio significa que cada persona tiene solo los accesos que necesita para su trabajo. En una pyme, esto suele revelar permisos acumulados: un practicante que sigue con acceso a la facturación, un vendedor que puede ver toda la base de clientes o un proveedor con acceso permanente a un servidor que solo necesitó una vez. Una revisión trimestral de roles, con la lista de accesos frente a la lista de personas activas, suele encontrar varios casos.

## Segmentación de red: separar lo que no debe mezclarse

La segmentación divide la red en zonas con reglas propias. El modelo de CISA incluye la microsegmentación entre las capacidades de etapas más avanzadas, pero una pyme puede empezar con algo más sencillo: separar la red de invitados, la de los equipos de trabajo y la de servidores o sistemas críticos. Así, un celular de visita o una cámara de seguridad con clave por defecto no pueden llegar directamente a la base de datos de contabilidad.

La figura 2 compara la lógica de la seguridad perimetral con la de Zero Trust.

![Comparación entre seguridad perimetral y Zero Trust](/images/blog/diagramas/zero-trust-y-autenticacion-multifactor-guia-para-pymes-perimetral-vs-zero-trust.svg)

*Figura 2. En la seguridad perimetral, la confianza depende de estar dentro de la red; en Zero Trust, cada acceso se verifica.*

Para redes con equipos remotos e híbridos, la segmentación y la verificación de cada acceso se complementan. Puedes profundizar en el tema en la guía sobre [wifi empresarial seguro](/blog/wifi-empresarial-seguro-errores-comunes-que-exponen-tu-red).

## Plan de 30, 60 y 90 días para una pyme de 10 a 50 personas

Un plan por etapas evita dos errores frecuentes: intentar cambiar todo a la vez o no cambiar nada por falta de tiempo. La siguiente secuencia está pensada para una empresa sin un equipo de seguridad dedicado. Puede ajustarse según si cuenta con un área de TI interna o con un proveedor externo.

| Plazo | Acciones principales | Resultado esperado |
|---|---|---|
| Días 1 a 30 | Inventariar cuentas, administradores y proveedores con acceso. Activar MFA en correo, almacenamiento y accesos remotos. Dar de baja cuentas de exempleados. Implantar un gestor de contraseñas. | Ninguna cuenta huérfana y MFA en los sistemas más expuestos |
| Días 31 a 60 | Migrar a las cuentas de administración a llaves FIDO2 o passkeys donde sea posible. Revisar permisos por rol. Limitar y registrar el acceso de proveedores. Revisar la configuración de las cuentas de correo frente a phishing. | Administradores protegidos con MFA resistente y permisos documentados |
| Días 61 a 90 | Separar la red de invitados, los equipos de trabajo y los servidores. Exigir actualizaciones y cifrado de disco en los equipos de la empresa. Capacitar al personal con ejemplos de phishing. Hacer un simulacro de cuenta comprometida. | Redes separadas, equipos con políticas mínimas y un procedimiento probado |

## Errores comunes

- **Activar MFA solo para la gerencia.** Los atacantes suelen apuntar a cuentas de uso general, como las de ventas o finanzas, precisamente porque tienen acceso a información valiosa.
- **Confiar en SMS para cuentas críticas sin evaluar alternativas.** Es mejor que no tener segundo factor, pero es el método más expuesto a engaños.
- **Dar permisos de administrador "por si acaso".** Cada privilegio extra amplía el daño que puede causar una sola cuenta comprometida.
- **Dejar cuentas de exempleados o proveedores activas.** Suele aparecer en las revisiones de accesos y conviene revisarlo cada mes.
- **Comprar una herramienta antes de mapear los accesos.** Sin inventario, cualquier solución deja huecos que nadie ve.

## Preguntas frecuentes

### ¿Zero Trust es lo mismo que la autenticación multifactor?

No. La MFA es uno de los controles que forman parte de Zero Trust. Zero Trust es el enfoque más amplio: verificar cada acceso considerando identidad, dispositivo, permisos y contexto.

### ¿Qué MFA conviene si mi equipo usa celulares antiguos?

Una aplicación de códigos o una notificación con número de verificación suelen ser alternativas razonables. Para las cuentas más sensibles, conviene evaluar una llave física de seguridad, que no depende de la batería ni de la versión del teléfono.

### ¿Las passkeys reemplazan a las contraseñas?

En muchas plataformas ya pueden usarse como método de inicio de sesión, aunque la disponibilidad depende de cada proveedor. Conviene mantener la contraseña como respaldo hasta confirmar que el proceso de recuperación de cuentas también está bien configurado.

### ¿Una pyme necesita un especialista para empezar?

No necesariamente. El inventario de cuentas, la activación de MFA en el correo y la baja de accesos antiguos pueden hacerse con el personal de TI o con el proveedor de sistemas. Un especialista aporta más valor en la revisión de la red y en la configuración de políticas de acceso.

### ¿Qué hago si un colaborador deja la empresa?

Revoca sus accesos el mismo día, incluidos el correo, las herramientas en la nube y los permisos compartidos. Revisa también las cuentas de servicio y las credenciales que pudo conocer.

### ¿Cuánto cuesta implementar Zero Trust?

Depende del tamaño de la empresa, de los sistemas que use y de si el trabajo se hace internamente o con un proveedor. No hay una cifra pública verificada que aplique de forma general a pymes peruanas, así que conviene pedir una evaluación con alcance definido.

## Glosario rápido

**Zero Trust:** modelo de seguridad que verifica cada acceso y no otorga confianza por la ubicación de la red.

**MFA (autenticación multifactor):** uso de dos o más factores de distinta naturaleza para verificar una identidad.

**FIDO2:** estándar de autenticación basado en criptografía de clave pública, usado en llaves de seguridad y passkeys.

**Passkey:** credencial criptográfica que reemplaza la contraseña y se desbloquea con biometría o PIN en el dispositivo.

**Phishing:** intento de engañar a una persona para que entregue credenciales o datos sensibles.

**Mínimo privilegio:** principio por el que cada usuario tiene solo los accesos necesarios para su función.

**Segmentación de red:** división de la red en zonas con reglas de acceso propias.

**Fatiga de MFA:** situación en la que el usuario recibe tantas notificaciones que termina aprobándolas sin revisar.

## Fuentes y lecturas recomendadas

- National Institute of Standards and Technology (NIST), *Zero Trust Architecture*, SP 800-207, versión final, 2020: https://csrc.nist.gov/pubs/sp/800/207/final
- Cybersecurity and Infrastructure Security Agency (CISA), *Multi-Factor Authentication*, página oficial sin fecha indicada: https://www.cisa.gov/mfa
- CISA, *CISA Releases Guidance on Phishing-Resistant and Numbers Matching Multifactor Authentication*, alerta de 31 de octubre de 2022: https://www.cisa.gov/news-events/alerts/2022/10/31/cisa-releases-guidance-phishing-resistant-and-numbers-matching
- CISA, *Zero Trust Maturity Model*, página oficial: https://www.cisa.gov/zero-trust-maturity-model
- FIDO Alliance, *Passkeys*, página oficial: https://fidoalliance.org/passkeys/

Para la integración de sistemas y accesos entre aplicaciones, revisa también la guía sobre [APIs y webhooks](/blog/api-y-webhooks-que-son-y-como-conectan-tus-sistemas), y para proteger tu operación frente a amenazas como el [ransomware](/blog/ransomware-en-peru-como-proteger-tu-empresa), consulta las [buenas prácticas de ciberseguridad para empresas](/blog/buenas-practicas-ciberseguridad-empresas).

Si quieres revisar qué accesos necesita reforzar tu empresa, puedes [escribirnos desde nuestro formulario de contacto](/contacto). Nuestro equipo de [ciberseguridad](/servicios/ciberseguridad) puede ayudarte a ordenar identidades, permisos y MFA según tu operación.
