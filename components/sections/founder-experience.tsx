import { Container, Section } from "@/components/ui/container";
import { FounderSection } from "./founder-section";
const experience = [
  {
    title: "Automatización de procesos empresariales",
    text: "Experiencia automatizando procesos administrativos y operativos mediante workflows, reglas e integración entre herramientas.",
    flow: ["Proceso manual", "Automatización", "Validación", "Resultado"],
  },
  {
    title: "Agentes empresariales de IA",
    text: "Experiencia desarrollando agentes capaces de consultar documentación empresarial mediante lenguaje natural y ejecutar procesos relacionados.",
    flow: ["Documentos", "IA", "Respuesta", "Acción"],
  },
  {
    title: "Simulación y Business Intelligence",
    text: "Experiencia desarrollando herramientas de análisis y simulación para apoyar decisiones operativas.",
    flow: ["Datos", "Escenarios", "Dashboard", "Decisión"],
  },
  {
    title: "Visión por computadora",
    text: "Experiencia trabajando en soluciones donde modelos de visión analizan imágenes dentro de procesos operativos.",
    flow: ["Imagen", "Modelo", "Validación", "Alerta"],
  },
];
export function FounderExperience() {
  return (
    <>
      <FounderSection />
      <Section className="pt-0 sm:pt-0">
        <Container>
          <p className="eyebrow">Experiencia aplicada del fundador</p>
          <h2 className="section-title mt-4">
            Experiencia empresarial detrás de Ravela.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
            Antes de Ravela, su fundador ha trabajado diseñando soluciones de
            datos, automatización e Inteligencia Artificial aplicadas a
            operaciones empresariales.
          </p>
          <p className="mt-3 text-xs leading-6 text-cloud/70">
            Experiencia previa de Ricardo Valdez. No corresponde a clientes ni a
            proyectos contratados con Ravela Group.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {experience.map((e) => (
              <article key={e.title} className="rounded-xl border p-6 sm:p-8">
                <h3 className="text-xl font-medium tracking-tight">
                  {e.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-cloud/75">{e.text}</p>
                <div className="mt-6 rounded-lg bg-[#f2f5ef] p-4">
                  <p className="eyebrow text-[9px]">
                    Representación conceptual · Experiencia anonimizada
                  </p>
                  <ol className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    {e.flow.map((s, i) => (
                      <li className="flex items-center gap-2" key={s}>
                        {i > 0 && (
                          <span aria-hidden="true" className="text-soft-cyan">
                            →
                          </span>
                        )}
                        <span className="rounded-md border bg-white px-3 py-2">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
