import { z } from "zod";

export const diagnosticoSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  empresa: z.string().trim().min(2, "Ingresa el nombre de tu empresa").max(100),
  email: z.email("Ingresa un correo válido").trim(),
  industria: z.string().trim().min(2, "Selecciona tu industria").max(100),
  estado: z.string().trim().min(2, "Selecciona tu estado").max(60),
  numEmpleados: z.enum(["1-5", "6-20", "21-50", "51-200", "200+"]),
  procesosManuales: z
    .array(
      z.enum([
        "reportes",
        "captura-datos",
        "seguimiento-clientes",
        "facturacion",
        "inventario",
        "atencion-whatsapp",
        "conciliaciones",
        "otro",
      ]),
    )
    .min(1, "Selecciona al menos un proceso"),
  horasSemanalesEnProcesosManuales: z.number().min(1).max(80),
  usoExcel: z.enum(["no", "ocasional", "intensivo", "critico"]),
  sistemasUtilizados: z.array(z.string()).default([]),
  usoActualIA: z.enum(["ninguno", "explorando", "pruebas", "en-uso"]),
  principalesProblemas: z.array(z.string()).default([]),
  interesPrincipal: z.enum([
    "automatizacion",
    "inteligencia-artificial",
    "datos-dashboards",
    "transformacion-digital",
    "no-estoy-seguro",
  ]),
});

export type DiagnosticoFormValues = z.infer<typeof diagnosticoSchema>;
