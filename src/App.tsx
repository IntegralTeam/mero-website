import { Navigate, Route, Routes } from "react-router-dom";
import { AnnouncementPage } from "./pages/AnnouncementPage";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<AnnouncementPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
