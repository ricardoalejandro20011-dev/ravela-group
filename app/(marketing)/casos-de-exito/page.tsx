import type { Metadata } from "next";

import { CtaFinal } from "@/components/sections/cta-final";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { casosDeUso } from "@/lib/mock/casos";

export const metadata: Metadata = {
  title: "Casos de éxito — Ravela Group",
  description:
    "Ejemplos ilustrativos de cómo una PYME mexicana podría aplicar automatización, IA y datos en su operación.",
};

export default function CasosDeExitoPage() {
  return (
    <>
      <Section className="pb-0 pt-24 sm:pt-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
              Casos de éxito
            </h1>
            <p className="mt-4 text-lg text-cloud/70">
              Ejemplos ilustrativos de cómo una PYME mexicana podría aplicar estas
              soluciones en su día a día.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {casosDeUso.map((caso, i) => (
              <FadeIn key={caso.slug} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="violet">{caso.industria}</Badge>
                    {caso.esIlustrativo && (
                      <Badge variant="neutral">Ejemplo ilustrativo</Badge>
                    )}
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-cloud/40">
                    {caso.cliente}
                  </p>
                  <CardTitle className="mt-1.5">{caso.title}</CardTitle>
                  <p className="mt-3 text-sm leading-relaxed text-cloud/65">
                    <span className="font-medium text-cloud/80">Problema: </span>
                    {caso.problema}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cloud/65">
                    <span className="font-medium text-cloud/80">Solución: </span>
                    {caso.solucion}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-soft-cyan/90">
                    {caso.resultado}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CtaFinal />
    </>
  );
}
