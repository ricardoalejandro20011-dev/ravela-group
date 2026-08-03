import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { pilares } from "@/lib/data/pilares";
import type { CaseStudy } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

export function CasoCard({ caso, className }: { caso: CaseStudy; className?: string }) {
  const pilar = pilares.find((p) => p.slug === caso.pilarRelacionado);
  const Icon = pilar?.icon;

  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-2xl transition-colors duration-200 hover:border-cloud/20",
        className,
      )}
    >
      <div className="gradient-brand flex h-28 items-center justify-center">
        {Icon && <Icon className="h-10 w-10 text-cloud/90" strokeWidth={1.5} />}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="violet">{caso.industria}</Badge>
          {caso.esIlustrativo && <Badge variant="neutral">Ejemplo ilustrativo</Badge>}
        </div>
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-cloud/40">
          {caso.cliente}
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
