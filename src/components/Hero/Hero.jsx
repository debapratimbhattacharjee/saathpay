import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';
import OTPVerification from '../OTPVerification/OTPVerification';
import MoneyTransfer from '../MoneyTransfer/MoneyTransfer';
import QRScanner from '../QRScanner/QRScanner';
import Footer from '../Footer/Footer';
import Login from '../Signup&login/Login';
import SignUp from '../Signup&login/SignUp';
import SplitWithFriends from '../SplitFriends/SplitWithFriends';
import SplitRecurring from '../SplitRecurring/SplitRecurring';
import SplitCustom from '../SplitCustom/SplitCustom'; // New SplitCustom component
import SplitCategory from '../SplitCategory/SplitCategory';
import SplitEvents from '../SplitEvents/SplitEvents';
import Balance from '../balance/balance';
import TransferToContact from '../ToContact/TransferToContact';
import Bankacc from '../Bankacc/Bankacc';


import './Hero.css';

const Hero = () => {
  const location = useLocation(); // Access the current route

  // Define routes where the footer should appear
  const footerRoutes = ['/money-transfer'];

  return (
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
        <Route path="/splitcustom" element={<SplitCustom />} /> {/* New Route for SplitCustom */}
        <Route path="/splitrecurring" element={<SplitRecurring />} />
        <Route path="/splitbycategory" element={<SplitCategory />} />
        <Route path="/eventsplitting" element={<SplitEvents />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/transfer-to-contact" element={<TransferToContact />} />
        <Route path="/bank-account" element={<Bankacc />} />
      </Routes>
      
      {/* Conditionally render Footer */}
      {footerRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

// Wrap the Hero component with Router
const App = () => {
  return (
    <Router>
      <Hero />
    </Router>
  );
};

export default App;
