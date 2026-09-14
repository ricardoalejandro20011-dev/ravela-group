import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { labProducts } from "@/lib/data/products";
import {
  MigaProductVisual,
  SchoolProductVisual,
} from "@/components/visuals/product-visuals";
export function LabsPreview() {
  return (
    <Section id="labs" className="ink-section">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Ravela Labs</p>
            <h2 className="section-title mt-4 max-w-3xl">
              Problemas compartidos.
              <br />
              Productos propios.
            </h2>
          </div>
          <Link href="/labs" className="text-link">
            Entrar a Labs <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="product-grid">
          {labProducts.map((p, i) => (
            <article
              key={p.slug}
              className={`product-teaser ${i ? "school-product" : "miga-product"}`}
            >
              <div className="product-teaser-copy">
                <span className="portfolio-kind">{p.status}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <Link href={`/labs#${p.slug}`} className="text-link mt-3">
                  Explorar producto <ArrowUpRight size={15} />
                </Link>
              </div>
              {i ? <SchoolProductVisual /> : <MigaProductVisual />}
              <p className="px-7 pb-6 text-[10px]">
                Concepto de producto · Datos demostrativos
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
