import { Layers, Target, Users } from "lucide-react";
import type { Metadata } from "next";

import { CtaFinal } from "@/components/sections/cta-final";
import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Nosotros — Ravela Group",
  description:
    "Conoce a Ravela Group: consultora tecnológica boutique enfocada en automatización, IA y datos para PYMEs mexicanas.",
};

const valores = [
  {
    icon: Target,
    title: "Enfoque práctico",
    description: "Empezamos por el problema de negocio, no por la tecnología de moda.",
  },
  {
    icon: Layers,
    title: "Acompañamiento completo",
    description: "Del diagnóstico a la implementación y la mejora continua (Ravela 4D™).",
  },
  {
    icon: Users,
    title: "Hecho para PYMEs",
    description: "Soluciones pensadas para negocios reales, no solo para grandes corporativos.",
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
              Ravela Group es una consultora tecnológica boutique enfocada en ayudar a
              PYMEs mexicanas a automatizar procesos, adoptar Inteligencia Artificial y
              tomar mejores decisiones con datos.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <Card className="grid gap-8 p-8 lg:grid-cols-[auto_1fr] lg:items-center lg:p-10">
              {/*
                Placeholder de foto: reemplazar con <img src="/team/ricardo-valdez.jpg" .../>
                una vez que la foto se guarde en public/team/ricardo-valdez.jpg
              */}
              <div className="gradient-brand mx-auto flex h-36 w-36 shrink-0 items-center justify-center rounded-full text-3xl font-semibold text-cloud sm:h-40 sm:w-40">
                RV
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-soft-cyan">
                  Fundador y CEO
                </span>
                <h2 className="mt-2 font-heading text-2xl font-semibold text-cloud">
                  Ricardo Valdez
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-cloud/70">
                  Ricardo fundó Ravela Group con la convicción de que la automatización y
                  la Inteligencia Artificial no deberían ser solo para las grandes
                  corporaciones. Tiene experiencia como consultor en distintas áreas de
                  negocio —operaciones, ventas, finanzas y tecnología— y un conocimiento
                  amplio de las plataformas y herramientas que las empresas usan día a día
                  para operar.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cloud/70">
                  Esa combinación de visión de negocio y dominio técnico es la base de
                  Ravela Group: entender primero el problema, y usar la tecnología
                  correcta después.
                </p>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

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
                  <p className="mt-2 text-sm leading-relaxed text-cloud/65">
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
