import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "../styles/profile.scss";

const Profile = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null); 
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/getuser`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            }
          }
        );
        setUserData(response.data); 
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user data.");
        navigate('/login')
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : userData ? (
        <div className="user-data">
          <h2>User Details:</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p className="error-message">No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
