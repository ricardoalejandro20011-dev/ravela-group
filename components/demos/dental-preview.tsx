import { FolderOpen, CalendarDays, UserRound, Check } from "lucide-react";
export function DentalPreview() {
  return (
    <div className="demo-panel">
      <div className="demo-top">
        <span className="font-medium">Expedientes + Citas</span>
        <span className="text-soft-cyan">Representación visual</span>
      </div>
      <div className="bg-[#f2f5ef] p-5 sm:p-7">
        <div className="flex items-center gap-3 rounded-lg border bg-white p-4">
          <UserRound className="h-6 w-6 text-soft-cyan" />
          <div>
            <p className="text-sm font-medium">Paciente de demostración</p>
            <p className="mt-1 text-[11px] text-cloud/70">
              Registro vinculado a expediente y citas
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-white p-4">
            <FolderOpen size={20} className="text-soft-cyan" />
            <p className="mt-3 text-sm font-medium">Expediente digital</p>
            <ul className="mt-3 space-y-2 text-xs text-cloud/75">
              <li>Datos de contacto</li>
              <li>Historial del paciente</li>
              <li>Registros de consulta</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <CalendarDays size={20} className="text-soft-cyan" />
            <p className="mt-3 text-sm font-medium">Agenda centralizada</p>
            <p className="mt-3 text-xs leading-6 text-cloud/75">
              Fecha y horario
              <br />
              Seguimiento de cita
              <br />
              Expediente relacionado
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border bg-white p-4">
          <p className="text-xs font-medium">Un mismo flujo de atención</p>
          <ol className="mt-4 space-y-3">
            {[
              "Paciente",
              "Expediente digital",
              "Cita",
              "Agenda",
              "Consulta",
              "Actualización del expediente",
            ].map((step, i) => (
              <li className="flex items-center gap-3 text-xs" key={step}>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#edf2eb] text-[10px] text-soft-cyan">
                  {i + 1}
                </span>
                {step}
                <Check size={12} className="ml-auto text-soft-cyan" />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p className="border-t p-4 text-[11px] leading-5 text-cloud/70">
        Representación visual de la solución. Datos demostrativos. No es una
        captura del sistema ni contiene información de pacientes.
      </p>
    </div>
  );
}
