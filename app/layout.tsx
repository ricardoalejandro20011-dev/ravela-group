import { Analytics } from "@/components/layout/analytics";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

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
    title: "Automatización e IA para PYMEs | Ravela Group",
    description:
      "Convertimos procesos manuales en sistemas que trabajan solos.",
  },
  twitter: { card: "summary_large_image" },
  title: "Automatización e IA para PYMEs en México | Ravela Group",
  description:
    "Transformamos procesos manuales en operaciones inteligentes. Automatización, Inteligencia Artificial y datos para PYMEs mexicanas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={geist.variable}>
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
                "Automatización e Inteligencia Artificial para PYMEs mexicanas",
              founder: { "@type": "Person", name: "Ricardo Valdez" },
              areaServed: "México",
            }),
          }}
        />
      </body>
    </html>
  );
}
