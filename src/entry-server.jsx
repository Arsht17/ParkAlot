import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render(language) {
  return renderToString(
    <StrictMode>
      <App language={language} />
    </StrictMode>,
  );
}
