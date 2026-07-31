import { CasosDeUso } from "@/components/sections/casos-de-uso";
import { CtaFinal } from "@/components/sections/cta-final";
import { Hero } from "@/components/sections/hero";
import { Metodologia } from "@/components/sections/metodologia";
import { Problemas } from "@/components/sections/problemas";
import { RavelaIntelligence } from "@/components/sections/ravela-intelligence";
import { RoiWidget } from "@/components/sections/roi-widget";
import { Soluciones } from "@/components/sections/soluciones";

export default function Home() {
  return (
    <>
      <Hero />
      <Problemas />
      <RavelaIntelligence />
      <Soluciones />
      <RoiWidget />
      <Metodologia />
      <CasosDeUso />
      <CtaFinal />
    </>
  );
}
