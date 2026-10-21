import React from "react";
import "../styles/card.css";

export default function Card({
  className = "",
  iconClassName = "",
  property1 = "default",
  text,
  text1,
}) {
  return (
    <div className={`card card--${property1} ${className}`.trim()}>
      <span className="card__gloss" aria-hidden="true" />
      <div className="card__frame">
        <div
          className={`card__icon ${iconClassName}`.trim()}
          aria-hidden="true"
        />
        <div className="card__text-wrapper">
          <h3 className="card__title">{text}</h3>
          <p className="card__copy">{text1}</p>
        </div>
      </div>
    </div>
  );
}
