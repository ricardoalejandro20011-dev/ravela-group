"use client";
import Image from "next/image";
import { useState } from "react";
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
export function LogoStrip({ paused = false }: { paused?: boolean }) {
  return (
    <div className={`logo-bands mt-9 space-y-4 ${paused ? "is-paused" : ""}`}>
      {rows.map((row, i) => (
        <div className="logo-window" key={i}>
          <div className={`logo-track ${i ? "logo-reverse" : ""}`}>
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className={`logo-group ${copy ? "logo-duplicate" : ""}`}
              >
                {row.map((t) => (
                  <li
                    key={t.name}
                    className="flex h-20 w-48 shrink-0 items-center justify-center gap-3 rounded-lg border bg-white px-4"
                  >
                    {"src" in t ? (
                      <Image
                        src={`/technology/${t.src}`}
                        alt={"wide" in t ? t.name : ""}
                        width={"wide" in t ? 108 : 30}
                        height={"wide" in t ? 23 : 30}
                        className={`shrink-0 object-contain ${t.name === "OpenAI" ? "rounded-full bg-cloud p-1" : ""}`}
                      />
                    ) : (
                      <t.Icon aria-hidden="true" className="h-7 w-7 shrink-0" />
                    )}
                    {!("wide" in t) && (
                      <span className="text-sm font-medium">{t.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export function TechStack() {
  const [paused, setPaused] = useState(false);
  return (
    <Section className="overflow-hidden border-y bg-[#f7f8f5]">
      <Container>
        <p className="eyebrow">Tecnología / Ecosistema tecnológico</p>
        <h2 className="section-title mt-4 max-w-3xl">
          Trabajamos con las plataformas que tu empresa ya utiliza.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
          No vendemos una herramienta específica. Diseñamos la solución y
          elegimos la tecnología adecuada para implementarla.
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
        <LogoStrip paused={paused} />
        <p className="mt-6 text-xs text-cloud/70">
          Trabajamos con tu tecnología, no te obligamos a empezar de cero.
        </p>
      </Container>
    </Section>
  );
}
