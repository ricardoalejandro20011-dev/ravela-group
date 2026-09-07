import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/mock/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...[
      "/",
      "/diagnostico",
      "/calculadora-roi",
      "/nosotros",
      "/contacto",
      "/blog",
      "/soluciones",
      "/soluciones/automatizacion",
      "/soluciones/inteligencia-artificial",
      "/soluciones/datos-inteligencia",
      "/soluciones/transformacion-digital",
      "/casos-de-exito",
      "/recursos",
      "/aviso-de-privacidad",
    ].map((p) => ({ url: `https://www.ravela.online${p}` })),
    ...blogPosts.map((p) => ({
      url: `https://www.ravela.online/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
    })),
  ];
}
