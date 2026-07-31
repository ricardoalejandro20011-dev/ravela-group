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

Mientras no se conecten los servicios reales (Supabase, proveedor de IA, email, CRM),
el sitio funciona con datos mock (`lib/mock/`) y las variables pueden quedar vacías.
Nunca subas `.env.local` a git ni expongas keys en código de cliente.

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

Desarrollo por fases (ver roadmap acordado). Fase actual: **Fase 1 — Arquitectura**.
