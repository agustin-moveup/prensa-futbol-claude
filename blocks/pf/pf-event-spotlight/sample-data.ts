import type { PfEventSpotlightProps } from "./component";

// ── Mundial 2026 — spotlight layout ──────────────────────────────────────────

const mundialSpotlight: PfEventSpotlightProps = {
  event: {
    kicker: "Cobertura especial",
    title: "Mundial 2026",
    accentFrom: "#1a7a4f",
    accentTo: "#0d5436",
    ctaLabel: "Ver todo el Mundial",
    ctaUrl: "/mundial-2026",
  },
  layout: "spotlight",
  articles: [
    {
      category: { label: "Selección", slug: "seleccion" },
      title:
        "La Roja convoca a sus figuras del exterior para los amistosos rumbo al Mundial 2026",
      excerpt:
        "Ricardo Gareca presenta la lista oficial con más de 30 jugadores. Vidal y Alexis lideran la nómina en una convocatoria histórica de cara al torneo de EE.UU.",
      image: {
        src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=560&fit=crop&auto=format",
        alt: "Jugadores de la Selección Chilena durante un entrenamiento",
      },
      date: "2026-05-28T11:00:00",
      author: { name: "Rodrigo Fuentes", url: "/autor/rodrigo-fuentes" },
      url: "/seleccion/la-roja-convocatoria-amistosos-junio-mundial-2026",
    },
    {
      category: { label: "Mundial", slug: "mundial" },
      title: "Los grupos del Mundial 2026: Chile queda en el Grupo B junto a Argentina y Brasil",
      image: {
        src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&h=200&fit=crop&auto=format",
        alt: "Sorteo de grupos para el Mundial 2026",
      },
      date: "2026-05-27T15:00:00",
      author: { name: "Diego Valdés", url: "/autor/diego-valdes" },
      url: "/mundial/grupos-mundial-2026-chile-grupo-b",
    },
    {
      category: { label: "Mundial", slug: "mundial" },
      title: "Las sedes confirmadas del Mundial 2026: estadios en EE.UU., Canadá y México",
      image: {
        src: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=200&h=200&fit=crop&auto=format",
        alt: "Estadio sede del Mundial 2026",
      },
      date: "2026-05-26T10:00:00",
      author: { name: "Matías Jería", url: "/autor/matias-jeria" },
      url: "/mundial/sedes-estadios-mundial-2026",
    },
    {
      category: { label: "Apuestas", slug: "apuestas" },
      title: "Argentina, Brasil y Francia lideran las apuestas para ganar el Mundial 2026",
      image: {
        src: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=200&h=200&fit=crop&auto=format",
        alt: "Cuotas favoritos Mundial 2026",
      },
      date: "2026-05-25T14:00:00",
      author: { name: "Sebastián Cornejos", url: "/autor/sebastian-cornejos" },
      url: "/apuestas/favoritos-mundial-2026",
    },
  ],
};

// ── Copa América — rail layout ────────────────────────────────────────────────

const copaAmericaRail: PfEventSpotlightProps = {
  event: {
    kicker: "Especial",
    title: "Copa América 2027",
    ctaLabel: "Ver cobertura completa",
    ctaUrl: "/copa-america",
  },
  layout: "rail",
  articles: [
    {
      category: { label: "Copa América", slug: "copa-america" },
      title: "Conmebol confirma Brasil como sede única de la Copa América 2027",
      image: {
        src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop&auto=format",
        alt: "Sede Copa América 2027",
      },
      date: "2026-05-28T09:00:00",
      author: { name: "Rodrigo Fuentes", url: "/autor/rodrigo-fuentes" },
      url: "/copa-america/brasil-sede-copa-america-2027",
    },
    {
      category: { label: "Copa América", slug: "copa-america" },
      title: "Chile se afina para la clasificación: así llega el equipo a los amistosos previos",
      image: {
        src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=450&fit=crop&auto=format",
        alt: "Chile amistosos clasificación Copa América",
      },
      date: "2026-05-27T12:00:00",
      author: { name: "Diego Valdés", url: "/autor/diego-valdes" },
      url: "/copa-america/chile-amistosos-clasificacion",
    },
    {
      category: { label: "Copa América", slug: "copa-america" },
      title: "Las cuotas de la Copa América: Argentina aplastante favorita según los bookmakers",
      image: {
        src: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&h=450&fit=crop&auto=format",
        alt: "Cuotas Copa América bookmakers",
      },
      date: "2026-05-26T16:00:00",
      author: { name: "Matías Jería", url: "/autor/matias-jeria" },
      url: "/apuestas/cuotas-copa-america-2027",
    },
    {
      category: { label: "Copa América", slug: "copa-america" },
      title: "Los jugadores a seguir en la Copa América: de Messi a Vinicius, las estrellas del torneo",
      image: {
        src: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=450&fit=crop&auto=format",
        alt: "Estrellas Copa América",
      },
      date: "2026-05-25T11:00:00",
      author: { name: "Sebastián Cornejos", url: "/autor/sebastian-cornejos" },
      url: "/copa-america/jugadores-destacados-copa-america-2027",
    },
  ],
};

export const sampleData = {
  mundial:    { spotlight: mundialSpotlight },
  copaAmerica: { rail: copaAmericaRail },
};
