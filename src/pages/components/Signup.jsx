import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/auth.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addNewUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
        toast.success("Signup successful!", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => navigate("/login")
        });
      } else {
        toast.error(data.msg, {
          position: "top-right",
          autoClose: 3000
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred while signing up", {
        position: "top-right",
        autoClose: 3000
      });
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="authBox">
      <div id="signup" className="container">
        <h2 style={{ color: "#00FFFF", backgroundColor:"#001f3f", padding:"5px", borderRadius:"5px"}}>Create Your Account</h2>
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
          <button type="submit" disabled={isLoading}>
          {isLoading?"Sign up in progress ...":"Sign up"}
          </button>
          <Link to="/login">
            <button type="button">Already a User?</button>
          </Link>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
