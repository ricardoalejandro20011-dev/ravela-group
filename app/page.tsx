import { FAQ } from "@/components/sections/faq";
import { WorkflowDemo } from "@/components/demos/workflow-demo";
import { Container, Section } from "@/components/ui/container";
import { RealCase } from "@/components/sections/real-case";
import { FounderExperience } from "@/components/sections/founder-experience";
import { Insights } from "@/components/sections/insights";
import { CtaFinal } from "@/components/sections/cta-final";
import { Hero } from "@/components/sections/hero";
import { Metodologia } from "@/components/sections/metodologia";
import { Problemas } from "@/components/sections/problemas";
import { RavelaIntelligence } from "@/components/sections/ravela-intelligence";
import { RoiWidget } from "@/components/sections/roi-widget";
import { Soluciones } from "@/components/sections/soluciones";
import { TechStack } from "@/components/sections/tech-stack";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <Problemas />
      <Soluciones />
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Del mensaje al seguimiento</p>
              <h2 className="section-title mt-4">
                Así trabaja una automatización de Ravela.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-cloud/75">
                Cada paso tiene una función: entender la solicitud, consultar la
                información correcta y ejecutar una acción. Tu equipo interviene
                cuando hace falta criterio humano.
              </p>
            </div>
            <WorkflowDemo compact />
          </div>
        </Container>
      </Section>
      <RealCase />
      <FounderExperience />
      <TechStack />
      <RavelaIntelligence />
      <RoiWidget />
      <Metodologia />
      <Insights />
      <FAQ />
      <CtaFinal />
    </>
  );
}
