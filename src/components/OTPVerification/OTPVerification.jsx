import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './OTPVerification.css';

import logo1 from '../../assets/images/logo1.png'; // Adjust path if necessary

const OTPVerification = () => {
  const [otp, setOtp] = useState('');  // State for OTP input
  const [isVerified, setIsVerified] = useState(false); // State for verification status
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic OTP validation logic
    if (otp.length === 6) {
      setIsVerified(true); // OTP is verified

      // Store OTP verification status in localStorage
      localStorage.setItem('otpVerified', 'true');

      // Navigate to Money Transfer page
      navigate('/money-transfer');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <div className="otp-section mt-sm-5">
      <div className="otp-container">
        <div className="logo-container">
          <img src={logo1} alt="Logo" className="logo-image" />
        </div>
        <h2>Enter the OTP</h2>
        <p>We sent a 6-digit OTP to your registered phone number.</p>

        {/* OTP Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control otp-input"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleChange}
            maxLength="6"  // Limit to 6 characters for OTP
            required
          />
          <button type="submit" className="btn btn-primary nav_btn">
            Verify OTP
          </button>
        </form>

        {/* Verification Status */}
        {isVerified && <p className="success-message">OTP Verified Successfully!</p>}
        <p>Didn't receive the OTP? <a href="#">Resend OTP</a></p>
      </div>
    </div>
  );
};

export default OTPVerification;
