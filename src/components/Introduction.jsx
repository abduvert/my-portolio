import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';
// Import the image

import AboutHome from './About';

function Introduction() {

  const handleDownload = () => {
    window.open("/Abdullah_Sajjad_Flutter.pdf", "_blank");
  };


  return (
    <div className='main intro-wrapper'>
      <div className="left" style={{ position: 'relative' }}>
        <div className="name-trigger" style={{ paddingBottom: '10px', cursor: 'pointer' }}>
          <h1 className='name glitch' data-text="Abdullah Sajjad">Abdullah Sajjad</h1>
        </div>

        <div className="hover-hint">
          {/* Simple arrow icon or similar indicator */}
          <span style={{ color: 'var(--accent-primary)' }}>&#9650;</span>
          <span>Hover name to introduce</span>
        </div>

        <div className="about-reveal">
          <AboutHome />
        </div>

        <h3 className='roles'>
          <Typewriter
            options={{
              strings: ['Full-Stack Flutter Developer', 'NextJS Developer', 'UI/UX Designer'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
            }}
          />
        </h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button className='btn' onClick={handleDownload}>Resume</button>
          <a href="/contact" className='btn' style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>Contact Me</a>
        </div>
      </div>
      <div className="right">
        <img src="assets/pc.png" alt="Developer Workspace" />
      </div>
    </div>
  );
}

export default Introduction;
