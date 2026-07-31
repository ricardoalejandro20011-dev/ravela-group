import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

import { DiagnosticoWizard } from "@/components/diagnostico/wizard";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Ravela Intelligence™ — Diagnóstico gratuito | Ravela Group",
  description:
    "Descubre en minutos qué procesos de tu empresa puedes automatizar y cómo la Inteligencia Artificial puede ayudarte, con tu Ravela Opportunity Score™.",
};

export default function DiagnosticoPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Badge variant="cyan">
            <Sparkles className="h-3.5 w-3.5" />
            Ravela Intelligence™
          </Badge>
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
            Descubre tu Ravela Opportunity Score™
          </h1>
          <p className="mt-4 text-lg text-cloud/70">
            5 pasos rápidos para identificar qué procesos puedes automatizar, cuánto
            podrías ahorrar y cómo la IA puede ayudar a tu negocio.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <DiagnosticoWizard />
        </FadeIn>
      </Container>
    </Section>
  );
}
