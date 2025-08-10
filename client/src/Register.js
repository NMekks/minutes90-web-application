import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('player');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('/api/register', { email, password, role });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An unexpected error occurred during registration.');
      }
    }
  };

  return (
    <div className="container" style={{ maxWidth: '500px' }}>
      <h2>Create Account</h2>
      <h5>Join the minutes90 network</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mt-3">
          <input type="email" id="reg_email" placeholder="Enter your email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="reg_email">Email:</label>
        </div>
        <div className="form-floating mt-3">
          <select id="reg_role" className="form-select" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="player">Player</option>
            <option value="club">Club</option>
            <option value="agent">Agent</option>
            <option value="scout">Scout</option>
          </select>
          <label htmlFor="reg_role">I am a:</label>
        </div>
        <div className="form-floating mt-3">
          <input type="password" id="reg_password" placeholder="Enter your password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label htmlFor="reg_password">Password:</label>
        </div>
        <div className="form-floating mt-3">
          <input type="password" id="reg_confirm_password" placeholder="Confirm your password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <label htmlFor="reg_confirm_password">Confirm Password:</label>
        </div>
        <div className="mt-3">
          <button className="btn btn-success col-4" type="submit">Register</button>
        </div>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default Register;