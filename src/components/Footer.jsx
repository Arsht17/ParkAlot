import React from "react";
import "../styles/footer.css";
import logo from "../assets/icons/Vector.svg";

export default function Footer() {
  return (
    <footer className="footer" id="contact" dir="ltr">
      <div className="footer__top">
        <nav className="footer__categories" aria-label="ניווט תחתון">
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
              <button type="button" className="footer__link" title="עמוד מדיניות הפרטיות אינו זמין באב-טיפוס">
                מדיניות פרטיות
              </button>
              <button type="button" className="footer__link" title="עמוד תנאי השירות אינו זמין באב-טיפוס">
                תנאי שירות
              </button>
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
        </nav>

        <div className="footer__brand">
          <a className="footer__brand-row" href="#header" aria-label="PARKO - חזרה לראש העמוד">
            <span className="footer__brand-text">PARKO</span>
            <img className="footer__brand-icon" src={logo} alt="לוגו PARKO" width="72" height="65" loading="lazy" />
          </a>
          <p>הופכים חניה לפשוטה, מהירה וללא לחץ לנהגים בכל מקום.</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__socials">
          <div className="footer__socials-title">לעדכונים</div>
          <div className="footer__socials-icons">
            <button type="button" aria-label="X" title="קישור לפרופיל X טרם הוגדר">
              <span className="footer__icon footer__icon--x default" aria-hidden="true" />
              <span className="footer__icon footer__icon--x-blue hover" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Facebook" title="קישור לפרופיל Facebook טרם הוגדר">
              <span className="footer__icon footer__icon--facebook default" aria-hidden="true" />
              <span className="footer__icon footer__icon--facebook-blue hover" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Instagram" title="קישור לפרופיל Instagram טרם הוגדר">
              <span className="footer__icon footer__icon--instagram default" aria-hidden="true" />
              <span className="footer__icon footer__icon--instagram-blue hover" aria-hidden="true" />
            </button>
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
