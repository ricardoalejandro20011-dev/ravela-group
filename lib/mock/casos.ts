import type { CaseStudy } from "@/lib/types";

// Todos los casos son ilustrativos: nombres de negocio genéricos, no
// clientes reales de Ravela Group (ver sección 32 del master prompt).
export const casosDeUso: CaseStudy[] = [
  {
    slug: "ferreteria-lopez-reportes-automatizados",
    cliente: "Ferretería López",
    title: "De días a minutos: reportes de ventas automatizados",
    industria: "Ferretería y materiales de construcción",
    problema:
      "El equipo administrativo dedicaba más de 15 horas a la semana consolidando reportes de ventas desde Excel de sus 3 sucursales.",
    solucion:
      "Automatización de la consolidación de datos y generación de reportes con un dashboard centralizado.",
    resultado:
      "Reducción estimada del tiempo de generación de reportes de días a minutos.",
    pilarRelacionado: "automatizacion",
    esIlustrativo: true,
  },
  {
    slug: "boutique-casa-bonita-asistente-whatsapp",
    cliente: "Boutique Casa Bonita",
    title: "Un asistente de IA que nunca deja un mensaje sin responder",
    industria: "Comercio al por menor (venta por WhatsApp)",
    problema:
      "La dueña atendía manualmente más de 100 mensajes de WhatsApp al día entre pedidos, dudas de tallas y seguimiento de envíos.",
    solucion:
      "Asistente de IA que responde preguntas frecuentes, captura pedidos simples y escala a una persona los casos que lo requieren.",
    resultado:
      "Tiempo de respuesta estimado de horas a segundos, sin contratar personal adicional.",
    pilarRelacionado: "inteligencia-artificial",
    esIlustrativo: true,
  },
];
