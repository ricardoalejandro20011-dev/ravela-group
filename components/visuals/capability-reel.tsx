"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { SystemScene } from "./system-scenes";
import type { SceneKind } from "@/lib/data/capabilities";
const scenes: { kind: SceneKind; title: string }[] = [
  { kind: "dashboard", title: "Operación conectada / Datos y BI" },
  { kind: "agent", title: "Conocimiento empresarial / IA" },
  { kind: "simulation", title: "Inventario y demanda / Simulación" },
  { kind: "vision", title: "Inspección operativa / Visión" },
  { kind: "application", title: "Expedientes y agenda / Aplicaciones" },
  { kind: "workflow", title: "Procesos entre sistemas / Automatización" },
  { kind: "pricing", title: "Variables de negocio / Escenarios" },
];
export function CapabilityReel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const lane = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const index = useRef(0);
  function go(n: number, user = true) {
    const next = (n + scenes.length) % scenes.length;
    if (user) setPaused(true);
    const el = lane.current;
    if (el)
      el.scrollTo({
        left: next * el.clientWidth,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  }
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    function sync() {
      clearInterval(timer);
      if (!paused && !media.matches && visible && !document.hidden)
        timer = setInterval(() => {
          const el = lane.current;
          if (el)
            el.scrollTo({
              left: ((index.current + 1) % scenes.length) * el.clientWidth,
              behavior: "smooth",
            });
        }, 5600);
    }
    const observer = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        sync();
      },
      { threshold: 0.25 },
    );
    if (root.current) observer.observe(root.current);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      clearInterval(timer);
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);
  useEffect(() => {
    const el = lane.current;
    if (!el) return;
    let width = el.clientWidth;
    const observer = new ResizeObserver(() => {
      if (el.clientWidth === width) return;
      width = el.clientWidth;
      el.scrollTo({
        left: index.current * el.clientWidth,
        behavior: "instant",
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={root}
      className="reel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Escaparate de capacidades de Ravela"
    >
      <div
        ref={lane}
        className="reel-track"
        tabIndex={0}
        onPointerDown={() => setPaused(true)}
        onFocusCapture={() => setPaused(true)}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(active + 1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(active - 1);
          }
        }}
        onScroll={(e) => {
          const n = Math.round(
            e.currentTarget.scrollLeft / e.currentTarget.clientWidth,
          );
          index.current = n;
          setActive(n);
        }}
      >
        {scenes.map((scene, i) => (
          <div
            key={scene.kind}
            className="reel-slide"
            data-active={i === active}
            role="group"
            aria-roledescription="escena"
            aria-label={`${i + 1} de ${scenes.length}: ${scene.title}`}
            inert={i !== active}
          >
            <SystemScene kind={scene.kind} interactive={i === active} />
          </div>
        ))}
      </div>
      <div className="reel-controls">
        <p className="reel-description">
          <span className="font-semibold">
            {String(active + 1).padStart(2, "0")} / 07
          </span>
          <br />
          {scenes[active]?.title}
        </p>
        <div className="reel-dots">
          {scenes.map((s, i) => (
            <button
              key={s.kind}
              aria-label={`Ver escena ${i + 1}: ${s.title}`}
              aria-current={active === i}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="reel-motion"
            aria-label={paused ? "Reanudar escaparate" : "Pausar escaparate"}
            onClick={() => setPaused((v) => !v)}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <button
            className="round-control"
            aria-label="Escena anterior"
            onClick={() => go(active - 1)}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            className="round-control"
            aria-label="Siguiente escena"
            onClick={() => go(active + 1)}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
