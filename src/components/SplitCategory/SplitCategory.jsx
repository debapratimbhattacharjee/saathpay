import React, { useState } from 'react';
import './SplitCategory.css'; // Ensure this CSS is properly linked

const SplitCategory = () => {
  const [category, setCategory] = useState('Travel');
  const [newCategory, setNewCategory] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [friends, setFriends] = useState('');
  const [contributions, setContributions] = useState(''); // For custom contributions
  const [expenses, setExpenses] = useState({
    Travel: [],
    'Food & Dining': [],
    Home: [],
  });

  const handleAddExpense = () => {
    if (expenseName && amount) {
      // If there are friends, split the amount or add custom contributions
      let friendList = [];
      let customContributions = [];
      if (friends) {
        friendList = friends.split(',').map((friend) => friend.trim());
        if (contributions) {
          customContributions = contributions.split(',').map((contribution) => parseFloat(contribution.trim()));
        }
      }

      let totalContribution = 0;
      if (customContributions.length === 0) {
        totalContribution = parseFloat(amount) / friendList.length || parseFloat(amount);
      } else {
        totalContribution = customContributions.reduce((acc, curr) => acc + curr, 0);
      }

      setExpenses((prevExpenses) => {
        return {
          ...prevExpenses,
          [category]: [
            ...prevExpenses[category],
            { name: expenseName, amount: parseFloat(amount), friendList, splitAmount: totalContribution, customContributions },
          ],
        };
      });

      setExpenseName('');
      setAmount('');
      setFriends('');
      setContributions('');
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddNewCategory = () => {
    if (newCategory && !expenses[newCategory]) {
      setExpenses((prevExpenses) => ({
        ...prevExpenses,
        [newCategory]: [],
      }));
      setCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div className="split-category-container">
      <h2>Split Expenses by Category</h2>

      {/* Dropdown to select category */}
      <div className="category-select">
        <label>Select Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          {Object.keys(expenses).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
          <option value="custom">Create New Category</option>
        </select>
      </div>

      {/* Input for new category name */}
      {category === 'custom' && (
        <div className="category-select">
          <label>Enter New Category Name:</label>
          <input
            type="text"
            value={newCategory}
            onChange={handleNewCategoryChange}
            placeholder="Enter custom category name"
          />
          <button onClick={handleAddNewCategory}>Add Category</button>
        </div>
      )}

      {/* Input for expense name and amount */}
      <div className="expense-input">
        <label>Expense Name:</label>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="e.g., Dinner, Taxi"
        />
      </div>
      <div className="expense-input">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in ₹"
        />
      </div>

      {/* Input for friends or phone numbers */}
      <div className="expense-input">
        <label>Friends/Phone Numbers (comma separated):</label>
        <input
          type="text"
          value={friends}
          onChange={(e) => setFriends(e.target.value)}
          placeholder="Friend 1, Friend 2, Phone Number"
        />
      </div>

      {/* Input for custom contributions */}
      {friends && (
        <div className="expense-input">
          <label>Custom Contributions (comma separated):</label>
          <input
            type="text"
            value={contributions}
            onChange={(e) => setContributions(e.target.value)}
            placeholder="e.g., 100, 200, 300"
          />
        </div>
      )}

      {/* Button to add expense */}
      <button className="add-expense-btn" onClick={handleAddExpense}>
        Add Expense
      </button>

      {/* Display categorized expenses with split information */}
      <div className="categorized-expenses">
        {Object.keys(expenses).map((cat) => (
          <div key={cat} className="category">
            <h3>{cat}</h3>
            <table>
              <thead>
                <tr>
                  <th>Expense</th>
                  <th>Amount (₹)</th>
                  <th>Split Among</th>
                  <th>Split Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {expenses[cat].map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.name}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.friendList.join(', ')}</td>
                    <td>
                      {expense.customContributions.length > 0
                        ? expense.customContributions.join(', ')
                        : expense.splitAmount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitCategory;
