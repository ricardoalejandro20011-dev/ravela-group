import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

import { RoiWidget } from "@/components/sections/roi-widget";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Calculadora de ROI — Ravela Group",
  description:
    "Estima cuánto le cuestan a tu empresa los procesos manuales y cuánto podrías ahorrar automatizando, en pesos mexicanos.",
};

export default function CalculadoraRoiPage() {
  return (
    <>
      <Section className="pb-0 pt-24 sm:pt-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
              Calculadora de ROI
            </h1>
            <p className="mt-4 text-lg text-cloud/70">
              Ajusta los valores según tu operación y obtén una estimación de tu costo
              mensual, anual, y el ahorro potencial de automatizar.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <RoiWidget />

      <Section className="pt-0">
        <Container>
          <FadeIn className="glass mx-auto max-w-3xl rounded-3xl px-8 py-12 text-center">
            <h2 className="font-heading text-2xl font-semibold text-cloud">
              ¿Quieres un análisis más completo?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-cloud/65">
              Ravela Intelligence™ analiza tu operación completa y te da un Opportunity
              Score con recomendaciones priorizadas.
            </p>
            <Button href="/diagnostico" size="lg" className="mt-6">
              Hacer el diagnóstico completo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
