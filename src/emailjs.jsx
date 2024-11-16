import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // For feedback messages

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('SERVICE_ID:', process.env.REACT_APP_SERVICE_ID);
    console.log('TEMPLATE_ID:', process.env.REACT_APP_TEMPLATE_ID);
    console.log('PUBLIC_KEY:', process.env.REACT_APP_PUBLIC_KEY);
    
    setStatus(null);

    emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID, // Correct way to access the environment variable
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      {
        publicKey: process.env.REACT_APP_PUBLIC_KEY, // Ensure correct usage
      }
    )
    .then(
      () => {
        setStatus('Email sent successfully!');
      },
      (error) => {
        setStatus(`Failed to send email. Error: ${error.text}`);
      }
    );
    };

  return (
    <div>
    <form ref={form} onSubmit={sendEmail} className="form-container">
  <label>Name</label>
  <input
    className="input-field namee"
    type="text"
    name="user_name" // This corresponds to {{from_name}} in the template
    placeholder="Enter your name"
    required
  />

  <label>Email</label>
  <input
    className="input-field email"
    type="email"
    name="user_email" // This corresponds to {{from_email}} in the template
    placeholder="Enter your email"
    required
  />

  <label>Message</label>
  <textarea
    className="input-field message"
    name="message" // This corresponds to {{message}} in the template
    placeholder="Your message"
    required
  ></textarea>

  <button type="submit" className="submit-btn">Send</button>
</form>

      {status && <div className="status-message">{status}</div>} {/* Display feedback */}
    </div>
  );
};
