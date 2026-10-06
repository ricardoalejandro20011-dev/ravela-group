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
npx tsx scripts/check-content.ts
```

`check-api.ts` usa un servidor Supabase simulado local. Verifica validación, persistencia, fallos, honeypots, límite de solicitudes, diagnóstico y ROI; no envía correos ni crea prospectos reales.

## Arquitectura conservada

- `app/`: páginas estáticas y artículos, App Router, metadata y dos Route Handlers.
- `components/`: presentación, formularios, diagnóstico y componentes visuales.
- `lib/scoring/`: reglas originales de diagnóstico y cálculo ROI en MXN. No se presentan como predicción de IA ni como rendimiento garantizado.
- `lib/data/` y `lib/mock/`: contenido local. Los artículos son contenido editorial; los casos reales están en `lib/data/cases.ts`; se eliminaron los escenarios ilustrativos anteriores.
- `lib/supabase/`, `lib/mock/leads-store.ts`, `lib/email/`: persistencia y avisos existentes. El nombre histórico `mock/leads-store` se conserva para evitar romper importaciones.
- No existían imágenes reales en `public`, scripts de analytics activos, sitemap, robots ni aviso de privacidad. El isotipo existente se conserva en una paleta sobria.
- Ravela Intelligence es un diagnóstico basado en reglas. No existía un asistente conectado a un proveedor LLM en este repositorio.

## Recepción de solicitudes

La sección `/contacto` ahora permite solicitar cotizaciones con datos de cliente, alcance, objetivos, integraciones, volumen, usuarios, presupuesto, plazo y soporte. Ver [activación, acceso a respuestas y contrato n8n](docs/cotizaciones.md).

Aplicar `supabase/migrations/202610050001_cotizaciones.sql` antes de desplegar y configurar `.env.example`. Sin almacenamiento, la API devuelve 503 en todos los entornos. Las claves locales estaban vacías durante la implementación; las pruebas usan servicios simulados.

Cada registro se guarda antes de intentar el aviso a `hola@ravela.online` y el webhook de n8n. Los estados de entrega se guardan en Supabase y los pendientes pueden reenviarse con `scripts/retry-delivery.ts`. La confirmación del formulario indica recepción, no envío de una cotización. El precio automático requiere configurar reglas y tarifas en n8n.

Protección: validación Zod, campos trampa, límites por IP e instancia, respuestas de error controladas y escape HTML en correos. Ante abuso distribuido, complementar con reglas del firewall de Vercel o un límite compartido.

## Conversión y medición

WhatsApp conserva el número existente y usa el mensaje aprobado. El correo público confirmado se centraliza en `lib/constants/contacto.ts`.

`lib/analytics.ts` expone eventos en `window.dataLayer` y `ravela:analytics`: `hero_diagnostico_click`, `hero_whatsapp_click`, `diagnostico_start`, `diagnostico_complete`, `roi_calculator_use`, `contact_submit`, `whatsapp_click`, `service_view`, `case_use_view`. No envía datos personales ni instala un proveedor externo. Conectar la herramienta de analytics del negocio cuando se elija.

## Contenido y confianza

La arquitectura oficial es Ravela Group → Ravela Solutions (servicios B2B y Ravela Intelligence) + Ravela Labs (productos propios). La Home mantiene el foco comercial en Solutions. Labs se conserva en páginas interiores y no aparece en el contenido ni la navegación de Home.

`lib/data/cases.ts` contiene el caso real confirmado de una clínica dental privada: expediente digital y gestión de citas. El nombre comercial permanece reservado, las tecnologías están ocultas y solo se renderizan resultados con `verified === true`. `lib/data/portfolio.ts` distingue el caso Ravela de cinco experiencias previas del fundador y dos conceptos demostrativos, con privacidad explícita.

`/labs` presenta Miga y cobranza escolar inteligente como productos en desarrollo. Las capacidades futuras se identifican como planeadas y las interfaces son representaciones conceptuales, sin afirmar disponibilidad ni procesamiento de pagos.

Ricardo Valdez aparece en Home y Nosotros, con experiencia previa diferenciada de los proyectos de Ravela. Su fotografía real proporcionada por el usuario se conserva en `public/founder/ricardo-valdez.jpg` (400 × 400 px), sin modificar rasgos ni encuadre. Se presenta a su tamaño original mediante `next/image`, con espacio reservado y carga diferida. El caso dental se presenta mediante una interfaz demostrativa de expediente y agenda, sin datos reales de pacientes.

Contacto público confirmado: `hola@ravela.online` y `+52 56 2534 6426`. Los enlaces `mailto`, `tel` y WhatsApp se generan desde `lib/constants/contacto.ts`. El antiguo destinatario Gmail de notificaciones se sustituye por el contacto actual; otros destinatarios de notificación configurados explícitamente se conservan.

El aviso de privacidad describe el funcionamiento implementado. El negocio debe completar y validar los datos formales del responsable, domicilio, conservación y condiciones reales con quien gestione su privacidad; no se inventaron esos datos.

## SEO

Canonical por página, metadata única de servicios y artículos, OpenGraph, imagen social generada con `next/og`, Twitter card, schema Organization, `robots.txt` y `sitemap.xml`. Se conserva `/casos-de-exito` para mantener enlaces existentes, con título visible “De la idea a la operación”, y se agregan fichas bajo `/casos/[slug]`.

## Despliegue

Repositorio: `ricardoalejandro20011-dev/ravela-group`, rama `main`. Proyecto existente de Vercel: `ravela-group`. El repositorio registra despliegues del bot de Vercel al publicar en GitHub.

El dominio `https://www.ravela.online` ya responde desde Vercel. GoDaddy administra el dominio; no se requiere mover el sitio a GoDaddy ni modificar DNS si se mantiene el proyecto y la asociación actuales. La sesión de Vercel CLI estaba vencida, por lo que esta entrega usa GitHub para disparar el despliegue. Verificar el estado del nuevo despliegue y el contenido servido por el dominio.

## Entrega visual

Home comercial de seis bloques: presentación, experiencia, tecnologías, caso dental, calculadora y contacto. Capacidades, ecosistema, fundador y Labs se conservan en páginas interiores. Se crearon `WorkflowDemo`, `WhatsAppAgentDemo`, `DashboardPreview`, `ProcessBeforeAfter`, `ServiceCard`, `FounderSection`, `FAQ`, `LogoStrip` y la capa `Analytics`; se refactorizaron `DiagnosticoWizard`, `RoiWidget`, `CasoCard`, `ContactForm` y `CtaFinal`.

Las mediciones locales no sustituyen datos de campo de Core Web Vitals ni la revisión del contenido real del negocio. Ver `docs/iteration-v6.md` para la última iteración de diseño, interactividad y móvil y `docs/technology-assets.md` para la procedencia de logos.
