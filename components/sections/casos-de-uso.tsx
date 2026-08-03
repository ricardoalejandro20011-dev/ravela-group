import Link from "next/link";

import { CasoCard } from "@/components/casos/caso-card";
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

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {casosDeUso.map((caso, i) => (
            <FadeIn key={caso.slug} delay={i * 0.08}>
              <CasoCard caso={caso} className="h-full" />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/casos-de-exito"
            className="text-sm font-medium text-soft-cyan hover:underline"
          >
            Ver todos los casos de éxito
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
