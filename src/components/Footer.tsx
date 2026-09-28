import { useEffect, useState } from "react";
import logo from "../assets/logo-light.svg";
import { COMPANY, CONTACT_EMAIL, NAV_LINKS } from "../lib/site";

type LegalNoticeKey = "privacy" | "cookies";

const LEGAL_NOTICES: Record<LegalNoticeKey, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy notice",
    body: [
      "Mero only collects information needed to operate our platform, provide support, and meet compliance requirements.",
      "We process account and operational data under institutional security standards and never sell your personal data.",
      `For privacy requests, contact ${CONTACT_EMAIL}.`,
    ],
  },
  cookies: {
    title: "Cookie notice",
    body: [
      "This website does not set analytics, advertising or other non-essential cookies.",
      "If that changes, we will ask for your consent before any non-essential cookie is set.",
    ],
  },
};

export function Footer() {
  const [activeNotice, setActiveNotice] = useState<LegalNoticeKey | null>(null);

  useEffect(() => {
    if (!activeNotice) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveNotice(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeNotice]);

  return (
    <footer id="footer" className="relative bg-[#0b1c2d] text-white">
      <div className="container px-[5%]">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="mb-6 inline-block">
              <img src={logo} alt="Mero Technologies" width={110} height={29} className="h-auto" />
            </a>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">Contact</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm font-medium text-white transition-colors hover:text-[#00c2a8]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">Navigation</h4>
            <ul className="space-y-3">
              {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-[#00c2a8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">Legal</h4>
            <ul className="space-y-3">
              {(Object.keys(LEGAL_NOTICES) as LegalNoticeKey[]).map((key) => (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => setActiveNotice(key)}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-[#00c2a8]"
                  >
                    {LEGAL_NOTICES[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3 border-t border-white/10 py-8 text-xs leading-relaxed text-white/55">
          <p>
            {COMPANY.legalName}, registered in England and Wales, company number {COMPANY.number}.
            Registered office: {COMPANY.registeredOffice}.
          </p>
          <p>
            Mero is a technology provider. It does not lend, hold client assets or offer investments,
            and is not authorised by the Financial Conduct Authority. Nothing on this site is an offer
            or invitation.
          </p>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-xs text-white/40">
            © 2026 {COMPANY.legalName}. All rights reserved.
          </p>
        </div>
      </div>

      {activeNotice && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-5"
          onClick={() => setActiveNotice(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-notice-title"
            className="w-full max-w-2xl border border-[#0b1c2d]/10 bg-white p-6 text-[#0b1c2d] md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h3 id="legal-notice-title" className="text-xl font-bold">
                {LEGAL_NOTICES[activeNotice].title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                className="text-sm text-[#0b1c2d]/60 transition-colors hover:text-[#0b1c2d]"
              >
                Close
              </button>
            </div>
            <div className="space-y-3 text-sm text-[#0b1c2d]/70">
              {LEGAL_NOTICES[activeNotice].body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
