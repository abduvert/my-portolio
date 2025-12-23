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
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginTop: 0, color: 'var(--accent-primary)' }}>Get in Touch</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>I'll get back to you as soon as possible.</p>
        </div>

        <div className="input-group">
          <label>Name</label>
          <input
            className="input-field namee"
            type="text"
            name="user_name"
            placeholder="What's your name?"
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            className="input-field email"
            type="email"
            name="user_email"
            placeholder="What's your email?"
            required
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            className="input-field message"
            name="message"
            placeholder="How can I help you?"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {status && <div className="status-message">{status}</div>} {/* Display feedback */}
    </div>
  );
};
