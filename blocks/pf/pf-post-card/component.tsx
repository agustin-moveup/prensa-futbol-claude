import React from "react";

export type PostCardVariant = "featured" | "md" | "sm" | "xs";

export interface PfPostCardProps {
  variant: PostCardVariant;
  category: { label: string; slug: string };
  title: string;
  excerpt?: string;
  image?: { src: string; alt: string };
  date: string; // ISO datetime
  author: { name: string; url: string };
  url: string;
}

// Editorial news card — four display variants in one block.
// featured: full-bleed image + gradient overlay — hero placement or slider
// md:       image-top + body below — grid layouts
// sm:       horizontal image-left — sidebar rails or compact lists
// xs:       no image — densest variant for text-only list rails

function formatDate(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const h = Math.floor(diff / 3_600_000);
  if (h < 1) return "Hace menos de 1h";
  if (h < 24) return `Hace ${h}h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `Hace ${d}d`;
  return new Date(iso).toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function PfPostCard({
  variant,
  category,
  title,
  excerpt,
  image,
  date,
  author,
  url,
}: PfPostCardProps) {
  const dateStr = formatDate(date);
  const showImage = !!image && variant !== "xs";

  return (
    <article className={`pf-post-card pf-post-card--${variant}`}>
      <a href={url} className="pf-post-card__link">
        {showImage && (
          <div className="pf-post-card__image-wrap">
            <img
              src={image!.src}
              alt={image!.alt}
              className="pf-post-card__image"
              loading="lazy"
              width={variant === "sm" ? 100 : 400}
              height={variant === "sm" ? 100 : variant === "md" ? 225 : 280}
            />
            {variant === "featured" && (
              <div className="pf-post-card__overlay" aria-hidden="true" />
            )}
            {variant === "md" && (
              <span
                className="pf-post-card__category"
                aria-label={`Categoría: ${category.label}`}
              >
                {category.label}
              </span>
            )}
          </div>
        )}

        {/* featured: badge is a sibling of image-wrap, positioned top-left via CSS */}
        {variant === "featured" && (
          <span
            className="pf-post-card__category"
            aria-label={`Categoría: ${category.label}`}
          >
            {category.label}
          </span>
        )}

        <div className="pf-post-card__body">
          {(variant === "sm" || variant === "xs") && (
            <span
              className="pf-post-card__category"
              aria-label={`Categoría: ${category.label}`}
            >
              {category.label}
            </span>
          )}
          <h3 className="pf-post-card__title">{title}</h3>
          {excerpt && variant === "featured" && (
            <p className="pf-post-card__excerpt">{excerpt}</p>
          )}
          <div className="pf-post-card__byline">
            <span className="pf-post-card__author">{author.name}</span>
            <span className="pf-post-card__byline-sep" aria-hidden="true">·</span>
            <time className="pf-post-card__date" dateTime={date}>{dateStr}</time>
          </div>
        </div>
      </a>
    </article>
  );
}
