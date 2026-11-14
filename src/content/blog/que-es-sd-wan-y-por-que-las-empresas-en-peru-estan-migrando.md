---
title: "SD-WAN: qué es, cómo funciona y tendencias 2026 para empresas"
seoTitle: "SD-WAN: qué es y tendencias 2026 para empresas"
description: "Tendencias SD-WAN 2026: cómo funciona, cómo se compara con MPLS y VPN, qué es SASE y qué preguntar a tu proveedor antes de migrar."
publishedAt: 2025-07-03
updatedAt: 2026-11-14
category: "Telecomunicaciones"
cover: "/images/blog/que-es-sd-wan-y-por-que-las-empresas-en-peru-estan-migrando-cover.webp"
coverAlt: "Centro de datos con servidores y cableado de red"
author: "Christian Pumaccahua Cusihuaman"
readTime: "10 min de lectura"
draft: false
reviewed: true
---
## Respuesta corta

SD-WAN (red de área amplia definida por software) administra la conexión entre las sedes de una empresa desde un panel central y decide qué enlace usar para cada tipo de tráfico: internet, 4G/5G o MPLS. Su evolución más citada es SASE, que une SD-WAN con servicios de seguridad en la nube. No encontramos un dato público verificado sobre cuántas empresas peruanas la usan, así que este artículo no lo afirma.

## Una nueva forma de administrar la red empresarial

Durante años, conectar las distintas sedes de una empresa significó depender de enlaces dedicados, como MPLS, administrados casi por completo por el proveedor de comunicaciones. Si algo fallaba o había que priorizar una aplicación crítica, las opciones eran limitadas y los cambios podían tardar.

SD-WAN (Software-Defined Wide Area Network) cambia ese modelo. En lugar de depender de equipos muy especializados y configuraciones rígidas, administra la conectividad entre sedes mediante software. Eso da a la empresa visibilidad y control centralizado sobre toda su red, sin importar cuántas ubicaciones tenga.

## Cómo funciona en términos simples

Imagina que tu empresa tiene una oficina principal y dos sucursales, cada una con su propia conexión a internet. Con una arquitectura tradicional, cada enlace se gestiona de forma prácticamente independiente, y si el proveedor de una sede tiene problemas, esa sucursal queda aislada.

Con SD-WAN, todas esas conexiones se administran desde un panel centralizado que decide, en tiempo real, cuál es la mejor ruta para cada tipo de tráfico. Una videollamada importante puede priorizarse sobre una descarga de archivos no urgente, y si un enlace falla, el tráfico se redirige a otra conexión disponible.

![Diagrama de arquitectura SD-WAN: un orquestador central define políticas para tres sedes con equipo edge, que envían su tráfico por internet, 4G/5G o MPLS](/images/blog/diagramas/que-es-sd-wan-y-por-que-las-empresas-en-peru-estan-migrando-arquitectura.svg)

*Figura 1. El orquestador define las reglas (plano de control) y los equipos edge de cada sede reenvían el tráfico por los enlaces disponibles (plano de datos).*

![Centro de datos con servidores y equipos de red activos](/images/blog/que-es-sd-wan-y-por-que-las-empresas-en-peru-estan-migrando-inline-1.webp)

## Cómo está construida: planos, edge y orquestador

Para entender una arquitectura SD-WAN conviene separar tres piezas. Los fabricantes usan nombres distintos para cada una, pero la lógica es la misma.

### Plano de control: decide las reglas

El plano de control es donde se definen las reglas: qué ruta usar, qué prioridad tiene cada aplicación y qué sedes pueden comunicarse entre sí. En la mayoría de las arquitecturas, este plano vive en el orquestador o controlador central.

### Plano de datos: mueve el tráfico

El plano de datos es donde el tráfico se reenvía según esas reglas. Ocurre en los equipos de cada sede, que además cifran el tráfico entre sedes y aplican calidad de servicio (QoS).

### Edge y orquestador: las piezas de la arquitectura

El **edge** es el equipo instalado en cada sede. Reenvía el tráfico, cifra los túneles y aplica las políticas que recibe. El **orquestador** es el panel central desde el que el equipo de TI define políticas para todas las sedes. Cisco los llama vManage, vSmart y vEdge, y VMware los agrupa como orquestador y edges; por eso conviene preguntar a cada proveedor cómo se llama cada componente en su solución.

Un detalle importante: según la guía de VMware, si el orquestador o la pasarela no están disponibles, un edge sigue tomando decisiones locales con sus últimas instrucciones conocidas. La continuidad depende de cómo se diseñe ese respaldo, y conviene confirmarlo con el proveedor.

## SD-WAN frente a MPLS y VPN: qué cambia

Hasta hace poco, las opciones habituales para conectar sedes eran MPLS, un servicio de red privada basado en etiquetas, y VPN sobre internet. MPLS está definido en la RFC 3031 del IETF como una arquitectura de conmutación por etiquetas. Las VPN IPsec se describen en la guía NIST SP 800-77 Revisión 1, publicada en 2020, que las compara con otras alternativas de cifrado.

| Criterio | MPLS | VPN IPsec sobre internet | SD-WAN |
| --- | --- | --- | --- |
| Base de transporte | Red privada del proveedor, con etiquetas de conmutación | Internet, con túneles cifrados | Combina internet, 4G/5G y MPLS |
| Quién administra | Normalmente el proveedor, con coordinación para cada cambio | Cada sede o el equipo de TI, equipo por equipo | Panel central con políticas comunes |
| Priorizar aplicaciones | Depende del contrato y del proveedor | Limitado sin configuración adicional | Políticas por aplicación desde el panel |
| Continuidad | Depende del proveedor y del enlace contratado | Depende de internet; puede combinarse con otro enlace | Puede usar varios enlaces y cambiar entre ellos |
| Costo | Enlace dedicado, según contrato | Internet convencional más equipos | Depende de licencias, equipos y enlaces; compáralo con tu contrato actual |

Esta tabla es una comparación cualitativa. Los costos concretos dependen de cada proveedor y de cada ciudad, así que deben cotizarse con el mismo alcance.

## Qué elegir según tu caso

| Situación | Opción que suele encajar | Por qué |
| --- | --- | --- |
| Una sola sede, poco tráfico | Internet con firewall y VPN si hace falta | Menor complejidad |
| Varias sedes con aplicaciones en la nube y sistemas centrales | SD-WAN | Priorización y gestión central |
| Varias sedes con enlace dedicado ya contratado y sin cambios previstos | Mantener MPLS y evaluar SD-WAN por etapas | Evita migrar solo por moda |
| Varias sedes y usuarios remotos que requieren seguridad integrada | SD-WAN con servicios de acceso seguro (SASE) | Une red y seguridad en una sola política |

## SASE: cómo se relaciona con SD-WAN

SASE (Secure Access Service Edge) es una arquitectura entregada desde la nube que combina SD-WAN con servicios de seguridad. Cisco la describe como una forma de conectar y proteger usuarios, dispositivos, sedes y aplicaciones bajo un mismo marco de políticas. Como mínimo incluye un gateway web seguro (SWG), un broker de seguridad para aplicaciones en la nube (CASB), un firewall como servicio (FWaaS) y acceso remoto de confianza cero (ZTNA).

El término se popularizó en 2019 a partir de un informe de Gartner, según resúmenes de la industria. Gartner también ha publicado pronósticos sobre cuánta de la compra de SD-WAN llegará como parte de una oferta SASE de un solo proveedor. En 2022, por ejemplo, proyectó que para 2026 el 60% de las nuevas compras de SD-WAN lo harían así. Esos pronósticos se han revisado en informes posteriores, por lo que conviene verificar la cifra vigente en Gartner antes de citarla.

La idea de confianza cero, que NIST describe en la SP 800-207, complementa este enfoque: la ubicación de un usuario o de un dispositivo no basta para otorgarle acceso. Es útil cuando los colaboradores trabajan desde casa o desde otras oficinas.

## Tendencias SD-WAN 2026

- **Convergencia de red y seguridad.** La tendencia más clara es combinar SD-WAN con servicios de seguridad en la nube, que es la base de SASE.
- **Salida local a internet para aplicaciones en la nube.** La guía de Microsoft 365 recomienda que el tráfico hacia servicios en la nube salga por la sede más cercana en lugar de pasar por un punto central. Evita los "hairpins", rutas innecesariamente largas que añaden latencia.
- **Migración por etapas desde el WAN tradicional.** La misma guía de Microsoft incluye la migración del WAN tradicional a SD-WAN como una de sus opciones de optimización, porque reemplaza routers tradicionales por equipos virtuales y simplifica la administración del tráfico WAN.
- **Confianza cero como criterio de diseño.** La NIST SP 800-207 describe cómo dejar de confiar en la red interna como si fuera segura por sí misma.

## Adopción en Perú: qué sí se puede afirmar

Al revisar fuentes públicas no encontramos un estudio independiente y reciente que mida cuántas empresas peruanas usan SD-WAN. Las cifras que circulan provienen de proveedores o son globales, y no separan a Perú. Por eso, este artículo no afirma que las empresas peruanas estén migrando de forma masiva. Lo que sí se puede decir con respaldo es que SD-WAN es una opción que fabricantes y guías técnicas ofrecen para empresas con varias sedes.

## ¿Para qué tipo de empresa tiene sentido?

SD-WAN no es exclusivo de las grandes corporaciones. Suele tener sentido para empresas con más de una sede, con equipos que trabajan de forma remota o con dependencia fuerte de aplicaciones en la nube. Si tu empresa ya enfrenta dificultades para mantener una comunicación estable entre oficinas, o si administrar la red de cada sucursal por separado se ha vuelto una carga operativa, vale la pena evaluar esta arquitectura.

Esto conecta con el desafío de sostener [equipos remotos e híbridos](/blog/redes-para-equipos-remotos-e-hibridos-guia-empresas-peruanas) sin sacrificar la calidad de la conexión ni la seguridad de la información que circula entre sedes y colaboradores distribuidos.

## Casos de uso para pymes con varias sedes

- **Oficina central y sucursales que usan el mismo sistema en la nube.** El panel puede dar prioridad al tráfico de ese sistema sobre el resto.
- **Videollamadas y telefonía IP entre sedes.** La voz y el video pueden recibir prioridad frente a descargas. Para entender los requisitos de la voz, revisa la [comparación de telefonía IP y convencional](/blog/voip-vs-telefonia-tradicional-cuanto-ahorra-tu-empresa).
- **Sedes con dos proveedores de internet.** Si un enlace falla, el tráfico puede cambiar de ruta sin intervención manual.
- **Tiendas, agencias u oficinas pequeñas conectadas a una sede central.** Las políticas se aplican igual en todas las ubicaciones desde un solo lugar.

## Requisitos de internet y de la red local

Antes de cotizar, reúne esta información:

- Lista de sedes, con la ubicación, el número de usuarios y las aplicaciones críticas de cada una.
- Enlaces actuales de cada sede, con proveedor, velocidad contratada y calidad observada.
- Ancho de banda que necesita cada sede según sus aplicaciones, incluido el de voz y video.
- Equipos existentes que podrían reutilizarse o que deben reemplazarse, y si son compatibles con la solución.
- Energía de respaldo para los equipos de cada sede.
- Políticas de seguridad vigentes, por ejemplo cómo se controla el acceso a sistemas internos.

## Qué preguntar a un proveedor antes de contratar

1. ¿Qué enlaces incluye la solución y cuáles debo contratar por separado?
2. ¿Dónde vive el orquestador y qué pasa en cada sede si se pierde la conexión con él?
3. ¿Cómo se mide la calidad de cada enlace (pérdida, latencia y jitter) y quién lo revisa?
4. ¿Qué políticas puedo definir por aplicación y cuáles requieren soporte del proveedor?
5. ¿El cifrado entre sedes está incluido y qué servicios de seguridad vienen en el paquete?
6. ¿Qué soporte local hay en Perú y en qué horario?
7. ¿Cómo se hace la migración de cada sede sin cortar el servicio?
8. ¿Qué pasa con mis datos y mi configuración si decido cambiar de proveedor?

## Riesgos y límites

- **Dependencia del proveedor o de la plataforma.** Una solución muy cerrada puede dificultar cambios futuros. Revisa las condiciones de salida antes de firmar.
- **Diseño deficiente.** Si todo el tráfico de nube se envía a un punto central, la ventaja de la ruta más corta se pierde.
- **Continuidad del orquestador.** Confirma qué ocurre en cada sede si el panel central no responde, como se explicó en la sección de arquitectura.
- **No reemplaza la seguridad.** Un SD-WAN o un servicio SASE requiere políticas, actualizaciones y monitoreo.
- **Costos variables.** No existe una tarifa estándar; compara propuestas con el mismo alcance.

## Errores comunes

- **Comprar SD-WAN sin inventario de aplicaciones.** Sin saber qué es crítico, no se puede definir qué priorizar.
- **Creer que SD-WAN reemplaza la calidad del enlace.** Administrar mejor los enlaces ayuda, pero no crea ancho de banda que no existe.
- **Confundir SD-WAN con SASE.** SD-WAN conecta las sedes; SASE suma servicios de seguridad en la nube. Pueden contratarse por separado o juntos.
- **Migrar todas las sedes el mismo día.** Un piloto en una sede permite detectar problemas antes.
- **Ignorar el respaldo.** Sin un enlace secundario y pruebas de conmutación, la ventaja principal de SD-WAN queda sin uso.

## Preguntas frecuentes

### ¿SD-WAN reemplaza completamente al MPLS?

No necesariamente. Muchas empresas combinan SD-WAN con MPLS, o mantienen MPLS para sedes críticas mientras migran el resto. La decisión depende del contrato vigente, de las aplicaciones y de la capacidad de tu equipo para administrar la nueva arquitectura.

### ¿Qué diferencia hay entre SD-WAN y SASE?

SD-WAN administra la conexión entre sedes y enlaces. SASE combina SD-WAN con servicios de seguridad en la nube, como el filtrado web y el acceso seguro para usuarios remotos. Un proveedor puede ofrecer ambos en un solo servicio.

### ¿SD-WAN sirve para una empresa con una sola sede?

Puede servir si la sede tiene varios enlaces y aplicaciones críticas en la nube, pero en general aporta más valor cuando hay varias ubicaciones que deben administrarse como una sola red.

### ¿SD-WAN es más seguro que una VPN?

No necesariamente. SD-WAN suele cifrar el tráfico entre sedes, pero la seguridad real depende de las políticas, de la configuración y de los servicios de protección que se contraten. Una VPN bien configurada también puede ser segura.

### ¿Qué necesito para empezar?

Empieza por el inventario: sedes, enlaces, aplicaciones críticas y equipos existentes. Con esa información, un proveedor puede proponer una arquitectura y una cotización comparables.

## Glosario rápido

**SD-WAN:** red de área amplia administrada por software, que decide la ruta de cada tipo de tráfico entre sedes.

**SASE:** arquitectura en la nube que combina SD-WAN con servicios de seguridad.

**Plano de control:** parte de la red que define las reglas y las rutas.

**Plano de datos:** parte de la red que reenvía el tráfico según esas reglas.

**Edge:** equipo instalado en cada sede que reenvía y cifra el tráfico.

**MPLS:** servicio de red privada basado en etiquetas, contratado normalmente a un proveedor.

**ZTNA:** acceso remoto de confianza cero, que da acceso por aplicación y no por red completa.

## Fuentes y lecturas recomendadas

- Cisco, *What is SASE (Secure Access Service Edge)?*. https://www.cisco.com/c/en/us/products/security/what-is-sase-secure-access-service-edge.html
- Fierce Network, artículo sobre el análisis de Gartner y el mercado de SD-WAN (2022). https://www.fierce-network.com/cloud/gartner-analysis-forces-reshaping-sd-wan-landscape
- Cato Networks, resumen del SASE según el Hype Cycle de Gartner para redes empresariales (2019). Fuente de proveedor. https://www.catonetworks.com/sase/the-secure-access-service-edge-sase-as-described-in-gartners-hype-cycle-for-enterprise-networking-2019
- Microsoft Learn, *Microsoft 365 network connectivity principles* (actualizado en 2026). https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-network-connectivity-principles
- NIST, *SP 800-207: Zero Trust Architecture* (2020). https://www.nist.gov/publications/zero-trust-architecture
- NIST, *SP 800-77 Rev. 1: Guide to IPsec VPNs* (2020). https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-77r1.pdf
- IETF, *RFC 3031: Multiprotocol Label Switching Architecture* (2001). https://datatracker.ietf.org/doc/rfc3031
- MEF, *SD-WAN Service Attributes and Service Framework (MEF 70.2)* (2023). Copia de referencia en mplify.net. https://www.mplify.net/resources/mef-70-2-sd-wan-service-attributes-and-service-framework/
- VMware, guía de arquitectura de SD-WAN (vCloud). https://www.vmware.com/docs/208805aq-so-vcloud-guide-sd-wan-nfv-vfn-uslet-web

Si tienes varias sedes y quieres saber si SD-WAN es la arquitectura adecuada para tu caso, [contáctanos](/contacto). Evaluamos la infraestructura de [telecomunicaciones](/servicios/telecomunicaciones) de tu empresa antes de proponer cualquier cambio.
