import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@/components/blog/rich-text";
import { Container } from "@/components/ui/container";
import { SceneThumbnail } from "@/components/visuals/system-scenes";
import { blogPosts } from "@/lib/mock/blog";
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = blogPosts.find((p) => p.slug === slug);
  return p
    ? {
        title: `${p.title} — Ravela Group`,
        description: p.excerpt,
        alternates: { canonical: `/blog/${slug}` },
        openGraph: {
          title: p.title,
          description: p.excerpt,
          type: "article",
          url: `/blog/${slug}`,
        },
      }
    : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = blogPosts.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <section className="page-intro">
      <Container>
        <div className="article-header">
          <Link href="/blog" className="text-link">
            ← Perspectivas
          </Link>
          <p className="eyebrow mt-6">Tecnología con criterio</p>
          <h1 className="mt-5">{p.title}</h1>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-cloud/70">
            <span>
              {new Date(p.publishedAt).toLocaleDateString("es-MX", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>{p.author}</span>
          </div>
          <div className="blog-cover mt-9">
            <SceneThumbnail
              kind={
                p.pilarRelacionado === "automatizacion"
                  ? "workflow"
                  : "dashboard"
              }
            />
          </div>
        </div>
        <div className="article-body">
          <RichText content={p.content} />
          <div className="mt-12 border-t pt-6">
            <Link href="/diagnostico" className="text-link">
              Explorar qué puede mejorar en mi operación ↗
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
