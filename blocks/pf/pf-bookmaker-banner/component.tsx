import React from "react";

export interface PfBookmakerBannerProps {
  bookmaker: {
    name: string;
    slug: string;
    logo: { from: string; to: string; initials: string };
  };
  offer: { tagline: string; value: string };
  ctaLabel: string;
  ctaUrl: string;
  disclaimer?: string;
}

export default function PfBookmakerBanner({
  bookmaker,
  offer,
  ctaLabel,
  ctaUrl,
  disclaimer = "18+ · Juega con responsabilidad · Términos y condiciones aplican",
}: PfBookmakerBannerProps) {
  return (
    <aside className="pf-bookmaker-banner">
      <div className="pf-bookmaker-banner__inner">
        <div className="pf-bookmaker-banner__left">
          <span
            className="pf-bookmaker-banner__logo"
            style={
              {
                "--logo-from": bookmaker.logo.from,
                "--logo-to": bookmaker.logo.to,
              } as React.CSSProperties
            }
            aria-hidden="true"
          >
            {bookmaker.logo.initials}
          </span>
          <span className="pf-bookmaker-banner__name">{bookmaker.name}</span>
          <span className="pf-bookmaker-banner__sep" aria-hidden="true">·</span>
          <span className="pf-bookmaker-banner__tagline">{offer.tagline}</span>
          <span className="pf-bookmaker-banner__sep" aria-hidden="true">·</span>
          <span className="pf-bookmaker-banner__value">{offer.value}</span>
        </div>
        <a
          href={ctaUrl}
          className="pf-bookmaker-banner__cta"
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          {ctaLabel}
        </a>
      </div>
      <p className="pf-bookmaker-banner__disclaimer">{disclaimer}</p>
    </aside>
  );
}
