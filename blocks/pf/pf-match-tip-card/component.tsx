import React from "react";

export interface OddsItem {
  outcome: "1" | "X" | "2";
  outcomeLabel?: string;
  bookmaker: {
    name: string;
    slug: string;
    brandColor: string;
    brandTextColor?: string;
  };
  value: number;
  isBest: boolean;
  deepLink: string;
}

export interface PfMatchTipCardProps {
  competition: { name: string; slug: string };
  kickoff: string;
  isLive: boolean;
  liveScore?: string;
  teamHome: { name: string; shortName: string; colorFrom: string; colorTo: string };
  teamAway: { name: string; shortName: string; colorFrom: string; colorTo: string };
  tip: { author: string; text: string };
  odds: OddsItem[];
}

const OUTCOME_LABELS: Record<string, string> = {
  "1": "Casa",
  "X": "Empate",
  "2": "Visitante",
};

function TeamLogo({
  colorFrom,
  colorTo,
  shortName,
}: {
  colorFrom: string;
  colorTo: string;
  shortName: string;
}) {
  return (
    <span
      className="pf-match-tip-card__team-logo"
      style={
        {
          "--team-color-from": colorFrom,
          "--team-color-to": colorTo,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {shortName.slice(0, 3)}
    </span>
  );
}

function OddPill({ item }: { item: OddsItem }) {
  return (
    <a
      href={item.deepLink}
      className={`pf-match-tip-card__odd-pill${item.isBest ? " pf-match-tip-card__odd-pill--best" : ""}`}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${item.outcome}: ${item.value.toFixed(2)} en ${item.bookmaker.name}`}
    >
      <span className="pf-match-tip-card__odd-outcome">{item.outcome}</span>
      <span
        className="pf-match-tip-card__odd-bm-logo"
        style={{ "--bm-brand-color": item.bookmaker.brandColor } as React.CSSProperties}
        aria-hidden="true"
      >
        {item.bookmaker.name.slice(0, 2).toUpperCase()}
      </span>
      <span className="pf-match-tip-card__odd-value">{item.value.toFixed(2)}</span>
      {item.isBest && (
        <span className="pf-match-tip-card__odd-best-badge" aria-label="Mejor cuota">
          BEST
        </span>
      )}
    </a>
  );
}

export default function PfMatchTipCard({
  competition,
  kickoff,
  isLive,
  liveScore,
  teamHome,
  teamAway,
  tip,
  odds,
}: PfMatchTipCardProps) {
  return (
    <article className="pf-match-tip-card">
      <header className="pf-match-tip-card__header">
        <span className="pf-match-tip-card__competition">{competition.name}</span>
        <div className="pf-match-tip-card__meta">
          {isLive ? (
            <>
              <span className="pf-match-tip-card__live-dot" aria-hidden="true" />
              <span className="pf-match-tip-card__live-label">EN VIVO</span>
              {liveScore && (
                <span className="pf-match-tip-card__live-score">{liveScore}</span>
              )}
            </>
          ) : (
            <time className="pf-match-tip-card__kickoff" dateTime={kickoff}>
              {kickoff}
            </time>
          )}
        </div>
      </header>

      <div className="pf-match-tip-card__matchup">
        <div className="pf-match-tip-card__team pf-match-tip-card__team--home">
          <TeamLogo
            colorFrom={teamHome.colorFrom}
            colorTo={teamHome.colorTo}
            shortName={teamHome.shortName}
          />
          <span className="pf-match-tip-card__team-name">{teamHome.name}</span>
        </div>
        <span className="pf-match-tip-card__vs" aria-hidden="true">VS</span>
        <div className="pf-match-tip-card__team pf-match-tip-card__team--away">
          <TeamLogo
            colorFrom={teamAway.colorFrom}
            colorTo={teamAway.colorTo}
            shortName={teamAway.shortName}
          />
          <span className="pf-match-tip-card__team-name">{teamAway.name}</span>
        </div>
      </div>

      <div className="pf-match-tip-card__tip-box">
        <span className="pf-match-tip-card__tip-label">Tip experto</span>
        <p className="pf-match-tip-card__tip-text">{tip.text}</p>
        <span className="pf-match-tip-card__tip-author">— {tip.author}</span>
      </div>

      <div className="pf-match-tip-card__odds" role="list">
        {odds.map((item) => (
          <OddPill key={`${item.outcome}-${item.bookmaker.slug}`} item={item} />
        ))}
      </div>
    </article>
  );
}
