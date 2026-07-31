import { Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { CONTACTO } from "@/lib/constants/contacto";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Soluciones",
    links: [
      { href: "/soluciones/automatizacion", label: "Automatización" },
      { href: "/soluciones/inteligencia-artificial", label: "Inteligencia Artificial" },
      { href: "/soluciones/datos-inteligencia", label: "Datos e Inteligencia" },
      { href: "/soluciones/transformacion-digital", label: "Transformación Digital" },
    ],
  },
  {
    title: "Ravela Group",
    links: [
      { href: "/diagnostico", label: "Ravela Intelligence™" },
      { href: "/calculadora-roi", label: "Calculadora de ROI" },
      { href: "/casos-de-exito", label: "Casos de éxito" },
      { href: "/nosotros", label: "Nosotros" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "/recursos", label: "Recursos" },
      { href: "/blog", label: "Blog" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-cloud/10 bg-midnight/40">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cloud/60">
              Transformamos procesos manuales en operaciones inteligentes para PYMEs
              mexicanas.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`tel:${CONTACTO.telefonoE164}`}
                className="flex items-center gap-2 text-sm text-cloud/60 transition-colors hover:text-cloud"
              >
                <Phone className="h-4 w-4" />
                {CONTACTO.telefonoDisplay}
              </a>
              <a
                href={`mailto:${CONTACTO.email}`}
                className="flex items-center gap-2 text-sm text-cloud/60 transition-colors hover:text-cloud"
              >
                <Mail className="h-4 w-4" />
                {CONTACTO.email}
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-heading text-sm font-semibold text-cloud">
                {column.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cloud/60 transition-colors hover:text-cloud"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cloud/10 pt-8 text-xs text-cloud/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ravela Group. Todos los derechos reservados.</p>
          <p>Intelligence. Automated. — Hecho en México.</p>
        </div>
      </Container>
    </footer>
  );
}
