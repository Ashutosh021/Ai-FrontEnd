import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/image-generator.scss"; // Import SCSS file for styling

const ImageGenerator = () => {
  const [searchText, setSearchText] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("");

  const loadingMessages = [
    "Prompt received",
    "Model activated",
    "Image generation in progress",
    "Generating...",
    "This may take a while, please wait..."
  ];

  useEffect(() => {
    let messageIndex = 0;
    let interval;

    if (loading) {
      interval = setInterval(() => {
        setLoadingMessage(loadingMessages[messageIndex]);
        messageIndex = (messageIndex + 1) % loadingMessages.length;
      }, 800); // Change message every 1 second
    } else {
      setLoadingMessage("");
    }

    return () => clearInterval(interval);
  }, [loading]);

  const generateImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!searchText.trim()) {
      setError("Please enter a description.");
      setLoading(false);
      return;
    }

    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/image/generate-image`,
        { searchText },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setImageUrl(response.data.imageUrl); // Sets the image URL returned by the backend
    } catch (error) {
      console.error("Error generating image:", error);
      setError("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
      setSearchText("");
    }
  };

  const clearImage = () => {
    setSearchText("");
    setImageUrl(null);
    setError(null);
  };

  return (
    <div className="img-main">
      <form className="img-form" onSubmit={generateImage}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter description"
          className="img-input"
          disabled={loading}
        />
        <button type="submit" className="img-button" disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
        <button 
          type="button" 
          onClick={clearImage} 
          className="clear-button"
          disabled={loading}
        >
          Clear
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      <div className="generated-img">
        {loading ? (
          <div>
            <div className="spinner"></div>
            <p className="loading-message">{loadingMessage}</p>
          </div>
        ) : imageUrl ? (
          <img src={imageUrl} alt="Generated" className="generated-image" />
        ) : (
          <p>No image generated yet.</p>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
