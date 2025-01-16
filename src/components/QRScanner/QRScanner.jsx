import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Html5QrcodeScanner } from 'html5-qrcode'; // Correct QR scanner package
import './QRScanner.css'; // Import CSS for styling

const QRScanner = () => {
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Initialize the scanner with ID 'reader' where the scanner will appear
    const qrCodeScanner = new Html5QrcodeScanner(
      "reader", // This is the div ID where the scanner will render
      {
        fps: 10, // Frames per second
        qrbox: 250, // Size of the scanning box
      },
      false
    );

    // Start scanning
    qrCodeScanner.render((result) => {
      console.log('Scanned Result:', result);
      alert(`Scanned Result: ${result.text}`); // Display scanned result
    }, (error) => {
      console.error(error);
    });

    // Cleanup function to stop the scanner when component is unmounted
    return () => {
      qrCodeScanner.clear();
    };
  }, []);

  return (
    <div className="scanner-container">
      <h2 className="scanner-heading">Scan QR Code</h2>
      <div id="reader" className="scanner-box"></div> {/* Container for the scanner */}
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
