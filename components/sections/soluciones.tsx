"use client";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import {
  AutomationPreview,
  AgentPreview,
  SimulationPreview,
} from "@/components/demos/experience-visuals";
import { Container, Section } from "@/components/ui/container";

const solutions = [
  {
    label: "Automatización de procesos",
    title: "Un proceso conectado. Menos trabajo repetido.",
    description:
      "Conectamos tus herramientas para que la información avance con reglas claras y validación humana donde hace falta.",
    applications: [
      "Capturas y sincronización",
      "Aprobaciones y documentos",
      "Reportes y notificaciones",
    ],
    href: "/soluciones/automatizacion",
    cta: "Explorar automatización",
    Visual: AutomationPreview,
  },
  {
    label: "Agentes de IA",
    title: "Respuestas útiles que llevan a una acción.",
    description:
      "Agentes que consultan información empresarial, atienden solicitudes y preparan el siguiente paso con supervisión de tu equipo.",
    applications: [
      "Atención por WhatsApp",
      "Consulta de documentación",
      "Calificación y seguimiento",
    ],
    href: "/soluciones/inteligencia-artificial",
    cta: "Explorar agentes de IA",
    Visual: AgentPreview,
  },
  {
    label: "Datos y decisiones",
    title: "De información dispersa a decisiones claras.",
    description:
      "Reunimos tus datos en indicadores y escenarios para entender la operación y explorar qué puede pasar antes de decidir.",
    applications: [
      "Dashboards y KPIs",
      "Consolidación de información",
      "Simulación de escenarios",
    ],
    href: "/soluciones/datos-inteligencia",
    cta: "Explorar datos y decisiones",
    Visual: SimulationPreview,
  },
];
export function Soluciones() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <Section id="soluciones" className="border-b bg-[#f7f8f5]">
      <Container>
        <p className="eyebrow">Tres formas de recuperar capacidad</p>
        <h2 className="section-title mt-4 max-w-2xl">
          Explora lo que podemos resolver.
        </h2>
        <div
          role="tablist"
          aria-label="Soluciones de Ravela"
          className="solution-tabs mt-8"
        >
          {solutions.map((s, i) => (
            <button
              key={s.label}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-controls={`${id}-panel-${i}`}
              aria-selected={selected === i}
              tabIndex={selected === i ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => {
                let next = i;
                if (e.key === "ArrowRight") next = (i + 1) % solutions.length;
                else if (e.key === "ArrowLeft")
                  next = (i + solutions.length - 1) % solutions.length;
                else if (e.key === "Home") next = 0;
                else if (e.key === "End") next = solutions.length - 1;
                else return;
                e.preventDefault();
                setSelected(next);
                tabs.current[next]?.focus();
                tabs.current[next]?.scrollIntoView({
                  block: "nearest",
                  inline: "nearest",
                });
              }}
            >
              <span className="mr-3 text-xs opacity-80">0{i + 1}</span>
              {s.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-cloud/70 lg:hidden">
          Selecciona una solución · Desliza para ver las tres →
        </p>
        {solutions.map((s, i) => (
          <div
            key={s.label}
            role="tabpanel"
            id={`${id}-panel-${i}`}
            aria-labelledby={`${id}-tab-${i}`}
            hidden={selected !== i}
            tabIndex={0}
            className="solution-panel mt-8"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <h3 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-cloud/75">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {s.applications.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-soft-cyan" />
                      {a}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="mt-7 inline-flex min-h-12 items-center gap-4 rounded-lg bg-cloud px-5 text-sm text-white"
                >
                  {s.cta}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
              {selected === i && <s.Visual />}
            </div>
          </div>
        ))}
        <noscript>
          <p className="mt-6">
            También diseñamos agentes de IA y soluciones de datos.{" "}
            <Link href="/soluciones" className="underline">
              Consulta todas las soluciones.
            </Link>
          </p>
        </noscript>
      </Container>
    </Section>
  );
}
