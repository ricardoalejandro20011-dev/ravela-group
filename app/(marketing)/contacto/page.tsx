import { Mail, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CONTACTO } from "@/lib/constants/contacto";

export const metadata: Metadata = {
  title: "Contacto — Ravela Group",
  description:
    "Habla con Ravela Group. Cuéntanos sobre tu empresa y te ayudamos a identificar por dónde empezar a automatizar.",
};

const canales = [
  {
    icon: Phone,
    label: "Teléfono",
    value: CONTACTO.telefonoDisplay,
    href: `tel:${CONTACTO.telefonoE164}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACTO.telefonoDisplay,
    href: CONTACTO.whatsappUrl,
  },
  {
    icon: Mail,
    label: "Correo",
    value: CONTACTO.email,
    href: `mailto:${CONTACTO.email}`,
  },
];

export default function ContactoPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-cloud sm:text-5xl">
            Habla con Ravela Group
          </h1>
          <p className="mt-4 text-lg text-cloud/70">
            Cuéntanos sobre tu empresa. Te ayudamos a identificar por dónde empezar.
          </p>
        </FadeIn>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          <FadeIn className="flex flex-col gap-4">
            {canales.map((canal) => (
              <a
                key={canal.label}
                href={canal.href}
                target={canal.href.startsWith("http") ? "_blank" : undefined}
                rel={canal.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass flex items-center gap-4 rounded-xl px-5 py-4 transition-colors hover:border-cloud/25"
              >
                <span className="gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                  <canal.icon className="h-5 w-5 text-cloud" />
                </span>
                <span>
                  <span className="block text-xs text-cloud/50">{canal.label}</span>
                  <span className="block text-sm font-medium text-cloud">{canal.value}</span>
                </span>
              </a>
            ))}
            <p className="mt-2 text-sm leading-relaxed text-cloud/50">
              ¿Prefieres un diagnóstico guiado antes de hablar con nosotros? Prueba{" "}
              <a href="/diagnostico" className="text-soft-cyan hover:underline">
                Ravela Intelligence™
              </a>
              .
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
