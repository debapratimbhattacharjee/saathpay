import React from 'react'
import './StockWork.css'

const StockWork = () => {
    return (
        <>
            <section className="mid_section p-5">
                <div className="container-fluid">
                    <h2 className="text-center mb-4 heading">How does SaathPay work?</h2>
                    <div className="row text-center p-sm-5 ">
                        <div className="col-lg-3">
                            <img src="https://your-image-link.com/join.png" className="img-fluid svg" alt="Responsive image" />
                            <h3>Join and Create Groups</h3>
                            <p>Invite friends or family to join your SaathPay group and start managing shared expenses together.</p>
                        </div>
                        <div className="col-lg-3">
                            <img src="https://your-image-link.com/track.png" className="img-fluid svg" alt="Responsive image" />
                            <h3>Track Expenses</h3>
                            <p>Keep track of your spending, categorize expenses, and see where your money is going.</p>
                        </div>
                        <div className="col-lg-3">
                            <img src="https://your-image-link.com/settle.png" className="img-fluid svg" alt="Responsive image" />
                            <h3>Settle Up</h3>
                            <p>Instantly calculate who owes what and settle your balances in a few taps.</p>
                        </div>
                        <div className="col-lg-3">
                            <img src="https://your-image-link.com/trigger.png" className="img-fluid svg" alt="Responsive image" />
                            <h3>Trigger Expense Alerts</h3>
                            <p>Get notifications when an expense is added, and track your real-time spending.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home">
                <img src="https://your-image-link.com/expenses.png" alt="img1" className="score" />
            </section>
        </>
    )
}

export default StockWork
