import {
  Clock,
  Copy,
  FileSpreadsheet,
  MessageCircleMore,
  RefreshCcw,
  Shuffle,
} from "lucide-react";

import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const problemas = [
  { icon: FileSpreadsheet, label: "Reportes en Excel" },
  { icon: Copy, label: "Captura repetitiva" },
  { icon: MessageCircleMore, label: "Seguimiento por WhatsApp" },
  { icon: Shuffle, label: "Información dispersa" },
  { icon: RefreshCcw, label: "Procesos duplicados" },
  { icon: Clock, label: "Tareas que consumen horas" },
];

export function Problemas() {
  return (
    <Section>
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
            ¿Tu empresa todavía hace esto manualmente?
          </h2>
          <p className="mt-4 text-cloud/70">
            Si te identificas con alguno de estos puntos, hay oportunidad de mejora.
          </p>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((problema, i) => (
            <FadeIn key={problema.label} delay={i * 0.06}>
              <div className="glass flex items-center gap-3 rounded-xl px-5 py-4">
                <problema.icon className="h-5 w-5 shrink-0 text-electric-violet" />
                <span className="text-sm font-medium text-cloud/85">
                  {problema.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
