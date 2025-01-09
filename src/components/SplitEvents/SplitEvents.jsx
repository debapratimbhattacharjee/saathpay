import React, { useState } from 'react';
import './SplitEvents.css'; // Ensure the CSS file is linked properly

const SplitEvents = () => {
  const [eventName, setEventName] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [events, setEvents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [groupMembers, setGroupMembers] = useState('');

  // Handle adding a group
  const handleAddGroup = () => {
    if (groupName && groupMembers) {
      const memberList = groupMembers.split(',').map((member) => member.trim());
      setGroups((prevGroups) => [
        ...prevGroups,
        { groupName, memberList }
      ]);
      setGroupName('');
      setGroupMembers('');
    }
  };

  const handleAddEvent = () => {
    if (eventName && expenseName && amount) {
      const eventExpenses = groups.map(group => {
        const splitAmount = parseFloat(amount) / group.memberList.length;
        return {
          name: expenseName,
          amount: parseFloat(amount),
          groupName: group.groupName,
          splitAmount,
          memberList: group.memberList,
          receipt
        };
      });

      const event = { eventName, expenses: eventExpenses };

      setEvents((prevEvents) => [...prevEvents, event]);

      setEventName('');
      setExpenseName('');
      setAmount('');
      setParticipants('');
      setReceipt(null);
      setGroups([]);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setReceipt(file);
  };

  return (
    <div className="split-events-container">
      <h2>Event Planner - Split Expenses</h2>

      {/* Event Name Input */}
      <div className="input-group">
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Enter event name (e.g., Road Trip)"
        />
      </div>

      {/* Group Creation */}
      <div className="input-group">
        <label>Group Name:</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Group name (e.g., Friends, Family)"
        />
      </div>

      <div className="input-group">
        <label>Group Members (comma separated):</label>
        <input
          type="text"
          value={groupMembers}
          onChange={(e) => setGroupMembers(e.target.value)}
          placeholder="Friend 1, Friend 2, Phone Number"
        />
      </div>

      <button className="add-group-btn" onClick={handleAddGroup}>
        Add Group
      </button>

      {/* Show added groups */}
      <div className="group-list">
        {groups.length > 0 && (
          <ul>
            {groups.map((group, index) => (
              <li key={index}>
                {group.groupName}: {group.memberList.join(', ')}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Expense Name Input */}
      <div className="input-group">
        <label>Expense Name:</label>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Expense Name (e.g., Gas, Hotel)"
        />
      </div>

      {/* Amount Input */}
      <div className="input-group">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in ₹"
        />
      </div>

      {/* Receipt Upload */}
      <div className="input-group">
        <label>Upload Receipt:</label>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFileUpload}
        />
      </div>

      {/* Button to add event */}
      <button className="add-event-btn" onClick={handleAddEvent}>
        Add Event Expense
      </button>

      {/* Displaying Events */}
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.eventName}</h3>
            {event.expenses.map((expense, expIndex) => (
              <div key={expIndex} className="expense-card">
                <p><strong>Expense:</strong> {expense.name}</p>
                <p><strong>Amount:</strong> ₹{expense.amount}</p>
                <p><strong>Group:</strong> {expense.groupName}</p>
                <p><strong>Split Among:</strong> {expense.memberList.join(', ')}</p>
                <p><strong>Split Amount:</strong> ₹{expense.splitAmount.toFixed(2)}</p>
                {expense.receipt && (
                  <p>
                    <strong>Receipt:</strong> <a href={URL.createObjectURL(expense.receipt)} target="_blank" rel="noopener noreferrer">View Receipt</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitEvents;
