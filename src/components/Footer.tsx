import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const social = [
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="container-axg py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-gradient font-display text-sm font-bold text-obsidian">
                AX
              </span>
              <span className="font-display text-xl font-semibold tracking-wide">
                AXG<span className="text-primary">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Agencia de desarrollo web a medida. Diseño high-end, ingeniería sólida y resultados medibles.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hola@axg.dev"
                  className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary-hover"
                >
                  <Mail size={14} /> hola@axg.dev
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-muted">
                <MapPin size={14} /> Remoto · LATAM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
              Síguenos
            </h4>
            <div className="flex items-center gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-elevated/60 text-muted transition-all duration-300 hover:border-primary hover:text-primary-hover hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AXG. Todos los derechos reservados.</p>
          <p>
            Construido con <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">Tailwind</span> y{" "}
            <span className="text-foreground">Supabase</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
