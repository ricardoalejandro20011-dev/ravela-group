import assert from "node:assert/strict";
import type { Lead } from "../lib/types";

async function main() {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "";
  process.env.RESEND_API_KEY = "local-test-key";
  process.env.NOTIFICATIONS_EMAIL_TO = "hola@ravela.online";
  process.env.N8N_WEBHOOK_URL = "https://n8n.example.test/webhook/quote";
  process.env.N8N_WEBHOOK_SECRET = "test-secret";
  const calls: {
    url: string;
    body: Record<string, unknown>;
    headers: Headers;
  }[] = [];
  const originalFetch = globalThis.fetch;
  let fail = false;
  globalThis.fetch = async (input, init) => {
    calls.push({
      url: String(input),
      body: JSON.parse(String(init?.body)),
      headers: new Headers(init?.headers),
    });
    return new Response(
      JSON.stringify(
        fail
          ? { name: "validation_error", message: "Rejected" }
          : { id: "test-email" },
      ),
      {
        status: fail ? 503 : 200,
        headers: { "content-type": "application/json" },
      },
    );
  };
  try {
    const { notificarNuevoLead } = await import("../lib/email/notify-lead");
    const { enviarN8n } = await import("../lib/integrations/lead-delivery");
    const { guardarLead } = await import("../lib/mock/leads-store");
    const lead: Lead = {
      id: crypto.randomUUID(),
      nombre: "<script>test</script>",
      empresa: "Prueba",
      email: "cliente@example.com",
      estado: "CDMX",
      industria: "Servicios",
      origen: "contacto",
      createdAt: new Date().toISOString(),
    };
    await assert.rejects(guardarLead(lead), /Almacenamiento no configurado/);
    assert.equal(await notificarNuevoLead(lead), true);
    assert.equal(calls[0].body.to, "hola@ravela.online");
    assert.equal(calls[0].body.reply_to, "cliente@example.com");
    assert(!String(calls[0].body.html).includes("<script>"));
    assert.equal(await enviarN8n(lead), true);
    assert.equal(calls[1].body.eventId, lead.id);
    assert.equal(calls[1].headers.get("X-Ravela-Secret"), "test-secret");
    assert.equal(calls[1].headers.get("Idempotency-Key"), lead.id);
    fail = true;
    assert.equal(await enviarN8n(lead), false);
    assert.equal(await notificarNuevoLead(lead), false);
    console.info(
      "Delivery checks passed: missing storage, recipient, reply-to, HTML escaping, webhook payload/auth and provider failures.",
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
