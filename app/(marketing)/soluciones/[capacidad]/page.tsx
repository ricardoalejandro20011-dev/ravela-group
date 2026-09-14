import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { capabilities } from "@/lib/data/capabilities";
import { CapabilityDetail } from "@/components/soluciones/capability-detail";
const additional = capabilities.filter(
  (c) =>
    ![
      "automatizacion",
      "inteligencia-artificial",
      "datos-inteligencia",
    ].includes(c.slug),
);
export function generateStaticParams() {
  return additional.map((c) => ({ capacidad: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ capacidad: string }>;
}): Promise<Metadata> {
  const { capacidad } = await params;
  const c = additional.find((c) => c.slug === capacidad);
  return c
    ? {
        title: `${c.name} | Ravela Solutions`,
        description: c.description,
        alternates: { canonical: `/soluciones/${c.slug}` },
      }
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ capacidad: string }>;
}) {
  const { capacidad } = await params;
  const c = additional.find((c) => c.slug === capacidad);
  if (!c) notFound();
  return <CapabilityDetail capability={c} />;
}
