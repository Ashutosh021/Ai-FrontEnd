import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import ImageGenerator from "../components/ImageGenerator";
import ImageHistory from "../components/ImageHistory";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";
// Styles
import "../styles/app.scss";
import "../styles/navbar.scss";
import "../styles/home.scss";
import "../styles/about.scss";
import "../styles/pricing.scss";
import "../styles/contact.scss";
import "../styles/footer.scss";
import "../styles/login.scss";
import "../styles/signup.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element=<Signup />></Route>
          <Route path="/login" element=<Login />></Route>

          <Route
            path="/image-generator"
            element={
              <ProtectedRoute>
                <ImageGenerator />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <ImageHistory />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
