import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navv'>
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li className="navitems"><Link to="/">Home</Link></li>
        <li className="navitems"><Link to="/skills">Skills</Link></li>
        <li className="navitems"><Link to="/projects">Experience</Link></li>
        <li className="navitems"><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
