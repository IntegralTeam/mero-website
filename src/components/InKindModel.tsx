const COMPARISON_DATA = {
  traditional: {
    title: "Traditional Model",
    subtitle: "Borrowing Against Collateral",
    points: [
      { label: "Structure", value: "Requires lending facility, repo agreement, and credit approval." },
      { label: "Cost", value: "Risk-free rate plus lender spread and volatility premium." },
      { label: "Risk", value: "Potential external margin calls if commodity prices decline." },
      { label: "Yield", value: "Net return can be reduced by borrowing and hedging costs." },
      { label: "Complexity", value: "Higher legal and operational complexity for security structures." },
    ],
    highlight: "Higher cost profile",
  },
  mero: {
    title: "Mero Model",
    subtitle: "In-Kind Contribution",
    points: [
      { label: "Structure", value: "Designed to avoid direct borrowing, lending facility, and repo setup." },
      { label: "Cost", value: "Model is intended to improve net economics versus borrowing pathways." },
      { label: "Risk", value: "Over-collateralisation is intended to reduce risk but does not eliminate it." },
      { label: "Custody", value: "Collateral is intended to remain in approved custody facilities." },
      { label: "Model", value: "Operationally inspired by in-kind creation structures used in institutional markets." },
    ],
    highlight: "Target minimum 126% collateralisation",
  },
} as const;

export function InKindModel() {
  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
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
            Intended to reduce financing friction by structuring around
            commodity contributions rather than borrowing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="relative flex flex-col border border-[#0b1c2d]/10 bg-[#fafbfc] p-8 md:p-10">
            <div className="mb-6 h-16">
              <h3 className="mb-1 text-xl font-bold text-[#0b1c2d]/50 md:text-2xl">
                {COMPARISON_DATA.traditional.title}
              </h3>
              <p className="text-sm text-[#0b1c2d]/40">{COMPARISON_DATA.traditional.subtitle}</p>
            </div>

            <ul className="flex-grow space-y-4">
              {COMPARISON_DATA.traditional.points.map((point) => (
                <li key={point.label} className="flex items-start gap-4">
                  <span className="w-20 flex-shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/30">
                    {point.label}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0b1c2d]/60">{point.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 h-6 border-t border-[#0b1c2d]/10 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                {COMPARISON_DATA.traditional.highlight}
              </span>
            </div>
          </div>

          <div className="relative flex flex-col border border-[#066253]/30 bg-[#066253]/[0.02] p-8 md:p-10">
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-[#066253] to-[#00c2a8]" />

            <div className="mb-6 h-16">
              <h3 className="mb-1 text-xl font-bold text-[#0b1c2d] md:text-2xl">
                {COMPARISON_DATA.mero.title}
              </h3>
              <p className="text-sm text-[#066253]">{COMPARISON_DATA.mero.subtitle}</p>
            </div>

            <ul className="flex-grow space-y-4">
              {COMPARISON_DATA.mero.points.map((point) => (
                <li key={point.label} className="flex items-start gap-4">
                  <span className="w-20 flex-shrink-0 pt-0.5 text-xs font-semibold uppercase tracking-wider text-[#066253]">
                    {point.label}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0b1c2d]/80">{point.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 h-6 border-t border-[#066253]/20 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#066253]">
                {COMPARISON_DATA.mero.highlight}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#0b1c2d]/10 pt-8 md:mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm uppercase tracking-wider text-[#0b1c2d]/40">Example Yield</p>
            <p className="text-lg text-[#0b1c2d]/80 md:text-xl">
              A central bank contributing <span className="font-bold text-[#0b1c2d]">$100M of LBMA gold</span> could potentially generate an indicative <span className="font-bold text-[#066253]">$8-12M per year</span> at target blended yields, without moving a single bar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
