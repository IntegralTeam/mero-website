import { Link } from "react-router-dom";
import { MaterialIcon } from "./MaterialIcon";

const PLATFORM_FEATURES = [
  {
    icon: "trending_up",
    iconColor: "text-emerald-600",
    title: "Regulated yield products",
    description: "Access 5-15% APY through BlackRock BUIDL, Franklin Templeton BENJI, and Apollo ACRED partnerships.",
    stat: "5-15%",
    statLabel: "APY",
  },
  {
    icon: "account_balance",
    iconColor: "text-[#0b1c2d]",
    title: "Over-collateralized reserves",
    description: "126% collateralization ratio ensures stability and protects bank capital at all times.",
    stat: "126%",
    statLabel: "Backed",
  },
  {
    icon: "security",
    iconColor: "text-emerald-600",
    title: "Privacy-preserving blockchain",
    description: "Canton Network provides permissioned infrastructure built for regulated financial institutions.",
    stat: "100%",
    statLabel: "Private",
  },
  {
    icon: "sync_alt",
    iconColor: "text-[#0b1c2d]",
    title: "No foreign exchange friction",
    description: "Zero FX conversion required. Settle directly in USD-backed stablecoins across borders.",
    stat: "Zero",
    statLabel: "FX Fees",
  },
] as const;

export function Layout298() {
  return (
    <section id="platform" className="relative bg-white py-20 md:py-28 lg:py-32">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />
      
      <div className="container px-[5%]">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#066253]">
              Platform
            </span>
          </div>
          <h2 className="mb-5 text-center text-3xl font-bold leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            Built for institutional-grade
            <br />
            security and compliance
          </h2>
          <p className="mx-auto max-w-2xl text-center text-[#0b1c2d]/60 md:text-lg">
            Mero combines commodity-backed stablecoins with institutional yield 
            infrastructure. Every USDM token is secured by real reserves.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-px bg-[#0b1c2d]/10 md:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white p-8 transition-colors duration-300 hover:bg-[#fafbfc] md:p-10"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <MaterialIcon name={feature.icon} size={48} className={feature.iconColor} />
                  <span className="text-right">
                    <span className="block text-2xl font-bold text-[#0b1c2d] md:text-3xl">
                      {feature.stat}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                      {feature.statLabel}
                    </span>
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="mb-3 text-lg font-bold text-[#0b1c2d] md:text-xl">
                  {feature.title}
                  </h3>
                <p className="text-sm leading-relaxed text-[#0b1c2d]/60">
                  {feature.description}
                </p>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00c2a8] transition-all duration-300 group-hover:w-full" />
                
                {/* Corner accent on hover */}
                <div className="absolute right-0 top-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-[#00c2a8] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </div>
            ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-12 flex items-center justify-center border-t border-[#0b1c2d]/10 pt-8 md:mt-16">
          <Link 
            to="/#partners" 
            className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/40 transition-colors hover:text-[#066253]"
          >
            Trusted by institutional partners
            <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
