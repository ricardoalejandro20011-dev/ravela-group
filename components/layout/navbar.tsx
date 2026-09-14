"use client";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
const navLinks = [
  { href: "/soluciones", label: "Soluciones" },
  { href: "/casos-de-exito", label: "Casos" },
  { href: "/labs", label: "Labs" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Perspectivas" },
];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    if (sentinel.current) observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, []);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() {
    dialog.current?.close();
  }
  useEffect(() => {
    const media = matchMedia("(min-width: 1024px)");
    const changed = () => {
      if (media.matches) dialog.current?.close();
    };
    media.addEventListener("change", changed);
    return () => {
      media.removeEventListener("change", changed);
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
      <div ref={sentinel} className="h-px" aria-hidden="true" />
      <header className="site-header" data-scrolled={scrolled}>
        <Container className="flex h-16 items-center justify-between lg:h-18">
          <Link href="/" className="mr-2 shrink-0">
            <Logo compact />
          </Link>
          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm font-medium text-cloud/75 transition-colors hover:text-cloud"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto mr-3 hidden sm:block lg:ml-0 lg:mr-0">
            <Button href="/contacto" size="sm">
              Diagnóstico gratuito
            </Button>
          </div>
          <button
            ref={trigger}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-cloud lg:hidden"
            aria-label="Abrir menú"
            aria-haspopup="dialog"
            aria-controls="menu-movil"
            onClick={() => {
              dialog.current?.showModal();
              document.body.style.overflow = "hidden";
            }}
          >
            <Menu className="h-6 w-6" />
          </button>
        </Container>
        <dialog
          ref={dialog}
          id="menu-movil"
          className="mobile-drawer"
          aria-labelledby="menu-title"
          onKeyDown={(e) => {
            if (e.key !== "Tab") return;
            const controls = e.currentTarget.querySelectorAll<HTMLElement>(
              "a[href], button:not([disabled])",
            );
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last?.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first?.focus();
            }
          }}
          onClose={() => {
            document.body.style.overflow = "";
            trigger.current?.focus();
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              const box = e.currentTarget.getBoundingClientRect();
              if (
                e.clientX < box.left ||
                e.clientX > box.right ||
                e.clientY < box.top ||
                e.clientY > box.bottom
              )
                close();
            }
          }}
        >
          <div className="flex items-center justify-between border-b pb-5">
            <p id="menu-title" className="eyebrow">
              Explora Ravela
            </p>
            <button
              autoFocus
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-lg border"
              aria-label="Cerrar menú"
              onClick={close}
            >
              <X size={22} />
            </button>
          </div>
          <nav aria-label="Navegación móvil" className="mt-6">
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-16 items-center justify-between gap-4 border-b py-4 text-lg font-medium"
                    onClick={close}
                  >
                    <span>
                      <span className="mr-4 text-xs text-cloud/70">
                        0{i + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowUpRight size={18} />
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/contacto" className="mt-8 w-full" onClick={close}>
              Diagnóstico gratuito
            </Button>
          </nav>
          <p className="mt-6 text-xs leading-6 text-cloud/70">
            Tecnología para que tu operación avance.
          </p>
        </dialog>
      </header>
    </>
  );
}
