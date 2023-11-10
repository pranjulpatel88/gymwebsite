import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header({ activePage, setActivePage }) {
  return (
    <header>
      <div className="header-content">
        <h1>fitnessclub</h1>
        <nav>
          <ul>
            <li><Link to="/" onClick={() => setActivePage('home')} className={activePage === 'home' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" onClick={() => setActivePage('about')} className={activePage === 'about' ? 'active' : ''}>About Us</Link></li>
            <li><Link to="/services" onClick={() => setActivePage('services')} className={activePage === 'services' ? 'active' : ''}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
