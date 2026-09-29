import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<LegalPage kind="privacy" />} />
      <Route path="/cookies" element={<LegalPage kind="cookies" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
