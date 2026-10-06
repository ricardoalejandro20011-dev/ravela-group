import { notificarNuevoLead } from "@/lib/email/notify-lead";
import { supabaseAdmin } from "@/lib/supabase/client";
import { generarDiagnostico } from "@/lib/scoring/opportunity-score";
import type { Lead } from "@/lib/types";

export function quoteEvent(lead: Lead) {
  return {
    version: 1,
    event: lead.cotizacion ? "quote.requested" : "lead.created",
    eventId: lead.id,
    createdAt: lead.createdAt,
    currency: "MXN",
    contextoDiagnostico: lead.cotizacion?.diagnostico
      ? generarDiagnostico(lead.cotizacion.diagnostico)
      : null,
    lead,
  };
}

export async function enviarN8n(lead: Lead): Promise<boolean> {
  const url = process.env.N8N_WEBHOOK_URL || process.env.CRM_WEBHOOK_URL;
  if (!url) return false;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": lead.id,
        ...(process.env.N8N_WEBHOOK_SECRET
          ? { "X-Ravela-Secret": process.env.N8N_WEBHOOK_SECRET }
          : {}),
      },
      body: JSON.stringify(quoteEvent(lead)),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok) console.error("[n8n] Entrega rechazada", response.status);
    return response.ok;
  } catch {
    console.error("[n8n] No fue posible entregar el evento");
    return false;
  }
}

// Los fallos no deshacen el registro. Los pendientes permanecen en Supabase
// para revisión y reenvío sin pedir al cliente que repita el formulario.
export async function entregarLead(lead: Lead) {
  const [correo, automatizacion] = await Promise.all([
    notificarNuevoLead(lead),
    enviarN8n(lead),
  ]);
  if (supabaseAdmin) {
    const { error } = await supabaseAdmin
      .from("leads")
      .update({
        correo_estado: correo ? "enviado" : "pendiente",
        automatizacion_estado: automatizacion ? "entregado" : "pendiente",
        entrega_intento_at: new Date().toISOString(),
      })
      .eq("id", lead.id);
    if (error)
      console.error(
        "[leads] No se pudo actualizar estado de entrega",
        error.code,
      );
  }
  return { correo, automatizacion };
}
