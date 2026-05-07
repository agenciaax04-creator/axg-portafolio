Agencia AX - Portafolio (Next.js + Tailwind)
============================================

Stack
-----
- Next.js 14 (App Router) en JavaScript (JSX)
- Tailwind CSS 3
- Tipografía: Inter (UI) + Space Grotesk (display) via next/font
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
   Abre http://localhost:3000

3) Build de producción:
   npm run build && npm run start

Estructura actual
-----------------
app/
  globals.css        Tailwind + fondo galaxia (sólido) + reglas anti-fade
  layout.jsx         Carga fuentes y aplica clases base
  page.jsx           Ensambla Navbar + Hero (siguiente: secciones restantes)
components/
  Navbar.jsx         Header fijo, mobile-first, CTA dorado
  Hero.jsx           Sección 100vh, sin scroll innecesario
  LogoMark.jsx       Placeholder del isotipo "AX" entrelazado
tailwind.config.js   Tokens de marca, sombras y gradiente "ax-galaxy"

Notas de UI/UX aplicadas
------------------------
- Cero desvanecimientos: en globals.css se anula cualquier `mask-image`
  que pueda inducir fade-out en scroll. Los elementos permanecen 100% sólidos.
- Mobile-first: todos los componentes parten de tamaños pequeños y
  escalan en sm/md/lg. El Hero usa h-screen + min-h-[100svh] para evitar
  saltos en navegadores móviles con barra dinámica.
- Branding: `components/LogoMark.jsx` reserva el espacio del isotipo
  con letras "A" y "X" entrelazadas. Para reemplazarlo por tu SVG final,
  sustituye el contenido <svg> por tu archivo definitivo o por
  <Image src="/logo.svg" ... />.

Próximos pasos sugeridos
------------------------
- components/Services.jsx   Grid de servicios (Diseño, E-commerce, Apps)
- components/Projects.jsx   Galería de tarjetas con capturas
- components/Contact.jsx    Formulario con focus dorado en inputs
- components/Footer.jsx     Enlaces minimalistas
