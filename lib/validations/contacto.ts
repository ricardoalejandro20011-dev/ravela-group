import { z } from "zod";

export const contactoSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre completo").max(100),
  empresa: z.string().trim().min(2, "Ingresa el nombre de tu empresa").max(100),
  email: z.email("Ingresa un correo válido").trim(),
  whatsapp: z.string().trim().max(20).optional().or(z.literal("")),
  estado: z.string().trim().min(2, "Selecciona tu estado").max(60),
  industria: z.string().trim().min(2, "Ingresa tu industria").max(100),
  tamano: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]).optional().or(z.literal("")),
  servicioInteres: z.string().trim().max(100).optional().or(z.literal("")),
  presupuestoEstimado: z.string().trim().max(60).optional().or(z.literal("")),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)").max(2000),
  diaPreferido: z
    .enum(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"])
    .optional()
    .or(z.literal("")),
  bloqueHorario: z
    .enum(["9:00–12:00", "12:00–15:00", "15:00–18:00"])
    .optional()
    .or(z.literal("")),
  // Honeypot anti-spam: debe llegar vacío. Ver app/api/contacto/route.ts.
  sitioWeb: z.string().max(0).optional().or(z.literal("")),
});

export type ContactoFormValues = z.infer<typeof contactoSchema>;
