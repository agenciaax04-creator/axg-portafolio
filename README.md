Agencia AX - Portafolio (Astro + Tailwind)
==========================================

Stack
-----
- Astro 5 (output estático, cero JS por defecto)
- Tailwind CSS 3 (vía @astrojs/tailwind)
- Tipografía: Inter (UI) + Space Grotesk (display) cargadas desde Google Fonts
- Sin librerías de animación: cero efectos de fade-out al hacer scroll

Paleta de marca (Tailwind: ax.*)
--------------------------------
- ax.void     #05070d   Fondo más profundo
- ax.deep     #0a0f1f   Fondo intermedio
- ax.gold     #D59F0F   Acento principal (CTA, destellos)
- ax.goldSoft #E8B838   Hover dorado
- ax.blue     #003D64   Tarjetas / secciones
- ax.blueHi   #2B338C   Contraste alto

Comandos
--------
1) Instalar dependencias:
   npm install

2) Entorno de desarrollo:
   npm run dev
   Abre http://localhost:4321

3) Build de producción (genera /dist):
   npm run build

4) Preview del build:
   npm run preview

Estructura actual
-----------------
src/
  styles/
    global.css           Tailwind + fondo galaxia (sólido) + reglas anti-fade
  layouts/
    Layout.astro         <html>, <head> con fuentes y meta, slot principal
  components/
    Navbar.astro         Header fijo, mobile-first, CTA dorado
    Hero.astro           Sección 100vh, sin scroll innecesario
    LogoMark.astro       Placeholder del isotipo "AX" entrelazado
  pages/
    index.astro          Single page que ensambla Navbar + Hero (+ secciones)
astro.config.mjs         Integración Tailwind
tailwind.config.mjs      Tokens de marca, sombras y gradiente "ax-galaxy"

Notas de UI/UX aplicadas
------------------------
- Cero desvanecimientos: en globals.css se anula cualquier `mask-image`
  que pueda inducir fade-out en scroll. Los elementos permanecen 100% sólidos.
- Mobile-first: todos los componentes parten de tamaños pequeños y
  escalan en sm/md/lg. El Hero usa h-screen + min-h-[100svh] para evitar
  saltos en navegadores móviles con barra dinámica.
- Branding: `src/components/LogoMark.astro` reserva el espacio del isotipo
  con letras "A" y "X" entrelazadas. Para reemplazarlo por tu SVG final,
  sustituye el contenido <svg> por tu archivo definitivo o por
  <img src="/logo.svg" alt="Agencia AX" />.

Despliegue en Vercel
--------------------
Vercel detecta Astro automáticamente. No requiere adapter para sitio estático.
- Framework Preset: Astro
- Build Command:    npm run build
- Output Directory: dist
- Root Directory:   (vacío, raíz del repo)

Próximos pasos sugeridos
------------------------
- src/components/Services.astro   Grid de servicios (Diseño, E-commerce, Apps)
- src/components/Projects.astro   Galería de tarjetas con capturas
- src/components/Contact.astro    Formulario con focus dorado en inputs
- src/components/Footer.astro     Enlaces minimalistas
