import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
export function Hero() {
  return (
    <section className="hero-universe home-intro">
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
            Somos una consultoría tecnológica para empresas mexicanas.
            Conectamos tus procesos, datos y herramientas con automatización,
            Inteligencia Artificial y software diseñado para tu operación.
          </p>
          <div className="hero-actions">
            <Link
              href="/contacto"
              data-event="hero_diagnostico_click"
              className="primary-link"
            >
              Agenda un diagnóstico gratuito <ArrowUpRight size={16} />
            </Link>
            <Link href="#experiencia" className="text-link">
              Ver lo que hemos hecho <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="home-intro-links">
          <Link href="/soluciones">Explorar soluciones ↗</Link>
          <Link href="/nosotros">Conoce Ravela ↗</Link>
        </div>
      </Container>
    </section>
  );
}
