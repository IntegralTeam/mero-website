import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/** Set `true` to restore the “Eligible Investors Only” banner, modal, and gated Mero Fund card. */
const INVESTOR_GATE_ENABLED = false;

const INVESTOR_GATE_KEY = "meroInvestorGateAccepted";

const GATE_BODY =
  "The following information relates to the Mero Fund, which is intended to be established as a Jersey Private Fund under the Collective Investment Funds (Jersey Private Funds) Order 2025. The minimum subscription is £250,000 (or currency equivalent). The Fund is intended to be available exclusively to eligible investors, including: high-net-worth individuals with net assets exceeding $1,000,000; entities with investable assets of $1,000,000 or more; UK FCA-classified professional clients; US SEC accredited investors under Regulation D Rule 501; and regulated financial services providers. The Fund will not be subject to the same regulatory protections as a Jersey-authorised fund. The Fund and its terms are under development and subject to change. By proceeding, you confirm that you expect to meet the minimum subscription and eligible investor criteria.";

const CHANNELS = [
  {
    id: "banks",
    number: "01",
    title: "Indian Banks",
    subtitle: "White-Label SaaS at GIFT IFSC",
    description:
      "Mero deploys as white-label infrastructure under the bank's own brand at GIFT IFSC. The bank offers warehouse receipt issuance, repo-style lending, and the asset manager marketplace to its institutional clients. The bank retains the client relationship and earns the spread.",
    features: [
      "Bank's existing KYC/AML framework governs client onboarding",
      "Chainalysis and Elliptic supplement on-chain transaction screening",
      "Bank configures available products and allocation limits",
    ],
    cta: "Platform for Banks",
    requiresGate: false,
  },
  {
    id: "commodity",
    number: "02",
    title: "Commodity Holders",
    subtitle: "Tokenise, Borrow, Earn",
    description:
      "Mining corporates, bullion dealers, and sovereign commodity holders digitise physical gold, copper, and nickel into warehouse receipt assets. Deploy into the lending protocol for USDC liquidity, or the Gold ETF overlay for income on idle reserves.",
    features: [
      "Tokenise at GIFT IFSC in the LBMA-aligned bullion market framework",
      "Lock MEROG as collateral — borrow USDC at 5% fixed, 60% LTV",
      "Gold ETF overlay route shown as an indicative roadmap pathway",
    ],
    cta: "For Commodity Holders",
    requiresGate: false,
  },
  {
    id: "fund",
    number: "03",
    title: "Mero Fund",
    subtitle: "Eligible Investors",
    description:
      "International institutional investors — sovereign entities, family offices, qualified investors — access Mero's platform via the Mero Fund (Jersey Private Fund structure). Exposure to warehouse receipt assets and curated yield strategies, administered by a JFSC-regulated Designated Service Provider.",
    features: [
      "Jersey Private Fund — JFSC-regulated DSP administration",
      "Minimum subscription: £250,000 (or equivalent)",
      "Exposure to MEROG and Gold ETF yield overlay strategies",
    ],
    cta: "Learn about the Fund",
    requiresGate: true,
  },
] as const;

function BankIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="4" y="20" width="40" height="24" fill="#0b1c2d" fillOpacity="0.05" stroke="#0b1c2d" strokeWidth="1.5"/>
      <rect x="8" y="24" width="6" height="16" fill="#00c2a8" fillOpacity="0.15"/>
      <rect x="21" y="24" width="6" height="16" fill="#00c2a8" fillOpacity="0.15"/>
      <rect x="34" y="24" width="6" height="16" fill="#00c2a8" fillOpacity="0.15"/>
      <path d="M4 20 L24 8 L44 20" stroke="#0b1c2d" strokeWidth="1.5" strokeLinejoin="miter" fill="none"/>
    </svg>
  );
}

function CommodityIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <path d="M8 40 L16 20 L24 40" fill="#0b1c2d" fillOpacity="0.05" stroke="#0b1c2d" strokeWidth="1.5"/>
      <path d="M20 40 L28 16 L36 40" fill="#00c2a8" fillOpacity="0.1" stroke="#00c2a8" strokeWidth="1.5"/>
      <circle cx="28" cy="28" r="4" fill="#00c2a8" fillOpacity="0.3" stroke="#00c2a8" strokeWidth="1"/>
      <rect x="6" y="40" width="36" height="4" fill="#0b1c2d" fillOpacity="0.08"/>
    </svg>
  );
}

function FundIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
      <rect x="8" y="16" width="32" height="24" fill="#0b1c2d" fillOpacity="0.05" stroke="#0b1c2d" strokeWidth="1.5"/>
      <rect x="20" y="8" width="8" height="8" fill="#00c2a8" fillOpacity="0.2" stroke="#00c2a8" strokeWidth="1.5"/>
      <path d="M16 28 L24 24 L32 28" stroke="#00c2a8" strokeWidth="1.5" strokeLinecap="square" fill="none"/>
      <circle cx="24" cy="34" r="3" fill="#00c2a8" fillOpacity="0.3"/>
    </svg>
  );
}

const ICONS = { banks: BankIcon, commodity: CommodityIcon, fund: FundIcon } as const;

export function ClientChannels() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isGateAccepted, setIsGateAccepted] = useState(false);
  const hasAutoTriggeredRef = useRef(false);
  const gateUnlocked = !INVESTOR_GATE_ENABLED || isGateAccepted;
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const card1Animation = useScrollAnimation({ threshold: 0.1 });
  const card2Animation = useScrollAnimation({ threshold: 0.1 });
  const card3Animation = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    setIsGateAccepted(sessionStorage.getItem(INVESTOR_GATE_KEY) === "true");
  }, []);

  useEffect(() => {
    if (!INVESTOR_GATE_ENABLED) return;
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
      id="channels"
      className="relative overflow-hidden emerald-gradient-bg py-20 md:py-28 lg:py-32"
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
        <div 
          ref={headerRef}
          className={`mx-auto mb-8 max-w-3xl text-center md:mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              Go-to-Market
            </span>
            <span className="h-px w-8 bg-[#00c2a8]/40" />
          </div>
          <h2 className="mb-5 font-display text-3xl font-light leading-[1.15] text-white md:text-4xl lg:text-[2.75rem]">
            Three client channels
          </h2>
          <p className="text-white/50 md:text-lg">
            One infrastructure layer. Three routes to market. Bank white-label deployment is the pilot focus,
            with broader commodity-holder and fund pathways expanding through roadmap phases.
          </p>
        </div>

        {INVESTOR_GATE_ENABLED && !gateUnlocked && (
          <div className="mx-auto mb-10 max-w-4xl border border-amber-300/25 bg-amber-200/8 p-5 text-left md:p-6">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-200">
              Eligible Investors Only
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/65">
              The Mero Fund channel below relates to fund-specific terms intended for eligible investors only.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-amber-200/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-100 transition-colors hover:bg-amber-100/10"
              onClick={() => setIsGateOpen(true)}
            >
              Review Eligibility Notice
              <span>→</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {CHANNELS.map((channel, index) => {
            const IconComponent = ICONS[channel.id];
            const isHidden = channel.requiresGate && !gateUnlocked;
            const cardAnimations = [card1Animation, card2Animation, card3Animation];
            const cardAnimation = cardAnimations[index];

            return (
              <div
                key={channel.id}
                ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
                className={`group relative flex h-full flex-col border border-white/10 bg-white/[0.02] p-8 transition-all duration-700 hover:border-[#00c2a8]/30 hover:bg-white/[0.04] md:p-10 ${cardAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
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
                  <p className="text-sm font-medium text-[#00c2a8]/80">
                    {channel.subtitle}
                  </p>
                </div>

                {isHidden ? (
                  <div className="space-y-4 border border-white/10 bg-black/20 p-4">
                    <p className="text-sm text-white/55">
                      This content is intended for eligible investors only.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsGateOpen(true)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00c2a8] transition-colors hover:text-[#00c2a8]"
                    >
                      I confirm I am an eligible investor — Continue
                      <span>→</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="mb-6 text-sm leading-relaxed text-white/55">
                      {channel.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {channel.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs text-white/40">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-[#00c2a8]/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="mailto:info@mero.tech"
                      className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00c2a8] transition-colors hover:text-[#00c2a8]"
                    >
                      {channel.cta}
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                  </>
                )}

                <div className="absolute right-0 top-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-[#00c2a8]/0 transition-all duration-300 group-hover:border-t-[#00c2a8]/15" />
              </div>
            );
          })}
        </div>
      </div>

      {INVESTOR_GATE_ENABLED && isGateOpen && (
        <div
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/70 px-5"
          onClick={() => setIsGateOpen(false)}
        >
          <div
            className="w-full max-w-3xl border border-white/20 bg-[#0b1c2d] p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Eligible Investors Only
              </h3>
              <button
                type="button"
                onClick={() => setIsGateOpen(false)}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Close
              </button>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              {GATE_BODY}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={confirmGate}
                className="bg-[#00c2a8] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d] transition-colors hover:bg-[#00c2a8]"
              >
                I confirm I am an eligible investor — Continue
              </button>
              <button
                type="button"
                onClick={() => setIsGateOpen(false)}
                className="border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/75 transition-colors hover:border-white/50 hover:text-white"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-xs text-white/40">
              This information is intended for eligible investors only. For enquiries, contact info@mero.tech.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
