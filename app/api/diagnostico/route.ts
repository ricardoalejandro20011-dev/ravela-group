import { NextResponse } from "next/server";
import { flattenError } from "zod";

import { notificarNuevoLead } from "@/lib/email/notify-lead";
import { guardarLead } from "@/lib/mock/leads-store";
import { generarDiagnostico } from "@/lib/scoring/opportunity-score";
import { checkRateLimit } from "@/lib/utils/rate-limit";
import { diagnosticoSchema } from "@/lib/validations/diagnostico";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";

  if (!checkRateLimit(`diagnostico:${ip}`)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
      { status: 429 },
    );
  }

  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  const parsed = diagnosticoSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: flattenError(parsed.error).fieldErrors },
      { status: 400 },
    );
  }

  const respuestas = parsed.data;
  const resultado = generarDiagnostico(respuestas);

  const lead = await guardarLead({
    nombre: respuestas.nombre,
    empresa: respuestas.empresa,
    email: respuestas.email,
    estado: respuestas.estado,
    industria: respuestas.industria,
    servicioInteres: respuestas.interesPrincipal,
    origen: "diagnostico",
  });

  await notificarNuevoLead(lead);

  return NextResponse.json({ ok: true, leadId: lead.id, resultado });
}
