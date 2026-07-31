import { ArrowRight, BookOpen, Calculator, Sparkles, Trophy } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Recursos — Ravela Group",
  description:
    "Artículos, herramientas y casos de éxito para ayudarte a empezar tu camino de automatización e Inteligencia Artificial.",
};

const recursos = [
  {
    href: "/diagnostico",
    icon: Sparkles,
    title: "Ravela Intelligence™",
    description: "Diagnóstico gratuito: descubre tu Ravela Opportunity Score™.",
  },
  {
    href: "/calculadora-roi",
    icon: Calculator,
    title: "Calculadora de ROI",
    description: "Estima cuánto te cuestan tus procesos manuales.",
  },
  {
    href: "/blog",
    icon: BookOpen,
    title: "Blog",
    description: "Artículos prácticos sobre automatización, IA y datos para PYMEs.",
  },
  {
    href: "/casos-de-exito",
    icon: Trophy,
    title: "Casos de éxito",
    description: "Ejemplos ilustrativos de cómo aplicar estas soluciones.",
  },
];

export default function RecursosPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
            Recursos
          </h1>
          <p className="mt-4 text-lg text-cloud/70">
            Herramientas y artículos para ayudarte a identificar por dónde empezar.
          </p>
        </FadeIn>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {recursos.map((recurso, i) => (
            <FadeIn key={recurso.href} delay={i * 0.08}>
              <Link href={recurso.href} className="group block h-full">
                <Card className="h-full">
                  <recurso.icon className="h-8 w-8 text-soft-cyan" />
                  <CardTitle className="mt-4">{recurso.title}</CardTitle>
                  <CardDescription>{recurso.description}</CardDescription>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-soft-cyan opacity-0 transition-opacity group-hover:opacity-100">
                    Ir <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
