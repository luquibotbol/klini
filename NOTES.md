# Klini — Notas de mantenimiento

Bitácora de decisiones y modificaciones del proyecto. Sirve para entender
por qué las cosas están como están y cómo arreglarlas si algo se rompe.

> ⚠️ Los valores de secretos NO van en este archivo (se commitea a git).
> Los valores reales viven en `.env.local` (local, git-ignored) y en el
> dashboard de Cloudflare.

---

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind v4** instalado, pero la landing usa CSS propio (`app/globals.css`)
- Fuentes vía `next/font`: DM Sans (body), Plus Jakarta Sans (headings), JetBrains Mono (mono)
- Deploy en **Cloudflare Workers**
- Repo: `git@github.com:luquibotbol/klini.git`

## Estructura

- `app/page.tsx` — arma las 13 secciones
- `app/components/` — un componente por sección (Nav, Hero, ChatMock, etc.)
- `app/actions.ts` — server action `submitLead` (procesa el formulario)
- `app/globals.css` — tokens de diseño + todos los estilos
- `app/icon.png` — favicon (la "k" circular)
- `public/assets/` — logos y screenshots
- `public/llms.txt` — descripción para LLMs / SEO

---

## Formulario de leads — cómo funciona

- Hay 2 formularios:
  - **Hero**: solo valida el email y hace scroll al form de abajo. No envía nada.
  - **CTA final** (`#demo`, componente `CTAFinal.tsx`): el real.
- `CTAFinal` usa el server action `submitLead` (`app/actions.ts`).
- `submitLead`:
  1. Chequea el honeypot (campo invisible `website`).
  2. Valida los campos.
  3. Verifica el token de Turnstile (si `TURNSTILE_SECRET_KEY` está seteada).
  4. POSTea el lead a `LEAD_WEBHOOK_URL` (con el campo `secret`).
- El destino del lead es un **Google Apps Script** (ver abajo) que agrega
  una fila a una planilla y manda un email de aviso.
- **No se usa el filesystem** — Cloudflare es read-only. Todo va por webhook.

### Apps Script (destino de los leads)

Vive en una Google Sheet → Extensiones → Apps Script, publicado como Web App.
Hace dos cosas: agrega fila a la planilla + manda email. Chequea un secreto
compartido para que nadie pueda postear si descubre la URL.

Si hay que tocarlo: editar el código, y después **Implementar → Gestionar
implementaciones → Nueva versión** (si no se crea versión nueva, sigue el
código viejo). La URL del `/exec` no cambia al crear versión nueva.

Estructura del `doPost`: parsea el JSON, valida `data.secret`, hace
`sheet.appendRow([...])` y `MailApp.sendEmail({...})`.

---

## Anti-spam (3 capas)

1. **Honeypot** — campo invisible `website` en el form. Si un bot lo
   completa, el lead se descarta. (`actions.ts`)
2. **Cloudflare Turnstile** — widget anti-bot en el form. El token se
   verifica server-side contra `siteverify`. (`CTAFinal.tsx` + `actions.ts`)
3. **Secreto compartido** — `submitLead` manda `LEAD_WEBHOOK_SECRET` en el
   body; el Apps Script lo valida. Evita que posteen al script directo.

---

## Variables de entorno

| Variable | Build / Runtime | Dónde se setea | Notas |
|---|---|---|---|
| `LEAD_WEBHOOK_URL` | Runtime | Cloudflare → Variables and Secrets | URL `/exec` del Apps Script |
| `LEAD_WEBHOOK_SECRET` | Runtime (Secret) | Cloudflare → Variables and Secrets | Secreto compartido con el Apps Script |
| `TURNSTILE_SECRET_KEY` | Runtime (Secret) | Cloudflare → Variables and Secrets | Clave secreta de Turnstile |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Build | (opcional) | Site key de Turnstile — ver abajo |

- En local, todas viven en `.env.local` (git-ignored).
- **Turnstile site key**: es **pública** (va embebida en el navegador). Está
  **hardcodeada** como valor por defecto en `CTAFinal.tsx`, así nunca
  "desaparece". La env var sigue pudiendo sobreescribirla, pero no hace falta.
- Si `TURNSTILE_SECRET_KEY` no está seteada, la verificación anti-bot del
  servidor se omite (el form igual funciona) — loguea un warning.
- Si `LEAD_WEBHOOK_URL` no está seteada, el form muestra éxito pero el lead
  no se envía a ningún lado — loguea un warning.

---

## Deploy en Cloudflare — gotchas

- **Variables `NEXT_PUBLIC_*`**: se hornean en el build. Si se setean, van en
  las **Build variables**, no en las de runtime. (Por eso el site key se
  hardcodeó: evita este lío.)
- **Wrangler pisa las variables de runtime**: si se deploya con Wrangler y el
  `wrangler.toml`/`.jsonc` no declara todas las vars, Wrangler borra del
  dashboard las que falten. Los **Secrets** (encriptados) NO los pisa — solo
  pisa las plaintext `[vars]`. Por eso conviene cargar los 3 valores
  server-side como **Secret**.

---

## Historial de cambios

- Landing portada desde un bundle de diseño (HTML/React) a Next.js.
- Rebrand de "Maja" a "Klini"; carpeta del proyecto renombrada a `klini`.
- Favicon: se usa `app/icon.png` (la "k" circular). Se borró el `favicon.ico`.
- Se agregó `public/llms.txt` para SEO / descubribilidad por LLMs.
- Pricing — plan **Founding member**: USD 150/mes + USD 250 de setup.
- Dashboard — se reemplazó el callout de "emergencias" por
  "17.991 consultas recibidas este mes" (escritorio + mobile).
- `submitLead` reescrito: de escribir a archivo → POST a webhook (Cloudflare
  es read-only).
- Se sumó anti-spam: honeypot + Turnstile + secreto compartido.
- Site key de Turnstile hardcodeado (es público) para que no desaparezca.
- **Fix de mobile en la sección CTA final (2026-05-20):** se desbordaba
  horizontalmente porque el iframe de Turnstile fuerza un ancho mínimo de
  ~300px y empujaba la columna del grid más allá del viewport. Tres cambios:
  - `grid-template-columns: minmax(0, 1fr)` y `min-width: 0` en hijos para
    permitir que la columna se achique.
  - Padding más chico en la cta-card en mobile (40/20 en el cuadro oscuro,
    24/18 en la card blanca).
  - Turnstile renderizado con `size: "flexible"` para que se adapte al ancho
    del contenedor en vez de quedar fijo en 300px.
- **Fix del botón flotante de chat en mobile:** sin `justify-content: center`
  el ícono interno (30×30) quedaba pegado a la izquierda dentro del círculo
  verde (60×60). Se agregó `justify-content: center` y `gap: 0` en la regla
  `@media (max-width: 580px)`.
- **Inputs del hero más grandes (2026-05-20):** `.hero-form .input` pasó a
  height 52px (desktop) / 56px (mobile), font-size 16px. El botón
  "Pedir demo en vivo" usa ahora `btn-lg` para mantener proporción.
- **CTA final en mobile más compacto:** se redujo padding y gap de
  `.cta-final` en `<=720px` (32px 20px, gap 24px) para que la card del
  formulario "Reservá tu demo" aparezca cerca de los bullets y no quede
  perdida abajo.
- **Demos personalizados por clínica (2026-05-20):** sistema para mandar
  links únicos por prospecto, con el chat del hero pre-cargado con datos
  reales de su clínica.
  - Tipo `ClinicData` en `app/lib/clinic.ts` — script inicial, respuestas
    por keyword, fallback.
  - Datos por clínica en `data/clinics/<slug>.ts` (un archivo por clínica).
  - Registro en `app/lib/clinics.ts` — agregar la clínica acá para que la
    ruta `/demo/<slug>` se genere estática automáticamente.
  - Ruta dinámica `app/demo/[slug]/page.tsx` con `generateStaticParams` →
    los demos se prerrenderan a HTML estático en build.
  - `ChatMock` y `Hero` toman ahora una prop `clinic`. En la landing
    principal `/` se pasa el demo genérico (`DEFAULT_CLINIC`).
  - **Cómo agregar una clínica nueva:** crear el archivo TS en
    `data/clinics/`, importarlo en `app/lib/clinics.ts` y agregarlo al
    array `allClinics`. Listo.
- **Chat de los demos con OpenAI (2026-05-20):** el `ChatMock` juega el
  intro scripteado y después manda cada mensaje libre al endpoint
  `POST /api/chat/[slug]`. El endpoint:
  - corre en **Edge runtime** (`runtime = "edge"`)
  - arma el system prompt con `buildSystemPrompt(clinic)` (en
    `app/lib/clinic-kb.ts`) — corto, con la KB de la clínica al final
  - llama a OpenAI vía `fetch` directo (sin SDK) con modelo
    `gpt-4.1-nano` (override con env `OPENAI_MODEL`)
  - cap de 250 tokens, temperatura 0.4
  - cap de historial: últimas 8-10 entradas
  - sin key → loguea warning y devuelve fallback amistoso (no rompe)
  - Variable de entorno requerida: `OPENAI_API_KEY` (runtime, Secret).
  - **Costo estimado:** con `gpt-4.1-nano` (~USD 0.10/M tokens input,
    USD 0.40/M output) 100 conversaciones × 20 mensajes ≈ USD 0.50.
    Despreciable.

### Nota: recuperación del repo (2026-05-16)

La carpeta local `klini/` se vació sola (se perdieron los archivos fuente y
parte de `.git`). **No se perdió nada**: el remoto de GitHub estaba intacto
en el commit `e232657`. Se recuperó renombrando la carpeta rota a
`klini-roto/` y clonando de nuevo desde GitHub. Si vuelve a pasar: misma
receta — el remoto es la fuente de verdad.

---

## Git

- Los commits **no llevan atribución a Claude** (sin `Co-Authored-By`).
