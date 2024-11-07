import React from "react";
import pic from "/images/ant.jpg"; // Update the path to the image

const Pricing = () => {
  return (


    <div className="pricing-main">
       <div className="pricing-title">
        <h3>Choose your plan</h3>
        <p>Get the best of Craiyon, for personal and commercial use.</p>
      </div>

    <div className="pricing-container">
      <div className="card">
        <img src={pic} alt="Supporter" />
        <h2>Supporter</h2>
        <h3>$12/mo</h3>
        <ul>
          <li> Unlimited images</li>
          <li> All features</li>
          <li> High priority</li>
          <li> No ads</li>
          <li> No watermarks</li>
        </ul>
        <button>Upgrade to Supporter</button>
      </div>

      <div className="card">
        <img src={pic} alt="Professional" />
        <h2>Professional</h2>
        <h3>$24/mo</h3>
        <ul>
          <li> All Supporter features</li>
          <li> Fast image generation</li>
          <li> Highest priority</li>
          <li> Private images*</li>
          <li> Early access to new features</li>
        </ul>
        <button>Upgrade to Professional</button>
      </div>

      <div className="card">
        <img src={pic} alt="Enterprise" />
        <h2>Enterprise</h2>
        <h3>Custom</h3>
        <ul>
          <li> Custom models</li>
          <li> Custom integrations</li>
          <li> Dedicated support</li>
          <li> Private servers</li>
          <li> API Access</li>
          <li> High volume</li>
        </ul>
        <button>Contact us</button>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
