import type { BlockMeta } from "../_meta-types";

export const meta: BlockMeta = {
  id: "pf-match-odds",
  name: "Match Odds",
  category: "commercial",
  description: "Comparison table of bookmaker odds for a single match (1X2). Highlights best odds per outcome. Used in match preview pages.",
  tokensConsumed: [
    "color.surface", "color.surface.elevated", "color.border", "color.text", "color.text.muted",
    "color.primary", "color.primary.deep", "color.accent",
    "space.1", "space.2", "space.3", "space.4", "space.5", "radius.sm",
    "font.family.base", "font.family.heading", "font.family.mono",
  ],
  propsContract: {
    title: "string",
    subtitle: "string?",
    competition: "string?",
    teamHome: "string",
    teamAway: "string",
    items: "MatchOddsBookmaker[]",
  },
  instanceVars: ["--bm-brand-color"],
};
