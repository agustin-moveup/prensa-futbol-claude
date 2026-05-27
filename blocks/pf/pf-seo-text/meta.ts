import type { BlockMeta } from "../_meta-types";
import { sampleData } from "./sample-data";

export const meta: BlockMeta = {
  id: "pf-seo-text",
  name: "SEO Text",
  description: "Long-form SEO text block for page footers. 2-col grid of sections, each with heading and body paragraph.",
  category: "editorial",
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
    "space.2",
    "space.4",
    "space.5",
    "space.7",
    "font.family.base",
    "font.family.heading",
  ],
  propsContract: `interface PfSeoTextProps {
  title: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
}`,
};
