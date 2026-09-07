"use client";
import { useState, type ReactNode } from "react";
import {
  FileText,
  Check,
  Workflow,
  Database,
  Bell,
  ArrowDown,
  ShieldCheck,
  GitBranch,
  Bot,
  ArrowUpRight,
  Folder,
  ScanLine,
} from "lucide-react";
function Frame({
  title,
  tag,
  children,
  caption = "Datos demostrativos · Experiencia anonimizada",
}: {
  title: string;
  tag: string;
  children: ReactNode;
  caption?: string;
}) {
  return (
    <div className="enterprise-frame">
      <div className="enterprise-toolbar">
        <span className="font-medium">{title}</span>
        <span className="text-soft-cyan">{tag}</span>
      </div>
      {children}
      <p className="border-t px-5 py-3 text-[10px] leading-5 text-cloud/70">
        {caption}
      </p>
    </div>
  );
}
export function AutomationPreview() {
  return (
    <Frame title="Orquestación de procesos" tag="Vista de arquitectura">
      <div className="space-y-0 bg-[#f2f5ef] p-5 sm:p-7">
        <div className="mb-5 flex items-center justify-between text-[10px]">
          <span>PROCESO / SOLICITUD INTERNA</span>
          <span className="rounded-full border bg-white px-2 py-1">
            Flujo demostrativo
          </span>
        </div>
        {[
          {
            icon: FileText,
            title: "Solicitud recibida",
            sub: "Formulario · Datos de entrada",
            status: "Inicio",
          },
          {
            icon: ShieldCheck,
            title: "Validación",
            sub: "Campos completos y permisos",
            status: "Validado",
          },
          {
            icon: GitBranch,
            title: "Reglas de negocio",
            sub: "Condiciones → Ruta de aprobación",
            status: "Evaluado",
          },
          {
            icon: Workflow,
            title: "Workflow",
            sub: "Acciones coordinadas entre sistemas",
            status: "Procesado",
          },
          {
            icon: Database,
            title: "Sistema empresarial",
            sub: "Registro y actualización de información",
            status: "Registrado",
          },
          {
            icon: Bell,
            title: "Notificación y resultado",
            sub: "Trazabilidad para el equipo",
            status: "Completado",
          },
        ].map((n, i) => (
          <div key={n.title}>
            {i > 0 && (
              <div className="flex h-5 items-center pl-5">
                <ArrowDown size={12} className="text-soft-cyan" />
              </div>
            )}
            <div className="flex items-center gap-3 rounded-lg border bg-white p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#edf2eb]">
                <n.icon size={16} className="text-soft-cyan" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium">{n.title}</p>
                <p className="mt-1 text-[10px] text-cloud/70">{n.sub}</p>
              </div>
              <span className="ml-auto hidden rounded-full bg-[#edf2eb] px-2 py-1 text-[9px] text-soft-cyan sm:block">
                {n.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}
export function AgentPreview() {
  const [started, setStarted] = useState(false);
  return (
    <Frame title="Asistente de conocimiento" tag="Demo interactiva">
      <div className="bg-[#f4f5f1] p-5 sm:p-7">
        <div className="flex items-center gap-2 text-[10px] font-medium tracking-wider">
          <Folder size={13} />
          BASE DOCUMENTAL
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Política", "Procedimiento", "Manual"].map((t) => (
            <div className="rounded-lg border bg-white p-3" key={t}>
              <FileText size={20} className="text-soft-cyan" />
              <p className="mt-3 break-words text-[10px]">{t}</p>
              <div className="mt-3 space-y-1" aria-hidden="true">
                <div className="h-1 rounded bg-cloud/10" />
                <div className="h-1 w-2/3 rounded bg-cloud/10" />
              </div>
            </div>
          ))}
        </div>
        <div className="my-5 flex justify-center">
          <span className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs">
            <Bot size={16} />
            Agente IA
          </span>
        </div>
        <div className="ml-5 rounded-xl rounded-br-sm bg-[#e3ebdf] p-4 text-sm leading-6">
          ¿Cuál es el procedimiento aplicable para esta solicitud?
        </div>
        <div className="mt-4 mr-3 rounded-xl rounded-bl-sm border bg-white p-4">
          <p className="text-sm leading-6">
            Encontré la documentación relacionada.
          </p>
          <p className="mt-4 text-[10px] font-medium text-cloud/70">
            FUENTES / 2 DOCUMENTOS DE EJEMPLO
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded border px-2 py-1 text-[10px]">
              Política · § 3
            </span>
            <span className="rounded border px-2 py-1 text-[10px]">
              Procedimiento · § 2
            </span>
          </div>
          <button
            type="button"
            onClick={() => setStarted((v) => !v)}
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-cloud px-4 py-2 text-xs text-white"
          >
            {started ? (
              <>
                <Check size={13} />
                Reiniciar demo
              </>
            ) : (
              <>
                Iniciar proceso <ArrowUpRight size={13} />
              </>
            )}
          </button>
          <p
            aria-live="polite"
            className="mt-3 text-[10px] leading-5 text-soft-cyan"
          >
            {started
              ? "Demostración: solicitud preparada para validación humana. No se ejecutó una acción externa."
              : "Acción de demostración · Con supervisión humana"}
          </p>
        </div>
      </div>
    </Frame>
  );
}
const scenarios = {
  Base: {
    demand: 9820,
    coverage: "8.3",
    points: "0,85 60,73 120,84 180,55 240,49 300,32 360,25",
    projection: "M180 55 L240 45 L300 25 L360 15",
  },
  Conservador: {
    demand: 8240,
    coverage: "9.9",
    points: "0,85 60,73 120,84 180,55 240,67 300,63 360,57",
    projection: "M180 55 L240 64 L300 61 L360 55",
  },
  Alto: {
    demand: 11700,
    coverage: "7.0",
    points: "0,85 60,73 120,84 180,55 240,36 300,20 360,8",
    projection: "M180 55 L240 33 L300 18 L360 4",
  },
};
export function SimulationPreview() {
  const [scenario, setScenario] = useState<keyof typeof scenarios>("Base");
  const s = scenarios[scenario];
  return (
    <Frame title="Planeación de inventario" tag="Simulador demostrativo">
      <div className="bg-[#f4f5f1] p-5 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] text-cloud/70">
              DATOS → ESCENARIOS → DECISIONES
            </p>
            <p className="mt-2 text-lg font-medium">
              Una operación. Distintas posibilidades.
            </p>
          </div>
          <label className="text-[10px] text-cloud/70">
            Escenario
            <select
                aria-label="Escenario"
              className="mt-1 block min-h-11 rounded-lg border bg-white px-3 text-xs text-cloud"
              value={scenario}
              onChange={(e) =>
                setScenario(e.target.value as keyof typeof scenarios)
              }
            >
              {Object.keys(scenarios).map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2" aria-live="polite">
          {[
            ["Inventario actual", "12,450"],
            ["Demanda proyectada", s.demand.toLocaleString("es-MX")],
            ["Cobertura", `${s.coverage} sem.`],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border bg-white p-3">
              <p className="text-[10px] text-cloud/70">{l}</p>
              <p className="mt-3 text-base font-medium sm:text-xl">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border bg-white p-4">
          <p className="text-xs font-medium">Demanda y proyección</p>
          <svg
            viewBox="0 0 380 150"
            className="mt-5 w-full"
            role="img"
            aria-label={`Tendencia ilustrativa para escenario ${scenario}`}
          >
            <g stroke="#e6e9e2" strokeWidth="1">
              {[25, 60, 95, 130].map((y) => (
                <path key={y} d={`M10 ${y} H370`} />
              ))}
            </g>
            <path
              d="M10 105 L70 90 L130 98 L190 72 L250 69 L310 63 L370 53"
              fill="none"
              stroke="#9ca89c"
              strokeWidth="2"
            />
            <polyline
              points={s.points}
              transform="translate(10 15)"
              fill="none"
              stroke="#315b4d"
              strokeWidth="3"
            />
            <path
              d={s.projection}
              transform="translate(10 15)"
              fill="none"
              stroke="#315b4d"
              strokeDasharray="4 4"
            />
            <path d="M190 10 V135" stroke="#c6cfc3" strokeDasharray="3 3" />
            <text x="10" y="147" fontSize="9" fill="#626b60">
              Histórico ilustrativo
            </text>
            <text x="260" y="147" fontSize="9" fill="#626b60">
              Proyección
            </text>
          </svg>
          <div className="mt-4 flex flex-wrap gap-4 text-[10px]">
            <span className="flex items-center gap-2">
              <i className="h-1 w-4 bg-[#9ca89c]" />
              Escenario actual
            </span>
            <span className="flex items-center gap-2">
              <i className="h-1 w-4 bg-soft-cyan" />
              Escenario simulado
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-lg bg-[#e7eee2] p-4 text-xs">
          <GitBranch size={17} />
          <span>Compara escenarios antes de decidir.</span>
        </div>
      </div>
    </Frame>
  );
}
export function VisionPreview() {
  return (
    <Frame
      title="Inspección visual de operación"
      tag="Ilustración conceptual"
      caption="Representación visual · Experiencia anonimizada · Valores demostrativos"
    >
      <div className="bg-[#eef1ea] p-4 sm:p-6">
        <div className="mb-4 flex justify-between text-[10px]">
          <span className="flex items-center gap-2">
            <ScanLine size={14} />
            VISTA DE INSPECCIÓN
          </span>
          <span>Secuencia de ejemplo</span>
        </div>
        <svg
          className="w-full rounded-lg"
          viewBox="0 0 560 340"
          role="img"
          aria-label="Ilustración original de cajas en una operación logística, con detecciones y una alerta de revisión"
        >
          <defs>
            <pattern
              id="vision-grid"
              width="35"
              height="35"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M35 0H0V35"
                fill="none"
                stroke="#c8d0c3"
                strokeWidth=".5"
              />
            </pattern>
          </defs>
          <rect width="560" height="340" fill="#e1e6dc" />
          <rect width="560" height="340" fill="url(#vision-grid)" />
          <path d="M0 210L340 110L560 210V340H0Z" fill="#c9d1c3" />
          <g fill="none" stroke="#939f8d" strokeWidth="6">
            <path d="M40 35V210M245 35V155M460 35V175M40 85H465M40 155H465" />
          </g>
          <g fill="#b6b6a1" stroke="#8d927e" strokeWidth="1.5">
            <path d="M65 47h60v34H65ZM139 42h45v39h-45ZM277 46h65v35h-65ZM355 40h72v41h-72ZM61 110h83v42H61ZM166 111h45v41h-45ZM295 109h95v43h-95Z" />
          </g>
          <path d="M0 267L355 155L560 225L180 340H0Z" fill="#707d6c" />
          <path
            d="M0 278L355 167L560 237M20 310L373 200L530 254"
            stroke="#9ba795"
            strokeWidth="3"
            fill="none"
          />
          <g stroke="#79785f" strokeWidth="1.5">
            <path d="M99 203L170 180L226 202L154 228Z" fill="#d9ccb0" />
            <path d="M99 203V262L154 287V228Z" fill="#b7a98e" />
            <path d="M154 228L226 202V257L154 287Z" fill="#c5b79a" />
            <path d="M281 155L342 136L391 155L331 177Z" fill="#e1d6ba" />
            <path d="M281 155V210L331 231V177Z" fill="#b8ac8e" />
            <path d="M331 177L391 155V207L331 231Z" fill="#c8ba99" />
          </g>
          <path d="M153 186L182 197V217L167 222V203L139 191" fill="#ebe2cd" />
          <path d="M328 140L348 148V171L337 175V151L315 144" fill="#eee4cb" />
          <rect
            x="87"
            y="167"
            width="153"
            height="132"
            rx="4"
            fill="none"
            stroke="#315b4d"
            strokeWidth="2"
          />
          <rect x="87" y="144" width="153" height="23" rx="3" fill="#315b4d" />
          <text x="96" y="159" fontSize="10" fill="white">
            Producto detectado · 95%
          </text>
          <rect
            x="270"
            y="121"
            width="135"
            height="120"
            rx="4"
            fill="none"
            stroke="#926731"
            strokeWidth="2"
          />
          <rect x="270" y="98" width="159" height="23" rx="3" fill="#785626" />
          <text x="278" y="113" fontSize="10" fill="white">
            Revisión requerida
          </text>
          <path
            d="M15 25V12H30M530 12H545V27M15 310V325H30M530 325H545V310"
            stroke="#315b4d"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg border bg-white p-3">
            <p className="text-[10px] text-cloud/70">CONDICIÓN</p>
            <p className="mt-2 flex items-center gap-2 text-xs">
              <Check size={13} className="text-soft-cyan" />
              Validación visual
            </p>
          </div>
          <div className="rounded-lg border bg-white p-3">
            <p className="text-[10px] text-cloud/70">ALERTA</p>
            <p className="mt-2 text-xs">Revisión humana requerida</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}
