import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/history.scss'

const ImageHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const res = await axios.get('https://ai-backend-1azo.onrender.com/image/history', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          }
        });
        setHistory(response.data.history);
      } catch (err) {
        setError("Failed to fetch history. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="image-history-container">
      <h1 className="history-title">Image Generation History</h1>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <ul className="history-list">
          {history.map((item) => (
            <li key={item._id} className="history-item">
              <p className="item-text">{item.searchText}</p>
              <img
                src={item.imageUrl}
                alt={item.searchText}
                className="history-image"
              />
              <p className="item-date">{new Date(item.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageHistory;
