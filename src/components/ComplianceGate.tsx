import { useCallback, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === "zh-CN";
  const [showInterstitial, setShowInterstitial] = useState(() =>
    typeof window !== "undefined" ? !hasAcceptedDisclaimer() : false
  );
  const disclaimer = t("compliance.disclaimer");

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
        className={`fixed bottom-0 left-0 right-0 z-[9990] border-t border-[#0b1c2d]/15 bg-[#0b1c2d]/97 px-[5%] text-white/85 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] backdrop-blur-md ${
          isZh
            ? "py-2 text-[11px] leading-snug md:py-2.5 md:text-[12px]"
            : "py-2.5 text-[10px] leading-snug md:py-3 md:text-[11px] md:leading-relaxed"
        }`}
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
        role="note"
        aria-label={t("compliance.barAria")}
      >
        <p className="mx-auto max-w-5xl">{disclaimer}</p>
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
              className={`mb-4 text-xs font-semibold text-[#00c2a8] ${
                isZh ? "tracking-[0.06em]" : "uppercase tracking-[0.2em]"
              }`}
            >
              {t("compliance.title")}
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-white/80">
              {disclaimer}
            </p>
            <button
              type="button"
              onClick={accept}
              className={`w-full border border-[#00c2a8]/50 bg-[#00c2a8]/15 px-6 py-3.5 text-xs font-semibold text-[#00c2a8] transition-colors hover:border-[#00c2a8] hover:bg-[#00c2a8]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c2a8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628] ${
                isZh ? "tracking-[0.05em]" : "uppercase tracking-[0.15em]"
              }`}
            >
              {t("compliance.confirm")}
            </button>
            <p className="mt-4 text-[10px] leading-relaxed text-white/35">
              {t("compliance.footer")}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Bottom padding so page content is not hidden behind the fixed disclaimer bar. */
export const COMPLIANCE_BAR_PADDING_CLASS = "pb-28 md:pb-32";
