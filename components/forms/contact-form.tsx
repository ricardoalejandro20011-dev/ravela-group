"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { contactoSchema, type ContactoFormValues } from "@/lib/validations/contacto";

const inputClass =
  "w-full rounded-xl border border-cloud/15 bg-cloud/5 px-4 py-2.5 text-sm text-cloud placeholder:text-cloud/35 outline-none transition-colors focus:border-soft-cyan/60 focus:ring-2 focus:ring-soft-cyan/20";

const labelClass = "mb-1.5 block text-sm font-medium text-cloud/80";

const errorClass = "mt-1 text-xs text-magenta";

const serviciosInteres = [
  { value: "automatizacion", label: "Automatización" },
  { value: "inteligencia-artificial", label: "Inteligencia Artificial" },
  { value: "datos-inteligencia", label: "Datos e Inteligencia" },
  { value: "transformacion-digital", label: "Transformación Digital" },
  { value: "no-estoy-seguro", label: "No estoy seguro / diagnóstico" },
];

const presupuestos = [
  { value: "menos-15k", label: "Menos de $15,000 MXN" },
  { value: "15k-30k", label: "$15,000 - $30,000 MXN" },
  { value: "30k-60k", label: "$30,000 - $60,000 MXN" },
  { value: "mas-60k", label: "Más de $60,000 MXN" },
  { value: "no-seguro", label: "Aún no lo sé" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactoFormValues>({
    resolver: zodResolver(contactoSchema),
  });

  async function onSubmit(values: ContactoFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request-failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-soft-cyan" />
        <h3 className="font-heading text-xl font-semibold text-cloud">
          ¡Gracias por escribirnos!
        </h3>
        <p className="max-w-sm text-sm text-cloud/65">
          Recibimos tu mensaje. Un miembro de Ravela Group se pondrá en contacto contigo
          muy pronto.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass flex flex-col gap-5 rounded-2xl p-6 sm:p-8" noValidate>
      {/* Honeypot anti-spam: invisible para personas, atractivo para bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
        {...register("sitioWeb")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="nombre">
            Nombre completo
          </label>
          <input id="nombre" className={inputClass} {...register("nombre")} />
          {errors.nombre && <p className={errorClass}>{errors.nombre.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="empresa">
            Empresa
          </label>
          <input id="empresa" className={inputClass} {...register("empresa")} />
          {errors.empresa && <p className={errorClass}>{errors.empresa.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Correo electrónico
          </label>
          <input id="email" type="email" className={inputClass} {...register("email")} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="whatsapp">
            WhatsApp (opcional)
          </label>
          <input id="whatsapp" className={inputClass} {...register("whatsapp")} />
        </div>
        <div>
          <label className={labelClass} htmlFor="estado">
            Estado
          </label>
          <input id="estado" className={inputClass} placeholder="Ej. Jalisco" {...register("estado")} />
          {errors.estado && <p className={errorClass}>{errors.estado.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="industria">
            Industria
          </label>
          <input
            id="industria"
            className={inputClass}
            placeholder="Ej. Distribución, manufactura..."
            {...register("industria")}
          />
          {errors.industria && <p className={errorClass}>{errors.industria.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="tamano">
            Tamaño de la empresa
          </label>
          <select id="tamano" className={inputClass} defaultValue="" {...register("tamano")}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1-10">1 a 10 empleados</option>
            <option value="11-50">11 a 50 empleados</option>
            <option value="51-200">51 a 200 empleados</option>
            <option value="201-500">201 a 500 empleados</option>
            <option value="500+">Más de 500 empleados</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="servicioInteres">
            ¿Qué te interesa?
          </label>
          <select id="servicioInteres" className={inputClass} defaultValue="" {...register("servicioInteres")}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {serviciosInteres.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="presupuestoEstimado">
            Presupuesto estimado (opcional)
          </label>
          <select
            id="presupuestoEstimado"
            className={inputClass}
            defaultValue=""
            {...register("presupuestoEstimado")}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {presupuestos.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="mensaje">
          Cuéntanos sobre tu empresa y qué te gustaría lograr
        </label>
        <textarea id="mensaje" rows={5} className={inputClass} {...register("mensaje")} />
        {errors.mensaje && <p className={errorClass}>{errors.mensaje.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-magenta">
          Hubo un problema al enviar tu mensaje. Intenta de nuevo o escríbenos directamente
          por correo.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  );
}
