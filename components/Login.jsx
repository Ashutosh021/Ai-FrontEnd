import React, { useState } from "react";
import "../styles/login.scss"; // Import the SCSS file for styling
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Important for sending cookies
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        localStorage.setItem("authToken",data.token);
        setFormData({ email: "", password: "" });
        window.location.href = "/"; // Redirect to home page on success
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <Link to="/signup">
          <button type="button" className="signup-button">
            Signup
          </button>
        </Link>
      </form>
      {message && (
        <p
          className={`message ${
            message.includes("Error") ? "error" : "success"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;