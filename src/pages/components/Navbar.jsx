import React, { useEffect, useState } from "react";
import "../styles/navbar.scss";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(""); // Initialize user state with an empty string

  useEffect(() => {
    const currUser = localStorage.getItem('userEmail');
    if (currUser) {
      setUser(currUser);
    } else {
      setUser("Login/SignUp"); // Set default message if user is not available
    }
  }, []);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FFFF00" : "white",
      textDecoration: "none"
    };
  };

  return (
    <div className="main">
      <div className="left" style={{listStyle:"none"}}>
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="/image-generator">
          Image Generator
        </NavLink>
        <NavLink style={navLinkStyles} to="/history">
          History
        </NavLink>
        <NavLink style={navLinkStyles} to="/contact">
          Contact
        </NavLink>
        <NavLink style={navLinkStyles} to="/pricing">
          Pricing
        </NavLink>
      </div>
      <div className="right">
        <p className="m-2">{user}</p>
        <div className="user-icon mx-2" style={{ color: "red" }}>
          <NavLink style={navLinkStyles} to="/login">
            <BiUser size={24} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
