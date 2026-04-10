import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import logo from "../assets/logo.svg";

type LegalModalKey = "risk" | "privacy" | "terms" | "cookies";

const modalContent: Record<LegalModalKey, { title: string; body: string[]; isStructured?: boolean }> = {
  risk: {
    title: "Risk Disclosure",
    isStructured: true,
    body: [
      "Last updated: April 2026",
      "Mero's platform, warehouse receipt assets, and the Mero Fund are under development. Engaging with these products, once launched, will involve risks. Prospective participants should carefully consider the following. This is not an exhaustive list.",
      "Commodity Price Risk: Warehouse receipt assets (MEROG, MEROC, MERON) represent ownership of physical commodities. The market value of these commodities fluctuates and may decline materially. A sustained decline in commodity prices may affect the loan-to-value ratio of lending positions and could trigger margin notices requiring collateral top-up or repayment within 48 hours.",
      "Yield and Return Risk: All yield figures on this site are indicative targets, not guarantees. Actual returns depend on underlying product performance, prevailing market conditions, product availability, and allocation decisions. Yields may be materially lower than indicated, and capital may be lost.",
      "Technology and Smart Contract Risk: The Mero platform operates on Sui Network. Smart contracts and digital asset systems may contain vulnerabilities, bugs, or unforeseen interactions that could result in loss of funds or disruption to service. No technology system can guarantee uninterrupted or error-free operation.",
      "Counterparty Risk: The platform relies on third-party service providers including digital asset custodians, commodity vault operators, yield product managers, authorised participants, and fund administrators. The insolvency, default, or operational failure of any counterparty could result in delays, losses, or inability to access funds or collateral.",
      "Lending Protocol Risk: The repo-style lending protocol involves locking warehouse receipt assets as collateral and borrowing USDC. If the loan-to-value ratio exceeds the maintenance threshold (75% LTV), a margin notice is issued and the borrower has 48 hours to top up or repay. Failure to act within the cure period will result in an orderly unwind. The value of collateral may fall below the outstanding loan amount in extreme market conditions.",
      "USDC and Stablecoin Risk: The lending protocol settles in USDC, issued by Circle. USDC is not issued by Mero. Risks associated with USDC include de-pegging, regulatory action against Circle, or loss of USD reserves. Mero does not guarantee the value or stability of USDC.",
      "Regulatory and Legal Risk: Warehouse receipt assets are a novel asset class. Their regulatory classification may vary by jurisdiction. Mero is seeking a Limited Use Authorisation within the IFSCA Regulatory Sandbox at GIFT IFSC. There is no guarantee that sandbox approval will be granted on the anticipated timeline or at all. Changes in law or regulatory interpretation could restrict or prohibit aspects of the platform's operations.",
      "Custody Risk: Physical commodity collateral is held in third-party vault facilities (LBMA-certified or equivalent). Mero does not take physical possession of commodities. The loss, theft, damage, or misappropriation of collateral by a custodian, however unlikely, could affect the ability to release encumbered receipts.",
      "Gold ETF Overlay Risk: The Gold ETF yield overlay involves options strategies on Gold ETF positions. Options strategies carry risk including premium loss, counterparty risk with the options counterparty, and assignment risk if strike levels are breached. Downside controls may reduce, but do not eliminate, downside exposure.",
      "Development Risk: The Mero platform, warehouse receipt asset framework, fund structures, and institutional partnerships described on this site are under development. There is no guarantee that any of these will launch on the timelines described, in the form described, or at all.",
      "No Guarantee of Capital Preservation: All risk mitigation measures described are intended to reduce risk, not eliminate it. Participants should be prepared for the possibility of partial or total loss of capital.",
      "General: This Risk Disclosure does not purport to identify all risks. Prospective participants should conduct their own due diligence and seek independent legal, financial, and tax advice before engaging with Mero or subscribing to the Mero Fund.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    body: [
      "Mero only collects information needed to operate our platform, provide support, and meet compliance requirements.",
      "We process account and operational data under institutional security standards and never sell your personal data.",
      "For privacy requests, contact info@mero.tech.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "By using Mero services, your institution agrees to our platform usage, compliance, and security requirements.",
      "Access to products may depend on jurisdiction, onboarding, and risk approval.",
      "Mero may update these terms as regulations evolve. Continued use indicates acceptance of updated terms.",
    ],
  },
  cookies: {
    title: "Cookie Settings",
    body: [
      "Mero uses essential cookies to keep the website functional and secure.",
      "Analytics cookies help us improve product quality and user experience.",
      "You can disable non-essential cookies in your browser settings at any time.",
    ],
  },
};

const IMPORTANT_NOTICE =
  "Important Notice. This website is directed at professional and accredited investors only and does not constitute an offer, solicitation, or investment advice in any jurisdiction. Mero provides technology infrastructure for commodity-backed digital assets and institutional access — it is not an investment manager and does not guarantee returns. All yield figures and performance data are indicative only, based on historical market conditions, and are not guaranteed. Actual returns may vary materially or result in loss of capital. Past performance does not guarantee future results. Mero is seeking a Limited Use Authorisation within the IFSCA Regulatory Sandbox at GIFT IFSC; sandbox approval has not yet been granted. The Mero Fund is intended to be a Jersey Private Fund administered by a JFSC-regulated Designated Service Provider, available exclusively to professional investors. Mero Technologies Ltd is registered in England and Wales. Services and products are under development and may not be available in all jurisdictions. Prospective participants should seek independent legal, financial, and tax advice before engaging. Roadmap timelines are indicative and are not commitments.";

const NAV_LINKS = [
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Roadmap", href: "/#yield" },
  { label: "Contact", href: "/#footer" },
] as const;

export function Footer11() {
  const [activeModal, setActiveModal] = useState<LegalModalKey | null>(null);
  const { ref: footerContentRef, isVisible: footerContentVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (!activeModal) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeModal]);

  return (
    <footer id="footer" className="relative bg-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        <div className="border-b border-[#0b1c2d]/10 py-6">
          <p className="text-xs leading-relaxed text-[#0b1c2d]/55">{IMPORTANT_NOTICE}</p>
        </div>

        <div 
          ref={footerContentRef}
          className={`py-16 md:py-20 transition-all duration-700 ${footerContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link to="/" className="mb-6 inline-block">
                <img src={logo} alt="Mero" width={110} className="h-auto" />
              </Link>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#0b1c2d]/60">
                Commodity-backed digital asset infrastructure. Warehouse receipt assets for
                physical commodities at GIFT IFSC, with repo-style lending and
                curated institutional deployment strategies.
              </p>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                  Contact
                </p>
                <a
                  href="mailto:info@mero.tech"
                  className="text-sm font-medium text-[#0b1c2d] transition-colors hover:text-[#00c2a8]"
                >
                  info@mero.tech
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                Navigation
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#00c2a8]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("risk")}
                    className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#00c2a8]"
                  >
                    Risk Disclosure
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("privacy")}
                    className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#00c2a8]"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("terms")}
                    className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#00c2a8]"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("cookies")}
                    className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#00c2a8]"
                  >
                    Cookie Settings
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#0b1c2d]/10 py-6 md:flex-row">
          <p className="text-xs text-[#0b1c2d]/40">© 2026 Mero. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-wider text-[#0b1c2d]/30">
            Professional Investors Only
          </p>
        </div>
      </div>

      {activeModal && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-5"
          onClick={() => setActiveModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="w-full max-w-3xl border border-[#0b1c2d]/10 bg-white p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h3 id="legal-modal-title" className="text-xl font-bold text-[#0b1c2d]">
                {modalContent[activeModal].title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-sm text-[#0b1c2d]/60 transition-colors hover:text-[#0b1c2d]"
              >
                Close
              </button>
            </div>
            <div className="max-h-[65vh] space-y-3 overflow-y-scroll pr-2 text-sm text-[#0b1c2d]/70">
              {modalContent[activeModal].body.map((paragraph, index) => (
                <p
                  key={`${activeModal}-${index}`}
                  className={activeModal === "risk" && index === 0 ? "text-xs uppercase tracking-wider text-[#0b1c2d]/50" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
