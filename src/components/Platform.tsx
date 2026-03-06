import { Link } from "react-router-dom";
import { MaterialIcon } from "./MaterialIcon";

const PLATFORM_FEATURES = [
  {
    icon: "trending_up",
    iconColor: "text-emerald-600",
    title: "Target institutional yield network",
    description:
      "Capital is intended to be deployed into regulated products including BlackRock BUIDL, Franklin Templeton BENJI, Apollo ACRED (subject to onboarding).",
    stat: "5-15%",
    statLabel: "Target APY",
  },
  {
    icon: "account_balance",
    iconColor: "text-[#0b1c2d]",
    title: "Over-collateralised design",
    description:
      "Target minimum 126% collateralisation ratio. Over-collateralisation is intended to reduce risk but does not eliminate it. Capital is at risk.",
    stat: "126%",
    statLabel: "Target Min.",
  },
  {
    icon: "security",
    iconColor: "text-emerald-600",
    title: "Building on Canton Network",
    description:
      "Designed with built-in KYC/AML screening, transaction monitoring, and configurable compliance controls.",
    stat: "Plan",
    statLabel: "Infra",
  },
  {
    icon: "sync_alt",
    iconColor: "text-[#0b1c2d]",
    title: "USD-denominated flow",
    description:
      "Designed to eliminate direct FX conversion at minting and redemption. Standard platform and minting fees will apply.",
    stat: "USD",
    statLabel: "Denominated",
  },
] as const;

export function Platform() {
  return (
    <section id="platform" className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div className="mx-auto mb-16 max-w-3xl md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-500/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#066253]">
              Platform
            </span>
            <span className="h-px w-8 bg-emerald-500/40" />
          </div>
          <h2 className="mb-5 text-center text-3xl font-bold leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            Institutional infrastructure in development
          </h2>
          <p className="mx-auto max-w-2xl text-center text-[#0b1c2d]/60 md:text-lg">
            Mero combines intended commodity-backed USD digital asset rails with
            institutional yield workflows. Features and integrations are planned
            and subject to finalisation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[#0b1c2d]/10 md:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white p-8 transition-colors duration-300 hover:bg-[#fafbfc] md:p-10"
            >
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

              <h3 className="mb-3 text-lg font-bold text-[#0b1c2d] md:text-xl">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-[#0b1c2d]/60">{feature.description}</p>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00c2a8] transition-all duration-300 group-hover:w-full" />
              <div className="absolute right-0 top-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-[#00c2a8] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center border-t border-[#0b1c2d]/10 pt-8 md:mt-16">
          <Link
            to="/#partners"
            className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/40 transition-colors hover:text-[#066253]"
          >
            View target institutional network
            <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
