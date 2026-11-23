import React from "react";
import "../styles/stats-band.css";

export default function StatsBand({ text }) {
  return (
    <section className="stats-band" aria-label={text.statsTitle}>
      <dl className="stats-band__list">
        {text.stats.map(([value, label]) => (
          <div className="stats-band__item" key={label}>
            <dt className="stats-band__label">{label}</dt>
            <dd className="stats-band__value"><bdi>{value}</bdi></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
