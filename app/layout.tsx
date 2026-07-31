import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ravela Group — Intelligence. Automated.",
  description:
    "Transformamos procesos manuales en operaciones inteligentes. Automatización, Inteligencia Artificial y datos para PYMEs mexicanas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="flex min-h-screen flex-col bg-deep-space font-sans text-cloud antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
