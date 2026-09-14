"use client";
import { useId, useState } from "react";
import {
  Files,
  CalendarDays,
  Search,
  Copy,
  FolderCheck,
  Link2,
  Database,
  ListChecks,
} from "lucide-react";
import { DentalPreview } from "./dental-preview";
const before = [
  { Icon: Files, text: "Expedientes dispersos" },
  { Icon: CalendarDays, text: "Agenda administrada manualmente" },
  { Icon: Search, text: "Información difícil de consultar" },
  { Icon: Copy, text: "Riesgo de duplicidad" },
];
const after = [
  { Icon: FolderCheck, text: "Expediente digital" },
  { Icon: Link2, text: "Citas vinculadas" },
  { Icon: Database, text: "Información centralizada" },
  { Icon: ListChecks, text: "Seguimiento organizado" },
];
export function DentalComparison() {
  const [mode, setMode] = useState("despues");
  const id = useId();
  return (
    <div className="dental-comparison">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-xs font-medium">El cambio en la operación</p>
        <div
          className="flex rounded-lg border p-1"
          role="group"
          aria-label="Comparar proceso de la clínica"
        >
          {[
            ["antes", "Antes"],
            ["despues", "Después"],
          ].map(([value, label]) => (
            <button
              key={value}
              aria-pressed={mode === value}
              aria-controls={id}
              onClick={() => setMode(value)}
              className={`min-h-11 rounded-md px-5 text-sm transition-colors ${mode === value ? "bg-cloud text-white" : "hover:bg-midnight"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div id={id} className="comparison-content" key={mode}>
        <ul className="mb-5 grid grid-cols-2 gap-3">
          {(mode === "antes" ? before : after).map(({ Icon, text }) => (
            <li
              key={text}
              className={`flex flex-col items-start gap-2 rounded-lg p-3 text-xs sm:flex-row sm:items-center sm:gap-3 sm:p-4 leading-5 ${mode === "antes" ? "bg-[#f1eeea]" : "bg-[#e8efe7]"}`}
            >
              <Icon size={17} className="shrink-0" />
              {text}
            </li>
          ))}
        </ul>
        {mode === "despues" ? (
          <DentalPreview />
        ) : (
          <div className="rounded-xl border border-dashed bg-[#faf9f6] p-6 sm:p-9">
            <p className="eyebrow">Un proceso disperso</p>
            <div className="my-8 grid grid-cols-2 gap-4">
              {[
                "Expediente en papel",
                "Agenda manual",
                "Notas de consulta",
                "Datos de contacto",
              ].map((text, i) => (
                <div
                  key={text}
                  className="rounded border bg-white p-5 text-xs shadow-sm"
                  style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}
                >
                  <Files size={23} className="mb-4 text-cloud/60" />
                  {text}
                </div>
              ))}
            </div>
            <p className="text-xs leading-6 text-cloud/70">
              Representación visual del proceso anterior. Sin documentos ni
              datos reales.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
