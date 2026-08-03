import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { pilares } from "@/lib/data/pilares";
import type { BlogPost } from "@/lib/types";

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function PostCard({ post }: { post: BlogPost }) {
  const pilar = pilares.find((p) => p.slug === post.pilarRelacionado);
  const Icon = pilar?.icon;

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="glass group flex gap-5 overflow-hidden rounded-2xl transition-colors duration-200 hover:border-cloud/20">
        <div className="gradient-brand flex w-24 shrink-0 items-center justify-center sm:w-32">
          {Icon && <Icon className="h-8 w-8 text-cloud/90" strokeWidth={1.5} />}
        </div>
        <div className="py-6 pr-6">
          <div className="flex items-center gap-3 text-xs text-cloud/45">
            <span>{dateFormatter.format(new Date(post.publishedAt))}</span>
            {pilar && <Badge variant="neutral">{pilar.title}</Badge>}
          </div>
          <CardTitle className="mt-3 text-lg transition-colors group-hover:text-soft-cyan sm:text-xl">
            {post.title}
          </CardTitle>
          <CardDescription>{post.excerpt}</CardDescription>
        </div>
      </div>
    </Link>
  );
}
