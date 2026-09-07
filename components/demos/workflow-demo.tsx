import {
  MessageCircle,
  Bot,
  Database,
  FileText,
  Check,
  ArrowUpRight,
} from "lucide-react";
export function WhatsAppAgentDemo() {
  return (
    <div className="space-y-3 text-xs">
      <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-[#e8efe7] p-3 leading-relaxed">
        Hola, ¿tienen disponible la pieza RX-240?
      </div>
      <div className="max-w-[90%] rounded-xl rounded-bl-sm border bg-white p-3 leading-relaxed">
        Voy a consultar el inventario y preparar tu cotización.
      </div>
      <p className="text-[10px] text-cloud/70">
        Conversación de demostración · Datos de ejemplo
      </p>
    </div>
  );
}
export function WorkflowDemo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="demo-panel">
      <div className="demo-top">
        <span className="font-semibold">RAVELA / AUTOMATIZACIONES</span>
        <span className="flex items-center gap-1.5 text-soft-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-soft-cyan" />
          Demo
        </span>
      </div>
      <div className="bg-[#f5f7f3] p-5 sm:p-7">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">
              De una pregunta a una oportunidad.
            </p>
            <p className="mt-1 text-[11px] text-cloud/70">
              Atención y seguimiento conectados
            </p>
          </div>
          <ArrowUpRight size={17} />
        </div>
        {!compact && (
          <div className="mb-5">
            <WhatsAppAgentDemo />
          </div>
        )}
        {[
          {
            icon: MessageCircle,
            title: "01 · Cliente envía un WhatsApp",
            sub: "Nueva consulta recibida",
          },
          {
            icon: Bot,
            title: "02 · Agente entiende la solicitud",
            sub: "Identifica la pieza y la intención",
          },
          {
            icon: Database,
            title: "03 · Consulta inventario y CRM",
            sub: "Información desde tus sistemas",
          },
          {
            icon: FileText,
            title: "04 · Genera una cotización",
            sub: "Ejecuta la acción definida",
          },
          {
            icon: MessageCircle,
            title: "05 · Responde al cliente",
            sub: "Con información del catálogo",
          },
          {
            icon: Check,
            title: "06 · Registra el prospecto",
            sub: "Seguimiento listo en el CRM",
          },
        ].map((s, i) => (
          <div key={s.title}>
            {i > 0 && <div className="demo-line" />}
            <div
              className="demo-step step-enter"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <s.icon />
              <div>
                <p className="font-medium">{s.title}</p>
                {!compact && (
                  <p className="mt-0.5 text-[10px] text-cloud/70">{s.sub}</p>
                )}
              </div>
              <Check className="ml-auto" />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t px-5 py-3 text-[10px] text-cloud/70">
        Flujo ilustrativo · Se configura según tu operación
      </div>
    </div>
  );
}
export function DashboardPreview() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="flex justify-between text-xs">
        <span className="font-medium">Vista de operación</span>
        <span className="text-cloud/70">Demo</span>
      </div>
      <div
        className="mt-5 flex h-24 items-end gap-3"
        role="img"
        aria-label="Gráfica ilustrativa de actividad semanal"
      >
        {[35, 55, 42, 72, 61, 87, 76].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-[#a3b9a8]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-cloud/70">
        <span>Lun</span>
        <span>Actividad por día · Datos de ejemplo</span>
        <span>Dom</span>
      </div>
    </div>
  );
}
export function ProcessBeforeAfter() {
  return (
    <div className="space-y-3 text-xs">
      <div className="rounded-lg border bg-white p-4">
        <span className="text-cloud/70">HOY</span>
        <p className="mt-2">Excel → Captura manual → Correo → Reporte</p>
      </div>
      <div className="rounded-lg border border-[#bcccbc] bg-[#edf2eb] p-4">
        <span className="text-soft-cyan">CON AUTOMATIZACIÓN</span>
        <p className="mt-2">Datos conectados → Validación → Reporte listo</p>
      </div>
    </div>
  );
}
