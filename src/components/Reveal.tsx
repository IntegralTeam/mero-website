import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export type RevealVariant =
  | "up"
  | "left"
  | "right"
  | "zoom"
  | "blur"
  | "clip"
  | "flip"
  | "orbit"
  | "stagger"
  | "stagger-x";

type RevealProps = {
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

// Visibility is toggled on the DOM node rather than through state so the pre-rendered markup and the
// hydrated markup stay identical.
export function Reveal({ variant = "up", delay = 0, className = "", style, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let doneTimer = 0;
    const show = () => {
      node.classList.add("is-visible");
      doneTimer = window.setTimeout(() => node.classList.add("reveal-done"), 2000);
    };

    if (!("IntersectionObserver" in window)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    // A fully clipped element has no visible area, so the clip variant watches its parent instead.
    observer.observe(variant === "clip" && node.parentElement ? node.parentElement : node);
    return () => {
      observer.disconnect();
      window.clearTimeout(doneTimer);
    };
  }, [variant]);

  const base = variant.startsWith("stagger") ? `reveal-stagger reveal-${variant}` : `reveal reveal-${variant}`;

  return (
    <div
      ref={ref}
      className={`${base} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
    >
      {children}
    </div>
  );
}
