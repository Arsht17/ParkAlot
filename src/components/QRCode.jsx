import React from "react";
import qrImg from "../assets/images/image 8.png";
import "../styles/qr-code.css";

export default function QRCode() {
  return (
    <div className="QR">
      <p className="p-2">או סרקו להורדה מהנייד</p>
      <div className="QR-CODE">
        <img
          className="image"
          src={qrImg}
          alt="קוד QR להורדת אפליקציית PARKO"
          width="64"
          height="64"
          decoding="async"
        />
      </div>
    </div>
  );
}
