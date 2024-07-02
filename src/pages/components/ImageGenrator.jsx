import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/image.scss";
import { useState } from "react";
import axios from "axios";
import Signup from "./Signup";

const ImageGenerator = () => {
  const [searchText, setSearchText] = useState("");
  const [imageSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = async () => {
    if (!localStorage.getItem("authToken")) {
      alert("Please login first!"); // Alert message if not logged in
      <Signup />;
      return;
    }

    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
      const userEmail = localStorage.getItem("userEmail");
      const res = await axios.post(
        `https://aibackend-1d3h.onrender.com/api/v1/images`,
        {
          searchText: searchText,
          userEmail:userEmail
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = res.data;
      if (data?.status === "success") {
        setImgSrc(data.data.imageUrl);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="input-group mb-3">
            <input
              onChange={handleChange}
              value={searchText}
              type="text"
              className="form-control"
              placeholder="What do you want to see..."
            />
            <div className="input-group-append">
              <button
                onClick={handleClick}
                className="btn mx-3"
                style={{
                  backgroundColor: "crimson",
                  color: "#FFFFFF",
                  border: "2px solid #00FF00",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight:"bold",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FFFF00",
                    e.currentTarget.style.color = "crimson")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "crimson",
                    e.currentTarget.style.color = "#FFFF00")
                }
              >
                Generate Image
              </button>
            </div>
          </div>
          <div className="box">
            {isLoading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              imageSrc && <img src={imageSrc} alt="Generated result" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
