import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ScrollToHash } from "./ScrollToHash";
import { initI18n, resolveLocaleFromPath, syncDocumentLanguage } from "./i18n";
import "./styles/globals.css";

const baseUrl = import.meta.env.BASE_URL;
const basename =
  baseUrl && baseUrl !== "/" ? baseUrl.replace(/\/$/, "") : undefined;
const initialLocale = resolveLocaleFromPath(window.location.pathname);
initI18n(initialLocale);
syncDocumentLanguage(initialLocale);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <ScrollToHash />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
