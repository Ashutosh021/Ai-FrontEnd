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
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/image/history`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          }
        });
        if (!response.data.history) {
          setError("No history available.");
        } else {
          setHistory(response.data.history);
        }
      } catch (err) {
        setError("Failed to fetch history. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const downloadImage = (url, filename) => {
    axios({
      url,
      method: "GET",
      responseType: "blob", // ensures the response data is treated as a Blob
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename); // sets the download attribute
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // clean up
      })
      .catch(() => {
        alert("Failed to download image.");
      });
  };

  // Delete image handler
  const deleteImage = async (postId) => {
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/image/delete/${postId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      // Remove the deleted image from the UI
      setHistory(history.filter(item => item._id !== postId));
      alert("Image deleted successfully.");
    } catch (err) {
      alert("Failed to delete image.");
    }
  };

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
              <p className="item-text">Prompt :- {item.searchText}</p>
              <img
                src={item.imageUrl}
                alt={item.searchText}
                className="history-image"
              />
              <button
                className="download-button"
                onClick={() => downloadImage(item.imageUrl, `${item.searchText.replace(/\s+/g, '_')}.jpg`)}
              >
                Download
              </button>
              <button
                className="delete-button"
                onClick={() => deleteImage(item._id)}
              >
                Delete
              </button>
              <p className="item-date">{new Date(item.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageHistory;
