import { Container, Section } from "@/components/ui/container";
const items = [
  [
    "¿Qué tipo de procesos pueden automatizar?",
    "Captura de datos, reportes, seguimiento comercial, consultas, documentos y tareas repetitivas. Revisamos sus reglas y excepciones para identificar qué conviene automatizar.",
  ],
  [
    "¿Necesito cambiar los sistemas que ya utilizo?",
    "Buscamos conectar las herramientas actuales. Primero verificamos sus opciones de integración y explicamos las limitaciones antes de proponer cambios.",
  ],
  [
    "¿Trabajan con WhatsApp?",
    "Sí. Diseñamos atención, agendamiento y seguimiento con WhatsApp Business, según los permisos, políticas y capacidades de la plataforma.",
  ],
  [
    "¿La IA reemplaza a mi equipo?",
    "El enfoque es reducir tareas repetitivas y dar mejores herramientas al equipo. Las decisiones sensibles y las excepciones pueden mantenerse bajo supervisión humana.",
  ],
  [
    "¿Cuánto tarda una implementación?",
    "Depende del alcance, los sistemas y la disponibilidad de datos. Después del diagnóstico proponemos fases, entregables y tiempos para tu proceso.",
  ],
  [
    "¿Pueden trabajar con Excel, ERP o CRM que ya utilizamos?",
    "Sí, evaluamos conexiones mediante APIs, archivos y conectores disponibles. La viabilidad se confirma al revisar tu sistema.",
  ],
  [
    "¿Qué pasa con la información de mi empresa?",
    "Definimos accesos, permisos y tratamiento de datos antes de integrar herramientas. Evita enviar información sensible o documentos de clientes en el formulario inicial.",
  ],
  [
    "¿El diagnóstico tiene costo?",
    "El diagnóstico inicial es gratuito. Si existe una oportunidad, te presentamos el alcance y costo de la siguiente fase antes de comenzar.",
  ],
];
export function FAQ() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="section-title mt-4">
              Antes de dar
              <br />
              el siguiente paso.
            </h2>
          </div>
          <div>
            {items.map(([q, a]) => (
              <details key={q} className="group border-b py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-medium">
                  {q}
                  <span
                    className="text-xl text-soft-cyan group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-cloud/75">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
