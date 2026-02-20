import React, { useEffect, useState } from "react";

const variantClasses = {
  primary:
    "rounded-full border border-[#1f1a45] bg-[#1f1a45] text-white hover:bg-[#18133a] hover:border-[#18133a] shadow-[0_1px_1px_rgba(0,0,0,0.12)]",
  secondary:
    "rounded-full border border-[#d9d9df] bg-white text-[#111111] hover:bg-[#f7f7f9]",
  link: "rounded-full border border-transparent bg-transparent text-[#111111] hover:underline px-0",
};

const sizeClasses = {
  sm: "h-8 px-4 text-sm leading-none",
  default: "h-10 px-5 text-sm leading-none",
  link: "h-auto px-0 text-sm",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "default",
  iconRight,
  ...props
}) {
  const vClass = variantClasses[variant] ?? variantClasses.primary;
  const sClass = sizeClasses[size] ?? sizeClasses.default;

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1a45]/30 disabled:pointer-events-none disabled:opacity-60 ${vClass} ${sClass} ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      {iconRight ? <span aria-hidden="true">{iconRight}</span> : null}
    </button>
  );
}

export function useMediaQuery(query) {
  const getMatches = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);
    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
