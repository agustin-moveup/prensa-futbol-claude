export interface LinkColumn {
  title: string;
  links: Array<{ label: string; url: string }>;
}

export interface PfLinkGridProps {
  heading?: string;
  columns: LinkColumn[];
}

export default function PfLinkGrid({ heading, columns }: PfLinkGridProps) {
  return (
    <section className="pf-link-grid">
      {heading && <h2 className="pf-link-grid__heading">{heading}</h2>}
      <div className="pf-link-grid__grid">
        {columns.map((col) => (
          <div key={col.title} className="pf-link-grid__col">
            <h3 className="pf-link-grid__col-title">{col.title}</h3>
            <ul className="pf-link-grid__list">
              {col.links.map((link) => (
                <li key={link.url} className="pf-link-grid__item">
                  <a href={link.url} className="pf-link-grid__link">
                    <svg className="pf-link-grid__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
