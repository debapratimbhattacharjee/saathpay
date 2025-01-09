import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SplitExpenses.css'; // Add styles specific to this component
import SplitWithFriends from '../../assets/images/SplitWithFriends.png';
import SplitCustom from '../../assets/images/SplitCustom.png';
import CategorizedSplit from '../../assets/images/CategorizedSplit.png';
import RecurringSplit from '../../assets/images/RecurringSplit.png';
import EventSplit from '../../assets/images/EventSplit.png';

const SplitExpenses = () => {
  const navigate = useNavigate();

  // Function to handle navigation on clicking any option
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="split-expenses-container">
      <h2>Split Expenses</h2>
      <div className="split-icons">
        {/* Split Among Friends/Contacts */}
        <div className="icon" onClick={() => handleNavigation('/splitwithfriends')}>
          <img src={SplitWithFriends} alt="Split with Friends" />
          <p>Split with Friends</p>
        </div>

        {/* Split Custom */}
        <div className="icon" onClick={() => handleNavigation('/splitcustom')}>
          <img src={SplitCustom} alt="Split Custom" />
          <p>Split Custom</p>
        </div>

        {/* Split Recurring Expenses */}
        <div className="icon" onClick={() => handleNavigation('/splitrecurring')}>
          <img src={RecurringSplit} alt="Recurring Expenses" />
          <p>Split Recurring Expenses</p>
        </div>

        {/* Split by Categories */}
        <div className="icon" onClick={() => handleNavigation('/splitbycategory')}>
          <img src={CategorizedSplit} alt="Split by Category" />
          <p>Split by Categories</p>
        </div>

        {/* Event Splitting */}
        <div className="icon" onClick={() => handleNavigation('/eventsplitting')}>
          <img src={EventSplit} alt="Event Splitting" />
          <p>Event Splitting</p>
        </div>
      </div>
    </div>
  );
};

export default SplitExpenses;
