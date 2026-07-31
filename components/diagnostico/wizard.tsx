"use client";

import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { DiagnosticoResultado } from "@/lib/types";
import type { DiagnosticoFormValues } from "@/lib/validations/diagnostico";

import { ResultadoDiagnostico } from "./resultado";

const inputClass =
  "w-full rounded-xl border border-cloud/15 bg-cloud/5 px-4 py-2.5 text-sm text-cloud placeholder:text-cloud/35 outline-none transition-colors focus:border-soft-cyan/60 focus:ring-2 focus:ring-soft-cyan/20";
const labelClass = "mb-1.5 block text-sm font-medium text-cloud/80";

type WizardState = {
  nombre: string;
  empresa: string;
  email: string;
  industria: string;
  estado: string;
  numEmpleados: DiagnosticoFormValues["numEmpleados"] | "";
  procesosManuales: DiagnosticoFormValues["procesosManuales"];
  horasSemanalesEnProcesosManuales: number;
  usoExcel: DiagnosticoFormValues["usoExcel"] | "";
  sistemasUtilizados: string[];
  usoActualIA: DiagnosticoFormValues["usoActualIA"] | "";
  principalesProblemas: string[];
  interesPrincipal: DiagnosticoFormValues["interesPrincipal"] | "";
};

const initialState: WizardState = {
  nombre: "",
  empresa: "",
  email: "",
  industria: "",
  estado: "",
  numEmpleados: "",
  procesosManuales: [],
  horasSemanalesEnProcesosManuales: 10,
  usoExcel: "",
  sistemasUtilizados: [],
  usoActualIA: "",
  principalesProblemas: [],
  interesPrincipal: "",
};

const procesosOpciones: { value: DiagnosticoFormValues["procesosManuales"][number]; label: string }[] = [
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

const interesOpciones: { value: DiagnosticoFormValues["interesPrincipal"]; label: string }[] = [
  { value: "automatizacion", label: "Automatización" },
  { value: "inteligencia-artificial", label: "Inteligencia Artificial" },
  { value: "datos-dashboards", label: "Datos y dashboards" },
  { value: "transformacion-digital", label: "Transformación digital" },
  { value: "no-estoy-seguro", label: "No estoy seguro" },
];

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function CheckboxGrid<T extends string>({
  options,
  selected,
  onChange,
}: {
  options: { value: T; label: string }[];
  selected: T[];
  onChange: (next: T[]) => void;
}) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-sm transition-colors ${
            selected.includes(opt.value)
              ? "border-soft-cyan/50 bg-soft-cyan/10 text-cloud"
              : "border-cloud/15 bg-cloud/5 text-cloud/70 hover:border-cloud/25"
          }`}
        >
          <input
            type="checkbox"
            className="sr-only"
            checked={selected.includes(opt.value)}
            onChange={() => onChange(toggle(selected, opt.value))}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

function RadioGrid<T extends string>({
  options,
  selected,
  onChange,
}: {
  options: { value: T; label: string }[];
  selected: T | "";
  onChange: (next: T) => void;
}) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-sm transition-colors ${
            selected === opt.value
              ? "border-soft-cyan/50 bg-soft-cyan/10 text-cloud"
              : "border-cloud/15 bg-cloud/5 text-cloud/70 hover:border-cloud/25"
          }`}
        >
          <input
            type="radio"
            className="sr-only"
            checked={selected === opt.value}
            onChange={() => onChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

const TOTAL_STEPS = 5;

export function DiagnosticoWizard() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<WizardState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [resultado, setResultado] = useState<DiagnosticoResultado | null>(null);

  function update<K extends keyof WizardState>(key: K, value: WizardState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  const canAdvance = (() => {
    switch (step) {
      case 1:
        return state.nombre.trim().length > 1 && state.empresa.trim().length > 1 &&
          /\S+@\S+\.\S+/.test(state.email) && state.industria.trim().length > 1 &&
          state.estado.trim().length > 1;
      case 2:
        return state.numEmpleados !== "" && state.procesosManuales.length > 0;
      case 3:
        return state.usoExcel !== "" && state.usoActualIA !== "";
      case 4:
        return state.interesPrincipal !== "";
      default:
        return true;
    }
  })();

  async function handleSubmit() {
    setStatus("submitting");
    try {
      const payload: DiagnosticoFormValues = {
        ...state,
        numEmpleados: state.numEmpleados as DiagnosticoFormValues["numEmpleados"],
        usoExcel: state.usoExcel as DiagnosticoFormValues["usoExcel"],
        usoActualIA: state.usoActualIA as DiagnosticoFormValues["usoActualIA"],
        interesPrincipal: state.interesPrincipal as DiagnosticoFormValues["interesPrincipal"],
      };
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request-failed");
      const data = await res.json();
      setResultado(data.resultado);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  if (resultado) {
    return <ResultadoDiagnostico resultado={resultado} empresa={state.empresa} />;
  }

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="mb-8 flex items-center gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i + 1 <= step ? "gradient-brand" : "bg-cloud/10"}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-xl font-semibold text-cloud">Cuéntanos de ti</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="wizard-nombre">Nombre</label>
              <input id="wizard-nombre" className={inputClass} value={state.nombre} onChange={(e) => update("nombre", e.target.value)} />
            </div>
            <div>
              <label className={labelClass} htmlFor="wizard-empresa">Empresa</label>
              <input id="wizard-empresa" className={inputClass} value={state.empresa} onChange={(e) => update("empresa", e.target.value)} />
            </div>
            <div>
              <label className={labelClass} htmlFor="wizard-email">Correo electrónico</label>
              <input id="wizard-email" type="email" className={inputClass} value={state.email} onChange={(e) => update("email", e.target.value)} />
            </div>
            <div>
              <label className={labelClass} htmlFor="wizard-industria">Industria</label>
              <input id="wizard-industria" className={inputClass} value={state.industria} onChange={(e) => update("industria", e.target.value)} />
            </div>
            <div>
              <label className={labelClass} htmlFor="wizard-estado">Estado</label>
              <input id="wizard-estado" className={inputClass} value={state.estado} onChange={(e) => update("estado", e.target.value)} />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-xl font-semibold text-cloud">Tu operación</h2>
          <div>
            <label className={labelClass}>Número de empleados</label>
            <RadioGrid
              options={[
                { value: "1-5", label: "1 a 5" },
                { value: "6-20", label: "6 a 20" },
                { value: "21-50", label: "21 a 50" },
                { value: "51-200", label: "51 a 200" },
                { value: "200+", label: "Más de 200" },
              ]}
              selected={state.numEmpleados}
              onChange={(v) => update("numEmpleados", v)}
            />
          </div>
          <div>
            <label className={labelClass}>¿Qué procesos haces manualmente? (elige los que apliquen)</label>
            <CheckboxGrid
              options={procesosOpciones}
              selected={state.procesosManuales}
              onChange={(v) => update("procesosManuales", v)}
            />
          </div>
          <div>
            <label className={labelClass}>
              Horas semanales dedicadas a esos procesos: {state.horasSemanalesEnProcesosManuales}
            </label>
            <input
              type="range"
              min={1}
              max={60}
              value={state.horasSemanalesEnProcesosManuales}
              onChange={(e) => update("horasSemanalesEnProcesosManuales", Number(e.target.value))}
              className="w-full accent-electric-violet"
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-xl font-semibold text-cloud">Herramientas actuales</h2>
          <div>
            <label className={labelClass}>¿Qué tanto dependes de Excel/hojas de cálculo?</label>
            <RadioGrid
              options={[
                { value: "no", label: "Casi nada" },
                { value: "ocasional", label: "Ocasional" },
                { value: "intensivo", label: "Intensivo" },
                { value: "critico", label: "Es crítico para operar" },
              ]}
              selected={state.usoExcel}
              onChange={(v) => update("usoExcel", v)}
            />
          </div>
          <div>
            <label className={labelClass}>¿Qué sistemas usas hoy?</label>
            <CheckboxGrid
              options={sistemasOpciones.map((s) => ({ value: s, label: s }))}
              selected={state.sistemasUtilizados}
              onChange={(v) => update("sistemasUtilizados", v)}
            />
          </div>
          <div>
            <label className={labelClass}>¿Ya usas Inteligencia Artificial?</label>
            <RadioGrid
              options={[
                { value: "ninguno", label: "Todavía no" },
                { value: "explorando", label: "Explorando opciones" },
                { value: "pruebas", label: "En pruebas" },
                { value: "en-uso", label: "Ya la usamos" },
              ]}
              selected={state.usoActualIA}
              onChange={(v) => update("usoActualIA", v)}
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-xl font-semibold text-cloud">Prioridades</h2>
          <div>
            <label className={labelClass}>¿Cuáles son tus principales problemas hoy?</label>
            <CheckboxGrid
              options={problemasOpciones.map((p) => ({ value: p, label: p }))}
              selected={state.principalesProblemas}
              onChange={(v) => update("principalesProblemas", v)}
            />
          </div>
          <div>
            <label className={labelClass}>¿Qué te interesa más en este momento?</label>
            <RadioGrid options={interesOpciones} selected={state.interesPrincipal} onChange={(v) => update("interesPrincipal", v)} />
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="flex flex-col items-center gap-4 py-6 text-center">
          <h2 className="font-heading text-xl font-semibold text-cloud">Todo listo</h2>
          <p className="max-w-sm text-sm text-cloud/65">
            Vamos a calcular tu Ravela Opportunity Score™ con base en tus respuestas. Los
            resultados son orientativos.
          </p>
          {status === "error" && (
            <p className="text-sm text-magenta">
              Hubo un problema al generar tu diagnóstico. Intenta de nuevo.
            </p>
          )}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          className={step === 1 ? "invisible" : ""}
        >
          <ArrowLeft className="h-4 w-4" />
          Atrás
        </Button>

        {step < TOTAL_STEPS ? (
          <Button type="button" disabled={!canAdvance} onClick={() => setStep((s) => s + 1)}>
            Siguiente
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="button" disabled={status === "submitting"} onClick={handleSubmit}>
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Calculando...
              </>
            ) : (
              "Ver mi Opportunity Score"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
