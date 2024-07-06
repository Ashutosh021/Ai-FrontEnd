import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const userId = localStorage.getItem("userEmail");
        const res = await axios.get('https://ai-backend-1azo.onrender.com/api/v1/history', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          params: {
            userId: userId,
          },
        });

        const data = res.data;
        if (data?.status === "success") {
          const formattedData = data.history.reverse().map((item) => ({
            ...item,
            createdAt: new Date(item.createdAt).toLocaleString(),
          }));
          setHistoryData(formattedData);
        } else {
          setError(data.msg || "Failed to fetch history");
        }
      } catch (err) {
        setError(data.msg || "Try Log In Sign up");
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: "#00FFFF" }}>
        Search History
      </h1>
      {error && <p className="text-danger">{error}</p>}
      {historyData.length > 0 ? (
        <ul className="list-group">
          {historyData.map((item, index) => (
            <li key={index} className="list-group-item">
              <p className="mb-1">Search Text: {item.searchText}</p>
              <p className="mb-1">Date and Time: {item.createdAt}</p>
              <p className="mb-1">UserId: {item.userId}</p>
              <img
                src={item.imageUrl}
                alt={item.searchText}
                className="img-thumbnail"
                style={{ maxWidth: "200px" }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted text-center text-light">
          {!error && "No history available || Try Sign up / Log in"}
        </p>
      )}
    </div>
  );
};

export default History;
