import React from "react";
import "../styles/footer.css";
import logo from "../assets/icons/Vector.svg";

export default function Footer() {
  return (
    <footer className="footer" id="contact" dir="ltr">
      <div className="footer__top">
        <div className="footer__categories">
          <div className="footer__column">
            <div className="footer__title">תמיכה</div>
            <div className="footer__items">
              <a className="footer__link" href="#contact">
                צור קשר
              </a>
              <div className="footer__location">
                <span>תל אביב, ישראל</span>
                <span className="footer__location-icon" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="footer__column">
            <div className="footer__title">החברה</div>
            <div className="footer__items">
              <a className="footer__link" href="#about">
                אודות
              </a>
              <a className="footer__link" href="#privacy">
                מדיניות פרטיות
              </a>
              <a className="footer__link" href="#terms">
                תנאי שירות
              </a>
            </div>
          </div>

          <div className="footer__column">
            <div className="footer__title">המוצר</div>
            <div className="footer__items">
              <a className="footer__link" href="#download">
                הורדה
              </a>
              <a className="footer__link" href="#business">
                לעסקים
              </a>
            </div>
          </div>
        </div>

        <div className="footer__brand">
          <div className="footer__brand-row">
            <span className="footer__brand-text">PARKO</span>
            <img className="footer__brand-icon" src={logo} alt="PARKO logo" />
          </div>
          <p>הופכים חניה לפשוטה, מהירה וללא לחץ לנהגים בכול מקום.</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__socials">
          <div className="footer__socials-title">לעדכונים</div>
          <div className="footer__socials-icons">
            <a href="#x" aria-label="X">
              <span className="footer__icon footer__icon--x default" aria-hidden="true" />
              <span className="footer__icon footer__icon--x-blue hover" aria-hidden="true" />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <span className="footer__icon footer__icon--facebook default" aria-hidden="true" />
              <span className="footer__icon footer__icon--facebook-blue hover" aria-hidden="true" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <span className="footer__icon footer__icon--instagram default" aria-hidden="true" />
              <span className="footer__icon footer__icon--instagram-blue hover" aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="footer__copyright">
          <span>© 2026 </span>
          <span className="footer__brand-accent">PARKO</span>
          <span>. כל הזכויות שמורות.</span>
        </p>
      </div>
    </footer>
  );
}
