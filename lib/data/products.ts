export type LabProduct = {
  slug: string;
  name: string;
  status: "En desarrollo" | "Prototipo" | "Explorando";
  category: string;
  tagline: string;
  description: string;
  capabilities: {
    label: string;
    status: "Disponible" | "En desarrollo" | "Planeado";
  }[];
};
export const labProducts: LabProduct[] = [
  {
    slug: "miga",
    name: "Miga",
    status: "En desarrollo",
    category: "Finanzas personales · Inteligencia Artificial",
    tagline: "Registrar tus gastos debería ser tan fácil como contarlos.",
    description:
      "Una app para registrar y entender gastos mediante lenguaje natural.",
    capabilities: [
      { label: "Registro de gastos mediante texto", status: "En desarrollo" },
      { label: "Categorización automática", status: "Planeado" },
      { label: "Interpretación de tickets", status: "Planeado" },
      { label: "Métodos de pago y presupuestos", status: "Planeado" },
      { label: "Consultas mediante lenguaje natural", status: "Planeado" },
      { label: "Estadísticas, metas e insights de gasto", status: "Planeado" },
    ],
  },
  {
    slug: "cobranza-escolar",
    name: "Cobranza escolar inteligente",
    status: "En desarrollo",
    category: "Software para escuelas privadas",
    tagline: "La cobranza empieza antes de que exista morosidad.",
    description:
      "SaaS diseñado para ayudar a escuelas privadas a anticipar vencimientos, automatizar recordatorios y dar seguimiento a colegiaturas desde una sola vista.",
    capabilities: [
      {
        label: "Seguimiento de colegiaturas y agenda de vencimientos",
        status: "En desarrollo",
      },
      { label: "Recordatorios y seguimiento preventivo", status: "Planeado" },
      { label: "Dashboard de cobranza y reportes", status: "Planeado" },
      { label: "Integración con proveedores de pago", status: "Planeado" },
    ],
  },
];
