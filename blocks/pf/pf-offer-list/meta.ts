import type { BlockMeta } from "../_meta-types";

export const meta: BlockMeta = {
  id: "pf-offer-list",
  name: "Offer List",
  category: "commercial",
  description: "Ranked list of bookmaker offer cards. Three zone variants: code (promo code), pros (feature list), code-pros (both).",
  tokensConsumed: [
    "color.surface", "color.surface.elevated", "color.border", "color.text", "color.text.muted",
    "color.primary", "color.primary.deep", "color.accent", "color.success",
    "space.2", "space.3", "space.4", "space.5", "radius.sm",
    "font.family.base", "font.family.mono",
  ],
  propsContract: {
    title: "string",
    ctaLabel: "string?",
    ctaHref: "string?",
    items: "OfferItem[]",
  },
  instanceVars: ["--bm-brand-color"],
};
