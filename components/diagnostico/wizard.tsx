"use client";
import { useState, useRef, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import type { DiagnosticoResultado } from "@/lib/types";
import type { DiagnosticoFormValues } from "@/lib/validations/diagnostico";
import { ResultadoDiagnostico } from "./resultado";
const procesosOpciones: {
  value: DiagnosticoFormValues["procesosManuales"][number];
  label: string;
}[] = [
  { value: "reportes", label: "Reportes" },
  { value: "captura-datos", label: "Captura de datos" },
  { value: "seguimiento-clientes", label: "Seguimiento a clientes" },
  { value: "facturacion", label: "Facturación" },
  { value: "inventario", label: "Inventario" },
  { value: "atencion-whatsapp", label: "Atención por WhatsApp" },
  { value: "conciliaciones", label: "Conciliaciones" },
  { value: "otro", label: "Otro" },
];

const sistemasOpciones = [
  "Excel / Google Sheets",
  "WhatsApp Business",
  "Sistema contable",
  "CRM",
  "ERP",
  "Ninguno formal",
];

const problemasOpciones = [
  "Reportes en Excel",
  "Captura repetitiva",
  "Seguimiento por WhatsApp",
  "Información dispersa",
  "Procesos duplicados",
  "Tareas que consumen horas",
];

const interesOpciones: {
  value: DiagnosticoFormValues["interesPrincipal"];
  label: string;
}[] = [
  { value: "automatizacion", label: "Automatización" },
  { value: "inteligencia-artificial", label: "Inteligencia Artificial" },
  { value: "datos-dashboards", label: "Datos y dashboards" },
  { value: "transformacion-digital", label: "Transformación digital" },
  { value: "no-estoy-seguro", label: "No estoy seguro" },
];

const questions = [
  {
    key: "procesosManuales",
    title: "¿Qué procesos haces manualmente?",
    options: procesosOpciones,
    multi: true,
  },
  {
    key: "horasSemanalesEnProcesosManuales",
    title: "¿Cuántas horas semanales dedica el equipo a esos procesos?",
    range: true,
  },
  {
    key: "numEmpleados",
    title: "¿Cuántas personas tiene tu empresa?",
    options: [
      { value: "1-5", label: "1 a 5" },
      { value: "6-20", label: "6 a 20" },
      { value: "21-50", label: "21 a 50" },
      { value: "51-200", label: "51 a 200" },
      { value: "200+", label: "Más de 200" },
    ],
  },
  {
    key: "usoExcel",
    title: "¿Qué tanto dependes de Excel?",
    options: [
      { value: "no", label: "Casi nada" },
      { value: "ocasional", label: "Ocasionalmente" },
      { value: "intensivo", label: "Lo usamos a diario" },
      { value: "critico", label: "Es crítico para operar" },
    ],
  },
  {
    key: "sistemasUtilizados",
    title: "¿Qué sistemas usas hoy?",
    options: sistemasOpciones.map((s) => ({ value: s, label: s })),
    multi: true,
  },
  {
    key: "usoActualIA",
    title: "¿Ya utilizas Inteligencia Artificial?",
    options: [
      { value: "ninguno", label: "Todavía no" },
      { value: "explorando", label: "Explorando opciones" },
      { value: "pruebas", label: "En pruebas" },
      { value: "en-uso", label: "Ya la usamos" },
    ],
  },
  {
    key: "principalesProblemas",
    title: "¿Qué problemas quieres resolver primero?",
    options: problemasOpciones.map((s) => ({ value: s, label: s })),
    multi: true,
  },
  {
    key: "interesPrincipal",
    title: "¿Qué te interesa mejorar?",
    options: interesOpciones,
  },
  {
    key: "contacto",
    title: "¿A dónde enviamos el seguimiento de tu diagnóstico?",
  },
];
export function DiagnosticoWizard() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<
    Record<string, string | string[] | number>
  >({
    procesosManuales: [],
    horasSemanalesEnProcesosManuales: 10,
    sistemasUtilizados: [],
    principalesProblemas: [],
    nombre: "",
    empresa: "",
    email: "",
    industria: "No indicada",
    estado: "No indicado",
    sitioWeb: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState<DiagnosticoResultado | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);
  const q = questions[step];
  const value = state[q.key];
  const last = step === questions.length - 1;
  useEffect(() => {
    if (step > 0) heading.current?.focus();
  }, [step]);
  function update(key: string, v: string | string[] | number) {
    setState((s) => ({ ...s, [key]: v }));
    if (!started.current) {
      track("diagnostico_start");
      started.current = true;
    }
  }
  const valid = last
    ? String(state.nombre).trim().length >= 2 &&
      String(state.empresa).trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(state.email))
    : q.range || (Array.isArray(value) ? value.length > 0 : Boolean(value));
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!valid || status === "loading") return;
    if (!last) {
      setStep((s) => s + 1);
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      const data = await res.json();
      if (!res.ok || !data.resultado) throw new Error();
      setResultado(data.resultado);
      track("diagnostico_complete");
      setStatus("idle");
    } catch {
      setStatus("idle");
      setError(
        "No pudimos guardar tu diagnóstico. Intenta de nuevo o contáctanos desde la página de contacto.",
      );
    }
  }
  if (resultado)
    return (
      <div tabIndex={-1} ref={(el) => el?.focus()}>
        <ResultadoDiagnostico
          resultado={resultado}
          empresa={String(state.empresa)}
        />
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="rounded-xl border bg-[#fafbf9] p-6 sm:p-10"
    >
      <div className="mb-3 flex justify-between text-xs text-cloud/70">
        <span>Tu diagnóstico inicial</span>
        <span>
          Paso {step + 1} de {questions.length}
        </span>
      </div>
      <progress
        aria-label="Progreso del diagnóstico"
        className="mb-8 h-1.5 w-full accent-soft-cyan"
        value={step + 1}
        max={questions.length}
      />
      <div key={step} className="step-enter">
        <h2
          ref={heading}
          tabIndex={-1}
          className="mb-6 text-2xl font-medium tracking-tight"
        >
          {q.title}
        </h2>
        {q.options && (
          <fieldset>
            <legend className="sr-only">{q.title}</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {q.options.map((opt) => {
                const checked = Array.isArray(value)
                  ? value.includes(opt.value)
                  : value === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border p-4 text-sm ${checked ? "border-soft-cyan bg-[#e9efe6]" : "bg-white"}`}
                  >
                    <input
                      type={q.multi ? "checkbox" : "radio"}
                      name={q.key}
                      value={opt.value}
                      checked={checked}
                      className="accent-soft-cyan"
                      onChange={() =>
                        update(
                          q.key,
                          q.multi
                            ? checked
                              ? (value as string[]).filter(
                                  (v) => v !== opt.value,
                                )
                              : [
                                  ...(Array.isArray(value) ? value : []),
                                  opt.value,
                                ]
                            : opt.value,
                        )
                      }
                    />
                    {opt.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}
        {q.range && (
          <label className="block text-sm">
            Horas por semana: <strong className="text-2xl">{value}</strong>
            <input
              className="mt-6 w-full accent-soft-cyan"
              type="range"
              min={1}
              max={80}
              value={Number(value)}
              onChange={(e) => update(q.key, Number(e.target.value))}
            />
            <span className="mt-3 block text-xs text-cloud/70">
              Suma las horas que el equipo dedica a estas tareas en una semana
              habitual.
            </span>
          </label>
        )}
        {last && (
          <div className="space-y-4">
            {[
              ["nombre", "Nombre", "text", "name"],
              ["empresa", "Empresa", "text", "organization"],
              ["email", "Correo electrónico", "email", "email"],
            ].map(([key, label, type, auto]) => (
              <label key={key} className="block text-sm">
                {label}
                <input
                  className="field mt-2"
                  type={type}
                  autoComplete={auto}
                  required
                  maxLength={100}
                  value={String(state[key])}
                  onChange={(e) => update(key, e.target.value)}
                />
              </label>
            ))}
            <div hidden aria-hidden="true">
              <input
                aria-label="Sitio web"
                tabIndex={-1}
                autoComplete="off"
                value={String(state.sitioWeb)}
                onChange={(e) => update("sitioWeb", e.target.value)}
              />
            </div>
            <p className="text-xs leading-6 text-cloud/70">
              Usaremos tus datos para dar seguimiento a tu solicitud.{" "}
              <Link href="/aviso-de-privacidad" className="underline">
                Aviso de privacidad
              </Link>
              . Los resultados son orientativos.
            </p>
          </div>
        )}
      </div>
      {error && (
        <p role="alert" className="mt-5 text-sm text-magenta">
          {error}
        </p>
      )}
      <div className="mt-8 flex justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          disabled={step === 0 || status === "loading"}
          onClick={() => setStep((s) => s - 1)}
        >
          ← Atrás
        </Button>
        <Button type="submit" disabled={!valid || status === "loading"}>
          {status === "loading"
            ? "Calculando…"
            : last
              ? "Ver mi diagnóstico"
              : "Siguiente →"}
        </Button>
      </div>
    </form>
  );
}
