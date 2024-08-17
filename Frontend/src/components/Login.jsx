import React from 'react';
// import './Login.css'; // Import the CSS file for styling
const Login = () => {
    return (
        <div className="box">
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" placeholder="example@mail.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="********" />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;