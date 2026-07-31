import { Compass, PenTool, Rocket, TrendingUp } from "lucide-react";

import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const pasos = [
  {
    icon: Compass,
    title: "Discover",
    description: "Entendemos tu negocio. Identificamos procesos y problemas.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Diseñamos la solución tecnológica adecuada para ti.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Implementamos la solución en tu operación.",
  },
  {
    icon: TrendingUp,
    title: "Develop",
    description: "Optimizamos y evolucionamos continuamente.",
  },
];

export function Metodologia() {
  return (
    <Section>
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold tracking-widest text-soft-cyan">
            RAVELA 4D™
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
            No solo vendemos tecnología, te acompañamos
          </h2>
          <p className="mt-4 text-cloud/70">
            Desde el problema hasta la implementación y la mejora continua.
          </p>
        </FadeIn>

        <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => (
            <FadeIn key={paso.title} delay={i * 0.1} className="relative">
              <div className="glass rounded-2xl p-6">
                <div className="gradient-brand flex h-11 w-11 items-center justify-center rounded-xl">
                  <paso.icon className="h-5 w-5 text-cloud" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-cloud">
                  {paso.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cloud/65">
                  {paso.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
