import React from "react";
import "../styles/showcase-section.css";
import parkingPhoneHe from "../assets/images/parking-phone-he.png";
import parkingPhoneEn from "../assets/images/parking-phone-en.png";

const parkingPhones = { he: parkingPhoneHe, en: parkingPhoneEn };

export default function ParkingShowcaseSection({
  text,
  language,
  isVisible = false,
  onReveal = () => {},
}) {
  return (
    <section
      className={`parking-section ${isVisible ? "is-visible" : ""}`}
      id="business"
      aria-labelledby="showcase-title"
      onMouseEnter={onReveal}
    >
      <div className="parking-section__content">
        <h2 className="parking-section__title" id="showcase-title">{text.parkingTitle}</h2>
        <p className="parking-section__text">
          {text.parkingIntro}<span className="parking-section__brand">PARKO</span>{text.parkingDescription}
        </p>
        <ul className="parking-section__list">
          {text.parkingBenefits.map((item) => (
            <li key={item} className="parking-section__item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="parking-section__media">
        <img
          className="parking-section__image"
          src={parkingPhones[language]}
          alt={text.parkingAlt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
