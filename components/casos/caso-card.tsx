import { DentalPreview } from "@/components/demos/dental-preview";
import Image from "next/image";
import Link from "next/link";
import { hasPublicAsset } from "@/lib/assets";
import { caseDisplayName, verifiedResults } from "@/lib/data/cases";
import type { CaseStudy } from "@/lib/types";
export function CaseVisual({ caso }: { caso: CaseStudy }) {
  return hasPublicAsset(caso.heroImage) ? (
    <div className="relative min-h-80 overflow-hidden rounded-xl bg-midnight">
      <Image
        src={caso.heroImage}
        alt={caso.heroImageAlt || `Proyecto ${caseDisplayName(caso)}`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  ) : caso.slug === "clinica-dental-privada" ? (
    <DentalPreview />
  ) : (
    <div className="rounded-xl border bg-midnight p-8">
      <p className="eyebrow">Trabajo realizado</p>
      <p className="mt-5 text-2xl font-medium">{caseDisplayName(caso)}</p>
    </div>
  );
}
export function CaseFacts({ caso }: { caso: CaseStudy }) {
  const results = verifiedResults(caso);
  return (
    <div className="mt-6 space-y-5 text-sm leading-7 text-cloud/75">
      {caso.problem && (
        <div>
          <h3 className="font-medium text-cloud">El reto</h3>
          <p>{caso.problem}</p>
        </div>
      )}
      {caso.solution && (
        <div>
          <h3 className="font-medium text-cloud">La solución</h3>
          <p>{caso.solution}</p>
        </div>
      )}
      {results.length > 0 && (
        <div>
          <h3 className="font-medium text-cloud">Resultados confirmados</h3>
          <dl>
            {results.map((r) => (
              <div key={r.label} className="mt-3">
                <dt>{r.label}</dt>
                <dd className="font-medium text-soft-cyan">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
export function CasoCard({
  caso,
  className = "",
  detail = false,
}: {
  caso: CaseStudy;
  className?: string;
  detail?: boolean;
}) {
  return (
    <article
      className={`grid gap-10 lg:grid-cols-2 lg:items-center ${className}`}
    >
      <CaseVisual caso={caso} />
      <div>
        <p className="eyebrow">Caso real</p>
        {detail ? (
          <h2 className="mt-4 text-2xl font-medium">Trabajo realizado</h2>
        ) : (
          <h2 className="section-title mt-4">{caseDisplayName(caso)}</h2>
        )}
        <p className="mt-5 text-sm leading-7 text-cloud/75">{caso.summary}</p>
        <CaseFacts caso={caso} />
        {!caso.problem && !caso.solution && (
          <p className="mt-5 text-sm leading-7 text-cloud/75">
            Por confidencialidad, esta ficha se limita a la existencia del
            proyecto. El alcance técnico y los resultados se publicarán cuando
            estén documentados y autorizados.
          </p>
        )}
        {!detail && (
          <Link
            href={`/casos/${caso.slug}`}
            className="mt-7 inline-block py-3 text-sm font-medium text-soft-cyan"
          >
            Ver caso completo ↗
          </Link>
        )}
      </div>
    </article>
  );
}
