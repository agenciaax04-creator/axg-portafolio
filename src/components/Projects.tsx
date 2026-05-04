import { ArrowUpRight } from "lucide-react";

type Proyecto = {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  enlace: string;
};

const fallback: Proyecto[] = [
  {
    id: "demo-1",
    titulo: "Plataforma E-commerce",
    descripcion: "Tienda online con catálogo dinámico y pasarela de pago integrada.",
    imagen:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=70",
    enlace: "#",
  },
  {
    id: "demo-2",
    titulo: "Dashboard SaaS",
    descripcion: "Panel administrativo con métricas en tiempo real y multiusuario.",
    imagen:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    enlace: "#",
  },
  {
    id: "demo-3",
    titulo: "Landing de Captura",
    descripcion: "Sistema de captura de prospectos con A/B testing y CRM integrado.",
    imagen:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
    enlace: "#",
  },
  {
    id: "demo-4",
    titulo: "App de Reservas",
    descripcion: "Aplicación web para gestión de citas con notificaciones automáticas.",
    imagen:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=70",
    enlace: "#",
  },
  {
    id: "demo-5",
    titulo: "Sitio Corporativo",
    descripcion: "Web institucional con CMS headless y blog optimizado para SEO.",
    imagen:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=70",
    enlace: "#",
  },
  {
    id: "demo-6",
    titulo: "Marketplace B2B",
    descripcion: "Plataforma de conexión entre proveedores y compradores con chat.",
    imagen:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70",
    enlace: "#",
  },
];

export default function Projects({ proyectos }: { proyectos: Proyecto[] }) {
  const items = proyectos.length > 0 ? proyectos : fallback;
  const isFallback = proyectos.length === 0;

  return (
    <section id="proyectos" className="section-padding relative">
      <div className="container-axg">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Proyectos</span>
            <h2 className="heading-lg mt-4">
              Trabajos que <span className="gradient-text">hablan por sí solos</span>.
            </h2>
            <p className="mt-4 text-muted">
              Una selección de proyectos donde combinamos diseño, ingeniería y estrategia.
            </p>
          </div>
          {isFallback && (
            <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted">
              Mostrando ejemplos · agrega proyectos en Supabase
            </span>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <a
              key={p.id}
              href={p.enlace || "#"}
              target={p.enlace?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card-axg group overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imagen}
                  alt={p.titulo}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-obsidian/70 text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-obsidian">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.titulo}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{p.descripcion}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
