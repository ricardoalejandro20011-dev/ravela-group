import { ArrowRight, Check } from "lucide-react";

import { CtaFinal } from "@/components/sections/cta-final";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Pilar } from "@/lib/data/pilares";

export function PilarDetail({ pilar }: { pilar: Pilar }) {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="gradient-brand mx-auto flex h-14 w-14 items-center justify-center rounded-2xl">
              <pilar.icon className="h-7 w-7 text-cloud" />
            </span>
            <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
              {pilar.title}
            </h1>
            <p className="mt-4 text-lg text-cloud/70">{pilar.heroDescription}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/diagnostico" size="lg">
                Analiza tu empresa
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contacto" variant="secondary" size="lg">
                Habla con Ravela Group
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <Card className="h-full">
                <h2 className="font-heading text-lg font-semibold text-cloud">
                  Qué incluye
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {pilar.servicios.map((servicio) => (
                    <li key={servicio} className="flex items-start gap-2.5 text-sm text-cloud/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-soft-cyan" />
                      {servicio}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="h-full">
                <h2 className="font-heading text-lg font-semibold text-cloud">
                  ¿Te suena familiar?
                </h2>
                <ul className="mt-4 flex flex-col gap-4">
                  {pilar.ejemplosPyme.map((ejemplo) => (
                    <li
                      key={ejemplo}
                      className="rounded-xl border border-cloud/10 bg-cloud/5 px-4 py-3 text-sm text-cloud/70"
                    >
                      {ejemplo}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <CtaFinal />
    </>
  );
}
