import { useLanguage } from "../content/useLanguage";
import { CV_FILE, GITHUB_URL } from "../content/siteContent";
import { Icon } from "./Icon";

export function Hero() {
  const { copy } = useLanguage();

  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="hero__grid shell">
        <div className="hero__content">
          <div className="hero__eyebrow hero-entrance hero-entrance--1">
            <span className="availability-dot" aria-hidden="true" />
            <span>{copy.hero.eyebrow}</span>
          </div>

          <h1 className="hero__title" id="hero-title">
            <span className="hero__title-line hero-entrance hero-entrance--2">
              {copy.hero.titleLead}
            </span>
            <span className="hero__title-line hero__title-line--accent hero-entrance hero-entrance--3">
              {copy.hero.titleAccent}
            </span>
          </h1>

          <p className="hero__description hero-entrance hero-entrance--4">
            {copy.hero.description}
          </p>

          <div className="hero__actions hero-entrance hero-entrance--5">
            <a className="button button--primary" href="#projects">
              <span>{copy.hero.primaryAction}</span>
              <Icon name="arrow-down" width={19} height={19} />
            </a>
            <a
              className="button button--ghost"
              href={`${import.meta.env.BASE_URL}${CV_FILE}`}
              download="Ilya-Lysy-CV.pdf"
            >
              <Icon name="file" width={19} height={19} />
              <span>{copy.hero.cvAction}</span>
            </a>
            <a
              className="button button--ghost"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" width={19} height={19} />
              <span>{copy.hero.secondaryAction}</span>
              <Icon name="arrow-up-right" width={17} height={17} />
            </a>
          </div>

          <dl className="hero__stats hero-entrance hero-entrance--6">
            {copy.hero.stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual hero-entrance hero-entrance--visual" aria-hidden="true">
          <div className="hero-visual__orbit hero-visual__orbit--outer" />
          <div className="hero-visual__orbit hero-visual__orbit--inner" />
          <span className="hero-visual__spark hero-visual__spark--one" />
          <span className="hero-visual__spark hero-visual__spark--two" />

          <div className="code-window" data-tilt>
            <div className="code-window__chrome">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>{copy.hero.consoleFile}</span>
              <span className="code-window__branch">main</span>
            </div>

            <div className="code-window__body">
              <div className="code-window__numbers">
                {copy.hero.consoleLines.map((_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </div>
              <code>
                {copy.hero.consoleLines.map((line, index) => (
                  <span className={`code-line code-line--${index + 1}`} key={line}>
                    {line}
                  </span>
                ))}
              </code>
            </div>

            <div className="code-window__status">
              <span>
                <Icon name="check" width={14} height={14} />
                typecheck passed
              </span>
              <span>UTF-8</span>
            </div>
          </div>

          {copy.hero.badges.map((badge, index) => (
            <span className={`orbit-badge orbit-badge--${index + 1}`} key={badge}>
              {badge}
            </span>
          ))}

          <div className="hero-visual__label">
            <span>UI</span>
            <span>+</span>
            <span>CODE</span>
          </div>
        </div>
      </div>

      <a className="scroll-cue shell" href="#projects">
        <span>{copy.hero.scrollHint}</span>
        <span className="scroll-cue__line" aria-hidden="true" />
        <Icon name="arrow-down" width={18} height={18} />
      </a>
    </section>
  );
}
