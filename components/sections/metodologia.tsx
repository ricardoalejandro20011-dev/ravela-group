"use client";
import { useEffect, useRef, useState } from "react";
import {
  Search,
  GitBranch,
  Layers,
  ChartNoAxesCombined,
  Check,
} from "lucide-react";
import { Container, Section } from "@/components/ui/container";
const steps = [
  {
    title: "Entendemos",
    text: "Escuchamos a tu equipo y recorremos el proceso real. Identificamos dónde se pierde tiempo y qué conviene resolver primero.",
    output: "Mapa del proceso y oportunidad prioritaria",
    Icon: Search,
  },
  {
    title: "Diseñamos",
    text: "Definimos el flujo, las integraciones y las reglas. Acordamos alcance, fases y cómo evaluar el resultado antes de construir.",
    output: "Solución definida y criterios de aceptación",
    Icon: GitBranch,
  },
  {
    title: "Implementamos",
    text: "Construimos por fases, probamos con tu equipo e integramos la solución a las herramientas que ya utiliza.",
    output: "Solución probada, documentación y capacitación",
    Icon: Layers,
  },
  {
    title: "Mejoramos",
    text: "Revisamos el funcionamiento y los indicadores acordados. Ajustamos el proceso con base en lo que ocurre en la operación.",
    output: "Seguimiento y siguientes mejoras",
    Icon: ChartNoAxesCombined,
  },
];
export function Metodologia() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset.step));
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: 0 },
    );
    root.current
      ?.querySelectorAll("[data-step]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <Section id="como-trabajamos" className="bg-[#f7f8f5]">
      <Container>
        <div ref={root} className="grid gap-9 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 className="section-title mt-4 max-w-lg">
              Un camino claro, de la primera pregunta a la mejora continua.
            </h2>
            <div
              className="method-map mt-9 hidden rounded-xl border bg-white p-7 lg:block"
              aria-hidden="true"
            >
              <p className="mb-6 text-[10px] tracking-widest text-cloud/70">
                DEL PROCESO A LA OPERACIÓN
              </p>
              {steps.map(({ title, Icon }, i) => (
                <div
                  key={title}
                  className="method-map-step"
                  data-active={active >= i}
                >
                  <span>
                    <Icon size={20} />
                  </span>
                  <p className="flex-1 text-sm">{title}</p>
                  {active > i ? (
                    <Check size={17} />
                  ) : (
                    <span className="text-xs">0{i + 1}</span>
                  )}
                </div>
              ))}
              <div className="mt-6 border-t pt-5 text-xs leading-6 text-soft-cyan">
                Cada fase deja un entregable concreto.
              </div>
            </div>
          </div>
          <ol className="method-steps">
            {steps.map(({ title, text, output, Icon }, i) => (
              <li
                key={title}
                data-step={i}
                className="border-t py-7 lg:min-h-64 lg:py-9"
              >
                <div className="flex items-center gap-3 text-soft-cyan">
                  <Icon size={19} />
                  <span className="text-xs">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-2xl font-medium tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-cloud/75">
                  {text}
                </p>
                <p className="mt-5 text-xs leading-6">
                  <span className="font-semibold">Entregable / </span>
                  {output}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
