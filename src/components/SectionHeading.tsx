interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  headingId: string;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  headingId,
}: SectionHeadingProps) {
  return (
    <header className="section-heading scroll-reveal">
      <div className="section-heading__meta">
        <span className="section-heading__number" aria-hidden="true">
          {number}
        </span>
        <span className="section-heading__eyebrow">{eyebrow}</span>
      </div>

      <div className="section-heading__content">
        <h2 id={headingId}>{title}</h2>
        <p>{description}</p>
      </div>

      <span className="section-heading__line" aria-hidden="true" />
    </header>
  );
}
