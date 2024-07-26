import React from 'react';
import '../App.css';

function Contact({ project }) {
  return (
    <div className='contactDiv'>
        <div className="contactleft">
            <h1>Contact me!</h1>
            <p>Whether you wish to discuss new ideas or have a project for me, email me on the below given address or contact me through socials present below.</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sajjadabdullah345@gmail.com" target='__blank'>Email me</a>
        </div>
        <div className="contactright">
            <img src="assets/contact.png" alt="" />
        </div>
    </div>
  );
}

export default Contact;
