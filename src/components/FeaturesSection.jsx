import React, { useReducer } from "react";
import Card from "./Card";
import "../styles/features-section.css";

export default function FeaturesSection({
  text,
  isVisible = false,
  onReveal = () => {},
  property1,
  className = "",
}) {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <section
      id="about"
      aria-labelledby="features-title"
      className={`features-section ${
        isVisible ? "is-visible" : ""
      } property-1-0-${state.property1} ${className}`.trim()}
      onMouseEnter={() => {
        onReveal();
        dispatch("mouse_enter");
      }}
    >
      <div className="h">
        <h2 className="p" id="features-title">
          <span className="span">{text.featuresTitle}</span>
          <span className="text-wrapper-2">PARKO</span>
          <span className="span">?</span>
        </h2>

        <p className="p-2">
          {text.featuresDescription}
        </p>
      </div>

      <div className="cards">
        {[
          ["location", "card-2"],
          ["phone", "instance-node"],
          ["shield", "card-instance"],
          ["clock", "card-5"],
          ["car", "card-4"],
          ["alert", "card-3"],
        ].map(([icon, className], index) => (
          <Card
            key={icon}
            className={className}
            iconClassName={`card__icon--${icon}`}
            text={text.features[index][0]}
            text1={text.features[index][1]}
          />
        ))}
      </div>
    </section>
  );
}

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };
    default:
      return state;
  }
}
