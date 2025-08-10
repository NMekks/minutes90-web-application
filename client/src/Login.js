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
    <div className="container" style={{ maxWidth: "500px" }}>
      <h2>Log In</h2>
      <h5>Sign in with your account</h5>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-floating mt-3">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
        </div>
        <div className="input-group mt-3">
          <div className="form-floating">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
          </div>
          <span className="input-group-text">
            <i
              className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            ></i>
          </span>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary col-3" type="submit">
            Log in
          </button>
        </div>
        <div className="mt-3">
          <p>
            Forgot your password? <a href="/forgot-password">Click here</a>
          </p>
        </div>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Login;
