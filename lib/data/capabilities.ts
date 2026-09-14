export type SceneKind =
  | "dashboard"
  | "agent"
  | "simulation"
  | "vision"
  | "application"
  | "workflow"
  | "pricing"
  | "cloud"
  | "learning";
export type Capability = {
  slug: string;
  name: string;
  benefit: string;
  applications: string[];
  scene: SceneKind;
  group: string;
  description: string;
};
export const capabilities: Capability[] = [
  {
    slug: "automatizacion",
    name: "Automatización",
    benefit: "Que el proceso avance sin repetir trabajo.",
    applications: ["Aprobaciones", "Documentos", "Flujos entre sistemas"],
    scene: "workflow",
    group: "Operación conectada",
    description:
      "Diseñamos flujos que coordinan tareas, validaciones y excepciones. Conectamos formularios, documentos y herramientas para que cada paso tenga una regla y un responsable.",
  },
  {
    slug: "inteligencia-artificial",
    name: "Agentes de IA",
    benefit: "Conocimiento que se convierte en acción.",
    applications: [
      "Asistentes documentales",
      "Atención y seguimiento",
      "IA generativa",
    ],
    scene: "agent",
    group: "Inteligencia Artificial",
    description:
      "Construimos asistentes que consultan información empresarial y ayudan a ejecutar procesos. Definimos fuentes, permisos y puntos de supervisión humana antes de ponerlos en operación.",
  },
  {
    slug: "datos-inteligencia",
    name: "Datos y BI",
    benefit: "Una lectura clara de tu operación.",
    applications: ["Dashboards", "Indicadores", "Plataformas de datos"],
    scene: "dashboard",
    group: "Datos y decisiones",
    description:
      "Integramos información dispersa en modelos de datos y tableros útiles. Definimos indicadores con el negocio y diseñamos vistas para detectar desvíos y decidir con contexto.",
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    benefit: "Anticipar con datos, validar con criterio.",
    applications: ["Forecasting", "Clasificación", "Detección de anomalías"],
    scene: "learning",
    group: "Datos y decisiones",
    description:
      "Evaluamos si tus datos pueden apoyar una predicción útil. Trabajamos con referencias comparables, validación y seguimiento del modelo; la viabilidad se confirma antes de prometer precisión.",
  },
  {
    slug: "simulacion-optimizacion",
    name: "Simulación y optimización",
    benefit: "Explorar posibilidades antes de decidir.",
    applications: ["Inventarios", "Demanda", "Escenarios operativos"],
    scene: "simulation",
    group: "Datos y decisiones",
    description:
      "Convertimos las variables de la operación en escenarios comparables. Ayudamos a explorar capacidad, inventario y demanda bajo supuestos claros, sin confundir una simulación con una garantía.",
  },
  {
    slug: "vision-computadora",
    name: "Visión por computadora",
    benefit: "Convertir imágenes en información operativa.",
    applications: ["Inspección visual", "Conteo", "Revisión de excepciones"],
    scene: "vision",
    group: "Inteligencia Artificial",
    description:
      "Diseñamos soluciones que analizan imágenes dentro de un proceso. Evaluamos captura, calidad de datos y condiciones de operación, con validación humana cuando el resultado lo necesita.",
  },
  {
    slug: "integracion-cloud",
    name: "Integración y cloud",
    benefit: "Sistemas distintos. Una operación conectada.",
    applications: [
      "APIs y conectores",
      "Arquitectura cloud",
      "Plataformas de datos",
    ],
    scene: "cloud",
    group: "Operación conectada",
    description:
      "Conectamos ERP, CRM y otras aplicaciones mediante interfaces y plataformas de datos. Diseñamos permisos, trazabilidad y una arquitectura que pueda evolucionar con la empresa.",
  },
  {
    slug: "aplicaciones-empresariales",
    name: "Aplicaciones empresariales",
    benefit: "Software que se adapta al trabajo real.",
    applications: [
      "Aplicaciones web",
      "Herramientas internas",
      "MVP y productos digitales",
    ],
    scene: "application",
    group: "Productos y desarrollo",
    description:
      "Diseñamos y construimos aplicaciones alrededor de tus usuarios y procesos. Del primer prototipo a una implementación por fases, priorizamos flujos claros, adopción e integración.",
  },
];
export const capabilityHref = (c: Capability) => `/soluciones/${c.slug}`;
