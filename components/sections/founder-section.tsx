import { Container, Section } from "@/components/ui/container";
export function FounderSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.6fr_1fr]">
          <div className="flex min-h-64 flex-col justify-between rounded-xl border bg-[#f2f4ef] p-8">
            <span className="eyebrow">Negocio + tecnología</span>
            <span
              aria-hidden="true"
              className="text-7xl font-light tracking-tighter text-soft-cyan"
            >
              RV<span className="text-cloud">.</span>
            </span>
            <p className="text-sm">
              Ricardo Valdez
              <br />
              <span className="text-cloud/70">Fundador de Ravela Group</span>
            </p>
          </div>
          <div className="self-center">
            <p className="eyebrow">Una consultoría cercana a tu operación</p>
            <h2 className="section-title mt-4">
              Entender el negocio.
              <br />
              Saber cómo construirlo.
            </h2>
            <p className="mt-5 text-sm leading-7 text-cloud/75">
              Ravela Group nace de experiencia diseñando soluciones de datos,
              Inteligencia Artificial y automatización para operaciones
              empresariales. Nuestro enfoque combina entendimiento de negocio
              con capacidad técnica para convertir problemas operativos en
              soluciones que realmente pueden implementarse.
            </p>
            <p className="mt-4 text-sm leading-7 text-cloud/75">
              Con experiencia en operaciones, supply chain, finanzas, datos,
              automatización, IA y tecnología empresarial, Ricardo Valdez
              conecta las necesidades del negocio con la implementación técnica.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
