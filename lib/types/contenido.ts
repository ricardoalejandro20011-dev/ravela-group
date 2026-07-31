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
  /** Nombre de negocio ilustrativo (no un cliente real) usado como referencia. */
  cliente: string;
  title: string;
  industria: string;
  problema: string;
  solucion: string;
  resultado: string;
  pilarRelacionado: Pilar;
  /** Todos los casos actuales son ilustrativos: no se han inventado clientes reales. */
  esIlustrativo: true;
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
