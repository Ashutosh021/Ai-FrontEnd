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
      className="d-flex justify-content-center align-items-center"
    >
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main
          className="text-center "
          style={{ color: "rgb(189, 28, 28)" }}
        >
          <h1>Free AI Image Generator</h1>
          <p className="px-5 lead text-light text-xl-center">
            Welcome to AI Image Generator! Unleash your creativity with our
            cutting-edge AI technology.Start creating now
            and transform your ideas into breathtaking visuals effortlessly!
          </p>
          <p className="px-1 text-bg-primary"> Want To Try ::  Email - test@gmail.com || password : test1234</p>
          <Link to="./image-generator">
            <p className="btn btn-lg btn-outline-light" style={{}}>
              Generate Image
            </p>
          </Link>
          <div className="photos container">
            <img src="https://loremflickr.com/180/180/humans" className="p-2"/>
            <img src="https://loremflickr.com/180/180/animal"  className="p-2"/>
            <img src="https://loremflickr.com/180/180/fruit"  className="p-2"/>
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
