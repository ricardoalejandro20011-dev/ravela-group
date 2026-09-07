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
    tagline: "Tú le dices a Miga qué gastaste. Miga organiza el resto.",
    description:
      "Una aplicación sencilla para registrar y entender gastos usando lenguaje natural e Inteligencia Artificial.",
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
    tagline: "La cobranza empieza antes del vencimiento.",
    description:
      "Una plataforma en desarrollo para ayudar a identificar pagos próximos, pendientes y familias que necesitan seguimiento antes de acumular morosidad.",
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
