import type { BlockMeta } from "../_meta-types";
import { sampleData } from "./sample-data";

export const meta: BlockMeta = {
  id: "pf-link-grid",
  name: "Link Grid",
  description: "4-column contextual link grid for guides and promotional codes. Collapses to 2-col and 1-col via container queries.",
  category: "generic",
  asset: "pf",
  variants: [{ id: "default", label: "Default" }],
  states: [{ id: "default", label: "Default" }],
  defaultVariant: "default",
  defaultState: "default",
  sampleData: sampleData as Record<string, Record<string, unknown>>,
  tokensConsumed: [
    "color.text.DEFAULT",
    "color.text.muted",
    "color.border.DEFAULT",
    "color.primary.DEFAULT",
    "space.2",
    "space.3",
    "space.4",
    "font.family.base",
    "font.family.heading",
  ],
  propsContract: `interface PfLinkGridProps {
  heading?: string;
  columns: Array<{
    title: string;
    links: Array<{ label: string; url: string }>;
  }>;
}`,
};
