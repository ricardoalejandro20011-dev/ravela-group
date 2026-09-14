import type { SceneKind } from "./capabilities";
export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  filters: string[];
  kind: "Caso Ravela" | "Experiencia aplicada" | "Concepto demostrativo";
  scene: SceneKind;
  context: string;
  problem: string;
  solution: string;
  result?: string;
  technologies?: string[];
  confidentiality: string;
  href: string;
};
const privateExperience =
  "Experiencia previa de Ricardo Valdez. Identidades y datos reservados; no es un contrato de Ravela Group.";
export const portfolio: PortfolioItem[] = [
  {
    slug: "clinica-dental-privada",
    title: "Un expediente. Una agenda. Un mismo flujo.",
    category: "Aplicaciones / Salud",
    filters: ["Aplicaciones"],
    kind: "Caso Ravela",
    scene: "application",
    context: "Solución implementada para una clínica dental privada.",
    problem:
      "Expedientes dispersos y agenda manual dificultaban consultar información y dar seguimiento, con riesgo de duplicidad.",
    solution:
      "Expediente digital y sistema de citas que relacionan al paciente, la agenda y los registros de atención.",
    result:
      "Digitalización y centralización del proceso de expedientes y gestión de citas. Sin métricas cuantitativas publicadas.",
    confidentiality:
      "Cliente con identidad reservada. Sin información personal ni médica real.",
    href: "/casos/clinica-dental-privada",
  },
  {
    slug: "automatizacion-empresarial",
    title: "Del trabajo repetitivo a un proceso trazable.",
    category: "Automatización / Operación",
    filters: ["Automatización"],
    kind: "Experiencia aplicada",
    scene: "workflow",
    context:
      "Experiencia del fundador en automatización de procesos administrativos y operativos.",
    problem:
      "Las tareas desconectadas requieren reglas e integración para que la información avance de manera ordenada.",
    solution:
      "Trabajo con workflows, reglas de negocio e integración entre herramientas. El canvas ilustra una solicitud y sus validaciones.",
    confidentiality: privateExperience,
    href: "/experiencia/automatizacion-empresarial",
  },
  {
    slug: "agente-documental",
    title: "La respuesta está en tus documentos.",
    category: "IA / Conocimiento",
    filters: ["IA"],
    kind: "Experiencia aplicada",
    scene: "agent",
    context:
      "Experiencia del fundador desarrollando agentes de conocimiento empresarial.",
    problem:
      "Consultar documentación y activar un proceso suelen requerir pasos separados.",
    solution:
      "Agentes que consultan documentación mediante lenguaje natural y ejecutan procesos relacionados. La interfaz muestra fuentes de ejemplo y una acción supervisada.",
    confidentiality: privateExperience,
    href: "/experiencia/agente-documental",
  },
  {
    slug: "planeacion-inventarios",
    title: "Decidir hoy, con escenarios de mañana.",
    category: "Simulación / Supply Chain",
    filters: ["Datos"],
    kind: "Experiencia aplicada",
    scene: "simulation",
    context:
      "Experiencia del fundador en herramientas de análisis y simulación para decisiones operativas.",
    problem:
      "Las decisiones necesitan considerar variables y posibilidades, no una única cifra.",
    solution:
      "Herramientas de análisis y simulación. La representación utiliza inventario, demanda y cobertura ficticios para explicar el enfoque.",
    confidentiality: privateExperience,
    href: "/experiencia/planeacion-inventarios",
  },
  {
    slug: "inteligencia-precios",
    title: "Un precio. Distintas decisiones posibles.",
    category: "Analítica / Escenarios",
    filters: ["Datos", "Machine Learning"],
    kind: "Concepto demostrativo",
    scene: "pricing",
    context:
      "Ejemplo conceptual de análisis de precios y demanda. No corresponde a un proyecto contratado ni a resultados reales.",
    problem:
      "El precio debe explorarse junto con costos, volumen y supuestos de demanda.",
    solution:
      "Un simulador ilustrativo compara precio, margen unitario y volumen bajo una relación hipotética. No emplea datos de competidores reales ni presenta una recomendación comercial validada.",
    confidentiality:
      "Solo datos sintéticos. No se atribuye a ningún cliente ni se afirma un modelo entrenado en producción.",
    href: "/experiencia/inteligencia-precios",
  },
  {
    slug: "vision-operativa",
    title: "De una imagen a una decisión operativa.",
    category: "Visión / Inspección",
    filters: ["Visión", "IA"],
    kind: "Experiencia aplicada",
    scene: "vision",
    context:
      "Experiencia del fundador trabajando con modelos de visión dentro de procesos operativos.",
    problem:
      "Algunas señales del proceso se encuentran en imágenes que necesitan interpretación.",
    solution:
      "Análisis visual aplicado a la operación. La representación de un almacén ilustra detecciones y un panel de revisión; no es una fotografía de una instalación real.",
    confidentiality: privateExperience,
    href: "/experiencia/vision-operativa",
  },
  {
    slug: "inteligencia-negocio",
    title: "La operación, vista con contexto.",
    category: "Datos / Business Intelligence",
    filters: ["Datos"],
    kind: "Experiencia aplicada",
    scene: "dashboard",
    context:
      "Experiencia del fundador en datos, Business Intelligence y herramientas de análisis.",
    problem:
      "La información necesita una estructura y una lectura común para apoyar decisiones operativas.",
    solution:
      "Análisis y visualización de indicadores para la operación. El dashboard es una representación con valores demostrativos y no una captura de un cliente.",
    confidentiality: privateExperience,
    href: "/experiencia/inteligencia-negocio",
  },
  {
    slug: "sistemas-conectados",
    title: "Cuando tus herramientas se entienden.",
    category: "Integración / Arquitectura",
    filters: ["Automatización", "Aplicaciones"],
    kind: "Concepto demostrativo",
    scene: "cloud",
    context:
      "Arquitectura ilustrativa para conectar formularios, correo, ERP y CRM.",
    problem:
      "Las islas de información generan capturas repetidas y dificultan seguir el proceso.",
    solution:
      "El diagrama propone entradas, validación, servicios y salidas conectadas. Su viabilidad depende de las APIs, permisos y sistemas de cada empresa.",
    confidentiality:
      "Concepto de solución con información ficticia. No representa una implementación confirmada.",
    href: "/experiencia/sistemas-conectados",
  },
];
export const portfolioFilters = [
  "Todos",
  "Automatización",
  "IA",
  "Datos",
  "Machine Learning",
  "Visión",
  "Aplicaciones",
];
