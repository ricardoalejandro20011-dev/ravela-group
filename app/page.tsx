import { ArrowRight, Cpu, Database, Network, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const pilares = [
  {
    icon: Workflow,
    title: "Automatización",
    description: "Procesos, reportes y documentos que dejan de hacerse a mano.",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "Agentes y asistentes que apoyan la operación diaria.",
  },
  {
    icon: Database,
    title: "Datos e Inteligencia",
    description: "Dashboards y KPIs para decidir con información, no con intuición.",
  },
  {
    icon: Network,
    title: "Transformación Digital",
    description: "Sistemas conectados en lugar de islas de información.",
  },
];

export default function Home() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <Badge variant="violet">Fase 2 — Design System</Badge>
            <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-6xl">
              Tu empresa puede{" "}
              <span className="text-gradient-brand">hacer más</span>.
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

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilares.map((pilar, i) => (
              <FadeIn key={pilar.title} delay={i * 0.08}>
                <Card className="h-full">
                  <pilar.icon className="h-8 w-8 text-soft-cyan" />
                  <CardTitle className="mt-4">{pilar.title}</CardTitle>
                  <CardDescription>{pilar.description}</CardDescription>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
