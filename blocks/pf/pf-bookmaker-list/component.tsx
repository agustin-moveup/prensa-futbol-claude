import React from "react";

export interface BookmakerItem {
  rank: number;
  bookmaker: {
    name: string;
    slug: string;
    logo: { from: string; to: string; initials: string };
  };
  rating: number;
  bonus: string;
  ctaUrl: string;
  ctaLabel: string;
  disclaimer?: string;
}

export interface PfBookmakerListProps {
  title?: string;
  variant: "card" | "sidebar" | "table";
  items: BookmakerItem[];
}

function StarRating({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="pf-bookmaker-list__rating" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: full }).map((_, i) => (
        <StarIcon key={`f${i}`} type="full" />
      ))}
      {half && <StarIcon type="half" />}
      {Array.from({ length: empty }).map((_, i) => (
        <StarIcon key={`e${i}`} type="empty" />
      ))}
      <span className="pf-bookmaker-list__rating-value">{value.toFixed(1)}</span>
    </span>
  );
}

function StarIcon({ type }: { type: "full" | "half" | "empty" }) {
  return (
    <svg
      className={`pf-bookmaker-list__star pf-bookmaker-list__star--${type}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
    >
      {type === "half" ? (
        <>
          <defs>
            <clipPath id="half-clip">
              <rect x="0" y="0" width="6" height="12" />
            </clipPath>
          </defs>
          <path
            d="M6 1l1.4 2.8 3.1.45-2.25 2.19.53 3.09L6 8.05 3.22 9.53l.53-3.09L1.5 4.25l3.1-.45z"
            fill="currentColor"
            clipPath="url(#half-clip)"
          />
          <path
            d="M6 1l1.4 2.8 3.1.45-2.25 2.19.53 3.09L6 8.05 3.22 9.53l.53-3.09L1.5 4.25l3.1-.45z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </>
      ) : (
        <path
          d="M6 1l1.4 2.8 3.1.45-2.25 2.19.53 3.09L6 8.05 3.22 9.53l.53-3.09L1.5 4.25l3.1-.45z"
          fill={type === "full" ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="0.8"
        />
      )}
    </svg>
  );
}

function BookmakerLogo({
  logo,
  size = 48,
}: {
  logo: BookmakerItem["bookmaker"]["logo"];
  size?: number;
}) {
  return (
    <span
      className="pf-bookmaker-list__logo"
      style={
        {
          "--logo-from": logo.from,
          "--logo-to": logo.to,
          "--logo-size": `${size}px`,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {logo.initials}
    </span>
  );
}

function RankBadge({ rank }: { rank: number }) {
  return (
    <span
      className={`pf-bookmaker-list__rank${rank === 1 ? " pf-bookmaker-list__rank--gold" : ""}`}
    >
      {rank}
    </span>
  );
}

function CardItem({ item }: { item: BookmakerItem }) {
  return (
    <li className="pf-bookmaker-list__item">
      <div className="pf-bookmaker-list__item-main">
        <div className="pf-bookmaker-list__item-left">
          <div className="pf-bookmaker-list__logo-wrap">
            <BookmakerLogo logo={item.bookmaker.logo} />
            <RankBadge rank={item.rank} />
          </div>
          <div className="pf-bookmaker-list__item-info">
            <span className="pf-bookmaker-list__bm-name">{item.bookmaker.name}</span>
            <StarRating value={item.rating} />
            <span className="pf-bookmaker-list__bonus">{item.bonus}</span>
          </div>
        </div>
        <a
          href={item.ctaUrl}
          className="pf-bookmaker-list__cta"
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          {item.ctaLabel}
        </a>
      </div>
      {item.disclaimer && (
        <p className="pf-bookmaker-list__disclaimer">{item.disclaimer}</p>
      )}
    </li>
  );
}

function SidebarItem({ item }: { item: BookmakerItem }) {
  return (
    <li className="pf-bookmaker-list__item pf-bookmaker-list__item--sidebar">
      <div className="pf-bookmaker-list__logo-wrap">
        <BookmakerLogo logo={item.bookmaker.logo} size={40} />
        <RankBadge rank={item.rank} />
      </div>
      <span className="pf-bookmaker-list__bm-name">{item.bookmaker.name}</span>
      <StarRating value={item.rating} />
      <span className="pf-bookmaker-list__bonus">{item.bonus}</span>
      <a
        href={item.ctaUrl}
        className="pf-bookmaker-list__cta pf-bookmaker-list__cta--full"
        target="_blank"
        rel="noopener noreferrer sponsored"
      >
        {item.ctaLabel}
      </a>
    </li>
  );
}

function TableItem({ item, isFirst }: { item: BookmakerItem; isFirst: boolean }) {
  return (
    <li
      className={`pf-bookmaker-list__item pf-bookmaker-list__item--row${isFirst ? " pf-bookmaker-list__item--row-header-offset" : ""}`}
    >
      <span className="pf-bookmaker-list__col pf-bookmaker-list__col--rank">
        <RankBadge rank={item.rank} />
      </span>
      <span className="pf-bookmaker-list__col pf-bookmaker-list__col--logo-name">
        <BookmakerLogo logo={item.bookmaker.logo} size={32} />
        <span className="pf-bookmaker-list__bm-name">{item.bookmaker.name}</span>
      </span>
      <span className="pf-bookmaker-list__col pf-bookmaker-list__col--rating">
        <StarRating value={item.rating} />
      </span>
      <span className="pf-bookmaker-list__col pf-bookmaker-list__col--bonus">
        {item.bonus}
      </span>
      <span className="pf-bookmaker-list__col pf-bookmaker-list__col--cta">
        <a
          href={item.ctaUrl}
          className="pf-bookmaker-list__cta"
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          {item.ctaLabel}
        </a>
      </span>
    </li>
  );
}

export default function PfBookmakerList({
  title = "Mejores Casas de Apuestas",
  variant,
  items,
}: PfBookmakerListProps) {
  return (
    <section className={`pf-bookmaker-list pf-bookmaker-list--${variant}`}>
      {title && <h2 className="pf-bookmaker-list__title">{title}</h2>}

      {variant === "table" && (
        <div className="pf-bookmaker-list__table-header" aria-hidden="true">
          <span className="pf-bookmaker-list__col pf-bookmaker-list__col--rank">#</span>
          <span className="pf-bookmaker-list__col pf-bookmaker-list__col--logo-name">Casa</span>
          <span className="pf-bookmaker-list__col pf-bookmaker-list__col--rating">Rating</span>
          <span className="pf-bookmaker-list__col pf-bookmaker-list__col--bonus">Bono</span>
          <span className="pf-bookmaker-list__col pf-bookmaker-list__col--cta"></span>
        </div>
      )}

      <ol className="pf-bookmaker-list__list" aria-label={title}>
        {variant === "card" &&
          items.map((item) => <CardItem key={item.bookmaker.slug} item={item} />)}
        {variant === "sidebar" &&
          items.map((item) => <SidebarItem key={item.bookmaker.slug} item={item} />)}
        {variant === "table" &&
          items.map((item, i) => (
            <TableItem key={item.bookmaker.slug} item={item} isFirst={i === 0} />
          ))}
      </ol>
    </section>
  );
}
