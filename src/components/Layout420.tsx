import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import gold from "../assets/gold.jpg";
import copper from "../assets/copper.jpg";
import nickel from "../assets/nickel.jpg";
const TOKENS = [
  {
    id: "merog",
    number: "01",
    ticker: "MEROG",
    name: "Gold",
    description:
      "One MEROG represents one fine troy ounce of physical gold held in an LBMA-certified vault. The receipt is encumbered with the custodian — it cannot be moved or sold until the MEROG is returned.",
    image: gold,
    stat: "1 Troy Oz",
    statLabel: "Phase 1 Priority",
    phase: "Phase 1 — Live",
  },
  {
    id: "meroc",
    number: "02",
    ticker: "MEROC",
    name: "Copper",
    description:
      "MEROC represents a warehouse receipt for industrial-grade copper held in a certified vault. Commodity-specific verification requirements — weight, grade, vault operator confirmation — are embedded in the issuance workflow.",
    image: copper,
    stat: "Physical",
    statLabel: "Warehouse Receipt",
    phase: "Phase 1",
  },
  {
    id: "meron",
    number: "03",
    ticker: "MERON",
    name: "Nickel",
    description:
      "MERON is the warehouse receipt token for nickel. Strategic metal with commodity-specific assay requirements. The underlying receipt remains encumbered for the duration of the lending position.",
    image: nickel,
    stat: "Physical",
    statLabel: "Warehouse Receipt",
    phase: "Phase 1",
  },
] as const;

export function Layout420() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: stickyPanelRef, isVisible: stickyPanelVisible } = useScrollAnimation({ threshold: 0.1 });
  const tokenAnimations = [
    useScrollAnimation({ threshold: 0.2 }),
    useScrollAnimation({ threshold: 0.2 }),
    useScrollAnimation({ threshold: 0.2 }),
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = end - start;
      const current = -start;
      const progress = Math.max(0, Math.min(1, current / total));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.min(TOKENS.length - 1, Math.floor(scrollProgress * TOKENS.length));

  return (
    <section id="about" ref={sectionRef} className="relative z-10 min-h-[300vh] bg-white">
      {/* Scroll progress bar */}
      <div className="sticky top-0 z-50 h-0.5 w-full bg-[#0b1c2d]/10">
        <div
          className="h-full bg-gradient-to-r from-[#00c2a8] to-[#00c2a8] transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Sticky left panel */}
        <div className="sticky top-0 h-screen bg-white">
          <div 
            ref={stickyPanelRef}
            className={`flex h-full flex-col justify-center px-[5%] py-16 md:px-[5vw] md:py-0 transition-all duration-1000 ${stickyPanelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
                Warehouse Receipt Tokens
              </span>
              <div className="h-px w-8 bg-[#00c2a8]/30" />
            </div>

            <h2 className="mb-5 font-display text-3xl font-light leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
              Physical commodities.<br />
              <span className="text-[#00c2a8]">On-chain ownership.</span>
            </h2>

            <p className="mb-6 max-w-md text-[#0b1c2d]/60 md:text-lg">
              Each token is a digital warehouse receipt — a verified, transferable proof of title
              for a specific quantity of physical commodity held in institutional custody.
              When you hold MEROG, you own that ounce.
            </p>

            {/* 1 MEROG callout */}
            <div className="mb-8 border-l-2 border-[#00c2a8] bg-[#00c2a8]/[0.04] px-4 py-3">
              <p className="text-sm font-semibold text-[#0b1c2d]">
                1 MEROG = 1 fine troy ounce of gold
              </p>
              <p className="mt-1 text-xs text-[#0b1c2d]/50">
                Custodian confirms encumbrance. Receipt cannot be moved or sold until MEROG is returned.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#0b1c2d]/8">
                  {TOKENS[activeIndex].number}
                </span>
                <div>
                  <span className="block text-sm font-bold text-[#00c2a8]">
                    {TOKENS[activeIndex].ticker}
                  </span>
                  <span className="text-xs text-[#0b1c2d]/40">
                    Viewing: {TOKENS[activeIndex].name} — Scroll to explore
                  </span>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-3">
              {TOKENS.map((token, index) => (
                <div
                  key={token.id}
                  className={`h-1 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-[#00c2a8]"
                      : index < activeIndex
                        ? "w-2 bg-[#00c2a8]/40"
                        : "w-2 bg-[#0b1c2d]/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling right panels */}
        <div className="relative md:mt-0">
          {TOKENS.map((token, index) => {
            const tokenAnimation = tokenAnimations[index];
            return (
              <div
                key={token.id}
                ref={tokenAnimation.ref}
                className={`sticky top-0 flex h-screen flex-col justify-start pt-24 md:pt-32 transition-all duration-1000 ${tokenAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ zIndex: index + 1, transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10 px-6 md:px-10">
                  {/* Phase badge */}
                  <div className="mb-4 inline-flex items-center gap-2 border border-[#00c2a8]/30 bg-[#00c2a8]/10 px-3 py-1">
                    <span className="h-1.5 w-1.5 bg-[#00c2a8]" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#00c2a8]">
                      {token.phase}
                    </span>
                  </div>

                  <div className="mb-3 flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-white/90 md:text-6xl">
                      {token.number}
                    </span>
                    <div>
                      <span className="block text-xl font-bold text-[#00c2a8]">{token.ticker}</span>
                      <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                        {token.stat} · {token.statLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">{token.name}</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
                    {token.description}
                  </p>
                </div>

                {/* Background image */}
                <div className="absolute inset-0 -z-10">
                  <img src={token.image} className="h-full w-full object-cover" alt={token.name} />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(
                        to bottom,
                        rgba(11, 28, 45, 0.90) 0%,
                        rgba(11, 28, 45, 0.50) 30%,
                        rgba(11, 28, 45, 0.15) 60%,
                        rgba(11, 28, 45, 0.35) 100%
                      )`,
                    }}
                  />
                  {/* Gold overlay tint */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.07) 0%, transparent 60%)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
