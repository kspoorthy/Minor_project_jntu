import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">AI CODE REVIEWER</span>
      </div>
      <ul className="navbar-right">
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About us</a></li>
        <li><a href="#upload" className={activeSection === 'upload' ? 'active' : ''}>Upload</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
