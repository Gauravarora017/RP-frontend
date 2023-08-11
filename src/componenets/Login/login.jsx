import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="container">
      <form id="login-form" className="form">
        <h2>Login to your account</h2>
        <label className="label email">Email</label>
        <input type="email" id="login-email" placeholder="Email" required />
        <label className="label password">Password</label>
        <input type="password" id="login-password" placeholder="Password" required />
        <label className="remember-me-label">
          <input type="checkbox" className="remember-me" /> Remember Me
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        New to MyApp? <a href="signup.html">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
