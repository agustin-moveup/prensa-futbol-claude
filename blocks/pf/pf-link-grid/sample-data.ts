import type { PfLinkGridProps } from "./component";

export const sampleData: Record<string, Record<string, PfLinkGridProps>> = {
  default: {
    default: {
      heading: "Guías y Códigos Promocionales",
      columns: [
        {
          title: "Casas de Apuestas",
          links: [
            { label: "Mejores casas de apuestas Chile", url: "#" },
            { label: "Betano Chile código promo", url: "#" },
            { label: "Betsson bono bienvenida", url: "#" },
            { label: "Novibet registro Chile", url: "#" },
            { label: "Codere apuestas deportivas", url: "#" },
          ],
        },
        {
          title: "Guías de Apuestas",
          links: [
            { label: "Cómo apostar en fútbol", url: "#" },
            { label: "Qué es el handicap asiático", url: "#" },
            { label: "Apuestas en vivo: guía completa", url: "#" },
            { label: "Gestión de bankroll", url: "#" },
            { label: "Mejores mercados de apuestas", url: "#" },
          ],
        },
        {
          title: "Competiciones",
          links: [
            { label: "Apuestas Primera División Chile", url: "#" },
            { label: "Copa Libertadores cuotas", url: "#" },
            { label: "CONMEBOL Sudamericana", url: "#" },
            { label: "Eliminatorias Sudamericanas", url: "#" },
            { label: "Liga Premier apuestas", url: "#" },
          ],
        },
        {
          title: "Pronósticos",
          links: [
            { label: "Pronósticos del día", url: "#" },
            { label: "Tips de fútbol gratis", url: "#" },
            { label: "Mejores cuotas hoy", url: "#" },
            { label: "Predicciones fin de semana", url: "#" },
            { label: "Análisis de partidos", url: "#" },
          ],
        },
      ],
    },
  },
};
