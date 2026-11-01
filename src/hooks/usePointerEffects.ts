import { useEffect } from "react";

const MAX_TILT = 5;

interface PointerPosition {
  x: number;
  y: number;
}

export function usePointerEffects(): void {
  useEffect(() => {
    const root = document.documentElement;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!hasFinePointer || reduceMotion) {
      return;
    }

    let pointerFrameId = 0;
    const pointer: PointerPosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const renderPointer = () => {
      pointerFrameId = 0;
      root.style.setProperty("--pointer-x", `${pointer.x}px`);
      root.style.setProperty("--pointer-y", `${pointer.y}px`);
      root.style.setProperty("--pointer-opacity", "1");
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      if (!pointerFrameId) {
        pointerFrameId = window.requestAnimationFrame(renderPointer);
      }
    };

    const hidePointer = () => {
      root.style.setProperty("--pointer-opacity", "0");
    };

    const tiltElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    );

    const tiltCleanups = tiltElements.map((element) => {
      let bounds: DOMRect | null = null;
      let tiltFrameId = 0;
      const localPointer: PointerPosition = { x: 0, y: 0 };

      const invalidateBounds = () => {
        bounds = null;
      };

      const renderTilt = () => {
        tiltFrameId = 0;

        if (!bounds) {
          bounds = element.getBoundingClientRect();
        }

        if (bounds.width === 0 || bounds.height === 0) {
          return;
        }

        const normalizedX = (localPointer.x - bounds.left) / bounds.width - 0.5;
        const normalizedY = (localPointer.y - bounds.top) / bounds.height - 0.5;

        element.style.setProperty(
          "--tilt-x",
          `${normalizedX * MAX_TILT * 2}deg`,
        );
        element.style.setProperty(
          "--tilt-y",
          `${normalizedY * MAX_TILT * -2}deg`,
        );
      };

      const handleTiltStart = () => {
        bounds = element.getBoundingClientRect();
        element.classList.add("is-tilting");
      };

      const handleTilt = (event: PointerEvent) => {
        localPointer.x = event.clientX;
        localPointer.y = event.clientY;

        if (!tiltFrameId) {
          tiltFrameId = window.requestAnimationFrame(renderTilt);
        }
      };

      const resetTilt = () => {
        bounds = null;
        window.cancelAnimationFrame(tiltFrameId);
        tiltFrameId = 0;
        element.classList.remove("is-tilting");
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      };

      element.addEventListener("pointerenter", handleTiltStart);
      element.addEventListener("pointermove", handleTilt, { passive: true });
      element.addEventListener("pointerleave", resetTilt);
      window.addEventListener("scroll", invalidateBounds, { passive: true });
      window.addEventListener("resize", invalidateBounds, { passive: true });

      return () => {
        window.cancelAnimationFrame(tiltFrameId);
        element.removeEventListener("pointerenter", handleTiltStart);
        element.removeEventListener("pointermove", handleTilt);
        element.removeEventListener("pointerleave", resetTilt);
        window.removeEventListener("scroll", invalidateBounds);
        window.removeEventListener("resize", invalidateBounds);
        element.classList.remove("is-tilting");
      };
    });

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", hidePointer);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", hidePointer);
      window.cancelAnimationFrame(pointerFrameId);
      tiltCleanups.forEach((cleanup) => cleanup());
      root.style.removeProperty("--pointer-opacity");
      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
    };
  }, []);
}
