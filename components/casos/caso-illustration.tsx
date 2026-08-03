import type { LucideIcon } from "lucide-react";

/**
 * Ilustración compuesta (no un ícono suelto): un símbolo de fondo grande
 * que representa el giro del negocio, un badge en primer plano con el
 * símbolo de la solución, y puntos decorativos. Ver nota sobre por qué no
 * son fotografías reales en el resumen de la conversación.
 */
export function CasoIlustracion({
  BgIcon,
  FgIcon,
}: {
  BgIcon: LucideIcon;
  FgIcon: LucideIcon;
}) {
  return (
    <div className="gradient-brand relative flex h-40 items-center justify-center overflow-hidden sm:h-44">
      <BgIcon className="h-28 w-28 text-cloud/15" strokeWidth={1} />
      <span className="glass absolute bottom-5 right-1/2 flex h-14 w-14 translate-x-16 items-center justify-center rounded-2xl border-cloud/25 sm:translate-x-20">
        <FgIcon className="h-6 w-6 text-cloud" strokeWidth={1.75} />
      </span>
      <span className="absolute left-6 top-6 h-1.5 w-1.5 rounded-full bg-cloud/40" />
      <span className="absolute bottom-8 left-10 h-1 w-1 rounded-full bg-cloud/30" />
      <span className="absolute right-8 top-9 h-1 w-1 rounded-full bg-cloud/30" />
    </div>
  );
}
