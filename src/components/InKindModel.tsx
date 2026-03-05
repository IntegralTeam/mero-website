const COMPARISON_DATA = {
  traditional: {
    title: "Traditional Model",
    subtitle: "Borrowing Against Collateral",
    points: [
      { label: "Structure", value: "Requires lending facility, repo agreement, credit committee" },
      { label: "Cost", value: "Risk-free rate + lender spread + volatility premium" },
      { label: "Risk", value: "Margin calls from lender if commodity prices drop" },
      { label: "Yield", value: "Often tiny or negative after borrowing costs" },
      { label: "Complexity", value: "Complex legal structuring of security interest" },
    ],
    highlight: "High cost, high risk",
  },
  mero: {
    title: "Mero Model",
    subtitle: "In-Kind Contribution",
    points: [
      { label: "Structure", value: "No borrowing. No lending facility. No repo." },
      { label: "Cost", value: "Low cost of capital — more basis points are net profit" },
      { label: "Risk", value: "No lender margin calls — tiered OC framework managed internally" },
      { label: "Custody", value: "Commodity never moves — stays in institution's own vault" },
      { label: "Model", value: "Structurally analogous to BlackRock IBIT in-kind creation" },
    ],
    highlight: "126% over-collateralized",
  },
} as const;

export function InKindModel() {
  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-32">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#066253]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#066253]">
              Structural Advantage
            </span>
            <span className="h-px w-8 bg-[#066253]/40" />
          </div>
          <h2 className="mb-5 text-3xl font-bold leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            The in-kind contribution model
          </h2>
          <p className="text-[#0b1c2d]/60 md:text-lg">
            The single most important structural advantage. No borrowing. 
            No lending facility. No interest expense.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Traditional Model */}
          <div className="relative flex flex-col border border-[#0b1c2d]/10 bg-[#fafbfc] p-8 md:p-10">
            {/* Header - fixed height */}
            <div className="mb-6 h-16">
              <h3 className="mb-1 text-xl font-bold text-[#0b1c2d]/50 md:text-2xl">
                {COMPARISON_DATA.traditional.title}
              </h3>
              <p className="text-sm text-[#0b1c2d]/40">
                {COMPARISON_DATA.traditional.subtitle}
              </p>
            </div>

            {/* Points - flex-grow to fill space */}
            <ul className="flex-grow space-y-4">
              {COMPARISON_DATA.traditional.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/30 w-20">
                    {point.label}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0b1c2d]/60">
                    {point.value}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer - fixed height */}
            <div className="mt-8 h-6 pt-6 border-t border-[#0b1c2d]/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                {COMPARISON_DATA.traditional.highlight}
              </span>
            </div>
          </div>

          {/* Mero Model */}
          <div className="relative flex flex-col border border-[#066253]/30 bg-[#066253]/[0.02] p-8 md:p-10">
            {/* Highlight accent */}
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-[#066253] to-[#00c2a8]" />

            {/* Header - fixed height */}
            <div className="mb-6 h-16">
              <h3 className="mb-1 text-xl font-bold text-[#0b1c2d] md:text-2xl">
                {COMPARISON_DATA.mero.title}
              </h3>
              <p className="text-sm text-[#066253]">
                {COMPARISON_DATA.mero.subtitle}
              </p>
            </div>

            {/* Points - flex-grow to fill space */}
            <ul className="flex-grow space-y-4">
              {COMPARISON_DATA.mero.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-[#066253] w-20">
                    {point.label}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0b1c2d]/80">
                    {point.value}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer - fixed height */}
            <div className="mt-8 h-6 pt-6 border-t border-[#066253]/20">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#066253]">
                {COMPARISON_DATA.mero.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom example */}
        <div className="mt-12 border-t border-[#0b1c2d]/10 pt-8 md:mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm text-[#0b1c2d]/40 uppercase tracking-wider">
              Example Yield
            </p>
            <p className="text-lg text-[#0b1c2d]/80 md:text-xl">
              A central bank contributing{" "}
              <span className="font-bold text-[#0b1c2d]">$100M of LBMA gold</span>{" "}
              earns{" "}
              <span className="font-bold text-[#066253]">$8–12M per year</span>{" "}
              without moving a single bar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
