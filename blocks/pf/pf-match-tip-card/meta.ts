import type { BlockMeta } from "../_meta-types";
import { sampleData } from "./sample-data";

export const meta: BlockMeta = {
  id: "pf-match-tip-card",
  name: "Match Tip Card",
  description: "Match card with expert tip and 3-way odds comparison.",
  category: "betting",
  asset: "pf",
  variants: [{ id: "default", label: "Default" }],
  states: [
    { id: "default", label: "Default" },
    { id: "live", label: "Live" },
  ],
  defaultVariant: "default",
  defaultState: "default",
  sampleData: sampleData as Record<string, Record<string, unknown>>,
  tokensConsumed: [
    "color.surface.DEFAULT",
    "color.surface.elevated",
    "color.primary.DEFAULT",
    "color.accent.DEFAULT",
    "color.text.DEFAULT",
    "color.text.muted",
    "color.border.DEFAULT",
    "color.live.DEFAULT",
    "color.bg.DEFAULT",
    "space.1",
    "space.2",
    "space.3",
    "space.4",
    "space.5",
    "space.6",
    "radius.sm",
    "radius.md",
    "radius.lg",
    "font.family.base",
    "font.family.mono",
  ],
  propsContract: `interface PfMatchTipCardProps {
  competition: { name: string; slug: string };
  kickoff: string;
  isLive: boolean;
  liveScore?: string;
  teamHome: { name: string; shortName: string; colorFrom: string; colorTo: string };
  teamAway: { name: string; shortName: string; colorFrom: string; colorTo: string };
  tip: { author: string; text: string };
  odds: Array<{
    outcome: "1" | "X" | "2";
    outcomeLabel?: string;
    bookmaker: { name: string; slug: string; brandColor: string; brandTextColor?: string };
    value: number;
    isBest: boolean;
    deepLink: string;
  }>;
  matchUrl?: string;
  ctaLabel?: string;
}`,
};
