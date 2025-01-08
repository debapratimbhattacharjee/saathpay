import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';
import OTPVerification from '../OTPVerification/OTPVerification';
import MoneyTransfer from '../MoneyTransfer/MoneyTransfer';
import QRScanner from '../QRScanner/QRScanner';
import Footer from '../Footer/Footer';
import Login from '../Signup&login/Login'; // Correct path if folder name contains '&'
import SignUp from '../Signup&login/SignUp'; // Correct path if folder name contains '&'

import './Hero.css';

const Hero = () => {
  return (
    <Router>
      <div className="Hero">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/money-transfer" element={<MoneyTransfer />} />
          <Route path="/qr-scanner" element={<QRScanner />} />
          <Route path="/sign-up" element={<SignUp />} />    {/* Add route for Sign Up */}
          <Route path="/login" element={<Login />} />       {/* Add route for Login */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Hero;
