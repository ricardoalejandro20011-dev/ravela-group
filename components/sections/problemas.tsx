import Link from "next/link";
import {
  Copy,
  MessageCircle,
  ChartNoAxesCombined,
  RefreshCw,
  Files,
  Keyboard,
} from "lucide-react";
import { Container, Section } from "@/components/ui/container";
export function Problemas() {
  return (
    <Section>
      <Container>
        <p className="eyebrow">¿Te suena familiar?</p>
        <h2 className="section-title mt-4 max-w-3xl">
          Tu empresa no necesita trabajar más. Necesita hacer menos trabajo
          manual.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-[#dedfdc] sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Copy, text: "Copiar información entre Excel y sistemas." },
            {
              icon: MessageCircle,
              text: "Contestar las mismas preguntas por WhatsApp.",
            },
            {
              icon: ChartNoAxesCombined,
              text: "Preparar reportes manualmente.",
            },
            { icon: RefreshCw, text: "Dar seguimiento uno por uno." },
            {
              icon: Files,
              text: "Buscar información entre correos y documentos.",
            },
            { icon: Keyboard, text: "Capturar los mismos datos varias veces." },
          ].map((p) => (
            <div key={p.text} className="flex gap-4 bg-white p-6">
              <p.icon size={20} className="shrink-0 text-soft-cyan" />
              <p className="text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <Link
          className="mt-7 inline-block py-2 text-sm font-medium text-soft-cyan"
          href="/diagnostico"
        >
          Quiero saber qué puedo automatizar →
        </Link>
      </Container>
    </Section>
  );
}
