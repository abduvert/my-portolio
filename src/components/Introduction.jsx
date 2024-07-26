import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';
// Import the image
import pcImage from '../assets/pc.png';

function Introduction() {

  const handleDownload = () => {
    window.open("/Resume_AbdullahSajjad.pdf", "_blank");
  };


  return (
    <div className='main'>
      <div className="left">
        {/* <h4>This is</h4> */}
        <h1 className='name'>Abdullah Sajjad</h1>
        <h3 className='roles'>
          <Typewriter
            options={{
              strings: ['Flutter Developer', 'Aspiring ML Engineer'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
            }}
          />
        </h3>
        <div className="button">
          <button className='btn' onClick={handleDownload}>My Resume</button>
        </div>
      </div>
      <div className="right">
        {/* Use the imported image */}
        <img src={pcImage} alt="PC" />
      </div>
    </div>
  );
}

export default Introduction;
