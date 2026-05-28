export const meta = {
  id: "pf-event-spotlight",
  name: "Event Spotlight",
  category: "editorial",
  description:
    "Themeable editorial container for featured events (World Cup, Copa América, sponsor takeovers). Composes pf-post-card in spotlight (featured + sm rail) or rail (md horizontal scroll) layouts. Swap or remove at the page/CMS layer — the block is data-driven.",
  dependencies: ["pf-post-card"],
  variants: ["spotlight", "rail"],
  tokensConsumed: [
    "color.primary",
    "color.primary-deep",
    "color.text",
    "color.text.muted",
    "color.surface.elevated",
    "color.border",
    "space.1", "space.3", "space.4", "space.5",
    "font.family.base",
    "font.family.heading",
  ],
  instanceVars: [
    "--es-accent-from  // gradient start — defaults to --gds-color-primary",
    "--es-accent-to    // gradient end   — defaults to --gds-color-primary-deep",
  ],
  propsContract: {
    event: "{ kicker?: string; title: string; accentFrom?: string; accentTo?: string; ctaLabel?: string; ctaUrl?: string }",
    layout: '"spotlight" | "rail"  // default spotlight',
    articles: "Omit<PfPostCardProps, 'variant'>[]",
  },
};
