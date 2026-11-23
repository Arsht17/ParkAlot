import React, { useEffect } from "react";
import "../styles/navbar.css";
import vector from "../assets/icons/Vector.svg";

const links = [
  "about", "business", "download", "contact",
];

export default function Navbar({ text }) {
  useEffect(() => {
    const nav = document.querySelector(".website__nav");
    if (!nav) return;

    const updateScrollOffset = () => {
      document.documentElement.style.setProperty(
        "--nav-scroll-offset",
        `${Math.ceil(nav.getBoundingClientRect().bottom + 24)}px`,
      );
    };

    updateScrollOffset();
    const observer = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(updateScrollOffset)
      : null;
    observer?.observe(nav);
    window.addEventListener("resize", updateScrollOffset);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateScrollOffset);
      document.documentElement.style.removeProperty("--nav-scroll-offset");
    };
  }, []);

  return (
    <div className="navbar">
      <a
        className="navbar__brand"
        href="#header"
        aria-label={`PARKO - ${text.backToTop}`}
      >
        <div className="navbar__logo">
          <img src={vector} alt={text.logoAlt} className="navbar__logo-img" width="40" height="36" />
        </div>
        <span className="navbar__title">PARKO</span>
      </a>

      <nav className="navbar__links" aria-label={text.mainNav}>
        {links.map((link) => (
          <a key={link} className="navbar__link" href={`#${link}`}>
            {text[link]}
          </a>
        ))}
      </nav>
    </div>
  );
}
