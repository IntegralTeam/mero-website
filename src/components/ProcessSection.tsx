const PROCESS_STEPS = [
  {
    number: "01",
    label: "ONBOARD",
    title: "Complete onboarding",
    description:
      "Banks integrate with Mero's permissioned network and set up custody and reserve workflows. The platform is designed with built-in KYC/AML screening and configurable compliance controls.",
  },
  {
    number: "02",
    label: "COLLATERAL",
    title: "Deposit collateral",
    description:
      "Gold, copper, nickel, or gemstones are intended to be held with institutional custody providers. Target minimum collateralisation ratio: 126%.",
  },
  {
    number: "03",
    label: "DEPLOY",
    title: "Mint and deploy",
    description:
      "USDM minting and deployment are intended to route capital into institutional yield products with an indicative target APY range of 5-15%, subject to market conditions and product access.",
  },
] as const;

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#066253]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#066253]">
              Process
            </span>
            <span className="h-px w-8 bg-[#066253]" />
          </div>
          <h2 className="mb-5 text-3xl font-bold leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            How Mero is intended to work for banks
          </h2>
          <p className="text-[#0b1c2d]/60 md:text-lg">
            Three steps from onboarding to target yield deployment. Product
            workflows and timelines remain under development.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-0">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="group relative border-b border-[#0b1c2d]/10 py-10 first:border-t md:py-12"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8">
                  <div className="col-span-2 md:col-span-1">
                    <div className="flex h-10 w-10 items-center justify-center bg-gradient-to-br from-[#066253] to-[#00c2a8] md:h-12 md:w-12">
                      <span className="text-sm font-bold text-white md:text-base">{step.number}</span>
                    </div>
                  </div>

                  <div className="col-span-10 md:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#066253]">
                      {step.label}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-9 md:pl-4">
                    <h3 className="mb-2 bg-gradient-to-r from-[#0b1c2d] to-[#066253] bg-clip-text text-lg font-bold text-transparent md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#0b1c2d]/60 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#066253] to-[#00c2a8] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-10 md:mt-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0b1c2d] md:text-3xl">24-48h</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#0b1c2d]/50">Target Settlement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0b1c2d] md:text-3xl">126%</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#0b1c2d]/50">Target Min. Collateral</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0b1c2d] md:text-3xl">5-15%</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#0b1c2d]/50">Indicative Target APY</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0b1c2d] md:text-3xl">USD</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#0b1c2d]/50">Denominated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
