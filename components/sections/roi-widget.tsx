"use client";

import { useMemo, useState } from "react";

import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { calcularROI } from "@/lib/scoring/roi";

const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-cloud/80">{label}</span>
        <span className="font-heading font-semibold text-cloud">
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-electric-violet"
      />
    </label>
  );
}

export function RoiWidget() {
  const [numEmpleados, setNumEmpleados] = useState(5);
  const [horasSemanales, setHorasSemanales] = useState(10);
  const [costoPorHoraMXN, setCostoPorHoraMXN] = useState(120);
  const [porcentajeAutomatizacion, setPorcentajeAutomatizacion] = useState(40);

  const resultado = useMemo(
    () =>
      calcularROI({
        numEmpleados,
        horasSemanales,
        costoPorHoraMXN,
        diasLaborales: 5,
        porcentajeAutomatizacion,
      }),
    [numEmpleados, horasSemanales, costoPorHoraMXN, porcentajeAutomatizacion],
  );

  return (
    <Section>
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
            ¿Cuánto te cuestan tus procesos manuales?
          </h2>
          <p className="mt-4 text-cloud/70">
            Ajusta los valores y mira una estimación de tu costo mensual y ahorro
            potencial.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <Card className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <Field
                label="Número de empleados involucrados"
                value={numEmpleados}
                onChange={setNumEmpleados}
                min={1}
                max={50}
              />
              <Field
                label="Horas semanales en procesos manuales"
                value={horasSemanales}
                onChange={setHorasSemanales}
                min={1}
                max={40}
                suffix=" hrs"
              />
              <Field
                label="Costo estimado por hora"
                value={costoPorHoraMXN}
                onChange={setCostoPorHoraMXN}
                min={50}
                max={500}
                step={10}
                suffix=" MXN"
              />
              <Field
                label="% que podrías automatizar"
                value={porcentajeAutomatizacion}
                onChange={setPorcentajeAutomatizacion}
                min={10}
                max={90}
                step={5}
                suffix="%"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 border-cloud/10 pt-8 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <p className="text-sm text-cloud/60">Costo mensual actual</p>
                <p className="font-heading text-3xl font-semibold text-cloud">
                  {mxn.format(resultado.costoMensualMXN)}
                </p>
              </div>
              <div>
                <p className="text-sm text-cloud/60">Ahorro potencial mensual</p>
                <p className="text-gradient-brand font-heading text-3xl font-semibold">
                  {mxn.format(resultado.ahorroPotencialMensualMXN)}
                </p>
              </div>
              <div>
                <p className="text-sm text-cloud/60">Horas recuperables al mes</p>
                <p className="font-heading text-2xl font-semibold text-cloud">
                  {resultado.horasRecuperablesMensuales} hrs
                </p>
              </div>
            </div>
          </Card>
          <p className="mt-4 text-center text-xs text-cloud/40">
            Los resultados son estimaciones orientativas y no representan una
            proyección financiera garantizada.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
