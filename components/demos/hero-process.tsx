"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Bot,
  Database,
  FileCheck,
  Check,
  Pause,
  Play,
} from "lucide-react";

const steps = [
  {
    Icon: MessageCircle,
    title: "Recibe la consulta",
    detail: "WhatsApp · «¿Tienen la pieza RX-240?»",
  },
  {
    Icon: Bot,
    title: "Interpreta la solicitud",
    detail: "Identifica la pieza y la intención de compra.",
  },
  {
    Icon: Database,
    title: "Consulta la información",
    detail: "Busca disponibilidad en inventario y CRM.",
  },
  {
    Icon: FileCheck,
    title: "Prepara la respuesta",
    detail: "Genera una cotización con información del catálogo.",
  },
  {
    Icon: Check,
    title: "Registra el seguimiento",
    detail: "La oportunidad queda lista en el CRM.",
  },
];

export function HeroProcess() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    let visible = false;
    function sync() {
      clearInterval(timer);
      if (!paused && !media.matches && visible && !document.hidden) {
        timer = setInterval(
          () => setActive((n) => (n + 1) % steps.length),
          2200,
        );
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
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
  return (
    <div
      ref={root}
      className="demo-panel hero-process"
      onPointerDown={() => setPaused(true)}
      onFocusCapture={(e) => {
        if (!(e.target as HTMLElement).closest(".motion-control"))
          setPaused(true);
      }}
    >
      <div className="demo-top">
        <span className="font-semibold">DE WHATSAPP A TU OPERACIÓN</span>
        <span className="text-soft-cyan">Demo</span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="mb-4 rounded-lg bg-[#edf2eb] px-4 py-3 text-xs leading-5">
          «Hola, ¿tienen disponible la pieza RX-240?»
          <span className="mt-1 block text-[10px] text-cloud/70">
            Consulta de ejemplo · WhatsApp
          </span>
        </div>
        <ol className="process-sequence">
          {steps.map(({ Icon, title, detail }, i) => (
            <li key={title} data-complete={i <= active}>
              <button
                type="button"
                aria-pressed={active === i}
                onClick={() => {
                  setPaused(true);
                  setActive(i);
                }}
                className="process-node"
              >
                <span className="process-icon">
                  <Icon size={16} />
                </span>
                <span className="flex-1 text-left">
                  <span className="block text-xs font-medium">{title}</span>
                  <span className="hidden text-[11px] leading-5 text-cloud/70 sm:block">
                    {detail}
                  </span>
                </span>
                <Check
                  size={14}
                  className={i <= active ? "text-soft-cyan" : "invisible"}
                />
              </button>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex items-center justify-between gap-3 border-t pt-2">
          <p className="text-[10px] leading-4 text-cloud/70">
            Flujo ilustrativo · Datos de ejemplo
          </p>
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            className="motion-control inline-flex min-h-11 items-center gap-2 text-xs"
            aria-label={
              paused ? "Reanudar demostración" : "Pausar demostración"
            }
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
            {paused ? "Reanudar" : "Pausar"}
          </button>
        </div>
      </div>
    </div>
  );
}
