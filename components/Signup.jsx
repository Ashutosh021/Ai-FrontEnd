import React, { useState } from 'react';
import '../styles/signup.scss';  // Import the SCSS file for styling
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ai-backend-1azo.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        localStorage.setItem("authToken",data.token);
        setFormData({ name: '', email: '', password: '' });
        window.location.href = "/";
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <button type="submit" className="signup-button">Signup</button>
        <Link to="/login">
          <button type="button" className="login-button">
            Login
          </button>
        </Link>
      </form>
      {message && <p className={`message ${message.includes('Error') ? 'error' : 'success'}`}>{message}</p>}
    </div>
  );
};

export default Signup;
