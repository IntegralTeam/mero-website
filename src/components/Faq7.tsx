import { useState } from "react";

const FAQS = [
  {
    question: "How is USDM backed?",
    answer:
      "Every USDM token is backed by physical commodity reserves held in institutional vaults. Gold, copper, nickel, and gemstones provide real value and stability. Collateralization exceeds 126%, ensuring capital protection at all times.",
  },
  {
    question: "What yield can banks earn?",
    answer:
      "USDM deployed through regulated yield products generates 5-15% APY. Banks choose partners based on risk and return preferences from leading institutional asset managers.",
  },
  {
    question: "Is USDM compliant?",
    answer:
      "Mero operates on Canton Network, a permissioned blockchain built for regulated financial institutions. Full audit trails, compliance reporting, and regulatory alignment are built into the platform.",
  },
  {
    question: "Can banks redeem USDM anytime?",
    answer:
      "Yes. Banks can redeem USDM for underlying commodity reserves at any time. No lock-in periods. Full transparency and control over capital.",
  },
  {
    question: "Does USDM require FX conversion?",
    answer:
      "No. USDM is USD-denominated and settles directly across borders without foreign exchange conversion. Zero FX friction means faster settlement and lower costs.",
  },
] as const;

export function Faq7() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#fafbfc] py-20 md:py-28 lg:py-32">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />
      
      <div className="container px-[5%]">
        {/* Header */}
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
            Everything you need to know about Mero, USDM, and how the platform works.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl">
          <div className="border-t border-[#0b1c2d]/10">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className="border-b border-[#0b1c2d]/10"
                >
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
                    
                    {/* Toggle icon */}
                    <span className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      <span className="absolute h-0.5 w-3 bg-[#066253] transition-colors group-hover:bg-[#00c2a8]" />
                      <span className={`absolute h-3 w-0.5 bg-[#066253] transition-colors group-hover:bg-[#00c2a8] ${isOpen ? "opacity-0" : "opacity-100"}`} />
                    </span>
                  </button>
                  
                  {/* Answer */}
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

        {/* CTA */}
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
