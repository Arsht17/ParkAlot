import React from "react";
import "../styles/stats-band.css";

const stats = [
  { value: "5/5", label: "דירוג באפליקציה" },
  { value: "+50", label: "משתמשים מרוצים" },
  { value: "+1K", label: "הורדות" },
  { value: "+10,000", label: "מקומות חניה ברשת" },
];

export default function StatsBand() {
  return (
    <section className="stats-band" aria-label="PARKO במספרים">
      <dl className="stats-band__list" dir="ltr">
        {stats.map(({ value, label }) => (
          <div className="stats-band__item" key={label}>
            <dt className="stats-band__label" dir="rtl">{label}</dt>
            <dd className="stats-band__value"><bdi>{value}</bdi></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
