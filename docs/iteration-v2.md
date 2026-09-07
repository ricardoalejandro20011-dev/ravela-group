# Iteración 2: Ravela Group, Solutions, Labs y casos reales

## Arquitectura

- Ravela Group: marca y empresa madre.
- Ravela Solutions: servicios B2B de automatización, IA, datos e integración. Ravela Intelligence pertenece a esta unidad.
- Ravela Labs: estudio interno de producto. Miga y cobranza escolar inteligente están en desarrollo.

## Caso publicado

`/casos/clinica-dental-privada`: expediente digital y gestión de citas, con el reto, solución, flujo y resultado cualitativo confirmados por el usuario. Nombre reservado; sin tecnologías no confirmadas, porcentajes, ahorro, ROI, pacientes identificables o testimonios. Se conservaron la URL histórica `/casos-de-exito` y el evento `case_use_view` por compatibilidad, con presentación “Casos reales”.

Se eliminaron del sitio y de los archivos de datos los tres escenarios previos (distribuidora, consultorio y despacho). La experiencia previa del fundador se presenta en una sección aparte y no se atribuye como proyectos o clientes de Ravela.

## Labs

Nueva página `/labs`, con anclas `/labs#miga` y `/labs#cobranza-escolar`. Miga usa una sección expandible para describir alcance y estados; no necesita una página separada con contenido repetido. Las interfaces son conceptos de producto, con datos demostrativos y capacidades futuras señaladas. No hay compra, precios ni afirmación de que Ravela procese pagos.

## Contacto y conversión

Correo público `hola@ravela.online`; teléfono y WhatsApp `+52 56 2534 6426`. Se actualizan todos los enlaces mediante la configuración central. Se mantiene el CTA principal de diagnóstico gratuito; Labs tiene una posición secundaria en Home. La evidencia del caso real y el fundador aparecen antes del diagnóstico y la calculadora.

## Información real pendiente del usuario

- Foto del fundador: recibida e incorporada posteriormente en `public/founder/ricardo-valdez.png`, en Home y Nosotros. Se conserva el original de 185 × 273 px sin alterar la identidad ni ampliar artificialmente.
- Imagen autorizada del caso: `public/cases/dental/hero.webp`. Hasta entonces se muestra la representación del flujo autorizado, sin datos reales de pacientes ni capturas inventadas.
- Tecnologías efectivamente utilizadas en el proyecto dental; sección oculta hasta recibir confirmación.
- Nombre comercial de la clínica y autorización, si se decide publicarlo. Actualmente reservado.
- Métricas del proyecto: no suministradas ni publicadas.
- Nombre comercial definitivo de cobranza escolar y posteriores confirmaciones de disponibilidad de los productos.
- La recepción real en Supabase/Resend sigue dependiendo de la configuración de producción. Esta iteración conserva los endpoints y verifica su comportamiento con un servidor simulado, sin enviar correos reales.

## Verificación

Lint, typecheck y build aprobados. Pruebas existentes de API/ROI aprobadas. Nueva prueba de contenido protege el nombre confidencial, filtra resultados no verificados, confirma el estado de los productos y los nuevos datos de contacto.

Chromium: 17 rutas en 375, 430, 768, 1024 y 1440 px, sin desbordamientos ni errores de JavaScript. Axe WCAG A/AA sin infracciones en 375 y 1440 px. 19 destinos internos/anclas revisados sin enlaces rotos. Se verificaron expansión de Miga, navegación móvil, contacto al final del diagnóstico y el enlace de WhatsApp actualizado.

Lighthouse móvil local: rendimiento 97, accesibilidad 98, buenas prácticas 100 y SEO 100. Son mediciones locales, no garantías de campo.

## Archivos modificados, creados o eliminados

- `.env.example`
- `README.md`
- `app/(marketing)/casos-de-exito/page.tsx`
- `app/(marketing)/nosotros/page.tsx`
- `app/(marketing)/recursos/page.tsx`
- `app/(marketing)/soluciones/page.tsx`
- `app/casos/[slug]/page.tsx`
- `app/diagnostico/page.tsx`
- `app/labs/page.tsx`
- `app/layout.tsx`
- `app/page.tsx`
- `app/sitemap.ts`
- `components/casos/caso-card.tsx`
- `components/casos/caso-illustration.tsx`
- `components/demos/dental-preview.tsx`
- `components/demos/lab-previews.tsx`
- `components/layout/analytics.tsx`
- `components/layout/footer.tsx`
- `components/layout/navbar.tsx`
- `components/sections/casos-de-uso.tsx`
- `components/sections/founder-experience.tsx`
- `components/sections/founder-section.tsx`
- `components/sections/group-architecture.tsx`
- `components/sections/hero.tsx`
- `components/sections/problemas.tsx`
- `components/sections/ravela-intelligence.tsx`
- `components/sections/real-case.tsx`
- `components/ui/logo.tsx`
- `docs/iteration-v2.md`
- `lib/assets.ts`
- `lib/constants/contacto.ts`
- `lib/data/cases.ts`
- `lib/data/products.ts`
- `lib/email/notify-lead.ts`
- `lib/mock/casos.ts`
- `lib/types/contenido.ts`
- `public/cases/dental/.gitkeep`
- `public/founder/.gitkeep`
- `scripts/check-content.ts`
