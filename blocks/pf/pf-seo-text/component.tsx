export interface SeoSection {
  heading: string;
  body: string;
}

export interface PfSeoTextProps {
  title: string;
  sections: SeoSection[];
}

export default function PfSeoText({ title, sections }: PfSeoTextProps) {
  return (
    <section className="pf-seo-text">
      <h2 className="pf-seo-text__title">{title}</h2>
      <div className="pf-seo-text__body">
        {sections.map((sec) => (
          <div key={sec.heading} className="pf-seo-text__section">
            <h3 className="pf-seo-text__section-heading">{sec.heading}</h3>
            <p className="pf-seo-text__section-body">{sec.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
