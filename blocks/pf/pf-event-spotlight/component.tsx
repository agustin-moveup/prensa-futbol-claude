import React from "react";
import PfPostCard from "../pf-post-card/component";
import type { PfPostCardProps } from "../pf-post-card/component";

export interface EventConfig {
  kicker?: string;
  title: string;
  accentFrom?: string;
  accentTo?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

// Articles omit variant — the spotlight assigns it per layout slot
export type SpotlightArticle = Omit<PfPostCardProps, "variant">;

export interface PfEventSpotlightProps {
  event: EventConfig;
  layout?: "spotlight" | "rail";
  articles: SpotlightArticle[];
}

// Themeable editorial container for featured events (World Cup, Copa América, sponsor takeovers).
// spotlight: first article as featured card, remaining as sm cards in side rail.
// rail: all articles as md cards in horizontal scroll.
// Toggle / swap at the page/CMS layer — this block is always-on and data-driven.
export default function PfEventSpotlight({
  event,
  layout = "spotlight",
  articles,
}: PfEventSpotlightProps) {
  const { kicker, title, accentFrom, accentTo, ctaLabel, ctaUrl } = event;

  const rootStyle: React.CSSProperties = {};
  if (accentFrom) (rootStyle as Record<string, string>)["--es-accent-from"] = accentFrom;
  if (accentTo) (rootStyle as Record<string, string>)["--es-accent-to"] = accentTo;

  return (
    <section
      className={`pf-event-spotlight pf-event-spotlight--${layout}`}
      data-layout={layout}
      style={Object.keys(rootStyle).length ? rootStyle : undefined}
    >
      <header className="pf-event-spotlight__header">
        <div className="pf-event-spotlight__accent-bar" aria-hidden="true" />
        <div className="pf-event-spotlight__header-row">
          <div className="pf-event-spotlight__header-text">
            {kicker && <p className="pf-event-spotlight__kicker">{kicker}</p>}
            <h2 className="pf-event-spotlight__title">{title}</h2>
          </div>
          {ctaLabel && ctaUrl && (
            <a href={ctaUrl} className="pf-event-spotlight__cta">
              {ctaLabel}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </header>

      {layout === "spotlight" && (
        <div className="pf-event-spotlight__body">
          {articles[0] && (
            <div className="pf-event-spotlight__primary">
              <PfPostCard {...articles[0]} variant="featured" />
            </div>
          )}
          {articles.length > 1 && (
            <aside className="pf-event-spotlight__rail" aria-label="Artículos relacionados">
              {articles.slice(1).map((article, i) => (
                <PfPostCard key={i} {...article} variant="sm" />
              ))}
            </aside>
          )}
        </div>
      )}

      {layout === "rail" && (
        <div className="pf-event-spotlight__scroll">
          {articles.map((article, i) => (
            <div key={i} className="pf-event-spotlight__scroll-item">
              <PfPostCard {...article} variant="md" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
