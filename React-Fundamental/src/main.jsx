import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Article from "./components/article.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Article name="Kamu" titles={["Vue JS", "React JS", "Next JS"]} />
  </StrictMode>
);
