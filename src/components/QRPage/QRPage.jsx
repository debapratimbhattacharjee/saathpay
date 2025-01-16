import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QRPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { contribution, qrCode } = location.state || {};

  if (!contribution || !qrCode) {
    navigate("/");
    return null;
  }

  return (
    <div className="qr-page">
      <h2>Scan QR Code</h2>
      <p>Contribution per Person: ₹{contribution}</p>
      <img src={qrCode} alt="QR Code" />
      <p>Scan to Pay ₹{contribution}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default QRPage;
