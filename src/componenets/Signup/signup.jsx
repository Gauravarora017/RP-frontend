import React from 'react';
import './signup.css'; // Make sure to have your CSS file named accordingly

const SignUp = () => {
  return (
    <div className="container">
      <form id="signup-form" className="form">
        <h2>Create Account</h2>
        <label className="label name">Name</label>
        <input type="text" id="signup-name" placeholder="Name" required />
        <label className="label email">Email</label>
        <input type="email" id="signup-email" placeholder="Email" required />
        <label className="label password">Password</label>
        <input type="password" id="signup-password" placeholder="Password" required />
        <label className="remember-me-label">
          <input type="checkbox" className="remember-me" /> Remember Me
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="login.html">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
