import Link from "next/link";
import type { Metadata } from "next";

import { CtaFinal } from "@/components/sections/cta-final";
import { Soluciones } from "@/components/sections/soluciones";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  alternates: { canonical: "/soluciones" },
  title:
    "Soluciones — Automatización, IA, Datos y Transformación Digital | Ravela Group",
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
              Ravela Solutions
            </h1>
            <p className="mt-4 text-lg text-cloud/70">
              La unidad de servicios B2B de Ravela Group. Automatización, IA,
              datos e integración para PYMEs mexicanas mediante proyectos,
              implementaciones y servicios recurrentes.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Soluciones />
      <Section>
        <Container>
          <p className="eyebrow">Integración y diagnóstico</p>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-medium">
                Conectamos lo que ya utilizas.
              </h2>
              <p className="mt-4 text-sm leading-7 text-cloud/75">
                Integraciones, aplicaciones internas y una ruta de
                implementación para que tus herramientas compartan información.
              </p>
              <Link
                href="/soluciones/transformacion-digital"
                className="mt-5 inline-block py-2 text-sm font-medium text-soft-cyan"
              >
                Explorar integraciones y aplicaciones ↗
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Ravela Intelligence</h2>
              <p className="mt-4 text-sm leading-7 text-cloud/75">
                Nuestra herramienta de diagnóstico identifica oportunidades de
                automatización e IA dentro de Ravela Solutions.
              </p>
              <Link
                href="/diagnostico"
                className="mt-5 inline-block py-2 text-sm font-medium text-soft-cyan"
              >
                Hacer diagnóstico gratuito ↗
              </Link>
            </div>
          </div>
        </Container>
      </Section>
      <CtaFinal />
    </>
  );
}
