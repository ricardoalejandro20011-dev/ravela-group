"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolio, portfolioFilters } from "@/lib/data/portfolio";
import { SystemScene } from "@/components/visuals/system-scenes";
import { Container, Section } from "@/components/ui/container";
export function PortfolioShowcase({
  library = false,
  experienceOnly = false,
}: {
  library?: boolean;
  experienceOnly?: boolean;
}) {
  const [filter, setFilter] = useState("Todos");
  const [active, setActive] = useState(0);
  const lane = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; scroll: number; moved: boolean } | null>(
    null,
  );
  const items = portfolio.filter(
    (p) =>
      (!experienceOnly || p.kind === "Experiencia aplicada") &&
      (filter === "Todos" || p.filters.includes(filter)),
  );
  function move(delta: number) {
    const el = lane.current;
    if (!el) return;
    const step =
      el.children[0]?.getBoundingClientRect().width || el.clientWidth;
    el.scrollBy({
      left: delta * (step + (innerWidth < 640 ? 16 : 24)),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <Section
      id={library ? "biblioteca" : "experiencia"}
      className={library ? "pt-0" : ""}
    >
      <Container>
        {!library && (
          <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Casos y experiencia aplicada</p>
              <h2 className="section-title mt-4 max-w-3xl">
                Lo que ya sabemos
                <br />
                llevar a la práctica.
              </h2>
            </div>
            <Link href="/casos-de-exito" className="text-link">
              Ver la biblioteca <ArrowUpRight size={15} />
            </Link>
          </div>
        )}
        <p className="portfolio-note mb-7">
          Cada ficha distingue entre un caso de Ravela, experiencia previa de
          Ricardo Valdez y un concepto demostrativo. Las representaciones usan
          datos ficticios.
        </p>
        {library && (
          <div
            className="portfolio-filter mb-8"
            role="group"
            aria-label="Filtrar casos y experiencia"
          >
            {portfolioFilters.map((f) => (
              <button
                key={f}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        )}
        <div
          ref={lane}
          className={library ? "library-grid" : "portfolio-track"}
          tabIndex={library ? undefined : 0}
          role={library ? undefined : "region"}
          aria-label={
            library ? undefined : "Casos y experiencia. Desliza para explorar"
          }
          onScroll={
            library
              ? undefined
              : (e) => {
                  const el = e.currentTarget;
                  const width =
                    (el.children[0]?.getBoundingClientRect().width || 1) +
                    (innerWidth < 640 ? 16 : 24);
                  setActive(
                    Math.min(
                      items.length - 1,
                      Math.round(el.scrollLeft / width),
                    ),
                  );
                }
          }
          onPointerDown={
            library
              ? undefined
              : (e) => {
                  if (
                    e.pointerType !== "mouse" ||
                    (e.target as HTMLElement).closest("a,button")
                  )
                    return;
                  drag.current = {
                    x: e.clientX,
                    scroll: e.currentTarget.scrollLeft,
                    moved: false,
                  };
                }
          }
          onPointerMove={
            library
              ? undefined
              : (e) => {
                  const d = drag.current;
                  if (!d || e.buttons !== 1) return;
                  const delta = e.clientX - d.x;
                  if (Math.abs(delta) > 5) {
                    d.moved = true;
                    e.currentTarget.classList.add("is-dragging");
                    e.currentTarget.setPointerCapture(e.pointerId);
                    e.currentTarget.scrollLeft = d.scroll - delta;
                  }
                }
          }
          onPointerUp={(e) => {
            drag.current = null;
            e.currentTarget.classList.remove("is-dragging");
            if (e.currentTarget.hasPointerCapture(e.pointerId))
              e.currentTarget.releasePointerCapture(e.pointerId);
          }}
          onPointerCancel={(e) => {
            drag.current = null;
            e.currentTarget.classList.remove("is-dragging");
          }}
        >
          {items.map((p) => (
            <article
              key={p.slug}
              className={library ? "library-card" : "portfolio-slide"}
            >
              <SystemScene kind={p.scene} compact={library} />
              <div className="portfolio-caption">
                <div>
                  <span className="portfolio-kind">{p.kind}</span>
                  <p className="mt-3 text-[10px] uppercase tracking-widest">
                    {p.category}
                  </p>
                  {library ? <h2>{p.title}</h2> : <h3>{p.title}</h3>}
                  {library && <p>{p.context}</p>}
                </div>
                <Link href={p.href} className="text-link">
                  Ver caso <ArrowUpRight size={15} />
                  <span className="sr-only">: {p.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        {library ? (
          <p className="mt-7 text-xs text-cloud/70" role="status">
            {items.length} fichas · Clasificación visible en cada caso
          </p>
        ) : (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-cloud/70">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")} · Arrastra o desliza para
              explorar
            </p>
            <div className="flex gap-2">
              <button
                className="round-control"
                aria-label="Caso anterior"
                disabled={active === 0}
                onClick={() => move(-1)}
              >
                <ArrowLeft size={17} />
              </button>
              <button
                className="round-control"
                aria-label="Siguiente caso"
                disabled={active === items.length - 1}
                onClick={() => move(1)}
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
