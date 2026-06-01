import React, { useState } from "react";

/* ── Icon library (inline SVG) ── */

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M7 16l4-5 4 3 4-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  star: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    </svg>
  ),
  users: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.75"/>
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  ),
  bolt: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.75"/>
    </svg>
  ),
  checkCircle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  lock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75"/>
      <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  ),
};

/* ── Feature item ── */

export interface FeatureItem {
  icon?: keyof typeof icons;
  title: string;
  body: string;
}

/* ── FAQ item ── */

export interface FaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

/* ── Shared header ── */

export interface ContentBlockHeader {
  eyebrow?: string;
  title: string;
  lead?: string;
}

/* ── Features variant ── */

export interface PfContentBlockFeaturesProps extends ContentBlockHeader {
  variant: "features";
  items: FeatureItem[];
  outro?: string;
}

/* ── FAQ variant ── */

export interface PfContentBlockFaqProps extends ContentBlockHeader {
  variant: "faq";
  intro?: string;
  items: FaqItem[];
}

export type PfContentBlockProps = PfContentBlockFeaturesProps | PfContentBlockFaqProps;

/* ── FAQ accordion item ── */

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(item.defaultOpen ?? false);

  return (
    <div className={`pf-content-block__faq-item${open ? " pf-content-block__faq-item--open" : ""}`}>
      <button
        className="pf-content-block__faq-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span className="pf-content-block__faq-question">{item.question}</span>
        <svg
          className="pf-content-block__faq-chevron"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="pf-content-block__faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

/* ── Main component ── */

export default function PfContentBlock(props: PfContentBlockProps) {
  const { variant, eyebrow, title, lead } = props;

  return (
    <section className={`pf-content-block pf-content-block--${variant}`}>
      <div className="pf-content-block__header">
        {eyebrow && <p className="pf-content-block__eyebrow">{eyebrow}</p>}
        <h2 className="pf-content-block__title">{title}</h2>
        {lead && <p className="pf-content-block__lead">{lead}</p>}
      </div>

      {variant === "features" && (
        <>
          <ul className="pf-content-block__grid" role="list">
            {props.items.map((item, i) => (
              <li key={i} className="pf-content-block__feature">
                <div className="pf-content-block__feature-icon" aria-hidden="true">
                  {item.icon ? icons[item.icon] : icons.checkCircle}
                </div>
                <div className="pf-content-block__feature-text">
                  <h3 className="pf-content-block__feature-title">{item.title}</h3>
                  <p className="pf-content-block__feature-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          {props.outro && <p className="pf-content-block__outro">{props.outro}</p>}
        </>
      )}

      {variant === "faq" && (
        <>
          {props.intro && <p className="pf-content-block__intro">{props.intro}</p>}
          <div className="pf-content-block__faq-list">
            {props.items.map((item, i) => (
              <FaqAccordionItem key={i} item={item} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
