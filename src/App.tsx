import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import i18n from "i18next";
import { ComplianceGate, COMPLIANCE_BAR_PADDING_CLASS } from "./components/ComplianceGate";
import { HomePage } from "./pages/HomePage";
import { resolveLocaleFromPath, syncDocumentLanguage } from "./i18n";

export default function App() {
  const { pathname } = useLocation();
  const isChineseRoute = pathname.startsWith("/cn");

  useEffect(() => {
    const locale = resolveLocaleFromPath(pathname);
    void i18n.changeLanguage(locale);
    syncDocumentLanguage(locale);
  }, [pathname]);

  return (
    <ComplianceGate>
      <div className={COMPLIANCE_BAR_PADDING_CLASS}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cn" element={<Navigate to="/cn/" replace />} />
          <Route path="/cn/" element={<HomePage />} />
          <Route
            path="*"
            element={<Navigate to={isChineseRoute ? "/cn/" : "/"} replace />}
          />
        </Routes>
      </div>
    </ComplianceGate>
  );
}
