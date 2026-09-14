import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { labProducts } from "@/lib/data/products";
import {
  MigaProductVisual,
  SchoolProductVisual,
} from "@/components/visuals/product-visuals";
import { SchoolWorkflow } from "@/components/demos/lab-previews";
export const metadata = {
  title: "Ravela Labs — Productos nacidos de problemas reales",
  description:
    "El portafolio de productos propios de Ravela: Miga y Cobranza escolar inteligente. Conoce su propuesta y estado de desarrollo.",
  alternates: { canonical: "/labs" },
  openGraph: {
    title: "Ravela Labs / Productos propios",
    description: "Productos nacidos de problemas que vale la pena resolver.",
    url: "/labs",
  },
};
export default function Labs() {
  return (
    <>
      <section className="page-intro ink-section">
        <Container>
          <p className="eyebrow">Ravela Labs / Estudio de producto</p>
          <h1 className="display-title mt-5 max-w-5xl">
            Productos nacidos de problemas que vale la pena resolver.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#d6ddcf]">
            Herramientas propias, diseñadas para problemas compartidos.
            Exploramos, prototipamos y construimos con una idea clara de a quién
            queremos ayudar.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="text-link" href="#miga">
              01 / Miga ↓
            </a>
            <a className="text-link" href="#cobranza-escolar">
              02 / Cobranza escolar ↓
            </a>
          </div>
        </Container>
      </section>
      {labProducts.map((p, i) => (
        <section
          id={p.slug}
          key={p.slug}
          className={`product-detail ${i ? "school-product" : "miga-product"}`}
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs uppercase tracking-widest">
                  0{i + 1} / {p.category}
                </p>
                <h2 className="mt-5">{p.name}</h2>
                <span className="portfolio-kind mt-5">{p.status}</span>
                <h3 className="mt-7 max-w-xl">{p.tagline}</h3>
                <p className="mt-5 max-w-lg text-sm leading-7">
                  {p.description}
                </p>
                <dl className="mt-6 space-y-4 text-sm leading-6">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest">
                      Para quién
                    </dt>
                    <dd>
                      {i
                        ? "Administración de escuelas privadas."
                        : "Personas que quieren registrar y entender sus gastos."}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest">
                      Función principal prevista
                    </dt>
                    <dd>
                      {i
                        ? "Centralizar vencimientos, recordatorios y seguimiento de colegiaturas."
                        : "Registrar gastos mediante lenguaje natural y convertirlos en información útil."}
                    </dd>
                  </div>
                </dl>
                <details className="mt-7 border-t border-current pt-3">
                  <summary className="flex min-h-11 cursor-pointer items-center justify-between text-sm font-medium">
                    Explorar estado y capacidades <span>+</span>
                  </summary>
                  <ul className="mt-4 space-y-3">
                    {p.capabilities.map((c) => (
                      <li
                        key={c.label}
                        className="flex flex-wrap justify-between gap-3 border-b border-current/20 pb-3 text-xs leading-5"
                      >
                        <span>{c.label}</span>
                        <span>{c.status}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs leading-6">
                    {i
                      ? "El nombre comercial está por definir. Ravela no procesa pagos directamente; las integraciones con proveedores son capacidades previstas."
                      : "La aplicación está en desarrollo. Ninguna de estas capacidades se ofrece todavía como disponible."}
                  </p>
                </details>
                <Link href="/contacto" className="text-link mt-5">
                  Conversar sobre {i ? "el producto" : p.name} ↗
                </Link>
              </div>
              <div>
                {i ? <SchoolProductVisual /> : <MigaProductVisual />}
                <p className="mt-5 text-center text-[10px] leading-6">
                  Representación de producto · Datos demostrativos.
                  <br />
                  No es una captura de una aplicación publicada.
                </p>
              </div>
            </div>
            {i === 1 && (
              <div className="mt-14">
                <p className="text-xs uppercase tracking-widest">
                  El flujo que estamos diseñando
                </p>
                <SchoolWorkflow />
              </div>
            )}
          </Container>
        </section>
      ))}
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Dos caminos para construir</p>
              <h2 className="section-title mt-4 max-w-3xl">
                Labs crea productos propios.
                <br />
                Solutions construye contigo.
              </h2>
            </div>
            <Link href="/soluciones" className="primary-link">
              Explorar servicios personalizados ↗
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
