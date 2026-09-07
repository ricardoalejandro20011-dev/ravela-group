import { Check, ArrowDown, CalendarDays } from "lucide-react";
export function MigaPreview() {
  return (
    <div className="demo-panel">
      <div className="demo-top">
        <span className="text-lg font-medium tracking-tight">
          Miga<span className="text-soft-cyan">.</span>
        </span>
        <span>Concepto de producto / prototipo</span>
      </div>
      <div className="space-y-5 bg-[#f4f5f0] p-5 sm:p-7">
        {[
          {
            message: "Gasté $430 en el súper.",
            category: "Supermercado",
            value: "$430",
            detail: "Hoy",
          },
          {
            message: "Pagué $760 de gasolina con BBVA.",
            category: "Transporte · Gasolina",
            value: "$760",
            detail: "BBVA",
          },
        ].map((m, i) => (
          <div key={m.message}>
            <div className="ml-6 rounded-xl rounded-br-sm bg-[#e4eadf] p-4 text-sm leading-6">
              {m.message}
            </div>
            <div className="mt-3 mr-6 rounded-xl rounded-bl-sm border bg-white p-4">
              <p className="flex items-center gap-2 text-xs text-soft-cyan">
                <Check size={14} />
                {i ? "Registrado." : "Listo."}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-sm">{m.category}</span>
                <span className="text-xl font-medium">{m.value}</span>
              </div>
              <p className="mt-2 text-xs text-cloud/70">{m.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="border-t p-4 text-[11px] leading-5 text-cloud/70">
        Datos demostrativos · Esta visual ilustra el concepto; no es una captura
        de una aplicación publicada.
      </p>
    </div>
  );
}
export function SchoolPreview() {
  return (
    <div className="demo-panel">
      <div className="demo-top">
        <span className="font-medium">Panel de cobranza escolar</span>
        <span>Prototipo conceptual</span>
      </div>
      <div className="bg-[#f4f5f0] p-5 sm:p-7">
        <p className="eyebrow">Vista administrativa</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            ["Cobranza esperada", "$120,000"],
            ["Cobrado", "$85,000"],
            ["Pendiente por vencer", "$25,000"],
            ["Vencido", "$10,000"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border bg-white p-4">
              <p className="text-[11px] text-cloud/70">{label}</p>
              <p className="mt-2 text-xl font-medium">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border bg-white p-4">
          <p className="flex items-center gap-2 text-sm font-medium">
            <CalendarDays size={15} />
            Próximos vencimientos
          </p>
          <p className="mt-3 text-xs leading-6 text-cloud/75">
            Pagos por vencer → recordatorio preventivo
            <br />
            Pagos vencidos → seguimiento administrativo
          </p>
        </div>
        <div className="mt-4 rounded-lg border bg-white p-4">
          <p className="text-sm font-medium">Seguimientos</p>
          <p className="mt-2 text-xs leading-6 text-cloud/75">
            Recordatorios y avisos según la etapa de cada colegiatura.
          </p>
        </div>
      </div>
      <p className="border-t p-4 text-[11px] leading-5 text-cloud/70">
        Datos demostrativos en MXN · Diseño conceptual, no una plataforma
        disponible.
      </p>
    </div>
  );
}
export function SchoolWorkflow() {
  return (
    <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {[
        ["7 días antes", "Recordatorio"],
        ["3 días antes", "Recordatorio"],
        ["Vencimiento", "Aviso + acceso al pago"],
        ["Pago atrasado", "Seguimiento"],
        ["Administración", "Dashboard actualizado"],
      ].map(([step, action], i) => (
        <li key={step} className="rounded-lg border bg-white p-4">
          <p className="text-[10px] font-medium tracking-wide text-soft-cyan">
            0{i + 1} / {step}
          </p>
          <p className="mt-3 text-sm">{action}</p>
          {i < 4 && (
            <ArrowDown className="mt-4 h-3 w-3 text-soft-cyan lg:-rotate-90" />
          )}
        </li>
      ))}
    </ol>
  );
}
