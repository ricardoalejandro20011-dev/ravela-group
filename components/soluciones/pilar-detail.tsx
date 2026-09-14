import type { Pilar } from "@/lib/data/pilares";
import { capabilities } from "@/lib/data/capabilities";
import { CapabilityDetail } from "./capability-detail";
export function PilarDetail({ pilar }: { pilar: Pilar }) {
  const c = capabilities.find(
    (c) =>
      c.slug ===
      (pilar.slug === "transformacion-digital"
        ? "integracion-cloud"
        : pilar.slug),
  )!;
  return (
    <CapabilityDetail
      capability={
        pilar.slug === "transformacion-digital"
          ? {
              ...c,
              name: "Transformación digital",
              benefit: "Una ruta para conectar, digitalizar y construir.",
            }
          : c
      }
      services={pilar.servicios}
      examples={pilar.ejemplosPyme}
    />
  );
}
