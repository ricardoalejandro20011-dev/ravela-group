import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WorkflowDemo } from "@/components/demos/workflow-demo";
import { CONTACTO } from "@/lib/constants/contacto";
import Link from "next/link";
export function Hero() {
  return (
    <section className="border-b bg-[#f7f8f5] py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-soft-cyan" />
              Consultoría tecnológica · México
            </p>
            <h1 className="mt-7 max-w-2xl text-[2.65rem] leading-[1.08] font-medium tracking-[-.055em] sm:text-6xl xl:text-[4.4rem]">
              Automatizamos el trabajo que hoy tu equipo hace{" "}
              <span className="text-soft-cyan">a mano.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cloud/75">
              Diseñamos agentes de IA, automatizaciones y dashboards para PYMEs
              mexicanas. Conectamos WhatsApp, Excel, CRM y tus sistemas para
              ahorrar horas, responder más rápido y operar mejor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
          <WorkflowDemo />
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t pt-6 text-xs text-cloud/70 sm:flex-row sm:items-center sm:justify-between">
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
