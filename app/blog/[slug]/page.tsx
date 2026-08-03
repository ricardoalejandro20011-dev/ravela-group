import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RichText } from "@/components/blog/rich-text";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { pilares } from "@/lib/data/pilares";
import { blogPosts } from "@/lib/mock/blog";

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Ravela Group`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const pilar = pilares.find((p) => p.slug === post.pilarRelacionado);
  const Icon = pilar?.icon;

  return (
    <Section className="pt-24 sm:pt-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl">
          <div className="gradient-brand flex h-40 items-center justify-center rounded-2xl sm:h-48">
            {Icon && <Icon className="h-14 w-14 text-cloud/90" strokeWidth={1.5} />}
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-cloud/45">
            <span>{dateFormatter.format(new Date(post.publishedAt))}</span>
            <span>·</span>
            <span>{post.author}</span>
            {pilar && <Badge variant="neutral">{pilar.title}</Badge>}
          </div>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-8">
            <RichText content={post.content} />
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
