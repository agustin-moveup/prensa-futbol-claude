import React, { useState, useId } from "react";

export interface PfNewsletterProps {
  title?: string;
  subtitle?: string;
  body?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  hint?: string;
  ctaLabel?: string;
  successTitle?: string;
  successBody?: string;
}

export default function PfNewsletter({
  title = "¡Sigue en el juego!",
  subtitle = "¡Hablamos pronto!",
  body = "Deja tu correo y no te pierdas ninguna novedad de Prensa Fútbol.",
  inputLabel = "Tu correo electrónico",
  inputPlaceholder = "tucorreo@ejemplo.com",
  hint = "Sin spam. Puedes darte de baja en cualquier momento.",
  ctaLabel = "Enviar",
  successTitle = "¡Listo!",
  successBody = "Gracias por suscribirte. Te mantendremos al tanto.",
}: PfNewsletterProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const inputId = useId();
  const hintId = useId();
  const statusId = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    // Integrate with your email service here
    setStatus("success");
  }

  return (
    <section className="pf-newsletter" aria-labelledby="pf-nl-title">
      <div className="pf-newsletter__inner">
        {status === "success" ? (
          <div className="pf-newsletter__success" role="status" aria-live="polite">
            <svg className="pf-newsletter__success-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7.5 12l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="pf-newsletter__success-title">{successTitle}</h2>
            <p className="pf-newsletter__success-body">{successBody}</p>
          </div>
        ) : (
          <>
            <div className="pf-newsletter__text">
              <h2 className="pf-newsletter__title" id="pf-nl-title">
                <span className="pf-newsletter__title-accent">¡Sigue</span>{" "}
                <span>{title.replace("¡Sigue", "").trim()}</span>
              </h2>
              {subtitle && <p className="pf-newsletter__subtitle">{subtitle}</p>}
              {body && <p className="pf-newsletter__body">{body}</p>}
            </div>

            <form
              className="pf-newsletter__form"
              onSubmit={handleSubmit}
              noValidate
              aria-describedby={statusId}
            >
              <div className="pf-newsletter__field">
                <label className="pf-newsletter__label" htmlFor={inputId}>
                  {inputLabel}
                </label>
                <div className="pf-newsletter__input-row">
                  <input
                    id={inputId}
                    type="email"
                    name="email"
                    className={`pf-newsletter__input${status === "error" ? " pf-newsletter__input--error" : ""}`}
                    placeholder={inputPlaceholder}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                    required
                    autoComplete="email"
                    aria-describedby={`${hintId}${status === "error" ? " " + statusId : ""}`}
                    aria-invalid={status === "error" ? "true" : undefined}
                  />
                  <button type="submit" className="pf-newsletter__cta">
                    {ctaLabel}
                  </button>
                </div>
                {status === "error" && (
                  <p id={statusId} className="pf-newsletter__error" role="alert">
                    Por favor ingresa un correo electrónico válido.
                  </p>
                )}
                <p id={hintId} className="pf-newsletter__hint">{hint}</p>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
