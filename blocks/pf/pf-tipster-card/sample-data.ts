import type { PfTipsterCardProps } from "./component";

export const sampleData: Record<string, Record<string, PfTipsterCardProps>> = {
  default: {
    default: {
      tipster: {
        name: "Lucas Bennett",
        slug: "lucas-bennett",
        avatar: { from: "#3b82f6", to: "#1d4ed8", initials: "LB" },
        specialty: "Senior Betting Analyst & Sports Expert",
        profileUrl: "#",
      },
      pick: {
        label: "Colo Colo to win",
        bookmaker: {
          name: "bet365",
          slug: "bet365",
          brandColor: "#026b00",
          brandTextColor: "#ffffff",
        },
        odds: 1.48,
        ctaLabel: "Apostar ahora",
        ctaUrl: "#",
      },
      quote:
        "Colo-Colo ha sido sólido en casa, y con Universidad de Chile sin sus jugadores clave, una victoria local luce muy probable.",
    },
    alternate: {
      tipster: {
        name: "Carlos Mendoza",
        slug: "carlos-mendoza",
        avatar: { from: "#f97316", to: "#c2410c", initials: "CM" },
        specialty: "Analista de Primera División & CONMEBOL",
        profileUrl: "#",
      },
      pick: {
        label: "Ambos equipos anotan",
        bookmaker: {
          name: "Betano",
          slug: "betano",
          brandColor: "#e01f26",
          brandTextColor: "#ffffff",
        },
        odds: 1.72,
        ctaLabel: "Apostar ahora",
        ctaUrl: "#",
      },
      quote:
        "Los últimos 5 clásicos han terminado con goles de ambos lados. La defensa de la U sigue sin encontrar solidez y Colo-Colo tiene la pólvora arriba.",
    },
  },
};
