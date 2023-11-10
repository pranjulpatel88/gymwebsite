import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="page">
      <section className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>We are a state-of-the-art fitness center dedicated to helping you achieve your fitness goals.</p>
        </div>
        <img src="/images/services.jpg" alt="services" className="about-image" />
      </section>
    </div>
  );
}

export default About;
