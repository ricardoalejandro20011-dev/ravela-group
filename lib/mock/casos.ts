import type { CaseStudy } from "@/lib/types";
export const casosDeUso: CaseStudy[] = [
  {
    slug: "distribuidora-refacciones",
    type: "demonstrative",
    cliente: "Distribuidora de refacciones",
    title: "Del WhatsApp a la cotización",
    industria: "Comercio y distribución",
    problema:
      "El equipo responde manualmente disponibilidad y precios por WhatsApp.",
    solucion:
      "Agente conectado al catálogo y al inventario que prepara cotizaciones y registra la consulta.",
    resultado:
      "Impacto posible: respuestas más rápidas y menos captura manual, según la calidad del catálogo y la integración.",
    pilarRelacionado: "automatizacion",
  },
  {
    slug: "clinica-consultorio",
    type: "demonstrative",
    cliente: "Clínica / consultorio",
    title: "Una agenda con seguimiento",
    industria: "Salud",
    problema:
      "Confirmaciones y reagendamientos manuales interrumpen la atención del equipo.",
    solucion:
      "Agente de citas y recordatorios conectado a la agenda, con opción de atención humana.",
    resultado:
      "Impacto posible: menos tareas de confirmación y mayor facilidad para reagendar.",
    pilarRelacionado: "inteligencia-artificial",
  },
  {
    slug: "despacho-profesional",
    type: "demonstrative",
    cliente: "Despacho profesional",
    title: "Documentos más fáciles de consultar",
    industria: "Servicios profesionales",
    problema:
      "El equipo dedica horas a localizar y revisar información en documentos.",
    solucion:
      "Herramienta interna de análisis y resumen con IA, con referencias al documento original y revisión humana.",
    resultado:
      "Impacto posible: agilizar la revisión inicial y la búsqueda de información.",
    pilarRelacionado: "inteligencia-artificial",
  },
];
