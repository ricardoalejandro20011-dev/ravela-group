export type Pilar =
  | "automatizacion"
  | "inteligencia-artificial"
  | "datos-inteligencia"
  | "transformacion-digital";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  tags: string[];
  coverImage?: string;
  pilarRelacionado?: Pilar;
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientDisplayName: string;
  industry: string;
  real: true;
  authorizedName: boolean;
  summary: string;
  /** Empty until the real project details are confirmed. Never infer from a demo. */
  problem: string;
  solution: string;
  workflow?: string[];
  technologies?: string[];
  results?: { label: string; value: string; verified: boolean }[];
  heroImage?: string;
  heroImageAlt?: string;
  screenshots?: string[];
}

export type Moneda = "MXN";

export interface Paquete {
  id: "ravela-start" | "ravela-grow" | "ravela-ai" | "ravela-custom";
  nombre: string;
  precioDesdeMXN: number | null;
  moneda: Moneda;
  descripcion: string;
  idealPara: string;
  incluye: string[];
}
