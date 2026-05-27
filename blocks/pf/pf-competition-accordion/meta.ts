import type { BlockMeta } from "../_meta-types";
import { sampleData } from "./sample-data";

export const meta: BlockMeta = {
  id: "pf-competition-accordion",
  name: "Competition Accordion",
  description: "Native <details> accordion showing competition matches with odds per match row. Zero JS.",
  category: "sports",
  asset: "pf",
  variants: [{ id: "default", label: "Default" }],
  states: [
    { id: "default", label: "Open" },
    { id: "closed", label: "Closed" },
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
    "color.primary.DEFAULT",
    "color.primary.deep",
    "color.live.DEFAULT",
    "space.1",
    "space.2",
    "space.3",
    "space.4",
    "radius.sm",
    "radius.lg",
    "font.family.base",
    "font.family.mono",
  ],
  propsContract: `interface PfCompetitionAccordionProps {
  competition: {
    name: string;
    slug: string;
    logo?: { from: string; to: string; initials: string };
  };
  isOpenByDefault?: boolean;
  matches: Array<{
    id: string;
    status: "live" | "finish" | "upcoming";
    kickoff: string;
    teamHome: { name: string; slug: string; logo: { from: string; to: string; initials: string } };
    teamAway: { name: string; slug: string; logo: { from: string; to: string; initials: string } };
    url: string;
    odds: Array<{
      outcome: "1" | "X" | "2";
      bookmaker: { name: string; slug: string; brandColor: string };
      value: number;
      deepLink: string;
    }>;
  }>;
}`,
};
