import React from 'react';

const Contact = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8" style={{height:"100vh"}}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <h3 className="fs-5 mb-2 text-secondary text-uppercase">Contact</h3>
            <h2 className="display-5 mb-4 mb-md-5 mb-xl-8">We're always on the lookout to work with new clients. Please get in touch in one of the following ways.</h2>
          </div>
        </div>
      </div>

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
          <input placeholder='Enter your Name'style={{width:"43vw"}} />
          <input placeholder='Enter your E-mail'style={{width:"44vw"}}/>
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
        <button>Send</button>
        <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
