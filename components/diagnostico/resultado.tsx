import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScoreMeter } from "@/components/ui/score-meter";
import type { DiagnosticoResultado, PrioridadRecomendacion } from "@/lib/types";

const prioridadLabel: Record<PrioridadRecomendacion, string> = {
  alta: "Prioridad alta",
  media: "Prioridad media",
  baja: "Prioridad baja",
};

const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export function ResultadoDiagnostico({
  resultado,
  empresa,
}: {
  resultado: DiagnosticoResultado;
  empresa: string;
}) {
  const { score, recomendaciones, resumen } = resultado;

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <Badge variant="cyan">Diagnóstico de oportunidades</Badge>
        <h2 className="mt-4 font-heading text-2xl font-semibold text-cloud sm:text-3xl">
          Resultado para {empresa || "tu empresa"}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-cloud/70">{resumen}</p>
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <span className="font-heading text-sm font-semibold text-cloud">
            Indicador general: {score.overall}/100
          </span>
        </div>
        <div className="mt-6 flex flex-col gap-5">
          <ScoreMeter label="Automatización" value={score.automation} />
          <ScoreMeter
            label="Inteligencia Artificial"
            value={score.ai}
            delay={0.05}
          />
          <ScoreMeter label="Datos" value={score.data} delay={0.1} />
          <ScoreMeter
            label="Integraciones"
            value={score.integration}
            delay={0.15}
          />
          <ScoreMeter
            label="Madurez digital"
            value={score.digitalMaturity}
            delay={0.2}
          />
        </div>
      </Card>

      <div>
        <h3 className="font-heading text-lg font-semibold text-cloud">
          Principales oportunidades
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {recomendaciones.map((rec) => (
            <Card key={rec.titulo}>
              <Badge variant={rec.prioridad}>
                {prioridadLabel[rec.prioridad]}
              </Badge>
              <h4 className="mt-3 font-heading text-base font-semibold text-cloud">
                {rec.titulo}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-cloud/70">
                {rec.descripcion}
              </p>
              {(rec.ahorroEstimadoMensualMXN ||
                rec.horasRecuperablesSemanales) && (
                <div className="mt-4 flex flex-col gap-1 border-t border-cloud/10 pt-3 text-xs text-cloud/70">
                  {rec.ahorroEstimadoMensualMXN && (
                    <span>
                      Ahorro estimado:{" "}
                      {mxn.format(rec.ahorroEstimadoMensualMXN)}/mes
                    </span>
                  )}
                  {rec.horasRecuperablesSemanales && (
                    <span>
                      {rec.horasRecuperablesSemanales} hrs/semana recuperables
                    </span>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <p className="text-xs leading-6 text-cloud/70">
        Los indicadores se calculan con reglas orientativas, no con un modelo
        predictivo. Las estimaciones usan 40% de tiempo recuperable, 4.33
        semanas por mes y un costo supuesto de $120 MXN por hora, ajustado por
        el rango de personal. Valida estos supuestos con tu proceso real.
      </p>
      <div className="glass flex flex-col items-center gap-3 rounded-2xl p-8 text-center">
        <h3 className="font-heading text-xl font-semibold text-cloud">
          Define tu siguiente paso
        </h3>
        <p className="max-w-md text-sm text-cloud/70">
          Estos resultados son orientativos y no sustituyen una auditoría
          profesional. Platiquemos sobre cómo llevarlos a la práctica.
        </p>
        <Button href="/contacto" size="lg" className="mt-2">
          Agenda un diagnóstico gratuito
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
