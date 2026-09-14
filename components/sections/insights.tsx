import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { blogPosts } from "@/lib/mock/blog";
import { ArrowUpRight, FileText } from "lucide-react";
export function Insights() {
  return (
    <Section className="border-y bg-[#f7f8f5]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Perspectivas</p>
            <h2 className="section-title mt-4">
              Ideas para mejorar tu operación.
            </h2>
          </div>
          <Link
            href="/blog"
            className="py-3 text-sm font-medium text-soft-cyan"
          >
            Ver perspectivas ↗
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.slug} className="rounded-xl border bg-white p-7">
              <div className="flex items-center justify-between">
                <FileText className="h-6 w-6 text-soft-cyan" />
                <span className="text-[10px] uppercase tracking-widest text-cloud/70">
                  {post.tags[0]}
                </span>
              </div>
              <h3 className="mt-5 text-xl sm:text-2xl font-medium leading-snug tracking-tight">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <Link
                href={`/blog/${post.slug}`}
                aria-label={`Leer perspectiva: ${post.title}`}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-soft-cyan"
              >
                Leer perspectiva <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
