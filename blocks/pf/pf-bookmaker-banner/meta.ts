import type { BlockMeta } from "../_meta-types";
import { sampleData } from "./sample-data";

export const meta: BlockMeta = {
  id: "pf-bookmaker-banner",
  name: "Bookmaker Banner",
  description: "Slim full-width promotional strip for a featured bookmaker.",
  category: "commercial",
  asset: "pf",
  variants: [{ id: "default", label: "Default" }],
  states: [{ id: "default", label: "Default" }],
  defaultVariant: "default",
  defaultState: "default",
  sampleData: sampleData as Record<string, Record<string, unknown>>,
  tokensConsumed: [
    "color.accent.DEFAULT",
    "color.surface.DEFAULT",
    "color.text.DEFAULT",
    "color.text.muted",
    "color.primary.DEFAULT",
    "color.primary.deep",
    "space.2",
    "space.3",
    "space.5",
    "radius.md",
    "radius.lg",
    "font.family.base",
  ],
  propsContract: `interface PfBookmakerBannerProps {
  bookmaker: {
    name: string;
    slug: string;
    logo: { from: string; to: string; initials: string };
  };
  offer: { tagline: string; value: string };
  ctaLabel: string;
  ctaUrl: string;
  disclaimer?: string;
}`,
};
