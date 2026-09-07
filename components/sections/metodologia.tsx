import { Container, Section } from "@/components/ui/container";
export function Metodologia() {
  return (
    <Section id="como-trabajamos">
      <Container>
        <p className="eyebrow">Cómo trabajamos</p>
        <h2 className="section-title mt-4 max-w-2xl">
          De problema a solución, sin proyectos eternos.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Diagnóstico",
              "Entendemos el proceso y medimos dónde existe oportunidad.",
            ],
            [
              "Diseño",
              "Definimos solución, alcance, integración y resultado esperado.",
            ],
            ["Implementación", "Construimos, probamos e integramos."],
            ["Optimización", "Medimos, documentamos y mejoramos."],
          ].map(([t, d], i) => (
            <div className="border-t pt-5" key={t}>
              <span className="text-xs text-soft-cyan">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-medium">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-cloud/75">{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
