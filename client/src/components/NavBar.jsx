import '../styles/navbar.css';
import logo from '../images/logo-icon.png';
import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollThreshold = 500;
    
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if (scrollY > scrollThreshold) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Run once in case the user starts mid-scroll (refresh)
        handleScroll();
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className='logo-section'>
                <a href='/'><img src={logo} className='logo-img'/></a>
            </div>
            <div className='tags-section'>
                <ul className='nav-list'>
                  <li><Link to="/#home">Home</Link></li>
                  <li><Link to="/#discover">Discover</Link></li>
                  <li><Link to="/plan">Plan</Link></li>
                  <li><Link to="/chatbot">ChatBot</Link></li>
                  <li><Link to="/#contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className='login-section'>
                <button className='login-button'>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;