import { Check } from "lucide-react";
export function MigaProductVisual() {
  return (
    <div className="product-art">
      <div className="miga-phone">
        <div className="mb-5 flex justify-between text-[9px]">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <strong>Miga.</strong>
        <p className="text-[10px]">Tu dinero, más claro.</p>
        <div className="miga-balance">
          Gasto del mes · Ejemplo<strong>$4,280</strong>
          <div className="miga-budget" />
          <small>$8,000 de presupuesto · 53.5% utilizado</small>
        </div>
        <p className="text-[10px]">Último movimiento / Supermercado · $430</p>
        <div className="miga-message">Gasté $430 en el súper.</div>
        <div className="miga-reply">
          <Check size={13} className="mb-2" />
          Registro de ejemplo preparado.
          <br />
          Alimentos · $430 MXN
        </div>
        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#514836]" />
      </div>
    </div>
  );
}
export function SchoolProductVisual() {
  return (
    <div className="product-art">
      <div className="school-dashboard">
        <header>
          <strong>Cobranza escolar</strong>
          <span>Panel administrativo</span>
        </header>
        <p className="mt-7 text-lg font-medium tracking-tight">
          Prevenir. Dar seguimiento. Tener claridad.
        </p>
        <div className="school-kpis">
          <div>
            <span>Cobrado</span>
            <strong>$85,000</strong>
          </div>
          <div>
            <span>Por vencer</span>
            <strong>$25,000</strong>
          </div>
          <div>
            <span>Vencido</span>
            <strong>$10,000</strong>
          </div>
        </div>
        <div
          className="school-collection"
          role="img"
          aria-label="Distribución demostrativa: 85000 cobrado, 25000 por vencer y 10000 vencido"
        >
          <span />
          <span />
          <span />
        </div>
        <p className="mb-4 text-[9px]">
          Esperado: $120,000 MXN · Datos sintéticos
        </p>
        {[
          ["Registro A", "En 7 días", "Recordatorio"],
          ["Registro B", "En 3 días", "Preventivo"],
          ["Registro C", "Vencido", "Seguimiento"],
        ].map(([a, b, c]) => (
          <div className="school-row" key={a}>
            <strong>{a}</strong>
            <span>{b}</span>
            <span>{c}</span>
          </div>
        ))}
        <p className="mt-6 text-[9px] leading-5">
          Vista conceptual de escritorio. Integraciones de pago previstas;
          Ravela no procesa fondos.
        </p>
      </div>
    </div>
  );
}
