import React from 'react';
import "../styles/Hero.css";
import { Link } from 'react-router-dom';

const Hero : React.FC = () => {
  return (
    <div id="hero-container">
      <div id="content-container">
        <h1>Thoughtful stationery that sparks creativity</h1>
        <Link to="/personal">
          <button type="button">
            Register
          </button>
        </Link>
      </div>
      <div id="image-container">
        <img src="hero.png" alt="Stationery" />
      </div>
    </div>
  )
};

export default Hero;


