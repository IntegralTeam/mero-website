const COMPARISON_DATA = {
  defi: {
    title: "DeFi Protocols",
    subtitle: "Algorithmic Mechanics",
    points: [
      { label: "Liquidation", value: "Instant automated liquidation triggered by on-chain price oracle. No advance notice." },
      { label: "Rate", value: "Variable / floating. Can change with utilisation rate. No fixed terms at origination." },
      { label: "Structure", value: "Open-ended. No fixed maturity. Positions can be closed at any time by the protocol." },
      { label: "Collateral", value: "Crypto assets with on-chain price feeds. Highly volatile. Susceptible to oracle manipulation." },
      { label: "Matching", value: "Fully algorithmic. No counterparty vetting, KYC, or institutional screening." },
    ],
    highlight: "Not designed for institutional counterparties",
  },
  mero: {
    title: "Mero Lending",
    subtitle: "Institutional Margin Mechanics",
    points: [
      { label: "Liquidation", value: "75% LTV maintenance threshold triggers a margin notice. Borrower has 48 hours to top up collateral or repay." },
      { label: "Rate", value: "5% per annum, fixed at origination. 4% paid to USDC lenders. 1% protocol spread." },
      { label: "Structure", value: "Fixed-term: 30 / 60 / 90 / 180 days. Matched via auction or RFQ panel at origination." },
      { label: "Collateral", value: "Physical warehouse receipt tokens (MEROG, MEROC, MERON). Custodian-verified, vault-held commodity." },
      { label: "Matching", value: "Curated lender panel. Auction / RFQ mechanism. All counterparties KYC/AML screened." },
    ],
    highlight: "48-hour cure window — no flash liquidation",
  },
} as const;

export function InKindModel() {
  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              Lending Protocol
            </span>
            <span className="h-px w-8 bg-[#00c2a8]/40" />
          </div>
          <h2 className="mb-5 font-display text-3xl font-light leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            Institutional margin mechanics
          </h2>
          <p className="text-[#0b1c2d]/60 md:text-lg">
            Repo-style term lending against warehouse receipt tokens.
            The economics mirror traditional commodity repo — settlement and collateral management are automated and auditable.
          </p>
        </div>

        {/* Key stat highlight */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="grid grid-cols-2 gap-px bg-[#0b1c2d]/10 md:grid-cols-4">
            {[
              { stat: "60%", label: "LTV at Origination" },
              { stat: "75%", label: "Maintenance Threshold" },
              { stat: "48h", label: "Margin Cure Window" },
              { stat: "5%", label: "Fixed Borrow Rate" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white px-6 py-5 text-center">
                <div className="text-2xl font-bold text-[#0b1c2d]">{stat}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* DeFi column */}
          <div className="relative flex flex-col border border-[#0b1c2d]/10 bg-[#fafbfc] p-8 md:p-10">
            <div className="mb-6">
              <h3 className="mb-1 text-xl font-bold text-[#0b1c2d]/40 md:text-2xl">
                {COMPARISON_DATA.defi.title}
              </h3>
              <p className="text-sm text-[#0b1c2d]/30">{COMPARISON_DATA.defi.subtitle}</p>
            </div>

            <ul className="flex-grow space-y-5">
              {COMPARISON_DATA.defi.points.map((point) => (
                <li key={point.label} className="flex items-start gap-4">
                  <span className="w-20 flex-shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/25">
                    {point.label}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0b1c2d]/50">{point.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[#0b1c2d]/10 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/30">
                {COMPARISON_DATA.defi.highlight}
              </span>
            </div>
          </div>

          {/* Mero column */}
          <div className="relative flex flex-col border border-[#00c2a8]/30 bg-[#00c2a8]/[0.02] p-8 md:p-10">
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-[#00c2a8] to-[#00c2a8]" />

            <div className="mb-6">
              <h3 className="mb-1 text-xl font-bold text-[#0b1c2d] md:text-2xl">
                {COMPARISON_DATA.mero.title}
              </h3>
              <p className="text-sm text-[#00c2a8]">{COMPARISON_DATA.mero.subtitle}</p>
            </div>

            <ul className="flex-grow space-y-5">
              {COMPARISON_DATA.mero.points.map((point) => (
                <li key={point.label} className="flex items-start gap-4">
                  <span className="w-20 flex-shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-[#00c2a8]">
                    {point.label}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0b1c2d]/75">{point.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[#00c2a8]/20 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00c2a8]">
                {COMPARISON_DATA.mero.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Illustrative example */}
        <div className="mt-12 border-t border-[#0b1c2d]/10 pt-8 md:mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs uppercase tracking-wider text-[#0b1c2d]/35">Illustrative Example</p>
            <p className="text-lg text-[#0b1c2d]/75 md:text-xl">
              Lock{" "}
              <span className="font-bold text-[#0b1c2d]">$10M of MEROG</span> as collateral
              {" "}→ borrow{" "}
              <span className="font-bold text-[#00c2a8]">$6M USDC at 5% fixed</span>
              {" "}on a 90-day term. If LTV rises above 75%, you have 48 hours to top up — no automatic liquidation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
