import Image from "next/image";
import { Container, Section } from "@/components/ui/container";
import { hasPublicAsset } from "@/lib/assets";
const photo = "/founder/ricardo-valdez.jpg";
export function FounderSection() {
  const hasPhoto = hasPublicAsset(photo);
  return (
    <Section>
      <Container>
        <div
          className={`grid gap-10 ${hasPhoto ? "lg:grid-cols-[.65fr_1fr]" : "lg:grid-cols-[1fr_.7fr]"}`}
        >
          {hasPhoto && (
            <div className="flex min-h-80 items-center justify-center rounded-xl border bg-[#f2f4ef] p-5 sm:p-7">
              <Image
                src={photo}
                alt="Ricardo Valdez, fundador de Ravela Group"
                width={400}
                height={400}
                sizes="(max-width: 640px) 280px, 400px"
                className="h-auto w-full max-w-[400px] rounded-lg"
              />
            </div>
          )}
          <div className="self-center">
            <p className="eyebrow">La persona detrás de Ravela</p>
            <h2 className="section-title mt-4">Ricardo Valdez</h2>
            <p className="mt-3 text-sm font-medium text-soft-cyan">
              Fundador, Ravela Group
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cloud/80">
              Perfil enfocado en conectar negocio y tecnología mediante
              soluciones de datos, automatización e Inteligencia Artificial.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-cloud/75">
              Entender el proceso, elegir las herramientas y llevar la solución
              a la operación. Ese criterio guía tanto el trabajo con empresas
              como el desarrollo de productos propios.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                "Automatización",
                "IA",
                "Datos",
                "Operaciones",
                "Supply Chain",
                "Soluciones empresariales",
              ].map((t) => (
                <li className="rounded-full border px-3 py-2 text-xs" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {!hasPhoto && (
            <div className="self-center border-l-2 border-soft-cyan pl-7">
              <p className="eyebrow">Nuestro punto de partida</p>
              <p className="mt-5 text-2xl font-medium leading-relaxed tracking-tight">
                Entender el negocio.
                <br />
                Saber cómo construirlo.
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
