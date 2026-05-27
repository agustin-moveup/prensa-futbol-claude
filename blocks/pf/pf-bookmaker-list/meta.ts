import type { BlockMeta } from "../_meta-types";
import { sampleData } from "./sample-data";

export const meta: BlockMeta = {
  id: "pf-bookmaker-list",
  name: "Bookmaker List",
  description: "Ranked list of bookmakers with rating, bonus offer, and CTA. Three layout variants: card, sidebar, table.",
  category: "commercial",
  asset: "pf",
  variants: [
    { id: "card", label: "Card" },
    { id: "sidebar", label: "Sidebar" },
    { id: "table", label: "Table" },
  ],
  states: [{ id: "default", label: "Default" }],
  defaultVariant: "card",
  defaultState: "default",
  sampleData: sampleData as Record<string, Record<string, unknown>>,
  tokensConsumed: [
    "color.surface.DEFAULT",
    "color.surface.elevated",
    "color.text.DEFAULT",
    "color.text.muted",
    "color.border.DEFAULT",
    "color.primary.DEFAULT",
    "color.primary.deep",
    "color.accent.DEFAULT",
    "color.bg.DEFAULT",
    "space.1",
    "space.2",
    "space.3",
    "space.4",
    "space.5",
    "radius.md",
    "radius.lg",
    "font.family.base",
    "font.family.mono",
  ],
  propsContract: `interface PfBookmakerListProps {
  title?: string;
  variant: "card" | "sidebar" | "table";
  items: Array<{
    rank: number;
    bookmaker: {
      name: string;
      slug: string;
      logo: { from: string; to: string; initials: string };
    };
    rating: number;
    bonus: string;
    ctaUrl: string;
    ctaLabel: string;
    disclaimer?: string;
  }>;
}`,
};
