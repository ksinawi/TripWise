import '../styles/navbar.css';
import logo from '../images/logo-icon.png';

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
                    <li><a href='/'>Home</a></li>
                    <li><a href='#discover'>Discover</a></li>
                    <li><a href='#'>Plan</a></li>
                    <li><a href='/chatbot'>ChatBot</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </div>
            <div className='login-section'>
                <button className='login-button'>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;