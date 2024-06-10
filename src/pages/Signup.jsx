import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles/auth.css'

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addNewUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://aibackend-1d3h.onrender.com/api/v1/auth/signup`, {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.data;
      if (data.status === "success") {
        navigate("/login");
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while signing up");
    }
  };

  return (
    <div className="authBox">
      <div id="signup" className="container">
        <h2>Create Your Account</h2>
        <form onSubmit={addNewUser}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">SignUp</button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
