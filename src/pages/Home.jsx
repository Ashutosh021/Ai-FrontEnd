import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/home.css";

const Home = () => {
  const divStyle = {
    height: "100vh",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center text-bg-dark"
      style={divStyle}
    >
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3 text-center">
          <h1>Free AI Image Generator</h1>
          <p className="lead">
            Welcome to AI Image Generator! Unleash your creativity with our
            cutting-edge AI technology. Easily generate stunning images from
            text descriptions. Perfect for artists, designers, and content
            creators looking to bring their visions to life. Start creating now
            and transform your ideas into breathtaking visuals effortlessly!
          </p>
          <Link to="./image-generator">
            <p className="btn btn-lg btn-outline-light">Generate Image</p>
          </Link>
        </main>

        <footer className="mt-auto text-white-50 text-center">
          <p>
            Instructor{" "}
            <a
              href="https://linkedin.com/in/likhilesh-balpande-607b0b19b"
              className="text-white"
            >
              Likhilesh Sir
            </a>
            , Developed by{" "}
            <a
              href="https://linkedin.com/in/ashutosh-037463220"
              className="text-white"
            >
              Ashutosh
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
