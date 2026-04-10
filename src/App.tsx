import { Navigate, Route, Routes } from "react-router-dom";
import { ComplianceGate, COMPLIANCE_BAR_PADDING_CLASS } from "./components/ComplianceGate";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <ComplianceGate>
      <div className={COMPLIANCE_BAR_PADDING_CLASS}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </ComplianceGate>
  );
}
