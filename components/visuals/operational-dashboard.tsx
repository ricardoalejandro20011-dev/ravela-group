"use client";
import { useState } from "react";
import { Activity, ChevronDown, Filter, Search } from "lucide-react";

const orders = [
  {
    id: "OP-0248",
    area: "Distribución",
    amount: "$1,250",
    state: "Pendiente",
    owner: "Equipo A",
  },
  {
    id: "OP-0247",
    area: "Administración",
    amount: "$680",
    state: "Completada",
    owner: "Equipo B",
  },
  {
    id: "OP-0246",
    area: "Distribución",
    amount: "$920",
    state: "En revisión",
    owner: "Equipo A",
  },
  {
    id: "OP-0245",
    area: "Ventas",
    amount: "$1,480",
    state: "Completada",
    owner: "Equipo C",
  },
];
export function OperationalDashboard({
  interactive,
}: {
  interactive: boolean;
}) {
  const [period, setPeriod] = useState("Mes");
  const [status, setStatus] = useState("Todos");
  const weekly = period === "Semana";
  const values = weekly ? [10, 14, 12, 17, 9] : [52, 62, 70, 64];
  const labels = weekly
    ? ["Lun", "Mar", "Mié", "Jue", "Vie"]
    : ["Sem 1", "Sem 2", "Sem 3", "Sem 4"];
  const rows = orders.filter((o) => status === "Todos" || o.state === status);
  return (
    <div className="ops-app">
      <div className="ops-toolbar">
        <span>
          <Activity size={16} /> Operaciones{" "}
          <span className="ops-slash">/</span> Resumen
        </span>
        <span className="ops-environment">Entorno demostrativo</span>
      </div>
      <div className="ops-body">
        <div className="ops-heading">
          <div>
            <p>CONTROL DE OPERACIÓN</p>
            <strong>Resumen de pedidos</strong>
          </div>
          {interactive ? (
            <label>
              Periodo
              <select
                aria-label="Periodo del dashboard"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option>Mes</option>
                <option>Semana</option>
              </select>
            </label>
          ) : (
            <span className="ops-period">
              Este mes <ChevronDown size={12} />
            </span>
          )}
        </div>
        <div className="ops-kpis">
          <div>
            <span>Pedidos registrados</span>
            <strong>{weekly ? 62 : 248}</strong>
            <small>En el periodo seleccionado</small>
          </div>
          <div>
            <span>Importe registrado</span>
            <strong>{weekly ? "$46,500" : "$186,000"}</strong>
            <small>MXN · Datos de ejemplo</small>
          </div>
          <div>
            <span>Por atender</span>
            <strong>{weekly ? 5 : 18}</strong>
            <small>En la cola de seguimiento</small>
          </div>
        </div>
        <div className="ops-analysis">
          <div className="ops-volume">
            <div className="ops-panel-title">
              <strong>Volumen de pedidos</strong>
              <span>Unidades</span>
            </div>
            <div
              className="ops-bars"
              role="img"
              aria-label={`Pedidos por ${weekly ? "día" : "semana"}: ${values.join(", ")}. Total ${weekly ? 62 : 248}. Datos demostrativos.`}
            >
              {values.map((n, i) => (
                <div key={i}>
                  <span>{n}</span>
                  <i
                    style={{ height: `${(n / (weekly ? 20 : 80)) * 120}px` }}
                  />
                  <small>{labels[i]}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="ops-breakdown">
            <div className="ops-panel-title">
              <strong>Estado de la operación</strong>
            </div>
            {[
              ["Completadas", weekly ? 53 : 212],
              ["Pendientes", weekly ? 5 : 18],
              ["En revisión", weekly ? 4 : 18],
            ].map(([s, n], i) => (
              <div className="ops-state-row" key={s}>
                <span>
                  <i data-state={i} />
                  {s}
                </span>
                <strong>{n}</strong>
              </div>
            ))}
            <p>El total incluye todos los estados.</p>
          </div>
        </div>
        <div className="ops-register">
          <div className="ops-register-tools">
            <strong>
              <Search size={13} /> Últimos movimientos
            </strong>
            {interactive ? (
              <label>
                <Filter size={12} />
                <select
                  aria-label="Estado de los movimientos"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Todos</option>
                  <option>Pendiente</option>
                  <option>Completada</option>
                  <option>En revisión</option>
                </select>
              </label>
            ) : (
              <span>4 registros de ejemplo</span>
            )}
          </div>
          <table>
            <caption className="sr-only">
              Movimientos ficticios para ilustrar el control operativo
            </caption>
            <thead>
              <tr>
                <th>Folio</th>
                <th>Área</th>
                <th>Importe</th>
                <th>Estado</th>
                <th className="ops-owner">Responsable</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.area}</td>
                  <td>{o.amount}</td>
                  <td>
                    <span className="ops-status" data-state={o.state}>
                      {o.state}
                    </span>
                  </td>
                  <td className="ops-owner">{o.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
