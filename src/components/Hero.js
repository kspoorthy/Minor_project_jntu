import React from 'react';
import './hero.css';
import logo from '../assets/ai-logo.png';
//import backgroundImage from '../assets/backgroundimage.jpg';

const Hero = () => {
  const handleScroll = () => {
    const uploadSection = document.getElementById('upload');
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id="home"
      className="hero-section"
     // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <div className="text-column fade-section delay-1">
          <h2>AI CODE REVIEWER</h2>
          <div className="text-box fade-section delay-2">
            <h1>CODE SMARTER.<br />RUN FASTER.<br />FIX INSTANTLY</h1>
          </div>
          <button 
            className="review-button fade-section delay-3" 
            onClick={handleScroll}
          >
            REVIEW CODE
          </button>
        </div>

        <div className="image-column fade-section delay-4">
          <img src={logo} alt="AI Code Reviewer Logo" className="hero-logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
