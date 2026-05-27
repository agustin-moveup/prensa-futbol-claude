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

const libertadores: PfMatchTipCardProps = {
  competition: { name: "Copa Libertadores", slug: "copa-libertadores" },
  kickoff: "Hoy · 22:30",
  isLive: false,
  teamHome: {
    name: "River Plate",
    shortName: "RIV",
    colorFrom: "#cc0000",
    colorTo: "#8b0000",
  },
  teamAway: {
    name: "Flamengo",
    shortName: "FLA",
    colorFrom: "#cc0000",
    colorTo: "#1a1a1a",
  },
  tip: {
    author: "Diego Herrera",
    text: "River en el Monumental es un fortín. Con Flamengo en baja forma fuera de casa, apostamos por victoria local.",
  },
  odds: [
    {
      outcome: "1",
      bookmaker: BM.betsson,
      value: 1.85,
      isBest: true,
      deepLink: "#",
    },
    {
      outcome: "X",
      bookmaker: BM.betano,
      value: 3.60,
      isBest: false,
      deepLink: "#",
    },
    {
      outcome: "2",
      bookmaker: BM.epicbet,
      value: 4.20,
      isBest: false,
      deepLink: "#",
    },
  ],
};

const premierLeague: PfMatchTipCardProps = {
  competition: { name: "Premier League", slug: "premier-league" },
  kickoff: "Mañana · 17:30",
  isLive: false,
  teamHome: {
    name: "Arsenal",
    shortName: "ARS",
    colorFrom: "#EF0107",
    colorTo: "#9c0000",
  },
  teamAway: {
    name: "Manchester City",
    shortName: "MCI",
    colorFrom: "#6CABDD",
    colorTo: "#1c5fa8",
  },
  tip: {
    author: "Sofía Ramos",
    text: "El Emirates se convierte en un campo minado para el City. Arsenal con motivación extra tras la derrota de la semana pasada.",
  },
  odds: [
    {
      outcome: "1",
      bookmaker: BM.betano,
      value: 2.45,
      isBest: true,
      deepLink: "#",
    },
    {
      outcome: "X",
      bookmaker: BM.coolbet,
      value: 3.10,
      isBest: false,
      deepLink: "#",
    },
    {
      outcome: "2",
      bookmaker: BM.codere,
      value: 2.95,
      isBest: false,
      deepLink: "#",
    },
  ],
};

const mundialClub: PfMatchTipCardProps = {
  competition: { name: "Mundial de Clubes FIFA 2025", slug: "mundial-clubes-2025" },
  kickoff: "Hoy · 21:00",
  isLive: false,
  teamHome: {
    name: "Real Madrid",
    shortName: "RMA",
    colorFrom: "#FEBE10",
    colorTo: "#003087",
  },
  teamAway: {
    name: "Al Hilal",
    shortName: "HIL",
    colorFrom: "#005BAC",
    colorTo: "#002d56",
  },
  tip: {
    author: "Marcos Fuentes",
    text: "Real Madrid con toda su artillería en un torneo que quiere ganar sí o sí. Los saudíes pueden sorprender pero la diferencia de nivel es clara.",
  },
  odds: [
    {
      outcome: "1",
      bookmaker: BM.novibet,
      value: 1.55,
      isBest: true,
      deepLink: "#",
    },
    {
      outcome: "X",
      bookmaker: BM.betsson,
      value: 4.00,
      isBest: false,
      deepLink: "#",
    },
    {
      outcome: "2",
      bookmaker: BM.epicbet,
      value: 6.50,
      isBest: false,
      deepLink: "#",
    },
  ],
};

export const sampleData: Record<string, Record<string, PfMatchTipCardProps>> = {
  default: {
    default: defaultDefault,
    live: defaultLive,
    libertadores,
    premierLeague,
    mundialClub,
  },
};
