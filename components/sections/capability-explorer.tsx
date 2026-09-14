import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { capabilities, capabilityHref } from "@/lib/data/capabilities";
import { SceneThumbnail } from "@/components/visuals/system-scenes";
import { Container, Section } from "@/components/ui/container";
export function CapabilityExplorer() {
  return (
    <Section id="capacidades">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Ravela Solutions</p>
            <h2 className="section-title mt-4 max-w-3xl">
              Una consultoría.
              <br />
              Múltiples capacidades.
            </h2>
          </div>
          <Link href="/soluciones" className="text-link">
            Explorar soluciones <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="capability-grid">
          {capabilities.map((c, i) => (
            <article key={c.slug} className="capability-tile">
              <SceneThumbnail kind={c.scene} />
              <div className="capability-copy">
                <p className="eyebrow">
                  0{i + 1} / {c.group}
                </p>
                <h3 className="mt-3">{c.name}</h3>
                <p>{c.benefit}</p>
                <ul>
                  {c.applications.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <Link href={capabilityHref(c)} className="text-link mt-3">
                  Conocer más <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mobile-capabilities">
          {capabilities.map((c, i) => (
            <details key={c.slug} name="capacidades">
              <summary>
                <span>
                  <small>0{i + 1} / </small>
                  {c.name}
                </span>
                <Plus size={18} className="shrink-0" />
              </summary>
              <div className="mobile-capability-content">
                <SceneThumbnail kind={c.scene} />
                <p>{c.benefit}</p>
                <ul>
                  {c.applications.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <Link href={capabilityHref(c)} className="text-link mt-3">
                  Conocer {c.name.toLowerCase()} <ArrowUpRight size={14} />
                </Link>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
