import type { ROIInput, ROIOutput } from "@/lib/types";

const SEMANAS_POR_MES = 4.33;
const MESES_POR_ANIO = 12;

export function calcularROI(input: ROIInput): ROIOutput {
  const {
    numEmpleados,
    horasSemanales,
    costoPorHoraMXN,
    porcentajeAutomatizacion,
  } = input;

  const fraccionAutomatizable = Math.min(
    Math.max(porcentajeAutomatizacion, 0),
    100,
  ) / 100;

  const horasMensuales = numEmpleados * horasSemanales * SEMANAS_POR_MES;
  const costoMensualMXN = horasMensuales * costoPorHoraMXN;
  const costoAnualMXN = costoMensualMXN * MESES_POR_ANIO;

  const ahorroPotencialMensualMXN = costoMensualMXN * fraccionAutomatizable;
  const ahorroPotencialAnualMXN = costoAnualMXN * fraccionAutomatizable;
  const horasRecuperablesMensuales = horasMensuales * fraccionAutomatizable;

  return {
    horasMensuales: Math.round(horasMensuales),
    costoMensualMXN: Math.round(costoMensualMXN),
    costoAnualMXN: Math.round(costoAnualMXN),
    ahorroPotencialMensualMXN: Math.round(ahorroPotencialMensualMXN),
    ahorroPotencialAnualMXN: Math.round(ahorroPotencialAnualMXN),
    horasRecuperablesMensuales: Math.round(horasRecuperablesMensuales),
  };
}
