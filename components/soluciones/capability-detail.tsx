import Link from "next/link";
import { capabilities, type Capability } from "@/lib/data/capabilities";
import { portfolio } from "@/lib/data/portfolio";
import { Container, Section } from "@/components/ui/container";
import { SystemScene } from "@/components/visuals/system-scenes";
import { CtaFinal } from "@/components/sections/cta-final";
export function CapabilityDetail({
  capability,
  services,
  examples,
}: {
  capability: Capability;
  services?: string[];
  examples?: string[];
}) {
  const related =
    portfolio.find((p) => p.scene === capability.scene) || portfolio[4];
  return (
    <>
      <section className="page-intro">
        <Container>
          <Link href="/soluciones" className="text-link">
            ← Todas las soluciones
          </Link>
          <p className="eyebrow mt-6">{capability.group}</p>
          <h1 className="display-title mt-5 max-w-5xl">{capability.name}</h1>
          <p className="mt-6 max-w-3xl text-2xl leading-snug tracking-tight">
            {capability.benefit}
          </p>
          <p className="intro-copy mt-5">{capability.description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Link href="/contacto" className="primary-link">
              Hablar de mi proceso ↗
            </Link>
            <Link href="/diagnostico" className="text-link">
              Hacer diagnóstico ↗
            </Link>
          </div>
          <div className="portfolio-detail-visual">
            <SystemScene kind={capability.scene} interactive />
          </div>
        </Container>
      </section>
      <Section className="pt-0">
        <Container>
          <div className="detail-layout">
            <section>
              <h2>Dónde puede ayudar</h2>
              <ul className="space-y-3">
                {(services || capability.applications).map((s) => (
                  <li key={s}>— {s}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Empezamos por la operación</h2>
              {examples ? (
                <ul className="space-y-4">
                  {examples.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              ) : (
                <p>
                  Revisamos usuarios, información disponible, herramientas y
                  restricciones. Definimos un alcance por fases y criterios de
                  aceptación antes de implementar.
                </p>
              )}
              <p className="mt-5">
                La viabilidad y la tecnología se confirman durante el
                diagnóstico.
              </p>
            </section>
          </div>
          <div className="mt-12 rounded-2xl bg-[#e6ebe2] p-7">
            <span className="portfolio-kind">{related.kind}</span>
            <h2 className="mt-5 text-2xl font-medium tracking-tight">
              {related.title}
            </h2>
            <Link href={related.href} className="text-link mt-4">
              Explorar la ficha relacionada ↗
            </Link>
          </div>
          <div className="mt-10">
            <h2 className="text-xl">Otras capacidades que se conectan</h2>
            <div className="mt-4 flex flex-wrap gap-5">
              {capabilities
                .filter((c) => c.slug !== capability.slug)
                .slice(0, 4)
                .map((c) => (
                  <Link
                    className="text-link"
                    key={c.slug}
                    href={`/soluciones/${c.slug}`}
                  >
                    {c.name} ↗
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </Section>
      <CtaFinal />
    </>
  );
}
