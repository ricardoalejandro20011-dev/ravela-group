import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { PortfolioShowcase } from "@/components/portfolio/portfolio-showcase";
import { RealCase } from "@/components/sections/real-case";
import { RoiWidget } from "@/components/sections/roi-widget";
import { CtaFinal } from "@/components/sections/cta-final";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioShowcase confirmedOnly />
      <TechStack />
      <RealCase />
      <RoiWidget />
      <CtaFinal />
    </>
  );
}
