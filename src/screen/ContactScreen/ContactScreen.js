import React from "react";
import { Helmet } from "react-helmet";


const ContactScreen = () => {
  return <>
  <Helmet>
    <title>Recipe Veggie Contact</title>
  </Helmet>
    <div className="contact-hero container">
      <div className="contact-hero-text">
       <div className="contact-hero-title">
        <h2 className="contact-title">  
        Do you want to know more about our recipes
        </h2>
        <h4 className="contact-subtitle">
        For any type of information you can contact us via this form!
        </h4>
       </div>
      </div>
      <div className="contact-form-container container">
      <form
      action="https://formspree.io/f/mpzgojjv"
      method="POST"
      className="contact-form container">

      <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="input"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="cel"
                  id="telephone"
                  name="telephone"
                  className="input"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="recipe">what do you want to ask us?</label>
                <textarea
                  type="tel"
                  id="recipe"
                  name="recipe"
                  className="input"
                
                />
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
      </form>
      </div>
      <br></br>
      <br></br>
    </div>
  </>;
};

export default ContactScreen;