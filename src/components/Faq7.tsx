import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQS = [
  {
    question: "What is MEROG and how does it work?",
    bullets: [
      "MEROG represents 1 fine troy oz of gold on Sui Network",
      "Gold is held in LBMA-certified vaults with verified encumbrance",
      "Token is digital proof of ownership — transferable on-chain",
      "Also available: MEROC (copper) and MERON (nickel)",
    ],
  },
  {
    question: "How does the lending protocol work?",
    bullets: [
      "Lock warehouse receipts as collateral via smart contract",
      "Borrow USDC at 5% fixed rate, 60% LTV at origination",
      "Terms: 30/60/90/180 days with 48-hour cure period",
      "No flash liquidation — orderly unwind only",
    ],
  },
  {
    question: "What is the 48-hour cure period?",
    bullets: [
      "If LTV exceeds 75%, borrower receives margin notice",
      "48 hours to top up collateral or repay debt",
      "Only then does orderly unwind begin",
      "Prevents flash liquidation — standard for institutional finance",
    ],
  },
  {
    question: "What is the Gold ETF yield overlay?",
    bullets: [
      "Physical gold converted to IAU (iShares Gold Trust)",
      "SpiderRock Advisors (BlackRock subsidiary) manages options strategies",
      "Collar: 1.3–1.6% yield with ~82–88% downside floor",
      "Covered Call: 4–9% yield, no floor — for income-focused institutions",
    ],
  },
  {
    question: "Why GIFT IFSC?",
    bullets: [
      "India's international financial centre regulated by IFSCA",
      "Bullion Exchange Regulations 2025 support tokenized receipts",
      "Access to Indian banks with commodity client bases",
      "Seeking Regulatory Sandbox approval for controlled deployment",
    ],
  },
  {
    question: "How does the white-label bank model work?",
    bullets: [
      "Banks integrate Mero under their own brand at GIFT IFSC",
      "Bank's KYC/AML governs onboarding — Mero provides tech only",
      "Clients access tokenization, lending, and yield marketplace",
      "Bank configures products and earns spread on client activity",
    ],
  },
] as const;

export function Faq7() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const faqAnimations = FAQS.map(() => useScrollAnimation({ threshold: 0.1 }));
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation({ threshold: 0.1 });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#fafbfc] py-20 md:py-28 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div 
          ref={headerRef}
          className={`mx-auto mb-16 max-w-2xl text-center md:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c2a8]">
              FAQ
            </span>
          </div>
          <h2 className="mb-5 font-display text-3xl font-light leading-[1.15] text-[#0b1c2d] md:text-4xl lg:text-[2.75rem]">
            Common questions
          </h2>
          <p className="text-[#0b1c2d]/60 md:text-lg">
            How the platform works, the lending mechanics, Gold ETF overlay, and GIFT IFSC context.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="border-t border-[#0b1c2d]/10">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const faqAnimation = faqAnimations[index];
              return (
                <div 
                  key={faq.question} 
                  ref={faqAnimation.ref}
                  className={`faq-item border-b border-[#0b1c2d]/10 transition-all duration-700 ${faqAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isOpen ? 'faq-item-open' : ''}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:bg-white/50 md:py-8"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className={`text-xs font-semibold transition-colors ${isOpen ? 'text-[#00c2a8]' : 'text-[#00c2a8]/60'}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className={`text-base font-semibold transition-colors md:text-lg ${isOpen ? 'text-[#00c2a8]' : 'text-[#0b1c2d]'}`}>
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-180 border-[#00c2a8] bg-[#00c2a8]" : "border-[#00c2a8]/30 bg-transparent group-hover:border-[#00c2a8]/60"}`}
                    >
                      <svg 
                        className={`h-3 w-3 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#00c2a8]'}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M12 6v6m0 0v6m0-6h6m-6 0H6"}
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="faq-answer-wrapper overflow-hidden"
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="faq-answer-content min-h-0">
                      <div className="border-l-2 border-[#00c2a8]/20 pb-6 pl-8 pr-12 md:pb-8 md:pl-10">
                        <ul className="space-y-3">
                          {faq.bullets.map((bullet, i) => (
                            <li 
                              key={i} 
                              className="flex items-start gap-3 text-sm text-[#0b1c2d]/60 md:text-base"
                              style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateX(0)' : 'translateX(-8px)',
                                transition: `all 0.4s ease-out ${i * 50}ms`,
                              }}
                            >
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00c2a8]" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div 
          ref={contactRef}
          className={`mx-auto mt-16 max-w-md text-center md:mt-20 transition-all duration-700 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00c2a8]/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c2a8]/60">
              Contact
            </span>
            <span className="h-px w-8 bg-[#00c2a8]/30" />
          </div>
          <h4 className="mb-3 text-xl font-bold text-[#0b1c2d] md:text-2xl">
            Still have questions?
          </h4>
          <p className="mb-6 text-[#0b1c2d]/60">
            Reach out to our institutional team.
          </p>
          <a
            href="mailto:info@mero.tech"
            className="inline-flex items-center gap-2 border border-[#0b1c2d]/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d] transition-all hover:border-[#00c2a8] hover:text-[#00c2a8]"
          >
            Contact Us
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
