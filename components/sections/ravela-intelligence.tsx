import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
export function RavelaIntelligence() {
  return (
    <Section id="ravela-intelligence" className="border-y bg-[#f7f8f5]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Ravela Intelligence</p>
            <h2 className="section-title mt-4">
              Antes de automatizar, encontramos dónde realmente vale la pena
              hacerlo.
            </h2>
            <p className="mt-5 text-sm leading-7 text-cloud/75">
              Analizamos procesos manuales, horas invertidas, sistemas
              utilizados, oportunidades de IA, integraciones y datos.
              Identificamos el impacto potencial para decidir por dónde empezar.
            </p>
            <Button href="/diagnostico" className="mt-7">
              Hacer diagnóstico gratuito ↗
            </Button>
          </div>
          <div className="rounded-xl border bg-white p-7 sm:p-10">
            <p className="eyebrow">El punto de partida es tu operación</p>
            <h3 className="mt-5 text-2xl font-medium tracking-tight">
              Primero el problema.
              <br />
              Después, la tecnología.
            </h3>
            <ol className="mt-7 space-y-5 text-sm">
              {[
                "Cuéntanos qué hace hoy tu equipo a mano.",
                "Identificamos tareas, herramientas y prioridades.",
                "Recibe una orientación inicial para tu proceso.",
              ].map((t, i) => (
                <li key={t} className="flex gap-4 border-t pt-4">
                  <span className="text-soft-cyan">0{i + 1}</span>
                  {t}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs leading-5 text-cloud/70">
              Sin costo. Tus datos de contacto se solicitan al final. El
              resultado es orientativo y se valida en una sesión contigo.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
