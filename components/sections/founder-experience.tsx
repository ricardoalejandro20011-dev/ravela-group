import { Container, Section } from "@/components/ui/container";
import { FounderSection } from "./founder-section";
import {
  AutomationPreview,
  AgentPreview,
  SimulationPreview,
  VisionPreview,
} from "@/components/demos/experience-visuals";
const experience = [
  {
    title: "Automatización de procesos empresariales",
    text: "Experiencia automatizando procesos administrativos y operativos mediante workflows, reglas e integración entre herramientas.",
    focus: "Del trabajo repetitivo a un proceso trazable.",
    tags: ["Automatización", "Integración", "Reglas de negocio"],
    visual: AutomationPreview,
  },
  {
    title: "Agentes empresariales de IA",
    text: "Experiencia desarrollando agentes capaces de consultar documentación empresarial mediante lenguaje natural y ejecutar procesos relacionados.",
    focus:
      "Conocimiento que se puede consultar. Respuestas que llevan a una acción.",
    tags: ["IA", "Conocimiento empresarial", "Supervisión humana"],
    visual: AgentPreview,
  },
  {
    title: "Simulación y Business Intelligence",
    text: "Experiencia desarrollando herramientas de análisis y simulación para apoyar decisiones operativas.",
    focus: "Explorar lo que puede pasar, antes de decidir qué hacer.",
    tags: ["Datos", "Simulación", "Business Intelligence"],
    visual: SimulationPreview,
  },
  {
    title: "Visión por computadora",
    text: "Experiencia trabajando en soluciones donde modelos de visión analizan imágenes dentro de procesos operativos.",
    focus: "Convertir una imagen en información útil para la operación.",
    tags: ["Visión artificial", "Operaciones", "Validación"],
    visual: VisionPreview,
  },
];
export function FounderExperience() {
  return (
    <>
      <Section>
        <Container>
          <p className="eyebrow">Experiencia aplicada del fundador</p>
          <h2 className="section-title mt-4 max-w-3xl">
            Experiencia empresarial detrás de Ravela.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
            Antes de Ravela, su fundador ha trabajado diseñando soluciones de
            datos, automatización e Inteligencia Artificial aplicadas a
            operaciones empresariales.
          </p>
          <p className="mt-3 max-w-2xl text-xs leading-6 text-cloud/70">
            Experiencia previa de Ricardo Valdez. No corresponde a clientes ni a
            proyectos contratados con Ravela Group.
          </p>
          <div className="mt-14 space-y-20 sm:space-y-28">
            {experience.map((e, i) => (
              <article
                key={e.title}
                className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16"
              >
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <e.visual />
                </div>
                <div className={i % 2 ? "lg:order-1" : ""}>
                  <p className="eyebrow">0{i + 1} / Experiencia aplicada</p>
                  <h3 className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                    {e.title}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-cloud/80">
                    {e.focus}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-cloud/75">
                    {e.text}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border px-3 py-2 text-[11px]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <FounderSection />
    </>
  );
}
