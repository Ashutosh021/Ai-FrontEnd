import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone,FaMailBulk } from "react-icons/fa";
import { MdOutlineMail ,MdOutlinePhone,MdLocalPostOffice,MdTimer} from "react-icons/md";

const Contact = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8" style={{}}>

      <div className="container">
        <div className="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <div className="col-12 col-lg-6">
      <div className="border overflow-hidden">
        <form action="#!">
          <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
            <div className="col-12">
              <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="fullname" name="fullname" required />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text">
                <MdOutlineMail />
                </span>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <div className="input-group">
                <span className="input-group-text">
                <MdOutlinePhone />
                </span>
                <input type="tel" className="form-control" id="phone" name="phone" />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="subject" className="form-label">Subject <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="subject" name="subject" required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
              <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
            </div>
            <div className="col-12">
              <div className="d-grid">
                <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};



const ContactDetails = () => {
  return (
    <div className="col-12 col-lg-6">
      <div className="row justify-content-xl-center">
        <div className="col-12 col-xl-11">
          <div className="mb-4 mb-md-5">
            <div className="mb-3 text-primary">
            <MdLocalPostOffice />
            </div>
            <div>
              <h4 className="mb-2">Office</h4>
              <p className="mb-2">Please visit us to have a discussion.</p>
              <hr className="w-50 mb-3 border-dark-subtle" />
              <address className="m-0 text-secondary"> KIET, Uttar Pardesh, India</address>
            </div>
          </div>
          <div className="row mb-sm-4 mb-md-5">
            <div className="col-12 col-sm-6">
              <div className="mb-4 mb-sm-0">
                <div className="mb-3 text-primary">
                <MdOutlinePhone />
                </div>
                <div>
                  <h4 className="mb-2">Phone</h4>
                  <p className="mb-2">Please speak with us directly.</p>
                  <hr className="w-75 mb-3 border-dark-subtle" />
                  <p className="mb-0">
                    <a className="link-secondary text-decoration-none" href="tel:+">0111101101</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="mb-4 mb-sm-0">
                <div className="mb-3 text-primary">
                <MdLocalPostOffice />
                </div>
                <div>
                  <h4 className="mb-2">Email</h4>
                  <p className="mb-2">Please write to us directly.</p>
                  <hr className="w-75 mb-3 border-dark-subtle" />
                  <p className="mb-0">
                    <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">demo@yourdomain.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-3 text-primary">
            <MdTimer />
            </div>
            <div>
              <h4 className="mb-2">Opening Hours</h4>
              <p className="mb-2">Explore our business opening hours.</p>
              <hr className="w-50 mb-3 border-dark-subtle" />
              <div className="d-flex mb-1">
                <p className="text-secondary fw-bold mb-0 me-5">Mon - Fri</p>
                <p className="text-secondary mb-0">9am - 5pm</p>
              </div>
              <div className="d-flex">
                <p className="text-secondary fw-bold mb-0 me-5">Sat - Sun</p>
                <p className="text-secondary mb-0">9am - 2pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;