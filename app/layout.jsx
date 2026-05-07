import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Agencia AX | Desarrollo Web a Medida",
  description:
    "Agencia AX transforma negocios con código a medida: diseño, e-commerce y desarrollo de apps de alto rendimiento.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased text-white selection:bg-ax-gold/40">
        {children}
      </body>
    </html>
  );
}
