import logo from "../assets/logo-light.svg";
import { COMPANY, CONTACT_EMAIL, CONTACT_HREF, NAV_LINKS } from "../lib/site";

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy notice" },
  { href: "/cookies", label: "Cookie notice" },
] as const;

export function Footer() {
  return (
    <footer id="footer" className="relative bg-[#0b1c2d] text-white">
      <div className="container px-[5%]">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/#top" className="mb-6 inline-block">
              <img src={logo} alt="Mero Technologies" width={110} height={29} className="h-auto" />
            </a>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">Contact</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm font-medium text-white transition-colors hover:text-[#00c2a8]"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-2 text-sm text-white/55">Enquiries from institutions only</p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">Navigation</h4>
            <ul className="space-y-3">
              {[...NAV_LINKS, { label: "Contact", href: CONTACT_HREF }].map((link) => (
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
              {LEGAL_LINKS.map((link) => (
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
    </footer>
  );
}
