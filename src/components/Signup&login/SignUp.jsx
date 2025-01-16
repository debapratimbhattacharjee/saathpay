import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form>
                <div className="input-box">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className="input-box">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="input-box">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account?{" "}
                <button onClick={() => navigate('/login')}>
                    Login
                </button>
            </p>
        </div>
    );
};

export default SignUp;
