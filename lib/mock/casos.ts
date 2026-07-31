import type { CaseStudy } from "@/lib/types";

// Todos los casos son ilustrativos: Ravela Group no inventa clientes,
// testimonios ni resultados reales (ver sección 32 del master prompt).
export const casosDeUso: CaseStudy[] = [
  {
    slug: "distribuidora-regional-reportes-automatizados",
    title: "Distribuidora regional automatiza sus reportes semanales",
    industria: "Distribución y logística",
    problema:
      "El equipo administrativo dedicaba más de 15 horas a la semana consolidando reportes de ventas desde Excel.",
    solucion:
      "Automatización de la consolidación de datos y generación de reportes con un dashboard centralizado.",
    resultado:
      "Reducción estimada del tiempo de generación de reportes de días a minutos.",
    pilarRelacionado: "automatizacion",
    esIlustrativo: true,
  },
];
