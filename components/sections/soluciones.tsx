import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Section } from "@/components/ui/container";
import {
  WhatsAppAgentDemo,
  DashboardPreview,
  ProcessBeforeAfter,
} from "@/components/demos/workflow-demo";
export function ServiceCard({
  number,
  title,
  description,
  tags,
  href,
  children,
}: {
  number: string;
  title: string;
  description: string;
  tags: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <article className="flex flex-col rounded-xl border bg-white p-6">
      <span className="eyebrow">{number}</span>
      <h3 className="mt-4 text-xl font-medium tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-cloud/75">{description}</p>
      <div className="my-6 flex flex-1 flex-col justify-center rounded-xl bg-[#f4f6f1] p-4">
        {children}
      </div>
      <p className="text-xs leading-6 text-cloud/70">{tags}</p>
      <Link
        className="mt-5 py-2 text-sm font-medium text-soft-cyan"
        href={href}
      >
        Explorar solución ↗
      </Link>
    </article>
  );
}
export function Soluciones() {
  return (
    <Section id="soluciones" className="border-y bg-[#f7f8f5]">
      <Container>
        <p className="eyebrow">Menos tareas. Más capacidad.</p>
        <h2 className="section-title mt-4 max-w-2xl">
          Soluciones para el trabajo
          <br className="hidden sm:block" /> que no debería quitarte tiempo.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <ServiceCard
            number="01 / VENTAS"
            title="WhatsApp, ventas y atención"
            description="Agentes que responden preguntas, califican prospectos, agendan, consultan información y dan seguimiento automáticamente."
            tags="WhatsApp Business · Agendamiento · Cotizaciones · CRM · FAQ inteligente"
            href="/soluciones/inteligencia-artificial"
          >
            <WhatsAppAgentDemo />
          </ServiceCard>
          <ServiceCard
            number="02 / OPERACIÓN"
            title="Operación y administración"
            description="Automatizamos tareas repetitivas entre Excel, correo, formularios, ERP, CRM y otras aplicaciones."
            tags="Capturas · Reportes · Aprobaciones · Documentos · Notificaciones · Sincronización"
            href="/soluciones/automatizacion"
          >
            <ProcessBeforeAfter />
          </ServiceCard>
          <ServiceCard
            number="03 / DECISIONES"
            title="Datos e inteligencia"
            description="Convertimos información dispersa en indicadores y herramientas para tomar decisiones."
            tags="Power BI · Dashboards · KPIs · Forecasting · Integraciones · Consolidación"
            href="/soluciones/datos-inteligencia"
          >
            <DashboardPreview />
          </ServiceCard>
        </div>
        <Link
          className="mt-8 inline-block py-2 text-sm font-medium"
          href="/soluciones"
        >
          Ver todas nuestras capacidades →
        </Link>
      </Container>
    </Section>
  );
}
