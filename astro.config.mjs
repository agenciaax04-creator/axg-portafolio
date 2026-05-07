import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://agenciaax.com",
  // Cero JS por defecto. Si más adelante se necesita interactividad
  // (formulario con validación cliente), se agrega <script> inline en el componente.
  integrations: [
    tailwind({
      // Usamos nuestro propio archivo global con @tailwind directives.
      applyBaseStyles: false,
    }),
  ],
});
