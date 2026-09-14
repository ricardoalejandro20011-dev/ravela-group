import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
export function GroupArchitecture() {
  return (
    <Section id="ecosistema">
      <Container>
        <p className="eyebrow">El ecosistema Ravela</p>
        <h2 className="section-title mt-4 max-w-4xl">
          Servicios que resuelven hoy.
          <br />
          Productos que construyen el futuro.
        </h2>
        <div className="ecosystem-root">
          <div>
            <strong>RAVELA GROUP</strong>
            <p>La marca, el criterio y la visión que conectan todo.</p>
          </div>
          <Link href="/nosotros" className="text-link">
            Conoce Ravela <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="ecosystem-branches">
          <div className="ecosystem-unit">
            <p className="eyebrow">01 / Servicios para empresas</p>
            <h3 className="mt-3">Ravela Solutions</h3>
            <p>
              Consultoría, estrategia e implementación de tecnología aplicada a
              tu operación.
            </p>
            <Link href="/soluciones" className="text-link mt-3">
              Explorar soluciones <ArrowUpRight size={15} />
            </Link>
            <div className="intelligence-child">
              <p className="text-[10px] uppercase tracking-widest">
                Dentro de Solutions
              </p>
              <h4 className="mt-2 text-lg font-medium">Ravela Intelligence</h4>
              <p className="mt-2">
                Diagnóstico y herramientas para identificar por dónde empezar.
              </p>
              <Link href="/diagnostico" className="text-link">
                Hacer diagnóstico <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
          <div className="ecosystem-unit labs-unit">
            <p className="eyebrow">02 / Productos propios</p>
            <h3 className="mt-3">Ravela Labs</h3>
            <p>
              Un espacio para convertir problemas compartidos en productos y
              herramientas digitales.
            </p>
            <Link href="/labs" className="text-link mt-3">
              Descubrir productos <ArrowUpRight size={15} />
            </Link>
            <div className="mt-8 flex gap-3">
              <span className="rounded-full border px-4 py-2 text-xs">
                Miga
              </span>
              <span className="rounded-full border px-4 py-2 text-xs">
                Cobranza escolar
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
