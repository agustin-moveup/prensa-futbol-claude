import React from "react";

export interface MatchOddsBookmaker {
  name: string;
  slug: string;
  brandColor: string;
  rating: number;
  ctaHref?: string;
  ctaLabel?: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
}

export interface PfMatchOddsProps {
  title: string;
  subtitle?: string;
  competition?: string;
  teamHome: string;
  teamAway: string;
  items: MatchOddsBookmaker[];
}

// ── Stars (duplicated — standalone contract) ──────────────────

function StarSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.2 9.96 5.6l4.84.42-3.66 3.18 1.1 4.7L8 11.55 3.76 13.9l1.1-4.7L1.2 6.02l4.84-.42L8 1.2Z"/>
    </svg>
  );
}

function Stars({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const five = [0, 1, 2, 3, 4];
  return (
    <span className="pf-match-odds__stars" aria-label={`${value.toFixed(1)} de 5`}>
      <span className="pf-match-odds__stars-track" aria-hidden="true">
        {five.map((i) => <StarSvg key={i}/>)}
      </span>
      <span className="pf-match-odds__stars-fill" style={{ width: `${pct}%` }} aria-hidden="true">
        {five.map((i) => <StarSvg key={i}/>)}
      </span>
    </span>
  );
}

// ── Odd cell ──────────────────────────────────────────────────

function OddCell({
  label,
  value,
  isBest,
  href,
}: {
  label: string;
  value: number;
  isBest: boolean;
  href: string;
}) {
  return (
    <a
      href={href}
      className={`pf-match-odds__odd${isBest ? " pf-match-odds__odd--best" : ""}`}
      rel="noopener noreferrer sponsored"
      aria-label={`${label}: ${value.toFixed(2)}`}
    >
      <span className="pf-match-odds__odd-label">{label}</span>
      <span className="pf-match-odds__odd-value">{value.toFixed(2)}</span>
    </a>
  );
}

// ── Main component ────────────────────────────────────────────
// Reserved for match preview / match screen context: shows the best available
// odds across bookmakers for a single 1X2 market. Best value per column is
// highlighted automatically — intended to sit above or alongside match analysis.

export default function PfMatchOdds({
  title,
  subtitle,
  competition,
  teamHome,
  teamAway,
  items,
}: PfMatchOddsProps) {
  const bestHome = Math.max(...items.map((i) => i.odds.home));
  const bestDraw = Math.max(...items.map((i) => i.odds.draw));
  const bestAway = Math.max(...items.map((i) => i.odds.away));

  return (
    <section className="pf-match-odds">
      {/* Heading */}
      <header className="pf-match-odds__header">
        {competition && (
          <span className="pf-match-odds__competition">{competition}</span>
        )}
        <h2 className="pf-match-odds__title">{title}</h2>
        {subtitle && <p className="pf-match-odds__subtitle">{subtitle}</p>}
      </header>

      {/* Table */}
      <div className="pf-match-odds__table">
        {/* Column headers */}
        <div className="pf-match-odds__col-headers" aria-hidden="true">
          <span>{/* bookmaker col */}</span>
          <span>{teamHome}</span>
          <span>Empate</span>
          <span>{teamAway}</span>
          <span>{/* cta col */}</span>
        </div>

        {/* Rows */}
        <ol className="pf-match-odds__list">
          {items.map((item) => (
            <li key={item.slug} className="pf-match-odds__row">
              {/* Bookmaker */}
              <div className="pf-match-odds__bm">
                <span
                  className="pf-match-odds__bm-logo"
                  style={{ "--bm-brand-color": item.brandColor } as React.CSSProperties}
                  aria-hidden="true"
                >
                  {item.name.slice(0, 2).toUpperCase()}
                </span>
                <div className="pf-match-odds__bm-info">
                  <span className="pf-match-odds__bm-name">{item.name}</span>
                  <span className="pf-match-odds__bm-rating">
                    <Stars value={item.rating}/>
                    <span className="pf-match-odds__bm-rating-num">{item.rating.toFixed(1)}</span>
                  </span>
                </div>
              </div>

              {/* Odds */}
              <OddCell label="1" value={item.odds.home} isBest={item.odds.home === bestHome} href={item.ctaHref ?? "#"}/>
              <OddCell label="X" value={item.odds.draw} isBest={item.odds.draw === bestDraw} href={item.ctaHref ?? "#"}/>
              <OddCell label="2" value={item.odds.away} isBest={item.odds.away === bestAway} href={item.ctaHref ?? "#"}/>

              {/* CTA */}
              <a
                href={item.ctaHref ?? "#"}
                className="pf-match-odds__cta"
                rel="nofollow sponsored noopener"
              >
                {item.ctaLabel ?? "Apostar"}
                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" width="12" height="12">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
