"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { href: "/soluciones", label: "Soluciones" },
  { href: "/diagnostico", label: "Ravela Intelligence™" },
  { href: "/casos-de-exito", label: "Casos de éxito" },
  { href: "/recursos", label: "Recursos" },
  { href: "/nosotros", label: "Nosotros" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cloud/10 bg-deep-space/80 backdrop-blur-lg">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cloud/75 transition-colors hover:text-cloud"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contacto" size="sm">
            Habla con Ravela Group
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-cloud lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <nav
          className="border-t border-cloud/10 bg-deep-space px-6 py-4 lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-cloud/85 hover:bg-cloud/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contacto" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Habla con Ravela Group
          </Button>
        </nav>
      )}
    </header>
  );
}
