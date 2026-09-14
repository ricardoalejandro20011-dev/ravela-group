import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/container";
import { CtaFinal } from "@/components/sections/cta-final";
import { RealCase } from "@/components/sections/real-case";
import { SystemScene } from "@/components/visuals/system-scenes";
import {
  caseStudies,
  caseDisplayName,
  verifiedResults,
} from "@/lib/data/cases";
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
          title: `${caseDisplayName(c)} | Caso Ravela`,
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
      <section className="page-intro">
        <Container>
          <Link href="/casos-de-exito" className="text-link">
            ← Casos y experiencia
          </Link>
          <p className="eyebrow mt-6">
            Caso Ravela / Aplicaciones empresariales
          </p>
          <h1 className="display-title mt-5 max-w-4xl">{caseDisplayName(c)}</h1>
          <p className="mt-6 max-w-3xl text-2xl tracking-tight">{c.title}</p>
          <p className="intro-copy mt-5">{c.summary}</p>
          <p className="mt-5 text-xs text-cloud/70">
            Identidad del cliente reservada. Sin datos personales ni médicos
            reales.
          </p>
          <div className="portfolio-detail-visual">
            <SystemScene kind="application" />
          </div>
        </Container>
      </section>
      <Section className="pt-0">
        <Container>
          <div className="detail-layout">
            <section>
              <h2>El problema</h2>
              <p>{c.problem}</p>
            </section>
            <section>
              <h2>La solución implementada</h2>
              <p>{c.solution}</p>
            </section>
          </div>
          <section className="mt-12 rounded-2xl bg-[#e2ebe4] p-8">
            <h2 className="text-2xl font-medium tracking-tight">
              Resultado confirmado
            </h2>
            {verifiedResults(c).map((r) => (
              <p key={r.label} className="mt-4 max-w-3xl text-base leading-8">
                {r.value}
              </p>
            ))}
            <p className="mt-5 text-xs text-cloud/70">
              No se publican porcentajes de ahorro, volumen de pacientes ni
              resultados económicos sin mediciones verificadas.
            </p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-medium">Un flujo completo</h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.workflow?.map((s, i) => (
                <li className="border-t py-4 text-sm leading-6" key={s}>
                  <span className="mr-3 text-xs text-soft-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </section>
          {c.technologies?.length && (
            <section className="mt-10">
              <h2 className="text-xl">Tecnologías confirmadas</h2>
              <p className="mt-4">{c.technologies.join(" · ")}</p>
            </section>
          )}
        </Container>
      </Section>
      <RealCase />
      <CtaFinal />
    </>
  );
}
