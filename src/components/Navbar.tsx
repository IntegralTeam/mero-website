import { useEffect, useState } from "react";
import logo from "../assets/logo-light.svg";
import { CONTACT_HREF, NAV_LINKS } from "../lib/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[999] w-full px-[5%] transition-colors duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-[#0b1c2d]/95 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-16 items-center justify-between md:min-h-18">
        <a href="/#top" className="flex items-center" onClick={closeMenu}>
          <img src={logo} alt="Mero Technologies" width={110} height={29} className="h-auto" />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-6 text-xs font-semibold uppercase tracking-[0.2em] text-white opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              {link.label}
              <span className="absolute bottom-4 left-0 h-px w-0 bg-[#00c2a8] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={CONTACT_HREF}
            className="inline-flex items-center justify-center border border-[#00c2a8]/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00c2a8] transition-all duration-300 hover:border-[#00c2a8] hover:bg-[#00c2a8]/10"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 flex size-12 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="flex flex-col border-t border-white/10 pb-8 pt-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-4 text-lg font-semibold uppercase tracking-wider text-white transition-colors hover:text-[#00c2a8]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_HREF}
            onClick={closeMenu}
            className="mt-2 self-start border border-[#00c2a8]/60 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#00c2a8] transition-colors hover:border-[#00c2a8] hover:bg-[#00c2a8]/10"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
