import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { HeroProcess } from "@/components/demos/hero-process";
import { CONTACTO } from "@/lib/constants/contacto";
import Link from "next/link";
export function Hero() {
  return (
    <section className="border-b bg-[#f7f8f5] py-9 sm:py-14 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-soft-cyan" />
              Ravela Solutions · México
            </p>
            <h1 className="hero-title mt-5 max-w-2xl font-medium">
              Automatizamos el trabajo que hoy tu equipo hace{" "}
              <span className="text-soft-cyan">a mano.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-cloud/75">
              Conectamos WhatsApp, Excel y tus sistemas con automatización, IA y
              datos. Menos tareas repetitivas. Más tiempo para tu negocio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                data-event="hero_diagnostico_click"
                href="/contacto"
                className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-cloud px-5 py-3 text-sm font-medium text-white"
              >
                Agenda un diagnóstico gratuito <ArrowUpRight size={16} />
              </Link>
              <a
                data-event="hero_whatsapp_click"
                href={CONTACTO.whatsappUrl}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border px-4 py-3 text-sm"
              >
                <MessageCircle size={16} />
                Hablar por WhatsApp
              </a>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-6 text-cloud/70">
              Diagnóstico inicial sin costo · Implementación por fases ·
              Atención en México
            </p>
          </div>
          <HeroProcess />
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t pt-6 text-xs text-cloud/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            No empezamos vendiendo una herramienta.{" "}
            <strong className="font-medium text-cloud">
              Empezamos entendiendo el proceso.
            </strong>
          </p>
          <span className="text-[10px] tracking-widest">
            NEGOCIO + INGENIERÍA + IA
          </span>
        </div>
      </Container>
    </section>
  );
}
