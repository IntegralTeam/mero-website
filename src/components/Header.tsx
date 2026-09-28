const ORBIT_LABELS = [
  { text: "AUTHENTICATE", arc: "coreOrbitOuterArc", from: 0, dur: 20, size: 9.5, opacity: 0.6 },
  { text: "PLEDGE", arc: "coreOrbitMiddleArc", from: 120, dur: 26, size: 9, opacity: 0.6 },
  { text: "MONITOR", arc: "coreOrbitInnerArc", from: 240, dur: 12, size: 9, opacity: 0.55 },
] as const;

function AbstractCore() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
      <defs>
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
        <linearGradient id="orbitTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00c2a8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.95" />
        </linearGradient>
        <path id="coreOrbitOuterArc" d="M 88 85 A 144 144 0 0 1 312 85" fill="none" />
        <path id="coreOrbitMiddleArc" d="M 110 115 A 116 116 0 0 1 290 115" fill="none" />
        <path id="coreOrbitInnerArc" d="M 132 143 A 90 90 0 0 1 268 143" fill="none" />
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#coreGlow)">
        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite" />
      </circle>

      <g>
        <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="20s" repeatCount="indefinite" />
        <circle cx="200" cy="200" r="160" fill="none" stroke="url(#ringGradient)" strokeWidth="0.5" strokeOpacity="0.3" />
        <circle cx="200" cy="200" r="160" fill="none" stroke="#00c2a8" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="40 200" filter="url(#glow)" />
      </g>

      <g>
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="15s" repeatCount="indefinite" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="url(#ringGradient)" strokeWidth="0.5" strokeOpacity="0.5" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#00c2a8" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="60 120" filter="url(#glow)" />
      </g>

      <g>
        <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="10s" repeatCount="indefinite" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="#00c2a8" strokeWidth="0.5" strokeOpacity="0.4" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="#00c2a8" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="20 100" filter="url(#glow)" />
      </g>

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

      {ORBIT_LABELS.map((label) => (
        <g key={label.text}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`${label.from} 200 200`}
            to={`${label.from + 360} 200 200`}
            dur={`${label.dur}s`}
            repeatCount="indefinite"
          />
          <text fontSize={label.size} letterSpacing="1.4" fill="url(#orbitTextGradient)" opacity={label.opacity}>
            <textPath href={`#${label.arc}`} startOffset="50%" textAnchor="middle">
              {label.text}
            </textPath>
          </text>
        </g>
      ))}

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

      <g>
        <circle cx="200" cy="200" r="25" fill="url(#centerPulse)">
          <animate attributeName="r" values="25;30;25" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="15" fill="#071220" stroke="#00c2a8" strokeWidth="1.5" filter="url(#glow)" />
        <circle cx="200" cy="200" r="5" fill="#00c2a8">
          <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={200 + 30 * Math.cos(angle)}
            y1={200 + 30 * Math.sin(angle)}
            x2={200 + 170 * Math.cos(angle)}
            y2={200 + 170 * Math.sin(angle)}
            stroke="#00c2a8"
            strokeWidth="0.2"
            strokeOpacity="0.1"
          />
        );
      })}

      <circle cx="360" cy="40" r="8" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />
      <circle cx="40" cy="360" r="6" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="360" cy="360" r="5" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.25" />
    </svg>
  );
}

export function Header() {
  return (
    <section id="top" className="hero-gradient-bg relative min-h-screen overflow-hidden">
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

      <div
        className="pointer-events-none absolute right-0 top-0 h-[70vh] w-[70vw] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(0,194,168,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="container relative flex min-h-screen items-center px-[5%] py-24 md:py-32">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col">
            <h1 className="hero-in mb-8 font-display text-[2.6rem] font-light leading-[1.08] text-white md:text-5xl lg:text-[3.5rem]">
              The infrastructure layer for{" "}
              <span className="text-[#00c2a8] md:block">gold as collateral</span>
            </h1>

            <p className="hero-in mb-10 max-w-[540px] [animation-delay:150ms] text-base leading-relaxed text-white/60 md:text-[1.1rem]">
              Banks and financial institutions use Mero to authenticate vaulted gold, record a pledge
              with the custodian or depository that holds it, and monitor and enforce the loan. The
              metal never leaves the vault.
            </p>

            <div className="hero-in flex flex-wrap items-center gap-4 [animation-delay:300ms] sm:gap-6">
              <a
                href="#who-it-is-for"
                className="group relative inline-flex items-center gap-3 bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d] transition-all duration-300 hover:gap-5 hover:bg-[#e6faf8]"
              >
                <span>For banks and institutions</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute -right-1 -top-1 h-2 w-2 bg-[#00c2a8]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border border-white/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="hero-core-in relative h-80 w-80 md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem]">
              <AbstractCore />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="hero-in flex flex-col items-center gap-3 [animation-delay:700ms]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">Scroll</span>
            <div className="h-10 w-px bg-gradient-to-b from-[#00c2a8]/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
