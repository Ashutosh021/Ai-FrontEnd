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
        const res = await axios.get(`https://aibackend-1d3h.onrender.com/api/v1/history`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`,
          },
        });
        const data = res.data;
        if (data?.status === "success") {
          const formattedData = data.history.reverse().map(item => ({
            ...item,
            createdAt: new Date(item.createdAt).toLocaleString()
          }));
          setHistoryData(formattedData);
        } else {
          setError(data.msg || 'Failed to fetch history');
        }
      } catch (err) {
        console.log(err);
        setError('An error occurred while fetching the history');
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">History</h1>
      {error && <p className="text-danger">{error}</p>}
      {historyData.length > 0 ? (
        <ul className="list-group">
          {historyData.map((item, index) => (
            <li key={index} className="list-group-item">
              <p className="mb-1">Search Text: {item.searchText}</p>
              <p className="mb-1">Date and Time: {item.createdAt}</p>
              <img src={item.imageUrl} alt={item.searchText} className="img-thumbnail" style={{ maxWidth: "200px" }} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted text-center">{!error && "No history available"}</p>
      )}
    </div>
  );
};

export default History;
