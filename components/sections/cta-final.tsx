import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { CONTACTO } from "@/lib/constants/contacto";
export function CtaFinal() {
  return (
    <Section className="final-cta">
      <Container>
        <div className="max-w-4xl">
          <p className="eyebrow">Construyamos el siguiente paso</p>
          <h2 className="section-title mt-5">
            Tu siguiente sistema puede comenzar con un proceso que hoy haces
            manualmente.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7">
            Cuéntanos cómo funciona tu operación. Identificaremos qué conviene
            automatizar, integrar o construir.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/contacto" className="primary-link">
              Agenda un diagnóstico <ArrowUpRight size={16} />
            </Link>
            <a href={CONTACTO.whatsappUrl} className="text-link">
              Hablar con Ravela <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
