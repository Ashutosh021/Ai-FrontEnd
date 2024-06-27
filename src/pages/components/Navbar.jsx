import React, { useEffect, useState } from "react";
import "../styles/navbar.scss";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currUser = localStorage.getItem("userEmail");
    if (currUser) {
      setUser(currUser);
    } else {
      setUser("Login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser("Login");
    navigate("/login");
  };

  const handleUserClick = () => {
    navigate("/login");
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FFFF00" : "white",
      textDecoration: "none",
    };
  };

  return (
    <div className="main">
      <div className="left" style={{ listStyle: "none" }}>
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
      <div className="right d-flex justify-content-between align-items-center" style={{ flexBasis: "20%" }}>
        <p className="m-2">{user}</p>
        <div className="user-icon mx-2" style={{ color: "red", cursor: "pointer" }}>
          <button onClick={handleLogout} className="btn btn-sm btn-outline-danger" style={{ marginRight: "10px" }}>
            Logout
          </button>
          <BiUser size={35} onClick={handleUserClick} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
