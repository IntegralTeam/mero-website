import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ScrollToHash } from "./ScrollToHash";
import "./styles/globals.css";

const baseUrl = import.meta.env.BASE_URL;
const basename =
  baseUrl && baseUrl !== "/" ? baseUrl.replace(/\/$/, "") : undefined;

const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
