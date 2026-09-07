# Verificación del rediseño — septiembre de 2026

## Resultado local

- `npm run lint`: aprobado.
- `npm run typecheck`: aprobado.
- `npm run build`: aprobado; rutas estáticas, artículos y endpoints generados sin errores.
- `npx tsx scripts/check-api.ts`: aprobado con servidor Supabase local simulado y correo deshabilitado.
- Navegador Chromium: 15 rutas en 375, 430, 768, 1024 y 1440 px; sin desbordamiento horizontal ni errores JavaScript.
- Axe WCAG 2 A/AA y 2.1 AA en 375 y 1440 px: ninguna infracción detectada en las 15 rutas revisadas.
- 17 destinos internos únicos y anclas: sin enlaces rotos.
- Menú móvil: abre y navega; contacto oculto hasta el último paso del diagnóstico.
- Diagnóstico completo hasta envío y manejo del error: verificado en navegador con respuesta simulada.
- Contacto por teléfono y mensaje de éxito: verificado en navegador con respuesta simulada.
- API: correo o teléfono, persistencia, pérdida de conexión, validación, honeypot, límite de solicitudes y retención de respuestas del diagnóstico.
- ROI: valores conocidos de costo mensual, ahorro y horas recuperables verificados.
- Revisión visual del Hero en escritorio y móvil; respeto de `prefers-reduced-motion` mediante CSS.
- Sin fotografías dummy, clientes ficticios, testimonios, métricas comerciales ni certificaciones inventadas en las páginas.

## Lighthouse móvil sobre build de producción local

| Categoría | Puntuación |
| --- | ---: |
| Rendimiento | 97 |
| Accesibilidad | 98 |
| Buenas prácticas | 100 |
| SEO | 100 |

Una medición de laboratorio local; no constituye una garantía de puntuación en todos los dispositivos, redes o ejecuciones ni mide Core Web Vitals de usuarios reales.

## Límites y datos del negocio pendientes

- La entrega no verifica almacenamiento ni recepción de correos reales en producción: las variables locales de Supabase y Resend estaban vacías y la sesión de Vercel CLI había vencido. Se requieren valores válidos en el proyecto Vercel para los formularios. Los errores se muestran sin confirmar falsamente recepción; WhatsApp sigue disponible.
- Capa de eventos preparada sin proveedor externo de analytics conectado.
- Fotografía real del fundador, buzón de dominio activo, casos reales autorizados y datos formales del responsable de privacidad requieren información del negocio.
- El rate limit actual opera por instancia, acompañado de honeypot y validación. La protección global contra abuso requiere reglas de infraestructura o almacenamiento compartido.
