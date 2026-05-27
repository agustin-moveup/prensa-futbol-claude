import type { PfMatchTipCardProps } from "./component";

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
      bookmaker: { name: "Betsson", slug: "betsson" },
      value: 2.1,
      isBest: true,
      deepLink: "#",
    },
    {
      outcome: "X",
      bookmaker: { name: "Coolbet", slug: "coolbet" },
      value: 3.25,
      isBest: false,
      deepLink: "#",
    },
    {
      outcome: "2",
      bookmaker: { name: "Codere", slug: "codere" },
      value: 3.5,
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
