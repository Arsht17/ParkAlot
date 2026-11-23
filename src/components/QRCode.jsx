import React from "react";
import qrImg from "../assets/images/parko-download-qr.png";
import "../styles/qr-code.css";

export default function QRCode({ text }) {
  return (
    <div className="QR">
      <div className="QR-CODE">
        <div className="QR-CODE__crop">
          <img
            className="image"
            src={qrImg}
            alt={text.qrAlt}
            width="1024"
            height="1333"
            decoding="async"
          />
        </div>
      </div>
      <p className="p-2">{text.qr}</p>
    </div>
  );
}
