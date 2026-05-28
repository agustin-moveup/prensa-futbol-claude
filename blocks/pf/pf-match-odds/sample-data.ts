import type { PfMatchOddsProps } from "./component";

const olimpiaVsAudax: PfMatchOddsProps = {
  title: "Olimpia vs Audax Italiano – Mejores apuestas del partido",
  subtitle: "Encontrarás abajo las mejores apuestas para este partido de Copa Sudamericana.",
  competition: "Copa Sudamericana",
  teamHome: "Olimpia",
  teamAway: "Audax Italiano",
  items: [
    {
      name: "Betsson",
      slug: "betsson",
      brandColor: "#f90",
      rating: 4.8,
      ctaHref: "#betsson",
      ctaLabel: "Apostar",
      odds: { home: 2.10, draw: 3.20, away: 3.40 },
    },
    {
      name: "Codere",
      slug: "codere",
      brandColor: "#e4003a",
      rating: 4.5,
      ctaHref: "#codere",
      ctaLabel: "Apostar",
      odds: { home: 2.05, draw: 3.30, away: 3.50 },
    },
    {
      name: "Coolbet",
      slug: "coolbet",
      brandColor: "#00b4d8",
      rating: 4.3,
      ctaHref: "#coolbet",
      ctaLabel: "Apostar",
      odds: { home: 2.15, draw: 3.10, away: 3.35 },
    },
    {
      name: "1xBet",
      slug: "1xbet",
      brandColor: "#1a6bff",
      rating: 4.1,
      ctaHref: "#1xbet",
      ctaLabel: "Apostar",
      odds: { home: 2.08, draw: 3.25, away: 3.60 },
    },
    {
      name: "Betsafe",
      slug: "betsafe",
      brandColor: "#00703c",
      rating: 4.0,
      ctaHref: "#betsafe",
      ctaLabel: "Apostar",
      odds: { home: 2.00, draw: 3.15, away: 3.45 },
    },
  ],
};

const riverVsBoca: PfMatchOddsProps = {
  title: "River Plate vs Boca Juniors – Mejores apuestas del Superclásico",
  subtitle: "Las mejores cuotas para el partido más esperado del año.",
  competition: "Liga Profesional Argentina",
  teamHome: "River Plate",
  teamAway: "Boca Juniors",
  items: [
    {
      name: "Betsson",
      slug: "betsson",
      brandColor: "#f90",
      rating: 4.8,
      ctaHref: "#betsson",
      odds: { home: 2.30, draw: 3.10, away: 3.20 },
    },
    {
      name: "Codere",
      slug: "codere",
      brandColor: "#e4003a",
      rating: 4.5,
      ctaHref: "#codere",
      odds: { home: 2.25, draw: 3.20, away: 3.30 },
    },
    {
      name: "Coolbet",
      slug: "coolbet",
      brandColor: "#00b4d8",
      rating: 4.3,
      ctaHref: "#coolbet",
      odds: { home: 2.35, draw: 3.00, away: 3.15 },
    },
  ],
};

export const sampleData = {
  default: { default: olimpiaVsAudax },
  superclasico: { default: riverVsBoca },
};
