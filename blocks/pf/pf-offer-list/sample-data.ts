import type { PfOfferListProps } from "./component";

const BM = {
  betano:     { name: "Betano",     slug: "betano",     brandColor: "#e01f26", rating: 4.8 },
  novibet:    { name: "Novibet",    slug: "novibet",    brandColor: "#1b3a6b", rating: 4.6 },
  epicbet:    { name: "EpicBet",    slug: "epicbet",    brandColor: "#16a34a", rating: 4.5 },
  fortunazo:  { name: "Fortunazo",  slug: "fortunazo",  brandColor: "#f59e0b", rating: 4.3 },
  stake:      { name: "Stake",      slug: "stake",      brandColor: "#1a9e6e", rating: 4.7 },
  betsson:    { name: "Betsson",    slug: "betsson",    brandColor: "#f7a600", rating: 4.5 },
} as const;

const TERMS = "18+. Se aplican términos y condiciones. Las apuestas están prohibidas para menores de edad. Juega responsablemente.";

// ── code variant ──────────────────────────────────────────────────────────

const codeList: PfOfferListProps = {
  title: "Ofertas destacadas",
  ctaLabel: "Ver todas",
  ctaHref: "/casas-de-apuestas",
  items: [
    {
      rank: 1,
      bookmaker: BM.betano,
      offer: "200% hasta USD 2.000",
      promoCode: "LATAMVIP",
      ctaLabel: "Obtener bono",
      ctaHref: "#betano",
      terms: TERMS,
    },
    {
      rank: 2,
      bookmaker: BM.novibet,
      offer: "Bono de hasta $200.000 en Chile",
      promoCode: "NOVICHILE",
      ctaLabel: "Obtener bono",
      ctaHref: "#novibet",
      terms: TERMS,
    },
    {
      rank: 3,
      bookmaker: BM.epicbet,
      offer: "Deposita $10.000 y obtén $20.000 + 100% hasta $200.000",
      promoCode: "EPICBONO",
      ctaLabel: "Obtener bono",
      ctaHref: "#epicbet",
      terms: TERMS,
    },
    {
      rank: 4,
      bookmaker: BM.fortunazo,
      offer: "500% + 1 año de apuestas gratis",
      promoCode: "PRENSAMAX",
      ctaLabel: "Obtener bono",
      ctaHref: "#fortunazo",
      terms: TERMS,
    },
  ],
};

// ── pros variant ──────────────────────────────────────────────────────────

const prosList: PfOfferListProps = {
  title: "Mejores casas de apuestas",
  ctaLabel: "Ver ranking completo",
  ctaHref: "/casas-de-apuestas",
  items: [
    {
      rank: 1,
      bookmaker: BM.stake,
      offer: "Apuesta sin riesgo en tu primer depósito",
      pros: [
        "Depósitos instantáneos vía Pix y cripto",
        "Streaming en vivo de más de 10.000 eventos",
        "Cash out disponible en todos los mercados",
      ],
      ctaLabel: "Ir a Stake",
      ctaHref: "#stake",
      terms: TERMS,
    },
    {
      rank: 2,
      bookmaker: BM.betsson,
      offer: "100% de bono en tu primer depósito hasta $100.000",
      pros: [
        "Cuotas mejoradas en fútbol chileno",
        "App móvil disponible en iOS y Android",
        "Atención al cliente 24/7 en español",
      ],
      ctaLabel: "Ir a Betsson",
      ctaHref: "#betsson",
      terms: TERMS,
    },
    {
      rank: 3,
      bookmaker: BM.betano,
      offer: "200% hasta USD 2.000 en tu primer depósito",
      pros: [
        "Más de 500 mercados por partido",
        "Retiro en menos de 24 horas",
        "Bonos de recarga semanales",
      ],
      ctaLabel: "Ir a Betano",
      ctaHref: "#betano",
      terms: TERMS,
    },
  ],
};

// ── code + pros variant ───────────────────────────────────────────────────

const codePlusPros: PfOfferListProps = {
  title: "Bonos con código exclusivo",
  ctaLabel: "Ver todas",
  ctaHref: "/bonos",
  items: [
    {
      rank: 1,
      bookmaker: BM.betano,
      offer: "200% hasta USD 2.000 — solo con código Prensa",
      promoCode: "LATAMVIP",
      pros: [
        "Bono exclusivo para lectores de Prensa Fútbol",
        "Retiro disponible tras cumplir el rollover x1",
      ],
      ctaLabel: "Activar bono",
      ctaHref: "#betano",
      terms: TERMS,
    },
    {
      rank: 2,
      bookmaker: BM.novibet,
      offer: "Bono de hasta $200.000 + giros gratis",
      promoCode: "NOVICHILE",
      pros: [
        "Giros gratis acreditados en 24 horas",
        "Sin requisito mínimo de cuota",
      ],
      ctaLabel: "Activar bono",
      ctaHref: "#novibet",
      terms: TERMS,
    },
  ],
};

// ── code mode showcase (copy / reveal / none) ─────────────────────────────

const codeShowcase: PfOfferListProps = {
  title: "Ofertas destacadas",
  ctaLabel: "Ver todas",
  ctaHref: "/casas-de-apuestas",
  items: [
    {
      rank: 1,
      bookmaker: BM.betano,
      offer: "200% hasta USD 2.000 en tu primer depósito",
      promoCode: "LATAMVIP",
      codeMode: "copy",
      ctaLabel: "Obtener bono",
      ctaHref: "#betano",
      terms: TERMS,
    },
    {
      rank: 2,
      bookmaker: BM.novibet,
      offer: "Bono exclusivo $200.000 — código solo para lectores",
      promoCode: "NOVICHILE",
      codeMode: "reveal",
      ctaLabel: "Obtener bono",
      ctaHref: "#novibet",
      terms: TERMS,
    },
    {
      rank: 3,
      bookmaker: BM.stake,
      offer: "Apuesta sin riesgo — sin código, bono automático",
      codeMode: "none",
      ctaLabel: "Obtener bono",
      ctaHref: "#stake",
      terms: TERMS,
    },
  ],
};

export const sampleData = {
  code:          { default: codeList, showcase: codeShowcase },
  pros:          { default: prosList },
  codePros:      { default: codePlusPros },
};
