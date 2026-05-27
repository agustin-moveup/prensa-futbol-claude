import type { BlockMeta } from "../_meta-types";
import { sampleData } from "./sample-data";

export const meta: BlockMeta = {
  id: "pf-tipster-card",
  name: "Tipster Card",
  description: "Tipster identity card with featured pick, bookmaker branded odds pill, CTA, and quote.",
  category: "editorial",
  asset: "pf",
  variants: [{ id: "default", label: "Default" }],
  states: [
    { id: "default", label: "Default" },
    { id: "alternate", label: "Alternate tipster" },
  ],
  defaultVariant: "default",
  defaultState: "default",
  sampleData: sampleData as Record<string, Record<string, unknown>>,
  tokensConsumed: [
    "color.surface.DEFAULT",
    "color.surface.elevated",
    "color.border.DEFAULT",
    "color.text.DEFAULT",
    "color.text.muted",
    "color.accent.DEFAULT",
    "color.primary.DEFAULT",
    "color.primary.deep",
    "space.1",
    "space.2",
    "space.3",
    "space.4",
    "space.5",
    "radius.sm",
    "font.family.base",
    "font.family.heading",
    "font.family.mono",
  ],
  propsContract: `interface PfTipsterCardProps {
  tipster: {
    name: string;
    slug: string;
    avatar: { from: string; to: string; initials: string };
    specialty: string;
    profileUrl?: string;
  };
  pick: {
    label: string;
    bookmaker: { name: string; slug: string; brandColor: string; brandTextColor?: string };
    odds: number;
    ctaLabel: string;
    ctaUrl: string;
  };
  quote: string;
}`,
};
