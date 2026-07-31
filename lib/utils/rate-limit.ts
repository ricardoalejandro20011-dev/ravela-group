const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

/**
 * Rate limit en memoria por IP. Suficiente para un solo proceso/instancia;
 * en un despliegue serverless multi-instancia esto debe moverse a un store
 * compartido (p. ej. Upstash Redis) antes de producción.
 */
export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(key, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return true;
}
