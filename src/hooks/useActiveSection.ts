import { useEffect, useState } from "react";
import type { SectionId } from "../content/siteContent";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: "-28% 0px -62% 0px",
  threshold: [0, 0.01, 0.25],
};

export function useActiveSection(sectionIds: readonly SectionId[]): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0] ?? "home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id as SectionId);
      }
    }, OBSERVER_OPTIONS);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
