import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pricing = () => {
  return (
    <div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4 " style={{color:"#00FFFF"}}>Pricing plans for everyone</h1>
        <p className="lead text-white">Select a plan that suits your needs. Get started today!</p>
      </div>

      <div className="container ">
        <div className="card-deck mb-3  d-flex justify-content-between flex-wrap">
          {/* Basic Plan */}
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal text-center">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">Free <small className="text-muted">/ year</small></h1>
              <ul className="list-unstyled text-left mt-3 mb-4">
                <li>3-5 day turnaround</li>
                <li>6+ Naive development</li>
                <li>5+ Task delivered one-by-one</li>
                <li>AI Blog Updates via dashboard & Slack</li>
                <li>Advance Updates via dashboard & Slack</li>
              </ul>
              <div className="text-center">
              <button type="button" className="btn btn-lg btn-outline-primary mx-auto">Get Started</button>
              <br/>
              <small className="text-muted ">Limited Offer</small>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal text-center">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">$499 <small className="text-muted">/ year</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>7-9 day turnaround</li>
                <li>6+ Naive development</li>
                <li>5+ Task delivered one-by-one</li>
                <li>AI Blog Updates via dashboard & Slack</li>
                <li>7,700 3-5 day turnaround</li>
              </ul>
              <div className="text-center">
              <button type="button" className="btn btn-lg btn-outline-primary mx-auto">Get Started</button>
              <br/>
              <small className="text-muted ">Limited Offer</small>
              </div></div>
          </div>

          {/* Enterprise Plan */}
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal text-center">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title text-center">$599 <small className="text-muted">/ year</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>7-9 day turnaround</li>
                <li>6+ Naive development</li>
                <li>5+ Task delivered one-by-one</li>
                <li>AI Blog Updates via dashboard & Slack</li>
                <li>7,700 3-5 day turnaround</li>
              </ul>
              <div className="text-center">
              <button type="button" className="btn btn-lg btn-outline-primary mx-auto">Get Started</button>
              <br/>
              <small className="text-muted ">Limited Offer</small>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
