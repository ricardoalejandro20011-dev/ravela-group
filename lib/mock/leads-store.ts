import type { Lead, LeadInput } from "@/lib/types";

// Almacenamiento en memoria mientras no hay backend real conectado.
// Se reinicia en cada despliegue/reinicio del servidor: es un placeholder,
// no una base de datos. Fase de backend real lo sustituye por Supabase
// (ver lib/supabase/schema.ts).
const leads: Lead[] = [];

export function guardarLead(input: LeadInput): Lead {
  const lead: Lead = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  leads.push(lead);
  return lead;
}

export function listarLeads(): Lead[] {
  return leads;
}
