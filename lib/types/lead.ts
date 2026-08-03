export type LeadOrigen =
  | "diagnostico"
  | "calculadora-roi"
  | "contacto"
  | "ai-assistant"
  | "newsletter";

export type TamanoEmpresa = "1-10" | "11-50" | "51-200" | "201-500" | "500+";

export interface Lead {
  id: string;
  nombre: string;
  empresa: string;
  email: string;
  whatsapp?: string;
  estado: string;
  industria: string;
  tamano?: TamanoEmpresa;
  problema?: string;
  servicioInteres?: string;
  presupuestoEstimado?: string;
  mensaje?: string;
  diaPreferido?: string;
  bloqueHorario?: string;
  origen: LeadOrigen;
  createdAt: string;
}

export type LeadInput = Omit<Lead, "id" | "createdAt">;
