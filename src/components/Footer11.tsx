import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

type LegalModalKey = "privacy" | "terms" | "cookies";

const modalContent: Record<LegalModalKey, { title: string; body: string[] }> = {
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

const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#footer" },
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
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0b1c2d]/10 to-transparent" />

      <div className="container px-[5%]">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link to="/" className="mb-6 inline-block">
                <img src={logo} alt="Mero" width={110} className="h-auto" />
              </Link>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#0b1c2d]/60">
                Institutional infrastructure enabling commodity-backed USD yield 
                in emerging markets. Built for banks, by banks.
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

            {/* Navigation */}
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

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0b1c2d]/40">
                Legal
              </h4>
              <ul className="space-y-3">
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

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#0b1c2d]/10 py-6 md:flex-row">
          <p className="text-xs text-[#0b1c2d]/40">
            © 2026 Mero. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-wider text-[#0b1c2d]/30">
            Institutional Infrastructure
          </p>
        </div>
      </div>

      {/* Legal Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-5"
          onClick={() => setActiveModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="w-full max-w-xl border border-[#0b1c2d]/10 bg-white p-6 md:p-8"
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
            <div className="space-y-3 text-sm text-[#0b1c2d]/70">
              {modalContent[activeModal].body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
