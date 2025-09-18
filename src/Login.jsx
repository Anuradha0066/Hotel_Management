import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'; // Custom CSS for styling

const Login = () => {

     const navigate = useNavigate();

  const handleLogin = () => {
    // Your login logic here
    navigate('/dashboard');
  };

  return (
    <div className="login-container">

      <div className="login-box">
        <img
          src="https://www.exceedsoftware.in/assets/login/v2/images/hotels.webp"
          alt="Hotel Background"
          className="login-image"
        />
        <h2>Login To Your Account</h2>
        <p>
          By clicking Login you confirm that you accept the{' '}
          <a href="https://www.exceedsoftware.in/terms-and-conditions.html" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </p>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
           <button onClick={handleLogin}>Log In</button>

        </form>
      </div>
    </div>
  );
};

export default Login;