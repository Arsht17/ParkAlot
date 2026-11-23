import React from "react";
import qrImg from "../assets/images/image 8.png";
import "../styles/qr-code.css";

export default function QRCode({ text }) {
  return (
    <div className="QR">
      <div className="QR-CODE">
        <img
          className="image"
          src={qrImg}
          alt={text.qrAlt}
          width="64"
          height="64"
          decoding="async"
        />
      </div>
      <p className="p-2">{text.qr}</p>
    </div>
  );
}
