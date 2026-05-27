import React from "react";

export interface MatchOddsItem {
  outcome: "1" | "X" | "2";
  bookmaker: { name: string; slug: string; brandColor: string };
  value: number;
  deepLink: string;
}

export interface MatchRow {
  id: string;
  status: "live" | "finish" | "upcoming";
  kickoff: string;
  teamHome: { name: string; slug: string; logo: { from: string; to: string; initials: string } };
  teamAway: { name: string; slug: string; logo: { from: string; to: string; initials: string } };
  url: string;
  odds: MatchOddsItem[];
}

export interface PfCompetitionAccordionProps {
  competition: {
    name: string;
    slug: string;
    logo?: { from: string; to: string; initials: string };
  };
  isOpenByDefault?: boolean;
  matches: MatchRow[];
}

// Duplicated from pf-match-tip-card — intentional, standalone contract
function OddPill({ item }: { item: MatchOddsItem }) {
  return (
    <a
      href={item.deepLink}
      className="pf-competition-accordion__odd-pill"
      style={{ "--bm-brand-color": item.bookmaker.brandColor } as React.CSSProperties}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${item.value.toFixed(2)} en ${item.bookmaker.name}`}
    >
      <span
        className="pf-competition-accordion__odd-logo"
        aria-hidden="true"
      >
        {item.bookmaker.name.slice(0, 2).toUpperCase()}
      </span>
      <span className="pf-competition-accordion__odd-value">
        {item.value.toFixed(2)}
      </span>
    </a>
  );
}

function StatusBadge({ status, kickoff }: { status: MatchRow["status"]; kickoff: string }) {
  if (status === "live") {
    return (
      <div className="pf-competition-accordion__kickoff">
        <span className="pf-competition-accordion__badge pf-competition-accordion__badge--live">
          <span className="pf-competition-accordion__live-dot" aria-hidden="true" />
          Live
        </span>
      </div>
    );
  }
  if (status === "finish") {
    return (
      <div className="pf-competition-accordion__kickoff">
        <span className="pf-competition-accordion__badge pf-competition-accordion__badge--finish">
          Finish
        </span>
      </div>
    );
  }
  return (
    <div className="pf-competition-accordion__kickoff">
      <time className="pf-competition-accordion__time">{kickoff}</time>
    </div>
  );
}

function TeamLogo({ logo }: { logo: { from: string; to: string; initials: string } }) {
  return (
    <span
      className="pf-competition-accordion__team-logo"
      style={{ "--logo-from": logo.from, "--logo-to": logo.to } as React.CSSProperties}
      aria-hidden="true"
    >
      {logo.initials}
    </span>
  );
}

function ChevronIcon({ className }: { className: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PfCompetitionAccordion({
  competition,
  isOpenByDefault = false,
  matches,
}: PfCompetitionAccordionProps) {
  return (
    <details
      className="pf-competition-accordion"
      open={isOpenByDefault}
    >
      <summary className="pf-competition-accordion__summary">
        <div className="pf-competition-accordion__summary-inner">
          {competition.logo && (
            <span
              className="pf-competition-accordion__comp-logo"
              style={
                {
                  "--logo-from": competition.logo.from,
                  "--logo-to": competition.logo.to,
                } as React.CSSProperties
              }
              aria-hidden="true"
            >
              {competition.logo.initials}
            </span>
          )}
          <span className="pf-competition-accordion__comp-name">{competition.name}</span>
        </div>
        <ChevronIcon className="pf-competition-accordion__chevron" />
      </summary>

      <div className="pf-competition-accordion__body">
        <div className="pf-competition-accordion__table-header" aria-hidden="true">
          <span />
          <span>Partido</span>
          <span>Casa</span>
          <span>Empate</span>
          <span>Visitante</span>
          <span />
        </div>

        <ol className="pf-competition-accordion__matches">
          {matches.map((match) => {
            const home = match.teamHome;
            const away = match.teamAway;
            const oddsMap = Object.fromEntries(match.odds.map((o) => [o.outcome, o]));
            return (
              <li key={match.id} className="pf-competition-accordion__match-row">
                <StatusBadge status={match.status} kickoff={match.kickoff} />

                <div className="pf-competition-accordion__teams">
                  <TeamLogo logo={home.logo} />
                  <TeamLogo logo={away.logo} />
                  <span className="pf-competition-accordion__match-title">
                    {home.name} <span className="pf-competition-accordion__vs">vs</span> {away.name}
                  </span>
                </div>

                {(["1", "X", "2"] as const).map((outcome) =>
                  oddsMap[outcome] ? (
                    <OddPill key={outcome} item={oddsMap[outcome]} />
                  ) : (
                    <span key={outcome} className="pf-competition-accordion__odd-empty">—</span>
                  )
                )}

                <a
                  href={match.url}
                  className="pf-competition-accordion__arrow"
                  aria-label={`Ver ${home.name} vs ${away.name}`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </details>
  );
}
