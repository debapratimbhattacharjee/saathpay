import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <div className="input-box">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className="input-box">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account?{" "}
                <button onClick={() => navigate('/sign-up')}>
                    Sign Up
                </button>
            </p>
        </div>
    );
};

export default Login;
