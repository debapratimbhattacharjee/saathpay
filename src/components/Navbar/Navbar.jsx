import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../../assets/images/logo1.png';

const Navbar = () => {
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    useEffect(() => {
        // Check if OTP verification status is stored in localStorage
        const otpStatus = localStorage.getItem('otpVerified');
        if (otpStatus === 'true') {
            setIsOtpVerified(true);
        }
    }, []);

    return (
        <div>
            <div className="logo px-sm-5 px-2">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    {/* Logo and Home Link */}
                    <Link className="navbar-brand" to={isOtpVerified ? "/money-transfer" : "/"}>
                        <div className="logo-container col-lg-6">
                            <img src={logo1} alt="Logo" className="logo-image" />
                        </div>
                    </Link>

                    {/* Navbar Toggler for Mobile */}
                    <button
                        style={{ backgroundColor: "#d1d1d1" }}
                        id="nav-toggle-button"
                        className="navbar-toggler collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links and Buttons */}
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto menu" style={{ textAlign: "left" }}>
                            <li className="nav-item active">
                                <Link className="nav-link" to={isOtpVerified ? "/money-transfer" : "/"}>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/our-team">Our Team</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/faq">FAQs</Link>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="mailto:Hello@stockpe.tech">Contact</a>
                            </li>
                        </ul>

                        {/* Sign Up and Login Buttons */}
                        <div className="form-inline px-5">
                            <Link to="/sign-up" className="btn btn-primary px-4">
                                Sign Up
                            </Link>
                            <Link to="/login" className="btn btn-secondary px-4 ml-2">
                                Login
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
