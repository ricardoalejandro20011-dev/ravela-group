import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Cliente server-only con la service role key (nunca exponer al cliente).
 * `null` si no hay credenciales configuradas. Solo desarrollo permite
 * respaldo en memoria; producción devuelve un error sin confirmar recepción.
 */
export const supabaseAdmin =
  url && serviceKey ? createClient(url, serviceKey, { auth: { persistSession: false } }) : null;
