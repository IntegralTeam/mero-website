import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

type LegalModalKey = "risk" | "privacy" | "terms" | "cookies";

const modalContent: Record<LegalModalKey, { title: string; body: string[]; isStructured?: boolean }> = {
  risk: {
    title: "Risk Disclosure",
    isStructured: true,
    body: [
      "Last updated: March 6, 2026",
      "Mero's platform, USDM, and the Mero Genesis Fund LP are under development. Engaging with these products, once launched, will involve risks. Prospective participants should carefully consider the following. This is not an exhaustive list.",
      "Commodity Price Risk: USDM is intended to be backed by a basket of physical commodities including gold, copper, nickel, and precious stones. The market value of these commodities fluctuates and may decline. A sustained decline in commodity prices could reduce the collateralisation ratio below the target minimum, triggering protective mechanisms including top-up calls and, in extreme scenarios, partial USDM burns. Over-collateralisation is designed to provide a buffer but does not eliminate the risk of loss.",
      "Yield and Return Risk: All yield figures on this site are indicative targets, not guarantees. Actual returns will depend on the performance of underlying yield products (which may include products from managers such as BlackRock, Franklin Templeton, Apollo, and delta-neutral strategy providers), prevailing market conditions, product availability, and allocation decisions made by the institution or its appointed investment manager. Yields may be materially lower than indicated, and capital may be lost.",
      "Technology and Smart Contract Risk: The Mero platform is intended to operate on blockchain infrastructure, including the Canton Network. Smart contracts and digital asset systems may contain vulnerabilities, bugs, or unforeseen interactions that could result in loss of funds or disruption to service. While the platform is being designed with institutional-grade security practices, no technology system can guarantee uninterrupted or error-free operation.",
      "Counterparty Risk: The platform will rely on third-party service providers including digital asset custodians, commodity custodians, yield product managers, and fund administrators. The insolvency, default, or operational failure of any counterparty could result in delays, losses, or inability to access funds or collateral. Counterparty relationships are being established and are subject to finalisation.",
      "Liquidity Risk: USDM is not expected to trade on a secondary market at launch. Redemption of USDM will be subject to the terms of the underlying yield products, some of which may have lock-up periods ranging from monthly to 22 months. There is no assurance that USDM will be redeemable or convertible to USD on demand. Certain yield product positions may need to be unwound before redemption proceeds become available.",
      "Regulatory and Legal Risk: The regulatory classification of USDM may vary by jurisdiction. It could be classified as a virtual asset, fiat-referenced token, asset-referenced token, e-money token, or security depending on the applicable regulatory framework. Changes in law, regulation, or regulatory interpretation could restrict or prohibit aspects of the platform's operations, require additional licensing, or affect the value or usability of USDM. Mero intends to pursue ADGM FSRA licensing; there is no guarantee that such licensing will be obtained on the anticipated timeline or at all.",
      "Collateral Custody Risk: Physical commodity collateral is intended to be held in third-party custody facilities (bank vaults, Brinks, ANTAM, or equivalent certified depositories). Mero will not take physical possession of collateral. The loss, theft, damage, or misappropriation of collateral by a custodian, however unlikely, could impair the backing of USDM.",
      "Gemstone Valuation Risk: A portion of the intended commodity basket may include precious stones (emeralds, rubies, sapphires, diamonds). Unlike exchange-traded metals, gemstones are illiquid, valued by independent appraisal rather than live market pricing, and subject to wider valuation uncertainty. Haircuts of 15-30% are intended to be applied to gemstone valuations for collateral purposes, but actual realisable values in a distressed scenario could be lower.",
      "Development Risk: The Mero platform, USDM issuance framework, fund structures, and institutional partnerships described on this site are under development. There is no guarantee that any of these will launch on the timelines described, in the form described, or at all. Product features, fee structures, yield products, partner integrations, and regulatory positioning are all subject to change.",
      "No Guarantee of Capital Preservation: Over-collateralisation and diversified commodity backing are intended risk mitigation measures, not guarantees. Participants should be prepared for the possibility of partial or total loss of capital.",
      "General: This Risk Disclosure does not purport to identify all risks. Prospective participants should conduct their own due diligence and seek independent legal, financial, and tax advice before engaging with Mero or subscribing to the Mero Genesis Fund LP.",
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
  "Important Notice This website and its contents are directed at professional and accredited investors only and do not constitute an offer, solicitation, or recommendation to any person in any jurisdiction where such activity would be unlawful. The Mero Genesis Fund LP is intended to be established as a Jersey Private Fund, to be administered by a Jersey Financial Services Commission-regulated Designated Service Provider, and will be available exclusively to professional investors as defined under applicable securities laws. Nothing on this site constitutes investment, financial, legal, or tax advice. All yield figures are indicative targets, not guarantees. Capital is at risk. Past performance does not guarantee future results. Mero Technologies Ltd is registered in England and Wales. Mero's services and products are under development and may not be available or authorised in all jurisdictions. Prospective participants should seek independent professional advice before engaging with the platform. Any roadmap timelines are indicative only and are not commitments.";

const NAV_LINKS = [
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#footer" },
] as const;

export function Footer11() {
  const [activeModal, setActiveModal] = useState<LegalModalKey | null>(null);

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

        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link to="/" className="mb-6 inline-block">
                <img src={logo} alt="Mero" width={110} className="h-auto" />
              </Link>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#0b1c2d]/60">
                Institutional infrastructure intended to support commodity-backed
                USD-denominated digital asset workflows and target yield
                strategies in emerging markets.
              </p>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                  Contact
                </p>
                <a
                  href="mailto:info@mero.tech"
                  className="text-sm font-medium text-[#0b1c2d] transition-colors hover:text-[#066253]"
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
                      className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#066253]"
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
                    className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#066253]"
                  >
                    Risk Disclosure
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("privacy")}
                    className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#066253]"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("terms")}
                    className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#066253]"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("cookies")}
                    className="text-sm font-medium text-[#0b1c2d]/80 transition-colors hover:text-[#066253]"
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
