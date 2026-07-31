import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { casosDeUso } from "@/lib/mock/casos";

export function CasosDeUso() {
  return (
    <Section>
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
            Así se ve en la práctica
          </h2>
          <p className="mt-4 text-cloud/70">
            Ejemplos de cómo una PYME mexicana podría aplicar estas soluciones.
          </p>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {casosDeUso.map((caso, i) => (
            <FadeIn key={caso.slug} delay={i * 0.08}>
              <Card className="h-full">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="violet">{caso.industria}</Badge>
                  {caso.esIlustrativo && (
                    <Badge variant="neutral">Ejemplo ilustrativo</Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{caso.title}</CardTitle>
                <p className="mt-3 text-sm leading-relaxed text-cloud/65">
                  <span className="font-medium text-cloud/80">Problema: </span>
                  {caso.problema}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cloud/65">
                  <span className="font-medium text-cloud/80">Solución: </span>
                  {caso.solucion}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-soft-cyan/90">
                  {caso.resultado}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
