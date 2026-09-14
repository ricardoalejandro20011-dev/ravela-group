import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { portfolio } from "@/lib/data/portfolio";
import { Container, Section } from "@/components/ui/container";
import { SystemScene } from "@/components/visuals/system-scenes";
import { CtaFinal } from "@/components/sections/cta-final";
export function generateStaticParams() {
  return portfolio
    .filter((p) => p.kind !== "Caso Ravela")
    .map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = portfolio.find((p) => p.slug === slug && p.kind !== "Caso Ravela");
  return p
    ? {
        title: `${p.title} | ${p.kind} — Ravela`,
        description: p.context,
        alternates: { canonical: p.href },
        openGraph: { title: p.title, description: p.context, url: p.href },
      }
    : {};
}
export default async function Experience({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = portfolio.find((p) => p.slug === slug && p.kind !== "Caso Ravela");
  if (!p) notFound();
  return (
    <>
      <section className="page-intro">
        <Container>
          <Link href="/casos-de-exito" className="text-link">
            ← Casos y experiencia
          </Link>
          <div className="mt-7">
            <span className="portfolio-kind">{p.kind}</span>
            <p className="eyebrow mt-5">{p.category}</p>
          </div>
          <h1 className="display-title mt-5 max-w-5xl">{p.title}</h1>
          <p className="intro-copy mt-6">{p.context}</p>
          <p className="mt-5 max-w-3xl text-xs leading-6 text-cloud/70">
            {p.confidentiality}
          </p>
          <div className="portfolio-detail-visual">
            <SystemScene kind={p.scene} interactive />
          </div>
        </Container>
      </section>
      <Section className="pt-0">
        <Container>
          <div className="detail-layout">
            <section>
              <h2>El contexto del problema</h2>
              <p>{p.problem}</p>
            </section>
            <section>
              <h2>
                {p.kind === "Concepto demostrativo"
                  ? "La propuesta ilustrativa"
                  : "El enfoque aplicado"}
              </h2>
              <p>{p.solution}</p>
            </section>
          </div>
          {p.technologies?.length && (
            <section className="mt-10">
              <h2 className="text-2xl">Tecnología confirmada</h2>
              <p className="mt-4 text-sm">{p.technologies.join(" · ")}</p>
            </section>
          )}
          {p.result && (
            <section className="mt-10">
              <h2 className="text-2xl">Resultado verificable</h2>
              <p className="mt-4 text-sm">{p.result}</p>
            </section>
          )}
          <p className="mt-10 max-w-3xl border-t pt-6 text-xs leading-6 text-cloud/70">
            No se publican métricas de resultados para esta ficha. Los números
            de las representaciones son ejemplos y no describen el desempeño de
            un cliente.
          </p>
        </Container>
      </Section>
      <CtaFinal />
    </>
  );
}
