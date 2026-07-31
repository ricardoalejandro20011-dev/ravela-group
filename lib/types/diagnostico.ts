export type NumeroEmpleados = "1-5" | "6-20" | "21-50" | "51-200" | "200+";

export type UsoExcel = "no" | "ocasional" | "intensivo" | "critico";

export type UsoActualIA = "ninguno" | "explorando" | "pruebas" | "en-uso";

export type ProcesoManual =
  | "reportes"
  | "captura-datos"
  | "seguimiento-clientes"
  | "facturacion"
  | "inventario"
  | "atencion-whatsapp"
  | "conciliaciones"
  | "otro";

export type InteresPrincipal =
  | "automatizacion"
  | "inteligencia-artificial"
  | "datos-dashboards"
  | "transformacion-digital"
  | "no-estoy-seguro";

export interface DiagnosticoRespuestas {
  nombre: string;
  empresa: string;
  email: string;
  industria: string;
  estado: string;
  numEmpleados: NumeroEmpleados;
  procesosManuales: ProcesoManual[];
  horasSemanalesEnProcesosManuales: number;
  usoExcel: UsoExcel;
  sistemasUtilizados: string[];
  usoActualIA: UsoActualIA;
  principalesProblemas: string[];
  interesPrincipal: InteresPrincipal;
}

export interface OpportunityScore {
  automation: number;
  ai: number;
  data: number;
  integration: number;
  digitalMaturity: number;
  overall: number;
}

export type PrioridadRecomendacion = "alta" | "media" | "baja";

export interface Recomendacion {
  titulo: string;
  descripcion: string;
  prioridad: PrioridadRecomendacion;
  ahorroEstimadoMensualMXN?: number;
  horasRecuperablesSemanales?: number;
  pilarRelacionado:
    | "automatizacion"
    | "inteligencia-artificial"
    | "datos-inteligencia"
    | "transformacion-digital";
}

export interface DiagnosticoResultado {
  score: OpportunityScore;
  recomendaciones: Recomendacion[];
  resumen: string;
}
