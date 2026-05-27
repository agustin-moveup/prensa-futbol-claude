# Prensa Futbol — Sitio Astro

Sitio standalone de Prensa Futbol Chile, construido con Astro + React. Los bloques en `blocks/pf/` son 100% portables al MoveUp GDS Hub.

## Requisitos

- Node 20 LTS
- pnpm

## Correr el proyecto

```sh
pnpm install
pnpm dev        # dev server en http://localhost:4321/
pnpm build      # build de producción en ./dist/
pnpm preview    # preview del build
```

## Build gate

```sh
pnpm tsc --noEmit && pnpm astro check && pnpm build
```

## Estructura

```
prensa-futbol-claude/
├── src/
│   ├── pages/index.astro        # Home con los 8 bloques
│   ├── layouts/BaseLayout.astro # Emite --gds-* vars desde tokens/pf.json
│   ├── styles/global.css        # Reset mínimo
│   └── lib/tokens.ts            # Genera CSS vars desde tokens/pf.json
├── blocks/pf/                   # ← bloques portables al Hub
│   ├── _meta-types.ts           # Tipo BlockMeta (espeja Hub)
│   ├── pf-match-tip-card/       # P1 ✅
│   └── ...                      # P1-P3 pendientes
└── tokens/pf.json               # Source of truth de design tokens
```

## Bloques

| Bloque | Tier | Estado |
|---|---|---|
| `pf-match-tip-card` | P1 | ✅ |
| `pf-bookmaker-list` | P1 | pendiente |
| `pf-bookmaker-banner` | P1 | pendiente |
| `pf-odds-row` | P1 | pendiente |
| `pf-competition-accordion` | P2 | pendiente |
| `pf-tipster-card` | P2 | pendiente |
| `pf-link-grid` | P3 | pendiente |
| `pf-seo-text` | P3 | pendiente |

## Migración al Hub

Ver checklist en `blocks/pf/README.md` (se crea al finalizar los 8 bloques).
