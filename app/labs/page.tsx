import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/container";
import { CtaFinal } from "@/components/sections/cta-final";
import {
  MigaPreview,
  SchoolPreview,
  SchoolWorkflow,
} from "@/components/demos/lab-previews";
import { labProducts, type LabProduct } from "@/lib/data/products";
export const metadata: Metadata = {
  title: "Ravela Labs — Productos nacidos de problemas reales",
  description:
    "El estudio de producto de Ravela Group. Conoce Miga y nuestra plataforma de cobranza escolar, ambos en desarrollo.",
  alternates: { canonical: "/labs" },
  openGraph: {
    title: "Ravela Labs",
    description: "Construimos productos propios a partir de problemas reales.",
    url: "/labs",
  },
};
function Capabilities({ product }: { product: LabProduct }) {
  return (
    <ul className="mt-5 space-y-3">
      {product.capabilities.map((c) => (
        <li
          key={c.label}
          className="flex flex-wrap justify-between gap-2 border-b pb-3 text-sm"
        >
          <span>{c.label}</span>
          <span className="text-xs text-soft-cyan">{c.status}</span>
        </li>
      ))}
    </ul>
  );
}
export default function Labs() {
  const [miga, school] = labProducts;
  return (
    <>
      <Section className="border-b bg-[#f4f5ef]">
        <Container>
          <p className="eyebrow">Ravela Labs</p>
          <h1 className="section-title mt-5 max-w-3xl">
            Productos nacidos de problemas reales.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cloud/75">
            Ravela Labs es el estudio de producto de Ravela Group. Diseñamos
            herramientas digitales que simplifican tareas cotidianas de personas
            y empresas.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-cloud/75">
            Estamos comenzando. Construimos productos propios a partir de
            problemas reales y compartimos aquí lo que estamos desarrollando.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a className="rounded-lg border px-4 py-3" href="#miga">
              Miga ↓
            </a>
            <a className="rounded-lg border px-4 py-3" href="#cobranza-escolar">
              Cobranza escolar ↓
            </a>
          </div>
        </Container>
      </Section>
      <Section id="miga">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">01 / {miga.category}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <h2 className="text-4xl font-medium tracking-tight">Miga</h2>
                <span className="rounded-full border px-3 py-1.5 text-xs text-soft-cyan">
                  {miga.status}
                </span>
              </div>
              <p className="mt-2 text-xs text-cloud/70">
                A product by Ravela Group.
              </p>
              <h3 className="mt-7 text-3xl font-medium leading-tight tracking-tight">
                {miga.tagline}
              </h3>
              <p className="mt-5 text-sm leading-7 text-cloud/75">
                {miga.description}
              </p>
              <details className="mt-6 rounded-lg border p-5">
                <summary className="cursor-pointer text-sm font-medium text-soft-cyan">
                  Conocer Miga
                </summary>
                <p className="mt-5 text-sm leading-7 text-cloud/75">
                  El concepto busca que registrar un gasto sea tan sencillo como
                  escribirlo. Estas son las capacidades que estamos
                  desarrollando o explorando; ninguna se ofrece todavía como
                  disponible.
                </p>
                <Capabilities product={miga} />
              </details>
            </div>
            <MigaPreview />
          </div>
        </Container>
      </Section>
      <Section id="cobranza-escolar" className="border-y bg-[#f7f8f5]">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">02 / {school.category}</p>
              <h2 className="section-title mt-5">{school.name}</h2>
              <span className="mt-4 inline-block rounded-full border px-3 py-1.5 text-xs text-soft-cyan">
                Proyecto en desarrollo
              </span>
              <h3 className="mt-7 text-2xl font-medium tracking-tight">
                {school.tagline}
              </h3>
              <p className="mt-5 text-sm leading-7 text-cloud/75">
                {school.description}
              </p>
              <p className="mt-4 text-sm leading-7 text-cloud/75">
                El enfoque es la cobranza preventiva: seguimiento,
                automatización, recordatorios e información para la
                administración. El nombre comercial está por definir.
              </p>
              <details className="mt-6 rounded-lg border bg-white p-5">
                <summary className="cursor-pointer text-sm font-medium text-soft-cyan">
                  Explorar el alcance previsto
                </summary>
                <Capabilities product={school} />
              </details>
            </div>
            <SchoolPreview />
          </div>
          <div className="mt-12">
            <p className="eyebrow">
              Flujo demostrativo / Funcionalidad prevista
            </p>
            <SchoolWorkflow />
            <p className="mt-5 text-xs leading-6 text-cloud/70">
              Ravela no procesa pagos directamente. El acceso al pago es una
              capacidad prevista mediante integración posterior con proveedores
              de pago.
            </p>
          </div>
        </Container>
      </Section>
      <CtaFinal />
    </>
  );
}
