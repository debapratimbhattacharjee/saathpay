// balance.jsx
import React from "react";
import "./balance.css";

const Balance = () => {
  const transactions = [
    {
      id: 1,
      name: "John",
      type: "received",
      amount: 500,
      date: "12 Jan 2025",
      time: "10:30 AM",
    },
    {
      id: 2,
      name: "Mary",
      type: "sent",
      amount: 250,
      date: "11 Jan 2025",
      time: "3:15 PM",
    },
    {
      id: 3,
      name: "Amazon",
      type: "sent",
      amount: 1200,
      date: "10 Jan 2025",
      time: "1:45 PM",
    },
  ];

  return (
    <div className="balance-page">
      <header className="balance-header">
        <h1>Balance</h1>
      </header>
      <main className="balance-main">
        <section className="balance-summary">
          <div className="balance-card">
            <h2>Total Balance</h2>
            <p className="balance-amount">₹{transactions.reduce((total, t) => total + (t.type === "received" ? t.amount : -t.amount), 0)}</p>
          </div>
        </section>

        <section className="transaction-history">
          <h2>Transaction History</h2>
          <ul className="history-list">
            {transactions.map((transaction) => (
              <li className="history-item" key={transaction.id}>
                <div className="transaction-details">
                  <span className="transaction-name">
                    {transaction.type === "received" ? `${transaction.name} paid you` : `You paid ${transaction.name}`}
                  </span>
                  <span className={`transaction-amount ${transaction.type === "received" ? "positive" : "negative"}`}>
                    ₹{transaction.amount}
                  </span>
                </div>
                <div className="transaction-meta">
                  <span className="transaction-date">{transaction.date}</span>
                  <span className="transaction-time">{transaction.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Balance;
