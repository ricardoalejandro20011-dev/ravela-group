import { CONTACTO } from "@/lib/constants/contacto";
import { Analytics } from "@/components/layout/analytics";
import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";
import "./redesign.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ravela.online"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Ravela Group",
    title: "Tecnología, datos e Inteligencia Artificial | Ravela Group",
    description: "Convertimos procesos complejos en sistemas que funcionan.",
  },
  twitter: { card: "summary_large_image" },
  title: "Consultoría tecnológica en México | Ravela Group",
  description:
    "Consultoría tecnológica boutique en México. Automatización, IA, datos, Machine Learning, integración cloud y software para conectar operaciones y mejorar decisiones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${geist.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-deep-space font-sans text-cloud antialiased">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:p-4">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ravela Group",
              url: "https://www.ravela.online",
              description:
                "Consultoría en tecnología, datos e Inteligencia Artificial para empresas mexicanas",
              founder: { "@type": "Person", name: "Ricardo Valdez" },
              areaServed: "México",
              email: CONTACTO.email,
              telephone: CONTACTO.telefonoE164,
              department: [
                {
                  "@type": "Organization",
                  name: "Ravela Solutions",
                  url: "https://www.ravela.online/soluciones",
                },
                {
                  "@type": "Organization",
                  name: "Ravela Labs",
                  url: "https://www.ravela.online/labs",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
