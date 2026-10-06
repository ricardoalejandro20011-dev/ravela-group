/** Uso: node --env-file=.env.local --import tsx scripts/retry-delivery.ts <folio> */
import { supabaseAdmin } from "../lib/supabase/client";
import { notificarNuevoLead } from "../lib/email/notify-lead";
import { enviarN8n } from "../lib/integrations/lead-delivery";
import type { Lead } from "../lib/types";

async function main() {
  const id = process.argv[2];
  if (!id || !/^[0-9a-f-]{36}$/i.test(id))
    throw new Error("Indica el folio UUID de la solicitud");
  if (!supabaseAdmin) throw new Error("Configura Supabase antes de reintentar");
  const { data: row, error } = await supabaseAdmin
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !row) throw new Error("No se pudo consultar el folio");
  let legacy: { mensaje?: string; cotizacion?: Lead["cotizacion"] } = {};
  if (!row.cotizacion && row.mensaje) {
    try { const parsed = JSON.parse(row.mensaje); if (parsed.tipo === "cotizacion") legacy = parsed; } catch { /* Mensaje de contacto normal. */ }
  }
  const lead: Lead = {
    id: row.id,
    nombre: row.nombre,
    empresa: row.empresa,
    email: row.email,
    whatsapp: row.whatsapp,
    estado: row.estado,
    industria: row.industria,
    tamano: row.tamano,
    problema: row.problema,
    servicioInteres: row.servicio_interes,
    presupuestoEstimado: row.presupuesto_estimado,
    mensaje: legacy.mensaje ?? row.mensaje,
    diaPreferido: row.dia_preferido,
    bloqueHorario: row.bloque_horario,
    origen: row.origen,
    createdAt: row.created_at,
    cotizacion: row.cotizacion ?? legacy.cotizacion,
  };
  const correo =
    row.correo_estado === "enviado" || (await notificarNuevoLead(lead));
  const automatizacion =
    row.automatizacion_estado === "entregado" || (await enviarN8n(lead));
  const { error: updateError } = await supabaseAdmin
    .from("leads")
    .update({
      correo_estado: correo ? "enviado" : "pendiente",
      automatizacion_estado: automatizacion ? "entregado" : "pendiente",
      entrega_intento_at: new Date().toISOString(),
    })
    .eq("id", id);
  if (updateError)
    throw new Error("No se pudo actualizar el estado de entrega");
  console.info({ folio: id, correo, automatizacion });
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
