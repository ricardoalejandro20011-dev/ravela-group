import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
export function GroupArchitecture() {
  return (
    <Section className="border-y bg-[#f7f8f5]">
      <Container>
        <p className="eyebrow">Más que consultoría</p>
        <h2 className="section-title mt-4 max-w-3xl">
          Ravela Group combina servicios tecnológicos con productos propios.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
          Trabajamos directamente con empresas para resolver procesos reales y
          utilizamos ese conocimiento para desarrollar nuevas herramientas desde
          Ravela Labs.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Ravela Solutions",
              tag: "Servicios",
              title: "Tecnología aplicada a problemas reales de negocio.",
              text: "Automatización, Inteligencia Artificial, datos e integración para empresas. Proyectos, implementaciones y servicios recurrentes.",
              href: "/soluciones",
              cta: "Conocer soluciones",
            },
            {
              name: "Ravela Labs",
              tag: "Productos",
              title:
                "Construimos herramientas que pueden escalar más allá de un proyecto.",
              text: "Software y productos digitales desarrollados por Ravela Group. Un estudio interno de producto que está comenzando.",
              href: "/labs",
              cta: "Explorar Ravela Labs",
            },
          ].map((u, i) => (
            <article
              key={u.name}
              className={`flex flex-col rounded-xl border p-7 sm:p-9 ${i ? "bg-[#eff1ec]" : "bg-white"}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-medium">{u.name}</h3>
                <span className="eyebrow">{u.tag}</span>
              </div>
              <h4 className="mt-8 text-2xl font-medium leading-snug tracking-tight">
                {u.title}
              </h4>
              <p className="mt-4 flex-1 text-sm leading-7 text-cloud/75">
                {u.text}
              </p>
              {u.href !== "/labs" ? (
                <Link
                  href={u.href}
                  className="mt-7 inline-block py-2 text-sm font-medium text-soft-cyan"
                >
                  {u.cta} ↗
                </Link>
              ) : (
                <p className="mt-7 py-2 text-sm text-cloud/70">
                  Estudio interno de producto de Ravela Group.
                </p>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
