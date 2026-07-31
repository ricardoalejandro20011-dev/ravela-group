import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { pilares } from "@/lib/data/pilares";

export function Soluciones() {
  return (
    <Section>
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
            Cuatro pilares, un mismo objetivo
          </h2>
          <p className="mt-4 text-cloud/70">
            Identificamos oportunidades, diseñamos soluciones y usamos IA,
            automatización y datos para ayudarte a trabajar mejor.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar, i) => (
            <FadeIn key={pilar.slug} delay={i * 0.08}>
              <Link href={`/soluciones/${pilar.slug}`} className="block h-full">
                <Card className="group h-full">
                  <pilar.icon className="h-8 w-8 text-soft-cyan" />
                  <CardTitle className="mt-4">{pilar.title}</CardTitle>
                  <CardDescription>{pilar.description}</CardDescription>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {pilar.incluye.map((item) => (
                      <li key={item} className="text-xs text-cloud/50">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-soft-cyan opacity-0 transition-opacity group-hover:opacity-100">
                    Conocer más <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
