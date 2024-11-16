import React from 'react';
import '../App.css';
import { ContactUs } from '../emailjs';

function Contact() {
  return (
    <div className='contactDiv'>
        <div className="contactleft">
            <h1>Contact me!</h1>
            <p>Whether you wish to discuss new ideas or have a project for me, email me on the below given address or contact me through socials present below.</p>
            <ContactUs></ContactUs>
        </div>
        <div className="contactright">
            <img src="assets/contact.png" alt="" />
        </div>
    </div>
  );
}

export default Contact;
