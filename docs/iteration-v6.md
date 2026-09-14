# Home comercial simplificada

La Home queda en seis bloques: qué es y qué hace Ravela; casos y experiencia aplicada; tecnologías; clínica dental antes/después; simulador; contacto y diagnóstico.

Se retiran del inicio el escaparate adicional, el catálogo de capacidades, el ecosistema, Labs y la biografía. Soluciones, Nosotros, Casos y Perspectivas siguen accesibles; el contenido permanece en sus páginas. Labs no aparece en el contenido, menú ni pie de Home, y permanece accesible desde las páginas interiores.

El carrusel de Home muestra seis fichas confirmadas: experiencia previa del fundador y el caso dental, claramente diferenciados. Los dos conceptos ilustrativos permanecen en la biblioteca completa. El dashboard de operación abre el carrusel para evitar duplicar el protagonismo inicial de la clínica.

Se sustituye el dashboard oscuro por un panel operativo propio: barras por periodo, totales coherentes, distribución por estados, tabla de movimientos y filtros interactivos en el detalle. La clínica muestra una agenda de junio de 2026, registros ficticios y estados de cita; el comparador usa la interfaz sin marco de laptop decorativo. Los visuales siguen identificados como representaciones con datos demostrativos.

Archivos: `app/page.tsx`, `app/redesign.css`, `components/sections/hero.tsx`, `components/portfolio/portfolio-showcase.tsx`, `components/layout/{navbar,footer}.tsx`, `components/visuals/{operational-dashboard,system-scenes}.tsx`.

Verificación: lint, TypeScript y build; Home y seis páginas interiores a 390, 430, 768, 1024 y 1440 px; cero desbordamientos o errores JS; Axe AA sin infracciones en Home móvil/escritorio; carrusel, comparador, calculadora, filtros del dashboard y navegación móvil contextual. Revisión visual con capturas de Home y dashboard en escritorio y móvil.
