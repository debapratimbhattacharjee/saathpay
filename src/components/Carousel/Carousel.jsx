import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import './Carousel.css';

import logo1 from '../../assets/images/logo1.png';
import coinAnimation from '../../assets/images/coinAnimatio.json'; // Make sure the path is correct

const Carousel = () => {
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate(); // Navigation hook

    const handleChange = (e) => {
        const { value } = e.target;
        setMobile(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/verify-otp'); // Navigate to the OTP page
    };

    // Lottie options for the coin animation
    const coinAnimationOptions = {
        loop: true,
        autoplay: true, 
        animationData: coinAnimation, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="section mt-sm-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="section1 col-lg-6">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active" style={{ textAlign: 'left' }}>
                                    <h2>Manage Your Expenses with <span>SaathPay</span></h2>
                                    <p>Split bills easily, track group expenses, and settle payments effortlessly.</p>
                                </div>
                                <div className="carousel-item" style={{ textAlign: 'left' }}>
                                    <h2>Keep Track of Group <span>Expenses</span></h2>
                                    <p>Manage shared expenses with friends, roommates, or colleagues all in one place.</p>
                                </div>
                                <div className="carousel-item" style={{ textAlign: 'left' }}>
                                    <h2>Settle Payments <span>Hassle-Free</span></h2>
                                    <p>Send and receive payments directly while keeping track of who owes whom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="form_area" id="myDIV">
                            <form className="d-flex" id="contactForm" onSubmit={handleSubmit}>
                                <input
                                    type="number"
                                    className="form-control number"
                                    placeholder="Phone number"
                                    name="mobile"
                                    pattern="[6789][0-9]{9}"
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className="get-started-btn">
  Get Started
</button>

                            </form>
                        </div>
                    </div>

                    {/* Coin Animation */}
                    <div className="coin-animation-container">
                        <Lottie options={coinAnimationOptions} height={800} width={1000} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
