import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.svg" alt="Farm to Cup" />
      </div>
      <div className="navbar-links">
        <a href="#products">Our Products</a>
        <a href="#mission">Our Mission</a>
        <button className="contact-btn">Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar;
