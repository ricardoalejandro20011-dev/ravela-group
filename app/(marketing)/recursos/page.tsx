import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Activity, FileText, Layers, SlidersHorizontal } from "lucide-react";
export const metadata = {
  alternates: { canonical: "/recursos" },
  title: "Recursos y herramientas | Ravela Group",
  description:
    "Diagnóstico, calculadora, perspectivas y biblioteca de casos para explorar oportunidades tecnológicas.",
};
const resources = [
  {
    href: "/diagnostico",
    title: "Ravela Intelligence",
    text: "Un diagnóstico guiado para entender tu operación y ordenar prioridades.",
    Icon: Activity,
  },
  {
    href: "/calculadora-roi",
    title: "Calculadora de procesos",
    text: "Explora el costo y las horas de un proceso manual con supuestos ajustables.",
    Icon: SlidersHorizontal,
  },
  {
    href: "/blog",
    title: "Perspectivas",
    text: "Ideas prácticas para conectar negocio y tecnología.",
    Icon: FileText,
  },
  {
    href: "/casos-de-exito",
    title: "Casos y experiencia",
    text: "Proyectos, experiencia del fundador y conceptos, con su clasificación visible.",
    Icon: Layers,
  },
];
export default function Resources() {
  return (
    <section className="page-intro">
      <Container>
        <p className="eyebrow">Herramientas para pensar el siguiente paso</p>
        <h1 className="display-title mt-5">
          Empieza con
          <br />
          más claridad.
        </h1>
        <div className="resource-grid mt-12">
          {resources.map(({ href, title, text, Icon }, i) => (
            <Link className="resource-card" href={href} key={href}>
              <div className="flex justify-between">
                <Icon size={25} />
                <span className="text-xs">0{i + 1}</span>
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
              <span className="text-link mt-4">Explorar ↗</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
