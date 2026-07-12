import { useEffect } from "react";

const SCROLL_SENTINEL_SELECTOR = ".scroll-sentinel";

function supportsNativeScrollProgress(): boolean {
  return (
    typeof CSS !== "undefined" &&
    CSS.supports("animation-timeline: scroll()")
  );
}

export function useScrollProgress(): void {
  useEffect(() => {
    const root = document.documentElement;
    const sentinel = document.querySelector<HTMLElement>(
      SCROLL_SENTINEL_SELECTOR,
    );
    const hasNativeScrollTimeline = supportsNativeScrollProgress();

    root.classList.toggle(
      "has-native-scroll-progress",
      hasNativeScrollTimeline,
    );

    const stateObserver = sentinel
      ? new IntersectionObserver(
          ([entry]) => {
            root.classList.toggle("is-scrolled", !entry.isIntersecting);
          },
          {
            rootMargin: "-24px 0px 0px",
            threshold: 0,
          },
        )
      : null;

    if (sentinel && stateObserver) {
      stateObserver.observe(sentinel);
    }

    if (hasNativeScrollTimeline) {
      return () => {
        stateObserver?.disconnect();
        root.classList.remove(
          "has-native-scroll-progress",
          "is-scrolled",
        );
      };
    }

    let frameId = 0;

    const updateFallbackProgress = () => {
      frameId = 0;

      const maxScroll = root.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const normalizedProgress = Math.min(Math.max(progress, 0), 1);

      root.style.setProperty("--scroll-progress", normalizedProgress.toString());
    };

    const requestFallbackUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateFallbackProgress);
    };

    window.addEventListener("scroll", requestFallbackUpdate, { passive: true });
    window.addEventListener("resize", requestFallbackUpdate, { passive: true });
    frameId = window.requestAnimationFrame(updateFallbackProgress);

    return () => {
      stateObserver?.disconnect();
      window.removeEventListener("scroll", requestFallbackUpdate);
      window.removeEventListener("resize", requestFallbackUpdate);
      window.cancelAnimationFrame(frameId);
      root.classList.remove("has-native-scroll-progress", "is-scrolled");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);
}
