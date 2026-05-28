import type { PfPostCardProps } from "./component";

// Sample data mirrors titles/authors from the live prensafutbol.cl editorial feed

const knicks: PfPostCardProps = {
  variant: "featured",
  category: { label: "Básquetbol", slug: "basquetbol" },
  title: "New York Knicks en finales de la NBA: locura por los 53 años sin títulos disparó los precios de las entradas",
  date: "2026-05-27T10:00:00",
  author: { name: "Matías Jería", url: "/autor/matias-jeria" },
  url: "/nba/new-york-knicks-finales-nba-precios-entradas",
  image: {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=560&fit=crop&auto=format",
    alt: "Jugadores de los New York Knicks celebran clasificación a las finales de la NBA",
  },
};

const tabilo: PfPostCardProps = {
  variant: "featured",
  category: { label: "Tenis", slug: "tenis" },
  title: "Festejó sin jugar: Alejandro Tabilo se instaló en tercera ronda de Roland Garros por inesperado suceso",
  date: "2026-05-27T14:30:00",
  author: { name: "Sebastián Cornejos", url: "/autor/sebastian-cornejos" },
  url: "/tenis/tabilo-tercera-ronda-roland-garros",
  image: {
    src: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=800&h=560&fit=crop&auto=format",
    alt: "Alejandro Tabilo celebrando en Roland Garros",
  },
};

const garin: PfPostCardProps = {
  variant: "featured",
  category: { label: "Tenis", slug: "tenis" },
  title: '"No vale la pena seguir compitiendo así": Cristian Garín se abrió a chance de parar de jugar por un tiempo',
  date: "2026-05-27T17:00:00",
  author: { name: "Sebastián Cornejos", url: "/autor/sebastian-cornejos" },
  url: "/tenis/cristian-garin-pausa-carrera",
  image: {
    src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=560&fit=crop&auto=format",
    alt: "Cristian Garín durante un partido de tenis",
  },
};

const coloColo: PfPostCardProps = {
  variant: "featured",
  category: { label: "Fútbol", slug: "futbol" },
  title: "Colo-Colo aplastó a la U y se afianza como líder del Campeonato Nacional con una goleada histórica",
  date: "2026-05-28T08:00:00",
  author: { name: "Diego Valdés", url: "/autor/diego-valdes" },
  url: "/futbol/colo-colo-golea-universidad-chile-campeonato-nacional",
  image: {
    src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=560&fit=crop&auto=format",
    alt: "Jugadores de Colo-Colo festejando un gol en el Estadio Monumental",
  },
};

const chileMundial: PfPostCardProps = {
  variant: "featured",
  category: { label: "Selección", slug: "seleccion" },
  title: "La Roja convoca a sus figuras del exterior para los amistosos de junio rumbo al Mundial 2030",
  date: "2026-05-28T11:00:00",
  author: { name: "Rodrigo Fuentes", url: "/autor/rodrigo-fuentes" },
  url: "/seleccion/la-roja-convocatoria-amistosos-junio-mundial-2030",
  image: {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=560&fit=crop&auto=format",
    alt: "Jugadores de la Selección Chilena durante un entrenamiento",
  },
};

const mdExample: PfPostCardProps = {
  variant: "md",
  category: { label: "Fútbol", slug: "futbol" },
  title: "Boca Juniors ficha a refuerzo inesperado y genera locura en La Bombonera",
  date: "2026-05-27T09:00:00",
  author: { name: "Matías Jería", url: "/autor/matias-jeria" },
  url: "/futbol/boca-juniors-refuerzo-la-bombonera",
  image: {
    src: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&h=450&fit=crop&auto=format",
    alt: "Afición de Boca Juniors en La Bombonera",
  },
};

const smExample: PfPostCardProps = {
  variant: "sm",
  category: { label: "NBA", slug: "nba" },
  title: "LeBron James supera otro récord y consolida su legado como el mejor de todos los tiempos",
  date: "2026-05-26T20:00:00",
  author: { name: "Diego Valdés", url: "/autor/diego-valdes" },
  url: "/nba/lebron-james-record-mejor-todos-tiempos",
  image: {
    src: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=200&h=200&fit=crop&auto=format",
    alt: "LeBron James celebrando un nuevo récord en la NBA",
  },
};

const xsExample: PfPostCardProps = {
  variant: "xs",
  category: { label: "Fórmula 1", slug: "formula-1" },
  title: "Verstappen domina la clasificación del GP de Mónaco y saldrá primero",
  date: "2026-05-28T06:30:00",
  author: { name: "Sebastián Cornejos", url: "/autor/sebastian-cornejos" },
  url: "/formula-1/verstappen-pole-gp-monaco",
};

export const sampleData = {
  featured: { knicks, tabilo, garin, coloColo, chileMundial },
  md: { default: mdExample },
  sm: { default: smExample },
  xs: { default: xsExample },
  default: { default: knicks },
};
