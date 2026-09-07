import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/container";
import { CONTACTO } from "@/lib/constants/contacto";
export const metadata: Metadata = {
  title: "Aviso de privacidad | Ravela Group",
  description:
    "Información sobre los datos que compartes al solicitar un diagnóstico o contactar a Ravela Group.",
  alternates: { canonical: "/aviso-de-privacidad" },
};
export default function Privacidad() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="eyebrow">Tus datos</p>
        <h1 className="section-title mt-4">Aviso de privacidad</h1>
        <div className="mt-8 space-y-7 text-sm leading-7 text-cloud/80">
          <p>
            Ravela Group utiliza los datos que proporcionas en este sitio para
            atender tus solicitudes de contacto y diagnóstico. Puedes
            comunicarte sobre el tratamiento de tus datos a{" "}
            <a className="underline" href={`mailto:${CONTACTO.email}`}>
              {CONTACTO.email}
            </a>
            .
          </p>
          <section>
            <h2 className="text-lg font-medium text-cloud">
              Qué información recopilamos
            </h2>
            <p>
              Nombre, empresa, correo o WhatsApp y la descripción del proceso
              que deseas mejorar. En el diagnóstico también recopilamos tus
              respuestas sobre tareas, horas, herramientas y prioridades. No
              solicitamos datos sensibles; evita incluir información
              confidencial, contraseñas o documentos de terceros.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-cloud">
              Para qué la usamos
            </h2>
            <p>
              Para recibir y dar seguimiento a tu solicitud, generar una
              orientación inicial, coordinar una conversación y preparar una
              propuesta si la solicitas. El diagnóstico usa reglas de cálculo
              orientativas; no toma decisiones que produzcan efectos legales
              sobre ti. Este formulario no te suscribe a publicidad.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-cloud">
              Servicios que apoyan la operación
            </h2>
            <p>
              El sitio se aloja en Vercel. Utilizamos servicios de
              almacenamiento y notificación, como Supabase y Resend, para
              procesar las solicitudes cuando están configurados. Estos
              proveedores pueden procesar información fuera de México. Al abrir
              WhatsApp, también aplican sus propias condiciones y política de
              privacidad.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-cloud">
              Acceso, corrección y eliminación
            </h2>
            <p>
              Puedes solicitar acceso, rectificación, cancelación u oposición al
              tratamiento, revocar tu consentimiento o limitar el uso de tus
              datos escribiendo al correo de contacto. Indica tu solicitud y un
              medio para responderte. Si necesitamos verificar tu identidad, te
              explicaremos cómo hacerlo sin solicitar información innecesaria.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-cloud">
              Medición del sitio
            </h2>
            <p>
              El sitio registra eventos técnicos de interacción, como abrir una
              solución o usar la calculadora, sin incluir el contenido de los
              formularios en esos eventos. Esta versión no instala cookies
              publicitarias ni incorpora un proveedor externo de analítica.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-cloud">Actualizaciones</h2>
            <p>
              Cualquier cambio a este aviso se publicará en esta página. Última
              actualización: septiembre de 2026.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
