"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACTO } from "@/lib/constants/contacto";
import { quoteOptions } from "@/lib/constants/cotizacion";
import { contactoSchema } from "@/lib/validations/contacto";
import type { DiagnosticoFormValues } from "@/lib/validations/diagnostico";
import { track } from "@/lib/analytics";

function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: readonly string[];
}) {
  return (
    <label className="block text-sm">
      {label}
      <select className="field mt-2" name={name} required defaultValue="">
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ContactForm({
  diagnostico,
}: { diagnostico?: DiagnosticoFormValues } = {}) {
  const initial: Record<string, string> = diagnostico
    ? {
        nombre: diagnostico.nombre,
        empresa: diagnostico.empresa,
        email: diagnostico.email,
        industria:
          diagnostico.industria === "No indicada" ? "" : diagnostico.industria,
        estado: diagnostico.estado === "No indicado" ? "" : diagnostico.estado,
      }
    : {};
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [folio, setFolio] = useState("");
  const submitting = useRef(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    const f = new FormData(e.currentTarget);
    const value = (key: string) => String(f.get(key) || "").trim();
    const payload = {
      ...Object.fromEntries(f),
      cotizacion: {
        diagnostico,
        plazo: value("plazo"),
        usuarios: value("usuarios"),
        volumen: value("volumen"),
        datos: value("datos"),
        soporte: value("soporte"),
        sistemas: value("sistemas"),
        objetivo: value("objetivo"),
        alcance: value("alcance"),
        consentimiento: f.get("consentimiento") === "on",
      },
    };
    const parsed = contactoSchema.safeParse(payload);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    submitting.current = true;
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = await res.json();
      if (!res.ok)
        throw new Error(result.error || "No pudimos guardar tu solicitud.");
      setFolio(result.leadId || "");
      setStatus("success");
      track("contact_submit");
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error
          ? err.message
          : "Intenta de nuevo o escríbenos por WhatsApp.",
      );
    } finally {
      submitting.current = false;
    }
  }
  if (status === "success")
    return (
      <div className="rounded-xl border bg-[#edf2eb] p-8" role="status">
        <h2 className="text-2xl font-medium">
          Recibimos tu solicitud de cotización.
        </h2>
        <p className="mt-4 text-sm leading-7">
          Ya guardamos los datos de tu proyecto. Prepararemos una propuesta con
          el alcance, la inversión y los siguientes pasos. Si falta información,
          te contactaremos al correo que compartiste.
        </p>
        {folio && <p className="mt-4 break-all text-xs">Folio: {folio}</p>}
        <Link href="/" className="mt-5 inline-block text-sm underline">
          Volver al inicio
        </Link>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      aria-busy={status === "loading"}
      className="space-y-7 rounded-xl border bg-[#fafbf9] p-6 sm:p-8"
    >
      <div>
        <h2 className="text-xl font-medium">
          {diagnostico
            ? "Demos alcance a tu proyecto"
            : "Cuéntanos sobre tu proyecto"}
        </h2>
        <p className="mt-2 text-sm leading-6">
          {diagnostico
            ? "Ya incluimos tus respuestas del diagnóstico. Confirma tus datos y completa lo necesario para preparar la propuesta."
            : "Completa lo que ya conoces. Puedes elegir ‘Por definir’ si necesitas orientación."}
        </p>
      </div>
      <fieldset className="space-y-4" disabled={status === "loading"}>
        <legend className="mb-4 font-medium">1. Tus datos</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["nombre", "Nombre completo", "text", "name"],
            ["empresa", "Empresa o proyecto", "text", "organization"],
            ["email", "Correo para recibir la cotización", "email", "email"],
            ["whatsapp", "WhatsApp (opcional)", "tel", "tel"],
            ["industria", "Industria o giro", "text", "off"],
            ["estado", "Ciudad y estado", "text", "address-level1"],
          ].map(([name, label, type, auto]) => (
            <label className="block text-sm" key={name}>
              {label}
              <input
                className="field mt-2"
                name={name}
                defaultValue={initial[name] || ""}
                type={type}
                autoComplete={auto}
                required={name !== "whatsapp"}
                minLength={
                  name === "nombre" || name === "empresa" ? 2 : undefined
                }
                maxLength={
                  name === "whatsapp" ? 20 : name === "estado" ? 60 : 100
                }
              />
            </label>
          ))}
        </div>
        <Select
          name="tamano"
          label="Tamaño de tu empresa (personas)"
          options={["1-10", "11-50", "51-200", "201-500", "500+"]}
        />
      </fieldset>
      <fieldset className="space-y-4" disabled={status === "loading"}>
        <legend className="mb-4 font-medium">2. Qué vamos a construir</legend>
        <Select
          name="servicioInteres"
          label="Tipo de proyecto"
          options={quoteOptions.servicioInteres}
        />
        <label className="block text-sm">
          ¿Qué necesitas resolver y cómo lo haces hoy?
          <textarea
            className="field mt-2 min-h-28"
            name="mensaje"
            defaultValue={
              diagnostico
                ? `Quiero mejorar: ${diagnostico.principalesProblemas.join(", ")}. Procesos actuales: ${diagnostico.procesosManuales.join(", ")}.`
                : ""
            }
            required
            minLength={10}
            maxLength={2000}
            placeholder="Ej. Consolidamos pedidos de tres sucursales en Excel cada día."
          />
        </label>
        <label className="block text-sm">
          ¿Qué resultado quieres lograr?
          <textarea
            className="field mt-2 min-h-24"
            name="objetivo"
            required
            minLength={10}
            maxLength={2000}
            placeholder="Ej. Centralizar pedidos y reducir el tiempo de captura."
          />
        </label>
        <label className="block text-sm">
          Funciones indispensables y restricciones (opcional)
          <textarea
            className="field mt-2"
            name="alcance"
            maxLength={2000}
            placeholder="Roles, aprobaciones, reportes, seguridad, sucursales…"
          />
        </label>
        <label className="block text-sm">
          Sistemas que se deben conectar (opcional)
          <input
            className="field mt-2"
            name="sistemas"
            defaultValue={diagnostico?.sistemasUtilizados.join(", ") || ""}
            maxLength={1000}
            placeholder="Excel, SAP, WhatsApp, CRM, sitio web…"
          />
        </label>
        <Select
          name="datos"
          label="¿Dónde están los datos?"
          options={quoteOptions.datos}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            name="usuarios"
            label="Personas que usarán la solución"
            options={quoteOptions.usuarios}
          />
          <Select
            name="volumen"
            label="Registros, tareas o mensajes al mes"
            options={quoteOptions.volumen}
          />
        </div>
      </fieldset>
      <fieldset className="space-y-4" disabled={status === "loading"}>
        <legend className="mb-4 font-medium">3. Inversión y tiempos</legend>
        <Select
          name="presupuestoEstimado"
          label="Presupuesto de implementación (MXN)"
          options={quoteOptions.presupuestoEstimado}
        />
        <Select
          name="plazo"
          label="¿Cuándo necesitas la solución?"
          options={quoteOptions.plazo}
        />
        <Select
          name="soporte"
          label="Acompañamiento que necesitas"
          options={quoteOptions.soporte}
        />
        <p className="text-xs leading-6">
          Usaremos el alcance y la complejidad para preparar la propuesta. El
          presupuesto es una referencia; enviar este formulario no implica
          contratar.
        </p>
      </fieldset>
      <div className="hidden" aria-hidden="true">
        <label>
          Sitio web
          <input name="sitioWeb" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="flex items-start gap-3 text-xs leading-6">
        <input
          className="mt-1 size-5 shrink-0"
          type="checkbox"
          name="consentimiento"
          required
        />{" "}
        <span>
          Acepto el uso de mis datos para atender esta solicitud y preparar mi
          cotización conforme al{" "}
          <Link href="/aviso-de-privacidad" className="underline">
            aviso de privacidad
          </Link>
          . No incluyas contraseñas ni información confidencial.
        </span>
      </label>
      {error && (
        <p role="alert" className="text-sm text-magenta">
          {error}
        </p>
      )}
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Guardando solicitud…" : "Solicitar cotización"}
      </Button>
      <a
        href={CONTACTO.whatsappUrl}
        className="block py-2 text-center text-sm text-soft-cyan"
      >
        Prefiero hablar por WhatsApp ↗
      </a>
    </form>
  );
}
