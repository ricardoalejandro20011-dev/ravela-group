import type { Metadata } from "next";

import { PilarDetail } from "@/components/soluciones/pilar-detail";
import { pilares } from "@/lib/data/pilares";

const pilar = pilares.find((p) => p.slug === "automatizacion")!;

export const metadata: Metadata = {
  title: `${pilar.title} — Ravela Group`,
  description: pilar.heroDescription,
};

export default function AutomatizacionPage() {
  return <PilarDetail pilar={pilar} />;
}
