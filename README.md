# AXG · Portafolio de Agencia

Sitio web one-page para **AXG**, agencia de desarrollo a medida.
Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Prisma · Supabase (Postgres) · Zod**.

## ✨ Características

- One-page con secciones: Hero (100vh), Servicios, Proyectos, Cotización, Footer.
- **Dark mode** premium con paleta violeta/cyan (ver [`GUIA_ESTILO_AXG.md`](./GUIA_ESTILO_AXG.md)).
- **Galería dinámica** de proyectos servida desde Supabase vía Prisma (con fallback elegante si no hay datos).
- **Formulario de cotización** con validación cliente + servidor (Zod) que guarda en la tabla `prospectos`.
- 100% **mobile-first**, optimizado para Lighthouse.
- API Routes: `GET /api/projects`, `POST /api/prospects`.

---

## 🚀 Puesta en marcha

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

1. Copia `.env.example` y renómbralo a **`.env`** en la raíz del proyecto.
2. Ve a tu **dashboard de Supabase** → `Project Settings` → `Database` → `Connection string`.
3. Copia las dos URLs (pooled y direct) y reemplaza los valores en `.env`:

```env
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres"
```

> 📍 **¿Dónde poner el archivo `.env`?**
> En la **raíz del proyecto**, al mismo nivel que `package.json`. Está en `.gitignore`, **nunca lo subas a git**.

### 3. Crear las tablas en Supabase

```bash
npx prisma db push
```

Esto crea automáticamente las tablas `proyectos` y `prospectos` siguiendo el schema en `prisma/schema.prisma`.

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Estructura

```
.
├── prisma/
│   └── schema.prisma          # Modelos: Proyecto, Prospecto
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── projects/route.ts    # GET proyectos
│   │   │   └── prospects/route.ts   # POST prospectos (con Zod)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                  # Home (Server Component)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── QuoteForm.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── prisma.ts                 # Singleton de Prisma
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── .env.example
├── GUIA_ESTILO_AXG.md
└── README.md
```

---

## 📝 Cargar proyectos a la galería

Tienes 3 opciones:

**Opción A · Prisma Studio (más fácil):**
```bash
npm run db:studio
```
Abre el panel visual y agrega filas a la tabla `proyectos`.

**Opción B · Supabase Table Editor:**
Entra a tu dashboard de Supabase → `Table Editor` → `proyectos` → `Insert row`.

**Opción C · SQL directo en Supabase:**
```sql
insert into proyectos (id, titulo, descripcion, imagen, enlace, destacado)
values (gen_random_uuid()::text, 'Mi Proyecto', 'Descripción breve', 'https://url-imagen.jpg', 'https://proyecto.com', true);
```

> Mientras la tabla esté vacía, el sitio muestra **6 proyectos de ejemplo** con imágenes de Unsplash.

---

## 📜 Scripts

| Comando | Acción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (genera Prisma Client + Next) |
| `npm run start` | Servir build |
| `npm run db:push` | Sincroniza schema Prisma con Supabase |
| `npm run db:studio` | Abre Prisma Studio |

---

## 🎨 Diseño

Toda la justificación visual (paleta, tipografías, principios) está en [`GUIA_ESTILO_AXG.md`](./GUIA_ESTILO_AXG.md). Es el documento que puedes compartir con clientes para explicar las decisiones de diseño.

---

## 🚢 Deploy

Recomendado: **Vercel**.

1. Sube el repo a GitHub.
2. Importa en Vercel.
3. Añade `DATABASE_URL` y `DIRECT_URL` en `Settings → Environment Variables`.
4. Deploy.

---

© AXG. Construido con cariño y código a medida.
# axg-portafolio
# axg-portafolio
