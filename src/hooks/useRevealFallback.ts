import { useEffect } from "react";

const REVEAL_SELECTOR = ".scroll-reveal";

export function useRevealFallback(): void {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsViewTimeline =
      typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()");

    root.classList.toggle("has-scroll-timeline", supportsViewTimeline);

    if (supportsViewTimeline || reduceMotion) {
      return () => root.classList.remove("has-scroll-timeline");
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );

    root.classList.add("has-reveal-fallback");
    elements.forEach((element) => element.classList.add("reveal-fallback"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        root.classList.remove("has-reveal-fallback");
        elements.forEach((element) =>
          element.classList.remove("reveal-fallback", "is-visible"),
        );
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px 12% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("has-reveal-fallback");
      elements.forEach((element) =>
        element.classList.remove("reveal-fallback", "is-visible"),
      );
    };
  }, []);
}
