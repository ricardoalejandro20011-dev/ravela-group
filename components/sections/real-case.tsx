import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { DentalComparison } from "@/components/demos/dental-comparison";
export function RealCase() {
  return (
    <Section id="caso-real">
      <Container>
        <div className="mb-9 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Caso real · Clínica dental privada</p>
            <h2 className="section-title mt-4 max-w-xl">
              Del expediente disperso a un flujo conectado.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-sm leading-7 text-cloud/75">
              Digitalizamos y centralizamos la información del paciente, su
              expediente y la administración de sus citas.
            </p>
            <Link
              href="/casos/clinica-dental-privada"
              className="mt-3 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-soft-cyan"
            >
              Ver el caso completo <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <DentalComparison />
      </Container>
    </Section>
  );
}
