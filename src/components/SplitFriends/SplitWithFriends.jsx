import React, { useState } from "react";
import "./SplitWithFriends.css";

const SplitWithFriends = () => {
  const [totalExpense, setTotalExpense] = useState("");
  const [friends, setFriends] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [qrCodes, setQrCodes] = useState([]);
  const [splitOption, setSplitOption] = useState("equal"); // Default to equal split

  const handleAddFriend = () => {
    setFriends([...friends, { name: "", phone: "" }]);
    setContributions([...contributions, 0]);
  };

  const handleRemoveFriend = (index) => {
    const updatedFriends = [...friends];
    const updatedContributions = [...contributions];
    updatedFriends.splice(index, 1);
    updatedContributions.splice(index, 1);
    setFriends(updatedFriends);
    setContributions(updatedContributions);
  };

  const handleNameChange = (index, value) => {
    const updatedFriends = [...friends];
    updatedFriends[index].name = value;
    setFriends(updatedFriends);
  };

  const handlePhoneChange = (index, value) => {
    const updatedFriends = [...friends];
    updatedFriends[index].phone = value;
    setFriends(updatedFriends);
  };

  const handleContributionChange = (index, value) => {
    const updatedContributions = [...contributions];
    updatedContributions[index] = parseFloat(value) || 0;
    setContributions(updatedContributions);
  };

  const handleSplitOptionChange = (value) => {
    setSplitOption(value);
    if (value === "equal") {
      // Reset contributions equally (including yourself)
      const equalShare = parseFloat(totalExpense) / (friends.length + 1);
      setContributions(Array(friends.length).fill(equalShare));
    }
  };

  const handleSubmit = () => {
    if (friends.length === 0 || !totalExpense) {
      alert("Please add friends and enter a total expense.");
      return;
    }

    const total = parseFloat(totalExpense);
    if (splitOption === "equal") {
      const equalShare = total / (friends.length + 1);
      setContributions(Array(friends.length).fill(equalShare));
    }

    const qrImages = friends.map((friend, index) => ({
      name: friend.name,
      phone: friend.phone,
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?data=Contribution%3A%20${contributions[index]}&size=100x100`, // Fixed the template string
    }));
    setQrCodes(qrImages);
  };

  return (
    <div className="split-friends-container">
      <h2>Split Expenses with Friends</h2>

      {/* Total Expense Input */}
      <div className="expense-input-container">
        <input
          type="number"
          placeholder="Enter total expense"
          value={totalExpense}
          onChange={(e) => setTotalExpense(e.target.value)}
        />
      </div>

      {/* Split Option Dropdown */}
      <div className="expense-input-container">
        <select
          className="split-option"
          value={splitOption}
          onChange={(e) => handleSplitOptionChange(e.target.value)}
        >
          <option value="equal">Split Equally (Including You)</option>
          <option value="manual">Split Manually</option>
        </select>
      </div>

      {/* Friends List */}
      <div className="friends-container">
        {friends.map((friend, index) => (
          <div key={index} className="friend-entry">
            <input
              type="text"
              placeholder="Friend's Name"
              value={friend.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
            <input
              type="number"
              placeholder="Friend's Phone"
              value={friend.phone}
              onChange={(e) => handlePhoneChange(index, e.target.value)}
            />
            {splitOption === "manual" && (
              <input
                type="number"
                className="manual-contribution"
                placeholder="Contribution"
                value={contributions[index]}
                onChange={(e) => handleContributionChange(index, e.target.value)}
              />
            )}
            <button
              className="remove-button"
              onClick={() => handleRemoveFriend(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Add Friend Button */}
      <button className="submit-button" onClick={handleAddFriend}>
        Add Friend
      </button>

      {/* Submit Button */}
      <button className="submit-button" onClick={handleSubmit}>
        Generate QR Codes
      </button>

      {/* QR Code Display */}
      {qrCodes.length > 0 && (
        <div className="qr-container">
          {qrCodes.map((qr, index) => (
            <div key={index} className="qr-box">
              <p>
                {qr.name}'s Contribution: ₹{contributions[index].toFixed(2)}
              </p>
              <img src={qr.qrCode} alt={`${qr.name}'s QR Code`} /> {/* Fixed the alt tag */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SplitWithFriends;
