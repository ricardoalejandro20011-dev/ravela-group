/**
 * Forma de la tabla `leads` en Supabase/PostgreSQL. lib/mock/leads-store.ts
 * inserta en esta tabla cuando hay credenciales configuradas (ver
 * lib/supabase/client.ts), y cae de vuelta a memoria si no las hay.
 *
 * SQL para crear la tabla en el SQL Editor de Supabase:
 *
 * create table leads (
 *   id uuid primary key,
 *   nombre text not null,
 *   empresa text not null,
 *   email text not null,
 *   whatsapp text,
 *   estado text not null,
 *   industria text not null,
 *   tamano text,
 *   problema text,
 *   servicio_interes text,
 *   presupuesto_estimado text,
 *   mensaje text,
 *   dia_preferido text,
 *   bloque_horario text,
 *   origen text not null,
 *   created_at timestamptz not null default now()
 * );
 *
 * alter table leads enable row level security;
 * -- Sin políticas adicionales: solo la service role key (usada en los
 * -- API routes del servidor) puede leer/escribir. El cliente nunca
 * -- accede a esta tabla directamente.
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
  dia_preferido: string | null;
  bloque_horario: string | null;
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
