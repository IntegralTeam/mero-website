const USE_CASES = [
  {
    title: "Illustrative Use Case 01",
    summary:
      "A regional bank explores USDM issuance as a USD-denominated treasury tool with commodity collateral and indicative yield pathways.",
  },
  {
    title: "Illustrative Use Case 02",
    summary:
      "A pan-regional institution models over-collateralised reserve structures to support cross-border settlement design.",
  },
  {
    title: "Illustrative Use Case 03",
    summary:
      "A corporate treasury evaluates in-kind contribution workflows to activate idle commodity inventory under institutional controls.",
  },
] as const;

export function Testimonial6() {
  return (
    <section className="relative overflow-hidden bg-[#0b1c2d] py-20 md:py-28 lg:py-32">
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
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-500/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Illustrative Use Cases
            </span>
            <span className="h-px w-8 bg-emerald-500/40" />
          </div>
          <h2 className="mb-5 text-3xl font-bold leading-[1.15] text-white md:text-4xl lg:text-[2.75rem]">
            Hypothetical scenarios
          </h2>
          <p className="text-white/50 md:text-lg">
            The scenarios below are hypothetical and do not represent actual
            clients or commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {USE_CASES.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative flex flex-col border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04] md:p-10"
            >
              <span className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
                {useCase.title}
              </span>
              <p className="flex-1 text-base leading-relaxed text-white/80 md:text-lg">
                {useCase.summary}
              </p>
              <span className="absolute bottom-4 right-4 text-6xl font-bold text-white/[0.03] md:text-7xl">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
