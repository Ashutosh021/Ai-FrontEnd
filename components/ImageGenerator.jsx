import React, { useState } from "react";
import axios from "axios";
import "../styles/image-generator.scss"; // Import SCSS file for styling

const ImageGenerator = () => {
  const [searchText, setSearchText] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      const response = await axios.post(
        "https://ai-backend-1azo.onrender.com/image/generate-image",
        { searchText },
        { withCredentials: true } // Include credentials (cookies) in the request
      );
      setImageUrl(response.data.imageUrl); // Sets the image URL returned by the backend
    } catch (error) {
      console.error("Error generating image:", error);
      setError("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
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
          <div className="spinner"></div>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="Generated"
            className="generated-image"
          />
        ) : (
          <p>No image generated yet.</p>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
