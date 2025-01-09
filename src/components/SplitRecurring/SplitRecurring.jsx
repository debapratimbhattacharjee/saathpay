import React, { useState } from "react";
import "./SplitRecurring.css";

const SplitRecurring = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: "", amount: "" });

  const handleAddExpense = () => {
    if (!newExpense.name || !newExpense.amount) {
      alert("Please provide both an expense name and amount.");
      return;
    }
    setExpenses([...expenses, { ...newExpense, amount: parseFloat(newExpense.amount) }]);
    setNewExpense({ name: "", amount: "" });
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);
  };

  return (
    <div className="recurring-expenses-container">
      <h2>Monthly Recurring Expenses</h2>

      {/* Add New Expense */}
      <div className="add-expense-form">
        <input
          type="text"
          placeholder="Expense Name (e.g., Rent)"
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount (e.g., 1000)"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      {/* Display Expenses */}
      <div className="expenses-list">
        <h3>Your Expenses</h3>
        <table>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.amount.toFixed(2)}</td>
                </tr>
              ))
            ) : (
                <tr>
                <td colSpan="2" style={{ color: "white", textAlign: "center" }}>
                  No expenses added yet.
                </td>
              </tr>
              
            )}
          </tbody>
        </table>
      </div>

      {/* Total Amount */}
      <div className="total-expenses">
        <h3>Total Monthly Amount: ₹{calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default SplitRecurring;
