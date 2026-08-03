# Ravela Group — Sitio y plataforma comercial

**Intelligence. Automated.** Sitio web y plataforma de generación de leads de Ravela Group, consultora de automatización, IA y transformación digital para PYMEs mexicanas.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion, Lucide Icons, Recharts
- React Hook Form + Zod

## 1. Requisitos

- Node.js 20.9+ (recomendado 22 LTS o superior)
- npm 10+

## 2. Instalación

```bash
npm install
```

## 3. Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores según el entorno:

```bash
cp .env.example .env.local
```

Mientras no se conecten los servicios reales, el sitio funciona con datos mock y
almacenamiento en memoria. Nunca subas `.env.local` a git ni expongas keys en código
de cliente.

**Para que los formularios (contacto y diagnóstico) guarden leads de forma real en
producción, se necesitan estas dos variables como mínimo:**

- **Supabase** (almacenamiento persistente de leads):
  1. Crea un proyecto gratis en [supabase.com](https://supabase.com).
  2. En el SQL Editor, corre el `create table leads (...)` documentado en
     `lib/supabase/schema.ts`.
  3. Copia `Project URL` → `NEXT_PUBLIC_SUPABASE_URL` y la `service_role` key
     (Project Settings → API) → `SUPABASE_SERVICE_ROLE_KEY`.
  - Sin esto, los leads solo viven en memoria durante esa invocación y se
    pierden — en Vercel (serverless) esto significa que **no persisten**.
- **Resend** (notificación por correo de cada lead nuevo a `ravelaservicios@gmail.com`):
  1. Crea una cuenta gratis en [resend.com](https://resend.com).
  2. Copia tu API key → `RESEND_API_KEY`.
  - Sin esto, el envío de correo simplemente se omite (no rompe el sitio).

## 4. Ejecutar en localhost

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Si el puerto 3000 está ocupado, Next.js
usará automáticamente el siguiente disponible (por ejemplo 3001) e imprimirá la URL en consola.

## 5. Build de producción

```bash
npm run build
npm run start
```

## 6. Tests

```bash
npm run test
```

*(Se agrega en la Fase 15 — Testing.)*

## 7. Lint y typecheck

```bash
npm run lint
npm run typecheck
```

## 8. Despliegue

Preparado para desplegar en [Vercel](https://vercel.com) (compatible también con Supabase,
Cloudflare y Azure para servicios de backend). Pasos generales:

1. Crear repositorio en GitHub y hacer push de este proyecto.
2. Importar el repositorio en Vercel.
3. Configurar las variables de entorno de `.env.example` en el dashboard de Vercel
   (Project Settings → Environment Variables).
4. Desplegar. Vercel detecta Next.js automáticamente.

No se despliega nada automáticamente sin autorización explícita.

## 9. Configuración de dominio

Desde Vercel: Project Settings → Domains → agregar el dominio de Ravela Group y seguir las
instrucciones de DNS (registros A/CNAME). HTTPS se configura automáticamente vía Vercel.

## 10. Variables de entorno en producción

Configurar en Vercel (o el proveedor elegido) las mismas claves de `.env.example`,
con los valores reales de producción — nunca reutilizar credenciales de desarrollo.

## Estructura del proyecto

```
app/                  Rutas (App Router)
  (marketing)/         Páginas de marketing: soluciones, industrias, nosotros, contacto...
  diagnostico/          Ravela Intelligence™ (wizard de diagnóstico)
  calculadora-roi/
  blog/[slug]/
  api/                  Route handlers (diagnóstico, ROI, contacto, asistente IA)
components/
  ui/                   Design system (botones, cards, inputs)
  sections/              Secciones reutilizables de página
  layout/                Navbar, footer
lib/
  types/                 Modelo de datos (Lead, Diagnóstico, ROI, Blog, Casos, Paquetes)
  scoring/                Motor de Ravela Opportunity Score™ y cálculo de ROI
  mock/                   Datos mock (paquetes, blog, casos, leads en memoria)
  supabase/               Contrato de esquema para la futura conexión a Supabase
  validations/            Esquemas Zod de formularios
content/blog/            Contenido del blog
public/brand/             Logo, isotipo, favicon
```

## Estado del proyecto

Sitio completo: Home, Soluciones (+4 pilares), Ravela Intelligence™ (diagnóstico),
Calculadora de ROI, Casos de éxito, Nosotros, Recursos, Blog y Contacto, todos
funcionales. Pendiente antes de producción: conectar Supabase y Resend (ver
sección 3), y SEO/analytics avanzados.
