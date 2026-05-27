import type { PfMatchTipCardProps } from "./component";

// Bookmaker brand colors — instance-level data, not design tokens
const BM = {
  betano:  { name: "Betano",  slug: "betano",  brandColor: "#e01f26", brandTextColor: "#ffffff" },
  betsson: { name: "Betsson", slug: "betsson", brandColor: "#f7a600", brandTextColor: "#1a1a1a" },
  codere:  { name: "Codere",  slug: "codere",  brandColor: "#1a7233", brandTextColor: "#ffffff" },
  coolbet: { name: "Coolbet", slug: "coolbet", brandColor: "#0a4f8f", brandTextColor: "#ffffff" },
  novibet: { name: "Novibet", slug: "novibet", brandColor: "#1b3a6b", brandTextColor: "#ffffff" },
  epicbet: { name: "EpicBet", slug: "epicbet", brandColor: "#16a34a", brandTextColor: "#ffffff" },
} as const;

const defaultDefault: PfMatchTipCardProps = {
  competition: { name: "Primera División Chile", slug: "primera-division-chile" },
  kickoff: "Hoy · 20:00",
  isLive: false,
  teamHome: {
    name: "Colo-Colo",
    shortName: "COL",
    colorFrom: "#ffffff",
    colorTo: "#cccccc",
  },
  teamAway: {
    name: "Universidad de Chile",
    shortName: "UCH",
    colorFrom: "#003087",
    colorTo: "#001a4d",
  },
  tip: {
    author: "Carlos Mendoza",
    text: "Colo-Colo lleva 6 partidos invicto en casa. El clásico se inclina para los albos con gol en la segunda parte.",
  },
  odds: [
    {
      outcome: "1",
      bookmaker: BM.betano,
      value: 2.10,
      isBest: true,
      deepLink: "#",
    },
    {
      outcome: "X",
      bookmaker: BM.novibet,
      value: 3.25,
      isBest: false,
      deepLink: "#",
    },
    {
      outcome: "2",
      bookmaker: BM.codere,
      value: 3.50,
      isBest: false,
      deepLink: "#",
    },
  ],
};

const defaultLive: PfMatchTipCardProps = {
  ...defaultDefault,
  isLive: true,
  liveScore: "1 - 0",
};

export const sampleData: Record<string, Record<string, PfMatchTipCardProps>> = {
  default: {
    default: defaultDefault,
    live: defaultLive,
  },
};
