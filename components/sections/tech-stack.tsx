import {
  AppWindow,
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  Layers,
  PieChart,
  Workflow,
} from "lucide-react";
import {
  SiAnthropic,
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
 * permiten, con su color oficial aplicado por CSS (los paths de
 * react-icons no traen color de marca embebido). OpenAI, Power BI, Power
 * Automate, Microsoft Fabric y Azure no están disponibles como logo en esa
 * librería (restricción de la propia marca): se muestran con un ícono
 * genérico + nombre, coloreado con un tono representativo o de nuestra
 * paleta.
 */
const herramientas = [
  { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
  { name: "WhatsApp", Icon: SiWhatsapp, color: "#25D366" },
  { name: "OpenAI", Icon: Bot, color: "#10A37F" },
  { name: "Claude", Icon: SiAnthropic, color: "#D97757" },
  { name: "Power BI", Icon: PieChart, color: "#F2C811" },
  { name: "Power Automate", Icon: Workflow, color: "#0066FF" },
  { name: "Zapier", Icon: SiZapier, color: "#FF4A00" },
  { name: "Google Sheets", Icon: SiGooglesheets, color: "#34A853" },
  { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
  { name: "Notion", Icon: SiNotion, color: "#F3F4FC" },
  { name: "Apps a la medida", Icon: AppWindow, color: "#4BB7BD" },
  { name: "Bots", Icon: Bot, color: "#573CBF" },
  { name: "Bases de datos", Icon: Database, color: "#BE90F9" },
  { name: "Microsoft Fabric", Icon: Layers, color: "#2AB3A6" },
  { name: "Azure", Icon: Cloud, color: "#0078D4" },
  { name: "LLMs", Icon: BrainCircuit, color: "#BF42CC" },
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

        <FadeIn
          delay={0.1}
          className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-4 md:grid-cols-8"
        >
          {herramientas.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-2.5 text-center"
            >
              <tool.Icon
                className="h-8 w-8 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                style={{ color: tool.color }}
              />
              <span className="text-xs text-cloud/45 transition-colors group-hover:text-cloud/80">
                {tool.name}
              </span>
            </div>
          ))}
        </FadeIn>
      </Container>
    </Section>
  );
}
