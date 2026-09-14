"use client";
import { useId, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Check,
  FileText,
  Layers,
  Search,
  ShieldCheck,
  GitBranch,
  Database,
  CalendarDays,
  CheckCircle2,
  CircleDot,
  ArrowRight,
  Bell,
  PanelLeft,
  ScanLine,
  Cloud,
  SlidersHorizontal,
} from "lucide-react";
import type { SceneKind } from "@/lib/data/capabilities";

function Chart({
  variant = 0,
  band = false,
}: {
  variant?: number;
  band?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const lines = [
    "0,130 55,113 110,125 165,76 220,86 275,58 330,72 385,24 440,39 500,12",
    "0,130 55,116 110,123 165,96 220,91 275,80 330,73 385,64 440,51 500,46",
    "0,130 55,113 110,125 165,76 220,86 275,75 330,94 385,81 440,113 500,108",
  ];
  return (
    <svg
      viewBox="0 0 500 170"
      className="scene-chart"
      role="img"
      aria-label="Gráfica de valores demostrativos, sin resultados de clientes"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="currentColor" stopOpacity=".22" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 60, 100, 140].map((y) => (
        <path key={y} d={`M0 ${y}H500`} stroke="currentColor" opacity=".12" />
      ))}
      {band && (
        <path
          d="M220 65L275 40L330 28L385 0L440 12L500 0V80L440 88L385 66L330 98L275 103L220 115Z"
          fill="currentColor"
          opacity=".13"
        />
      )}
      <polygon
        points={`0,170 ${lines[variant]} 500,170`}
        fill={`url(#${id})`}
      />
      <polyline
        points={lines[1]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        opacity=".55"
      />
      <polyline
        points={lines[variant]}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle
        cx="385"
        cy={variant === 0 ? 24 : variant === 1 ? 64 : 81}
        r="5"
        fill="currentColor"
      />
    </svg>
  );
}
function WindowTop({ name, right }: { name: string; right: string }) {
  return (
    <div className="scene-top">
      <span className="scene-brand">
        <CircleDot size={14} />
        {name}
      </span>
      <span>{right}</span>
    </div>
  );
}
function Dashboard({ interactive }: { interactive: boolean }) {
  const [period, setPeriod] = useState("Mes");
  return (
    <div className="dashboard-screen">
      <aside className="scene-sidebar">
        <Activity size={24} />
        <span>Operación</span>
        <span>Indicadores</span>
        <span>Inventario</span>
        <span>Reportes</span>
        <span className="sidebar-bottom">RV / Vista ejecutiva</span>
      </aside>
      <div className="dashboard-main">
        <WindowTop name="Control operativo" right="Datos de ejemplo" />
        <div className="scene-heading">
          <div>
            <small>UNA OPERACIÓN CONECTADA</small>
            <p className="scene-title">Todo empieza con una mejor vista.</p>
          </div>
          {interactive ? (
            <label className="scene-select">
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
            <span className="scene-pill">Este mes</span>
          )}
        </div>
        <div className="executive-kpis">
          {[
            ["Pedidos", period === "Mes" ? "248" : "62"],
            ["Ingresos · MXN", period === "Mes" ? "$186,000" : "$46,500"],
            ["En seguimiento", period === "Mes" ? "18" : "5"],
          ].map(([l, v]) => (
            <div key={l}>
              <span>{l}</span>
              <strong>{v}</strong>
              <small>Periodo ilustrativo</small>
            </div>
          ))}
        </div>
        <div className="dashboard-charts">
          <div className="chart-surface">
            <div className="chart-label">
              <span>Actividad y tendencia</span>
              <span>01 — 12</span>
            </div>
            <Chart variant={period === "Mes" ? 0 : 1} />
            <div className="chart-legend">
              <span>Actividad</span>
              <span>Referencia</span>
            </div>
          </div>
          <div className="chart-surface scene-detail">
            <p>Distribución operativa</p>
            <div className="scene-donut">
              <span>
                248<small>pedidos</small>
              </span>
            </div>
            <p className="small-note">Atendidos · En curso · Revisión</p>
          </div>
        </div>
        <div className="scene-table scene-detail">
          <span>ORDEN</span>
          <span>ÁREA</span>
          <span>ESTADO</span>
          <span>OP-024</span>
          <span>Operaciones</span>
          <span className="scene-success">En seguimiento</span>
          <span>OP-025</span>
          <span>Administración</span>
          <span>Validada</span>
        </div>
      </div>
    </div>
  );
}
function Agent({ interactive }: { interactive: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <div className="agent-desk">
      <div className="document-stack scene-detail">
        <div className="paper">
          <FileText size={28} />
          <strong>Procedimiento de compras</strong>
          <p>
            01 / Solicitud
            <br />
            02 / Validación
            <br />
            03 / Aprobación
          </p>
          <div className="paper-lines" />
          <span>Fuente documental · Ejemplo</span>
        </div>
        <div className="document-tag">
          <ShieldCheck size={15} /> Fuentes delimitadas
        </div>
      </div>
      <div className="agent-console">
        <WindowTop name="Asistente empresarial" right="Consulta + acción" />
        <div className="agent-greeting">
          <Search size={22} />
          <p className="scene-title">
            Tu conocimiento.
            <br />A un paso de ser útil.
          </p>
        </div>
        <p className="question-bubble">
          ¿Qué necesito para iniciar una solicitud de compra?
        </p>
        <div className="answer-bubble">
          <p>
            El procedimiento contempla una descripción, un responsable y una
            validación de presupuesto.
          </p>
          <div className="source-chips">
            <span>Procedimiento · § 2</span>
            <span>Política · § 3</span>
          </div>
          <p className="small-note">
            Respaldo: 2 fuentes de ejemplo · Revisión humana
          </p>
          {interactive ? (
            <button className="scene-action" onClick={() => setDone((v) => !v)}>
              {done ? <Check size={15} /> : <ArrowUpRight size={15} />}{" "}
              {done ? "Reiniciar ejemplo" : "Preparar solicitud"}
            </button>
          ) : (
            <span className="scene-action">
              Preparar solicitud <ArrowUpRight size={15} />
            </span>
          )}
          <p aria-live="polite" className="small-note">
            {done
              ? "Solicitud demostrativa preparada. No se ejecutó ninguna acción externa."
              : "La acción requiere validación del responsable."}
          </p>
        </div>
      </div>
    </div>
  );
}
function Simulation({
  interactive,
  learning = false,
}: {
  interactive: boolean;
  learning?: boolean;
}) {
  const [scenario, setScenario] = useState("Base");
  const high = scenario === "Demanda alta";
  return (
    <div className={`planning-screen ${learning ? "learning-screen" : ""}`}>
      <WindowTop
        name={learning ? "Laboratorio predictivo" : "Planeación de inventario"}
        right={learning ? "Validación / Escenarios" : "Modelo / Escenarios"}
      />
      <div className="scene-heading">
        <div>
          <small>
            {learning
              ? "DATOS → MODELO → VALIDACIÓN"
              : "DEMANDA · INVENTARIO · COBERTURA"}
          </small>
          <p className="scene-title">
            {learning
              ? "Anticipar también exige validar."
              : "¿Qué cambia si cambia la demanda?"}
          </p>
        </div>
        {interactive ? (
          <label className="scene-select">
            Escenario
            <select
              aria-label="Escenario de demanda"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
            >
              <option>Base</option>
              <option>Demanda alta</option>
              <option>Conservador</option>
            </select>
          </label>
        ) : (
          <span className="scene-pill">Escenario base</span>
        )}
      </div>
      <div className="planning-layout">
        <div className="planning-plot">
          <div className="chart-label">
            <span>
              {learning
                ? "Histórico y predicción ilustrativa"
                : "Demanda proyectada"}
            </span>
            <span>12 periodos</span>
          </div>
          <Chart
            variant={high ? 0 : scenario === "Conservador" ? 2 : 1}
            band={learning}
          />
          <div className="chart-legend">
            <span>Histórico / Base</span>
            <span>Escenario</span>
          </div>
          <div className="planning-metrics">
            <div>
              <span>Inventario</span>
              <strong>12,450</strong>
            </div>
            <div>
              <span>Demanda</span>
              <strong>
                {high
                  ? "11,700"
                  : scenario === "Conservador"
                    ? "8,400"
                    : "9,820"}
              </strong>
            </div>
            <div>
              <span>Cobertura</span>
              <strong>
                {high ? "7.0" : scenario === "Conservador" ? "9.7" : "8.3"}{" "}
                <small>sem.</small>
              </strong>
            </div>
          </div>
        </div>
        <aside className="planning-aside scene-detail">
          <SlidersHorizontal size={23} />
          <strong>
            {learning ? "Antes de desplegar" : "Variables del modelo"}
          </strong>
          {(learning
            ? [
                "Calidad de datos",
                "Comparación con base",
                "Validación temporal",
                "Revisión del resultado",
              ]
            : [
                "Demanda esperada",
                "Tiempo de reposición",
                "Stock de seguridad",
                "Capacidad disponible",
              ]
          ).map((s, i) => (
            <div key={s}>
              <span>{s}</span>
              <div className="variable-track">
                <span style={{ width: `${40 + i * 12}%` }} />
              </div>
            </div>
          ))}
        </aside>
      </div>
      <p className="planning-note">
        {learning
          ? "Concepto predictivo. No se publican métricas de precisión ni resultados de un modelo real."
          : "Supuestos ajustables. Una simulación ayuda a explorar; no garantiza resultados."}
      </p>
    </div>
  );
}
function Vision() {
  return (
    <div className="vision-studio">
      <div className="vision-title">
        <span>
          <ScanLine size={16} /> INSPECCIÓN / OPERACIÓN
        </span>
        <span>Escena ilustrada</span>
      </div>
      <div className="vision-layout">
        <div className="vision-camera">
          <svg
            viewBox="0 0 700 430"
            role="img"
            aria-label="Ilustración original de almacén con cajas detectadas y una excepción para revisión"
          >
            <rect width="700" height="430" fill="#20282c" />
            {[70, 230, 390, 550].map((x) => (
              <g key={x}>
                <path
                  d={`M${x} 0V290M${x + 110} 0V290`}
                  stroke="#62716f"
                  strokeWidth="6"
                />
                {[100, 200, 290].map((y) => (
                  <path
                    key={y}
                    d={`M${x} ${y}H${x + 110}`}
                    stroke="#62716f"
                    strokeWidth="6"
                  />
                ))}
              </g>
            ))}
            {[90, 250, 410, 570].map((x, i) => (
              <g key={x}>
                <rect
                  x={x}
                  y={i % 2 ? 120 : 28}
                  width="70"
                  height="65"
                  fill="#8c7861"
                />
                <path
                  d={`M${x + 35} ${i % 2 ? 120 : 28}v65`}
                  stroke="#c4b399"
                  strokeWidth="10"
                />
              </g>
            ))}
            <path d="M0 335L700 270V430H0Z" fill="#53605e" />
            {[0, 65, 130, 195, 260, 325, 390, 455, 520, 585, 650].map((x) => (
              <path
                key={x}
                d={`M${x} 335l90 95`}
                stroke="#85908c"
                strokeWidth="2"
              />
            ))}
            {[
              [100, 245, 125, 95],
              [300, 230, 110, 105],
              [475, 220, 135, 95],
            ].map(([x, y, w, h], i) => (
              <g key={x}>
                <path
                  d={`M${x} ${y}l25 -20h${w - 25}l-25 20Z`}
                  fill="#c4ad87"
                />
                <rect x={x} y={y} width={w - 25} height={h} fill="#a8906b" />
                <path
                  d={`M${x + w - 25} ${y}l25 -20v${h}l-25 20Z`}
                  fill="#7a684f"
                />
                <rect
                  x={x - 12}
                  y={y - 35}
                  width={w + 24}
                  height={h + 50}
                  fill="none"
                  stroke={i === 2 ? "#e0b069" : "#9ed4b8"}
                  strokeWidth="2"
                  strokeDasharray={i === 2 ? "6 4" : undefined}
                />
                <rect
                  x={x - 12}
                  y={y - 55}
                  width="130"
                  height="22"
                  fill={i === 2 ? "#e0b069" : "#9ed4b8"}
                />
                <text x={x - 5} y={y - 40} fontSize="12" fill="#18241f">
                  {i === 2 ? "REVISAR / 03" : `CAJA / 0${i + 1}`}
                </text>
              </g>
            ))}
          </svg>
          <span className="camera-label">VISTA 01 · DATOS SINTÉTICOS</span>
        </div>
        <aside className="vision-review">
          <p>Panel de revisión</p>
          <strong>
            Una señal.
            <br />
            El siguiente paso.
          </strong>
          <div>
            <CheckCircle2 size={16} />
            <span>Caja 01 · Detectada</span>
          </div>
          <div>
            <CheckCircle2 size={16} />
            <span>Caja 02 · Detectada</span>
          </div>
          <div className="review-warning">
            <ScanLine size={16} />
            <span>Caja 03 · Revisar</span>
          </div>
          <p className="small-note">
            Las excepciones se mantienen bajo revisión humana.
          </p>
        </aside>
      </div>
    </div>
  );
}
export function ClinicalScene({ before = false }: { before?: boolean }) {
  return (
    <div className={`clinical-stage ${before ? "clinical-before" : ""}`}>
      {before ? (
        <div className="dispersed-desk">
          <div className="paper">
            <FileText size={32} />
            <strong>Expediente</strong>
            <div className="paper-lines" />
            <p>Registro por consultar</p>
          </div>
          <div className="paper appointment-paper">
            <CalendarDays size={28} />
            <strong>Agenda manual</strong>
            <div className="paper-lines" />
            <p>Horario por confirmar</p>
          </div>
          <span className="loose-note">Información en distintos lugares</span>
        </div>
      ) : (
        <div className="clinical-device">
          <div className="device-camera" />
          <div className="clinic-app">
            <WindowTop name="Expedientes + Agenda" right="Vista ilustrativa" />
            <div className="clinic-layout">
              <aside className="clinic-sidebar scene-detail">
                <span className="clinic-monogram">+</span>
                <span>Pacientes</span>
                <span>Expedientes</span>
                <span>Agenda</span>
                <span>Seguimiento</span>
              </aside>
              <div className="clinic-content">
                <div className="clinic-patient">
                  <span>DP</span>
                  <div>
                    <strong>Paciente de demostración</strong>
                    <p>DEMO-001 · Sin información personal</p>
                  </div>
                  <ShieldCheck size={18} />
                </div>
                <div className="clinic-columns">
                  <div className="clinical-record">
                    <p>Expediente digital</p>
                    <div>
                      <span>Contacto</span>
                      <strong>Dato de ejemplo</strong>
                    </div>
                    <div>
                      <span>Última consulta</span>
                      <strong>Registro vinculado</strong>
                    </div>
                    <div>
                      <span>Seguimiento</span>
                      <strong className="scene-success">Actualizado</strong>
                    </div>
                  </div>
                  <div className="clinical-calendar">
                    <p>
                      <CalendarDays size={13} /> Agenda · Ejemplo
                    </p>
                    <div className="calendar-grid">
                      {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                        <small key={i}>{d}</small>
                      ))}
                      {Array.from({ length: 28 }, (_, i) => (
                        <span key={i} data-selected={i === 9}>
                          {i + 1}
                        </span>
                      ))}
                    </div>
                    <div className="appointment">
                      09:30 <span>Consulta / DEMO-001</span>
                    </div>
                  </div>
                </div>
                <div className="clinic-footer">
                  Paciente <ArrowRight size={12} /> Expediente{" "}
                  <ArrowRight size={12} /> Cita <Check size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className="laptop-base" />
        </div>
      )}
    </div>
  );
}
function WorkflowScene({ cloud = false }: { cloud?: boolean }) {
  const nodes = cloud
    ? [
        { icon: FileText, t: "Entradas", s: "Formularios · Correo" },
        { icon: ShieldCheck, t: "Acceso y validación", s: "Permisos · Reglas" },
        { icon: Cloud, t: "Servicios cloud", s: "Procesamiento · APIs" },
        {
          icon: Database,
          t: "Plataforma de datos",
          s: "Modelo · Trazabilidad",
        },
        { icon: Layers, t: "ERP + CRM", s: "Información conectada" },
        { icon: Activity, t: "Aplicaciones", s: "Operación · Indicadores" },
      ]
    : [
        { icon: FileText, t: "Solicitud", s: "Formulario recibido" },
        { icon: ShieldCheck, t: "Validación", s: "Reglas de negocio" },
        { icon: GitBranch, t: "Aprobación", s: "Criterio del responsable" },
        { icon: Database, t: "Actualizar sistema", s: "Registro trazable" },
        { icon: Bell, t: "Notificar", s: "Correo al responsable" },
        { icon: CheckCircle2, t: "Proceso cerrado", s: "Historial disponible" },
      ];
  return (
    <div className={`flow-studio ${cloud ? "cloud-studio" : ""}`}>
      <WindowTop
        name={
          cloud ? "Arquitectura de integración" : "Orquestación de procesos"
        }
        right="Canvas / Representación"
      />
      <div className="flow-heading">
        <small>
          {cloud
            ? "ENTRADAS → PLATAFORMA → OPERACIÓN"
            : "DISEÑAR · CONECTAR · VALIDAR"}
        </small>
        <p className="scene-title">
          {cloud
            ? "La arquitectura detrás del flujo."
            : "Cada paso tiene una razón."}
        </p>
      </div>
      <div className="flow-canvas">
        {nodes.map(({ icon: Icon, t, s }, i) => (
          <div className="flow-node" key={t}>
            <span className="node-port" />
            <div className="node-icon">
              <Icon size={20} />
            </div>
            <div>
              <small>0{i + 1}</small>
              <strong>{t}</strong>
              <p>{s}</p>
            </div>
            {i < 5 && <ArrowRight className="node-connector" size={22} />}
          </div>
        ))}
      </div>
      <div className="flow-status">
        <span className="status-dot" />
        {cloud
          ? "Accesos definidos · Integración por fases"
          : "Supervisión humana · Excepciones visibles"}
        <span className="scene-detail">Flujo ilustrativo</span>
      </div>
    </div>
  );
}
function Pricing({ interactive }: { interactive: boolean }) {
  const [price, setPrice] = useState(240);
  const volume = Math.round(1200 - (price - 200) * 3);
  return (
    <div className="pricing-screen">
      <WindowTop name="Escenarios de precio" right="Concepto analítico" />
      <div className="scene-heading">
        <div>
          <small>PRECIO × VOLUMEN × MARGEN</small>
          <p className="scene-title">
            El número importa.
            <br />
            El contexto, también.
          </p>
        </div>
        <span className="scene-pill">Modelo hipotético</span>
      </div>
      <div className="pricing-layout">
        <div>
          <Chart variant={price > 270 ? 2 : 0} />
          <div className="chart-legend">
            <span>Escenario de ingreso</span>
            <span>Referencia</span>
          </div>
          <div className="pricing-reference scene-detail">
            <span>Referencias sintéticas</span>
            <div>
              <span>Escenario A / $220</span>
              <span>Escenario B / $260</span>
            </div>
          </div>
        </div>
        <div className="price-controls">
          <p>Precio explorado · MXN</p>
          <strong>${price}</strong>
          {interactive && (
            <label>
              Explorar precio
              <input
                type="range"
                min="200"
                max="320"
                step="10"
                aria-label="Precio del escenario"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </label>
          )}
          <div>
            <span>Margen unitario supuesto</span>
            <b>${price - 150}</b>
          </div>
          <div>
            <span>Volumen hipotético</span>
            <b>{volume.toLocaleString("es-MX")}</b>
          </div>
          <small>
            Costo fijo de ejemplo: $150 por unidad. No es una recomendación de
            precio.
          </small>
        </div>
      </div>
    </div>
  );
}
export function SystemScene({
  kind,
  interactive = false,
  compact = false,
}: {
  kind: SceneKind;
  interactive?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`system-scene scene-${kind} ${compact ? "scene-compact" : ""}`}
    >
      {kind === "dashboard" ? (
        <Dashboard interactive={interactive} />
      ) : kind === "agent" ? (
        <Agent interactive={interactive} />
      ) : kind === "simulation" || kind === "learning" ? (
        <Simulation interactive={interactive} learning={kind === "learning"} />
      ) : kind === "vision" ? (
        <Vision />
      ) : kind === "application" ? (
        <ClinicalScene />
      ) : kind === "pricing" ? (
        <Pricing interactive={interactive} />
      ) : (
        <WorkflowScene cloud={kind === "cloud"} />
      )}
      <p className="scene-disclaimer">
        Representación de la solución · Datos demostrativos
      </p>
    </div>
  );
}
export function SceneThumbnail({ kind }: { kind: SceneKind }) {
  return (
    <div className={`scene-thumbnail thumb-${kind}`} aria-hidden="true">
      {kind === "vision" ? (
        <>
          <ScanLine />
          <div className="thumb-detections">
            <i />
            <i />
            <i />
          </div>
        </>
      ) : kind === "workflow" || kind === "cloud" ? (
        <>
          <GitBranch />
          <div className="thumb-flow">
            <i />
            <span />
            <i />
            <span />
            <i />
          </div>
        </>
      ) : kind === "agent" ? (
        <>
          <FileText />
          <div className="thumb-chat">
            <span>Consulta + fuentes</span>
            <span>Respuesta + acción ↗</span>
          </div>
        </>
      ) : kind === "application" ? (
        <>
          <PanelLeft />
          <div className="thumb-app">
            <span>Expediente digital</span>
            <span>09:30 / Cita vinculada</span>
            <span>Seguimiento organizado</span>
          </div>
        </>
      ) : (
        <>
          <Activity />
          <Chart
            variant={kind === "pricing" ? 2 : 0}
            band={kind === "learning"}
          />
        </>
      )}
    </div>
  );
}
