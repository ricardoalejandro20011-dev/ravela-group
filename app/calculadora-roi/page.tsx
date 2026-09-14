import { RoiWidget } from "@/components/sections/roi-widget";
import { Container } from "@/components/ui/container";
export const metadata = {
  alternates: { canonical: "/calculadora-roi" },
  title: "Calculadora de procesos manuales | Ravela Intelligence",
  description:
    "Estima el costo operativo mensual y las horas potencialmente recuperables de tus procesos manuales, con supuestos ajustables.",
};
export default function Calculator() {
  return (
    <>
      <section className="page-intro pb-8">
        <Container>
          <p className="eyebrow">Herramientas propias / Ravela Intelligence</p>
          <h1 className="display-title mt-5 max-w-4xl">
            Ponle contexto al tiempo de tu equipo.
          </h1>
          <p className="intro-copy mt-6">
            Ajusta personas, horas y costos para explorar el esfuerzo de un
            proceso manual. Una referencia para conversar, no una promesa de
            ahorro.
          </p>
        </Container>
      </section>
      <RoiWidget />
    </>
  );
}
