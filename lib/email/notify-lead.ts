import { Resend } from "resend";

import { CONTACTO } from "@/lib/constants/contacto";
import type { Lead } from "@/lib/types";

const origenLabel: Record<Lead["origen"], string> = {
  contacto: "Formulario de contacto",
  diagnostico: "Ravela Intelligence™ (diagnóstico)",
  "calculadora-roi": "Calculadora de ROI",
  "ai-assistant": "Asistente de IA",
  newsletter: "Newsletter",
};

function renderLeadHtml(lead: Lead): string {
  const filas: [string, string | undefined][] = [
    ["Origen", origenLabel[lead.origen]],
    ["Nombre", lead.nombre],
    ["Empresa", lead.empresa],
    ["Email", lead.email],
    ["WhatsApp", lead.whatsapp],
    ["Estado", lead.estado],
    ["Industria", lead.industria],
    ["Tamaño", lead.tamano],
    ["Servicio de interés", lead.servicioInteres],
    ["Presupuesto estimado", lead.presupuestoEstimado],
    ["Día preferido", lead.diaPreferido],
    ["Horario preferido", lead.bloqueHorario],
    ["Mensaje", lead.mensaje],
  ];

  const filasHtml = filas
    .filter(([, valor]) => Boolean(valor))
    .map(
      ([campo, valor]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap;">${campo}</td><td style="padding:4px 0;">${valor}</td></tr>`,
    )
    .join("");

  return `<div style="font-family:sans-serif;font-size:14px;color:#111;">
    <h2 style="margin:0 0 12px;">Nuevo lead — Ravela Group</h2>
    <table>${filasHtml}</table>
  </div>`;
}

/**
 * Notifica por correo cada nuevo lead. Best-effort: si no hay
 * RESEND_API_KEY configurada (p. ej. en desarrollo local) o falla el envío,
 * no rompe la respuesta al usuario — el lead ya quedó guardado.
 */
export async function notificarNuevoLead(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[notify-lead] RESEND_API_KEY no configurada; se omite el correo.");
    return;
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Ravela Group <onboarding@resend.dev>",
      to: process.env.NOTIFICATIONS_EMAIL_TO || CONTACTO.email,
      subject: `Nuevo lead: ${lead.empresa} (${origenLabel[lead.origen]})`,
      html: renderLeadHtml(lead),
    });
  } catch (error) {
    console.error("[notify-lead] Error enviando notificación:", error);
  }
}
