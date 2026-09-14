"use client";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  MessageCircle,
  ChartNoAxesCombined,
  RefreshCw,
  Files,
  Keyboard,
} from "lucide-react";
import { Container } from "@/components/ui/container";
const problems = [
  { Icon: Copy, text: "Copiamos información entre varios archivos" },
  {
    Icon: MessageCircle,
    text: "Los clientes esperan demasiado por una respuesta",
  },
  { Icon: ChartNoAxesCombined, text: "El reporte depende de una sola persona" },
  { Icon: RefreshCw, text: "El seguimiento se hace manualmente" },
  { Icon: Files, text: "La información está repartida entre correos" },
  { Icon: Keyboard, text: "Capturamos los mismos datos más de una vez" },
];
export function Problemas() {
  const lane = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState(0);
  function move(direction: number) {
    const el = lane.current;
    if (el)
      el.scrollBy({
        left: direction * (el.children[0].getBoundingClientRect().width + 16),
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  }
  return (
    <section
      className="border-b py-10 sm:py-14"
      aria-labelledby="problemas-title"
    >
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">¿Te suena familiar?</p>
            <h2
              id="problemas-title"
              className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl"
            >
              El trabajo invisible que consume tu día.
            </h2>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              aria-label="Problema anterior"
              disabled={position === 0}
              onClick={() => move(-1)}
              className="carousel-arrow"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              aria-label="Siguiente problema"
              disabled={position === 100}
              onClick={() => move(1)}
              className="carousel-arrow"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <ul
          ref={lane}
          tabIndex={0}
          aria-label="Situaciones cotidianas. Desliza para explorar"
          className="problem-lane mt-7"
          onScroll={(e) => {
            const el = e.currentTarget;
            const max = el.scrollWidth - el.clientWidth;
            setPosition(max ? Math.round((el.scrollLeft / max) * 100) : 100);
          }}
        >
          {problems.map(({ Icon, text }, i) => (
            <li key={text} className="problem-tile">
              <div className="flex items-center justify-between text-soft-cyan">
                <Icon size={21} />
                <span className="text-[10px]">0{i + 1} / 06</span>
              </div>
              <p className="mt-5 text-base leading-6">“{text}”.</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 flex items-center gap-2 text-xs text-cloud/70">
          Desliza para explorar <ArrowRight size={13} />
        </p>
      </Container>
    </section>
  );
}
