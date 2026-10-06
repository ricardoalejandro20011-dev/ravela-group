import { supabaseAdmin } from "@/lib/supabase/client";
import type { LeadsRow } from "@/lib/supabase/schema";
import type { Lead, LeadInput } from "@/lib/types";

function aFilaSupabase(lead: Lead): LeadsRow {
  return {
    ...(lead.cotizacion ? { cotizacion: lead.cotizacion } : {}),
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
    const row = aFilaSupabase(lead);
    let { error } = await supabaseAdmin.from("leads").insert(row);
    // Compatibilidad durante el despliegue: conservar TODO el contexto en la
    // columna existente si aún no se aplicó la migración de cotizaciones.
    if (lead.cotizacion && error?.code === "PGRST204" && error.message.includes("cotizacion")) {
      delete row.cotizacion;
      row.mensaje = JSON.stringify({ version: 1, tipo: "cotizacion", mensaje: lead.mensaje, cotizacion: lead.cotizacion });
      ({ error } = await supabaseAdmin.from("leads").insert(row));
    }
    if (error) {
      console.error("[leads] Error de almacenamiento", error.code);
      throw new Error("No fue posible guardar la solicitud");
    }
    return lead;
  }

  throw new Error("Almacenamiento no configurado");
}
