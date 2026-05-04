import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0F",
        surface: "#111118",
        elevated: "#16161F",
        border: "#1F1F2A",
        muted: "#A1A1AA",
        foreground: "#F4F4F5",
        primary: {
          DEFAULT: "#8B5CF6",
          hover: "#A78BFA",
        },
        accent: {
          DEFAULT: "#22D3EE",
          hover: "#67E8F9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(139,92,246,0.18), transparent 60%)",
        "accent-gradient":
          "linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
