# Ravela Group

Sitio B2B para PYMEs mexicanas. Conserva Next.js 16.2.12 (App Router), React 19.2.4, TypeScript y Tailwind CSS 4.

## Desarrollo y validación

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
npx tsx scripts/check-api.ts
```

`check-api.ts` usa un servidor Supabase simulado local. Verifica validación, persistencia, fallos, honeypots, límite de solicitudes, diagnóstico y ROI; no envía correos ni crea prospectos reales.

## Arquitectura conservada

- `app/`: páginas estáticas y artículos, App Router, metadata y dos Route Handlers.
- `components/`: presentación, formularios, diagnóstico y componentes visuales.
- `lib/scoring/`: reglas originales de diagnóstico y cálculo ROI en MXN. No se presentan como predicción de IA ni como rendimiento garantizado.
- `lib/data/` y `lib/mock/`: contenido local. Los artículos son contenido editorial; los casos son escenarios demostrativos sin clientes ni resultados ficticios.
- `lib/supabase/`, `lib/mock/leads-store.ts`, `lib/email/`: persistencia y avisos existentes. El nombre histórico `mock/leads-store` se conserva para evitar romper importaciones.
- No existían imágenes reales en `public`, scripts de analytics activos, sitemap, robots ni aviso de privacidad. El isotipo existente se conserva en una paleta sobria.
- Ravela Intelligence es un diagnóstico basado en reglas. No existía un asistente conectado a un proveedor LLM en este repositorio.

## Recepción de solicitudes

Configurar en Vercel las variables de `.env.example` y crear la tabla `leads` descrita en `lib/supabase/schema.ts`. `NEXT_PUBLIC_SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` son obligatorias para guardar prospectos en producción.

Las variables locales de Supabase y Resend estaban vacías durante esta entrega. Las pruebas de integración usan un servidor simulado; no prueban recepción real en una cuenta de producción. Si falta almacenamiento o falla la inserción, la API responde 503 y el formulario ofrece reintento y WhatsApp, sin confirmar falsamente la recepción. En desarrollo, sin Supabase, se conserva el respaldo temporal en memoria.

El contacto acepta nombre, empresa, WhatsApp **o** correo y descripción. Se preservan los campos anteriores como opcionales por compatibilidad. El diagnóstico pide contacto al final y conserva sus respuestas y resultado en `mensaje` para el seguimiento.

Resend notifica después del guardado. Revisar remitente y destinatario autorizados; el remitente de prueba tiene restricciones del proveedor. Una falla de notificación no elimina un prospecto guardado. No se ha enviado ningún correo real durante la verificación.

Protección: validación Zod, campos trampa, límites por IP e instancia, respuestas de error controladas y escape HTML en correos. Ante abuso distribuido, complementar con reglas del firewall de Vercel o un límite compartido.

## Conversión y medición

WhatsApp conserva el número existente y usa el mensaje aprobado. El correo público se centraliza en `lib/constants/contacto.ts`, configurable con `NEXT_PUBLIC_CONTACT_EMAIL`; no se publica un buzón de dominio inexistente.

`lib/analytics.ts` expone eventos en `window.dataLayer` y `ravela:analytics`: `hero_diagnostico_click`, `hero_whatsapp_click`, `diagnostico_start`, `diagnostico_complete`, `roi_calculator_use`, `contact_submit`, `whatsapp_click`, `service_view`, `case_use_view`. No envía datos personales ni instala un proveedor externo. Conectar la herramienta de analytics del negocio cuando se elija.

## Contenido y confianza

Los casos llevan `type: "demonstrative"`. Para mostrar `Caso real`, se requieren `type: "real"`, `authorized: true` y contenido real autorizado. Nunca convertir un ejemplo en caso real cambiando únicamente el indicador.

Ricardo Valdez tiene una sección editorial con monograma, sin fotografía falsa. Agregar su fotografía real cuando esté disponible. No se publican clientes, cifras de proyectos, testimonios, certificaciones o alianzas no confirmadas.

El aviso de privacidad describe el funcionamiento implementado. El negocio debe completar y validar los datos formales del responsable, domicilio, conservación y condiciones reales con quien gestione su privacidad; no se inventaron esos datos.

## SEO

Canonical por página, metadata única de servicios y artículos, OpenGraph, imagen social generada con `next/og`, Twitter card, schema Organization, `robots.txt` y `sitemap.xml`. Se conserva `/casos-de-exito` para mantener enlaces existentes, con título visible “Casos de uso”.

## Despliegue

Repositorio: `ricardoalejandro20011-dev/ravela-group`, rama `main`. Proyecto existente de Vercel: `ravela-group`. El repositorio registra despliegues del bot de Vercel al publicar en GitHub.

El dominio `https://www.ravela.online` ya responde desde Vercel. GoDaddy administra el dominio; no se requiere mover el sitio a GoDaddy ni modificar DNS si se mantiene el proyecto y la asociación actuales. La sesión de Vercel CLI estaba vencida, por lo que esta entrega usa GitHub para disparar el despliegue. Verificar el estado del nuevo despliegue y el contenido servido por el dominio.

## Entrega visual

Home orientada a problemas y tres soluciones, interfaces propias en HTML/React, navegación compacta, WhatsApp, FAQ, método en español, casos demostrativos y fundador. Se crearon `WorkflowDemo`, `WhatsAppAgentDemo`, `DashboardPreview`, `ProcessBeforeAfter`, `ServiceCard`, `FounderSection`, `FAQ`, `LogoStrip` y la capa `Analytics`; se refactorizaron `DiagnosticoWizard`, `RoiWidget`, `CasoCard`, `ContactForm` y `CtaFinal`.

Las mediciones locales no sustituyen datos de campo de Core Web Vitals ni la revisión del contenido real del negocio. Ver `docs/verification.md` para resultados de esta entrega.
