import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/container";
import { CasoCard } from "@/components/casos/caso-card";
import { CtaFinal } from "@/components/sections/cta-final";
import { caseStudies } from "@/lib/data/cases";
export const metadata: Metadata = {
  title: "Casos reales | Ravela Solutions — Ravela Group",
  description:
    "Trabajo realizado por Ravela. Proyectos reales, con identidad reservada y únicamente información confirmada.",
  alternates: { canonical: "/casos-de-exito" },
  openGraph: {
    title: "Casos reales de Ravela",
    description: "Trabajo realizado, sin resultados ni métricas inventadas.",
  },
};
export default function Cases() {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <p className="eyebrow">Ravela Solutions</p>
          <h1 className="section-title mt-4">
            Trabajo realizado.
            <br />
            Proyectos reales.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
            Compartimos únicamente proyectos confirmados. Respetamos la
            confidencialidad de cada cliente y publicamos resultados cuando
            están documentados.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="space-y-16">
          {caseStudies.map((c) => (
            <CasoCard caso={c} key={c.slug} />
          ))}
        </Container>
      </Section>
      <CtaFinal />
    </>
  );
}
