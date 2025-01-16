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

  const handleScanClick = () => navigate('/qr-scanner');
  const handleBalanceClick = () => navigate('/balance');
  const handleMobileClick = () => navigate('/transfer-to-contact');
  const handleBankClick = () => navigate('/bank-account'); // Navigate to Bankacc component

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
          {/* Elements that navigate to other components */}
          <div className="icon" onClick={handleScanClick}>
            <img src={Scan} alt="Scan & Pay" />
            <p>Scan & Pay</p>
          </div>
          <div className="icon" onClick={handleMobileClick}>
            <img src={ToMobile} alt="To Mobile or Contact" />
            <p>To Mobile or Contact</p>
          </div>
          <div className="icon" onClick={handleBalanceClick}>
            <img src={Balance} alt="Balance & History" />
            <p>Balance & History</p>
          </div>
          <div className="icon" onClick={handleBankClick}>
            <img src={ToBank} alt="To Bank A/c or UPI ID" />
            <p>To Bank A/c or UPI ID</p>
          </div>
        </div>
      </div>

      {/* Split Expenses Section */}
      <SplitExpenses />

      {/* Footer Navigation */}
      <div className="footer-navigation">
        <div className="nav-item">Split Expense</div>
        <div className="nav-item">Scan & Pay</div>
        <div className="nav-item">History</div>
      </div>
    </div>
  );
};

export default MoneyTransfer;
