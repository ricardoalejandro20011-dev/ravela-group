"use client";
import { useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ClinicalScene } from "@/components/visuals/system-scenes";
export type FeaturedCaseContent = {
  title: string;
  description: string;
  client: string;
  href: string;
  before: string[];
  after: string[];
};
const dental: FeaturedCaseContent = {
  title: "La misma clínica. Una nueva forma de operar.",
  description:
    "Digitalización y centralización de expedientes y citas. Un cambio concreto en la forma de consultar y organizar la información.",
  client: "Clínica dental privada",
  href: "/casos/clinica-dental-privada",
  before: [
    "Expedientes dispersos",
    "Agenda manual",
    "Información difícil de consultar",
    "Seguimiento manual",
  ],
  after: [
    "Expediente digital",
    "Citas vinculadas",
    "Información centralizada",
    "Seguimiento organizado",
  ],
};
export function RealCase({
  content = dental,
  Visual = ClinicalScene,
}: {
  content?: FeaturedCaseContent;
  Visual?: ComponentType<{ before: boolean }>;
}) {
  const [before, setBefore] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  return (
    <section id="caso-destacado" className="featured-case" data-before={before}>
      <Container>
        <div className="featured-heading">
          <div>
            <p className="eyebrow">Caso Ravela / {content.client}</p>
            <h2 className="section-title mt-4">{content.title}</h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-cloud/75">
              {content.description}
            </p>
            <div
              role="group"
              aria-label="Comparar antes y después"
              className="featured-switch mt-6"
            >
              <button aria-pressed={before} onClick={() => setBefore(true)}>
                Antes
              </button>
              <button aria-pressed={!before} onClick={() => setBefore(false)}>
                Después
              </button>
            </div>
          </div>
        </div>
        <div
          key={String(before)}
          onTouchStart={(e) => {
            const t = e.touches[0];
            touch.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            const t = e.changedTouches[0];
            const start = touch.current;
            if (
              start &&
              Math.abs(t.clientX - start.x) > 50 &&
              Math.abs(t.clientX - start.x) > Math.abs(t.clientY - start.y)
            )
              setBefore(t.clientX > start.x);
            touch.current = null;
          }}
          style={{ touchAction: "pan-y" }}
        >
          <Visual before={before} />
        </div>
        <div className="featured-facts" aria-live="polite">
          {(before ? content.before : content.after).map((s, i) => (
            <p key={s}>
              <span>
                0{i + 1} / {before ? "ANTES" : "DESPUÉS"}
              </span>
              {s}
            </p>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-lg text-[10px] leading-5 text-cloud/70">
            Representación de la solución · Datos demostrativos. Sin información
            médica real ni métricas de resultados inventadas.
          </p>
          <Link href={content.href} className="text-link">
            Conocer el caso completo <ArrowUpRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
