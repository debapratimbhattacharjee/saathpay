import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { QrReader } from 'react-qr-reader';
import './QRScanner.css'; // Import CSS for styling

const QRScanner = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleResult = (result, error) => {
    if (result) {
      console.log('Scanned Result:', result.text);
      alert(`Scanned Result: ${result.text}`); // Display scanned result
    }

    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="scanner-container">
      <h2 className="scanner-heading">Scan QR Code</h2>
      <div className="scanner-box">
        <QrReader
          onResult={handleResult}
          constraints={{ facingMode: 'environment' }} // Use rear camera
          className="scanner"
        />
      </div>
      <p className="scanner-instructions">
        Align the QR code within the frame to scan.
      </p>
      <button
        className="back-button"
        onClick={() => navigate('/money-transfer')} // Navigate back to Money Transfer
      >
        Back to Money Transfer
      </button>
    </div>
  );
};

export default QRScanner;
