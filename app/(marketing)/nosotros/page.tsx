import { FounderSection } from "@/components/sections/founder-section";
import { Layers, Target, Users } from "lucide-react";
import type { Metadata } from "next";

import { CtaFinal } from "@/components/sections/cta-final";
import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  alternates: { canonical: "/nosotros" },
  title: "Nosotros — Ravela Group",
  description:
    "Conoce a Ravela Group: consultora tecnológica boutique enfocada en automatización, IA y datos para PYMEs mexicanas.",
};

const valores = [
  {
    icon: Target,
    title: "Enfoque práctico",
    description:
      "Empezamos por el problema de negocio, no por la tecnología de moda.",
  },
  {
    icon: Layers,
    title: "Acompañamiento completo",
    description:
      "Del diagnóstico a la implementación y la mejora continua (nuestro método).",
  },
  {
    icon: Users,
    title: "Hecho para PYMEs",
    description:
      "Soluciones pensadas para negocios reales, no solo para grandes corporativos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Section className="pb-0 pt-24 sm:pt-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
              Nosotros
            </h1>
            <p className="mt-4 text-lg text-cloud/70">
              Ravela Group es una consultora tecnológica boutique enfocada en
              ayudar a PYMEs mexicanas a automatizar procesos, adoptar
              Inteligencia Artificial y tomar mejores decisiones con datos.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <FounderSection />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {valores.map((valor, i) => (
              <FadeIn key={valor.title} delay={i * 0.08}>
                <Card className="h-full">
                  <valor.icon className="h-7 w-7 text-soft-cyan" />
                  <h3 className="mt-4 font-heading text-base font-semibold text-cloud">
                    {valor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud/70">
                    {valor.description}
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
