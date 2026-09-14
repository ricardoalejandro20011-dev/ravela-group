"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  SiClaude,
  SiN8N,
  SiWhatsapp,
  SiGoogle,
  SiHubspot,
} from "react-icons/si";
import { Pause, Play } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
const rows = [
  [
    { name: "Microsoft", src: "microsoft.png", wide: true },
    { name: "Azure", src: "azure.svg" },
    { name: "Microsoft Fabric", src: "fabric.svg" },
    { name: "Power BI", src: "power-bi.svg" },
    { name: "Power Platform", src: "power-platform.svg" },
    { name: "Power Automate", src: "power-automate.svg" },
  ],
  [
    { name: "OpenAI", src: "openai.svg" },
    { name: "Claude", Icon: SiClaude },
    { name: "n8n", Icon: SiN8N },
    { name: "WhatsApp", Icon: SiWhatsapp },
    { name: "Google Workspace", Icon: SiGoogle },
    { name: "HubSpot", Icon: SiHubspot },
  ],
];
function LogoLane({
  children,
  index,
  paused,
  onInteract,
}: {
  children: ReactNode;
  index: number;
  paused: boolean;
  onInteract: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const manual = useRef(false);
  useEffect(() => {
    const lane = root.current;
    const track = lane?.firstElementChild as HTMLElement | null;
    if (!lane || !track || paused || !manual.current) return;
    const width = track.scrollWidth / 2;
    const duration = index ? 75 : 65;
    track.style.animationDelay = `${(-(lane.scrollLeft % width) / width) * duration}s`;
    lane.scrollLeft = 0;
    track.style.transform = "";
    track.style.animationName = "";
    manual.current = false;
  }, [paused, index]);
  function enableSwipe() {
    const lane = root.current;
    const track = lane?.firstElementChild as HTMLElement | null;
    if (!lane || !track || manual.current) return;
    const transform = getComputedStyle(track).transform;
    const offset =
      transform === "none" ? 0 : -new DOMMatrixReadOnly(transform).m41;
    track.style.setProperty("animation-name", "none");
    track.style.setProperty("transform", "none");
    lane.scrollLeft = offset;
    manual.current = true;
    onInteract();
  }
  return (
    <div
      ref={root}
      className="logo-window"
      tabIndex={0}
      role="region"
      aria-label={`Plataformas, fila ${index + 1}. Desliza o usa las flechas para explorar`}
      onPointerDown={enableSwipe}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") enableSwipe();
      }}
    >
      <div className={`logo-track ${index ? "logo-slow" : ""}`}>{children}</div>
    </div>
  );
}
export function LogoStrip({
  paused = false,
  onInteract,
}: {
  paused?: boolean;
  onInteract: () => void;
}) {
  return (
    <div className={`logo-bands mt-9 space-y-3 ${paused ? "is-paused" : ""}`}>
      {rows.map((row, i) => (
        <LogoLane key={i} index={i} paused={paused} onInteract={onInteract}>
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className={`logo-group ${copy ? "logo-duplicate" : ""}`}
            >
              {row.map((t) => (
                <li key={t.name} className="logo-item">
                  {"src" in t ? (
                    <Image
                      src={`/technology/${t.src}`}
                      alt={t.name}
                      width={"wide" in t ? 130 : 30}
                      height={"wide" in t ? 28 : 30}
                      className={`technology-mark shrink-0 object-contain ${t.name === "OpenAI" ? "openai-mark" : ""}`}
                    />
                  ) : (
                    <t.Icon
                      role="img"
                      aria-label={t.name}
                      className="h-7 w-7 shrink-0"
                    />
                  )}
                  {!("wide" in t) && (
                    <span aria-hidden="true" className="text-sm font-medium">
                      {t.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </LogoLane>
      ))}
    </div>
  );
}
export function TechStack() {
  const [paused, setPaused] = useState(false);
  return (
    <Section className="technology-section overflow-hidden border-y">
      <Container>
        <p className="eyebrow">Tecnología / Ecosistema tecnológico</p>
        <h2 className="section-title mt-4 max-w-3xl">
          Trabajamos con las plataformas que tu empresa ya utiliza.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
          Conectamos tu operación sin obligarte a empezar desde cero.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-cloud/70">
            Tecnologías y plataformas con las que trabajamos
          </p>
          <button
            type="button"
            className="motion-control flex min-h-11 items-center gap-2 rounded-lg border bg-white px-4 text-xs"
            aria-pressed={paused}
            onClick={() => setPaused((v) => !v)}
          >
            {paused ? <Play size={13} /> : <Pause size={13} />}{" "}
            {paused ? "Reanudar movimiento" : "Pausar movimiento"}
          </button>
        </div>
        <LogoStrip paused={paused} onInteract={() => setPaused(true)} />
        <p className="mt-6 text-xs text-cloud/70">
          Desliza para explorar las plataformas →
        </p>
      </Container>
    </Section>
  );
}
