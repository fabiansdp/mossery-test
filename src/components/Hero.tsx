import React from 'react';
import { useHistory } from 'react-router-dom';
import "../styles/Hero.css";
import FilledButton from "../components/FilledButton";

const Hero : React.FC = () => {
  const history = useHistory();

  return (
    <div id="hero-container">
      <div id="content-container">
        <h1>Thoughtful stationery that sparks creativity</h1>
        <FilledButton 
          name="Register"
          submit={false}
          handleClick={() => (history.push("/personal"))}
          background="black"
          width="50%"
          color="white"
        />
      </div>
      <div id="image-container">
        <img src="hero.png" alt="Stationery" />
      </div>
    </div>
  )
};

export default Hero;


