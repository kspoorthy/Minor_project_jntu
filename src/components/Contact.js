import React from 'react';
import './contact.css';
const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact Us</h2>
    <p>Reach out for demos, questions, or partnerships.</p>
    <form>
      <input type="text" placeholder="Your Name" /><br />
      <input type="email" placeholder="Your Email" /><br />
      <textarea placeholder="Your Message"></textarea><br />
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
