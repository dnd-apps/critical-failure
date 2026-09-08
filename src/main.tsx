import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { printBanner } from "./lib/banner";
import "./index.css";

printBanner();

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container #root was not found");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
