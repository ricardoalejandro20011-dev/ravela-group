import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function CtaFinal() {
  return (
    <Section>
      <Container>
        <FadeIn className="glass mx-auto max-w-4xl rounded-3xl px-8 py-16 text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
            ¿Qué podrías automatizar en tu empresa?
          </h2>
          <p className="mt-4 text-lg text-cloud/70">
            Descúbrelo con Ravela Intelligence™.
          </p>
          <div className="mt-8">
            <Button href="/diagnostico" size="lg">
              Analiza tu empresa
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
