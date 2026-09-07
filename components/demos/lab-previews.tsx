import {
  Check,
  ArrowDown,
  CalendarDays,
  ArrowUpRight,
  Wallet,
  ShoppingBag,
} from "lucide-react";
export function MigaPreview() {
  return (
    <div className="rounded-2xl border bg-[#e9ece4] p-5 sm:p-8">
      <div className="mx-auto max-w-[310px] overflow-hidden rounded-[2rem] border-[5px] border-[#262b25] bg-[#fafbf7] shadow-sm">
        <div className="flex items-center justify-between px-5 pt-4 text-[9px]">
          <span>9:41</span>
          <span className="h-3 w-16 rounded-full bg-cloud" aria-hidden="true" />
          <span>Demo</span>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium tracking-tight">Miga.</span>
            <Wallet size={18} />
          </div>
          <p className="mt-1 text-[10px] text-cloud/70">
            Tu dinero, más claro.
          </p>
          <div className="mt-5 rounded-2xl bg-[#e6eddf] p-4">
            <p className="text-[10px] text-cloud/70">Gasto del mes · Ejemplo</p>
            <p className="mt-2 text-3xl font-medium tracking-tight">
              $4,280<span className="ml-1 text-[10px] font-normal">MXN</span>
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
              <div className="h-full w-[53.5%] bg-soft-cyan" />
            </div>
            <p className="mt-2 text-[9px] text-cloud/70">
              Presupuesto $8,000 · 53.5% utilizado
            </p>
          </div>
          <div className="mt-5">
            <p className="text-[10px] font-medium">Categorías</p>
            <div
              className="mt-3 flex h-2 overflow-hidden rounded-full"
              aria-hidden="true"
            >
              <span className="w-1/2 bg-[#315b4d]" />
              <span className="w-[30%] bg-[#92a283]" />
              <span className="w-1/5 bg-[#c5cebc]" />
            </div>
            <p className="mt-2 text-[9px] text-cloud/70">
              Alimentos · Transporte · Otros
            </p>
          </div>
          <p className="mt-5 text-[10px] font-medium">Últimos movimientos</p>
          <div className="mt-3 flex items-center gap-2 border-b pb-3">
            <ShoppingBag size={15} className="text-soft-cyan" />
            <span className="text-[10px]">
              Supermercado <span className="block text-cloud/70">Hoy</span>
            </span>
            <span className="ml-auto text-xs font-medium">$430</span>
          </div>
          <div className="mt-5 ml-4 rounded-xl rounded-br-sm bg-[#e4eadf] p-3 text-xs leading-5">
            Gasté $430 en el súper.
          </div>
          <div className="mt-3 mr-3 rounded-xl border bg-white p-3">
            <p className="flex items-center gap-1 text-[10px] text-soft-cyan">
              <Check size={12} />
              Registrado
            </p>
            <div className="mt-2 flex justify-between text-xs">
              <span>Supermercado</span>
              <strong className="font-medium">$430</strong>
            </div>
            <p className="mt-1 text-[9px] text-cloud/70">Hoy</p>
          </div>
        </div>
        <div
          className="mx-auto mb-3 h-1 w-20 rounded-full bg-cloud/30"
          aria-hidden="true"
        />
      </div>
      <p className="mt-5 text-center text-[10px] leading-5 text-cloud/70">
        Concepto de producto · Datos demostrativos
        <br />
        No es una app publicada.
      </p>
    </div>
  );
}
export function SchoolPreview() {
  return (
    <div className="enterprise-frame">
      <div className="enterprise-toolbar">
        <span className="font-medium">Cobranza escolar</span>
        <span>Prototipo conceptual</span>
      </div>
      <div className="bg-[#f3f5ef] p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-cloud/70">COBRANZA PREVENTIVA</p>
            <p className="mt-2 text-lg font-medium">
              Una vista. El siguiente paso claro.
            </p>
          </div>
          <CalendarDays size={18} />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            ["Cobranza esperada", "$120,000"],
            ["Cobrado", "$85,000"],
            ["Pendiente por vencer", "$25,000"],
            ["Vencido", "$10,000"],
          ].map(([l, v]) => (
            <div className="rounded-lg border bg-white p-3" key={l}>
              <p className="text-[10px] text-cloud/70">{l}</p>
              <p className="mt-2 text-xl font-medium">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border bg-white p-4">
          <div className="flex justify-between text-xs">
            <span className="font-medium">Distribución de cobranza</span>
            <span className="text-[10px] text-cloud/70">Ejemplo en MXN</span>
          </div>
          <div
            className="mt-4 flex h-4 overflow-hidden rounded-md"
            role="img"
            aria-label="Cobrado 85000, pendiente 25000 y vencido 10000 pesos, datos demostrativos"
          >
            <span className="w-[70.833%] bg-[#315b4d]" />
            <span className="w-[20.833%] bg-[#a2b397]" />
            <span className="flex-1 bg-[#c5b498]" />
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-[9px] text-cloud/70">
            <span>Cobrado</span>
            <span>Pendiente</span>
            <span>Vencido</span>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border bg-white">
          <div className="border-b p-4 text-xs font-medium">
            Próximos vencimientos y seguimientos
          </div>
          {[
            ["Registro A", "En 7 días", "Recordatorio"],
            ["Registro B", "En 3 días", "Preventivo"],
            ["Registro C", "Vencido", "Seguimiento"],
          ].map(([a, b, c]) => (
            <div
              key={a}
              className="grid grid-cols-[1fr_.8fr_1fr] items-center gap-2 border-b px-4 py-3 text-[10px] last:border-0"
            >
              <span>{a}</span>
              <span className="text-cloud/70">{b}</span>
              <span className="rounded bg-[#edf2eb] px-2 py-1 text-soft-cyan">
                {c}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-center gap-2 text-[10px] text-cloud/70">
          <ArrowUpRight size={13} />
          Integración futura con proveedores de pago.
        </p>
      </div>
      <p className="border-t px-5 py-3 text-[10px] leading-5 text-cloud/70">
        Concepto de producto · Datos demostrativos. Ravela no procesa
        directamente fondos.
      </p>
    </div>
  );
}
export function SchoolWorkflow() {
  return (
    <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {[
        ["7 días antes", "Recordatorio"],
        ["3 días antes", "Seguimiento preventivo"],
        ["Vencimiento", "Aviso"],
        ["Atraso", "Seguimiento"],
        ["Pago", "Actualización"],
      ].map(([s, a], i) => (
        <li key={s} className="rounded-lg border bg-white p-4">
          <p className="text-[10px] font-medium tracking-wide text-soft-cyan">
            0{i + 1} / {s}
          </p>
          <p className="mt-3 text-sm">{a}</p>
          {i < 4 && (
            <ArrowDown className="mt-4 h-3 w-3 text-soft-cyan lg:-rotate-90" />
          )}
        </li>
      ))}
    </ol>
  );
}
