import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CONTACTO } from "@/lib/constants/contacto";
export function CtaFinal() {
  return (
    <Section className="border-t bg-[#edf2eb]">
      <Container className="max-w-4xl text-center">
        <p className="eyebrow">Empecemos por un proceso</p>
        <h2 className="section-title mt-5">
          Si un proceso se repite todas las semanas, probablemente podemos
          mejorarlo.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
          Cuéntanos qué hace hoy tu equipo manualmente. En una primera sesión
          identificamos si vale la pena automatizarlo y por dónde empezar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contacto">Agenda un diagnóstico gratuito ↗</Button>
          <Button href={CONTACTO.whatsappUrl} variant="secondary">
            Hablar por WhatsApp
          </Button>
        </div>
      </Container>
    </Section>
  );
}
