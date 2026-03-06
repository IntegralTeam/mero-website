import { useState } from "react";

const YIELD_CAVEAT =
  "All yields shown are indicative targets based on intended allocations and current market conditions. The platform and yield products are under development. Actual returns will depend on product availability, allocation decisions, and market environment. Yields may be materially lower than indicated.";

const FAQS = [
  {
    question: "How is USDM intended to be backed?",
    answer:
      "USDM is intended to be backed by physical commodity reserves held with institutional custody providers. Over-collateralisation is designed to support capital preservation through a target minimum 126% collateralisation ratio. Over-collateralisation is intended to reduce risk but does not eliminate it. Capital is at risk.",
  },
  {
    question: "What yield can institutions target?",
    answer:
      `Mero targets indicative yield ranges based on intended allocations to institutional yield products and market conditions. ${YIELD_CAVEAT}`,
  },
  {
    question: "What is USDM's intended regulatory framework?",
    answer:
      "USDM is intended to be a commodity-backed, USD-denominated digital asset issued through a dedicated special-purpose vehicle. Mero intends to pursue an ADGM FSRA licence as its primary regulatory path, with a BVI issuance entity serving as an interim vehicle during the licensing process. The regulatory classification of USDM may vary by jurisdiction. The Mero Genesis Fund LP is intended to be established as a Jersey Private Fund under the JFSC Private Fund regime. All regulatory applications and structures are in development. Prospective participants should seek independent legal advice.",
  },
  {
    question: "What is USDM's legal classification?",
    answer:
      "USDM is intended to be a commodity-backed, USD-denominated digital asset issued by a dedicated special-purpose vehicle. Its regulatory classification may vary by jurisdiction and could include classification as a virtual asset, fiat-referenced token, asset-referenced token, e-money token, or security depending on the applicable legal framework. Mero is in the process of engaging with regulators to determine the appropriate classification. USDM will not be offered, sold, or made available in any jurisdiction where such activity would be prohibited. Mero does not provide legal, tax, or regulatory advice. Prospective participants should consult qualified legal counsel in their own jurisdiction.",
  },
  {
    question: "How will settlement and redemption work?",
    answer:
      "Target 24-48 hour USDM minting settlement, subject to collateral verification and custodian processing (settlement times are indicative and not yet operational). Redemption will be subject to applicable yield product terms, lock-up periods, and collateral conditions. Certain yield products are expected to have lock-ups ranging from monthly to 22 months.",
  },
  {
    question: "Does USDM require FX conversion?",
    answer:
      "USDM is designed to be USD-denominated throughout and intended to require no currency conversion at the point of minting or redemption. Standard platform and minting fees will apply. Fee schedule to be published prior to launch.",
  },
] as const;

export function Faq7() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#fafbfc] py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#066253]">
              FAQ
            </span>
          </div>
          <h2 className="mb-5 text-3xl font-bold leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            Common questions
          </h2>
          <p className="text-[#0b1c2d]/60 md:text-lg">
            Information on intended product structure, risk, and launch model.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-[#0b1c2d]/10">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="border-b border-[#0b1c2d]/10">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:bg-white/50 md:py-8"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className="text-xs font-semibold text-[#066253]/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold text-[#0b1c2d] md:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    <span className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      <span className="absolute h-0.5 w-3 bg-[#066253] transition-colors group-hover:bg-[#00c2a8]" />
                      <span className={`absolute h-3 w-0.5 bg-[#066253] transition-colors group-hover:bg-[#00c2a8] ${isOpen ? "opacity-0" : "opacity-100"}`} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-6 pl-8 pr-12 md:pb-8 md:pl-10">
                        <p className="text-sm leading-relaxed text-[#0b1c2d]/60 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-md text-center md:mt-20">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#066253]/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#066253]/60">
              Contact
            </span>
            <span className="h-px w-8 bg-[#066253]/30" />
          </div>
          <h4 className="mb-3 text-xl font-bold text-[#0b1c2d] md:text-2xl">
            Still have questions?
          </h4>
          <p className="mb-6 text-[#0b1c2d]/60">
            Reach out to our institutional team.
          </p>
          <a
            href="mailto:info@mero.tech"
            className="inline-flex items-center gap-2 border border-[#0b1c2d]/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d] transition-all hover:border-[#066253] hover:text-[#066253]"
          >
            Contact Us
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
