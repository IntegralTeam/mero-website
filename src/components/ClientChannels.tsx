import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const INVESTOR_GATE_KEY = "meroInvestorGateAccepted";

const GATE_BODY =
  "The following information relates to the Mero Genesis Fund LP, which is intended to be established as a Jersey Private Fund under the Collective Investment Funds (Jersey Private Funds) Order 2025. The minimum subscription is £250,000 (or currency equivalent). The Fund is intended to be available exclusively to eligible investors, including: high-net-worth individuals with net assets exceeding $1,000,000; entities with investable assets of $1,000,000 or more; UK FCA-classified professional clients; US SEC accredited investors under Regulation D Rule 501; and regulated financial services providers. The Fund will not be subject to the same regulatory protections as a Jersey-authorised fund. The Fund and its terms are under development and subject to change. By proceeding, you confirm that you expect to meet the minimum subscription and eligible investor criteria.";

const CHANNELS = [
  {
    id: "fund",
    number: "01",
    title: "Genesis Fund",
    subtitle: "Eligible Investors",
    description:
      "Intended Jersey Private Fund structure with cash or in-kind commodity contribution pathways. Potential dual return: indicative USDM yield from institutional products, plus potential capital appreciation on the underlying commodity basket (both subject to market conditions and product availability).",
    features: [
      "Intended Jersey DSP administration under the Jersey Private Fund regime",
      "Minimum subscription: £250,000 (or equivalent)",
      "Fund terms are under development and subject to change",
    ],
    cta: "Learn about the Fund",
    requiresGate: true,
  },
  {
    id: "banks",
    number: "02",
    title: "Banks",
    subtitle: "White-Label Platform",
    description:
      "White-label infrastructure under your own brand and license. Banks are intended to earn the spread between indicative client yield (target 5-6%) and underlying target returns (target 8-14%). Actual spreads vary and are not guaranteed.",
    features: [
      "Illustrative commercial terms only",
      "Designed with configurable KYC/AML controls",
      "Final pricing and availability are under development",
    ],
    cta: "Platform for Banks",
    requiresGate: true,
  },
  {
    id: "mining",
    number: "03",
    title: "Mining Corporates",
    subtitle: "Commodity Stockpile Yield",
    description:
      "Intended yield pathways for idle commodity stockpiles through institutional structures. Designed to avoid direct borrowing and direct FX conversion at minting and redemption.",
    features: [
      "In-kind contribution model",
      "Standard platform and minting fees will apply",
      "Fee schedule to be published prior to launch",
    ],
    cta: "For Mining Companies",
    requiresGate: false,
  },
] as const;

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
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isGateAccepted, setIsGateAccepted] = useState(false);
  const hasAutoTriggeredRef = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsGateAccepted(sessionStorage.getItem(INVESTOR_GATE_KEY) === "true");
  }, []);

  useEffect(() => {
    if (isGateAccepted || hasAutoTriggeredRef.current) return;
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          hasAutoTriggeredRef.current = true;
          setIsGateOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isGateAccepted]);

  const confirmGate = () => {
    sessionStorage.setItem(INVESTOR_GATE_KEY, "true");
    setIsGateAccepted(true);
    setIsGateOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b1c2d] py-20 md:py-28 lg:py-32"
    >
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
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
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
            One platform. Three intended routes to market. Structures, terms,
            and timelines remain under development.
          </p>
        </div>

        {!isGateAccepted && (
          <div className="mx-auto mb-10 max-w-4xl border border-amber-300/30 bg-amber-200/10 p-5 text-left md:p-6">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-200">
              Eligible Investors Only
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Certain sections below relate to fund-specific terms and are
              intended for eligible investors only.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-amber-200/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-100 transition-colors hover:bg-amber-100/10"
              onClick={() => setIsGateOpen(true)}
            >
              Review Eligibility Notice
              <span>→</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {CHANNELS.map((channel) => {
            const IconComponent = ICONS[channel.id];
            const isHidden = channel.requiresGate && !isGateAccepted;

            return (
              <div
                key={channel.id}
                className="group relative flex h-full flex-col border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04] md:p-10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl font-bold text-white/5 transition-colors group-hover:text-white/10">
                    {channel.number}
                  </span>
                  <IconComponent />
                </div>

                <div className="mb-4">
                  <h3 className="mb-1 text-xl font-bold text-white md:text-2xl">
                    {channel.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/80">
                    {channel.subtitle}
                  </p>
                </div>

                {isHidden ? (
                  <div className="space-y-4 border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/65">
                      This content is intended for eligible investors only.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsGateOpen(true)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 transition-colors hover:text-emerald-200"
                    >
                      I confirm I am an eligible investor - Continue
                      <span>→</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="mb-6 text-sm leading-relaxed text-white/60">
                      {channel.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {channel.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-white/45"
                        >
                          <span className="h-1 w-1 bg-emerald-500/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="mailto:info@mero.tech"
                      className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:text-emerald-300"
                    >
                      {channel.cta}
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                  </>
                )}

                <div className="absolute right-0 top-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-emerald-500/0 transition-all duration-300 group-hover:border-t-emerald-500/20" />
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center md:mt-16">
          <p className="mx-auto max-w-3xl text-sm text-white/40">
            Planned $50M pilot: LATAM-sourced inventory, intended to be
            structured through Graphene Platforms Ltd (FCA authorised, FRN
            756360). Pilot structure and terms are under development.
          </p>
        </div>
      </div>

      {isGateOpen && (
        <div
            className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/70 px-5"
            onClick={() => setIsGateOpen(false)}
        >
          <div
            className="w-full max-w-3xl border border-white/20 bg-[#0b1c2d] p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
              Eligible Investors Only
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/75">
              {GATE_BODY}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={confirmGate}
                className="bg-emerald-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d] transition-colors hover:bg-emerald-200"
              >
                I confirm I am an eligible investor - Continue
              </button>
              <button
                type="button"
                onClick={() => setIsGateOpen(false)}
                className="border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:border-white/60 hover:text-white"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-xs text-white/50">
              This information is intended for eligible investors only. For
              general information about Mero, please see the rest of this site.
              For enquiries, contact info@mero.tech.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
