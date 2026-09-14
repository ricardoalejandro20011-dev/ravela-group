import { Container } from "@/components/ui/container";
import { PortfolioShowcase } from "@/components/portfolio/portfolio-showcase";
import { CtaFinal } from "@/components/sections/cta-final";
export const metadata = {
  title: "Casos y experiencia aplicada | Ravela Group",
  description:
    "Biblioteca de proyectos Ravela, experiencia previa del fundador y conceptos demostrativos, claramente identificados y con datos protegidos.",
  alternates: { canonical: "/casos-de-exito" },
  openGraph: {
    title: "De la idea a la operación | Ravela",
    description: "Casos, experiencia aplicada y conceptos de solución.",
  },
};
export default function Cases() {
  return (
    <>
      <section className="page-intro">
        <Container>
          <p className="eyebrow">Biblioteca de casos y experiencia</p>
          <h1 className="display-title mt-5 max-w-4xl">
            De la idea
            <br />a la operación.
          </h1>
          <p className="intro-copy mt-6">
            Distintos problemas. Distintas formas de resolverlos. Explora
            proyectos, experiencia empresarial y representaciones de lo que
            podemos construir.
          </p>
        </Container>
      </section>
      <PortfolioShowcase library />
      <CtaFinal />
    </>
  );
}
