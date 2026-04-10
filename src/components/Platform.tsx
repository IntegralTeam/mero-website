import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MaterialIcon } from "./MaterialIcon";

const PLATFORM_FEATURES = [
  {
    icon: "assured_workload",
    iconColor: "text-[#00c2a8]",
    title: "1:1 Tokenisation",
    description:
      "Physical commodities in certified vaults become on-chain assets. MEROG, MEROC, MERON — each is verified, transferable proof of ownership.",
    stat: "1:1",
    statLabel: "Parity",
  },
  {
    icon: "account_balance",
    iconColor: "text-[#0b1c2d]",
    title: "Instant USDC Loans",
    description:
      "Lock your assets, borrow USDC at 5% fixed. 60% LTV at start, 75% maintenance threshold, 48-hour cure — no flash liquidation.",
    stat: "60%",
    statLabel: "LTV",
  },
  {
    icon: "trending_up",
    iconColor: "text-[#C9A84C]",
    title: "Earn Without Selling",
    description:
      "Gold ETF overlays via an authorised investment manager. Collar or covered call strategies. 1.3–9% net yields while your metal stays vaulted.",
    stat: "1.3–9%",
    statLabel: "Net Yield",
  },
  {
    icon: "hub",
    iconColor: "text-[#0b1c2d]",
    title: "Strategy Marketplace",
    description:
      "Deploy borrowed capital into institutional products through a staged workflow from tokenisation to allocation.",
    stat: "4+",
    statLabel: "Managers",
  },
] as const;

export function Platform() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="platform" className="relative bg-white py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      {/* Connection lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00c2a8" stopOpacity="0" />
              <stop offset="50%" stopColor="#00c2a8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00c2a8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Horizontal connecting line */}
          <line 
            x1="10%" y1="50%" x2="90%" y2="50%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      <div className="container px-[5%]" ref={sectionRef}>
        <div className={`mx-auto mb-16 max-w-3xl md:mb-20 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              Platform
            </span>
            <span className="h-px w-8 bg-[#00c2a8]/40" />
          </div>
          <h2 className="mb-5 text-center font-display text-3xl font-light text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            Everything you need <br /> to put commodities to work
          </h2>
          <p className="mx-auto max-w-2xl text-center text-[#0b1c2d]/60 md:text-lg">
            Tokenise, borrow, and activate capital through one infrastructure layer.
            Unlock the full value of your physical assets without selling them.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[#0b1c2d]/10 md:grid-cols-2 lg:grid-cols-4 relative">
          {PLATFORM_FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-white p-8 transition-all duration-500 ease-out hover:bg-[#fafbfc] hover:-translate-y-1 hover:shadow-lg md:p-10 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step indicator */}
              <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/20 group-hover:text-[#00c2a8]/40 transition-colors">
                0{index + 1}
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="icon-hover-scale transition-transform duration-300 group-hover:scale-110">
                  <MaterialIcon name={feature.icon} size={48} className={feature.iconColor} />
                </div>
                <span className="text-right">
                  <span className="block text-2xl font-bold text-[#0b1c2d] md:text-3xl transition-transform duration-300 group-hover:scale-105">
                    {feature.stat}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                    {feature.statLabel}
                  </span>
                </span>
              </div>

              <h3 className="mb-3 text-lg font-bold text-[#0b1c2d] md:text-xl group-hover:text-[#00c2a8] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#0b1c2d]/60 group-hover:text-[#0b1c2d]/70 transition-colors">
                {feature.description}
              </p>

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#00c2a8] to-[#00c2a8]/50 transition-all duration-500 ease-out group-hover:w-full" />
              
              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-0 w-0 border-l-[24px] border-t-[24px] border-l-transparent border-t-[#00c2a8] opacity-0 transition-all duration-500 group-hover:opacity-[0.08]" />

              {/* Connection arrow (except last item) */}
              {index < PLATFORM_FEATURES.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00c2a8]">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`mt-12 flex items-center justify-center border-t border-[#0b1c2d]/10 pt-8 md:mt-16 transition-all duration-700 delay-500 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link
            to="/#yield"
            className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/40 transition-all hover:text-[#00c2a8] hover:gap-3"
          >
            View yield overlay and deploy paths
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
