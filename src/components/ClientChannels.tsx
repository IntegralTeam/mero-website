import { Link } from "react-router-dom";

const CHANNELS = [
  {
    id: "fund",
    number: "01",
    title: "Genesis Fund",
    subtitle: "Accredited Investors & Family Offices",
    description:
      "Jersey Private Fund structure. Subscribe with cash or in-kind commodity contribution. Dual return: USDM yield plus capital appreciation on underlying commodity basket.",
    features: ["Regulated Jersey DSP", "75% Gold / 25% Copper basket", "Preferential early rates"],
    cta: "Learn about the Fund",
  },
  {
    id: "banks",
    number: "02",
    title: "Banks",
    subtitle: "White-Label Platform",
    description:
      "White-label infrastructure under your own brand and license. Earn the spread between client yield (5-6%) and underlying returns (8-14%).",
    features: ["$150K one-time setup", "$25K/month platform fee", "40bps on AUM yield"],
    cta: "Platform for Banks",
  },
  {
    id: "mining",
    number: "03",
    title: "Mining Corporates",
    subtitle: "Commodity Stockpile Yield",
    description:
      "Earn yield on idle commodity stockpiles using pre-existing investment management setup. No borrowing. No FX exposure. Commodity never leaves your vault.",
    features: ["In-kind contribution model", "Zero borrowing cost", "Same fee structure as banks"],
    cta: "For Mining Companies",
  },
] as const;

// Channel icon components
function FundIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="8" y="16" width="32" height="24" fill="#0b1c2d" fillOpacity="0.05" stroke="#0b1c2d" strokeWidth="1.5"/>
      <rect x="20" y="8" width="8" height="8" fill="#066253" fillOpacity="0.2" stroke="#066253" strokeWidth="1.5"/>
      <path d="M16 28 L24 24 L32 28" stroke="#00c2a8" strokeWidth="1.5" strokeLinecap="square" fill="none"/>
      <circle cx="24" cy="34" r="3" fill="#00c2a8" fillOpacity="0.3"/>
    </svg>
  );
}

function BankIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="4" y="20" width="40" height="24" fill="#0b1c2d" fillOpacity="0.05" stroke="#0b1c2d" strokeWidth="1.5"/>
      <rect x="8" y="24" width="6" height="16" fill="#066253" fillOpacity="0.2"/>
      <rect x="21" y="24" width="6" height="16" fill="#066253" fillOpacity="0.2"/>
      <rect x="34" y="24" width="6" height="16" fill="#066253" fillOpacity="0.2"/>
      <path d="M4 20 L24 8 L44 20" stroke="#0b1c2d" strokeWidth="1.5" strokeLinejoin="miter" fill="none"/>
    </svg>
  );
}

function MiningIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <path d="M8 40 L16 20 L24 40" fill="#0b1c2d" fillOpacity="0.05" stroke="#0b1c2d" strokeWidth="1.5"/>
      <path d="M20 40 L28 16 L36 40" fill="#066253" fillOpacity="0.1" stroke="#066253" strokeWidth="1.5"/>
      <circle cx="28" cy="28" r="4" fill="#00c2a8" fillOpacity="0.3" stroke="#00c2a8" strokeWidth="1"/>
      <rect x="6" y="40" width="36" height="4" fill="#0b1c2d" fillOpacity="0.1"/>
    </svg>
  );
}

const ICONS = {
  fund: FundIcon,
  banks: BankIcon,
  mining: MiningIcon,
} as const;

export function ClientChannels() {
  return (
    <section className="relative overflow-hidden bg-[#0b1c2d] py-20 md:py-28 lg:py-32">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative px-[5%]">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-500/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Go-to-Market
            </span>
            <span className="h-px w-8 bg-emerald-500/40" />
          </div>
          <h2 className="mb-5 text-3xl font-bold leading-[1.15] text-white md:text-4xl lg:text-[2.75rem]">
            Three client channels
          </h2>
          <p className="text-white/50 md:text-lg">
            One platform. Three routes to market. The fund proves the model for the platform.
          </p>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {CHANNELS.map((channel) => {
            const IconComponent = ICONS[channel.id];
            return (
              <div
                key={channel.id}
                className="group relative border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04] md:p-10"
              >
                {/* Number & Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl font-bold text-white/5 transition-colors group-hover:text-white/10">
                    {channel.number}
                  </span>
                  <IconComponent />
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="mb-1 text-xl font-bold text-white md:text-2xl">
                    {channel.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/80">
                    {channel.subtitle}
                  </p>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  {channel.description}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {channel.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-white/40"
                    >
                      <span className="h-1 w-1 bg-emerald-500/60" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/#stay-informed"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {channel.cta}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>

                {/* Corner accent */}
                <div className="absolute right-0 top-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-emerald-500/0 transition-all duration-300 group-hover:border-t-emerald-500/20" />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center md:mt-16">
          <p className="mx-auto max-w-2xl text-sm text-white/40">
            The fund IS the MVP. Mero deploys the same white-label infrastructure 
            to manage accredited investor capital, then uses this as a conversion funnel 
            to obtain bank pilots and mining corporates.
          </p>
        </div>
      </div>
    </section>
  );
}
