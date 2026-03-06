import { useEffect, useRef, useState } from "react";
import gold from "../assets/gold.jpg";
import copper from "../assets/copper.jpg";
import nickel from "../assets/nickel.jpg";
import gemstones from "../assets/gemstones.jpg";

const COMMODITIES = [
  {
    id: "gold",
    number: "01",
    name: "Gold",
    description: "Intended core reserve component for liquidity and long-term value support.",
    image: gold,
    stat: "Physical",
    statLabel: "Reserve Asset",
  },
  {
    id: "copper",
    number: "02",
    name: "Copper",
    description: "Industrial commodity exposure intended to diversify reserve composition.",
    image: copper,
    stat: "Physical",
    statLabel: "Reserve Asset",
  },
  {
    id: "nickel",
    number: "03",
    name: "Nickel",
    description: "Strategic metal inclusion intended to broaden commodity backing diversity.",
    image: nickel,
    stat: "Physical",
    statLabel: "Reserve Asset",
  },
  {
    id: "gemstones",
    number: "04",
    name: "Gemstones",
    description: "Precious stones may form a portion of the basket, subject to valuation haircuts and custody controls.",
    image: gemstones,
    stat: "Haircuts",
    statLabel: "15-30% Intended",
  },
] as const;

export function Layout420() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  const activeIndex = Math.min(3, Math.floor(scrollProgress * 4));

  return (
    <section id="about" ref={sectionRef} className="relative z-10 min-h-[400vh] bg-white">
      <div className="sticky top-0 z-50 h-0.5 w-full bg-[#0b1c2d]/10">
        <div
          className="h-full bg-gradient-to-r from-[#066253] to-[#00c2a8] transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="sticky top-0 h-screen bg-white">
          <div className="flex h-full flex-col justify-center px-[5%] py-16 md:px-[5vw] md:py-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#066253]">
                Reserves
              </span>
              <div className="h-px w-8 bg-[#066253]/30" />
            </div>

            <h2 className="mb-6 text-3xl font-bold leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
              Real commodities intended to back USDM
            </h2>

            <p className="mb-8 max-w-md text-[#0b1c2d]/60 md:text-lg">
              USDM is intended to be supported by a diversified basket of
              physical commodities held with institutional custody providers.
              Final basket composition and allocations are subject to change.
            </p>

            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#0b1c2d]/10">
                  {COMMODITIES[activeIndex].number}
                </span>
                <div>
                  <span className="block text-sm font-semibold text-[#0b1c2d]">
                    Viewing: {COMMODITIES[activeIndex].name}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#0b1c2d]/40">
                    Scroll to explore
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {COMMODITIES.map((commodity, index) => (
                <div
                  key={commodity.id}
                  className={`h-1 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-[#066253]"
                      : index < activeIndex
                        ? "w-2 bg-[#066253]/40"
                        : "w-2 bg-[#0b1c2d]/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative md:mt-0">
          {COMMODITIES.map((commodity, index) => (
            <div
              key={commodity.id}
              className="sticky top-0 flex h-screen flex-col justify-start pt-24 md:pt-32"
              style={{ zIndex: index + 1 }}
            >
              <div className="relative z-10 px-6 md:px-10">
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="text-5xl font-bold text-white/90 md:text-6xl">
                    {commodity.number}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-white/60">
                    {commodity.stat}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">{commodity.name}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
                  {commodity.description}
                </p>
                <span className="mt-2 block text-xs uppercase tracking-wider text-white/40">
                  {commodity.statLabel}
                </span>
              </div>

              <div className="absolute inset-0 -z-10">
                <img src={commodity.image} className="h-full w-full object-cover" alt={commodity.name} />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(
                        to bottom,
                        rgba(11, 28, 45, 0.85) 0%,
                        rgba(11, 28, 45, 0.4) 30%,
                        rgba(11, 28, 45, 0.1) 60%,
                        rgba(11, 28, 45, 0.3) 100%
                      )
                    `,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
