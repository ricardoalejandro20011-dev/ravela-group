import { FAQ } from "@/components/sections/faq";
import { RealCase } from "@/components/sections/real-case";
import { FounderSection } from "@/components/sections/founder-section";
import { Insights } from "@/components/sections/insights";
import { CtaFinal } from "@/components/sections/cta-final";
import { Hero } from "@/components/sections/hero";
import { Metodologia } from "@/components/sections/metodologia";
import { Problemas } from "@/components/sections/problemas";
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
      <RealCase />
      <RoiWidget />
      <TechStack />
      <Metodologia />
      <FounderSection />
      <Insights />
      <FAQ />
      <CtaFinal />
    </>
  );
}
