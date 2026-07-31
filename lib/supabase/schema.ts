/**
 * Forma prevista de las tablas en Supabase/PostgreSQL cuando se conecte el
 * backend real. No se instancia ningún cliente aquí todavía: hoy los API
 * routes usan lib/mock/leads-store.ts. Este archivo documenta el contrato
 * para que la migración sea un cambio de implementación, no de interfaz.
 */

export interface LeadsRow {
  id: string;
  nombre: string;
  empresa: string;
  email: string;
  whatsapp: string | null;
  estado: string;
  industria: string;
  tamano: string | null;
  problema: string | null;
  servicio_interes: string | null;
  presupuesto_estimado: string | null;
  mensaje: string | null;
  origen: string;
  created_at: string;
}

export interface DiagnosticosRow {
  id: string;
  lead_id: string;
  respuestas: Record<string, unknown>;
  score: Record<string, number>;
  created_at: string;
}

export interface RoiCalculosRow {
  id: string;
  lead_id: string | null;
  input: Record<string, number>;
  output: Record<string, number>;
  created_at: string;
}
