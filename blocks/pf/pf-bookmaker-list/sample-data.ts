import type { PfBookmakerListProps } from "./component";

const DISCLAIMER = "18+ | Se aplican términos y condiciones | Las apuestas están prohibidas para menores de edad | Juega responsablemente";

const items: PfBookmakerListProps["items"] = [
  {
    rank: 1,
    bookmaker: {
      name: "Betano",
      slug: "betano",
      logo: { from: "#e01f26", to: "#8b0000", initials: "BT" },
    },
    rating: 4.8,
    bonus: "200% Hasta USD 2000",
    ctaUrl: "#",
    ctaLabel: "Actívalo",
    disclaimer: DISCLAIMER,
  },
  {
    rank: 2,
    bookmaker: {
      name: "Novibet",
      slug: "novibet",
      logo: { from: "#1b3a6b", to: "#0d1f3c", initials: "NV" },
    },
    rating: 4.6,
    bonus: "Bono de hasta $200.000 en Chile",
    ctaUrl: "#",
    ctaLabel: "Actívalo",
    disclaimer: DISCLAIMER,
  },
  {
    rank: 3,
    bookmaker: {
      name: "Epicbet",
      slug: "epicbet",
      logo: { from: "#16a34a", to: "#14532d", initials: "EP" },
    },
    rating: 4.5,
    bonus: "Deposita $10.000 y obtén $20.000 + 100% hasta $200.000",
    ctaUrl: "#",
    ctaLabel: "Actívalo",
    disclaimer: DISCLAIMER,
  },
  {
    rank: 4,
    bookmaker: {
      name: "Fortunazo",
      slug: "fortunazo",
      logo: { from: "#f97316", to: "#c2410c", initials: "FZ" },
    },
    rating: 4.3,
    bonus: "500% + 1 año de apuestas gratis",
    ctaUrl: "#",
    ctaLabel: "Actívalo",
    disclaimer: DISCLAIMER,
  },
];

export const sampleData: Record<string, Record<string, PfBookmakerListProps>> = {
  card: {
    default: { title: "Mejores Casas de Apuestas", variant: "card", items },
  },
  sidebar: {
    default: { title: "Top Casas", variant: "sidebar", items: items.slice(0, 3) },
  },
  table: {
    default: { title: "Comparativa de Casas de Apuestas", variant: "table", items },
  },
};
