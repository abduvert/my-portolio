import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <div className='navv'>
      <ul>
        <li className="navitems"><Link to="/">Home</Link></li>
        <li className="navitems"><Link to="/projects">Projects</Link></li>
        <li className="navitems"><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
