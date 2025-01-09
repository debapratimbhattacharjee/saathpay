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
import SplitWithFriends from '../SplitFriends/SplitWithFriends';
import SplitRecurring from '../SplitRecurring/SplitRecurring';
import SplitExpenses from '../splitwise/SplitExpenses'; // Import SplitExpenses component
import SplitCategory from '../SplitCategory/SplitCategory';
import SplitEvents from '../SplitEvents/SplitEvents';
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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/splitwithfriends" element={<SplitWithFriends />} />
          <Route path="/splitexpenses" element={<SplitExpenses />} /> {/* Route for SplitExpenses */}
          <Route path="/splitrecurring" element={<SplitRecurring />} /> {/* Route for SplitRecurring */}
          <Route path="/splitbycategory" element={<SplitCategory />} />

          <Route path="/eventsplitting" element={<SplitEvents />} />
          {/* Fallback route for unrecognized paths */}
          
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default Hero;
