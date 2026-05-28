import type { BlockMeta } from "../_meta-types";

export const meta: BlockMeta = {
  id: "pf-post-card",
  name: "Post Card",
  category: "editorial",
  description: "Editorial news card with four display variants (featured, md, sm, xs). Featured = full-bleed image + gradient overlay. md = image-top. sm = horizontal image-left. xs = no image, densest.",
  tokensConsumed: [
    "color.surface", "color.border", "color.text", "color.text.muted", "color.primary",
    "space.1", "space.2", "space.3", "space.4", "radius.sm",
    "font.family.base", "font.family.heading",
  ],
  propsContract: {
    variant: '"featured" | "md" | "sm" | "xs"',
    category: "{ label: string; slug: string }",
    title: "string",
    excerpt: "string?",
    image: "{ src: string; alt: string }?",
    date: "string (ISO datetime)",
    author: "{ name: string; url: string }",
    url: "string",
  },
  instanceVars: [],
};
