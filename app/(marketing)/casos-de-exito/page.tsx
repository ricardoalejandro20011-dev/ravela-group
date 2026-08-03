import type { Metadata } from "next";

import { CasoCard } from "@/components/casos/caso-card";
import { CtaFinal } from "@/components/sections/cta-final";
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
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {casosDeUso.map((caso, i) => (
              <FadeIn key={caso.slug} delay={i * 0.08}>
                <CasoCard caso={caso} className="h-full" />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CtaFinal />
    </>
  );
}
