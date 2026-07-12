import type { CSSProperties } from "react";
import { useLanguage } from "../content/useLanguage";
import { projects, type Language, type Project } from "../content/siteContent";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const { language, copy } = useLanguage();

  return (
    <section
      className="projects section section--bordered"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="shell">
        <SectionHeading
          number="01"
          eyebrow={copy.projects.eyebrow}
          title={copy.projects.title}
          description={copy.projects.description}
          headingId="projects-title"
        />

        <div className="project-stack">
          {projects.map((project, index) => (
            <div
              className="project-shell"
              key={project.id}
              style={
                {
                  "--project-order": index,
                  "--project-offset": `${index * 12}px`,
                } as CSSProperties
              }
            >
              <article className={`project-card project-card--${project.id} scroll-reveal`}>
                <div className="project-card__content">
                  <div className="project-card__topline">
                    <span className="project-card__index">{project.index}</span>
                    <span>{project.category[language]}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="project-card__copy">
                    <h3>{project.title[language]}</h3>
                    <p className="project-card__lead">
                      {project.description[language]}
                    </p>
                    <p className="project-card__detail">
                      {project.detail[language]}
                    </p>
                  </div>

                  <ul
                    className="project-card__stack"
                    aria-label={language === "ru" ? "Стек проекта" : "Project stack"}
                  >
                    {project.stack.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <div className="project-card__actions">
                    <a
                      className="text-link text-link--accent"
                      href={project.live}
                      target={project.live.startsWith("#") ? undefined : "_blank"}
                      rel={project.live.startsWith("#") ? undefined : "noreferrer"}
                    >
                      <span>
                        {project.live.startsWith("#")
                          ? copy.projects.current
                          : copy.projects.live}
                      </span>
                      <Icon name="arrow-up-right" width={18} height={18} />
                    </a>
                    <a
                      className="text-link"
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="github" width={18} height={18} />
                      <span>{copy.projects.source}</span>
                    </a>
                  </div>
                </div>

                <ProjectVisual project={project} language={language} />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectVisualProps {
  project: Project;
  language: Language;
}

function ProjectVisual({ project, language }: ProjectVisualProps) {
  if (project.id === "portfolio") {
    return (
      <div
        className="project-card__media project-preview portfolio-preview"
        aria-hidden="true"
      >
        <BrowserChrome label="lysy.dev" />
        <div className="portfolio-preview__page">
          <div className="portfolio-preview__nav">
            <span className="portfolio-preview__logo">L.</span>
            <span>PROJECTS&nbsp;&nbsp; SKILLS&nbsp;&nbsp; CONTACT</span>
          </div>
          <div className="portfolio-preview__copy">
            <small>FRONTEND DEVELOPER</small>
            <strong>
              Interfaces
              <br />with <em>character.</em>
            </strong>
            <span className="portfolio-preview__button">SEE THE WORK ↘</span>
          </div>
          <div className="portfolio-preview__orb">
            <span>&lt;/&gt;</span>
          </div>
          <div className="portfolio-preview__ticker">
            REACT — TYPESCRIPT — MOTION — ACCESSIBILITY —
          </div>
        </div>
      </div>
    );
  }

  if (!project.image) {
    return null;
  }

  const imageStem = project.image.replace(/\.webp$/i, "");
  const imageSource = `${import.meta.env.BASE_URL}${imageStem}-768.webp`;
  const imageSourceSet = [480, 768, 1200]
    .map(
      (width) =>
        `${import.meta.env.BASE_URL}${imageStem}-${width}.webp ${width}w`,
    )
    .join(", ");

  return (
    <div className="project-card__media project-preview">
      <BrowserChrome label={project.previewLabel ?? `${project.id}.app`} />
      <div className="project-preview__image-wrap">
        <img
          src={imageSource}
          srcSet={imageSourceSet}
          sizes="(max-width: 899px) calc(100vw - 60px), (max-width: 1180px) 54vw, 720px"
          alt={`${project.title[language]} — preview`}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width="768"
          height="512"
        />
      </div>
      {project.badge ? (
        <span className="project-preview__badge">
          {project.badge[language]}
        </span>
      ) : null}
      <span className="project-preview__glow" aria-hidden="true" />
    </div>
  );
}

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="browser-chrome" aria-hidden="true">
      <div className="window-dots">
        <span />
        <span />
        <span />
      </div>
      <span>{label}</span>
      <span className="browser-chrome__secure">●</span>
    </div>
  );
}
