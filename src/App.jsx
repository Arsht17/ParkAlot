import React from "react";
import "./index.css";
import "./styles/website.css";
import Website from "./components/Website";

export default function App({ language }) {
  return <Website language={language} />;
}
