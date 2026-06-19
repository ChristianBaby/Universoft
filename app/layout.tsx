import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Universoft Systems | Desarrollo de Software a Medida",
    template: "%s | Universoft Systems",
  },
  description:
    "Desarrollamos software a medida, plataformas virtuales, sitios informativos, telecomunicaciones y ciberseguridad para empresas en Perú.",
  keywords: [
    "desarrollo de software",
    "plataformas virtuales",
    "ciberseguridad",
    "telecomunicaciones",
    "Cusco",
    "Perú",
  ],
  authors: [{ name: "Universoft Systems" }],
  creator: "Universoft Systems",
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "Universoft Systems",
    title: "Universoft Systems | Desarrollo de Software a Medida",
    description:
      "Soluciones tecnológicas confiables para empresas: plataformas, web, telecomunicaciones y ciberseguridad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universoft Systems | Desarrollo de Software a Medida",
    description:
      "Soluciones tecnológicas confiables para empresas: plataformas, web, telecomunicaciones y ciberseguridad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
