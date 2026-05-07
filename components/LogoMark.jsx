/**
 * LogoMark - Placeholder del isotipo de Agencia AX.
 *
 * Diseñado como contenedor cuadrado que simula letras "A" y "X"
 * físicamente entrelazadas. Cuando tengas el SVG definitivo del isotipo,
 * reemplaza el contenido interno por <Image src="/logo.svg" ... />
 * o por el <svg> exportado desde tu herramienta de diseño.
 *
 * Reglas: centrado, con buena respiración (padding interno),
 * trazo dorado sobre azul profundo de marca.
 */
export default function LogoMark({ className = "h-10 w-10" }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-xl bg-ax-blue/60 ring-1 ring-ax-gold/40 shadow-goldGlow ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        className="h-[68%] w-[68%]"
        fill="none"
        stroke="#D59F0F"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* "A" */}
        <path d="M10 38 L20 10 L30 38" />
        <path d="M14 28 L26 28" />
        {/* "X" entrelazada con la A */}
        <path d="M22 14 L40 38" />
        <path d="M40 14 L22 38" />
      </svg>
    </span>
  );
}
