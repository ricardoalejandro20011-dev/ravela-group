const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

/**
 * Rate limit en memoria por IP. Suficiente para un solo proceso/instancia;
 * En serverless el límite se aplica por instancia; complementar con reglas
 * del firewall de Vercel o un store compartido ante tráfico abusivo.
 */
export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (!times.some(t => now - t < WINDOW_MS)) hits.delete(key);
    }
    if (hits.size > 10000) return false;
  }
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(key, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return true;
}
