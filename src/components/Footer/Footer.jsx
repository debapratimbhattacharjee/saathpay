import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Ensure the correct CSS file is applied

const Footer = () => {
    return (
        <footer className="footer p-sm-5 p-3">
            <div className="footer-navigation">
                <div className="nav-item">
                    <Link to="/splitcustom">Split Expense</Link>
                </div>
                <div className="nav-item">
                    <Link to="/qr-scanner">Scan&Pay</Link>
                </div>
                <div className="nav-item">
                    <Link to="/balance">History</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
