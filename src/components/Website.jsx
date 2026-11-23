import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { copy } from "../copy";
import "../styles/website.css";

export default function Website() {
  const [language, setLanguage] = useState(() =>
    new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "he",
  );
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = text.direction;
    document.title = text.pageTitle;
  }, [language, text]);

  function changeLanguage(nextLanguage) {
    const url = new URL(window.location.href);
    if (nextLanguage === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState(window.history.state, "", url);
    setLanguage(nextLanguage);
  }

  return (
    <div className="website" lang={language} dir={text.direction}>
      <div className="website__nav">
        <Navbar text={text} />
      </div>
      <main className="page">
        <Header text={text} />
        <Body text={text} language={language} />
      </main>
      <Footer text={text} language={language} onLanguageChange={changeLanguage} />
      <a className="back-to-top btn btn-download" href="#header" aria-label={text.backToTop} title={text.backToTop}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5m-7 7 7-7 7 7" />
        </svg>
      </a>
    </div>
  );
}
