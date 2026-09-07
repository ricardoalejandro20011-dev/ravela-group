import type { CaseStudy } from "@/lib/types";
export const caseStudies: CaseStudy[] = [
  {
    slug: "clinica-dental-privada",
    title: "Expedientes y citas en un solo flujo digital.",
    clientDisplayName: "Clínica dental privada",
    industry: "Clínica dental",
    real: true,
    authorizedName: false,
    summary:
      "Digitalización y centralización del proceso de expedientes y gestión de citas de una clínica dental privada.",
    problem:
      "La información y el seguimiento de pacientes se manejaban de forma manual o dispersa, dificultando consultar antecedentes y registros de atención. La agenda también requería administración manual, con riesgo de duplicidad y falta de seguimiento.",
    solution:
      "Se desarrolló un expediente digital para registrar y consultar datos del paciente, contacto, historial y registros de atención. El sistema de citas centraliza fecha, horario, consulta de agenda y seguimiento, vinculando cada cita con el expediente correspondiente.",
    workflow: [
      "Registro o consulta del paciente",
      "Acceso o creación del expediente digital",
      "Registro de información del paciente",
      "Programación de cita",
      "Almacenamiento de fecha y horario",
      "Consulta de agenda",
      "Atención del paciente",
      "Actualización del expediente",
      "Historial disponible para futuras consultas",
    ],
    results: [
      {
        label: "Expedientes y citas centralizados",
        value:
          "La solución permitió concentrar en un mismo flujo la información del paciente, su expediente y la administración de sus citas.",
        verified: true,
      },
    ],
    heroImage: "/cases/dental/hero.webp",
    heroImageAlt:
      "Visual autorizado del sistema de expedientes y citas de una clínica dental privada",
  },
];
export function caseDisplayName(caso: CaseStudy) {
  return caso.authorizedName
    ? caso.clientDisplayName
    : caso.industry === "Clínica dental"
      ? "Clínica dental privada"
      : `Proyecto de ${caso.industry.toLowerCase()}`;
}
export function verifiedResults(caso: CaseStudy) {
  return caso.results?.filter((r) => r.verified === true) ?? [];
}
