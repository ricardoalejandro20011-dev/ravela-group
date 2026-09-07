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
  /** Sector demostrativo o nombre autorizado del cliente. */
  cliente: string;
  /** Solo para casos reales con autorización. */
  responsable?: string;
  title: string;
  industria: string;
  problema: string;
  solucion: string;
  resultado: string;
  pilarRelacionado: Pilar;
  /** La publicación como caso real requiere autorización explícita. */
  type: "demonstrative" | "real";
  authorized?: boolean;
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
