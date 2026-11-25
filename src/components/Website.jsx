import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { copy } from "../copy";
import "../styles/website.css";

export default function Website({ language }) {
  const text = copy[language];

  return (
    <div className="website" lang={language} dir={text.direction}>
      <div className="website__nav">
        <Navbar text={text} />
      </div>
      <main className="page">
        <Header text={text} />
        <Body text={text} language={language} />
      </main>
      <Footer text={text} language={language} />
      <a className="back-to-top btn btn-download" href="#header" aria-label={text.backToTop} title={text.backToTop}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5m-7 7 7-7 7 7" />
        </svg>
      </a>
    </div>
  );
}
