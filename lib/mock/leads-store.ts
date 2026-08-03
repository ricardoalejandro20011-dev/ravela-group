import { supabaseAdmin } from "@/lib/supabase/client";
import type { LeadsRow } from "@/lib/supabase/schema";
import type { Lead, LeadInput } from "@/lib/types";

// Respaldo en memoria para cuando no hay Supabase configurado (p. ej.
// desarrollo local). Se reinicia en cada reinicio del servidor y NO
// funciona en producción serverless (cada invocación es una instancia
// nueva) — por eso guardarLead usa Supabase cuando hay credenciales.
const leadsEnMemoria: Lead[] = [];

function aFilaSupabase(lead: Lead): LeadsRow {
  return {
    id: lead.id,
    nombre: lead.nombre,
    empresa: lead.empresa,
    email: lead.email,
    whatsapp: lead.whatsapp ?? null,
    estado: lead.estado,
    industria: lead.industria,
    tamano: lead.tamano ?? null,
    problema: lead.problema ?? null,
    servicio_interes: lead.servicioInteres ?? null,
    presupuesto_estimado: lead.presupuestoEstimado ?? null,
    mensaje: lead.mensaje ?? null,
    dia_preferido: lead.diaPreferido ?? null,
    bloque_horario: lead.bloqueHorario ?? null,
    origen: lead.origen,
    created_at: lead.createdAt,
  };
}

export async function guardarLead(input: LeadInput): Promise<Lead> {
  const lead: Lead = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  if (supabaseAdmin) {
    const { error } = await supabaseAdmin.from("leads").insert(aFilaSupabase(lead));
    if (error) {
      console.error("[leads-store] Error insertando en Supabase, uso respaldo en memoria:", error);
      leadsEnMemoria.push(lead);
    }
    return lead;
  }

  leadsEnMemoria.push(lead);
  return lead;
}

export function listarLeadsEnMemoria(): Lead[] {
  return leadsEnMemoria;
}
