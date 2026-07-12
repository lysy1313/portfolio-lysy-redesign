import { useEffect, useState } from "react";
import { useLanguage } from "../content/useLanguage";
import type { SectionId } from "../content/siteContent";
import { Icon } from "./Icon";

interface HeaderProps {
  activeSection: SectionId;
}

export function Header({ activeSection }: HeaderProps) {
  const { language, copy, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleWideViewport = () => {
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleWideViewport);
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleWideViewport);
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a
          className="brand"
          href="#home"
          aria-label="Lysy — home"
          onClick={closeMenu}
        >
          <span className="brand__mark" aria-hidden="true">
            L
          </span>
          <span className="brand__word">LYSY</span>
          <span className="brand__dot" aria-hidden="true" />
        </a>

        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          aria-label={copy.navigationLabel}
          id="site-navigation"
        >
          <div className="site-nav__mobile-head">
            <span>LYSY / MENU</span>
            <button
              className="icon-button"
              type="button"
              onClick={closeMenu}
              aria-label={copy.menuClose}
            >
              <Icon name="close" width={22} height={22} />
            </button>
          </div>

          <ul className="site-nav__list">
            {copy.navigation.map((item, index) => (
              <li key={item.id}>
                <a
                  className={activeSection === item.id ? "is-active" : undefined}
                  href={`#${item.id}`}
                  aria-current={
                    activeSection === item.id ? "location" : undefined
                  }
                  onClick={closeMenu}
                >
                  <span aria-hidden="true">0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="site-nav__mobile-footer">
            <span className="availability-dot" aria-hidden="true" />
            {copy.status}
          </div>
        </nav>

        <div className="site-header__actions">
          <div className="availability site-header__availability">
            <span className="availability-dot" aria-hidden="true" />
            <span>{copy.status}</span>
          </div>

          <button
            className="language-switch"
            type="button"
            onClick={toggleLanguage}
            aria-label={copy.changeLanguage}
          >
            <span className={language === "ru" ? "is-current" : undefined}>RU</span>
            <span aria-hidden="true">/</span>
            <span className={language === "en" ? "is-current" : undefined}>EN</span>
          </button>

          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
          >
            <Icon name={menuOpen ? "close" : "menu"} width={22} height={22} />
          </button>
        </div>
      </div>

      <button
        className={`menu-backdrop${menuOpen ? " is-visible" : ""}`}
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        aria-label={copy.menuClose}
        onClick={closeMenu}
      />
    </header>
  );
}
