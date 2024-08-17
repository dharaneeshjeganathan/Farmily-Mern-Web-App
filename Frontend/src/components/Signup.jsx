import React from 'react';
// import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
    return ( 
        <div className="box">
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" placeholder="@username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="example@email.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="********" />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    </div>
    );
};

export default Signup;