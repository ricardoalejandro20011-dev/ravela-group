import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { CapabilityExplorer } from "@/components/sections/capability-explorer";
import { PortfolioShowcase } from "@/components/portfolio/portfolio-showcase";
import { RealCase } from "@/components/sections/real-case";
import { GroupArchitecture } from "@/components/sections/group-architecture";
import { LabsPreview } from "@/components/sections/labs-preview";
import { FounderSection } from "@/components/sections/founder-section";
import { RoiWidget } from "@/components/sections/roi-widget";
import { CtaFinal } from "@/components/sections/cta-final";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <CapabilityExplorer />
      <PortfolioShowcase />
      <RealCase />
      <GroupArchitecture />
      <LabsPreview />
      <FounderSection />
      <RoiWidget />
      <CtaFinal />
    </>
  );
}
