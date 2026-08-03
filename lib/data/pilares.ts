import { Bot, Cpu, Database, Network, PieChart, Workflow } from "lucide-react";
import {
  SiAnthropic,
  SiGooglesheets,
  SiHubspot,
  SiN8N,
  SiNotion,
  SiWhatsapp,
  SiZapier,
} from "react-icons/si";

export const pilares = [
  {
    slug: "automatizacion",
    icon: Workflow,
    title: "Automatización",
    description: "Procesos, reportes y documentos que dejan de hacerse a mano.",
    heroDescription:
      "Quitamos de tu operación las tareas repetitivas que consumen horas cada semana, para que tu equipo se enfoque en lo que sí requiere criterio humano.",
    incluye: ["Flujos de trabajo", "RPA", "Integración de aplicaciones"],
    herramientas: [
      { name: "n8n", Icon: SiN8N },
      { name: "Zapier", Icon: SiZapier },
      { name: "WhatsApp", Icon: SiWhatsapp },
    ],
    servicios: [
      "Automatización de procesos",
      "Automatización administrativa",
      "Automatización de reportes",
      "Automatización de documentos",
      "Flujos de trabajo",
      "RPA (automatización robótica de procesos)",
      "Integración de aplicaciones",
    ],
    ejemplosPyme: [
      "Negocios que reciben pedidos por WhatsApp y los capturan a mano en otro sistema.",
      "Empresas que arman reportes de ventas manualmente cada semana.",
      "Negocios que dependen de procesos administrativos repetitivos.",
    ],
  },
  {
    slug: "inteligencia-artificial",
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "Agentes y asistentes que apoyan la operación diaria.",
    heroDescription:
      "Incorporamos IA de forma práctica: asistentes que atienden, clasifican y resumen información, sin necesidad de que tu equipo se vuelva experto en tecnología.",
    incluye: ["Chatbots y copilotos", "IA generativa", "Procesamiento de documentos"],
    herramientas: [
      { name: "OpenAI", Icon: Bot },
      { name: "Anthropic", Icon: SiAnthropic },
      { name: "WhatsApp", Icon: SiWhatsapp },
    ],
    servicios: [
      "Agentes de IA",
      "Asistentes virtuales",
      "Chatbots",
      "IA generativa",
      "RAG (búsqueda inteligente sobre tu información)",
      "Automatización inteligente",
      "Procesamiento inteligente de documentos",
      "Copilotos empresariales",
    ],
    ejemplosPyme: [
      "Empresas que quieren usar IA pero no saben por dónde empezar.",
      "Negocios que reciben decenas de mensajes por WhatsApp al día.",
      "Equipos que pierden horas leyendo y clasificando documentos.",
    ],
  },
  {
    slug: "datos-inteligencia",
    icon: Database,
    title: "Datos e Inteligencia",
    description: "Dashboards y KPIs para decidir con información, no con intuición.",
    heroDescription:
      "Conectamos y ordenamos tu información dispersa en dashboards claros, para que las decisiones se tomen con datos y no solo con intuición.",
    incluye: ["Business Intelligence", "Dashboards", "Forecasting"],
    herramientas: [
      { name: "Power BI", Icon: PieChart },
      { name: "Google Sheets", Icon: SiGooglesheets },
      { name: "Notion", Icon: SiNotion },
    ],
    servicios: [
      "Business Intelligence",
      "Dashboards",
      "KPIs",
      "Power BI",
      "Data pipelines",
      "Analytics",
      "Forecasting",
    ],
    ejemplosPyme: [
      "Empresas que administran gran parte de su operación en Excel.",
      "Empresas con información dispersa entre distintas áreas.",
      "Negocios que no saben con certeza qué tan rentable es cada producto o cliente.",
    ],
  },
  {
    slug: "transformacion-digital",
    icon: Network,
    title: "Transformación Digital",
    description: "Sistemas conectados en lugar de islas de información.",
    heroDescription:
      "Diseñamos el roadmap tecnológico de tu empresa: qué digitalizar primero, cómo conectar tus sistemas y cómo preparar tu operación para crecer.",
    incluye: ["Integración de sistemas", "Cloud", "Roadmaps de IA"],
    herramientas: [
      { name: "HubSpot", Icon: SiHubspot },
      { name: "n8n", Icon: SiN8N },
      { name: "Google Sheets", Icon: SiGooglesheets },
    ],
    servicios: [
      "Digitalización de procesos",
      "Aplicaciones empresariales",
      "Integración de sistemas",
      "Cloud",
      "Estrategia tecnológica",
      "Roadmaps de IA",
    ],
    ejemplosPyme: [
      "Empresas que usan múltiples sistemas que no se comunican entre sí.",
      "Negocios que quieren crecer pero sus procesos actuales no lo permiten.",
      "Empresas con información dispersa en distintas herramientas.",
    ],
  },
];

export type Pilar = (typeof pilares)[number];
