import React, { useState } from 'react';
import './Bankacc.css';

const Bankacc = () => {
  const [transferOption, setTransferOption] = useState('bank'); // 'bank' or 'upi'
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleTransfer = () => {
    if (!amount) {
      alert('Please enter the amount.');
      return;
    }

    if (transferOption === 'bank') {
      if (!accountNumber || !confirmAccountNumber || !ifscCode) {
        alert('Please fill in all fields for bank transfer.');
        return;
      }
      if (accountNumber !== confirmAccountNumber) {
        alert('Account numbers do not match.');
        return;
      }
      alert(`₹${amount} successfully transferred to A/c: ${accountNumber} (IFSC: ${ifscCode}). Remark: ${remarks}`);
    } else if (transferOption === 'upi') {
      if (!upiId) {
        alert('Please enter a valid UPI ID.');
        return;
      }
      alert(`₹${amount} successfully transferred to UPI ID: ${upiId}. Remark: ${remarks}`);
    }
  };

  return (
    <div className="bank-acc-container">
      <h1>Transfer Money</h1>

      <div className="transfer-option">
        <label>
          <input
            type="radio"
            value="bank"
            checked={transferOption === 'bank'}
            onChange={() => setTransferOption('bank')}
          />
          To Bank Account
        </label>
        <label>
          <input
            type="radio"
            value="upi"
            checked={transferOption === 'upi'}
            onChange={() => setTransferOption('upi')}
          />
          To UPI ID
        </label>
      </div>

      {transferOption === 'bank' && (
        <div className="bank-form">
          <label htmlFor="account-number">Account Number</label>
          <input
            type="text"
            id="account-number"
            placeholder="Enter account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />

          <label htmlFor="confirm-account-number">Confirm Account Number</label>
          <input
            type="text"
            id="confirm-account-number"
            placeholder="Re-enter account number"
            value={confirmAccountNumber}
            onChange={(e) => setConfirmAccountNumber(e.target.value)}
          />

          <label htmlFor="ifsc-code">IFSC Code</label>
          <input
            type="text"
            id="ifsc-code"
            placeholder="Enter IFSC code"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />
        </div>
      )}

      {transferOption === 'upi' && (
        <div className="upi-form">
          <label htmlFor="upi-id">UPI ID</label>
          <input
            type="text"
            id="upi-id"
            placeholder="Enter UPI ID (e.g., user@bank)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
      )}

      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="remarks">Remarks (Optional)</label>
      <input
        type="text"
        id="remarks"
        placeholder="Add a note"
        value={remarks}
        onChange={(e) => setRemarks(e.target.value)}
      />

      <button className="transfer-button" onClick={handleTransfer}>
        Transfer Money
      </button>
    </div>
  );
};

export default Bankacc;
