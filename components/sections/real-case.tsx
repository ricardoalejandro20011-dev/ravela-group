import { Container, Section } from "@/components/ui/container";
import { CasoCard } from "@/components/casos/caso-card";
import { caseStudies } from "@/lib/data/cases";
export function RealCase() {
  return (
    <Section className="border-y bg-[#fafbf9]">
      <Container>
        <CasoCard caso={caseStudies[0]} />
      </Container>
    </Section>
  );
}
