import { useEffect, useRef } from "react";

const LIT = "#9fd6dd";

// Keyframes for each kind of animated element. `s` is when the element's turn
// comes, as a fraction of the loop; everything fades out together at the end.
const KEYFRAMES = {
  pin: (s) => [
    { offset: 0, opacity: 0, transform: "translateY(-28px)" },
    { offset: s, opacity: 0, transform: "translateY(-28px)", easing: "cubic-bezier(.3,.8,.4,1.2)" },
    { offset: s + 0.03, opacity: 1, transform: "translateY(0px)" },
    { offset: 0.9, opacity: 1, transform: "translateY(0px)" },
    { offset: 0.96, opacity: 0, transform: "translateY(0px)" },
    { offset: 1, opacity: 0, transform: "translateY(0px)" },
  ],
  ripple: (s) => [
    { offset: 0, opacity: 0, transform: "scale(0.4)" },
    { offset: s + 0.025, opacity: 0, transform: "scale(0.4)" },
    { offset: s + 0.03, opacity: 0.6, transform: "scale(0.5)", easing: "ease-out" },
    { offset: Math.min(s + 0.12, 0.89), opacity: 0, transform: "scale(2.2)" },
    { offset: 1, opacity: 0, transform: "scale(2.2)" },
  ],
  fill: (s, base) => [
    { offset: 0, fill: base },
    { offset: s + 0.02, fill: base, easing: "ease-out" },
    { offset: s + 0.05, fill: LIT },
    { offset: 0.9, fill: LIT },
    { offset: 0.97, fill: base },
    { offset: 1, fill: base },
  ],
};

/*
 * Plays the map sequence: every element with data-seq="<n>" and
 * data-kind="pin|ripple|fill" gets its turn n * step seconds into the loop.
 * It only runs while the map is on screen. Without JavaScript, or for visitors
 * who prefer less motion, the map simply shows every pin and lit area.
 */
export default function useMapSequence({ step, loop }) {
  const ref = useRef(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || !svg.animate) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const duration = loop * 1000;
    const animations = [];
    svg.querySelectorAll("[data-seq]").forEach((el) => {
      const s = Math.min((Number(el.dataset.seq) * step * 1000) / duration, 0.8);
      const frames = KEYFRAMES[el.dataset.kind](s, el.dataset.base);
      animations.push(el.animate(frames, { duration, iterations: Infinity }));
    });

    const setPlaying = (on) => animations.forEach((a) => (on ? a.play() : a.pause()));
    setPlaying(false);

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting), {
        threshold: 0.2,
      });
      observer.observe(svg);
    } else {
      setPlaying(true);
    }

    return () => {
      if (observer) observer.disconnect();
      animations.forEach((a) => a.cancel());
    };
  }, [step, loop]);

  return ref;
}

// A map pin whose tip sits exactly on (x, y).
export function MapPin({ x, y, seq, size = 1, label }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <title>{label}</title>
      <ellipse
        className="reach-pin-ripple"
        data-seq={seq}
        data-kind="ripple"
        cx="0"
        cy="0"
        rx="9"
        ry="4"
      />
      <g className="reach-pin" data-seq={seq} data-kind="pin">
        <path
          className="reach-pin-body"
          d="M0 0C-1.6-5-9-9.5-9-16.5a9 9 0 0 1 18 0C9-9.5 1.6-5 0 0Z"
        />
        <circle className="reach-pin-hole" cx="0" cy="-16.5" r="3.4" />
      </g>
    </g>
  );
}
