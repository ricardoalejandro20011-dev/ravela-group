/** Runs the existing API against a local Supabase stub. Never sends mail or writes real leads. */
import assert from "node:assert/strict";
import { createServer } from "node:http";

async function main() {
  let fail = false;
  const saved: Record<string, unknown>[] = [];
  const server = createServer(async (req, res) => {
    let body = "";
    for await (const chunk of req) body += chunk;
    if (fail) {
      res.writeHead(500, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Simulated storage failure" }));
      return;
    }
    saved.push(JSON.parse(body));
    res.writeHead(201, { "content-type": "application/json" });
    res.end("{}");
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  assert(address && typeof address !== "string");
  process.env.NEXT_PUBLIC_SUPABASE_URL = `http://127.0.0.1:${address.port}`;
  process.env.SUPABASE_SERVICE_ROLE_KEY = "local-test-key";
  process.env.RESEND_API_KEY = "";
  const { POST: contact } = await import("../app/api/contacto/route");
  const { POST: diagnostic } = await import("../app/api/diagnostico/route");
  let ip = 0;
  const request = (data: unknown, sameIp?: string) =>
    new Request("http://localhost/api/test", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-for": sameIp || `test-${++ip}`,
      },
      body: JSON.stringify(data),
    });
  const payload = {
    nombre: "Prueba local",
    empresa: "Empresa de prueba",
    whatsapp: "5512345678",
    mensaje: "Automatizar reportes semanales",
  };
  try {
    assert.equal((await contact(request(payload))).status, 200);
    assert.equal(saved.length, 1);
    assert.equal(
      (
        await contact(
          request({ ...payload, whatsapp: "", email: "prueba@example.com" }),
        )
      ).status,
      200,
    );
    assert.equal(
      (await contact(request({ ...payload, whatsapp: "inválido" }))).status,
      400,
    );
    assert.equal(
      (await contact(request({ ...payload, sitioWeb: "bot" }))).status,
      200,
    );
    assert.equal(saved.length, 2, "Honeypot must not save");
    fail = true;
    assert.equal(
      (await contact(request(payload))).status,
      503,
      "Failure must not report success",
    );
    fail = false;
    const answers = {
      nombre: "Prueba local",
      empresa: "Empresa de prueba",
      email: "prueba@example.com",
      industria: "Servicios",
      estado: "México",
      numEmpleados: "1-5",
      procesosManuales: ["reportes"],
      horasSemanalesEnProcesosManuales: 10,
      usoExcel: "intensivo",
      sistemasUtilizados: ["CRM"],
      usoActualIA: "ninguno",
      principalesProblemas: ["Reportes"],
      interesPrincipal: "automatizacion",
    };
    const result = await diagnostic(request(answers));
    assert.equal(result.status, 200);
    assert((await result.json()).resultado.score.overall > 0);
    assert(
      saved.at(-1)?.mensaje,
      "Diagnostic answers must be retained for follow-up",
    );
    assert.equal(
      (await diagnostic(request({ ...answers, sitioWeb: "bot" }))).status,
      200,
    );
    const before = saved.length;
    assert.equal(
      (await diagnostic(request({ ...answers, email: "incorrecto" }))).status,
      400,
    );
    assert.equal(saved.length, before);
    for (let i = 0; i < 5; i++) await contact(request({}, "rate-test"));
    assert.equal((await contact(request({}, "rate-test"))).status, 429);
    const { calcularROI } = await import("../lib/scoring/roi");
    const roi = calcularROI({
      numEmpleados: 5,
      horasSemanales: 10,
      costoPorHoraMXN: 120,
      diasLaborales: 5,
      porcentajeAutomatizacion: 40,
    });
    assert.equal(roi.costoMensualMXN, 25980);
    assert.equal(roi.ahorroPotencialMensualMXN, 10392);
    assert.equal(roi.horasRecuperablesMensuales, 87);
    console.info(
      "API checks passed: persistence, failures, validation, honeypots, rate limit, diagnostic and ROI.",
    );
  } finally {
    server.close();
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
