import React from 'react';
import '../App.css';

function Services() {
  return (
    <div className="page">
      <section className="services">
       <div className="services-content">
        <h2>Our Services</h2>
        <p>We offer a wide range of services including personal training, group classes, and more.</p>
       </div>
        <img src="/images/trainer.jpg" alt="Services" className="services-image" />
       
      </section>
    </div>
  );
}

export default Services;
