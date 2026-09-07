import type { Metadata } from "next";

import { PilarDetail } from "@/components/soluciones/pilar-detail";
import { pilares } from "@/lib/data/pilares";

const pilar = pilares.find((p) => p.slug === "automatizacion")!;

export const metadata: Metadata = {
  alternates: { canonical: "/soluciones/automatizacion" },
  title: `${pilar.title} — Ravela Group`,
  description: pilar.heroDescription,
  openGraph: {
    title: `${pilar.title} | Ravela Group`,
    description: pilar.heroDescription,
    url: `/soluciones/${pilar.slug}`,
  },
};

export default function AutomatizacionPage() {
  return <PilarDetail pilar={pilar} />;
}
