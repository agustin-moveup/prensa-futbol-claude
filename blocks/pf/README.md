# blocks/pf — Prensa Futbol Blocks

Bloques portables al Hub. Todos cumplen el contrato de `gds-hub/CLAUDE.md §6`.

## Inventario

| Block ID | Nombre | Categoría | Status | Token gaps |
|---|---|---|---|---|
| `pf-bookmaker-banner` | Bookmaker Banner | commercial | ✅ | ninguno |
| `pf-match-tip-card` | Match Tip Card | betting | ✅ | ninguno |
| `pf-bookmaker-list` | Bookmaker List | commercial | ✅ | ninguno |
| `pf-competition-accordion` | Competition Accordion | sports | ✅ | ninguno |
| `pf-tipster-card` | Tipster Card | editorial | ✅ | ninguno |
| `pf-link-grid` | Link Grid | generic | ✅ | ninguno |
| `pf-seo-text` | SEO Text | editorial | ✅ | ninguno |

## Hub Migration Readiness

Por cada bloque:

- [x] Archivos exactos: `component.tsx`, `index.tsx`, `styles.css`, `meta.ts`, `sample-data.ts`
- [x] `component.tsx` NO importa `./styles.css`
- [x] `index.tsx` hace el `import "./styles.css"` y re-exporta
- [x] CSS usa solo `var(--gds-*)` — cero hardcoded, cero vars locales
- [x] CSS solo `@container`, cero `@media` (excepto `prefers-reduced-motion`)
- [x] BEM estricto, sin selectores globales, sin `!important`
- [x] `meta.ts` exporta `BlockMeta` completo con `tokensConsumed` y `propsContract`
- [x] `sample-data.ts` tipado, cubre todos los variant × state
- [x] `tokens/pf.json` usa estructura jerárquica mirror del Hub

## Pasos de migración al Hub

1. Copiar `blocks/pf/<block-id>/` a `gds-hub/blocks/pf/<block-id>/`
2. Cambiar el import del type local: `import type { BlockMeta } from "@/lib/blocks"`
3. Agregar al registry: `lib/block-registry.ts` + `lib/block-server-registry.ts`
4. Reemplazar `tokens/pf.json` del Hub con el de este repo
