import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>A Revolution in Plant Evolution</h1>
        <p>More resilient, sustainable and profitable crops– more efficiently than ever.</p>
        <button className="cta-button">Tour our crops</button>
      </div>
      <div className="hero-visual">
        <div className="decorative-elements">
          {/* SVG elements */}
        </div>
        <div className="hero-image">
          <img src="/farm-field.jpg" alt="Farm field" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
