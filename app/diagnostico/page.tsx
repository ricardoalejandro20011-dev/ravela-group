import { DiagnosticoWizard } from "@/components/diagnostico/wizard";
import { Container } from "@/components/ui/container";
export const metadata = {
  alternates: { canonical: "/diagnostico" },
  title: "Diagnóstico gratuito — Ravela Intelligence",
  description:
    "Identifica oportunidades de automatización, IA, integración y datos con el diagnóstico orientativo de Ravela Solutions.",
};
export default function Diagnostic() {
  return (
    <section className="page-intro">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Ravela Intelligence / Dentro de Solutions</p>
          <h1 className="display-title mt-5">
            Antes de construir,
            <br />
            entendamos el proceso.
          </h1>
          <p className="intro-copy mt-6">
            Un diagnóstico guiado para identificar tareas, herramientas y
            oportunidades. Tus datos de contacto se solicitan al final.
          </p>
          <div className="mt-7 flex flex-wrap gap-6 border-y py-5 text-xs text-cloud/70">
            <span>01 / Tu operación</span>
            <span>02 / Tus prioridades</span>
            <span>03 / Orientación inicial</span>
          </div>
          <div className="mt-9">
            <DiagnosticoWizard />
          </div>
          <p className="mt-6 text-xs leading-6 text-cloud/70">
            El resultado es orientativo. Profundizamos en tus respuestas durante
            una sesión para definir viabilidad, alcance y siguientes pasos.
          </p>
        </div>
      </Container>
    </section>
  );
}
