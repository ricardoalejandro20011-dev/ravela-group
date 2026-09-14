import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
export function FounderSection() {
  return (
    <Section className="founder-editorial">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div className="founder-photo">
            <Image
              src="/founder/ricardo-valdez.jpg"
              alt="Ricardo Valdez, fundador y CEO de Ravela Group"
              width={400}
              height={400}
              sizes="(max-width: 640px) 300px, 400px"
            />
            <p className="founder-label">
              <span>RICARDO VALDEZ</span>
              <span>MÉXICO</span>
            </p>
          </div>
          <div>
            <p className="eyebrow">La persona detrás de Ravela</p>
            <h2 className="section-title mt-4">
              Tecnología con
              <br />
              criterio de negocio.
            </h2>
            <h3 className="mt-7 text-2xl font-medium tracking-tight">
              Ricardo Valdez
            </h3>
            <p className="mt-2 text-sm text-soft-cyan">
              Fundador y CEO de Ravela Group
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-cloud/75">
              Especialista en datos, automatización e Inteligencia Artificial
              aplicada a operaciones empresariales. Su experiencia conecta
              estrategia, ingeniería y ejecución para convertir problemas reales
              en soluciones implementables.
            </p>
            <div className="founder-skills">
              {[
                "Automatización",
                "IA empresarial",
                "Datos y Business Intelligence",
                "Supply Chain",
                "Machine Learning",
                "Arquitectura de soluciones",
                "Power Platform",
                "Microsoft Fabric",
              ].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <Link href="/nosotros#experiencia" className="text-link mt-5">
              Conocer la experiencia aplicada <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
