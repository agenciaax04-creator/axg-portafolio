import { Layout, ShoppingBag, Smartphone, MagnetIcon } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Diseño y Maquetación",
    desc: "Sitios institucionales y landing pages con diseño high-end, optimizadas para velocidad, SEO y conversión.",
    bullets: ["UI/UX a medida", "Mobile-first", "Animaciones sutiles"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Tiendas online robustas con pasarelas de pago, gestión de inventario y panel administrativo simple.",
    bullets: ["Stripe / MercadoPago", "Carrito optimizado", "Panel admin"],
  },
  {
    icon: Smartphone,
    title: "Desarrollo de Apps",
    desc: "Aplicaciones web y móviles a medida con arquitectura escalable y experiencias fluidas.",
    bullets: ["Next.js / React Native", "APIs seguras", "Tiempo real"],
  },
  {
    icon: MagnetIcon,
    title: "Captura de Prospectos",
    desc: "Sistemas que convierten visitas en clientes: formularios inteligentes, CRM ligero y automatización.",
    bullets: ["Formularios validados", "Integración CRM", "Email automático"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding relative">
      <div className="container-axg">
        <div className="max-w-2xl">
          <span className="eyebrow">Servicios</span>
          <h2 className="heading-lg mt-4">
            Todo lo que necesitas para{" "}
            <span className="gradient-text">crecer online</span>.
          </h2>
          <p className="mt-4 text-muted">
            Combinamos diseño estratégico y desarrollo a medida para construir
            productos digitales que generan resultados medibles.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, bullets }) => (
            <article key={title} className="card-axg group p-6">
              <div className="mb-5 inline-flex rounded-xl border border-border bg-elevated p-3 transition-colors group-hover:border-primary/60">
                <Icon size={22} className="text-primary group-hover:text-primary-hover" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              <ul className="mt-5 space-y-2 text-xs text-muted">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
