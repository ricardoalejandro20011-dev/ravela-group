import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { FAQ } from "@/components/sections/faq";
import { CONTACTO } from "@/lib/constants/contacto";
export const metadata: Metadata = {
  alternates: { canonical: "/contacto" },
  title: "Hablemos de tu siguiente sistema | Ravela Group",
  description:
    "Cuéntanos cómo funciona tu operación. Identificamos qué conviene automatizar, integrar o construir. Diagnóstico inicial gratuito.",
};
export default function Contact() {
  return (
    <>
      <section className="page-intro">
        <Container>
          <div className="contact-layout">
            <div>
              <p className="eyebrow">Hablemos de tu operación</p>
              <h1 className="display-title mt-5">
                El siguiente paso empieza aquí.
              </h1>
              <p className="intro-copy mt-6">
                No necesitas llegar con una solución definida. Cuéntanos qué
                hace hoy tu equipo y qué te gustaría mejorar.
              </p>
              <div className="contact-channels">
                <a href={`mailto:${CONTACTO.email}`}>
                  <span>
                    Correo
                    <br />
                    <strong className="font-medium">{CONTACTO.email}</strong>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a href={CONTACTO.whatsappUrl}>
                  <span>
                    WhatsApp
                    <br />
                    <strong className="font-medium">
                      {CONTACTO.telefonoDisplay}
                    </strong>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a href={`tel:${CONTACTO.telefonoE164}`}>
                  <span>Llamar a Ravela</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <p className="mt-6 text-xs leading-6 text-cloud/70">
                Diagnóstico inicial sin costo · Atención en México
              </p>
              <Link href="/diagnostico" className="text-link mt-5">
                Prefiero empezar con el diagnóstico guiado ↗
              </Link>
            </div>
            <div className="rounded-3xl bg-[#e4eadd] p-3 sm:p-5">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
      <FAQ />
    </>
  );
}
