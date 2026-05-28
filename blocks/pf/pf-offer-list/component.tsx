import React from "react";

export interface OfferBookmaker {
  name: string;
  slug: string;
  brandColor: string;
  brandTextColor?: string;
  rating: number; // out of 5
}

export interface OfferItem {
  rank?: number;
  bookmaker: OfferBookmaker;
  offer: string;
  promoCode?: string;
  pros?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  terms?: string;
}

export interface PfOfferListProps {
  title: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: OfferItem[];
}

// ── Stars ──────────────────────────────────────────────────────

function StarSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.2 9.96 5.6l4.84.42-3.66 3.18 1.1 4.7L8 11.55 3.76 13.9l1.1-4.7L1.2 6.02l4.84-.42L8 1.2Z"/>
    </svg>
  );
}

function Stars({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const five = [0, 1, 2, 3, 4];
  return (
    <span className="pf-offer-list__stars" aria-label={`${value.toFixed(1)} de 5 estrellas`}>
      <span className="pf-offer-list__stars-track" aria-hidden="true">
        {five.map((i) => <StarSvg key={i}/>)}
      </span>
      <span className="pf-offer-list__stars-fill" style={{ width: `${pct}%` }} aria-hidden="true">
        {five.map((i) => <StarSvg key={i}/>)}
      </span>
    </span>
  );
}

// ── Rank badge ─────────────────────────────────────────────────

function RankBadge({ rank }: { rank: number }) {
  const mod = rank === 1 ? "gold" : rank === 2 ? "silver" : rank === 3 ? "bronze" : "plain";
  return <span className={`pf-offer-list__rank pf-offer-list__rank--${mod}`} aria-label={`#${rank}`}>{rank}</span>;
}

// ── Promo code box ─────────────────────────────────────────────

function CodeBox({ code }: { code: string }) {
  return (
    <button
      className="pf-offer-list__code"
      type="button"
      aria-label={`Copiar código promocional ${code}`}
    >
      <span className="pf-offer-list__code-label">Código promo</span>
      <span className="pf-offer-list__code-value">{code}</span>
      <span className="pf-offer-list__code-icon" aria-hidden="true">
        <svg viewBox="0 0 18 18" fill="none" width="15" height="15">
          <rect x="5.75" y="5.75" width="9" height="9" rx="1.25" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M11.5 5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6.5a1 1 0 0 0 1 1h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </span>
    </button>
  );
}

// ── Pros list ──────────────────────────────────────────────────

function ProsList({ pros }: { pros: string[] }) {
  return (
    <ul className="pf-offer-list__pros">
      {pros.map((pro, i) => (
        <li key={i} className="pf-offer-list__pro">
          <span className="pf-offer-list__pro-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
              <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeWidth="1"/>
              <path d="m4.5 8.25 2.25 2.25L11.5 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>{pro}</span>
        </li>
      ))}
    </ul>
  );
}

// ── Single offer card ──────────────────────────────────────────

function OfferCard(item: OfferItem) {
  const { rank, bookmaker, offer, promoCode, pros, ctaLabel = "Obtener bono", ctaHref = "#", terms } = item;
  const variant = promoCode && pros?.length ? "code-pros" : promoCode ? "code" : pros?.length ? "pros" : "plain";

  return (
    <li className="pf-offer-list__item">
      <article
        className={`pf-offer-list__card pf-offer-list__card--${variant}`}
        aria-label={`${bookmaker.name} — ${offer}`}
      >
        {/* Head: rank + logo + name + rating */}
        <div className="pf-offer-list__head">
          {rank != null && <RankBadge rank={rank}/>}
          <span
            className="pf-offer-list__logo"
            style={{ "--bm-brand-color": bookmaker.brandColor } as React.CSSProperties}
            aria-hidden="true"
          >
            {bookmaker.name.slice(0, 2).toUpperCase()}
          </span>
          <div className="pf-offer-list__head-text">
            <span className="pf-offer-list__name">{bookmaker.name}</span>
            <span className="pf-offer-list__rating">
              <Stars value={bookmaker.rating}/>
              <span className="pf-offer-list__rating-num">{bookmaker.rating.toFixed(1)}</span>
            </span>
          </div>
        </div>

        {/* Offer text */}
        <p className="pf-offer-list__offer">{offer}</p>

        {/* Zone: code and/or pros */}
        {(promoCode || (pros && pros.length > 0)) && (
          <div className="pf-offer-list__zone">
            {promoCode && <CodeBox code={promoCode}/>}
            {pros && pros.length > 0 && <ProsList pros={pros}/>}
          </div>
        )}

        {/* CTA */}
        <a href={ctaHref} className="pf-offer-list__cta" rel="nofollow sponsored noopener">
          {ctaLabel}
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width="14" height="14">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </article>

      {terms && <p className="pf-offer-list__terms">{terms}</p>}
    </li>
  );
}

// ── Main export ───────────────────────────────────────────────
// Variant reference:
//   code     → promo code only       — landing pages, bonus hunters
//   pros     → feature bullets only  — ranking/comparison pages (best use case for ordered lists)
//   code-pros → code + bullets       — high-priority placements where both signals matter
//   plain    → no zone               — minimal editorial contexts

export default function PfOfferList({ title, ctaLabel, ctaHref = "#", items }: PfOfferListProps) {
  return (
    <section className="pf-offer-list">
      <div className="pf-offer-list__header">
        <h2 className="pf-offer-list__title">{title}</h2>
        {ctaLabel && (
          <a href={ctaHref} className="pf-offer-list__header-cta">
            {ctaLabel}
            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" width="13" height="13">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
      <ol className="pf-offer-list__items">
        {items.map((item, i) => (
          <OfferCard key={`${item.bookmaker.slug}-${i}`} {...item}/>
        ))}
      </ol>
    </section>
  );
}
