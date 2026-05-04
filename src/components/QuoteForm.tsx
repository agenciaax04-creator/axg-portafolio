"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";

type FormState = {
  nombre: string;
  correo: string;
  telefono: string;
  servicio: string;
  mensaje: string;
};

const initial: FormState = {
  nombre: "",
  correo: "",
  telefono: "",
  servicio: "",
  mensaje: "",
};

const servicios = [
  "Diseño y Maquetación",
  "E-commerce",
  "Desarrollo de Apps",
  "Captura de Prospectos",
  "Otro",
];

export default function QuoteForm() {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (data.nombre.trim().length < 2) e.nombre = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo))
      e.correo = "Correo no válido.";
    if (data.mensaje.trim().length < 10)
      e.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k: keyof FormState, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/prospects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "No se pudo enviar.");
      }
      setStatus("ok");
      setData(initial);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido.");
    }
  };

  return (
    <section id="cotizar" className="section-padding relative">
      <div className="container-axg">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow">Cotización</span>
            <h2 className="heading-lg mt-4">
              Cuéntanos tu <span className="gradient-text">proyecto</span>.
            </h2>
            <p className="mt-4 text-muted">
              Respondemos en menos de 24 horas con una propuesta clara,
              transparente y a tu medida. Sin compromiso.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted">
              {[
                "Diagnóstico gratuito",
                "Propuesta detallada en 24h",
                "Tecnología moderna y escalable",
                "Soporte post-lanzamiento",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="card-axg lg:col-span-3 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Nombre completo"
                value={data.nombre}
                onChange={(v) => onChange("nombre", v)}
                error={errors.nombre}
                placeholder="María González"
                required
              />
              <Field
                label="Correo electrónico"
                type="email"
                value={data.correo}
                onChange={(v) => onChange("correo", v)}
                error={errors.correo}
                placeholder="maria@empresa.com"
                required
              />
              <Field
                label="Teléfono (opcional)"
                value={data.telefono}
                onChange={(v) => onChange("telefono", v)}
                placeholder="+52 55 0000 0000"
              />
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted">
                  Servicio de interés
                </label>
                <select
                  value={data.servicio}
                  onChange={(e) => onChange("servicio", e.target.value)}
                  className="w-full rounded-xl border border-border bg-elevated/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="">Selecciona…</option>
                  {servicios.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-xs font-medium text-muted">
                Mensaje <span className="text-primary">*</span>
              </label>
              <textarea
                value={data.mensaje}
                onChange={(e) => onChange("mensaje", e.target.value)}
                rows={5}
                placeholder="Cuéntanos sobre tu negocio y qué necesitas…"
                className={`w-full resize-none rounded-xl border bg-elevated/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary ${
                  errors.mensaje ? "border-red-500/60" : "border-border"
                }`}
              />
              {errors.mensaje && (
                <p className="mt-1 text-xs text-red-400">{errors.mensaje}</p>
              )}
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Enviando…
                  </>
                ) : (
                  <>
                    Enviar solicitud <Send size={16} />
                  </>
                )}
              </button>

              {status === "ok" && (
                <p className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle2 size={16} /> ¡Recibido! Te contactaremos pronto.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} /> {errorMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-elevated/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary ${
          error ? "border-red-500/60" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
