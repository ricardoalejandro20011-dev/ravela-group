import type { CaseStudy } from "@/lib/types";

// Todos los casos son ilustrativos: nombres de negocio y personas
// genéricos, no clientes reales de Ravela Group (ver sección 32 del
// master prompt).
export const casosDeUso: CaseStudy[] = [
  {
    slug: "refaccionaria-munguia-cotizaciones-whatsapp",
    cliente: "Refaccionaria Munguía",
    title: "De 3 horas de espera a cotizaciones al instante en WhatsApp",
    industria: "Refaccionaria industrial y materiales",
    problema:
      "Los mostradores de sus 2 sucursales se saturaban respondiendo preguntas sobre disponibilidad y precios de refacciones en WhatsApp, perdiendo clientes por tardar horas en contestar.",
    solucion:
      "Flujo automatizado conectado a su inventario centralizado que consulta precios y stock disponible en segundos, generando una pre-cotización automática para el cliente.",
    resultado: "Reducción del 80% en tiempo de respuesta a cotizaciones cotidianas.",
    pilarRelacionado: "automatizacion",
    esIlustrativo: true,
  },
  {
    slug: "odontocare-asistente-citas-whatsapp",
    cliente: "Clínica Dental OdontoCare",
    responsable: "Dra. Sofía Morales",
    title: "Asistente de citas por WhatsApp que eliminó el ausentismo",
    industria: "Salud y consultorio médico",
    problema:
      "La asistente dedicada perdía hasta 4 horas diarias confirmando citas por mensaje y teléfono. Aun así, el 25% de los pacientes no se presentaba por olvido, dejando huecos en la agenda.",
    solucion:
      "Asistente conversacional de citas en WhatsApp que muestra fechas disponibles, agenda la cita, envía recordatorios automáticos 24 horas antes y permite reagendar con un par de clics.",
    resultado: "Reducción del ausentismo del 25% al 5% y agenda optimizada en automático.",
    pilarRelacionado: "inteligencia-artificial",
    esIlustrativo: true,
  },
  {
    slug: "torres-asociados-analisis-expedientes-ia",
    cliente: "Firma Legal Torres & Asociados",
    responsable: "Lic. Fernando Torres",
    title: "Aplicación con IA para análisis express de expedientes",
    industria: "Servicios legales / Abogacía",
    problema:
      "Revisar un expediente extenso o contrato de más de 80 páginas antes de una audiencia tomaba horas de lectura analítica a los abogados pasantes.",
    solucion:
      "Aplicación web interna (MVP) impulsada por un LLM que analiza los PDF de expedientes, extrae cláusulas críticas e inconsistencias, y genera un resumen ejecutivo con línea del tiempo en minutos.",
    resultado:
      "Reducción de horas de lectura previa a minutos, permitiendo atender más casos sin contratar personal extra.",
    pilarRelacionado: "inteligencia-artificial",
    esIlustrativo: true,
  },
];
