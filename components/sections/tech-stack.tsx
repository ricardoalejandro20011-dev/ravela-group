import { Container, Section } from "@/components/ui/container";
export function LogoStrip() {
  return (
    <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-4 text-sm font-medium text-cloud/70">
      {[
        "Microsoft",
        "Power Platform",
        "Power BI",
        "Fabric",
        "Azure",
        "OpenAI",
        "Claude",
        "n8n",
        "Zapier",
        "WhatsApp",
        "HubSpot",
        "Google Workspace",
        "APIs",
        "Bases de datos",
      ].map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
export function TechStack() {
  return (
    <Section className="border-y py-12 sm:py-14">
      <Container className="max-w-5xl text-center">
        <h2 className="text-lg font-medium tracking-tight">
          Trabajamos con tu tecnología, no te obligamos a empezar de cero.
        </h2>
        <LogoStrip />
      </Container>
    </Section>
  );
}
