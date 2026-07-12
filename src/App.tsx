import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useLanguage } from "./content/useLanguage";
import type { SectionId } from "./content/siteContent";
import { useActiveSection } from "./hooks/useActiveSection";
import { usePointerEffects } from "./hooks/usePointerEffects";
import { useRevealFallback } from "./hooks/useRevealFallback";
import { useScrollProgress } from "./hooks/useScrollProgress";

const SECTION_IDS: readonly SectionId[] = [
  "home",
  "projects",
  "skills",
  "about",
  "contact",
];

export default function App() {
  const { copy } = useLanguage();
  const activeSection = useActiveSection(SECTION_IDS);

  useScrollProgress();
  useRevealFallback();
  usePointerEffects();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>
      <span className="scroll-sentinel" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>
      <div className="page-noise" aria-hidden="true" />
      <Header activeSection={activeSection} />

      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
