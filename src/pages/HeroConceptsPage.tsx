import { Link } from "react-router-dom";

// ============================================================================
// HERO CONCEPT OPTIONS - Design Gallery
// ============================================================================

const HERO_CONCEPTS = [
  {
    id: 1,
    title: "Single Monumental Coin",
    subtitle: "Dignified. Minimal. Powerful.",
    description:
      "One large, substantial USDM coin — centered, minimal, powerful. Navy base with emerald top highlight. Very slow pulse. Feels like a gold bar sitting in a vault.",
    pros: ["Clean and premium", "Easy to understand", "Scales well"],
    cons: ["Still a 'coin' visual"],
    visual: "SingleCoin",
  },
  {
    id: 2,
    title: "USDM as Architecture",
    subtitle: "Letters as Buildings",
    description:
      "Each letter built as architectural structure: U = Foundation, S = Curved Structure, D = Circular Vault, M = Peaks. Gradient from navy to emerald. Blueprints come to life.",
    pros: ["Unique concept", "Tells brand story", "Memorable"],
    cons: ["Complex to execute", "May be hard to read at small sizes"],
    visual: "Architecture",
  },
  {
    id: 3,
    title: "Three Pillars (Logo Literal)",
    subtitle: "Pure Brand Mark",
    description:
      "Your actual logo at monument scale — three rounded vertical bars ascending in height. Left: navy opaque, Middle: gradient, Right: emerald glow. Subtle pulse animation.",
    pros: ["Strongest brand recognition", "Cleanest design", "Architectural precision"],
    cons: ["No USDM visible"],
    visual: "Pillars",
  },
  {
    id: 4,
    title: "Capital Flow Lines",
    subtitle: "Abstract Geometric Flow",
    description:
      "Four abstract lines rising at different slopes (U-S-D-M). Lines trace commodity → infrastructure → yield journey. Data visualization aesthetic.",
    pros: ["Modern and technical", "Tells the value flow story"],
    cons: ["Abstract — may need explanation"],
    visual: "FlowLines",
  },
  {
    id: 5,
    title: "Institutional Seal",
    subtitle: "Bank Authority Badge",
    description:
      "Circular seal with USDM at center. Outer ring reads 'COMMODITY BACKED • 126% COLLATERALIZED'. Metallic sheen, embossed effect. Central bank aesthetic.",
    pros: ["Maximum trust signal", "Timeless", "Institutional gravitas"],
    cons: ["May feel traditional/old"],
    visual: "Seal",
  },
  {
    id: 6,
    title: "The Vault Reveal",
    subtitle: "Exclusive Access",
    description:
      "Perspective view of massive vault door, slightly ajar. Emerald light spilling out. USDM etched on door or visible in glow. Security meets mystery.",
    pros: ["Strong storytelling", "Intrigue and exclusivity"],
    cons: ["May need illustration/3D"],
    visual: "Vault",
  },
  {
    id: 7,
    "title": "Typographic Grid Construction",
    subtitle: "Engineering Precision",
    description:
      "USDM letters constructed from architectural grid lines. Lines draw themselves (stroke animation). Blueprint/engineering drawing aesthetic. Mathematical precision.",
    pros: ["Highly unique", "Engineering credibility"],
    cons: ["May feel cold/technical"],
    visual: "Grid",
  },
  {
    id: 8,
    title: "Floating USDM",
    subtitle: "Monumental Typography",
    description:
      "Large 'USDM' text as the hero element. 3D extruded letters casting long shadows. Gradient fill (navy→emerald). Monumental sculpture feel.",
    pros: ["Bold and confident", "No ambiguity"],
    cons: ["Typography-focused, less visual"],
    visual: "FloatingText",
  },
] as const;

// ============================================================================
// VISUAL REPRESENTATIONS
// ============================================================================

function VisualSingleCoin() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0b1c2d] via-[#066253] to-[#00c2a8] shadow-2xl" />
        <div className="absolute inset-2 rounded-full border-2 border-white/20 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-white">$</span>
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
      </div>
    </div>
  );
}

function VisualArchitecture() {
  return (
    <div className="flex items-end justify-center gap-1 h-full pb-4">
      <div className="w-6 h-16 bg-gradient-to-t from-[#0b1c2d] to-[#0f2a3d] rounded-t-sm flex items-center justify-center">
        <span className="text-white font-bold text-xs">U</span>
      </div>
      <div className="w-8 h-20 bg-gradient-to-t from-[#0f2a3d] to-[#066253] rounded-t-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">S</span>
      </div>
      <div className="w-8 h-20 bg-gradient-to-t from-[#066253] to-[#0a8a7a] rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">D</span>
      </div>
      <div className="w-10 h-24 bg-gradient-to-t from-[#0a8a7a] to-[#00c2a8] rounded-t-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">M</span>
      </div>
    </div>
  );
}

function VisualPillars() {
  return (
    <div className="flex items-end justify-center gap-2 h-full pb-4">
      <div className="w-8 h-16 rounded-full bg-[#0b1c2d] opacity-80" />
      <div className="w-8 h-20 rounded-full bg-gradient-to-t from-[#0b1c2d] to-[#066253]" />
      <div className="w-8 h-24 rounded-full bg-gradient-to-t from-[#066253] to-[#00c2a8] shadow-lg shadow-emerald-500/20" />
    </div>
  );
}

function VisualFlowLines() {
  return (
    <div className="flex items-center justify-center h-full">
      <svg viewBox="0 0 100 60" className="w-full h-full max-w-[180px]">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0b1c2d" />
            <stop offset="50%" stopColor="#066253" />
            <stop offset="100%" stopColor="#00c2a8" />
          </linearGradient>
        </defs>
        <path d="M10 50 Q25 45 20 30 T30 15" stroke="url(#lineGrad)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M35 50 Q50 40 45 25 T55 12" stroke="url(#lineGrad)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8"/>
        <path d="M60 50 Q75 35 70 22 T80 10" stroke="url(#lineGrad)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M85 50 Q95 30 90 18 T95 8" stroke="url(#lineGrad)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
      </svg>
    </div>
  );
}

function VisualSeal() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-32 md:w-36 md:h-36">
        <div className="absolute inset-0 rounded-full border-4 border-[#0b1c2d] bg-gradient-to-br from-[#fafbfc] to-[#e8ecf2]" />
        <div className="absolute inset-3 rounded-full border-2 border-[#066253]/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg md:text-xl font-bold text-[#0b1c2d]">USDM</span>
          <span className="text-[8px] uppercase tracking-wider text-[#066253] mt-1">Commodity Backed</span>
        </div>
        <div className="absolute -inset-1 rounded-full border border-[#00c2a8]/20" />
      </div>
    </div>
  );
}

function VisualVault() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        <div className="absolute inset-0 rounded-full bg-[#0b1c2d]" />
        <div className="absolute inset-2 rounded-full border-8 border-[#1a3a52]" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#00c2a8]/40 via-[#066253]/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-20 bg-gradient-to-r from-[#066253] to-[#00c2a8] rounded-sm transform rotate-12 origin-bottom-left translate-x-2" />
        </div>
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,194,168,0.3)]" />
      </div>
    </div>
  );
}

function VisualGrid() {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="grid grid-cols-4 gap-1">
        {["U", "S", "D", "M"].map((letter, i) => (
          <div key={letter} className="relative w-8 h-12 border border-[#0b1c2d]/20 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `linear-gradient(to right, transparent 49%, #066253 49%, #066253 51%, transparent 51%), linear-gradient(to bottom, transparent 49%, #066253 49%, #066253 51%, transparent 51%)`,
              backgroundSize: '8px 8px'
            }} />
            <span className="relative text-lg font-bold text-[#0b1c2d]">{letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualFloatingText() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0b1c2d] via-[#066253] to-[#00c2a8] bg-clip-text text-transparent" style={{textShadow: '4px 4px 0 rgba(11,28,45,0.1)'}}>
          USDM
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#0b1c2d]/20 via-[#066253]/20 to-[#00c2a8]/20 blur-sm" />
      </div>
    </div>
  );
}

const VISUAL_COMPONENTS: Record<string, React.FC> = {
  SingleCoin: VisualSingleCoin,
  Architecture: VisualArchitecture,
  Pillars: VisualPillars,
  FlowLines: VisualFlowLines,
  Seal: VisualSeal,
  Vault: VisualVault,
  Grid: VisualGrid,
  FloatingText: VisualFloatingText,
};

// ============================================================================
// MAIN PAGE
// ============================================================================

export function HeroConceptsPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#0b1c2d]/10 bg-white/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between px-[5%] py-4">
          <Link to="/" className="text-lg font-bold text-[#0b1c2d]">
            ← Back to Site
          </Link>
          <span className="text-sm font-medium text-[#0b1c2d]/60">
            Hero Concept Gallery
          </span>
        </div>
      </header>

      {/* Intro */}
      <div className="container px-[5%] py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#0b1c2d] md:text-4xl">
            Choose Your Hero
          </h1>
          <p className="text-[#0b1c2d]/60">
            8 visual concepts for the hero section. Select the one that best represents Mero's brand.
          </p>
        </div>
      </div>

      {/* Concepts Grid */}
      <div className="container px-[5%] pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {HERO_CONCEPTS.map((concept) => {
            const VisualComponent = VISUAL_COMPONENTS[concept.visual];
            return (
              <div
                key={concept.id}
                className="group relative overflow-hidden border border-[#0b1c2d]/10 bg-white transition-all hover:border-[#066253]/30 hover:shadow-lg"
              >
                {/* Concept Number */}
                <div className="absolute right-4 top-4 text-6xl font-bold text-[#0b1c2d]/[0.03]">
                  {String(concept.id).padStart(2, "0")}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Visual Preview */}
                  <div className="aspect-square bg-gradient-to-br from-[#fafbfc] to-[#e8ecf2] p-8">
                    <VisualComponent />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-[#066253]">
                        Option {concept.id}
                      </span>
                      <h2 className="mb-2 text-xl font-bold text-[#0b1c2d] md:text-2xl">
                        {concept.title}
                      </h2>
                      <p className="mb-4 text-sm font-medium text-[#066253]">
                        {concept.subtitle}
                      </p>
                      <p className="mb-6 text-sm leading-relaxed text-[#0b1c2d]/60">
                        {concept.description}
                      </p>

                      {/* Pros */}
                      <div className="mb-4">
                        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-emerald-600">
                          Pros
                        </span>
                        <ul className="space-y-1">
                          {concept.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#0b1c2d]/70">
                              <span className="text-emerald-500">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cons */}
                      <div>
                        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-amber-600">
                          Considerations
                        </span>
                        <ul className="space-y-1">
                          {concept.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#0b1c2d]/70">
                              <span className="text-amber-500">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Select Button */}
                    <button className="mt-6 w-full bg-[#0b1c2d] py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#066253]">
                      Select Option {concept.id}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-sm text-[#0b1c2d]/60">
            Found the perfect concept? Let me know which number and I'll implement it.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-[#0b1c2d]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0b1c2d] transition-all hover:border-[#066253] hover:text-[#066253]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
