import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { CtaFinal } from "@/components/sections/cta-final";
import { ProblemExplorer } from "@/components/soluciones/problem-explorer";
import { CapabilityExplorer } from "@/components/sections/capability-explorer";
import { SystemScene } from "@/components/visuals/system-scenes";
import type { SceneKind } from "@/lib/data/capabilities";
const groups: {
  name: string;
  title: string;
  text: string;
  items: string[];
  scene: SceneKind;
  caseHref: string;
  caseLabel: string;
}[] = [
  {
    name: "Operación conectada",
    title: "Menos islas. Más operación.",
    text: "Integramos procesos y herramientas para que el trabajo avance con trazabilidad.",
    items: [
      "Automatización",
      "Integraciones y APIs",
      "Flujos de aprobación",
      "Documentos",
      "ERP y CRM",
      "Aplicaciones internas",
    ],
    scene: "workflow",
    caseHref: "/experiencia/automatizacion-empresarial",
    caseLabel: "Explorar experiencia en automatización",
  },
  {
    name: "Inteligencia Artificial",
    title: "IA que conoce el contexto.",
    text: "Asistentes y sistemas que interpretan información, apoyan decisiones y preparan acciones.",
    items: [
      "Agentes empresariales",
      "Asistentes documentales",
      "Atención y seguimiento",
      "IA generativa",
      "Visión por computadora",
      "Supervisión humana",
    ],
    scene: "agent",
    caseHref: "/experiencia/agente-documental",
    caseLabel: "Explorar experiencia en agentes",
  },
  {
    name: "Datos y decisiones",
    title: "Información que permite actuar.",
    text: "De las fuentes dispersas a indicadores, modelos y escenarios que ayudan a decidir.",
    items: [
      "Business Intelligence",
      "Dashboards",
      "Arquitectura de datos",
      "Forecasting",
      "Machine Learning",
      "Simulación y optimización",
    ],
    scene: "dashboard",
    caseHref: "/experiencia/planeacion-inventarios",
    caseLabel: "Explorar experiencia en simulación",
  },
  {
    name: "Productos y desarrollo",
    title: "La herramienta que tu proceso necesita.",
    text: "Diseñamos aplicaciones para usuarios reales y productos que resuelven problemas compartidos.",
    items: [
      "Aplicaciones web",
      "Herramientas internas",
      "MVP",
      "Productos digitales",
      "Ravela Labs",
      "Diseño de flujos",
    ],
    scene: "application",
    caseHref: "/casos/clinica-dental-privada",
    caseLabel: "Ver el caso de la clínica dental",
  },
];
export const metadata = {
  title: "Soluciones tecnológicas, IA, datos y software | Ravela Group",
  description:
    "Explora automatización, IA, Machine Learning, simulación, visión por computadora, cloud y aplicaciones empresariales.",
  alternates: { canonical: "/soluciones" },
};
export default function Solutions() {
  return (
    <>
      <section className="page-intro">
        <Container>
          <p className="eyebrow">Ravela Solutions</p>
          <h1 className="display-title mt-5 max-w-5xl">
            La tecnología correcta.
            <br />
            Para el problema correcto.
          </h1>
          <p className="intro-copy mt-7">
            Consultoría, estrategia e implementación. Conectamos capacidades de
            ingeniería para construir lo que tu operación necesita.
          </p>
        </Container>
      </section>
      <Section className="pt-0">
        <Container>
          <ProblemExplorer />
        </Container>
      </Section>
      {groups.map((g, i) => (
        <Section key={g.name} className={i % 2 ? "bg-[#edece5]" : ""}>
          <Container>
            <div className="solution-family">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="family-index">
                  0{i + 1} / {g.name.toUpperCase()}
                </p>
                <h2 className="section-title mt-5">{g.title}</h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-cloud/75">
                  {g.text}
                </p>
                <ul>
                  {g.items.map((s) => (
                    <li key={s}>— {s}</li>
                  ))}
                </ul>
                <Link href={g.caseHref} className="text-link mt-6">
                  {g.caseLabel} ↗
                </Link>
                {i === 3 && (
                  <Link href="/labs" className="text-link ml-5">
                    Descubrir Labs ↗
                  </Link>
                )}
              </div>
              <SystemScene kind={g.scene} />
            </div>
          </Container>
        </Section>
      ))}
      <CapabilityExplorer />
      <CtaFinal />
    </>
  );
}
