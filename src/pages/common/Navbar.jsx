import React, { useEffect, useState } from "react";
import "./commonStyles/navbar.css";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [user, setUser] = useState("Login/SignUp");

  useEffect(() => {
    const currUser = localStorage.getItem('userEmail');
    if (currUser) {
      setUser(currUser);
    }
  }, []);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
    };
  };

  return (
    <div className="main">
      <div className="left">
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
        <NavLink style={navLinkStyles} to="/about">
          About
        </NavLink>
      </div>
      <div className="right">
        <p>{user}</p>
        <div className="user-icon" style={{ color: "red" }}>
          <NavLink style={navLinkStyles} to="/signup">
            <BiUser size={24} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
