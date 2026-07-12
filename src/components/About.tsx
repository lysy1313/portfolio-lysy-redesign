import { useLanguage } from "../content/useLanguage";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { copy } = useLanguage();

  return (
    <section
      className="about section section--bordered"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="shell">
        <SectionHeading
          number="03"
          eyebrow={copy.about.eyebrow}
          title={copy.about.title}
          description={copy.about.description}
          headingId="about-title"
        />

        <div className="about-grid">
          <div className="about-story scroll-reveal">
            <div className="about-story__marker" aria-hidden="true">
              <span>LYSY</span>
              <span>FRONTEND / DEV</span>
            </div>

            <div className="about-story__copy">
              {copy.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-story__cards">
              <article>
                <span>{copy.about.educationLabel}</span>
                <strong>{copy.about.education}</strong>
              </article>
              <article>
                <span>{copy.about.approachLabel}</span>
                <strong>{copy.about.approach}</strong>
              </article>
            </div>
          </div>

          <div className="about-visual scroll-reveal" aria-hidden="true">
            <div className="about-visual__grid" />
            <div className="about-visual__orbit about-visual__orbit--outer">
              <span>REACT</span>
              <span>TYPE</span>
              <span>UX</span>
            </div>
            <div className="about-visual__orbit about-visual__orbit--inner" />
            <div className="about-visual__core">
              <span>L</span>
              <small>13 / 13</small>
            </div>
            <span className="about-visual__coordinate about-visual__coordinate--x">
              X 53.9
            </span>
            <span className="about-visual__coordinate about-visual__coordinate--y">
              Y 27.5
            </span>
          </div>

          <article className="about-code scroll-reveal">
            <div className="about-code__header">
              <span>{copy.about.codeLabel}</span>
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="about-code__body">
              <span className="about-code__token">export const</span>
              <span> mindset = &#123;</span>
              {copy.about.codeLines.map((line) => {
                const [property, value] = line.split(": ");
                return (
                  <span className="about-code__line" key={line}>
                    <i>{property}:</i> <b>{value},</b>
                  </span>
                );
              })}
              <span>&#125; as const;</span>
            </div>
          </article>

          <article className="about-facts scroll-reveal">
            <div className="about-facts__heading">
              <Icon name="spark" width={22} height={22} />
              <h3>{copy.about.factsLabel}</h3>
            </div>
            <ul>
              {copy.about.facts.map((fact, index) => (
                <li key={fact}>
                  <span>0{index + 1}</span>
                  {fact}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
