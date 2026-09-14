import { Container, Section } from "@/components/ui/container";
import { GroupArchitecture } from "@/components/sections/group-architecture";
import { FounderSection } from "@/components/sections/founder-section";
import { PortfolioShowcase } from "@/components/portfolio/portfolio-showcase";
import { Metodologia } from "@/components/sections/metodologia";
import { CtaFinal } from "@/components/sections/cta-final";
export const metadata = {
  title: "Nosotros — Criterio, ingeniería y ejecución | Ravela Group",
  description:
    "Ravela es una consultoría tecnológica boutique. Conoce su propósito, ecosistema y a Ricardo Valdez, fundador y CEO.",
  alternates: { canonical: "/nosotros" },
};
export default function About() {
  return (
    <>
      <section className="page-intro">
        <Container>
          <p className="eyebrow">Ravela Group / Nuestra forma de pensar</p>
          <h1 className="display-title mt-5 max-w-5xl">
            La tecnología tiene sentido cuando hace que algo funcione mejor.
          </h1>
          <p className="intro-copy mt-7">
            Ravela es una consultoría tecnológica boutique que combina
            experiencia empresarial, ejecución técnica y desarrollo de productos
            propios.
          </p>
        </Container>
      </section>
      <Section className="ink-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              [
                "Entender",
                "El proceso real, las personas que lo operan y las decisiones que importan.",
              ],
              [
                "Conectar",
                "Negocio, información y herramientas. Cada solución forma parte de una operación.",
              ],
              [
                "Construir",
                "Sistemas implementables, con alcance claro, documentación y criterio humano.",
              ],
            ].map(([t, d], i) => (
              <div key={t} className="border-t border-[#708477] pt-6">
                <p className="text-xs text-[#bdd0bd]">0{i + 1}</p>
                <h2 className="mt-5 text-3xl font-medium tracking-tight">
                  {t}.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#d0d9cd]">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <GroupArchitecture />
      <FounderSection />
      <PortfolioShowcase experienceOnly />
      <Metodologia />
      <Section>
        <Container>
          <p className="eyebrow">Principios de trabajo</p>
          <h2 className="section-title mt-4 max-w-3xl">
            Criterio antes que complejidad.
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {[
              "Entender antes de construir.",
              "Integrar antes de reemplazar.",
              "Medir antes de afirmar resultados.",
            ].map((p, i) => (
              <p key={p} className="border-t pt-5 text-lg">
                <span className="mr-3 text-xs text-soft-cyan">0{i + 1}</span>
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>
      <CtaFinal />
    </>
  );
}
