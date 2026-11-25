import React from "react";
import LanguageDropdown from "./LanguageDropdown";
import "../styles/footer.css";
import logo from "../assets/icons/Vector.svg";

export default function Footer({ text, language }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <div className="footer__brand">
          <a className="footer__brand-row" href="#header" aria-label={`PARKO - ${text.backToTop}`}>
            <img className="footer__brand-icon" src={logo} alt={text.logoAlt} width="72" height="65" loading="lazy" />
            <span className="footer__brand-text">PARKO</span>
          </a>
          <p>{text.footerDescription}</p>
        </div>

        <nav className="footer__categories" aria-label={text.footerNav}>
          <div className="footer__column">
            <div className="footer__title">{text.product}</div>
            <div className="footer__items">
              <a className="footer__link" href="#download">
                {text.download}
              </a>
              <a className="footer__link" href="#business">
                {text.business}
              </a>
            </div>
          </div>

          <div className="footer__column">
            <div className="footer__title">{text.company}</div>
            <div className="footer__items">
              <a className="footer__link" href="#about">
                {text.about}
              </a>
              <button type="button" className="footer__link" title={text.legalUnavailable}>
                {text.privacy}
              </button>
              <button type="button" className="footer__link" title={text.legalUnavailable}>
                {text.terms}
              </button>
            </div>
          </div>

          <div className="footer__column">
            <div className="footer__title">{text.support}</div>
            <div className="footer__items">
              <a className="footer__link" href="#contact">
                {text.contact}
              </a>
              <div className="footer__location">
                <span className="footer__location-icon" aria-hidden="true" />
                <span>{text.location}</span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          {language === "he" ? (
            <><bdi>© 2026</bdi>{" "}<bdi className="footer__brand-accent">PARKO</bdi>. {text.rights}</>
          ) : (
            <><span className="footer__brand-accent">PARKALOT</span>. {text.rights} © 2026</>
          )}
        </p>

        <div className="footer__controls">
          <LanguageDropdown label={text.language} language={language} />

          <div className="footer__socials">
            <div className="footer__socials-title">{text.updates}</div>
            <div className="footer__socials-icons" dir="ltr">
              {[["X", "x"], ["Facebook", "facebook"], ["Instagram", "instagram"]].map(([name, icon]) => (
                <button key={icon} type="button" aria-label={name} title={text.profileUnavailable(name)}>
                  <span className={`footer__icon footer__icon--${icon} default`} aria-hidden="true" />
                  <span className={`footer__icon footer__icon--${icon}-blue hover`} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
