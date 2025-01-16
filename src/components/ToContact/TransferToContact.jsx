// TransferToContact.jsx

import React, { useState } from 'react';
import './TransferToContact.css';

const TransferToContact = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = () => {
    if (!mobileNumber || !amount) {
      alert('Please enter both mobile number and amount.');
      return;
    }
    alert(`Transferring ₹${amount} to ${mobileNumber}`);
  };

  return (
    <div className="transfer-to-contact-container">
      <h1>Transfer Money</h1>
      <div className="transfer-form">
        <label htmlFor="mobile-number">Mobile Number or Contact</label>
        <input
          type="tel"
          id="mobile-number"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="transfer-button" onClick={handleTransfer}>
          Transfer
        </button>
      </div>
    </div>
  );
};

export default TransferToContact;

