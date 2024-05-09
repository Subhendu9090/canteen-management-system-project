import React from 'react';
import './ContactForm.css'; // Import your CSS file for Contact Form section

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center contact-form-container">
      <div className='bg-green-600 w-[600px] p-3'>
      <h1 className="mt-2 text-3xl font-bold section-heading">Contact Form</h1>
      <p className="font-semibold section-subheading">Feel Free to Reach Out to Us</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" onClick={()=> alert("Your Response is Submitted")} className="submit-btn">Submit</button>
      </form>
      </div>
      
    </div>
  );
};

export default ContactForm;
