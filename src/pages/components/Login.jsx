import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/auth.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkUser = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading indicator
    try {
      const res = await axios.post(`https://aibackend-1d3h.onrender.com/api/v1/auth/login`, {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = res.data;
      if (data.status === "success") {
        localStorage.setItem("authToken", data.data.token);
        localStorage.setItem("userEmail", data.data.user.email);
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => navigate('/')
        });
      } else {
        toast.error(data.msg, {
          position: "top-right",
          autoClose: 3000
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred while logging in", {
        position: "top-right",
        autoClose: 2000
      });
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="authBox">
      <div id="signup" className="container">
        <h2 style={{ color: "#00FFFF", backgroundColor:"#001f3f", padding:"5px", borderRadius:"5px"}}>Log In</h2>
        <h4>Try Out With</h4> 
        <div className="mx-4">
        <p><b style={{color:"#00008B"}}>Email:</b> <i>test@gmail.com </i></p>
        <p><b style={{color:"#00008B"}}>pass :</b> <i>test1234</i></p>
        </div>
        <form onSubmit={checkUser}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <Link to="/signup">
            <button type="button">SignUp</button>
          </Link>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
