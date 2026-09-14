"use client";
import { useState } from "react";
import Link from "next/link";
import { capabilities } from "@/lib/data/capabilities";
const problems = [
  {
    title: "Quiero reducir trabajo manual",
    ids: [0, 6],
    note: "Empezaríamos por mapear tareas, reglas y excepciones antes de definir qué automatizar.",
  },
  {
    title: "Quiero conectar mis sistemas",
    ids: [6, 0],
    note: "Revisaríamos APIs, permisos y calidad de la información para definir una integración viable.",
  },
  {
    title: "Quiero responder más rápido",
    ids: [1, 7],
    note: "Evaluaríamos consultas frecuentes, fuentes de conocimiento y momentos de intervención humana.",
  },
  {
    title: "Quiero entender mis datos",
    ids: [2, 6],
    note: "Acordaríamos indicadores y fuentes para construir una lectura útil de la operación.",
  },
  {
    title: "Quiero anticipar escenarios",
    ids: [4, 3],
    note: "Revisaríamos datos históricos, variables y supuestos antes de proponer simulación o predicción.",
  },
  {
    title: "Quiero crear una herramienta",
    ids: [7, 6],
    note: "Definiríamos usuarios, flujo principal y alcance inicial antes de construir un producto.",
  },
];
export function ProblemExplorer() {
  const [selected, setSelected] = useState(0);
  const p = problems[selected];
  return (
    <div className="problem-selector">
      <h2 className="mb-7 text-3xl font-medium tracking-tight">
        ¿Qué problema quieres resolver?
      </h2>
      <div
        className="problem-options"
        role="group"
        aria-label="Explorar por problema"
      >
        {problems.map((p, i) => (
          <button
            key={p.title}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            {p.title}
          </button>
        ))}
      </div>
      <div className="problem-recommendation" aria-live="polite">
        <p className="mb-3 text-xs uppercase tracking-widest">
          Capacidades para explorar
        </p>
        {p.ids.map((i) => (
          <Link href={`/soluciones/${capabilities[i].slug}`} key={i}>
            {capabilities[i].name} ↗
          </Link>
        ))}
        <p className="mt-3 max-w-3xl text-sm leading-7 text-cloud/75">
          {p.note}
        </p>
        <p className="mt-3 text-[11px] text-cloud/70">
          Orientación inicial. La solución se define después de conocer tu
          proceso.
        </p>
      </div>
    </div>
  );
}
