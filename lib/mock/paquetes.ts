import type { Paquete } from "@/lib/types";

export const paquetes: Paquete[] = [
  {
    id: "ravela-start",
    nombre: "Ravela Start",
    precioDesdeMXN: 5000,
    moneda: "MXN",
    descripcion: "Primeros pasos en automatización para negocios pequeños.",
    idealPara: "Negocios pequeños que dan sus primeros pasos en digitalización.",
    incluye: [
      "Diagnóstico inicial de procesos",
      "Automatización de 1-2 procesos clave",
      "Acompañamiento básico",
    ],
  },
  {
    id: "ravela-grow",
    nombre: "Ravela Grow",
    precioDesdeMXN: 15000,
    moneda: "MXN",
    descripcion: "Automatización e integración para PYMEs en crecimiento.",
    idealPara: "PYMEs que necesitan automatizar e integrar varios sistemas.",
    incluye: [
      "Automatización de procesos administrativos",
      "Integración entre sistemas existentes",
      "Dashboard básico de indicadores",
    ],
  },
  {
    id: "ravela-ai",
    nombre: "Ravela AI",
    precioDesdeMXN: 30000,
    moneda: "MXN",
    descripcion: "Incorporación de Inteligencia Artificial a la operación.",
    idealPara: "Empresas listas para incorporar IA a su operación diaria.",
    incluye: [
      "Agente o asistente de IA a la medida",
      "Automatización inteligente de procesos",
      "Procesamiento inteligente de documentos",
    ],
  },
  {
    id: "ravela-custom",
    nombre: "Ravela Custom",
    precioDesdeMXN: null,
    moneda: "MXN",
    descripcion: "Soluciones personalizadas, cotizadas bajo diagnóstico.",
    idealPara: "Empresas con necesidades específicas o de mayor escala.",
    incluye: [
      "Roadmap de transformación digital a la medida",
      "Arquitectura tecnológica personalizada",
      "Acompañamiento continuo",
    ],
  },
];
