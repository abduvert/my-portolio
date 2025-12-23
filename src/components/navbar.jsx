import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className='navv glass-effect'>
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={showMenu ? 'show' : ''}>
        <li className="navitems" onClick={closeMenu}><a href="#home">Home</a></li>
        <li className="navitems" onClick={closeMenu}><a href="#skills">Skills</a></li>
        <li className="navitems" onClick={closeMenu}><a href="#projects">Experience</a></li>
        <li className="navitems" onClick={closeMenu}><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
