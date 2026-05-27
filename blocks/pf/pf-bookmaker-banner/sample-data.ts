import type { PfBookmakerBannerProps } from "./component";

export const sampleData: Record<string, Record<string, PfBookmakerBannerProps>> = {
  default: {
    default: {
      bookmaker: {
        name: "Betano",
        slug: "betano",
        logo: { from: "#e01f26", to: "#8b0000", initials: "BT" },
      },
      offer: {
        tagline: "Exclusivo para Chile",
        value: "200% hasta USD 2.000",
      },
      ctaLabel: "Activar bono",
      ctaUrl: "#",
      disclaimer: "18+ · Juega con responsabilidad · Términos y condiciones aplican",
    },
  },
};
