import { Bot, PieChart } from "lucide-react";
import {
  SiGooglesheets,
  SiHubspot,
  SiN8N,
  SiNotion,
  SiWhatsapp,
  SiZapier,
} from "react-icons/si";

import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

/**
 * Logos reales vía simple-icons (uso libre, CC0) para las marcas que lo
 * permiten. OpenAI y Power BI no están disponibles como logo de marca en
 * esa librería (restricción de la propia marca), así que se muestran con
 * un ícono genérico + nombre en vez de reproducir su logotipo.
 */
const herramientas = [
  { name: "n8n", Icon: SiN8N },
  { name: "WhatsApp", Icon: SiWhatsapp },
  { name: "OpenAI", Icon: Bot },
  { name: "Power BI", Icon: PieChart },
  { name: "Zapier", Icon: SiZapier },
  { name: "Google Sheets", Icon: SiGooglesheets },
  { name: "HubSpot", Icon: SiHubspot },
  { name: "Notion", Icon: SiNotion },
];

export function TechStack() {
  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <FadeIn className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-cloud/50">
            Trabajamos con las herramientas que ya conoces
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {herramientas.map((tool) => (
            <span
              key={tool.name}
              className="flex items-center gap-2 rounded-full border border-cloud/10 bg-cloud/5 px-4 py-2 text-sm text-cloud/60 transition-colors hover:border-cloud/20 hover:text-cloud"
            >
              <tool.Icon className="h-4 w-4" />
              {tool.name}
            </span>
          ))}
        </FadeIn>
      </Container>
    </Section>
  );
}
