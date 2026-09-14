import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SceneThumbnail } from "@/components/visuals/system-scenes";
import { blogPosts } from "@/lib/mock/blog";
export const metadata = {
  alternates: { canonical: "/blog" },
  title: "Perspectivas — Tecnología con criterio | Ravela Group",
  description:
    "Ideas prácticas sobre tecnología, automatización, IA y datos para entender mejor la operación y decidir por dónde empezar.",
};
export default function Blog() {
  return (
    <section className="page-intro">
      <Container>
        <p className="eyebrow">Perspectivas / Ravela Group</p>
        <h1 className="display-title mt-5 max-w-4xl">
          Pensar bien.
          <br />
          Construir mejor.
        </h1>
        <p className="intro-copy mt-6">
          Ideas para conectar los problemas del negocio con decisiones
          tecnológicas útiles.
        </p>
        <div className="blog-editorial-grid mt-14">
          {blogPosts.map((p, i) => (
            <article key={p.slug}>
              <div className="blog-cover">
                <SceneThumbnail kind={i ? "dashboard" : "workflow"} />
              </div>
              <p className="text-xs text-cloud/70">
                {new Date(p.publishedAt).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {p.author}
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-cloud/75">
                {p.excerpt}
              </p>
              <Link className="text-link mt-4" href={`/blog/${p.slug}`}>
                Leer perspectiva ↗<span className="sr-only">: {p.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
