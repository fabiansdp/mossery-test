import React from 'react';
import "../styles/Hero.css";
import { Link } from 'react-router-dom';

const Hero : React.FC = () => {
  return (
    <div id="hero-container">
      <div id="content-container">
        <h1>Thoughtful stationery that sparks creativity</h1>
        <button type="button" >
          <Link to="/personal" style={{ textDecoration: 'none' , width: "100%"}}>
            <b>Register</b>
          </Link>
        </button>
      </div>
      <div id="image-container">
        <img src="hero.png" alt="Stationery Image" />
      </div>
    </div>
  )
};

export default Hero;


