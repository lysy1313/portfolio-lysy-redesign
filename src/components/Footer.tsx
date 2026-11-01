import { useLanguage } from "../content/useLanguage";
import { GITHUB_URL, LINKEDIN_URL, TELEGRAM_URL } from "../content/siteContent";
import { Icon } from "./Icon";

export function Footer() {
  const { copy } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__marquee" aria-hidden="true">
        <div>
          <span>LET&apos;S BUILD SOMETHING SHARP</span>
          <i>✦</i>
          <span>LET&apos;S BUILD SOMETHING SHARP</span>
          <i>✦</i>
        </div>
      </div>

      <div className="site-footer__inner shell">
        <div>
          <a className="brand brand--footer" href="#home" aria-label="Lysy — home">
            <span className="brand__mark" aria-hidden="true">
              L
            </span>
            <span className="brand__word">LYSY</span>
          </a>
          <p>{copy.footer.note}</p>
        </div>

        <div className="site-footer__meta">
          <span>© {year} Lysy</span>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            Telegram
            <Icon name="arrow-up-right" width={15} height={15} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn
            <Icon name="arrow-up-right" width={15} height={15} />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
            <Icon name="arrow-up-right" width={15} height={15} />
          </a>
          <a href="#home">
            {copy.footer.backToTop}
            <Icon name="arrow-down" className="rotate-180" width={15} height={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
