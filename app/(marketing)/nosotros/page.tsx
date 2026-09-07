import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/container";
import { FounderExperience } from "@/components/sections/founder-experience";
import { GroupArchitecture } from "@/components/sections/group-architecture";
import { CtaFinal } from "@/components/sections/cta-final";
export const metadata: Metadata = {
  title: "Nosotros — Ravela Group, Solutions y Labs",
  description:
    "Conoce a Ricardo Valdez y la arquitectura de Ravela Group: servicios tecnológicos desde Solutions y productos propios desde Labs.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Tecnología con criterio de negocio | Ravela Group",
    description:
      "Ravela Solutions, Ravela Labs y la experiencia de su fundador.",
  },
};
export default function Nosotros() {
  return (
    <>
      <Section>
        <Container>
          <p className="eyebrow">Ravela Group</p>
          <h1 className="section-title mt-5 max-w-3xl">
            Tecnología con criterio de negocio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cloud/75">
            Ravela Group nace para convertir problemas operativos en soluciones
            tecnológicas implementables. Somos una empresa en etapa inicial, con
            un enfoque práctico: entender lo que necesita el negocio y construir
            a partir de ahí.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
            Ravela Group es la empresa madre. Ravela Solutions reúne los
            servicios para empresas y Ravela Labs desarrolla productos propios.
            Ravela Intelligence es la herramienta de diagnóstico dentro de
            Solutions.
          </p>
        </Container>
      </Section>
      <GroupArchitecture />
      <FounderExperience />
      <Section className="border-t">
        <Container>
          <p className="eyebrow">Nuestros principios</p>
          <h2 className="section-title mt-4">
            Criterio antes que complejidad.
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Entender antes de construir.",
              "Integrar antes de reemplazar.",
              "Automatizar lo repetitivo.",
              "Mantener criterio humano donde importa.",
              "Medir el resultado.",
            ].map((p, i) => (
              <li key={p} className="border-t pt-5">
                <span className="text-xs text-soft-cyan">0{i + 1}</span>
                <p className="mt-4 text-lg font-medium">{p}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <CtaFinal />
    </>
  );
}
