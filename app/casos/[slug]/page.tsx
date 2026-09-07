import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/container";
import { CasoCard } from "@/components/casos/caso-card";
import { CtaFinal } from "@/components/sections/cta-final";
import { caseStudies, caseDisplayName } from "@/lib/data/cases";
import { hasPublicAsset } from "@/lib/assets";
export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((c) => c.slug === slug);
  return c
    ? {
        title: `${caseDisplayName(c)} | Caso real de Ravela`,
        description: c.summary,
        alternates: { canonical: `/casos/${slug}` },
        openGraph: {
          title: `${caseDisplayName(c)} | Caso real`,
          description: c.summary,
          url: `/casos/${slug}`,
        },
      }
    : {};
}
export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudies.find((c) => c.slug === slug);
  if (!c) notFound();
  return (
    <>
      <Section>
        <Container>
          <Link href="/casos-de-exito" className="text-sm text-soft-cyan">
            ← Casos reales
          </Link>
          <h1 className="section-title mt-7">{caseDisplayName(c)}</h1>
          <div className="mt-10">
            <CasoCard caso={c} detail />
          </div>
          {c.workflow?.length ? (
            <section className="mt-12">
              <h2 className="text-2xl font-medium">Cómo funciona</h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.workflow.map((step, i) => (
                  <li className="rounded-lg border p-5 text-sm" key={step}>
                    <span className="mr-3 text-soft-cyan">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
          {c.technologies?.length ? (
            <section className="mt-10">
              <h2 className="text-xl font-medium">Tecnología utilizada</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {c.technologies.map((t) => (
                  <li className="rounded-full border px-4 py-2 text-sm" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {c.screenshots?.filter(hasPublicAsset).map((src, i) => (
            <div className="relative mt-8 aspect-video" key={src}>
              <Image
                src={src}
                alt={`Captura autorizada de la solución, vista ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
          ))}
        </Container>
      </Section>
      <CtaFinal />
    </>
  );
}
