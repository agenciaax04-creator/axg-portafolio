"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#cotizar", label: "Cotizar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-obsidian/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-axg flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient font-display text-sm font-bold text-obsidian">
            AX
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">
            AXG<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#cotizar" className="btn-primary hidden md:inline-flex">
          Hablemos
        </a>

        <button
          className="md:hidden rounded-lg border border-border bg-surface/60 p-2"
          aria-label="Menú"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-obsidian/95 backdrop-blur-xl">
          <ul className="container-axg flex flex-col gap-4 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-2 text-base text-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#cotizar"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Hablemos
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
