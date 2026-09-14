import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CapabilityReel } from "@/components/visuals/capability-reel";
export function Hero() {
  return (
    <section className="hero-universe">
      <Container>
        <div className="hero-copy">
          <p className="eyebrow">
            Consultoría en tecnología, datos e Inteligencia Artificial
          </p>
          <h1 className="display-title mt-6">
            Convertimos procesos complejos en{" "}
            <span className="text-soft-cyan">sistemas que funcionan.</span>
          </h1>
          <p className="intro-copy">
            Diseñamos e implementamos automatización, IA, datos y software para
            conectar operaciones, mejorar decisiones y crear nuevas capacidades
            en empresas mexicanas.
          </p>
          <div className="hero-actions">
            <Link href="/soluciones" className="primary-link">
              Descubrir qué podemos construir <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/contacto"
              data-event="hero_diagnostico_click"
              className="text-link"
            >
              Agenda un diagnóstico <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <CapabilityReel />
      </Container>
    </section>
  );
}
