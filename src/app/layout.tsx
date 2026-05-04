import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AXG · Agencia de Desarrollo Web a Medida",
  description:
    "Transformamos negocios con tecnología a medida. Diseño web, e-commerce, apps y sistemas de captura de prospectos de alto impacto.",
  keywords: [
    "AXG",
    "agencia desarrollo web",
    "next.js",
    "e-commerce",
    "apps a medida",
    "captura de prospectos",
  ],
  openGraph: {
    title: "AXG · Agencia de Desarrollo Web",
    description:
      "Transformamos negocios con tecnología a medida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
