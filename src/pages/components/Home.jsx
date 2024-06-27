import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="text-center " style={{ color: "#00FFFF" }}>
          <h1>Free AI Image Generator</h1>
          <div class="text-container">
            <p className="px-5 lead text-light text-xl-center">
              Welcome to AI Image Generator! Unleash your creativity with our
              cutting-edge AI technology.<br/><br/> Start creating now and transform your
              ideas into breathtaking visuals effortlessly!
            </p>
          </div>

          <Link to="./image-generator">
            <button
              className="btn mx-3"
              style={{
                backgroundColor: "crimson",
                color: "#FFFFFF",
                border: "2px solid #00FF00",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (
                (e.currentTarget.style.backgroundColor = "#FFFF00"),
                (e.currentTarget.style.color = "crimson")
              )}
              onMouseLeave={(e) => (
                (e.currentTarget.style.backgroundColor = "crimson"),
                (e.currentTarget.style.color = "#FFFF00")
              )}
            >
              Generate Image
            </button>
          </Link>
          <div className="photos container">
            <img src="https://loremflickr.com/180/180/humans" className="p-2" />
            <img src="https://loremflickr.com/180/180/animal" className="p-2" />
            <img src="https://loremflickr.com/180/180/fruit" className="p-2" />
          </div>
        </main>

        <footer className="mt-5 text-white-50 text-center">
          <p>
            Developed by{" "}
            <a
              href="https://linkedin.com/in/ashutosh-037463220"
              className="text-white"
            >
              Ashutosh
            </a>
            {"  "}under {"  "}
            <a
              href="https://linkedin.com/in/likhilesh-balpande-607b0b19b"
              className="text-white"
            >
              Likilesh Sir's
            </a>
            {"  "} guidance.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
