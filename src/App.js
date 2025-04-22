import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Upload from './components/Upload';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
     <Navbar />
  
    <div className="app-wrapper">
     
      <Hero />
      <About />
      <Upload />
      </div>
      <ScrollToTop/>
     <div style={{ background: '#fff' }}>
     <Contact />
     </div>
      
     
     </>
  );
}

export default App;
