import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post('/api/login', { email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An unexpected error occurred.');
    }
  };

  return (
    // This is now our main card container with a max-width and shadow
    <div className="container auth-card-container">
      <div className="row g-0">

        <div className="col-md-6 d-none d-md-block">
          <img 
            src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop" 
            alt="Login Visual" 
            className="img-fluid" 
            id="side-img" 
          />
        </div>

        <div className="col-12 col-md-6 my-auto p-4">
          <h2>Log In</h2>
          <h5>Sign in with your account</h5>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-floating mt-3">
              <input type="email" id="email" placeholder="Enter your email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="email">Email:</label>
            </div>

            <div className="input-group mt-3">
              <div className="form-floating">
                <input type={showPassword ? 'text' : 'password'} id="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label htmlFor="password">Password:</label>
              </div>
              <span className="input-group-text" style={{ cursor: 'pointer' }}>
                <i id="togglePassword" className={showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'} onClick={() => setShowPassword(!showPassword)}></i>
              </span>
            </div>

            <div className="mt-3">
              <button className="btn btn-color" type="submit">Log in</button>
            </div>
            
            {message && <p className="mt-3 text-danger">{message}</p>}

            <div className="mt-3">
              <p>Don't have an account? <Link to="/register">Register now!</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;