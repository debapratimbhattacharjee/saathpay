import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MoneyTransfer.css';
import Balance from '../../assets/images/Balance.png';
import Receive from '../../assets/images/Receive.png';
import Scan from '../../assets/images/Scan.png';
import Split from '../../assets/images/Split.png';
import ToBank from '../../assets/images/ToBank.png';
import ToMobile from '../../assets/images/ToMobile.png';
import SplitExpenses from '../splitwise/SplitExpenses';


const MoneyTransfer = () => {
  const navigate = useNavigate();

  const handleScanClick = () => {
    navigate('/qr-scanner'); // Navigate to the QR scanner page
  };
  
  

  return (
    <div className="money-transfer-container">
      {/* Header */}
      <div className="header">
        <h1></h1>
      </div>

      {/* Money Transfer Section */}
      <div className="money-transfer-section">
        <h2>Money Transfer</h2>
        <div className="transfer-icons">
          <div className="icon" onClick={handleScanClick}>
            <img src={Scan} alt="Scan & Pay" />
            <p>Scan & Pay</p>
          </div>
          <div className="icon">
            <img src={ToMobile} alt="To Mobile or Contact" />
            <p>To Mobile or Contact</p>
          </div>
          <div className="icon">
            <img src={ToBank} alt="To Bank A/c or UPI ID" />
            <p>To Bank A/c or UPI ID</p>
          </div>
          <div className="icon">
            <img src={Balance} alt="Balance & History" />
            <p>Balance & History</p>
          </div>
          <div className="icon">
            <img src={Split} alt="Split Bills" />
            <p>Split Bills</p>
          </div>
          <div className="icon">
            <img src={Receive} alt="Receive Money" />
            <p>Receive Money</p>
          </div>
        </div>
      </div>

      {/* Split Expenses Section */}
      <SplitExpenses />

      {/* Footer Navigation */}
      <div className="footer-navigation">
        <div className="nav-item">Track Expenses</div>
        <div className="nav-item">Home</div>
        <div className="nav-item">Loans</div>
      </div>
    </div>
  );
};

export default MoneyTransfer;
