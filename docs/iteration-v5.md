# Rediseño integral — septiembre de 2026

## Resultado y decisiones

Home de diez bloques: presentación con escaparate de siete sistemas, tecnologías, ocho capacidades, carrusel de casos, comparador dental, ecosistema, Labs, fundador, calculadora y cierre comercial.

La implementación conserva Next.js, React, formularios, cálculo, contenido de artículos y URLs existentes. Añade cinco páginas de capacidades y siete fichas de experiencia/conceptos: 30 páginas públicas en el sitemap. Geist para interfaz y Manrope para titulares; carbón, blanco cálido y verde con petróleo, ámbar, azul clínico y grafito según el sistema.

- Home: dashboard inicial, agente documental, simulación, visión, aplicación clínica, automatización y precios. Cambio cada 5.6 s, pausa manual/al interactuar, navegación por teclado, swipe y respeto de movimiento reducido. El observador de tamaño responde únicamente a cambios de ancho para no interrumpir las transiciones.
- Ocho capacidades en composición editorial; acordeones nativos en móvil. Explorador de seis problemas en Soluciones, con orientación contextual y cuatro familias de servicios.
- Biblioteca: un caso Ravela confirmado, cinco fichas de experiencia previa del fundador y dos conceptos demostrativos. Precios e integración ilustrativa no se presentan como contratos ni modelos en producción.
- Comparador dental con botones y gesto horizontal, interfaz demostrativa y resultados cualitativos autorizados. Contenido y componente visual intercambiables mediante props.
- Ecosistema Group → Solutions + Labs; Intelligence dentro de Solutions. Labs visible en navegación y Home.
- Miga y Cobranza escolar inteligente conservan nombres y estados confirmados: en desarrollo. No se encontró autorización para renombrar a Colekta ni afirmar disponibilidad.
- Ricardo Valdez: fundador y CEO conforme al texto autorizado. Fotografía original intacta; SHA-1 coincidente con el JPEG proporcionado. Contacto: hola@ravela.online, +52 56 2534 6426.
- Los visuales se construyen con HTML/CSS/SVG y datos sintéticos. No se agregan fotos stock, pacientes, nombres de clientes, resultados económicos ni tecnologías no confirmadas del caso dental.

## Archivos principales

| Grupo | Archivos |
| --- | --- |
| Sistema visual | `app/redesign.css`, `app/globals.css`, `app/layout.tsx` |
| Home y narrativa | `app/page.tsx`, `components/sections/{hero,capability-explorer,real-case,group-architecture,labs-preview,founder-section,roi-widget,cta-final,tech-stack}.tsx` |
| Visuales | `components/visuals/{system-scenes,capability-reel,product-visuals}.tsx` |
| Navegación y medición | `components/layout/{navbar,footer,analytics}.tsx` |
| Contenido estructurado | `lib/data/{capabilities,portfolio}.ts` |
| Catálogo y biblioteca | `components/portfolio/portfolio-showcase.tsx`, `components/soluciones/{problem-explorer,capability-detail,pilar-detail}.tsx` |
| Páginas comerciales | `app/(marketing)/{soluciones,casos-de-exito,nosotros,contacto,recursos}/page.tsx` |
| Nuevos detalles | `app/(marketing)/soluciones/[capacidad]/page.tsx`, `app/experiencia/[slug]/page.tsx` |
| Otras páginas | `app/labs/page.tsx`, `app/casos/[slug]/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/diagnostico/page.tsx`, `app/calculadora-roi/page.tsx` |
| SEO y comprobaciones | `app/sitemap.ts`, `app/opengraph-image.tsx`, `scripts/check-content.ts`, `README.md` |

## Verificación

- `npm run lint`, `npm run typecheck`, `npm run build`: correctos.
- `npx tsx scripts/check-content.ts`: confidencialidad, resultados verificados, clasificación del portafolio, estados de productos y contacto.
- `npx tsx scripts/check-api.ts`: persistencia simulada, validación, fallos, campos trampa, rate limit, diagnóstico y cálculo. Sin correos ni leads reales.
- Playwright: 30 páginas × 390×844, 430×932, 768×1024, 1024×768 y 1440×900. HTTP 200, un H1, canonical y cero desbordamientos/errores de JavaScript.
- Capturas y revisión visual en móvil y escritorio: todas las páginas; secciones completas de Home, Soluciones, Nosotros, Labs, casos, detalles, contacto, diagnóstico y calculadora.
- Axe: sin infracciones WCAG A/AA en las 30 páginas; comprobaciones adicionales en móvil y las siete escenas del escaparate.
- Interacciones: siete escenas × cinco anchos, avance automático/pausa, control de periodo/demanda/precio, solicitud documental simulada, ocho posiciones del carrusel, arrastre con mouse, swipe real mediante eventos táctiles, comparador, sliders, filtros, acordeones, menú completo con foco/Escape/navegación y movimiento reducido.
- 31 destinos internos distintos y sus anclas comprobados. La navegación del pie mantiene acceso al contenido sin JavaScript.
- Formulario: éxito y error con respuestas interceptadas localmente; no se envían solicitudes reales al negocio.
- Lighthouse móvil local: rendimiento 94, accesibilidad 100, buenas prácticas 100, SEO 100. FCP 0.9 s, LCP 3.0 s, TBT 20 ms y CLS 0 en esa ejecución. Son resultados de laboratorio, no métricas de usuarios reales.

## Publicación y límites

Publicación autorizada en `main` del repositorio existente, conectado a Vercel. Se mantiene el dominio asociado a GoDaddy. Las pruebas locales de formularios no verifican la recepción de correos o almacenamiento real en producción; esto depende de las variables de Supabase/Resend del proyecto Vercel. Los enlaces directos de correo, llamada y WhatsApp permanecen disponibles.
