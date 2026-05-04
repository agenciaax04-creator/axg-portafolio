# Guía de Estilo · AXG

> Sistema de diseño y lenguaje visual para el portafolio y comunicaciones de **AXG — Agencia de Desarrollo Web**.

Este documento describe la **paleta de colores**, **tipografía**, **principios de diseño** y la **justificación estratégica** detrás de cada decisión, para que el equipo y los clientes comprendan cómo se construye la identidad de AXG.

---

## 1. Filosofía de Diseño

> **High-end, minimalista, técnico.**

AXG se posiciona como una agencia premium para clientes que buscan tecnología a medida. El diseño comunica tres valores:

- **Confianza técnica** — superficies oscuras, jerarquías claras y datos cuantificables.
- **Sofisticación** — tipografía display, mucho aire negativo y micro-interacciones sutiles.
- **Velocidad** — composiciones simples, una sola página, sin scroll innecesario.

La estética está inspirada en agencias y productos como Linear, Vercel, Stripe y Framer: producto digital de alta gama, accesible y enfocado en performance.

---

## 2. Paleta de Colores

### 2.1 Colores base (Dark Mode)

| Rol | Nombre | HEX | Uso |
| --- | --- | --- | --- |
| Fondo principal | **Obsidian** | `#0A0A0F` | Fondo global del sitio. Casi negro con un matiz violeta para profundidad. |
| Superficie | **Surface** | `#111118` | Tarjetas, navbar y secciones elevadas. |
| Superficie elevada | **Elevated** | `#16161F` | Inputs, hovers y contenedores anidados. |
| Borde | **Border** | `#1F1F2A` | Líneas divisorias y contornos sutiles. |
| Texto principal | **Foreground** | `#F4F4F5` | Texto y títulos. Blanco roto, no puro, para reducir fatiga visual. |
| Texto secundario | **Muted** | `#A1A1AA` | Descripciones, metadatos y placeholders. |

### 2.2 Acentos vibrantes

| Rol | Nombre | HEX | Uso |
| --- | --- | --- | --- |
| Primario | **Violet 500** | `#8B5CF6` | CTAs, énfasis, foco activo. |
| Primario hover | **Violet 400** | `#A78BFA` | Estado hover del primario. |
| Secundario | **Cyan 400** | `#22D3EE` | Acento técnico, íconos de check, gradientes. |
| Secundario hover | **Cyan 300** | `#67E8F9` | Estado hover del secundario. |
| Gradiente firma | **Accent Gradient** | `linear-gradient(135deg, #8B5CF6 → #22D3EE)` | Botones primarios, texto destacado y logo. |

### 2.3 Estados

| Rol | HEX | Uso |
| --- | --- | --- |
| Error | `#EF4444` (red-500) | Validación de formularios. |
| Éxito | `#22D3EE` (accent) | Confirmaciones (reusamos el cyan para mantener identidad). |

### Justificación de la paleta

- **Dark mode** comunica producto técnico, premium y nocturno (industria tech). Reduce fatiga visual en sesiones largas.
- **Violet → Cyan** es un gradiente moderno asociado a innovación y desarrollo (lo usan Vercel, Linear, Stripe Sigma). Da personalidad sin caer en el saturado.
- Los grises tienen un **leve tinte azul-violeta** (no neutros puros) para que toda la interfaz se sienta cohesionada con el acento.

---

## 3. Tipografía

| Rol | Fuente | Origen | Pesos | Uso |
| --- | --- | --- | --- | --- |
| Display / Titulares | **Space Grotesk** | Google Fonts | 600, 700 | H1, H2, H3, números grandes, logo. |
| Cuerpo / UI | **Inter** | Google Fonts | 400, 500, 600 | Párrafos, botones, labels, navegación. |

### Jerarquía y escalas (mobile-first)

| Estilo | Mobile | Desktop | Tracking |
| --- | --- | --- | --- |
| `heading-xl` (Hero) | 36 px | 60 px | tight |
| `heading-lg` (Sección) | 30 px | 48 px | tight |
| `h3` (Tarjetas) | 18 px | 18 px | normal |
| Cuerpo | 14–16 px | 16–18 px | normal |
| Eyebrow | 12 px | 12 px | widest, uppercase |

### Justificación tipográfica

- **Space Grotesk** aporta carácter geométrico y técnico sin ser frío; ideal para una agencia de tecnología.
- **Inter** es el estándar de UI moderna: óptima legibilidad en cualquier tamaño y soporte completo de español (acentos, ñ).
- La **combinación display + sans humanista** da contraste visual entre titulares y cuerpo, una técnica común en marcas premium.

---

## 4. Principios de Layout

- **Mobile-first**: cada componente se diseña primero a 375 px y se escala. Breakpoints Tailwind: `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
- **Container** máximo de `1280 px` (`max-w-7xl`) con padding lateral progresivo (20 → 32 → 48 px).
- **Grid de 12 columnas implícito** vía Tailwind, con grids de 1/2/3/4 columnas según sección.
- **Espacio negativo abundante**: secciones a `py-24` mobile y `py-32` desktop para respiración visual.
- **Hero a 100 vh exactos** — sin scroll innecesario, decisión deliberada de UX.

---

## 5. Componentes y Micro-interacciones

| Componente | Estado base | Hover | Justificación |
| --- | --- | --- | --- |
| **btn-primary** | Gradiente violet→cyan, sombra suave | `translate-y-[-2px]`, sombra más intensa | Refuerza "click" táctil sin animaciones estridentes. |
| **btn-ghost** | Borde + blur | Borde violeta, texto violeta | Acción secundaria, no compite con el CTA. |
| **card** | Borde tenue, fondo translúcido | Borde violeta, leve elevación, sombra violeta | Comunica que es interactivo. |
| **link/icon social** | Círculo gris | Borde violeta + lift | Consistencia con cards. |

Todas las transiciones usan **300–700 ms** con `ease-out`. Nada estridente: la sutileza es parte del lujo.

---

## 6. Iconografía

- Set único: **Lucide Icons** (open source, estilo lineal, 1.5 px stroke).
- Tamaño base 14–22 px.
- Color: heredan `currentColor` para integrarse con cualquier estado.

---

## 7. Imágenes y Proyectos

- Aspect ratio `16:10` para todas las miniaturas de proyectos (consistencia visual del grid).
- Overlay degradado desde el fondo para integrar la imagen al dark mode.
- `loading="lazy"` siempre.
- En hover: `scale-105` con `duration-700` para un movimiento "cinematográfico".

---

## 8. Accesibilidad

- Contraste WCAG AA mínimo en todos los textos sobre fondo (Foreground sobre Obsidian = 17:1).
- Estados `:focus` visibles con borde violeta.
- `prefers-reduced-motion` respetado por las animaciones de Tailwind (transiciones cortas y opcionales).
- `aria-label` en íconos sociales y botón de menú móvil.

---

## 9. Tono de Voz

- **Directo, profesional, sin tecnicismos innecesarios.**
- Frases cortas, primera persona del plural ("transformamos", "construimos").
- Énfasis en **resultados de negocio**, no en stack técnico (eso va en otro layer).

Ejemplos:
- ✅ "Transformamos negocios con tecnología a medida."
- ❌ "Aplicaciones full-stack con arquitectura de microservicios desacoplada."

---

## 10. Resumen para Cliente (1 línea por punto)

1. Identidad **dark, premium y técnica**.
2. Acento de marca: **gradiente violeta → cyan**.
3. Tipografías Google: **Space Grotesk** (titulares) + **Inter** (UI).
4. Animaciones **sutiles**, nunca distractoras.
5. **Mobile-first**, optimizado para velocidad y conversión.

---

_Última actualización: documento vivo. Cualquier cambio debe pasar por aprobación de diseño y reflejarse en `tailwind.config.ts` y `globals.css`._
