import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to Our Gym</h2>
          <p>Transform your body with our state-of-the-art facilities and expert trainers.</p>
          <Link to="/services" className="cta-button">Explore Services</Link>
        </div>
        <img src="/images/gym.jpg" alt="Gym" className="hero-image" />
      </section>
    </div>
  );
}

export default Home;
