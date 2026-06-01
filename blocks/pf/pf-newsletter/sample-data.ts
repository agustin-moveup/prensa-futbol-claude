import type { PfNewsletterProps } from "./component";

export const sampleData: Record<string, Record<string, PfNewsletterProps>> = {
  default: {
    default: {
      title: "¡Sigue en el juego!",
      subtitle: "¡Hablamos pronto!",
      body: "Deja tu correo y no te pierdas ninguna novedad de Prensa Fútbol.",
      inputLabel: "Tu correo electrónico",
      inputPlaceholder: "tucorreo@ejemplo.com",
      hint: "Sin spam. Puedes darte de baja en cualquier momento.",
      ctaLabel: "Enviar",
      successTitle: "¡Listo!",
      successBody: "Gracias por suscribirte. Te mantendremos al tanto.",
    },
  },
};
