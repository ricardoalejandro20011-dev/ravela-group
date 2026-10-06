import { z } from "zod";
import { diagnosticoSchema } from "@/lib/validations/diagnostico";
import { quoteOptions } from "@/lib/constants/cotizacion";

export const cotizacionSchema = z.object({
  diagnostico: diagnosticoSchema.omit({ sitioWeb: true }).optional(),
  plazo: z.enum(quoteOptions.plazo),
  usuarios: z.enum(quoteOptions.usuarios),
  volumen: z.enum(quoteOptions.volumen),
  datos: z.enum(quoteOptions.datos),
  soporte: z.enum(quoteOptions.soporte),
  sistemas: z.string().trim().max(1000),
  objetivo: z
    .string()
    .trim()
    .min(10, "Describe el resultado esperado (mínimo 10 caracteres)")
    .max(2000),
  alcance: z.string().trim().max(2000),
  consentimiento: z.literal(true, {
    error: "Acepta el uso de tus datos para atender la cotización",
  }),
});
export type Cotizacion = z.infer<typeof cotizacionSchema>;

export const contactoSchema = z
  .object({
    cotizacion: cotizacionSchema.optional(),
    nombre: z.string().trim().min(2, "Ingresa tu nombre completo").max(100),
    empresa: z
      .string()
      .trim()
      .min(2, "Ingresa el nombre de tu empresa")
      .max(100),
    email: z
      .union([z.email("Ingresa un correo válido"), z.literal("")])
      .default(""),
    whatsapp: z.string().trim().max(20).optional().or(z.literal("")),
    estado: z.string().trim().max(60).default("No indicado"),
    industria: z.string().trim().max(100).default("No indicada"),
    tamano: z
      .enum(["1-10", "11-50", "51-200", "201-500", "500+"])
      .optional()
      .or(z.literal("")),
    servicioInteres: z.string().trim().max(100).optional().or(z.literal("")),
    presupuestoEstimado: z.string().trim().max(60).optional().or(z.literal("")),
    mensaje: z
      .string()
      .trim()
      .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)")
      .max(2000),
    diaPreferido: z
      .enum(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"])
      .optional()
      .or(z.literal("")),
    bloqueHorario: z
      .enum(["9:00–12:00", "12:00–15:00", "15:00–18:00"])
      .optional()
      .or(z.literal("")),
    // Honeypot anti-spam: debe llegar vacío. Ver app/api/contacto/route.ts.
    sitioWeb: z.string().max(200).optional(),
  })
  .refine((d) => !d.cotizacion || Boolean(d.email), {
    message: "Ingresa un correo para recibir tu cotización",
    path: ["email"],
  })
  .refine(
    (d) => Boolean(d.email) || /^\+?[0-9 ()-]{10,20}$/.test(d.whatsapp || ""),
    { message: "Ingresa un correo o WhatsApp válido", path: ["email"] },
  );

export type ContactoFormValues = z.infer<typeof contactoSchema>;
