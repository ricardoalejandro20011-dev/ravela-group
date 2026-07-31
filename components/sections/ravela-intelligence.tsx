import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ScoreMeter } from "@/components/ui/score-meter";

const ejemploScore = [
  { label: "Automation Opportunity", value: 82 },
  { label: "AI Opportunity", value: 65 },
  { label: "Data Opportunity", value: 74 },
  { label: "Integration Opportunity", value: 58 },
  { label: "Digital Maturity", value: 61 },
];

export function RavelaIntelligence() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <Badge variant="cyan">
              <Sparkles className="h-3.5 w-3.5" />
              Ravela Intelligence™
            </Badge>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
              Un diagnóstico, no una adivinanza.
            </h2>
            <p className="mt-4 text-cloud/70">
              Ravela Intelligence™ es nuestro sistema de diagnóstico inteligente.
              Responde algunas preguntas sobre tu operación y te ayudamos a identificar
              procesos manuales, oportunidades de automatización e IA, problemas de
              datos e integración, y el ahorro y tiempo que podrías recuperar.
            </p>
            <p className="mt-3 text-sm text-cloud/50">
              Los resultados son orientativos: te dan un punto de partida, no
              sustituyen una auditoría profesional.
            </p>
            <div className="mt-8">
              <Button href="/diagnostico">
                Descubre tu Opportunity Score
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card>
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-cloud">
                  Ravela Opportunity Score™
                </span>
                <Badge variant="neutral">Ejemplo ilustrativo</Badge>
              </div>
              <div className="mt-6 flex flex-col gap-5">
                {ejemploScore.map((item, i) => (
                  <ScoreMeter
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
