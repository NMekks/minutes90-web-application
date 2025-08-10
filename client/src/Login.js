import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("/api/login", { email, password });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An unexpected error occurred during login.");
      }
    }
  };

  return (
    <div className="container d-flex px-5 align-items-center justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 rounded-2 shadow-lg">

        {/* --- Image Column --- */}
        <div className="col g-0">
          <div className="card border-0 h-100">
            <img 
              src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Login Visual" 
              className="img-fluid" 
              id="side-img" 
            />
          </div>
        </div>

        {/* --- Form Column --- */}
        <div className="col my-auto p-4">
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
              {/* Applying your custom btn-color class */}
              <button className="btn btn-color col-3" type="submit">
                Log in
              </button>
            </div>
            
            {message && <p className="mt-3 text-danger">{message}</p>}

            <div className="mt-3">
              <p>Don't have an account? Register now!</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
