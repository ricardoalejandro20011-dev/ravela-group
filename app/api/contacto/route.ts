import { NextResponse } from "next/server";
import { flattenError } from "zod";

import { guardarLead } from "@/lib/mock/leads-store";
import { checkRateLimit } from "@/lib/utils/rate-limit";
import { contactoSchema } from "@/lib/validations/contacto";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";

  if (!checkRateLimit(`contacto:${ip}`)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
      { status: 429 },
    );
  }

  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  const parsed = contactoSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: flattenError(parsed.error).fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot: si el campo oculto viene lleno, es un bot. Respondemos éxito
  // falso para no revelar la trampa, sin guardar el lead.
  if (parsed.data.sitioWeb) {
    return NextResponse.json({ ok: true });
  }

  const { nombre, empresa, email, whatsapp, estado, industria, tamano, servicioInteres, presupuestoEstimado, mensaje } =
    parsed.data;

  const lead = guardarLead({
    nombre,
    empresa,
    email,
    whatsapp,
    estado,
    industria,
    tamano,
    servicioInteres,
    presupuestoEstimado,
    mensaje,
    origen: "contacto",
  });

  return NextResponse.json({ ok: true, leadId: lead.id });
}
