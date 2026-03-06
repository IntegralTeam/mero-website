import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const USDM_LETTERS = [
  { letter: "U", word: "Underlying", description: "Target minimum 126% collateralisation" },
  { letter: "S", word: "Structured", description: "Intended institutional product pathways" },
  { letter: "D", word: "Deployed", description: "Indicative target yield allocations" },
  { letter: "M", word: "Managed", description: "Designed with built-in compliance controls" },
] as const;

export function Header() {
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

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
    <section id="relume" className="hero-gradient-bg relative min-h-screen overflow-hidden">
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
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex gap-1">
                <span className="inline-block h-2 w-2 bg-emerald-400" />
                <span className="inline-block h-2 w-2 bg-emerald-400/60" />
                <span className="inline-block h-2 w-2 bg-emerald-400/30" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
                Institutional Infrastructure
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-[1.1] text-white md:text-4xl lg:text-5xl">
              Commodity-backed USD infrastructure
              <br />
              <span className="text-emerald-200">designed for institutions</span>
            </h1>

            <div className="mb-8 max-w-lg">
              <p className="mb-4 text-base leading-relaxed text-white/70 md:text-lg">
                A platform intended to support commodity-collateralised,
                USD-denominated digital asset workflows with target yield
                pathways. Product features, integrations, and timelines are
                under development.
              </p>

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
                    {item.letter} - {item.word}
                  </button>
                ))}
              </div>
            </div>

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
                View network →
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="relative flex h-64 w-64 items-center justify-center md:h-72 md:w-72 lg:h-80 lg:w-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0b1c2d] via-[#066253] to-[#00c2a8] p-[2px]">
                  <div className="h-full w-full rounded-full bg-[#0a1628]" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-baseline gap-1 md:gap-2">
                    {USDM_LETTERS.map((item, index) => (
                      <button
                        key={item.letter}
                        onClick={() => setActiveLetter(index)}
                        className={`relative text-5xl font-bold transition-all duration-500 md:text-6xl lg:text-7xl ${
                          activeLetter === index
                            ? "scale-110 text-white"
                            : activeLetter !== null
                              ? "scale-95 text-white/30"
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
                      Target 126% Minimum Collateralisation • Indicative 5-15% Target APY • Building on Canton Network •
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className="absolute bottom-full left-1/2 z-50 mb-4 w-full max-w-[200px] -translate-x-1/2 lg:left-full lg:bottom-auto lg:top-1/2 lg:mb-0 lg:w-44 lg:-translate-y-1/2 lg:translate-x-4">
                {USDM_LETTERS.map((item, index) => {
                  const isActive = activeLetter === index;
                  return (
                    <div
                      key={item.letter}
                      className={`absolute left-0 top-0 w-full transition-all duration-500 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="border-l-2 border-emerald-500 bg-[#0a1628]/95 p-3 text-left backdrop-blur-sm">
                        <div className="mb-1 flex items-baseline gap-2">
                          <span className="text-xl font-bold text-emerald-400">{item.letter}</span>
                          <span className="text-sm font-semibold text-white">{item.word}</span>
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
