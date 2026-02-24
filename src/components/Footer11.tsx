import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type LegalModalKey = "privacy" | "terms" | "cookies";

const modalContent: Record<LegalModalKey, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "Mero only collects information needed to operate our platform, provide support, and meet compliance requirements.",
      "We process account and operational data under institutional security standards and never sell your personal data.",
      "For privacy requests, contact hello@mero.io.",
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

export function Footer11() {
  const [activeModal, setActiveModal] = useState<LegalModalKey | null>(null);

  useEffect(() => {
    if (!activeModal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeModal]);

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 border border-border-primary p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Address</p>
              <p className="mb-5 text-sm md:mb-6">
                Singapore, Indonesia, India, and beyond
              </p>
              <p className="mb-1 text-sm font-semibold">Contact</p>
              <a
                href="tel:1800 123 4567"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                hello@mero.io
              </a>
              <a
                href="mailto:info@relume.io"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@relume.io
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <img
                  src="https://cdn.simpleicons.org/facebook/111111"
                  alt="Facebook"
                  className="size-5"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.simpleicons.org/instagram/111111"
                  alt="Instagram"
                  className="size-5"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.simpleicons.org/x/111111"
                  alt="X"
                  className="size-5"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.simpleicons.org/youtube/111111"
                  alt="YouTube"
                  className="size-6"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <Link to="/about">About Mero</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link to="/platform">How it works</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Features</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Partners</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Resources</a>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Blog</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Documentation</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link to="/#stay-informed">Contact us</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Careers</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">© 2026 Mero. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="underline"
              >
                Privacy policy
              </button>
            </li>
            <li className="underline">
              <button
                type="button"
                onClick={() => setActiveModal("terms")}
                className="underline"
              >
                Terms of service
              </button>
            </li>
            <li className="underline">
              <button
                type="button"
                onClick={() => setActiveModal("cookies")}
                className="underline"
              >
                Cookie settings
              </button>
            </li>
          </ul>
        </div>
      </div>
      {activeModal ? (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-5"
          onClick={() => setActiveModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="w-full max-w-xl border border-border-primary bg-white p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h3 id="legal-modal-title" className="text-2xl font-bold">
                {modalContent[activeModal].title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-sm underline"
              >
                Close
              </button>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              {modalContent[activeModal].body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
