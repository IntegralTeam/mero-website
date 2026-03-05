import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const USDM_LETTERS = [
  { letter: "U", word: "Underlying", description: "126% commodity reserves" },
  { letter: "S", word: "Structured", description: "Institutional yield products" },
  { letter: "D", word: "Deployed", description: "Capital into regulated markets" },
  { letter: "M", word: "Managed", description: "By Mero infrastructure" },
] as const;

export function Header() {
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  // Auto-rotate through letters
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLetter((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % 4;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="relume"
      className="hero-gradient-bg relative min-h-screen overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container relative flex min-h-screen items-center px-[5%] py-24 md:py-32">
        {/* Two column layout */}
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex flex-col">
            {/* Positioning Label */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex gap-1">
                <span className="inline-block h-2 w-2 bg-emerald-400" />
                <span className="inline-block h-2 w-2 bg-emerald-400/60" />
                <span className="inline-block h-2 w-2 bg-emerald-400/30" />
              </div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300/90">
                Institutional Infrastructure
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-3xl font-bold leading-[1.1] text-white md:text-4xl lg:text-5xl">
              Capital transformation
              <br />
              <span className="text-emerald-200">through structure</span>
            </h1>

            {/* USDM Meaning Text */}
            <div className="mb-8 max-w-lg">
              <p className="mb-4 text-base leading-relaxed text-white/70 md:text-lg">
                Your capital is secured by{" "}
                <span
                  className={`cursor-pointer border-b border-emerald-500/50 font-semibold text-emerald-300 transition-colors hover:text-emerald-200 ${
                    activeLetter === 0 ? "text-emerald-300" : ""
                  }`}
                  onMouseEnter={() => setActiveLetter(0)}
                >
                  Underlying
                </span>{" "}
                commodities, placed in{" "}
                <span
                  className={`cursor-pointer border-b border-emerald-500/50 font-semibold text-emerald-300 transition-colors hover:text-emerald-200 ${
                    activeLetter === 1 ? "text-emerald-300" : ""
                  }`}
                  onMouseEnter={() => setActiveLetter(1)}
                >
                  Structured
                </span>{" "}
                products,{" "}
                <span
                  className={`cursor-pointer border-b border-emerald-500/50 font-semibold text-emerald-300 transition-colors hover:text-emerald-200 ${
                    activeLetter === 2 ? "text-emerald-300" : ""
                  }`}
                  onMouseEnter={() => setActiveLetter(2)}
                >
                  Deployed
                </span>{" "}
                for yield, and{" "}
                <span
                  className={`cursor-pointer border-b border-emerald-500/50 font-semibold text-emerald-300 transition-colors hover:text-emerald-200 ${
                    activeLetter === 3 ? "text-emerald-300" : ""
                  }`}
                  onMouseEnter={() => setActiveLetter(3)}
                >
                  Managed
                </span>{" "}
                by our infrastructure.
              </p>

              {/* Letter indicators */}
              <div className="flex flex-wrap items-center gap-2">
                {USDM_LETTERS.map((item, index) => (
                  <button
                    key={item.letter}
                    onClick={() => setActiveLetter(index)}
                    className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all ${
                      activeLetter === index
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-white/5 text-white/40 hover:bg-white/10"
                    }`}
                  >
                    {item.letter} — {item.word}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/#platform"
                className="group relative inline-flex items-center gap-3 bg-white px-6 py-3 text-xs font-semibold tracking-wider text-[#0b1c2d] transition-all duration-300 hover:gap-5 hover:bg-emerald-50"
              >
                <span>EXPLORE PLATFORM</span>
                <svg
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="absolute -right-1 -top-1 h-2 w-2 bg-emerald-400" />
                <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-[#0b1c2d]" />
              </Link>

              <Link
                to="/#partners"
                className="text-xs font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
              >
                View partners →
              </Link>
            </div>
          </div>

          {/* Right side - USDM Seal */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="relative flex h-64 w-64 items-center justify-center md:h-72 md:w-72 lg:h-80 lg:w-80">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0b1c2d] via-[#066253] to-[#00c2a8] p-[2px]">
                  <div className="h-full w-full rounded-full bg-[#0a1628]" />
                </div>

                {/* Inner content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* USDM Letters */}
                  <div className="flex items-baseline gap-1 md:gap-2">
                    {USDM_LETTERS.map((item, index) => (
                      <button
                        key={item.letter}
                        onClick={() => setActiveLetter(index)}
                        className={`relative text-5xl font-bold transition-all duration-500 md:text-6xl lg:text-7xl ${
                          activeLetter === index
                            ? "text-white scale-110"
                            : activeLetter !== null
                            ? "text-white/30 scale-95"
                            : "text-white/70"
                        }`}
                        style={{
                          textShadow:
                            activeLetter === index
                              ? "0 0 40px rgba(0, 194, 168, 0.5)"
                              : "none",
                        }}
                      >
                        {item.letter}
                        <span
                          className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400 transition-opacity ${
                            activeLetter === index ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  </div>

                {/* Decorative ring text */}
                <svg
                  className="absolute inset-0 h-full w-full animate-spin"
                  style={{ animationDuration: "60s" }}
                  viewBox="0 0 240 240"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 120, 120 m -108, 0 a 108,108 0 1,1 216,0 a 108,108 0 1,1 -216,0"
                    />
                  </defs>
                  <text className="fill-white/20 text-[9px] uppercase tracking-[0.3em]">
                    <textPath href="#circlePath">
                      Commodity Backed • 126% Collateralized • Institutional Grade • USD Yield • Zero FX •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Letter meaning card - positioned above on mobile, right on desktop */}
              <div className="absolute left-1/2 bottom-full mb-4 w-full max-w-[200px] -translate-x-1/2 z-50 lg:left-full lg:top-1/2 lg:bottom-auto lg:mb-0 lg:w-44 lg:-translate-y-1/2 lg:translate-x-4">
                {USDM_LETTERS.map((item, index) => {
                  const isActive = activeLetter === index;
                  return (
                    <div
                      key={item.letter}
                      className={`absolute left-0 top-0 w-full transition-all duration-500 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="border-l-2 border-emerald-500 bg-[#0a1628]/95 p-3 text-left backdrop-blur-sm">
                        <div className="mb-1 flex items-baseline gap-2">
                          <span className="text-xl font-bold text-emerald-400">
                            {item.letter}
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {item.word}
                          </span>
                        </div>
                        <span className="text-xs leading-relaxed text-white/60">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
