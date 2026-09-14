# Iteración 4 — diseño, interactividad y móvil

## Resultado

La Home conserva la identidad, fotografía real, rutas y contenido confirmado. El recorrido principal ahora es: propuesta y demo de WhatsApp → problemas → soluciones → caso real → calculadora → tecnologías → metodología → fundador. Se conservan Perspectivas, preguntas frecuentes y el CTA final. La experiencia extensa del fundador permanece en Nosotros; Intelligence se conecta desde la navegación y la calculadora.

## Cambios

- Hero con cinco pasos secuenciales, estados y checkmarks. Permite explorar cada paso y pausar/reanudar. Se detiene al interactuar, fuera de pantalla, en una pestaña oculta y con movimiento reducido. El contenido inicial se sirve desde el servidor.
- Cinta de seis problemas reconocibles, scroll nativo, snap, controles anterior/siguiente y pista visible para deslizar.
- Tres soluciones en tabs: cambian título, explicación, aplicaciones, visual y CTA. Teclado con flechas/Home/End, roles y paneles asociados. En móvil los botones se desplazan horizontalmente. Las demostraciones de agente y escenarios conservan su interacción.
- Comparador dental Antes/Después en Home y fichas de caso, utilizable con toque. Solo alcance confirmado y datos ilustrativos; ninguna métrica de resultados ni tecnología inventada.
- Calculadora con controles táctiles de 44 px, pulgares de slider grandes, resultados inmediatos y bloque verde con costo, ahorro orientativo y horas. Avisos de estimación conservados, resultados anunciados de forma accesible y CTA «Calcularlo con mi proceso real».
- Franja verde de tecnologías con los 12 nombres confirmados, logos monocromáticos sin tarjetas individuales, textos solicitados, dos loops lentos, degradados laterales y controles. Deslizar congela el movimiento en la posición actual; reanudar conserva la continuidad. Con movimiento reducido se muestran todos los logos estáticos y se ocultan los duplicados.
- Metodología Entendemos / Diseñamos / Implementamos / Mejoramos, con entregables. Un IntersectionObserver actualiza el visual sticky en escritorio. En móvil es una secuencia vertical, sin sticky.
- Menú móvil como dialog nativo lateral: fondo modal, bloqueo de scroll, cierre con Escape, foco contenido y restitución al botón. Los enlaces cierran el panel.
- Espaciado lateral de 20 px en móvil, título fluido, secciones más compactas y microinteracciones cortas con respeto a movimiento reducido. FAQ con objetivos táctiles mayores y apertura discreta. Se corrigen etiquetas accesibles de Perspectivas y jerarquía del footer.

## Verificación

- `npm run lint`, `npm run typecheck` y `npm run build`: aprobados.
- `npx tsx scripts/check-api.ts` y `npx tsx scripts/check-content.ts`: aprobados, con servicios externos simulados y sin enviar leads reales.
- Chromium: nueve rutas en 390×844, 430×932, 768×1024, 1024×768 y 1440×900, sin scroll horizontal accidental. Los tres estados de soluciones se comprueban en los cinco anchos.
- Axe: Home móvil/escritorio, menú abierto y cada panel de soluciones móvil sin infracciones en las reglas comprobadas.
- Interacciones comprobadas: tabs con teclado y toque, acción del agente, escenarios, antes/después, sliders, carrusel de problemas, pausa de hero, pausa/reanudación de tecnologías, menú y acordeones.
- Gestos táctiles mediante eventos reales de entrada en emulación Chromium; no sustituyen una prueba física en iPhone/Android. Se comprueba continuidad al tocar/reanudar y en el límite del loop.
- Movimiento reducido sin autoplay ni desbordamiento; metodología móvil sin sticky. Sin errores JavaScript en el recorrido y con imágenes cargadas.
- Contenido y CTA comprobados con JavaScript desactivado; navegación inicial comprobada con conexión móvil y CPU limitadas.
- Revisión visual por secciones de toda la Home en 390 y 1440 px, además de los tres estados de soluciones.
- No se agregan dependencias de producción ni librerías de animación. Imágenes inferiores mantienen carga diferida.

- Lighthouse móvil final: rendimiento 97, accesibilidad 100, buenas prácticas 100, SEO 100. FCP 0.9 s, LCP 2.5 s, TBT 20 ms, CLS 0 en la medición local.

## Límites

Las comprobaciones de rendimiento son de laboratorio; no representan Core Web Vitals de usuarios reales. La recepción real de formularios sigue dependiendo de la configuración de Supabase/Resend en producción y no se afirma haber probado la entrega de correos. No se publican nuevos clientes, métricas ni datos privados.
