import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { FAQ } from "@/components/sections/faq";
import { CONTACTO } from "@/lib/constants/contacto";
export const metadata: Metadata = {
  alternates: { canonical: "/contacto" },
  title: "Cotiza ahora tu proyecto | Ravela Group",
  description:
    "Solicita una cotización de automatización, IA, datos o software. Cuéntanos el alcance, las integraciones y los tiempos de tu proyecto.",
};
export default function Contact() {
  return (
    <>
      <section className="page-intro">
        <Container>
          <div className="contact-layout">
            <div>
              <p className="eyebrow">De tu idea a una propuesta</p>
              <h1 className="display-title mt-5">
                Cotiza ahora tu proyecto.
              </h1>
              <p className="intro-copy mt-6">
                Cuéntanos qué quieres construir o mejorar. Con los datos de tu
                operación prepararemos una propuesta de alcance, inversión y tiempos.
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
                Solicitud sin compromiso · Cotización en MXN
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
