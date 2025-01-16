import React, { useState } from "react";
import "./SplitCustom.css";

const SplitCustom = () => {
  const [totalExpense, setTotalExpense] = useState(""); // Total expense input
  const [numberOfPeople, setNumberOfPeople] = useState(""); // Number of people to split the expense
  const [qrCode, setQrCode] = useState(""); // QR code for the group
  const [contribution, setContribution] = useState(null); // Contribution per person

  // Handle submit to generate UPI payment link and QR code
  const handleSubmit = () => {
    if (!totalExpense || !numberOfPeople) {
      alert("Please enter all fields.");
      return;
    }

    const total = parseFloat(totalExpense);
    const people = parseInt(numberOfPeople);

    // Validate the number of people
    if (people <= 0) {
      alert("The number of people must be greater than zero.");
      return;
    }

    // Calculate the fixed contribution per person
    const contributionAmount = (total / people).toFixed(2);
    setContribution(contributionAmount); // Set the contribution per person

    // Your UPI ID (replace this with your UPI ID)
    const upiId = "debagourbhatta-2@okicici"; // Replace with your UPI ID
    const merchantName = "MerchantName"; // Replace with your name or merchant name

    // Generate the UPI payment link with the fixed contribution amount
    const upiPaymentLink = `upi://pay?pa=${upiId}&pn=${merchantName}&am=${contributionAmount}&cu=INR`;

    // Generate the QR code for the UPI link
    const qrLink = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiPaymentLink)}&size=200x200`;

    setQrCode(qrLink); // Set the generated QR code link
  };

  // Handle sharing the QR code and contribution information
  const handleShare = async () => {
    if (!navigator.share) {
      alert("Sharing is not supported on your browser.");
      return;
    }

    try {
      await navigator.share({
        title: "Split Custom Payment",
        text: `Each person needs to pay ₹${contribution}. Scan the QR code to pay.`,
        url: qrCode, // URL of the QR code image
      });
      alert("Shared successfully!");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="split-custom-container">
      <h2>Split Custom</h2>

      {/* Total Expense Input */}
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter total expense"
          value={totalExpense}
          onChange={(e) => setTotalExpense(e.target.value)}
        />
      </div>

      {/* Number of People Input */}
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter number of people"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
      </div>

      {/* Submit Button to generate UPI payment link and QR code */}
      <button className="submit-button" onClick={handleSubmit}>
        Generate Payment QR Code
      </button>

      {/* QR Code Display */}
      {qrCode && contribution && (
        <div className="qr-container">
          <div className="qr-box">
            <p>Contribution per Person: ₹{contribution}</p>
            <img src={qrCode} alt="QR Code for Payment" />
            <p>Scan to Pay ₹{contribution}</p>
            {/* Share Button */}
            <button className="share-button" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplitCustom;
