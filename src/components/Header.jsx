import React, { useEffect, useRef } from "react";
import "../styles/header.css";
import heroVideo from "../assets/Hero video.mp4";
import QRCode from "./QRCode";

export default function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      const video = videoRef.current;
      if (!video) return;
      if (preference.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <header className="header" id="header" aria-labelledby="hero-title">
      <div className="header__content">
        <video
          ref={videoRef}
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          tabIndex={-1}
          aria-hidden="true"
        />
        <div className="gradient" aria-hidden="true" />

        <div className="hero-section">
          <div className="hero-text">
            <h1 className="h" id="hero-title">
              <span>מוצאים חניה</span>{" "}
              <span>בלי סיבובים</span>
            </h1>
            <div className="p-wrapper">
              <p className="p">
                הופכים חניה לפשוטה, מהירה וללא לחץ לנהגים בכל מקום.
              </p>
            </div>
          </div>
          <div className="btns">
            <a className="btn btn-download" href="#download">
              הורידו את PARKO
            </a>
            <a className="btn btn-show" href="#business">
              צפה בהדגמה
            </a>
          </div>
          <QRCode />
        </div>
      </div>
    </header>
  );
}
