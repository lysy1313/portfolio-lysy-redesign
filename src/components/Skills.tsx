import { useMemo } from "react";
import { useLanguage } from "../content/useLanguage";
import { skillGroups } from "../content/siteContent";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const { language, copy } = useLanguage();
  const marqueeItems = useMemo(
    () => Array.from(new Set(skillGroups.flatMap((group) => group.items))),
    [],
  );

  return (
    <section
      className="skills section section--bordered"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="shell">
        <SectionHeading
          number="02"
          eyebrow={copy.skills.eyebrow}
          title={copy.skills.title}
          description={copy.skills.description}
          headingId="skills-title"
        />
      </div>

      <div className="skills-marquee" aria-label={copy.skills.marqueeLabel}>
        <p className="sr-only">{marqueeItems.join(", ")}</p>
        <div className="skills-marquee__track" aria-hidden="true">
          {[0, 1].map((groupIndex) => (
            <div className="skills-marquee__group" key={groupIndex}>
              {marqueeItems.map((item, index) => (
                <span key={`${groupIndex}-${item}`}>
                  {item}
                  <i>{index % 2 === 0 ? "✦" : "·"}</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-grid shell">
        {skillGroups.map((group, index) => (
          <article
            className={`skill-card skill-card--${index + 1} scroll-reveal`}
            key={group.title.en}
          >
            <div className="skill-card__icon">
              <Icon name={group.icon} width={24} height={24} />
            </div>
            <div className="skill-card__heading">
              <span>0{index + 1}</span>
              <h3>{group.title[language]}</h3>
            </div>
            <p>{group.description[language]}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}

        <article className="skills-feature scroll-reveal">
          <div className="skills-feature__halo" aria-hidden="true" />
          <div className="skills-feature__topline">
            <span>developer.mode</span>
            <span className="availability-dot" />
          </div>
          <div className="skills-feature__main">
            <span className="skills-feature__symbol" aria-hidden="true">
              &lt;/&gt;
            </span>
            <div>
              <strong>strict: true</strong>
              <strong>a11y: built-in</strong>
              <strong>motion: intentional</strong>
            </div>
          </div>
          <div className="skills-feature__footer">
            <span>DRY</span>
            <span>KISS</span>
            <span>YAGNI</span>
            <span>SOLID</span>
          </div>
        </article>
      </div>
    </section>
  );
}
