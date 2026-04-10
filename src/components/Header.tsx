import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MODULES = [
  {
    id: "tokenise",
    label: "Tokenise",
    description:
      "Convert verified vaulted commodities into digital warehouse receipts. 1 MEROG = 1 fine troy ounce of gold.",
  },
  {
    id: "lend",
    label: "Lend",
    description:
      "Lock assets as collateral. Borrow USDC at 5% fixed with 60% LTV. No flash liquidation — 48-hour cure period for margin calls.",
  },
  {
    id: "yield",
    label: "Yield",
    description:
      "Activate roadmap yield routes such as ETF overlays and institutional allocation pathways.",
  },
] as const;

function AbstractCore() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      aria-label="Mero infrastructure core"
    >
      <defs>
        {/* Emerald gradients */}
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00c2a8" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#00c2a8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00c2a8" stopOpacity="0" />
        </radialGradient>
        
        <radialGradient id="centerPulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00c2a8" stopOpacity="1" />
          <stop offset="30%" stopColor="#00c2a8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00c2a8" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c2a8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#066253" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00c2a8" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="tokenTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00c2a8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.95" />
        </linearGradient>
        <path id="tokenOrbitOuterArc" d="M 88 85 A 144 144 0 0 1 312 85" fill="none" />
        <path id="tokenOrbitMiddleArc" d="M 110 115 A 116 116 0 0 1 290 115" fill="none" />
        <path id="tokenOrbitInnerArc" d="M 132 143 A 90 90 0 0 1 268 143" fill="none" />

        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="200" cy="200" r="180" fill="url(#coreGlow)">
        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Outer rotating ring - counter clockwise */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="20s" repeatCount="indefinite" />
        <circle cx="200" cy="200" r="160" fill="none" stroke="url(#ringGradient)" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Dashed segment */}
        <circle cx="200" cy="200" r="160" fill="none" stroke="#00c2a8" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="40 200" filter="url(#glow)" />
      </g>

      {/* Middle ring - clockwise */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="15s" repeatCount="indefinite" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="url(#ringGradient)" strokeWidth="0.5" strokeOpacity="0.5" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#00c2a8" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="60 120" filter="url(#glow)" />
      </g>

      {/* Inner ring - counter clockwise */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="10s" repeatCount="indefinite" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="#00c2a8" strokeWidth="0.5" strokeOpacity="0.4" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="#00c2a8" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="20 100" filter="url(#glow)" />
      </g>

      {/* Orbiting particles */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="12s" repeatCount="indefinite" />
        <circle cx="200" cy="40" r="3" fill="#00c2a8" filter="url(#glow)">
          <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      <g>
        <animateTransform attributeName="transform" type="rotate" from="180 200 200" to="540 200 200" dur="18s" repeatCount="indefinite" />
        <circle cx="200" cy="80" r="2" fill="#00c2a8" fillOpacity="0.8" filter="url(#glow)" />
      </g>

      <g>
        <animateTransform attributeName="transform" type="rotate" from="90 200 200" to="450 200 200" dur="14s" repeatCount="indefinite" />
        <circle cx="200" cy="120" r="2.5" fill="#00c2a8" fillOpacity="0.6" />
      </g>

      {/* Token tickers orbit - subtle brand relevance */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
        <text fontSize="9.5" letterSpacing="1.4" fill="url(#tokenTextGradient)" opacity="0.6">
          <textPath href="#tokenOrbitOuterArc" startOffset="50%" textAnchor="middle">
            MEROG
          </textPath>
        </text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="120 200 200" to="480 200 200" dur="26s" repeatCount="indefinite" />
        <text fontSize="9" letterSpacing="1.4" fill="url(#tokenTextGradient)" opacity="0.6">
          <textPath href="#tokenOrbitMiddleArc" startOffset="50%" textAnchor="middle">
            MEROC
          </textPath>
        </text>
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="240 200 200" to="600 200 200" dur="12s" repeatCount="indefinite" />
        <text fontSize="9" letterSpacing="1.4" fill="url(#tokenTextGradient)" opacity="0.55">
          <textPath href="#tokenOrbitInnerArc" startOffset="50%" textAnchor="middle">
            MERON
          </textPath>
        </text>
      </g>

      {/* Compounding pulse bands - indicates accumulating interest */}
      <g opacity="0.45">
        <circle cx="200" cy="200" r="38" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.35">
          <animate attributeName="r" values="38;54;38" dur="5s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.15;0.45;0.15" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="50" fill="none" stroke="#00c2a8" strokeWidth="0.8" strokeOpacity="0.25">
          <animate attributeName="r" values="50;68;50" dur="5s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.08;0.35;0.08" dur="5s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Central core */}
      <g>
        {/* Pulsing center */}
        <circle cx="200" cy="200" r="25" fill="url(#centerPulse)">
          <animate attributeName="r" values="25;30;25" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Solid center */}
        <circle cx="200" cy="200" r="15" fill="#071220" stroke="#00c2a8" strokeWidth="1.5" filter="url(#glow)" />
        
        {/* Inner dot */}
        <circle cx="200" cy="200" r="5" fill="#00c2a8">
          <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Radial lines - subtle */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 200 + 30 * Math.cos(angle);
        const y1 = 200 + 30 * Math.sin(angle);
        const x2 = 200 + 170 * Math.cos(angle);
        const y2 = 200 + 170 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#00c2a8" strokeWidth="0.2" strokeOpacity="0.1"
          />
        );
      })}

      {/* Corner accents - gold for commodities */}
      <circle cx="360" cy="40" r="8" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />
      <circle cx="40" cy="360" r="6" fill="none" stroke="#b87333" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="360" cy="360" r="5" fill="none" stroke="#9ba8a0" strokeWidth="0.5" strokeOpacity="0.25" />
    </svg>
  );
}

export function Header() {
  const [activeModule, setActiveModule] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % MODULES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="relume" className="hero-gradient-bg relative min-h-screen overflow-hidden">
      {/* Fine grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[70vh] w-[70vw] opacity-30"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(0,194,168,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="container relative flex min-h-screen items-center px-[5%] py-24 md:py-32">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: Copy */}
          <div className="flex flex-col">

            {/* Phase badge */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="inline-block h-2 w-2 bg-[#00c2a8]" />
                <span className="inline-block h-2 w-2 bg-[#00c2a8]/50" />
                <span className="inline-block h-2 w-2 bg-[#00c2a8]/20" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00c2a8]/80">
                Phase 1 — GIFT IFSC
              </span>
            </div>

            {/* Headline - Simple and punchy */}
            <h1 className="mb-8 font-display text-[2.6rem] font-light leading-[1.05] text-white md:text-5xl lg:text-[3.5rem]">
              Commodities.<br />
              <span className="text-[#00c2a8]">Tokenised. Earning.</span><br />
              Without selling.
            </h1>

            <p className="mb-10 max-w-[520px] text-base leading-relaxed text-white/55 md:text-[1.1rem]">
              Turn warehouse receipts into on-chain assets.
              Access collateral workflows while underlying commodities stay vaulted.
            </p>

            {/* Module pills */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {MODULES.map((module, index) => (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => setActiveModule(index)}
                  className={`border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    activeModule === index
                      ? "border-[#00c2a8]/60 bg-[#00c2a8]/12 text-[#00c2a8]"
                      : "border-white/10 bg-white/[0.02] text-white/40 hover:border-white/20 hover:text-white/60"
                  }`}
                >
                  {module.label}
                </button>
              ))}
            </div>

            {/* Description - Fixed height to prevent layout shift */}
            <div className="mb-10 h-28 max-w-[480px] border-l-2 border-[#00c2a8]/30 bg-white/[0.02] px-5 pt-3 pb-4">
              <p className="text-sm leading-relaxed text-white/60 md:text-[0.95rem]">
                {MODULES[activeModule].description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/#channels"
                className="group relative inline-flex items-center gap-3 bg-white px-7 py-3.5 text-xs font-semibold tracking-wider text-[#0b1c2d] transition-all duration-300 hover:gap-5 hover:bg-[#e6faf8]"
              >
                <span>EXPLORE PLATFORM</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute -right-1 -top-1 h-2 w-2 bg-[#00c2a8]" />
              </Link>

              {/* <Link
                to="/#partners"
                className="text-xs font-medium tracking-wide text-white/45 transition-colors duration-300 hover:text-white/80"
              >
                View ecosystem →
              </Link> */}
            </div>
          </div>

          {/* RIGHT: Abstract Animated Core */}
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-80 md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem]">
              <AbstractCore />
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">Scroll</span>
            <div className="h-10 w-px bg-gradient-to-b from-[#00c2a8]/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
