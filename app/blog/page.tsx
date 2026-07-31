import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { blogPosts } from "@/lib/mock/blog";

export const metadata: Metadata = {
  title: "Blog — Ravela Group",
  description:
    "Artículos prácticos sobre automatización, Inteligencia Artificial y datos para PYMEs mexicanas.",
};

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogIndexPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-cloud/70">
            Ideas prácticas sobre automatización, IA y datos, pensadas para PYMEs
            mexicanas.
          </p>
        </FadeIn>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="block">
                <Card className="group">
                  <div className="flex items-center gap-3 text-xs text-cloud/45">
                    <span>{dateFormatter.format(new Date(post.publishedAt))}</span>
                    {post.pilarRelacionado && (
                      <Badge variant="neutral">{post.pilarRelacionado}</Badge>
                    )}
                  </div>
                  <CardTitle className="mt-3 transition-colors group-hover:text-soft-cyan">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
