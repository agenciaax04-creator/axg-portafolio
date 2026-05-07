/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marca Agencia AX
        ax: {
          // Fondo profundo tipo galaxia
          void: "#05070d",
          deep: "#0a0f1f",
          space: "#0d1430",
          // Acento dorado principal (CTA / destellos)
          gold: "#D59F0F",
          goldSoft: "#E8B838",
          // Azules de marca
          blue: "#003D64",
          blueHi: "#2B338C",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(213,159,15,0.35), 0 8px 30px -10px rgba(213,159,15,0.45)",
        goldGlow: "0 0 24px -6px rgba(213,159,15,0.55)",
      },
      backgroundImage: {
        "ax-galaxy":
          "radial-gradient(1200px 700px at 15% -10%, rgba(43,51,140,0.25), transparent 60%), radial-gradient(900px 600px at 90% 10%, rgba(0,61,100,0.30), transparent 65%), radial-gradient(700px 500px at 50% 110%, rgba(43,51,140,0.18), transparent 60%), linear-gradient(180deg, #05070d 0%, #0a0f1f 60%, #05070d 100%)",
      },
    },
  },
  plugins: [],
};
