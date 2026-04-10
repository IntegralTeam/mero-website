import { useCallback, useState, type ReactNode } from "react";

/** Exact wording for s.21 / professional-investor context — used on interstitial and persistent bar. */
export const PROFESSIONAL_INVESTOR_DISCLAIMER =
  "The information on this website is intended solely for professional and institutional investors in jurisdictions where such distribution is permitted. It is not directed at, and must not be relied upon by, retail clients or any persons in the United Kingdom, United States, or any jurisdiction where such distribution would be contrary to local law or regulation. Nothing on this website constitutes a financial promotion, offer, or solicitation.";

const STORAGE_KEY = "mero_professional_disclaimer_ack_session";
const COOKIE_NAME = "mero_professional_disclaimer_ack";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Session cookie (no Max-Age): ends when the browser session ends.
 * Together with sessionStorage: same session = one click-through; new browser session = gate again.
 */
function setDisclaimerCookie(): void {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=1; Path=/; SameSite=Lax${secure}`;
}

function hasAcceptedDisclaimer(): boolean {
  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return true;
  } catch {
    /* private mode / blocked storage */
  }
  if (getCookie(COOKIE_NAME) === "1") return true;
  return false;
}

export function ComplianceGate({ children }: { children: ReactNode }) {
  const [showInterstitial, setShowInterstitial] = useState(() =>
    typeof window !== "undefined" ? !hasAcceptedDisclaimer() : false
  );

  const accept = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setDisclaimerCookie();
    setShowInterstitial(false);
  }, []);

  return (
    <>
      {children}

      {/* Persistent viewport disclaimer (always visible after load) */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[9990] border-t border-[#0b1c2d]/15 bg-[#0b1c2d]/97 px-[5%] py-2.5 text-[10px] leading-snug text-white/85 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] backdrop-blur-md md:py-3 md:text-[11px] md:leading-relaxed"
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
        role="note"
        aria-label="Professional investor disclaimer"
      >
        <p className="mx-auto max-w-5xl">{PROFESSIONAL_INVESTOR_DISCLAIMER}</p>
      </div>

      {/* First-visit / new-session click-through (cookie + sessionStorage) */}
      {showInterstitial ? (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0b1c2d]/95 px-5 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="compliance-gate-title"
        >
          <div className="max-h-[min(85vh,640px)] w-full max-w-lg overflow-y-auto border border-white/10 bg-[#0a1628] p-6 shadow-2xl md:p-8">
            <h2
              id="compliance-gate-title"
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#00c2a8]"
            >
              Important — please read
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/80">
              {PROFESSIONAL_INVESTOR_DISCLAIMER}
            </p>
            <button
              type="button"
              onClick={accept}
              className="w-full border border-[#00c2a8]/50 bg-[#00c2a8]/15 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#00c2a8] transition-colors hover:border-[#00c2a8] hover:bg-[#00c2a8]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c2a8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
            >
              I confirm I am a professional or institutional investor and I agree to continue
            </button>
            <p className="mt-4 text-[10px] leading-relaxed text-white/35">
              By continuing you acknowledge that you have read and understood the above. If you do not
              agree, please leave this website.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Bottom padding so page content is not hidden behind the fixed disclaimer bar. */
export const COMPLIANCE_BAR_PADDING_CLASS = "pb-28 md:pb-32";
