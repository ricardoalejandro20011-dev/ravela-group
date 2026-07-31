import type { Metadata } from "next";

import { CtaFinal } from "@/components/sections/cta-final";
import { Soluciones } from "@/components/sections/soluciones";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Soluciones — Automatización, IA, Datos y Transformación Digital | Ravela Group",
  description:
    "Automatización de procesos, Inteligencia Artificial, datos e inteligencia de negocio, y transformación digital para PYMEs mexicanas.",
};

export default function SolucionesPage() {
  return (
    <>
      <Section className="pb-0 pt-24 sm:pt-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
              Soluciones
            </h1>
            <p className="mt-4 text-lg text-cloud/70">
              Identificamos oportunidades, diseñamos soluciones y usamos IA,
              automatización y datos para ayudarte a trabajar mejor.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Soluciones />
      <CtaFinal />
    </>
  );
}
