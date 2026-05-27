import type { PfCompetitionAccordionProps } from "./component";

const BM = {
  betano:  { name: "Betano",    slug: "betano",  brandColor: "#e01f26" },
  epicbet: { name: "EpicBet",   slug: "epicbet", brandColor: "#16a34a" },
  novibet: { name: "Novibet",   slug: "novibet", brandColor: "#1b3a6b" },
  fortunazo: { name: "Fortunazo", slug: "fortunazo", brandColor: "#f97316" },
  betsson: { name: "Betsson",   slug: "betsson", brandColor: "#f7a600" },
} as const;

const sudamericana: PfCompetitionAccordionProps = {
  competition: {
    name: "CONMEBOL Sudamericana",
    slug: "conmebol-sudamericana",
    logo: { from: "#f7a600", to: "#c27d00", initials: "SA" },
  },
  isOpenByDefault: true,
  matches: [
    {
      id: "sao-paulo-boston-river",
      status: "finish",
      kickoff: "Finalizado",
      teamHome: { name: "Sao Paulo", slug: "sao-paulo", logo: { from: "#cc0000", to: "#800000", initials: "SP" } },
      teamAway: { name: "Boston River", slug: "boston-river", logo: { from: "#0066cc", to: "#003d7a", initials: "BR" } },
      url: "#",
      odds: [
        { outcome: "1", bookmaker: BM.betano,  value: 1.20, deepLink: "#" },
        { outcome: "X", bookmaker: BM.epicbet, value: 7.00, deepLink: "#" },
        { outcome: "2", bookmaker: BM.novibet, value: 15.77, deepLink: "#" },
      ],
    },
    {
      id: "palestino-riestra",
      status: "live",
      kickoff: "En vivo",
      teamHome: { name: "Palestino", slug: "palestino", logo: { from: "#006600", to: "#004000", initials: "PA" } },
      teamAway: { name: "Deportivo Riestra", slug: "deportivo-riestra", logo: { from: "#cc0000", to: "#8b0000", initials: "DR" } },
      url: "#",
      odds: [
        { outcome: "1", bookmaker: BM.betano,    value: 2.27, deepLink: "#" },
        { outcome: "X", bookmaker: BM.novibet,   value: 3.20, deepLink: "#" },
        { outcome: "2", bookmaker: BM.fortunazo, value: 3.46, deepLink: "#" },
      ],
    },
    {
      id: "millonarios-ohiggins",
      status: "live",
      kickoff: "En vivo",
      teamHome: { name: "Millonarios", slug: "millonarios", logo: { from: "#003087", to: "#001a4d", initials: "MI" } },
      teamAway: { name: "O'Higgins", slug: "ohiggins", logo: { from: "#cc0000", to: "#8b0000", initials: "OH" } },
      url: "#",
      odds: [
        { outcome: "1", bookmaker: BM.novibet, value: 1.65, deepLink: "#" },
        { outcome: "X", bookmaker: BM.betano,  value: 4.25, deepLink: "#" },
        { outcome: "2", bookmaker: BM.betano,  value: 6.50, deepLink: "#" },
      ],
    },
    {
      id: "olimpia-aitaliano",
      status: "upcoming",
      kickoff: "27 Mayo\n18:00",
      teamHome: { name: "Olimpia", slug: "olimpia", logo: { from: "#1a1a1a", to: "#000000", initials: "OL" } },
      teamAway: { name: "Audax Italiano", slug: "audax-italiano", logo: { from: "#006600", to: "#004000", initials: "AI" } },
      url: "#",
      odds: [
        { outcome: "1", bookmaker: BM.betano,  value: 1.65, deepLink: "#" },
        { outcome: "X", bookmaker: BM.epicbet, value: 4.00, deepLink: "#" },
        { outcome: "2", bookmaker: BM.betano,  value: 5.40, deepLink: "#" },
      ],
    },
  ],
};

const primeraDiv: PfCompetitionAccordionProps = {
  competition: {
    name: "Primera División Chile",
    slug: "primera-division-chile",
    logo: { from: "#FF2F2F", to: "#cc0000", initials: "PD" },
  },
  isOpenByDefault: false,
  matches: [
    {
      id: "colo-colo-uch",
      status: "upcoming",
      kickoff: "28 Mayo\n20:00",
      teamHome: { name: "Colo-Colo", slug: "colo-colo", logo: { from: "#ffffff", to: "#cccccc", initials: "CC" } },
      teamAway: { name: "Universidad de Chile", slug: "u-de-chile", logo: { from: "#003087", to: "#001a4d", initials: "UC" } },
      url: "#",
      odds: [
        { outcome: "1", bookmaker: BM.betano,  value: 2.10, deepLink: "#" },
        { outcome: "X", bookmaker: BM.novibet, value: 3.25, deepLink: "#" },
        { outcome: "2", bookmaker: BM.betsson, value: 3.50, deepLink: "#" },
      ],
    },
    {
      id: "cobresal-antofagasta",
      status: "upcoming",
      kickoff: "28 Mayo\n17:30",
      teamHome: { name: "Cobresal", slug: "cobresal", logo: { from: "#f97316", to: "#c2410c", initials: "CO" } },
      teamAway: { name: "Antofagasta", slug: "antofagasta", logo: { from: "#0066cc", to: "#003d7a", initials: "AN" } },
      url: "#",
      odds: [
        { outcome: "1", bookmaker: BM.betano,  value: 1.90, deepLink: "#" },
        { outcome: "X", bookmaker: BM.epicbet, value: 3.40, deepLink: "#" },
        { outcome: "2", bookmaker: BM.novibet, value: 4.10, deepLink: "#" },
      ],
    },
  ],
};

export const sampleData: Record<string, Record<string, PfCompetitionAccordionProps>> = {
  default: {
    default: sudamericana,
    closed: primeraDiv,
  },
};
