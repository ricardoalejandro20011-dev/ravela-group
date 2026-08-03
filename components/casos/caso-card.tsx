import { CalendarCheck, MessageCircle, Scale, ScanSearch, Warehouse } from "lucide-react";

import { CasoIlustracion } from "@/components/casos/caso-illustration";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import type { CaseStudy } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

const ilustracionPorSlug: Record<string, { bg: typeof Warehouse; fg: typeof Warehouse }> = {
  "refaccionaria-munguia-cotizaciones-whatsapp": { bg: Warehouse, fg: MessageCircle },
  "odontocare-asistente-citas-whatsapp": { bg: CalendarCheck, fg: MessageCircle },
  "torres-asociados-analisis-expedientes-ia": { bg: Scale, fg: ScanSearch },
};

export function CasoCard({ caso, className }: { caso: CaseStudy; className?: string }) {
  const ilustracion = ilustracionPorSlug[caso.slug];

  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-2xl shadow-xl shadow-black/20 transition-colors duration-200 hover:border-cloud/20",
        className,
      )}
    >
      {/* Barra superior estilo ventana de navegador/app */}
      <div className="flex items-center gap-1.5 border-b border-cloud/10 bg-midnight/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>

      {ilustracion && <CasoIlustracion BgIcon={ilustracion.bg} FgIcon={ilustracion.fg} />}

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="violet">{caso.industria}</Badge>
          {caso.esIlustrativo && <Badge variant="neutral">Ejemplo ilustrativo</Badge>}
        </div>
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-cloud/40">
          {caso.cliente}
          {caso.responsable && ` — ${caso.responsable}`}
        </p>
        <CardTitle className="mt-1.5">{caso.title}</CardTitle>
        <p className="mt-3 text-sm leading-relaxed text-cloud/65">
          <span className="font-medium text-cloud/80">Problema: </span>
          {caso.problema}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-cloud/65">
          <span className="font-medium text-cloud/80">Solución: </span>
          {caso.solucion}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-soft-cyan/90">{caso.resultado}</p>
      </div>
    </div>
  );
}
