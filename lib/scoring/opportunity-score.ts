import type {
  DiagnosticoRespuestas,
  DiagnosticoResultado,
  OpportunityScore,
  Recomendacion,
} from "@/lib/types";

/**
 * Motor de Ravela Opportunity Score™.
 *
 * Es un modelo heurístico y transparente (no un modelo predictivo/ML):
 * traduce respuestas cualitativas del diagnóstico en indicadores 0-100
 * orientativos por pilar. Los pesos están documentados en cada función
 * para poder ajustarlos con datos reales una vez que existan clientes.
 */

const clamp = (value: number, min = 5, max = 98) =>
  Math.min(max, Math.max(min, Math.round(value)));

// Punto medio representativo de cada bracket, solo para estimar
// ahorros orientativos (el diagnóstico no pide número exacto de empleados).
const EMPLEADOS_PUNTO_MEDIO: Record<DiagnosticoRespuestas["numEmpleados"], number> = {
  "1-5": 3,
  "6-20": 13,
  "21-50": 35,
  "51-200": 120,
  "200+": 250,
};

// Costo por hora asumido cuando el usuario no ha usado la calculadora de ROI.
const COSTO_HORA_ASUMIDO_MXN = 120;

function scoreAutomation(r: DiagnosticoRespuestas): number {
  const porHoras = Math.min(r.horasSemanalesEnProcesosManuales / 30, 1) * 55;
  const porProcesos = Math.min(r.procesosManuales.length / 5, 1) * 30;
  const porExcel = { no: 0, ocasional: 5, intensivo: 10, critico: 13 }[r.usoExcel];
  return clamp(porHoras + porProcesos + porExcel);
}

function scoreAI(r: DiagnosticoRespuestas): number {
  const porUsoActual = { ninguno: 40, explorando: 30, pruebas: 18, "en-uso": 8 }[
    r.usoActualIA
  ];
  const procesosAfinesIA = r.procesosManuales.filter((p) =>
    ["atencion-whatsapp", "seguimiento-clientes", "captura-datos"].includes(p),
  ).length;
  const porProcesosAfines = Math.min(procesosAfinesIA / 3, 1) * 35;
  const porInteres = r.interesPrincipal === "inteligencia-artificial" ? 15 : 5;
  return clamp(porUsoActual + porProcesosAfines + porInteres);
}

function scoreData(r: DiagnosticoRespuestas): number {
  const porExcel = { no: 5, ocasional: 20, intensivo: 35, critico: 45 }[r.usoExcel];
  const porReportes = r.procesosManuales.includes("reportes") ? 25 : 5;
  const porSistemas = Math.min(r.sistemasUtilizados.length / 4, 1) * 25;
  return clamp(porExcel + porReportes + porSistemas);
}

function scoreIntegration(r: DiagnosticoRespuestas): number {
  const porNumSistemas = Math.min(r.sistemasUtilizados.length / 5, 1) * 60;
  const porProcesosDuplicados = r.procesosManuales.includes("conciliaciones")
    ? 20
    : 5;
  const porInteres = r.interesPrincipal === "transformacion-digital" ? 15 : 5;
  return clamp(porNumSistemas + porProcesosDuplicados + porInteres);
}

function scoreDigitalMaturity(r: DiagnosticoRespuestas): number {
  const porUsoIA = { ninguno: 5, explorando: 15, pruebas: 30, "en-uso": 45 }[
    r.usoActualIA
  ];
  const porExcelInverso = { no: 30, ocasional: 22, intensivo: 12, critico: 5 }[
    r.usoExcel
  ];
  const porSistemas = Math.min(r.sistemasUtilizados.length / 5, 1) * 25;
  return clamp(porUsoIA + porExcelInverso + porSistemas);
}

export function calcularOpportunityScore(
  respuestas: DiagnosticoRespuestas,
): OpportunityScore {
  const automation = scoreAutomation(respuestas);
  const ai = scoreAI(respuestas);
  const data = scoreData(respuestas);
  const integration = scoreIntegration(respuestas);
  const digitalMaturity = scoreDigitalMaturity(respuestas);

  const overall = clamp(
    automation * 0.3 + ai * 0.25 + data * 0.2 + integration * 0.15 +
      (100 - digitalMaturity) * 0.1,
  );

  return { automation, ai, data, integration, digitalMaturity, overall };
}

function estimarAhorroYHoras(respuestas: DiagnosticoRespuestas) {
  const empleados = EMPLEADOS_PUNTO_MEDIO[respuestas.numEmpleados];
  const horasSemanales = respuestas.horasSemanalesEnProcesosManuales;
  const horasRecuperablesSemanales = Math.round(horasSemanales * 0.4);
  const ahorroEstimadoMensualMXN = Math.round(
    horasRecuperablesSemanales * 4.33 * COSTO_HORA_ASUMIDO_MXN * Math.min(empleados, 10) / 10,
  );
  return { horasRecuperablesSemanales, ahorroEstimadoMensualMXN };
}

export function generarRecomendaciones(
  respuestas: DiagnosticoRespuestas,
  score: OpportunityScore,
): Recomendacion[] {
  const { horasRecuperablesSemanales, ahorroEstimadoMensualMXN } =
    estimarAhorroYHoras(respuestas);

  const candidatas: Recomendacion[] = [
    {
      titulo: "Automatiza tus reportes y captura de datos",
      descripcion:
        "Reduce el tiempo dedicado a generar reportes manuales y capturar información repetitiva en hojas de cálculo.",
      prioridad: score.automation >= 60 ? "alta" : "media",
      ahorroEstimadoMensualMXN,
      horasRecuperablesSemanales,
      pilarRelacionado: "automatizacion",
    },
    {
      titulo: "Incorpora un asistente de IA para atención y seguimiento",
      descripcion:
        "Apoya la atención por WhatsApp y el seguimiento a clientes con IA generativa, sin perder el toque humano.",
      prioridad: score.ai >= 55 ? "alta" : "media",
      pilarRelacionado: "inteligencia-artificial",
    },
    {
      titulo: "Centraliza tu información en un dashboard",
      descripcion:
        "Conecta tus datos dispersos en Excel y sistemas separados en un solo panel de indicadores.",
      prioridad: score.data >= 55 ? "alta" : "media",
      pilarRelacionado: "datos-inteligencia",
    },
    {
      titulo: "Integra tus sistemas actuales",
      descripcion:
        "Conecta las plataformas que ya usas para evitar captura duplicada y conciliaciones manuales.",
      prioridad: score.integration >= 55 ? "alta" : "baja",
      pilarRelacionado: "transformacion-digital",
    },
  ];

  return candidatas
    .sort((a, b) => (a.prioridad === "alta" ? -1 : 1) - (b.prioridad === "alta" ? -1 : 1))
    .slice(0, 3);
}

export function generarDiagnostico(
  respuestas: DiagnosticoRespuestas,
): DiagnosticoResultado {
  const score = calcularOpportunityScore(respuestas);
  const recomendaciones = generarRecomendaciones(respuestas, score);

  return {
    score,
    recomendaciones,
    resumen:
      "Detectamos oportunidades potenciales para mejorar tu operación. Estos resultados son orientativos y buscan darte un punto de partida, no sustituyen una auditoría profesional.",
  };
}
