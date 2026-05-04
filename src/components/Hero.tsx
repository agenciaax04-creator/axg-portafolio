import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-axg relative z-10 py-28 sm:py-32">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <span className="eyebrow">
            <Sparkles size={14} className="text-primary" />
            Agencia de desarrollo a medida
          </span>

          <h1 className="heading-xl mt-6">
            Transformamos negocios con{" "}
            <span className="gradient-text">tecnología a medida</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            En <strong className="text-foreground">AXG</strong> diseñamos y
            construimos productos digitales de alto impacto: sitios, tiendas y
            sistemas que convierten visitas en clientes y procesos en resultados.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cotizar" className="btn-primary">
              Cotizar mi proyecto <ArrowRight size={16} />
            </a>
            <a href="#proyectos" className="btn-ghost">
              Ver trabajos recientes
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-border/60 pt-8 text-left sm:gap-8">
            {[
              { k: "+30", v: "proyectos entregados" },
              { k: "100%", v: "código a medida" },
              { k: "<1s", v: "tiempo de carga" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {s.k}
                </div>
                <div className="text-xs text-muted sm:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
