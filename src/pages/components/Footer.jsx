import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 style={{ color: "#00FFFF" }}>AI Image Generator</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#pages" className="text-light">Pages</a></li>
              <li><a href="#blog" className="text-light">Blog</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
              <li><a href="#how-to-use" className="text-light">How to use</a></li>
              <li><a href="#roadmap" className="text-light">Roadmap</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#image-generator" className="text-light">Image Generator</a></li>
              <li><a href="#video-generator" className="text-light">Video Generator</a></li>
              <li><a href="#text-generator" className="text-light">Text Generator</a></li>
              <li><a href="#code-generator" className="text-light">Code Generator</a></li>
              <li><a href="#education-feedback" className="text-light">Education Feedback</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <address>
              <a>KIET Group of Institutions, Uttar Pardesh, India</a><br/>
              <a>Email: mail.ashutosh246@gmail.com</a><br/>
              <a>Phone: 6398529296</a>
            </address>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-12 text-center">
            <a href="#privacy-policy" className="text-light mx-2">Privacy Policy</a>
            <a href="#terms-and-conditions" className="text-light mx-2">Terms And Condition</a>
            <a href="#contact-us" className="text-light mx-2">Contact Us</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-3">
            <p>Copyright © 2024 <a href='https://www.linkedin.com/in/ashutosh-037463220'>Ashutosh</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
