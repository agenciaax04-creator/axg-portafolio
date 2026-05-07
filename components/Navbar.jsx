import Link from "next/link";
import LogoMark from "@/components/LogoMark";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        border-b border-white/5
        bg-ax-void/70 backdrop-blur-md
      "
    >
      <nav
        className="
          mx-auto max-w-7xl
          px-5 sm:px-8
          h-16 sm:h-20
          flex items-center justify-between
          gap-4
        "
        aria-label="Navegación principal"
      >
        {/* Marca: isotipo entrelazado + wordmark */}
        <Link
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Agencia AX - Inicio"
        >
          <LogoMark className="h-9 w-9 sm:h-10 sm:w-10" />
          <span className="font-display tracking-tightest text-lg sm:text-xl font-semibold">
            Agencia <span className="text-ax-gold">AX</span>
          </span>
        </Link>

        {/* Enlaces (desktop) */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="
                  text-sm text-white/75 hover:text-white
                  transition-colors
                "
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="
            inline-flex items-center justify-center
            h-10 sm:h-11 px-4 sm:px-5
            rounded-full
            text-sm font-medium
            bg-ax-gold text-ax-void
            hover:bg-ax-goldSoft
            shadow-goldGlow
            transition-colors
          "
        >
          Cotizar
        </a>
      </nav>
    </header>
  );
}
