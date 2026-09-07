# Iteración visual 3 — firma tecnológica boutique

## Alcance y arquitectura

Se conserva Next.js 16, React 19, Tailwind 4, routing, metadata, diagnóstico, calculadora, formularios y caso dental. La instrucción directa del usuario sustituye la fotografía previa por el JPEG nuevo de 400 × 400 px; se elimina el PNG anterior del sitio. El original nuevo se copia sin alterar identidad ni encuadre a `public/founder/ricardo-valdez.jpg` y se sirve con `next/image` en Home y Nosotros.

Labs sale del header y del flujo de Home. El footer mantiene un único acceso “Ravela Labs” bajo “Explorar”, sin enlaces directos a productos. Se conserva la explicación de unidades en Nosotros, sin un enlace comercial a Labs.

## Experiencia aplicada

Se reemplazan cuatro tarjetas por cuatro composiciones editoriales alternadas, con visuales de aproximadamente 576 px en escritorio y visual antes del texto en móvil:

- Workflow empresarial: solicitud, validación, reglas, acciones, sistema y notificación, con estados.
- Agente: documentos, consulta, fuentes y acción interactiva de demostración, sin acciones externas.
- Simulación: indicadores, escenario Base/Conservador/Alto y gráfica que cambia con la selección.
- Visión por computadora: ilustración SVG original de una operación logística, cajas, detecciones y alerta. No representa una instalación ni fotografía real.

La experiencia del fundador sigue separada de los casos de Ravela. Todos los valores en estas visuales se identifican como demostrativos; no son resultados medidos de clientes. Los chips usan categorías, no herramientas atribuidas a proyectos sin confirmación.

## Caso dental

Se conserva el único caso confirmado, su alcance, privacidad y resultado cualitativo. La representación ahora incluye expediente, paciente de demostración, historial y agenda con una cita ilustrativa. No se agregan resultados numéricos, tecnologías, pacientes ni información clínica real.

## Ecosistema tecnológico

Dos bandas continuas con 12 plataformas del listado confirmado por el usuario. Pausa al pasar el cursor, botón explícito de pausa y disposición estática completa con `prefers-reduced-motion`. Los duplicados decorativos se ocultan a lectores de pantalla y en movimiento reducido. No se publican partners, certificaciones ni alianzas.

Siete assets locales: Microsoft, Azure, Fabric, Power BI, Power Platform, Power Automate y OpenAI. Claude, n8n, WhatsApp, Google y HubSpot usan Simple Icons desde `react-icons/si`. Ver `technology-assets.md` para procedencia.

## Labs y conocimiento

`/labs` adopta “Exploramos problemas. Construimos productos.”, con transición corta y respeto a movimiento reducido. Miga presenta un mockup móvil propio con conversación, gasto mensual, categorías, presupuesto y movimientos. Cobranza escolar presenta dashboard, próximos vencimientos y recorrido preventivo. Se conservan estados de desarrollo y capacidades planeadas; no hay compras ni afirmaciones de procesamiento de fondos. No se agrega ningún nombre interno a metadata, URLs, código público o sitemap.

Se retira el CTA comercial final de Labs y se usa un cierre de iniciativa de producto. En Home se agrega Perspectivas con los dos artículos existentes; no se crean artículos ni fechas ficticias. Se corrige una generalización cuantitativa no respaldada que existía en el primer artículo.

## Validación

- Lint, typecheck y build aprobados.
- Pruebas existentes de API/ROI y privacidad/contenido aprobadas; no se envían correos ni prospectos reales.
- Chromium: 17 rutas en 375, 430, 768, 1024 y 1440 px sin desbordamiento ni errores JavaScript.
- Axe WCAG A/AA: sin infracciones en 375 y 1440 px.
- 17 destinos internos/anclas revisados sin enlaces rotos.
- Interacciones verificadas: selector de escenario, acción del agente, expansión de Miga, menú móvil, formularios y controles de movimiento.
- Movimiento reducido verificado en los cinco anchos, esperando la estabilización del layout al cambiar el viewport.
- Logos y fotografía cargan; no hay imágenes rotas. Se revisaron capturas de las cuatro experiencias, logos, fundador y productos.
- Lighthouse móvil local: rendimiento 99, accesibilidad 99, buenas prácticas 100 y SEO 100. Medición de laboratorio, no garantía de métricas de campo.

## Información pendiente

Continúan pendientes tecnologías específicas y métricas del caso dental, identidad autorizada del cliente, imagen real autorizada de la solución si se desea sustituir la representación, URL personal de LinkedIn del fundador, nombre comercial definitivo del producto escolar y configuración/verificación real de recepción en Supabase/Resend. No se rellenan estos datos con suposiciones. La fotografía del fundador ya fue suministrada y sustituida.

## Archivos modificados, creados o eliminados

- `README.md`
- `app/globals.css`
- `app/labs/page.tsx`
- `app/page.tsx`
- `components/casos/caso-card.tsx`
- `components/demos/dental-preview.tsx`
- `components/demos/experience-visuals.tsx`
- `components/demos/lab-previews.tsx`
- `components/layout/footer.tsx`
- `components/layout/navbar.tsx`
- `components/sections/founder-experience.tsx`
- `components/sections/founder-section.tsx`
- `components/sections/group-architecture.tsx`
- `components/sections/insights.tsx`
- `components/sections/tech-stack.tsx`
- `docs/iteration-v3.md`
- `docs/technology-assets.md`
- `lib/data/cases.ts`
- `lib/data/products.ts`
- `lib/mock/blog.ts`
- `public/founder/ricardo-valdez.jpg`
- `public/founder/ricardo-valdez.png`
- `public/technology/azure.svg`
- `public/technology/fabric.svg`
- `public/technology/microsoft.png`
- `public/technology/openai.svg`
- `public/technology/power-automate.svg`
- `public/technology/power-bi.svg`
- `public/technology/power-platform.svg`
