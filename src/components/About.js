import React from 'react';
//import backgroundImage from '../assets/backgroundimage.jpg';
import './about.css';

const About = () => {
  return (
    <section
      id="about"
      className="about-section"
     // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="about-content">
        <h2>About AI Code Reviewer</h2>
        <p>
          Our AI reviews code for errors, complexity, and optimizations—
          helping developers write clean, efficient, and reliable code.
        </p>
      </div>
    </section>
  );
};

export default About;
