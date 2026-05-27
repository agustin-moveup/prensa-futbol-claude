import React from "react";

export interface PfTipsterCardProps {
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
}

export default function PfTipsterCard({ tipster, pick, quote }: PfTipsterCardProps) {
  return (
    <article className="pf-tipster-card">
      <div className="pf-tipster-card__top">
        <div className="pf-tipster-card__identity">
          <a
            href={tipster.profileUrl ?? "#"}
            className="pf-tipster-card__avatar-link"
            aria-label={`Ver perfil de ${tipster.name}`}
          >
            <span
              className="pf-tipster-card__avatar"
              style={
                {
                  "--avatar-from": tipster.avatar.from,
                  "--avatar-to": tipster.avatar.to,
                } as React.CSSProperties
              }
              aria-hidden="true"
            >
              {tipster.avatar.initials}
            </span>
          </a>
          <div className="pf-tipster-card__meta">
            <a href={tipster.profileUrl ?? "#"} className="pf-tipster-card__name">
              {tipster.name}
            </a>
            <span className="pf-tipster-card__specialty">{tipster.specialty}</span>
          </div>
        </div>

        <div className="pf-tipster-card__divider" aria-hidden="true" />

        <div className="pf-tipster-card__pick">
          <span className="pf-tipster-card__pick-label">{pick.label}</span>
          <div className="pf-tipster-card__pick-odds">
            <a
              href={pick.ctaUrl}
              className="pf-tipster-card__bm-pill"
              style={
                {
                  "--bm-brand-color": pick.bookmaker.brandColor,
                  "--bm-text-color": pick.bookmaker.brandTextColor ?? "#ffffff",
                } as React.CSSProperties
              }
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-label={`${pick.bookmaker.name}: cuota ${pick.odds.toFixed(2)}`}
            >
              <span className="pf-tipster-card__bm-name">{pick.bookmaker.name}</span>
              <span className="pf-tipster-card__bm-odds">{pick.odds.toFixed(2)}</span>
            </a>
          </div>
          <a
            href={pick.ctaUrl}
            className="pf-tipster-card__cta"
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            {pick.ctaLabel}
          </a>
        </div>
      </div>

      <div className="pf-tipster-card__quote-row">
        <blockquote className="pf-tipster-card__quote">
          <p>"{quote}"</p>
        </blockquote>
      </div>
    </article>
  );
}
