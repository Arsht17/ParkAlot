import React from "react";
import QRCode from "./QRCode";
import "../styles/stats-section.css";
import "../styles/stats-section-content.css";
import googlePlay from "../assets/images/Google Play.png";
import appStore from "../assets/images/Apple Inc.png";

export default function StatsSection({
  isVisible = false,
  onReveal = () => {},
}) {
  return (
    <section
      className={`stats-section ${isVisible ? "is-visible" : ""}`}
      id="download"
      aria-labelledby="download-title"
      dir="rtl"
      onMouseEnter={onReveal}
    >
      <div className="stats-section__inner" id="guide">
        <div className="section">
          <div className="section__content">
            <header className="section__header">
              <h2 className="section__div" id="download-title">
                מוכנים להזמין חניה מראש?
              </h2>
              <p className="section__p">
                בחרו מקום פנוי ליד היעד והגיעו אליו עם ניווט ישיר.
              </p>
            </header>
          </div>
          <div className="section__p-btns">
            <div className="section__btns-download">
              <a
                href="https://apps.apple.com/il/app/parkalot-%D7%A4%D7%90%D7%A8%D7%A7%D7%90%D7%9C%D7%95%D7%98/id6754233739"
                className="store-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="store-button__icon" src={appStore}
                  alt="סמל Apple App Store" width="32" height="32"
                  loading="lazy" decoding="async" />
                <span className="store-button__text" lang="en" dir="ltr">
                  <span className="store-button__eyebrow">DOWNLOAD ON THE</span>
                  <span className="store-button__label">Apple Store</span>
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.parkalot.parkalot"
                className="store-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="store-button__icon" src={googlePlay}
                  alt="סמל Google Play" width="32" height="32"
                  loading="lazy" decoding="async" />
                <span className="store-button__text" lang="en" dir="ltr">
                  <span className="store-button__eyebrow">GET IT ON</span>
                  <span className="store-button__label">Google Play</span>
                </span>
              </a>
            </div>
            <QRCode />
          </div>
        </div>
      </div>
    </section>
  );
}
