import type { CaseStudy } from "@/lib/types";
export function CasoCard({
  caso,
  className = "",
}: {
  caso: CaseStudy;
  className?: string;
}) {
  return (
    <article className={`rounded-xl border bg-white p-6 ${className}`}>
      <p className="eyebrow">
        {caso.type === "real" && caso.authorized
          ? "Caso real"
          : "Escenario demostrativo"}
      </p>
      <p className="mt-6 text-xs text-cloud/70">{caso.cliente}</p>
      <h3 className="mt-2 text-xl font-medium tracking-tight">{caso.title}</h3>
      <div className="mt-5 space-y-4 text-sm leading-6 text-cloud/75">
        <p>
          <strong className="font-medium text-cloud">Problema. </strong>
          {caso.problema}
        </p>
        <p>
          <strong className="font-medium text-cloud">Solución. </strong>
          {caso.solucion}
        </p>
        <p className="border-t pt-4 text-soft-cyan">{caso.resultado}</p>
      </div>
    </article>
  );
}
