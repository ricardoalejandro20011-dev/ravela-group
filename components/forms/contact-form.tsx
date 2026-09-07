"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACTO } from "@/lib/constants/contacto";
import { track } from "@/lib/analytics";
export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    const f = new FormData(e.currentTarget);
    const contacto = String(f.get("contacto")).trim();
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto) &&
      !/^\+?[0-9 ()-]{10,20}$/.test(contacto)
    ) {
      setError("Ingresa un correo o WhatsApp válido.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: f.get("nombre"),
          empresa: f.get("empresa"),
          email: contacto.includes("@") ? contacto : "",
          whatsapp: contacto.includes("@") ? "" : contacto,
          mensaje: f.get("mensaje"),
          sitioWeb: f.get("sitioWeb"),
        }),
      });
      if (!res.ok) throw new Error();
      track("contact_submit");
      setStatus("success");
    } catch {
      setStatus("idle");
      setError(
        "No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.",
      );
    }
  }
  if (status === "success")
    return (
      <div className="rounded-xl border bg-[#edf2eb] p-8" role="status">
        <h2 className="text-2xl font-medium">Recibimos tu solicitud.</h2>
        <p className="mt-4 text-sm leading-7">
          Revisaremos el proceso que quieres mejorar y te contactaremos por el
          medio que compartiste para coordinar el diagnóstico inicial.
        </p>
        <Link href="/" className="mt-5 inline-block text-sm underline">
          Volver al inicio
        </Link>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="space-y-5 rounded-xl border bg-[#fafbf9] p-6 sm:p-8"
    >
      <h2 className="text-xl font-medium">
        Cuéntanos qué proceso te gustaría mejorar.
      </h2>
      {[
        ["nombre", "Nombre", "name"],
        ["empresa", "Empresa", "organization"],
        ["contacto", "WhatsApp o correo", "off"],
      ].map(([name, label, auto]) => (
        <label className="block text-sm" key={name}>
          {label}
          <input
            className="field mt-2"
            name={name}
            autoComplete={auto}
            required
            minLength={name === "contacto" ? 10 : 2}
            maxLength={100}
          />
        </label>
      ))}
      <label className="block text-sm">
        ¿Qué proceso te gustaría mejorar?
        <textarea
          className="field mt-2 min-h-28"
          name="mensaje"
          required
          minLength={10}
          maxLength={2000}
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <label>
          Sitio web
          <input name="sitioWeb" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="text-xs leading-6 text-cloud/70">
        Usaremos tus datos para atender esta solicitud. Consulta el{" "}
        <Link href="/aviso-de-privacidad" className="underline">
          aviso de privacidad
        </Link>
        . No incluyas información confidencial.
      </p>
      {error && (
        <p role="alert" className="text-sm text-magenta">
          {error}
        </p>
      )}
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Enviando…" : "Solicitar diagnóstico"}
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
