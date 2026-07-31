import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

import { DataFlowVisual } from "./data-flow-visual";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-24 sm:pt-32">
      <DataFlowVisual className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[210px] w-full max-w-2xl opacity-70" />

      <Container className="relative">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-6xl">
            Tu empresa puede <span className="text-gradient-brand">hacer más</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cloud/70">
            Descubre qué procesos puedes automatizar, cuánto tiempo podrías recuperar
            y cómo la Inteligencia Artificial puede ayudar a tu negocio.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/diagnostico" size="lg">
              Analiza tu empresa
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contacto" variant="secondary" size="lg">
              Agenda una sesión
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
