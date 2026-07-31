export interface ROIInput {
  numEmpleados: number;
  horasSemanales: number;
  costoPorHoraMXN: number;
  diasLaborales: number;
  porcentajeAutomatizacion: number;
}

export interface ROIOutput {
  horasMensuales: number;
  costoMensualMXN: number;
  costoAnualMXN: number;
  ahorroPotencialMensualMXN: number;
  ahorroPotencialAnualMXN: number;
  horasRecuperablesMensuales: number;
}
