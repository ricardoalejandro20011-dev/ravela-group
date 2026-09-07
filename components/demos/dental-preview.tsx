import {
  FolderOpen,
  CalendarDays,
  UserRound,
  Search,
  Check,
  Clock,
} from "lucide-react";
export function DentalPreview() {
  return (
    <div className="enterprise-frame">
      <div className="enterprise-toolbar">
        <span className="font-medium">Expedientes + Agenda</span>
        <span className="text-soft-cyan">Representación de la solución</span>
      </div>
      <div className="bg-[#f2f5ef] p-4 sm:p-6">
        <div className="mb-5 flex items-center gap-3 rounded-lg border bg-white px-3 py-2.5 text-[10px] text-cloud/70">
          <Search size={13} />
          Consultar paciente o expediente
          <span className="ml-auto rounded border px-1.5">Demo</span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border bg-white p-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf2eb]">
            <UserRound size={20} className="text-soft-cyan" />
          </span>
          <div>
            <p className="text-sm font-medium">Paciente de demostración</p>
            <p className="mt-1 text-[10px] text-cloud/70">
              Expediente DEMO-001 · Datos ficticios
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-lg border bg-white p-4">
            <p className="flex items-center gap-2 text-xs font-medium">
              <FolderOpen size={15} />
              Expediente digital
            </p>
            <div className="mt-4 space-y-4 text-[10px]">
              {[
                "Información del paciente",
                "Datos de contacto",
                "Historial de consultas",
              ].map((t) => (
                <div key={t}>
                  <p className="text-cloud/70">{t}</p>
                  <div
                    className="mt-2 h-1.5 w-4/5 rounded bg-cloud/10"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
            <div className="mt-5 border-t pt-4">
              <p className="text-[10px] font-medium">Historial</p>
              <p className="mt-3 flex gap-2 text-[10px] leading-5 text-cloud/70">
                <Check size={12} className="shrink-0 text-soft-cyan" />
                Registro de consulta vinculado al expediente
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <p className="flex items-center gap-2 text-xs font-medium">
              <CalendarDays size={15} />
              Agenda de ejemplo
            </p>
            <div
              className="mt-4 grid grid-cols-7 gap-1 text-center text-[9px]"
              aria-label="Calendario ilustrativo"
            >
              {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                <span key={i} className="py-1 text-cloud/70">
                  {d}
                </span>
              ))}
              {Array.from({ length: 28 }, (_, i) => (
                <span
                  key={i}
                  className={`rounded py-1.5 ${i === 9 ? "bg-soft-cyan text-white" : i === 15 || i === 23 ? "bg-[#e7eee2]" : ""}`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-[#edf2eb] p-3">
              <p className="flex items-center gap-2 text-[10px] font-medium">
                <Clock size={12} />
                Próxima cita · Ejemplo
              </p>
              <p className="mt-2 text-xs">Día 10 / 09:30</p>
              <p className="mt-1 text-[10px] text-cloud/70">
                Vinculada al expediente
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 rounded-lg border bg-white p-3 text-[10px]">
          {["Paciente", "Expediente", "Cita", "Agenda", "Consulta"].map(
            (s, i) => (
              <span key={s}>
                {i > 0 && <span className="mr-2 text-soft-cyan">→</span>}
                {s}
              </span>
            ),
          )}
        </div>
      </div>
      <p className="border-t px-5 py-3 text-[10px] leading-5 text-cloud/70">
        Representación visual de la solución · Datos demostrativos. No es una
        captura del sistema ni contiene información de pacientes.
      </p>
    </div>
  );
}
